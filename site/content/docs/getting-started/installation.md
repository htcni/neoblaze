---
layout: docs
title: Installation
subtitle: 
titleBg: bg-danger--xlight
group: getting-started
---

## Get Started {.heading-sm .mt-6 .mb-4}

Neoblaze framework is built with SASS preprocessor. Neoblaze has responsive utility classes that increase its size.
For optimized production build please follow below steps.

### Requirements {.heading-xs .mt-6 .mb-4}

You will need following to be installed.

1. [Node](https://nodejs.org/en/)
2. [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Installation {.heading-xs .mt-6 .mb-4}

It is recommended to use npm to install neoblaze.

### Step 1 {.title-sm .mt-6 .mb-2 .fg-secondary}

Intialize `package.json` in your project.

{{< highlight js >}}
npm init -y
{{< /highlight >}}

### Step 2 {.title-sm .mt-6 .mb-2 .fg-secondary}

Install neoblaze.

{{< highlight js >}}
npm install -D neoblaze
{{< /highlight >}}


### Step 3 {.title-sm .mt-6 .mb-2 .fg-secondary}

Install all dependencies.

{{< highlight js >}}
npm install -D sass postcss autoprefixer @fullhuman/postcss-purgecss npm-run-all clean-css-cli
{{< /highlight >}}

You will need all these tools for optimized production build.

1. Sass - To compile and generate css
2. postcss - for css transformation / autoprefixer
3. npm-run-all - run multiple npm scripts
4. Purge css  - remove unused css classes and optimization
5. clean-css - css minifier

### Step 4 {.title-sm .mt-6 .mb-2 .fg-secondary}

Import neoblaze in your main scss file.

{{< highlight scss >}}
project/
├── scss/
│   ├── main.scss
├── css/  //compiled css
├── postcss.config.js
├── package.json

@forward 'node_modules/neoblaze/src/scss/neoblaze.scss';

{{< /highlight >}}

You can also individually import modules that you need.

{{< highlight scss >}}
//scss/main.scss

@forward 'node_modules/neoblaze/src/scss/layouts';
@forward 'node_modules/neoblaze/src/scss/utilities/grid';
{{< /highlight >}}


### Step 6 {.title-sm .mt-6 .mb-2 .fg-secondary}

Configure npm scripts in `package.json`.

{{< highlight json >}}
//package.json

	"scripts": {
		"start": "npm-run-all watch",
		"watch": "npm-run-all --parallel watch:*",
		"build": "npm-run-all build:*",
		"watch:sass": "sass --no-source-map --watch scss/main.scss:css",
		"compile:sass": "sass --no-source-map scss/main.scss:css/",
		"css:postcss": "postcss css/*.css -r --no-map",
    "css:minify": "cleancss -o css/main.css css/main.css",
		"build:css": "npm-run-all compile:sass css:postcss css:minify"
	},
{{< /highlight >}}

### Step 7 {.title-sm .mt-6 .mb-2 .fg-secondary}

Configure `postcss.config.js`

{{< highlight js >}}
//postcss.config.js

const purgecss = require("@fullhuman/postcss-purgecss");
module.exports = {
	plugins: [
		require("autoprefixer"),
		purgecss({
			content: ["./<path to your html or template files>/**/*.html"], 
		}),
	],
};

{{< /highlight >}}


### Step 7 {.title-sm .mt-6 .mb-2 .fg-secondary}

Run npm start

{{< highlight js >}}
npm start
{{< /highlight >}}

### Step 8 {.title-sm .mt-6 .mb-2 .fg-secondary}
Build for production.

{{< highlight js >}}
npm run build
{{< /highlight >}}