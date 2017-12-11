#!/bin/bash

DEV_START=DEV_START
DEV_END=DEV_END
PLATFORM=$(uname)

if [ "$#" -lt 1 ]; then
    echo "Required: folder to process .ts files"
    exit 1
fi

for i in $(find $1 -name *.ts)
do
    if [ ${PLATFORM} == "Darwin" ]; then
       sed -i "" "/$DEV_START/,/$DEV_END/d" $i
    else
       sed -i "/$DEV_START/,/$DEV_END/d" $i
    fi
done
