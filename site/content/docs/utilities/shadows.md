---
layout: docs
title: Shadows
subtitle: Utilities for controlling box shadow.
titleBg: bg-danger--xlight
group: utilities
---

## Shadow {.heading-xs .mt-6 .mb-2}

Use `.shadow` to apply box shadow to an element.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-8 mt-8">
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>shadow-sm</code>
		<span class="rounded width-6 height-6 shadow-sm"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>shadow</code>
		<span class="rounded width-6 height-6 shadow"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>shadow-md</code>
		<span class="rounded width-6 height-6 shadow-md"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>shadow-lg</code>
		<span class="rounded width-6 height-6 shadow-lg"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>shadow-xl</code>
		<span class="rounded width-6 height-6 shadow-xl"></span>
	</div>	
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>shadow-inner</code>
		<span class="rounded width-6 height-6 shadow-inner"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>shadow-none</code>
		<span class="box rounded width-6 height-6 shadow-none"></span>
	</div>
</div>
{{< /rawhtml >}}



``` html
<div class="rounded width-6 height-6 shadow-sm"></div>
<div class="rounded width-6 height-6 shadow"></div>
<div class="rounded width-6 height-6 shadow-md"></div>
<div class="rounded width-6 height-6 shadow-lg"></div>
<div class="rounded width-6 height-6 shadow-xl"></div>
<div class="rounded width-6 height-6 shadow-inner"></div>
<div class="box rounded width-6 height-6 shadow-none"></div>
``` 

## Color {.heading-xs .mt-6 .mb-2}

Use `.shadow-{color}` to apply box shadow color to an element.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-8 mt-8">
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>shadow-sm</code>
		<span class="rounded width-6 height-6 shadow-sm shadow-secondary bg-secondary"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>shadow</code>
		<span class="rounded width-6 height-6 shadow shadow-secondary bg-secondary"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>shadow-md</code>
		<span class="rounded width-6 height-6 shadow-md shadow-secondary bg-secondary"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>shadow-lg</code>
		<span class="rounded width-6 height-6 shadow-lg shadow-secondary bg-secondary"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>shadow-xl</code>
		<span class="rounded width-6 height-6 shadow-xl shadow-secondary bg-secondary"></span>
	</div>	
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>shadow-inner</code>
		<span class="rounded width-6 height-6 shadow-inner shadow-secondary"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>shadow-none</code>
		<span class="box rounded width-6 height-6 shadow-none"></span>
	</div>
</div>
{{< /rawhtml >}}

``` html
<div class="rounded width-6 height-6 shadow-sm shadow-secondary"></div>
<div class="rounded width-6 height-6 shadow shadow-secondary"></div>
<div class="rounded width-6 height-6 shadow-md shadow-secondary"></div>
<div class="rounded width-6 height-6 shadow-lg shadow-secondary"></div>
<div class="rounded width-6 height-6 shadow-xl shadow-secondary"></div>
<div class="rounded width-6 height-6 shadow-inner shadow-secondary"></div>
<div class="box rounded width-6 height-6 shadow-none shadow-secondary"></div>
``` 


##  SASS {.heading-xs .mt-6 .mb-2}
Override these sass variables in your scss file.

###  Variables {.title-sm .mt-6 .mb-2}

```  scss
	$default-shadow-color: rgb(0, 0, 0);
	//shadow
	$shadow-offset: 0px 4px 12px;
	$shadow-opacity: 0.08;
	//sm
	$shadow-sm-offset: 0px 1px 6px;
	$shadow-sm-opacity: 0.05;
	//md
	$shadow-md-offset: 0px 8px 16px;
	$shadow-md-opacity: 0.09;
	//lg
	$shadow-lg-offset: 0px 12px 28px;
	$shadow-lg-opacity: 0.15;
	//xl
	$shadow-xl-offset: 0px 20px 30px;
	$shadow-xl-opacity: 0.2;
	// inner
	$shadow-inner-offset: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
		0px 0px 0px 1px;
	$shadow-inner-opacity: 0.9;
``` 