    import { attachNavigator } from 'https://krautzource.github.io/aria-tree-walker/treewalker.js';
    [...document.querySelectorAll('[role="tree"]')].filter( node => node.hasAttribute('data-owns')).forEach(attachNavigator);
