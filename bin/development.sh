#!/bin/sh

npm run build && NODE_ENV=development webpack && webpack-dev-server --content-base dist/ --hot --inline --devtool inline-source-map --history-api-fallback
