    import { attachNavigator } from 'https://krautzource.github.io/aria-tree-walker/treewalker.js';
    [...document.querySelectorAll('[data-treewalker]')].filter( node => node.hasAttribute('aria-owns')).forEach(attachNavigator);
