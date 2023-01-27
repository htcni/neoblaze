---
layout: docs
title: Spacing
subtitle: Utilities for controlling element margin and padding.
source: https://github.com/htcni/neoblaze/blob/main/src/scss/utilities/_spacing.scss
group: utilities
---

## Spacing {.heading-xs .mt-6 .mb-2}

{{< neoblaze_table >}}
Size | Value 
--- | --- |  
`0`  | 0px
`px` | 1px
`0.5` | 0.125rem - 2px
`1` | 0.25rem - 4px
`2` | 0.5rem - 8px
`3` | 0.75rem - 12px
`4` | 1rem - 16px
`5` | 1.25rem - 20px
`6` | 1.5rem - 24x
`7` | 1.5rem - 28x
`8` | 2rem - 32px
`9` | 2.25rem - 36px
`10` | 2.5rem - 40px
`12` | 3rem - 48px
`14` | 3.5rem - 56px
`16` | 4rem - 64px
`20` | 5rem - 80px
`24` | 6rem - 96px
`28` | 7rem - 112px
`32` | 8rem - 128px
`36` | 9rem - 144px
`40` | 10rem - 160px
`44` | 11rem - 176px
`48` | 12rem - 192px
`52` | 13rem - 208px
`56` | 14rem - 224px
`60` | 15rem - 240px
`64` | 16rem - 256px
`1/2` | 50%

{{< /neoblaze_table >}}

## Padding {.heading-xs .mt-6 .mb-2}

Use `p-{t|r|b|l}-{size}` to apply padding to an element.

{{< rawhtml >}}
<div class="d-flex flex-items-baseline gap-4 mt-8">
	<div class="p-2 rounded bg-secondary--light">
		<div class="p-4 rounded bg-secondary fg-white">p-2</div>
	</div>
	<div class="p-4 rounded bg-secondary--light">
		<div class="p-4 rounded bg-secondary fg-white">p-4</div>
	</div>
	<div class="pt-4 rounded bg-secondary--light">
		<div class="p-4 rounded bg-secondary fg-white">pt-4</div>
	</div>
	<div class="pr-4 rounded bg-secondary--light">
		<div class="p-4 rounded bg-secondary fg-white">pr-4</div>
	</div>
	<div class="pb-4 rounded bg-secondary--light">
		<div class="p-4 rounded bg-secondary fg-white">pb-4</div>
	</div>
	<div class="pl-4 rounded bg-secondary--light">
		<div class="p-4 rounded bg-secondary fg-white">pl-4</div>
	</div>
</div>
{{< /rawhtml >}}

``` html
<div class="d-flex">
	<div class="box p-4">p-2</div>
	<div class="box pt-4">pt-4</div>
	<div class="box pr-4">pr-4</div>
	<div class="box pb-4">pb-4</div>
	<div class="box pl-4">pl-4</div>
</div>
``` 

### Horizontal and Vertical sides {.title-sm .mt-6 .mb-2}

Use `.p-{x|y}-{size}` to apply padding on horizontal or vertical side.

{{< rawhtml >}}
<div class="d-flex flex-items-baseline gap-4 mt-8">
	<div class="px-4 rounded bg-secondary--light">
		<div class="p-4 rounded bg-secondary fg-white">px-4</div>
	</div>
	<div class="py-4 rounded bg-secondary--light">
		<div class="p-4 rounded bg-secondary fg-white">py-4</div>
	</div>
</div>
{{< /rawhtml >}}


``` html
<div class="d-flex">
	<div class="box px-4">px-4</div>
	<div class="box py-4">py-4</div>
</div>
``` 

## Margin {.heading-xs .mt-6 .mb-2}

Use `m-{t|r|b|l}-{size}` to apply margin to an element.

Size | Value 
--- | --- |  
`auto`  | margin:auto

{{< rawhtml >}}
<div class="d-flex flex-items-baseline gap-4 mt-8">
	<div class="rounded bg-warning--light">
		<div class="p-4 m-4 rounded bg-secondary fg-white">m-4</div>
	</div>
	<div class="rounded bg-warning--light">
		<div class="p-4 mt-4 rounded bg-secondary fg-white">mt-4</div>
	</div>
	<div class="rounded bg-warning--light">
		<div class="p-4 mr-4 rounded bg-secondary fg-white">mr-4</div>
	</div>
	<div class="rounded bg-warning--light">
		<div class="p-4 mb-4 rounded bg-secondary fg-white">mb-4</div>
	</div>
	<div class="rounded bg-warning--light">
		<div class="p-4 ml-4 rounded bg-secondary fg-white">ml-4</div>
	</div>
</div>
{{< /rawhtml >}}

``` html
<div class="d-flex">
	<div class="box m-4">m-2</div>
	<div class="box mt-4">mt-4</div>
	<div class="box mr-4">mr-4</div>
	<div class="box mb-4">mb-4</div>
	<div class="box ml-4">ml-4</div>
</div>
``` 


### Horizontal and Vertical sides {.title-sm .mt-6 .mb-2}

Use `m-{x|y}-{size}` to apply margin on horizontal or vertical side.

{{< rawhtml >}}
<div class="rounded bg-warning--light">
	<div class="p-4 max-width-8 mx-auto text-center rounded bg-secondary fg-white">mx-auto</div>
</div>
<div class="rounded bg-warning--light mt-4">
	<div class="p-4 mx-6 text-center rounded bg-secondary fg-white">mx-6</div>
</div>
{{< /rawhtml >}}


``` html
<div class="d-flex">
	<div class="box mx-auto">mx-auto</div>
	<div class="box mx-6">mx-6</div>
</div>
``` 


### Negative Margin {.title-sm .mt-6 .mb-2}

Use `-m-{t|r|b|l|x|y}-{size}` to apply negative margin.

{{< rawhtml >}}
<div class="d-flex flex-items-center flex-justify-center mt-8">
	<div class="width-8 height-10 rounded bg-secondary--light">
	</div>
	<div class="p-4 -ml-8 rounded bg-secondary fg-white">ml-8</div>
</div>
{{< /rawhtml >}}

``` html
<div class="d-flex">
	<div class="box -ml-8">-ml-8</div>
</div>
``` 

## Gap {.heading-xs .mt-6 .mb-2}

Use `gap-{size}` to control gutter between flexbox and grid.

{{< rawhtml >}}
<div class="d-flex flex-items-baseline gap-4 mt-8">
	<div class="p-4 rounded bg-secondary fg-white">gap-4</div>
	<div class="p-4 rounded bg-secondary fg-white">gap-4</div>
	<div class="p-4 rounded bg-secondary fg-white">gap-4</div>
	<div class="p-4 rounded bg-secondary fg-white">gap-4</div>
</div>
{{< /rawhtml >}}

``` html
<div class="d-flex gap-4">
	<div class="box">gap-4</div>
	<div class="box">gap-4</div>
	<div class="box">gap-4</div>
	<div class="box">gap-4</div>
</div>
``` 

### Row and Column gap {.title-sm .mt-6 .mb-2}

Use `gap-{x|y}-{size}` to set grid row and column gap.

{{< rawhtml >}}
<div class="d-grid grid-cols-2 gap-x-4 gap-y-8 mt-8">
	<div class="p-4 rounded bg-secondary fg-white">1</div>
	<div class="p-4 rounded bg-secondary fg-white">2</div>
	<div class="p-4 rounded bg-secondary fg-white">3</div>
	<div class="p-4 rounded bg-secondary fg-white">4</div>
</div>
{{< /rawhtml >}}

``` html
<div class="d-grid grid-cols-2 gap-x-4 gap-y-8">
	<div class="box">1</div>
	<div class="box">2</div>
	<div class="box">3</div>
	<div class="box">4</div>
</div>
``` 


## Resposive Spacing Utilities {.heading-xs .mt-6 .mb-2}

Use `{p|m}-{t|r|b|l|x|y}-{breakpoint}-{property}` for responsive variants of padding and margin like `m-md-4`, `px-md-4`.
Use `gap-{x|y}-{breakpoint}-{property}` for responsive variants of gap like `gap-md-4`, `gap-x-md-4`.

{{< rawhtml >}}
<div class="d-flex flex-items-baseline gap-4 mt-8">
	<div class="p-8 p-sm-4 rounded bg-secondary--light">
		<div class="p-4 rounded bg-secondary fg-white">p-sm-4</div>
	</div>
</div>
{{< /rawhtml >}}

``` html
<div class="d-flex">
	<div class="p-8 p-sm-4 box mx-auto">p-sm-4</div>
</div>
``` 


## SASS {.heading-xs .mt-6 .mb-2}

### Extending Spacing Scale {.title-sm .mt-6 .mb-2}

You can add your own spacing scale values by extending `$spacing` map in your own scss.

``` scss
// src/scss/utilities/_spacing.scss.scss

$spacing: (
	"px": 1px,
	"0": 0,
	"0\\.5": 0.125rem,
	"1": 0.25rem,
	"2": 0.5rem,
	"3": 0.75rem,
	"4": 1rem,
	"5": 1.25rem,
	"6": 1.5rem,
	"7": 1.75rem,
	"8": 2rem,
	"9": 2.25rem,
	"10": 2.5rem,
	"12": 3rem,
	"16": 4rem,
	"20": 5rem,
	"24": 6rem,
	"28": 7rem,
	"32": 8rem,
	"36": 9rem,
	"40": 10rem,
	"44": 11rem,
	"48": 12rem,
	"52": 13rem,
	"56": 14rem,
	"60": 15rem,
	"64": 16rem,
	"1\\/2": 50%,
);
```
