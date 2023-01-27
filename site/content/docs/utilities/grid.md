---
layout: docs
title: Grid
subtitle: Utilities for controlling grid.
source: https://github.com/htcni/neoblaze/blob/main/src/scss/utilities/_grid.scss
group: utilities
---
{{< callout type="info" >}}
Neoblaze also has its own grid based layout to quickly build responsive layouts. See [layout]({{< ref "/docs/layout/layout" >}}) for more details.
{{< /callout >}}

## Grid Container {.heading-xs .mt-6 .mb-2}

Use `.d-grid` display utility to create grid container.

{{< callout type="note" >}}
For complete grid explanation refer to CSS tricks [grid guide](https://css-tricks.com/snippets/css/complete-guide-grid/).
{{< /callout >}}

Class | Properties 
--- | --- |  
`d-grid`        | display: grid;
`d-igrid` | display: inline-grid; 

{{< rawhtml >}}
<div class="d-grid grid-cols-3 mt-8">
	<div class="box bg-secondary--xlight p-5">Grid item 1</div>
	<div class="box bg-secondary--xlight p-5"> Grid item 2</div>
	<div class="box bg-secondary--xlight p-5"> Grid item 3</div>
</div>
{{< /rawhtml >}}

``` html
<div class="d-grid grid-cols-3">
	<div class="box">Grid item 1</div>
	<div class="box"> Grid item 2</div>
	<div class="box"> Grid item 3</div>
</div>
``` 

## Grid Template Columns {.heading-xs .mt-6 .mb-2}

Use `grid-cols-{n}` to create columns in grid layout.
For responsive variant use `grid-{breakpoint}-cols-{n}` like `grid-sm-cols-1`.

Class | Properties 
--- | --- |  
`grid-cols-1`	   |  grid-template-columns: repeat(1, minmax(0, 1fr));
`grid-cols-2`	   |  grid-template-columns: repeat(2, minmax(0, 1fr));
`grid-cols-3`	   |  grid-template-columns: repeat(3, minmax(0, 1fr));
`grid-cols-4`	   |  grid-template-columns: repeat(4, minmax(0, 1fr));
`grid-cols-5`	   |  grid-template-columns: repeat(5, minmax(0, 1fr));
`grid-cols-6`	   |  grid-template-columns: repeat(6, minmax(0, 1fr));
`grid-cols-7`	   |  grid-template-columns: repeat(7, minmax(0, 1fr));
`grid-cols-8`	   |  grid-template-columns: repeat(8, minmax(0, 1fr));
`grid-cols-9`	   |  grid-template-columns: repeat(9, minmax(0, 1fr));
`grid-cols-10`   |	grid-template-columns: repeat(10, minmax(0, 1fr));
`grid-cols-11`   |	grid-template-columns: repeat(11, minmax(0, 1fr));
`grid-cols-12`   |	grid-template-columns: repeat(12, minmax(0, 1fr));
`grid-cols-none |	grid-template-columns: none;

{{< rawhtml >}}
<div class="d-grid grid-cols-3 grid-sm-cols-1 mt-8">
	<div class="box bg-secondary--xlight p-5">Grid item 1</div>
	<div class="box bg-secondary--xlight p-5"> Grid item 2</div>
	<div class="box bg-secondary--xlight p-5"> Grid item 3</div>
</div>
{{< /rawhtml >}}

``` html
<div class="d-grid grid-cols-3 grid-sm-cols-1">
	<div class="box">Grid item 1</div>
	<div class="box"> Grid item 2</div>
	<div class="box"> Grid item 3</div>
</div>
``` 

## Grid Columns Start/End {.heading-xs .mt-6 .mb-2}

Utilities for controlling element size and placement on grid column. 

{{< neoblaze_table >}}
Class | Properties 
--- | --- |  
`col-auto`	     | grid-column: auto;
`col-span-1`	   | grid-column: span 1 / span 1;
`col-span-2`	   | grid-column: span 2 / span 2;
`col-span-3`	   | grid-column: span 3 / span 3;
`col-span-4`	   | grid-column: span 4 / span 4;
`col-span-5`	   | grid-column: span 5 / span 5;
`col-span-6`	   | grid-column: span 6 / span 6;
`col-span-7`	   | grid-column: span 7 / span 7;
`col-span-8`	   | grid-column: span 8 / span 8;
`col-span-9`	   | grid-column: span 9 / span 9;
`col-span-10`	   | grid-column: span 10 / span 10;
`col-span-11`	   | grid-column: span 11 / span 11;
`col-span-12`	   | grid-column: span 12 / span 12;
`col-span-full`	 | grid-column: 1 / -1;
`col-start-1`	   | grid-column-start: 1;
`col-start-2`	   | grid-column-start: 2;
`col-start-3`	   | grid-column-start: 3;
`col-start-4`	   | grid-column-start: 4;
`col-start-5`	   | grid-column-start: 5;
`col-start-6`	   | grid-column-start: 6;
`col-start-7`	   | grid-column-start: 7;
`col-start-8`	   | grid-column-start: 8;
`col-start-9`	   | grid-column-start: 9;
`col-start-10`	 | grid-column-start: 10;
`col-start-11`	 | grid-column-start: 11;
`col-start-12`	 | grid-column-start: 12;
`col-start-13`	 | grid-column-start: 13;
`col-start-auto` | grid-column-start: auto;
`col-end-1`	     | grid-column-end: 1;
`col-end-2`	     | grid-column-end: 2;
`col-end-3`	     | grid-column-end: 3;
`col-end-4`	     | grid-column-end: 4;
`col-end-5`	     | grid-column-end: 5;
`col-end-6`	     | grid-column-end: 6;
`col-end-7`	     | grid-column-end: 7;
`col-end-8`	     | grid-column-end: 8;
`col-end-9`	     | grid-column-end: 9;
`col-end-10`	   | grid-column-end: 10;
`col-end-11`	   | grid-column-end: 11;
`col-end-12`	   | grid-column-end: 12;
`col-end-13`	   | grid-column-end: 13;
`col-end-auto`	 | grid-column-end: auto;
{{< /neoblaze_table >}}

### Spanning Columns {.title-sm .mt-6 .mb-2}

Use `col-span-{n}` to span element n-columns
For responsive variant use `col-{breakpoint}-span-{n}` like `col-sm-span-4`.


{{< rawhtml >}}
<div class="d-grid grid-cols-3 mt-8">
	<div class="box col-span-2 col-sm-span-1 bg-secondary--xlight p-5">Grid item 1</div>
	<div class="box bg-secondary--xlight p-5"> Grid item 2</div>
	<div class="box bg-secondary--xlight p-5"> Grid item 3</div>
</div>
{{< /rawhtml >}}

``` html
<div class="d-grid grid-cols-3">
	<div class="box col-span-2 col-sm-span-1">Grid item 1</div>
	<div class="box"> Grid item 2</div>
	<div class="box"> Grid item 3</div>
</div>
``` 

### Start/End Line {.title-sm .mt-6 .mb-2}

Use the `col-start-{n}` and `col-end-{n}` utilities to make an element start or end at the nth grid line. For responsive variant use `col-start-{n}` like `col-sm-start-4`.

{{< rawhtml >}}
<div class="d-grid grid-cols-3 mt-8">
	<div class="box col-start-2 bg-secondary--xlight p-5">Grid item 1</div>
	<div class="box bg-secondary--xlight p-5"> Grid item 2</div>
	<div class="box bg-secondary--xlight p-5"> Grid item 3</div>
</div>
{{< /rawhtml >}}

``` html
<div class="d-grid grid-cols-3">
	<div class="box col-start-2">Grid item 1</div>
	<div class="box"> Grid item 2</div>
	<div class="box"> Grid item 3</div>
</div>
``` 

## Grid Template Rows {.heading-xs .mt-6 .mb-2}

Use `grid-rows-{n}` to create rows in grid layout.
For responsive variant use `grid-{breakpoint}-rows-{n}` like `grid-sm-rows-1`.

Class | Properties 
--- | --- |  
`grid-rows-1`    |	grid-template-rows: repeat(1, minmax(0, 1fr));
`grid-rows-2`    |	grid-template-rows: repeat(2, minmax(0, 1fr));
`grid-rows-3`    |	grid-template-rows: repeat(3, minmax(0, 1fr));
`grid-rows-4`    |	grid-template-rows: repeat(4, minmax(0, 1fr));
`grid-rows-5`    |	grid-template-rows: repeat(5, minmax(0, 1fr));
`grid-rows-6`    |	grid-template-rows: repeat(6, minmax(0, 1fr));
`grid-rows-none` |  grid-template-rows: none;

{{< rawhtml >}}
<div class="d-grid grid-cols-3 grid-rows-3 mt-8">
	<div class="box bg-secondary--xlight p-5">Grid item 1</div>
	<div class="box bg-secondary--xlight p-5">Grid item 2</div>
	<div class="box bg-secondary--xlight p-5">Grid item 3</div>
	<div class="box bg-secondary--xlight p-5">Grid item 4</div>
	<div class="box bg-secondary--xlight p-5">Grid item 5</div>
	<div class="box bg-secondary--xlight p-5">Grid item 6</div>
	<div class="box bg-secondary--xlight p-5">Grid item 7</div>
	<div class="box bg-secondary--xlight p-5">Grid item 8</div>
	<div class="box bg-secondary--xlight p-5">Grid item 9</div>
</div>
{{< /rawhtml >}}

``` html
<div class="d-grid grid-cols-3 grid-rows-3 mt-8">
	<div class="box">Grid item 1</div>
	<div class="box">Grid item 2</div>
	<div class="box">Grid item 3</div>
	<div class="box">Grid item 4</div>
	<div class="box">Grid item 5</div>
	<div class="box">Grid item 6</div>
	<div class="box">Grid item 7</div>
	<div class="box">Grid item 8</div>
	<div class="box">Grid item 9</div>
</div>
``` 

## Grid Row Start/End {.heading-xs .mt-6 .mb-2}

Utilities for controlling element size and placement on grid rows. 

{{< neoblaze_table >}}
Class | Properties 
--- | --- |  
`row-auto`	        | grid-row: auto;
`row-span-1`	      | grid-row: span 1 / span 1;
`row-span-2`	      | grid-row: span 2 / span 2;
`row-span-3`	      | grid-row: span 3 / span 3;
`row-span-4`	      | grid-row: span 4 / span 4;
`row-span-5`	      | grid-row: span 5 / span 5;
`row-span-6`	      | grid-row: span 6 / span 6;
`row-span-full`	    | grid-row: 1 / -1;
`row-start-1`	      | grid-row-start: 1;
`row-start-2`      | grid-row-start: 2;
`row-start-3`      | grid-row-start: 3;
`row-start-4`      | grid-row-start: 4;
`row-start-5`      | grid-row-start: 5;
`row-start-6`      | grid-row-start: 6;
`row-start-7`	      | grid-row-start: 7;
`row-start-auto`  | grid-row-start: auto;
`row-end-1`	      | grid-row-end: 1;
`row-end-2`	      | grid-row-end: 2;
`row-end-3`	      | grid-row-end: 3;
`row-end-4`	      | grid-row-end: 4;
`row-end-5`	      | grid-row-end: 5;
`row-end-6`	      | grid-row-end: 6;
`row-end-7`	      | grid-row-end: 7;
`row-end-auto`	  | grid-row-end: auto;
{{< /neoblaze_table >}}

### Spanning Rows {.title-sm .mt-6 .mb-2}

Use `row-span-{n}` to span element n-columns
For responsive variant use `row-{breakpoint}-span-{n}` like `row-sm-span-4`.


{{< rawhtml >}}
<div class="d-grid grid-cols-3 mt-8">
	<div class="box row-span-3 bg-secondary--xlight p-5">Grid item 1</div>
	<div class="box bg-secondary--xlight p-5"> Grid item 2</div>
	<div class="box bg-secondary--xlight p-5"> Grid item 3</div>
	<div class="box bg-secondary--xlight p-5">Grid item 4</div>
	<div class="box bg-secondary--xlight p-5">Grid item 5</div>
	<div class="box bg-secondary--xlight p-5">Grid item 6</div>
	<div class="box bg-secondary--xlight p-5">Grid item 7</div>
	<div class="box bg-secondary--xlight p-5">Grid item 8</div>
	<div class="box bg-secondary--xlight p-5">Grid item 9</div>
</div>
{{< /rawhtml >}}

``` html
<div class="d-grid grid-cols-3">
	<div class="box row-span-3">Grid item 1</div>
	<div class="box">Grid item 2</div>
	<div class="box">Grid item 3</div>
	<div class="box">Grid item 4</div>
	<div class="box">Grid item 5</div>
	<div class="box">Grid item 6</div>
	<div class="box">Grid item 7</div>
	<div class="box">Grid item 8</div>
	<div class="box">Grid item 9</div>
</div>
``` 

### Start/End Line {.title-sm .mt-6 .mb-2}

Use the `row-start-{n}` and `row-end-{n}` utilities to make an element start or end at the nth grid line. For responsive variant use `row-start-{n}` like `row-sm-start-4`.

{{< rawhtml >}}
<div class="d-grid grid-cols-3 mt-8">
	<div class="box row-start-2 bg-secondary--xlight p-5">Grid item 1</div>
	<div class="box bg-secondary--xlight p-5"> Grid item 2</div>
	<div class="box bg-secondary--xlight p-5"> Grid item 3</div>
</div>
{{< /rawhtml >}}

``` html
<div class="d-grid grid-cols-3">
	<div class="box row-start-2">Grid item 1</div>
	<div class="box"> Grid item 2</div>
	<div class="box"> Grid item 3</div>
</div>
``` 

## Grid Auto Flow {.heading-xs .mt-6 .mb-2}

Use `grid-flow-{n}` to control how the auto-placement algorithm work.
For responsive variant use `grid-{breakpoint}-flow-{n}` like `grid-sm-flow-row`.

Class | Properties 
--- | --- |  
g`rid-flow-row`	      | grid-auto-flow: row;
`grid-flow-col`	      | grid-auto-flow: column;
`grid-flow-dense`	    | grid-auto-flow: dense;
`grid-flow-row-dense`	| grid-auto-flow: row dense;
`grid-flow-col-dense`	| grid-auto-flow: column dense;

## Place Content{.heading-xs .mt-6 .mb-2}

Use `place-content-{property}` to set both the align-content and justify-content properties in a single declaration.
For responsive variant use `place-{breakpoint}-content-{property}` like `place-sm-content-start`.

Class | Properties 
--- | --- |  
`place-content-center`    |	place-content: center;
`place-content-start `    |	place-content: start;
`place-content-end`       |	place-content: end;
`place-content-between`   |	place-content: space-between;
`place-content-around`    |	place-content: space-around;
`place-content-evenly`    |	place-content: space-evenly;
`place-content-baseline`	| place-content: baseline;
`place-content-stretch`   |	place-content: stretch;

## Place Items{.heading-xs .mt-6 .mb-2}

Use `place-items-{property}` to set both the align-items and justify-items properties in a single declaration.
For responsive variant use `place-{breakpoint}-items-{property}` like `place-sm-items-start`.

Class | Properties 
--- | --- |  
`place-items-start `    |	place-items: start;
`place-items-end`       |	place-items: end;
`place-items-center`    |	place-items: center;
`place-items-baseline`	| place-items: baseline;
`place-items-stretch`   |	place-items: stretch;


## Place Self{.heading-xs .mt-6 .mb-2}

Use `place-self-{property}` to sets both the align-self and justify-self properties in a single declaration.
For responsive variant use `place-{breakpoint}-self-{property}` like `place-sm-self-start`.

Class | Properties 
--- | --- |  
`place-self-auto`      |	place-self: auto;
`place-self-start`     |	place-self: start;
`place-self-end`       |	place-self: end;
`place-self-center`    |	place-self: center;
`place-self-baseline`	 |  place-self: baseline;
`place-self-stretch`   |	place-self: stretch;
`.place-self-start-center` | place-self: start center;
`.place-self-start-end`    | place-self: start end;
`.place-self-center-start` | place-self: center start;
`.place-self-center-end` | place-self: center end;
`.place-self-end-start`    | place-self: end start;
`.place-self-end-center`   | place-self: end center;

{{< rawhtml >}}
<div class="box d-grid height-10 mt-8">
	<div class="box place-self-center bg-secondary--xlight p-5">Grid item 1</div>
</div>
{{< /rawhtml >}}

``` html
<div class="box d-grid height-10">
	<div class="box place-self-center">Grid item 1</div>
</div>
```