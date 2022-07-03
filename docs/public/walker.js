    import { attachNavigator } from 'https://cdn.skypack.dev/@krautzource/aria-tree-walker@3.3.0';
    [...document.querySelectorAll('[role="tree"]')].filter( node => node.hasAttribute('data-owns')).forEach(attachNavigator);
