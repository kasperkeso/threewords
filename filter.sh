#!/bin/bash
input="sanat"
echo \[ >> words.json
while IFS= read -r line
do
  if [[ $line =~ [äöÖÄ\'\\-\] ]]; then
    :
  else
    echo \"$line\"\, >> words.json
  fi
done < "$input"

echo \] >> words.json
