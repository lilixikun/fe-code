const { cosmiconfigSync } = require('cosmiconfig');
const chalk = require('chalk');

const searchPlaces = [
  '.fecoderc',
  '.fecoderc.json',
  '.fecoderc.yaml',
  '.fecoderc.yml',
  '.fecoderc.js',
  '.fecoderc.cjs',
  'fe-code.config.js',
  'fe-code.config.cjs',
];

const defaultConfig = {
  url: 'http://localhost:3000',
  root: 'src',
  framework: [],
  useTypescript: true,
  language: 'zh-CN',
};

const loadConfig = () => {
  const explorer = cosmiconfigSync('fe-code', { searchPlaces });

  if (explorer.search()) {
    return explorer.search().config;
  }
  console.log(chalk.cyan('currently using the default configuration'));
  return defaultConfig;
};

module.exports = loadConfig;