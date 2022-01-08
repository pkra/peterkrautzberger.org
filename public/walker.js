    import { attachNavigator } from 'https://cdn.skypack.dev/@krautzource/aria-tree-walker@^3.1.1';
    [...document.querySelectorAll('[role="tree"]')].filter( node => node.hasAttribute('data-owns')).forEach(attachNavigator);
