---
layout: docs
title: Shadows
subtitle: Utilities for controlling box shadow.
titleBg: bg-danger--xlight
group: utilities
---

## Shadow {.heading-sm .mt-6 .mb-4}

Use `.shadow` to apply box shadow to an element.

{{< rawhtml >}}
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

{{< /rawhtml >}}

{{< highlight html >}}
<div class="rounded width-6 height-6 shadow-sm"></div>
<div class="rounded width-6 height-6 shadow"></div>
<div class="rounded width-6 height-6 shadow-md"></div>
<div class="rounded width-6 height-6 shadow-lg"></div>
<div class="rounded width-6 height-6 shadow-xl"></div>
<div class="rounded width-6 height-6 shadow-inner"></div>
<div class="box rounded width-6 height-6 shadow-none"></div>
{{< /highlight >}}

##  SASS {.heading-sm .mt-6 .mb-4}
Override these sass variables in your scss file.

###  Variables {.heading-xs .mt-6 .mb-4}

{{< highlight scss >}}
	$shadow: 				rgba(0, 0, 0, 0.08) 0px 4px 12px;
	$shadow-sm: 		rgba(0, 0, 0, 0.05) 0px 1px 6px 0px;
	$shadow-md: 		rgba(0, 0, 0, 0.09) 0px 8px 16px;
	$shadow-lg: 		rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
									rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
									rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
	$shadow-xl: 		rgba(0, 0, 0, 0.2) 0px 20px 30px;
	$shadow-inner:	rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
									rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
	$shadow-none: 	none;

{{< /highlight >}}