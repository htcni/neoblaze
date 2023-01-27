---
layout: docs
title: Typography
subtitle: Utilities for controlling text.
source: https://github.com/htcni/neoblaze/blob/main/src/scss/utilities/_typography.scss
group: utilities
---

## Font Family {.heading-xs .mt-6 .mb-2}

Neoblaze is shipped with three fonts.

Class | Properties 
--- | --- |  
`font-primary`   | font-family: "Inter", sans-serif;
`font-secondary` | font-family: system-ui, "Segoe UI";; 
`font-tertiary`  | font-family: "Fira Code", monospace;

{{< rawhtml >}}
<div class="mt-8">
	<h3 class=" title-sm font-primary">Awesome CSS</h3>
	<h3 class=" title-sm font-secondary">Awesome CSS</h3>
	<p class=" title-sm font-tertiary">Awesome CSS</p>
</div>
{{< /rawhtml >}}

``` html
<h3 class="font-primary">Awesome CSS</h3>
<h3 class="font-secondary">Awesome CSS</h3>
<p class="font-tertiary">Awesome CSS</p>
``` 

## Font Style {.heading-xs .mt-6 .mb-2}

Utilities for controlling the text style. For responsive variant use `font-{breakpoint}-{property}` like `font-sm-italic`.

Class | Properties 
--- | --- |  
`font-italic` | font-style: italic;
`font-normal` | font-style: normal; 

{{< rawhtml >}}
<div class="mt-8">
	<p class="label-md font-italic">Awesome CSS</p>
</div>
{{< /rawhtml >}}

``` html
<p class="font-italic">Awesome CSS</p>
``` 

## Font Weight {.heading-xs .mt-6 .mb-2}

Utilities for controlling the font weight of an element. For responsive variant use `font-{breakpoint}-{property}` like `font-sm-thin`.

Class | Properties 
--- | --- |  
`font-thin`   | font-weight: 100;
`font-xlight` | font-weight: 200; 
`font-light`  | font-weight: 300; 
`font-normal` | font-weight: 400; 
`font-medium` | font-weight: 500; 
`font-sbold`  | font-weight: 600; 
`font-bold`   | font-weight: 700; 
`font-xbold`  | font-weight: 800; 
`font-black`  | font-weight: 900; 

{{< rawhtml >}}
<div class="mt-8">
	<p class="label-md font-bold">Awesome CSS</p>
</div>
{{< /rawhtml >}}

``` html
<p class="font-bold">Awesome CSS</p>
``` 

## Letter Spacing {.heading-xs .mt-6 .mb-2}

Use `tracking-{property}` to control space between characters.
For responsive variant use `tracking-{breakpoint}-{property}` like `tracking-sm-tight`.

Class | Properties 
--- | --- |  
`tracking-tightest`| letter-spacing: -0.055em;
`tracking-tighter` | letter-spacing: -0.033em; 
`tracking-tight`   | letter-spacing: -0.011em; 
`tracking-normal`  | letter-spacing: 0; 
`tracking-wide`    | letter-spacing: 0.011em; 
`tracking-wider`   | letter-spacing: 0.033em; 
`tracking-widest`  | letter-spacing: 0.055em; 

{{< rawhtml >}}
<div class="mt-8">
	<p class="label-md tracking-wide">Awesome CSS</p>
</div>
{{< /rawhtml >}}

``` html
<p class="tracking-wide">Awesome CSS</p>
``` 

## Line Height {.heading-xs .mt-6 .mb-2}

Use `leading-{property}` to change line height of an element.
For responsive variant use `leading-{breakpoint}-{property}` like `leading-sm-normal`.

Class | Properties 
--- | --- |  
`leading-dense`   | line-height: 0.8;
`leading-base`    | line-height: 1; 
`leading-none`    | line-height: 0; 
`leading-normal`  | line-height: 1.125; 
`leading-relaxed` | line-height: 1.14; 
`leading-spacious`| line-height: 1.4; 
`leading-loose`   | line-height: 1.8; 

{{< rawhtml >}}
<div class="mt-8 box p-4">
	<p class="label-md leading-loose">In the science fiction books I read as a kid, reading had often been replaced by some more efficient way of acquiring knowledge. Mysterious "tapes" would load it into one's brain like a program being loaded into a computer. Paul G</p>
</div>
{{< /rawhtml >}}

``` html
<p class="leading-loose">In the science fiction books...</p>
``` 

## Line Length {.heading-xs .mt-6 .mb-2}

Use `measure-{property}` to set the line length.
For responsive variant use `measure-{breakpoint}` like `measure-sm-wide`.

Class | Properties 
--- | --- |  
`measure-narrow`   | max-width: 55ch;
`measure`          | max-width: 65ch; 
`measure-wide`     | max-width: 75ch; 

{{< rawhtml >}}
<div class="mt-8 box p-4">
	<p class="label-md measure-narrow">In the science fiction books I read as a kid, reading had often been replaced by some more efficient way of acquiring knowledge. Mysterious "tapes" would load it into one's brain like a program being loaded into a computer. Paul G</p>
</div>
{{< /rawhtml >}}

``` html
<p class="measure-narrow">In the science fiction books...</p>
``` 

## Text Alignment {.heading-xs .mt-6 .mb-2}

Use `text-{property}` to control text alignment.
For responsive variant use `text-{breakpoint}-{property}` like `text-sm-left`.

Class | Properties 
--- | --- |  
`text-left`    | text-align: left;
`text-right`   | text-align: right; 
`text-center`  | text-align: center; 
`text-justify` | text-align: justify; 
`text-start`   | text-align: start; 
`text-end`     | text-align: end; 

{{< rawhtml >}}
<div class="mt-8">
	<p class="label-md text-right">Awesome CSS</p>
</div>
{{< /rawhtml >}}

``` html
<p class="text-right">Awesome CSS</p>
``` 


## Text Transform {.heading-xs .mt-6 .mb-2}

Use `text-{property}` to control text transformation.
For responsive variant use `text-{breakpoint}-{property}` like `text-sm-uppercase`.

Class | Properties 
--- | --- |  
`text-uppercase`   | text-transform: uppercase;
`text-lowercase`   | text-transform: lowercase; 
`text-capitalize`  | text-transform: capitalize; 
`text-normal-case` | text-transform: none; 

{{< rawhtml >}}
<div class="mt-8">
	<p class="label-md text-uppercase">Awesome CSS</p>
</div>
{{< /rawhtml >}}

``` html
<p class="text-uppercase">Awesome CSS</p>
``` 


## Word Break {.heading-xs .mt-6 .mb-2}

Use `break-{property}` to control word break of an element.
For responsive variant use `break-{breakpoint}-{property}` like `break-sm-word`.

Class | Properties 
--- | --- |  
`break-word`  | word-break: break-word; overflow-wrap: break-word;
`break-all`   | word-break: break-all; 

## Whitespace {.heading-xs .mt-6 .mb-2}

Use `text-{property}` to control element whitespace.
For responsive variant use `text-{breakpoint}-{property}` like `text-sm-normal`.

Class | Properties 
--- | --- |  
`text-wrap`   | white-space: normal;
`text-no-wrap`| white-space: no-wrap; 


## Text Decoration {.heading-xs .mt-6 .mb-2}

Use `text-{property}` to control text decoration.
For responsive variant use `text-{breakpoint}-{property}` like `text-sm-underline`.

Class | Properties 
--- | --- |  
`text-underline`   | text-decoration: underline;
`text-overline`    | text-decoration: overline; 
`text-line-through`| text-decoration: line-through; 
`text-no-underline`| text-decoration: none; 

{{< rawhtml >}}
<div class="mt-8">
	<p class="label-md text-underline">Awesome CSS</p>
</div>
{{< /rawhtml >}}

``` html
<p class="text-underline">Awesome CSS</p>
``` 
### Text Decoration Hover {.title-sm .mt-6 .mb-2}

Use `text-{property}-hover` to apply it in hover state.

{{< rawhtml >}}
<div class="mt-8">
	<p class="label-md text-underline-hover">Awesome CSS</p>
</div>
{{< /rawhtml >}}

``` html
<p class="text-underline-hover">Awesome CSS</p>
``` 

## List Style {.heading-xs .mt-6 .mb-2}

Use `list-{property}` to control list style.
For responsive variant use `list-{breakpoint}-{property}` like `list-sm-none`.

Class | Properties 
--- | --- |  
`text-underline`   | text-decoration: underline;
`text-overline`    | text-decoration: overline; 
`text-line-through`| text-decoration: line-through; 
`text-no-underline`| text-decoration: none; 

{{< rawhtml >}}
<div class="mt-8">
	<ul class="list-disc">
		<li class="label-md">Awesome CSS</li>
	</ul>
</div>
{{< /rawhtml >}}

``` html
<p class="text-underline">Awesome CSS</p>
``` 

##  Customize {.heading-xs .mt-6 .mb-2}

###  Font Family {.title-sm .mt-6 .mb-2}

To add your own font override these variables.

``` scss
--font-primary: "Inter", sans-serif;
--font-secondary: system-ui, "Segoe UI";
--font-tertiary: "Fira Code", monospace;

```

###  Line Height & Letter Spacing {.title-sm .mt-6 .mb-2}
``` scss
$tracking-tightest: -0.055em;
$tracking-tighter: -0.033em;
$tracking-tight: -0.011em;
$tracking-normal: 0;
$tracking-wide: 0.011em;
$tracking-wider: 0.033em;
$tracking-widest: 0.055em;

$leading-dense: 0.8;
$leading-base: 1;
$leading-none: 0;
$leading-normal: 1.125;
$leading-relaxed: 1.14;
$leading-spacious: 1.4;
$leading-loose: 1.8;
```