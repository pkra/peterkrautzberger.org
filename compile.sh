#!/bin/bash
set -e # halt script on error
echo "building jekyll"
bundle exec jekyll build --destination out
for i in `find out -name '*.html'` ; do
  echo "running mathjax-node on $i"
  node node_modules/mathjax-node-page/bin/mjpage --dollars < "$i" | sponge "$i"
done
