---
layout: docs
title: Layout
subtitle: Utilities for controlling layout.
source: https://github.com/htcni/neoblaze/blob/main/src/scss/utilities/_layout.scss
group: utilities
---

## Overflow {.heading-xs .mt-6 .mb-2}

Use `overflow-{property}` for setting element overflow behaviour.

For responsive variant use `overflow-{breakpoint}-{property}` like `overflow-md-hidden`.

{{< neoblaze_table >}}
Class | Properties 
--- | --- |  
`overflow-auto`      | overflow: auto;
`overflow-hidden`    | overflow: hidden; 
`overflow-clip`      | overflow: clip; 
`overflow-visible`   | overflow: visible; 
`overflow-scroll`    | overflow: scroll; 
`overflow-x-auto`    | overflow-x: auto;
`overflow-y-auto`    | overflow-y: auto;
`overflow-x-hidden`  | overflow-x: hidden; 
`overflow-y-hidden`  | overflow-y: hidden; 
`overflow-x-clip`    | overflow-x: clip; 
`overflow-y-clip`    | overflow-y: clip; 
`overflow-x-visible` | overflow-x: visible; 
`overflow-y-visible` | overflow-y: visible; 
`overflow-x-scroll`  | overflow-x: scroll; 
`overflow-y-scroll`  | overflow-y: scroll; 

{{< /neoblaze_table >}}


## Object fit {.heading-xs .mt-6 .mb-2}

Use `object-{property}` for fitting an element inside container.

For responsive variant use `object-{breakpoint}-{property}` like `object-sm-fill`.

Class | Properties 
--- | --- |  
`object-contain`    | object-fit: contain;
`object-cover`      | object-fit: cover; 
`object-fill`       | object-fit: fill; 
`object-none`       | object-fit: none; 
`object-scale-down` | object-fit: scale-down;  


## Alignment {.heading-xs .mt-6 .mb-2}

Use `align-{property}` to change the vertical alignment of inline, inline-block, inline-table, and table cell elements.

For responsive variant use `align-{breakpoint}-{property}` like `align-md-baseline`.

Class | Properties 
--- | --- |  
`align-baseline`    | vertical-align: baseline;
`align-top`         | vertical-align: top; 
`align-middle`      | vertical-align: middle; 
`align-bottom`      | vertical-align: bottom; 
`align-text-top`    | vertical-align: text-top;  
`align-text-bottom` | vertical-align: text-bottom;  
`align-sub`         | vertical-align: sub;  
`align-super`       | vertical-align: sup;  

{{< rawhtml >}}
<div class="p-4 mt-8">
	<div class="box">
		<span class="align-top width-4 height-4 bg-secondary"></span>
		<span class="align-bottom width-6 height-6 bg-secondary"></span>
	</div>
</div>
{{< /rawhtml >}}

``` html
<div class="box">
	<span class="align-top width-4 height-4 bg-secondary">hi</span>
	<span class="align-bottom width-6 height-6 bg-secondary">hi</span>
</div>
``` 


## Visibility {.heading-xs .mt-6 .mb-2}

Use `{visible | hidden | collapse}` to control visibilty of an element.
For responsive variant use `visible-{breakpoint}` like `hidden-sm`.

Class | Properties 
--- | --- |  
`visible`  | visibility: visible;
`hidden`   | visibility: hidden; 
`collapse` | visibility: collapse; 


## Float {.heading-xs .mt-6 .mb-2}

Use `float-{property}` to place an element on the left or right.
For responsive variant use `float-{breakpoint}-{property}` like `float-sm-left`.

Class | Properties 
--- | --- |  
`float-left`  | float: left;
`float-right` | float: right; 
`float-none`  | float: none; 

{{< rawhtml >}}
<div class="p-4 box mt-8 max-width-line">
	<img class="avatar avatar-xl float-left" src="/images/profile.png" alt="profile"/>
	<p class="mb-0">Floating may refer to a type of dental work performed on horse teeth, use of an isolation tank, the guitar-playing technique where chords are sustained rather than scratched</p>
</div>
{{< /rawhtml >}}

``` html
<div class="p-4">
	<img class="float-left" src="/images/profile.png" alt="profile"/>
	<p>Floating</p>
</div>
``` 

### Clearfix {.title-sm .mt-6 .mb-2}

Use `clearfix` to clear the floats.


## Table Layout {.heading-xs .mt-6 .mb-2}

Use `table-{property}` to control table layout algorithm.
For responsive variant use `table-{breakpoint}-{property}` like `table-sm-auto`.

Class | Properties 
--- | --- |  
`table-auto`  | table-layout: auto;
`table-fixed`  | table-layout: fixed;


## Border Collapse {.heading-xs .mt-6 .mb-2}

Use `border-{property}`either collapse or separate table borders.
For responsive variant use `border-{breakpoint}-{property}` like `boder-sm-collapse`.

Class | Properties 
--- | --- |  
`border-collapse`  | border-collapse: collapse;
`border-separate` | border-collapse: separate;

## Z-Index {.heading-xs .mt-6 .mb-2}

Use `border-{property}`to control z-index of an element.
For responsive variant use `z-{breakpoint}-{property}` like `z-sm-10`.

Class | Properties 
--- | --- |  
`z-auto`  | z-index: auto;
`z-0`     | z-index: 0; 
`z-10`    | z-index: 10; 
`z-20`    | z-index: 20; 
`z-30`    | z-index: 30; 
`z-40`    | z-index: 40; 
`z-50`    | z-index: 50; 
`z-60`    | z-index: 60; 
`z-70`    | z-index: 70; 
`z-80`    | z-index: 70; 
`z-90`    | z-index: 90; 
`z-100`    | z-index: 100; 

### Fixed Z-Index {.title-sm .mt-6 .mb-2}
There are few predefined z-indices to avoid conflicts.

Class | Properties 
--- | --- |  
`z-tooltip`        | z-index: 1500;
`z-toast`          | z-index: 1400; 
`z-drawer`         | z-index: 1350; 
`z-drawer-backdrop`| z-index: 1300; 
`z-modal`          | z-index: 1250; 
`z-modal-backdrop` | z-index: 1200; 
`z-navbar`         | z-index: 1100; 


{{< rawhtml >}}
<div class="d-flex flex-justify-center mt-8 bg-slate--xlight p-4">
	<div class="width-4 height-4 -ml-2 bg-secondary border-2 z-30 rounded bd-white d-flex flex-items-center flex-justify-center fg-white">z-30</div>
	<div class="width-4 height-4 -ml-2 bg-secondary border-2 z-20 rounded bd-white rounded bd-white d-flex flex-items-center flex-justify-center fg-white">z-20</div>
	<div class="width-4 height-4 -ml-2 bg-secondary border-2 z-10 rounded bd-white rounded bd-white d-flex flex-items-center flex-justify-center fg-white">z-10</div>
</div>
{{< /rawhtml >}}

``` html
<div class="flex">
	<div class="z-30">z-30</div>
	<div class="z-20">z-20</div>
	<div class="z-10">z-10</div>
</div>
``` 