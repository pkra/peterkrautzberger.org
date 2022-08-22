"use strict";
/*

Wraps detected TeX in custom tags.


Based on https://github.com/tani/markdown-it-mathjax3  @ v2.2.0


The MIT License (MIT)

Copyright (c) 2016 Waylon Flinn
Copyright (c) 2020 TANIGUCHI Masaya
Copyright (c) 2022 Peter KRAUTZBERGER

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
*/

// Test if potential opening or closing delimiter
// Assumes that there is a "$" at state.src[pos]
function isValidDelim(state, pos) {
    let max = state.posMax, can_open = true, can_close = true;
    const prevChar = pos > 0 ? state.src.charCodeAt(pos - 1) : -1, nextChar = pos + 1 <= max ? state.src.charCodeAt(pos + 1) : -1;
    // Check non-whitespace conditions for opening and closing, and
    // check that closing delimeter isn't followed by a number
    if (prevChar === 0x20 /* " " */ ||
        prevChar === 0x09 /* \t */ ||
        (nextChar >= 0x30 /* "0" */ && nextChar <= 0x39) /* "9" */) {
        can_close = false;
    }
    if (nextChar === 0x20 /* " " */ || nextChar === 0x09 /* \t */) {
        can_open = false;
    }
    return {
        can_open: can_open,
        can_close: can_close,
    };
}
function math_inline(state, silent) {
    if (state.src[state.pos] !== "$") {
        return false;
    }
    let res = isValidDelim(state, state.pos);
    if (!res.can_open) {
        if (!silent) {
            state.pending += "$";
        }
        state.pos += 1;
        return true;
    }
    // First check for and bypass all properly escaped delimieters
    // This loop will assume that the first leading backtick can not
    // be the first character in state.src, which is known since
    // we have found an opening delimieter already.
    const start = state.pos + 1;
    let match = start;
    while ((match = state.src.indexOf("$", match)) !== -1) {
        // Found potential $, look for escapes, pos will point to
        // first non escape when complete
        let pos = match - 1;
        while (state.src[pos] === "\\") {
            pos -= 1;
        }
        // Even number of escapes, potential closing delimiter found
        if ((match - pos) % 2 == 1) {
            break;
        }
        match += 1;
    }
    // No closing delimter found.  Consume $ and continue.
    if (match === -1) {
        if (!silent) {
            state.pending += "$";
        }
        state.pos = start;
        return true;
    }
    // Check if we have empty content, ie: $$.  Do not parse.
    if (match - start === 0) {
        if (!silent) {
            state.pending += "$$";
        }
        state.pos = start + 1;
        return true;
    }
    // Check for valid closing delimiter
    res = isValidDelim(state, match);
    if (!res.can_close) {
        if (!silent) {
            state.pending += "$";
        }
        state.pos = start;
        return true;
    }
    if (!silent) {
        const token = state.push("math_inline", "math", 0);
        token.markup = "$";
        token.content = state.src.slice(start, match);
    }
    state.pos = match + 1;
    return true;
}
function math_block(state, start, end, silent) {
    let next, lastPos;
    let found = false, pos = state.bMarks[start] + state.tShift[start], max = state.eMarks[start], lastLine = "";
    if (pos + 2 > max) {
        return false;
    }
    if (state.src.slice(pos, pos + 2) !== "$$") {
        return false;
    }
    pos += 2;
    let firstLine = state.src.slice(pos, max);
    if (silent) {
        return true;
    }
    if (firstLine.trim().slice(-2) === "$$") {
        // Single line expression
        firstLine = firstLine.trim().slice(0, -2);
        found = true;
    }
    for (next = start; !found;) {
        next++;
        if (next >= end) {
            break;
        }
        pos = state.bMarks[next] + state.tShift[next];
        max = state.eMarks[next];
        if (pos < max && state.tShift[next] < state.blkIndent) {
            // non-empty line with negative indent should stop the list:
            break;
        }
        if (state.src.slice(pos, max).trim().slice(-2) === "$$") {
            lastPos = state.src.slice(0, max).lastIndexOf("$$");
            lastLine = state.src.slice(pos, lastPos);
            found = true;
        }
    }
    state.line = next + 1;
    const token = state.push("math_block", "math", 0);
    token.block = true;
    token.content =
        (firstLine && firstLine.trim() ? firstLine + "\n" : "") +
            state.getLines(start + 1, next, state.tShift[start], true) +
            (lastLine && lastLine.trim() ? lastLine : "");
    token.map = [start, state.line];
    token.markup = "$$";
    return true;
}
module.exports = function (md, options) {
    // Default options
    options = options || {};
    // set MathJax as the renderer for markdown-it-simplemath
    md.inline.ruler.after("escape", "math_inline", math_inline);
    md.block.ruler.after("blockquote", "math_block", math_block, {
        alt: ["paragraph", "reference", "blockquote", "list"],
    });
    md.renderer.rules.math_inline = function (tokens, idx) {
        options.display = false;
        return `<tex-inline>${tokens[idx].content.replace(/</g, '\\lt ').replace(/>/g, '\\gt ')}</tex-inline>`;
    };
    md.renderer.rules.math_block = function (tokens, idx) {
        options.display = true;
        return `<tex-block>${tokens[idx].content.replace(/</g, '\\lt ').replace(/>/g, '\\gt ')}</tex-block>`;
    };
    const render = md.renderer.render.bind(md.renderer);
    md.renderer.render = function (tokens, options, env) {
        const result = render(tokens, options, env);
        const noMath = tokens.every(function isNotMath(token) {
        return token.tag !== "math" && (Array.isArray(token.children) ? token.children.every(isNotMath) : true);
        });
        if (!noMath) {
            // const styleSheet = adaptor.textContent(svg.styleSheet(mathDocument));
            // return `${result}<style>${styleSheet}</style>`;
        }
        return result;
    };
};
