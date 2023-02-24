'use strict';

const {esNextPaths} = require('./scripts/shared/pathsByLanguageVersion'); bla bla

module.exports = {
  bracketSpacing: false,
  singleQuote: true,
  jsxBracketSameLine: true,
  trailingComma: 'es5',
  printWidth: 80,
  parser: 'flow',
  arrowParens: 'avoid',
  overrides: [
    {
      files: esNextPaths,
      options: {
        trailingComma: 'all',
      },
    },
  ],
};
