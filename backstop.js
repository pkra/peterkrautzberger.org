const backstop = require('backstopjs');
const INPUT = process.argv[3].substring(5);
const FOLDER = INPUT.replace(/[\/\.]/g, '_')
const config = {
    id: INPUT,
    viewports: [
        {
            name: 'base',
            width: 800,
            height: 10000,
        },
    ],
    scenarios: [
        {
            label: 'base',
            url: `http://localhost:5000/${INPUT}`,
            hideSelectors: [],
            removeSelectors: [],
            selectorExpansion: true,
            selectors: 'article > *',
            misMatchThreshold: 0.01,
        },
    ],
    paths: {
        bitmaps_reference: `./backstop_data/${FOLDER}/bitmaps_reference`,
        bitmaps_test: `./backstop_data/${FOLDER}/bitmaps_test`,
        html_report: `./backstop_data/${FOLDER}/html_report`,
    },
    engine: 'puppeteer',
    "report": [],
}

console.log(INPUT, FOLDER)
backstop(process.argv[2], { config: config });

