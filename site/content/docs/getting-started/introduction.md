---
layout: docs
title: Introduction
subtitle: 
titleBg: bg-success--xlight
group: getting-started
---

## Overview {.heading-xs .mt-6 .mb-2}

Neoblaze helps you quickly design web layouts. It helps build beautiful product faster with prebuilt components and can be extended with utilities.

It's responsive, customizable and it's cool.

## Quick start {.heading-xs .mt-6 .mb-2}

### NPM {.title-sm .mt-6 .mb-2}

Install the Neoblaze CSS npm package  by running `npm install neoblaze`.

```shell
npm install neoblaze
``` 


### CDN {.title-sm .mt-6 .mb-2}

You can get started quickly by including cdn link.


``` html
<link href='{{< param "cdn.css" >}}' rel="stylesheet" crossorigin="anonymous">
``` 

### Starter template {.title-sm .mt-6 .mb-2}
Use starter template for quick setup.

``` html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Neoblaze</title>
		<link rel="stylesheet" href='{{< param "cdn.css" >}}'>
	</head>
	<body>
	<section class="section">
		<div class="container mx-auto">
			<h1 class="heading">Hakuna Matata!</h1>
		</div>
	</section>
	</body>
</html>
``` 
