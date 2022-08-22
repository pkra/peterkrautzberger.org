#!/bin/bash

# Open reports for failed backstop tests

grep '"status": "fail"' -rlw backstop_data --include config.js | while read n; do 
    echo $(dirname $n)
  google-chrome "$(dirname $n)"/index.html
  if [[ "$n" == "Pqr def" ]]; then
      echo "--- $n was found at line $i"
  fi    
  i=$(($i+1)); 
done
