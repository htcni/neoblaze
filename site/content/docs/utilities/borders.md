---
layout: docs
title: Borders
subtitle: Utilities for controlling borders.
source: https://github.com/htcni/neoblaze/blob/main/src/scss/utilities/_border.scss
group: utilities
---

## Border {.heading-xs .mt-6 .mb-2}

Use border utilities to apply border and border radius. `.border` apply border width to the element.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4">
	<span class="width-6 height-6 border bd-default"></span>
	<span class="width-6 height-6 border bd-black"></span>
	<span class="width-6 height-6 border bd-secondary"></span>
	<span class="width-6 height-6 border bd-primary"></span>
</div>
{{< /rawhtml >}}

``` html
<span class="border bd-default"></span>
<span class="border bd-black"></span>
<span class="border bd-primary"></span>
<span class="border bd-secondary"></span>
``` 

## Border width {.heading-xs .mt-6 .mb-2}

Use border utilities to apply border and border radius.

Class | Properties 
--- | --- |  
`border-0`  | 0px
`border`    | 1px 
`border-2`  | 2px - 0.125rem
`border-4`  | 4px - 0.25rem
`border-6`  | 6px - 0.375rem
`border-8`  | 8px - 0.5rem
`border-10` | 10px - 0.625rem


{{< rawhtml >}}
<div class="d-flex flex-items-center gap-8 mt-8">
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>border</code>
		<span class="width-6 height-6 border bd-secondary"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>border-2</code>
		<span class="width-6 height-6 border-2 bd-secondary"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>border-4</code>
		<span class="width-6 height-6 border-4 bd-secondary"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>border-6</code>
		<span class="width-6 height-6 border-6 bd-secondary"></span>
	</div>
</div>
{{< /rawhtml >}}

``` html
<span class="border bd-secondary"></span>
<span class="border-2 bd-secondary"></span>
<span class="border-4 bd-secondary"></span>
<span class="border-6 bd-secondary"></span>
``` 


### Individual sides {.title-sm .mt-6 .mb-2}

Borders can be applied to individual sides.
Use `.border-{side}-{width}` to apply border to particular side.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-8">
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>border-t-4</code>
		<span class="width-6 height-6 border-t-4 bg-default bd-secondary"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>border-r-4</code>
		<span class="width-6 height-6 border-r-4 bg-default bd-secondary"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>border-b-4</code>
		<span class="width-6 height-6 border-b-4 bg-default bd-secondary"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>border-l-4</code>
		<span class="width-6 height-6 border-l-4 bg-default bd-secondary"></span>
	</div>
</div>
{{< /rawhtml >}}


``` html
<span class="border-t-4 bd-secondary"></span>
<span class="border-r-4 bd-secondary"></span>
<span class="border-b-4 bd-secondary"></span>
<span class="border-l-4 bd-secondary"></span>
``` 


### Horizontal and Vertical sides {.title-sm .mt-6 .mb-2}

Use `.border-{x|y}-{width}` to apply border on horizontal or vertical side.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-8">
	<div class="d-flex flex-column gap-2">
		<code>border-x-4</code>
		<span class="width-6 height-6 border-x-4 bg-default bd-secondary"></span>
	</div>
	<div class="d-flex flex-column gap-2">
		<code>border-y-4</code>
		<span class="width-6 height-6 border-y-4 bg-default bd-secondary"></span>
	</div>
</div>
{{< /rawhtml >}}


``` html
<span class="border-x-4 bd-secondary"></span>
<span class="border-y-4 bd-secondary"></span>
``` 


##  Border radius {.heading-xs .mt-6 .mb-2}

Use `.rounded` to add border-radius.

Class | Properties 
--- | --- |  
`rounded-none`   | 0
`rounded`        | 6px 
`rounded-sm`     | 4px 
`rounded-md`    | 12px
`rounded-lg`    | 24px
`rounded-full`  | 999rem
`rounded-circle`| 50% 


{{< rawhtml >}}
<div class="d-flex flex-items-center gap-8 mt-8">
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>rounded</code>
		<span class="width-6 height-6 rounded bg-secondary"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>rounded-md</code>
		<span class="width-6 height-6 rounded-md bg-secondary"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>rounded-lg</code>
		<span class="width-6 height-6 rounded-lg bg-secondary"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>rounded-full</code>
		<span class="width-6 height-6 rounded-full bg-secondary"></span>
	</div>
</div>
{{< /rawhtml >}}

``` html
<span class="rounded"></span>
<span class="rounded-md"></span>
<span class="rounded-lg"></span>
<span class="rounded-full"></span>
``` 


###  Rounding Individual side {.title-sm .mt-6 .mb-2}

Use `.rounded-{side}-{size}` to apply rounded to particular side.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-8">
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>rounded-t-md</code>
		<span class="width-6 height-6 rounded-t-md bg-secondary"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>rounded-r-md</code>
		<span class="width-6 height-6 rounded-r-md bg-secondary"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>rounded-b-md</code>
		<span class="width-6 height-6 rounded-b-md bg-secondary"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>rounded-l-md</code>
		<span class="width-6 height-6 rounded-l-md bg-secondary"></span>
	</div>
</div>
{{< /rawhtml >}}

``` html
<span class="rounded-t-md"></span>
<span class="rounded-r-md"></span>
<span class="rounded-b-md"></span>
<span class="rounded-l-md"></span>
``` 


###  Rounding Individual corner {.title-sm .mt-6 .mb-2}

Use `.rounded-{corner}-{size}` to apply rounded to particular corner.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-8">
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>rounded-tl-md</code>
		<span class="width-6 height-6 rounded-tl-md bg-secondary"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>rounded-tr-md</code>
		<span class="width-6 height-6 rounded-tr-md bg-secondary"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>rounded-bl-md</code>
		<span class="width-6 height-6 rounded-bl-md bg-secondary"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>rounded-br-md</code>
		<span class="width-6 height-6 rounded-br-md bg-secondary"></span>
	</div>
</div>
{{< /rawhtml >}}

``` html
<span class="rounded-tl-md"></span>
<span class="rounded-tr-md"></span>
<span class="rounded-bl-md"></span>
<span class="rounded-br-md"></span>
``` 


##  Border color {.heading-xs .mt-6 .mb-2}

For border color see [colors]({{< ref "/docs/utilities/colors" >}}) utilities.

##  SASS {.heading-xs .mt-6 .mb-2}

Override the sass variables and maps in your scss file.

###  Border width {.title-sm .mt-6 .mb-2}

```  scss
	$border-width: (
	"0": 0,
	null: 1px,
	"2": 0.125rem,
	"4": 0.25rem,
	"6": 0.375rem,
	"8": 0.5rem,
	"10": 0.625rem,
);

``` 

###  Border radius {.title-sm .mt-6 .mb-2}

```  scss
	$border-radius-default: 6px;
	$border-radius-sm: 4px;
	$border-radius-md: 12px;
	$border-radius-lg: 24px;
	$border-radius-full: 999rem;
	$border-radius-circle: 50%;
	$border-radius-none: 0;
``` 