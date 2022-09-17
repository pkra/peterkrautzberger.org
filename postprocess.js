const fs = require('fs');
const crypto = require('crypto');
const { execSync } = require('child_process')

const { parseHTML } = require('linkedom');

const mjenrich = require('./tex2svg-tree.js');

const getRenderedEquation = async (equations, node) => {
    const eqnHash = crypto
        .createHash('md5')
        .update(node.outerHTML.replace(/(\s*\n\s*)/g, ' ').trim())
        .digest('hex');
    if (!equations[eqnHash]) equations[eqnHash] = await mjenrich(node.textContent, (node.tagName === 'TEX-BLOCK'));
    return equations[eqnHash];
}

const main = async (equations, htmlFileName) => {
    if (!htmlFileName) return;
    const htmlString = fs.readFileSync(htmlFileName).toString();
    const { document } = parseHTML(htmlString);
    for (let node of document.querySelectorAll('tex-block, tex-inline')) node.outerHTML = await getRenderedEquation(equations, node);
    fs.writeFileSync(htmlFileName, document.toString());
}

(async () => {
    let equations = {};
    if (process.argv[2] !== 'reset') {
        try { equations = require('./equations.json'); }
        catch (e) { console.log('no equations store found; regenerating') };
    }
    else console.log('regenerating all equations');
    const htmlFiles = execSync('find docs -name *.html').toString().split('\n');
    for (let file of htmlFiles) await main(equations, file);
    fs.writeFileSync('./equations.json', JSON.stringify(equations, null, 2))
})();
