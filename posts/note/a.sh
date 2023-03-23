#!/bin/bash

for file in $(find . -type f -name "*.md");do
    title=${file##*.}
    echo $title
    echo $file
done
