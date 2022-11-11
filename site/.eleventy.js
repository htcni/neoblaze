const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true,
};

const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/scss/');
  eleventyConfig.addPassthroughCopy('./src/css');
  // Watch CSS files for changes
  eleventyConfig.setBrowserSyncConfig({
    files: './public/css/**/*.css',
  });
  eleventyConfig.setLibrary('md', markdownLib);
  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
  //markdown
};
