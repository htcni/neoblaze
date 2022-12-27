---
layout: docs
title: Introduction
subtitle: 
titleBg: bg-success--xlight
group: getting-started
---

## Overview {.heading-sm .mt-6 .mb-4}

Neoblaze helps you quickly design web layouts. It helps build beautiful product faster with prebuilt components and can be extended with utilities.

It's responsive, customizable and it's cool.

## Quick start {.heading-sm .mt-6 .mb-4}

### CDN {.heading-xs .mt-6 .mb-4}

{{< callout type="tip" >}}
For detailed installation see [installation guide]({{< ref "/docs/getting-started/installation" >}})
{{< /callout >}}

You can get started quickly by including cdn link.


{{< highlight html >}}
<link href="{{ $.Site.Params.css }}" rel="stylesheet" crossorigin="anonymous">
{{< /highlight >}}

### Starter template {.heading-xs .mt-6 .mb-4}
Use starter template for quick setup.

{{< highlight html >}}
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Neoblaze</title>
		<link rel="stylesheet" href={{ $.Site.Params.description }}>
	</head>
	<body>
	<section class="section">
		<div class="container">
			<h1 class="heading">Hakuna Matata!</h1>
		</div>
	</section>
	</body>
</html>
{{< /highlight >}}
