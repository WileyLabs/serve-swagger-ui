#!/usr/bin/env node

/**
 * @copyright 2020 John Wiley & Sons, Inc.
 * @license MIT
 **/

const path = require('path');

const express = require('express')
const app = express()

const argv = require('yargs')
  .scriptName('serve-swagger-ui')
  .usage('$0 [directory] [args]', 'Serve Swagger-UI', (yargs) => {
    yargs.positional('directory', {
      describe: 'A directory from which to serve spec files',
      type: 'string',
      default: process.cwd()
    })
  })
  .options({
    'p': {
      alias: 'port',
      describe: 'Port number to serve on',
      type: 'number',
      default: 3000
    }
  })
  .help()
  .argv;

app.use(express.static(path.join(__dirname, 'node_modules/swagger-ui-dist/')))

app.use(express.static(argv.directory))

app.listen(argv.port)

console.info(`Visit http://localhost:${argv.port}/`);
console.info(`Serving spec files from ${argv.directory}`);
