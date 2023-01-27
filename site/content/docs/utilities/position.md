---
layout: docs
title: Position
subtitle: Utilities for controlling element's position.
source: https://github.com/htcni/neoblaze/blob/main/src/scss/utilities/_position.scss
group: utilities
---

## Position {.heading-xs .mt-6 .mb-2}

Use `position-{property}` utitlies to position element in the document.

Class | Properties 
--- | --- |  
`position-static`   | postion: static;
`position-fixed`    | postion: fixed;
`position-relative` | postion: relative;
`position-absolute` | postion: absolute;
`position-sticky`   | postion: sticky;


{{< rawhtml >}}
<div class="position-relative bg-secondary--xlight p-4 height-10 mt-8 rounded">
	<code>position-relative</code>
	<span class="p-4 bg-secondary position-absolute top-0 right-0 fg-white rounded">position-absolute</span>
</div>
{{< /rawhtml >}}

``` html
<div class="position-relative bg-secondary--xlight p-4 height-10">
	<span class="position-absolute top-0 right-0">position-absolute</span>
</div>
``` 

## Placement {.heading-xs .mt-6 .mb-2}

Use the `{top|right|bottom|left|inset|inset-x|inset-y}-{size}` utilities to position the element.

Scale | Value 
--- | --- |  
`px`    | 1px
`0`     | 0
`0.5`   | 0.125rem - 2px
`1`     | 0.25rem - 4px
`2`     | 0.5rem - 8px
`3`     | 0.75rem - 12px
`4`     | 1rem - 16px
`50`   | 50%;
`100`  | 100%;
`unset` | unset;

{{< rawhtml >}}
<div class="position-relative bg-secondary--xlight p-4 height-10 mt-8 rounded">
	<span class="width-2 height-2 d-flex flex-items-center flex-justify-center bg-secondary position-absolute top-0 left-0 fg-white rounded">1</span>
	<span class="width-2 height-2 d-flex flex-items-center flex-justify-center bg-secondary position-absolute top-0 right-0 fg-white rounded">2</span>
	<span class="width-2 height-2 d-flex flex-items-center flex-justify-center bg-secondary position-absolute bottom-0 left-0 fg-white rounded">3</span>
	<span class="width-2 height-2 d-flex flex-items-center flex-justify-center bg-secondary position-absolute bottom-0 right-0 fg-white rounded">4</span>
</div>
{{< /rawhtml >}}

``` html
<div class="position-relative bg-secondary--xlight p-4 height-10">
	<span class="position-absolute top-0 left-0">1</span>
	<span class="position-absolute top-0 right-0">2</span>
	<span class="position-absolute bottom-0 left-0">3</span>
	<span class="position-absolute bottom-0 right-0">4</span>
</div>
``` 

###  Negative Value {.title-sm .mt-6 .mb-2}

Add a dash `-{top|right|bottom|left|inset}-{size}` to use negative value.

{{< rawhtml >}}
<div class="position-relative bg-secondary--xlight p-4 width-6 height-6 rounded">
	<span class="p-4 bg-secondary position-absolute -top-4 -right-4 rounded"></span>
</div>
{{< /rawhtml >}}

``` html
<div class="position-relative bg-secondary--xlight p-4 width-6 height-6">
	<span class="position-absolute -top-4 -right-4"></span>
</div>
``` 

###  Translate {.title-sm .mt-6 .mb-2}

Use `translate` to center elements.

Class | Properties 
--- | --- |  
`translate`   | transform: translate(-50%, -50%);
`translate-x` | transform: translateX(-50%); 
`translate-y` | transform: translateY(-50%);


{{< rawhtml >}}
<div class="position-relative bg-secondary--xlight p-4 width-6 height-6 rounded mt-8">
	<span class="p-4 bg-secondary position-absolute translate-middle top-50 left-50 rounded"></span>
</div>
{{< /rawhtml >}}

``` html
<div class="position-relative bg-secondary--xlight p-4 width-6 height-6">
	<span class="position-absolute translate-middle top-50 left-50"></span>
</div>
``` 


## Resposive Position Utilities {.heading-xs .mt-6 .mb-2}

Use `position-{breakpoint}-{property}` for responsive position utility like `position-sm-relative`.
\
Use `top-{breakpoint}-{property}` for responsive variants like `top-md-1`, `top-sm-2`.


{{< rawhtml >}}
<div class="position-relative bg-secondary--xlight p-4 width-6 height-6 rounded">
	<span class="p-4 bg-secondary position-absolute translate-middle top-50 left-50 top-md-0 left-md-0 rounded"></span>
</div>

{{< /rawhtml >}}

``` html
<div class="position-relative bg-secondary--xlight p-4 width-6 height-68">
	<span class="position-absolute translate-middle top-50 left-50 top-md-0 left-md-0"></span>
</div>
``` 

## SASS {.heading-xs .mt-6 .mb-2}

### Extending Position  Scale{.title-sm .mt-6 .mb-2}

You can add your own position scale values by extending `$position-values` map in your own scss.

``` scss
// src/scss/utilities/_position.scss.scss

$position-values: (
	"px": 1px,
	"0": 0,
	"0\\.5": 0.125rem,
	"1": 0.25rem,
	"2": 0.5rem,
	"3": 0.75rem,
	"4": 1rem,
	"50": 50%,
	"100": 100%,
	"unset": unset,
);
```
