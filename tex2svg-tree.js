const sre = require('speech-rule-engine');

// TeX to MathML
const TeX = require('mathjax-full/js/input/tex.js').TeX;
const HTMLDocument = require('mathjax-full/js/handlers/html/HTMLDocument.js')
  .HTMLDocument;
const liteAdaptor = require('mathjax-full/js/adaptors/liteAdaptor.js')
  .liteAdaptor;
const STATE = require('mathjax-full/js/core/MathItem.js').STATE;
const AllPackages = require('mathjax-full/js/input/tex/AllPackages.js').AllPackages.filter(
  (x) => x !== 'bussproofs' && x !== 'textmacros'
); // NOTE bussproofs needs getBBox() method, text macros and we don't need it
const tex = new TeX({ packages: AllPackages });
const html = new HTMLDocument('', liteAdaptor(), { InputJax: tex });
const MmlVisitor = require('mathjax-full/js/core/MmlTree/SerializedMmlVisitor.js')
  .SerializedMmlVisitor;
const visitor = new MmlVisitor();
const toMathML = (node) => visitor.visitTree(node, html);

const tex2mml = (string, display) => {
  return toMathML(
    html.convert(string || '', { display: display, end: STATE.CONVERT })
  );
};


// MathML to SVG / CHTML
const mathjax = require('mathjax-full/js/mathjax.js').mathjax;
const MathML = require('mathjax-full/js/input/mathml.js').MathML;
const SVG = require('mathjax-full/js/output/svg.js').SVG;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const jsdomadaptor = require('mathjax-full/js/adaptors/jsdomAdaptor.js')
  .jsdomAdaptor;
const RegisterHTMLHandler = require('mathjax-full/js/handlers/html.js')
  .RegisterHTMLHandler;
const adaptor = jsdomadaptor(JSDOM);
RegisterHTMLHandler(adaptor);
const mml = new MathML();
const svg = new SVG({
  displayOverflow: 'overflow',
  linebreaks: {
    inline: false,
  }
});

const svghtml = mathjax.document('', { InputJax: mml, OutputJax: svg });

const rewrite = require('@krautzource/sre-to-tree');

const mjenrich = async (texstring, displayBool) => {

  const mml = tex2mml(texstring, displayBool);
  await sre.engineReady();
  await sre.setupEngine({
    domain: 'mathspeak',
    style: 'default',
    locale: 'en',
    speech: 'deep',
    structure: true,
    mode: 'sync',
    modality: 'speech',
  });
  await sre.engineReady();
  const enrichedMml = await sre.toEnriched(mml).toString();
  const mjx = svghtml.convert(enrichedMml, {
    em: 16,
    ex: 8,
    containerWidth: 80 * 16,
  });
  // switch SRE to Braille
  await sre.setupEngine({
    domain: 'default',
    style: 'default',
    locale: 'nemeth',
    modality: 'braille',
    speech: 'deep',
    structure: true,
    mode: 'sync',
  });
  await sre.engineReady();
  const enrichedMmlBraille = await sre.toEnriched(mml).toString();
  const dom = new JSDOM(`<!DOCTYPE html>${enrichedMmlBraille}`);
  const brailleDoc = dom.window.document;

  // crossing the streams... cf. zorkow/speech-rule-engine#438
  mjx.querySelectorAll('[data-semantic-speech]').forEach((node) => {
    node.setAttribute(
      'data-semantic-braille',
      brailleDoc
        .querySelector(
          '[data-semantic-id="' + node.getAttribute('data-semantic-id') + '"]'
        )
        .getAttribute('data-semantic-speech')
    );
  });

  const svgnode = mjx.firstElementChild;
  if (svgnode.querySelector('[data-semantic-owns]')) rewrite(svgnode);
  else {
    svgnode.setAttribute('aria-label', svgnode.querySelector('[data-semantic-speech]').getAttribute('data-semantic-speech'));
    svgnode.setAttribute('aria-braillelabel', svgnode.querySelector('[data-semantic-braille]').getAttribute('data-semantic-braille'));
  }
  svgnode.insertAdjacentHTML('afterend', `<span aria-hidden="true" class="visually-hidden">${texstring}</span>`);
  return mjx.outerHTML;
};

module.exports = mjenrich;
