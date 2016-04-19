#!/bin/sh

npm run build && NODE_ENV=production webpack -p && NODE_ENV=production node app.js
