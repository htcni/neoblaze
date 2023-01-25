---
layout: docs
title: Layout
subtitle: Grid based layout for quickly building 2 column layouts.
titleBg: bg-danger--xlight
group: layout
---

## Grid Layouts {.heading-sm .mt-6 .mb-4}

There are different types of 2 columns based layout. 

`Layout Spacious`
`Layout Full`

These layouts consist of two columns, labeled as `layout-main` and `layout-aside`, which are designed to be responsive and will automatically adjust and stack on smaller screens.

### Layout Spacious {.title-sm .mt-6 .mb-2}

A 2-column layout that utilizes only 10 grid lines, with the remaining space being used as empty space.

{{< neoblaze_table >}}
Class | Definition
--- | --- |
`layout--spacious`    | span `layout-main` 10 columns
`layout--spacious-80` | span `layout-main` 8 columns
`layout--spacious-60` | span `layout-main` 6 columns      
`layout--spacious-40` | span `layout-main` 4 columns
`layout--spacious-50-40` | span `layout-main` 5 columns & `layout-aside` 4 columns       
`layout--spacious-40-50` | span `layout-aside` 4 columns & `layout-main` 5 columns       
`layout--spacious-50-50` | span `layout-main` 5 columns & `layout-aside` 5 columns       
`layout--spacious-60-40` | span `layout-main` 6 columns & `layout-aside` 4 columns       
`layout--spacious-40-60` | span `layout-aside` 4 columns & `layout-main` 6 columns       
`layout--spacious-70-20` | span `layout-main` 7 columns & `layout-aside` 2 columns       
`layout--spacious-20-70` | span `layout-aside` 2 columns & `layout-main` 7 columns 
`layout--spacious-70-30` | span `layout-main` 7 columns & `layout-aside` 3 columns       
`layout--spacious-30-70` | span `layout-aside` 3 columns & `layout-main` 7 columns       
`layout--spacious-80-20` | span `layout-main` 8 columns & `layout-aside` 8 columns       
`layout--spacious-20-80` | span `layout-aside` 2 columns & `layout-main` 2 columns          
`layout--spacious-80-10` | span `layout-main` 8 columns & `layout-aside` 1 columns          
`layout--spacious-10-80` | span `layout-aside` 1 columns & `layout-main` 8 columns   
{{< /neoblaze_table >}}       

{{< rawhtml >}}
<div class="d-flex flex-column gap-4 box mt-8">
	<section class="layout layout--spacious-80">
		<div class="layout-main bg-secondary--xlight p-4">
			<h2>layout-main</h2>
		</div>
	</section>
	<section class="layout layout--spacious-50-40">
		<div class="layout-main bg-secondary--xlight p-4">
			<h2>layout-main</h2>
		</div>
		<div class="layout-aside bg-gray--light p-4">
			<h2>layout-aside</h2>
		</div>
	</section>
</div>
{{< /rawhtml >}}

``` html
	<section class="layout layout--spacious-80">
		<div class="layout-main">
			<h2>layout-main</h2>
		</div>
	</section>
	<section class="layout layout--spacious-50-40">
		<div class="layout-main">
			<h2>layout-main</h2>
		</div>
		<div class="layout-aside">
			<h2>layout-aside</h2>
		</div>
	</section>
``` 

### Layout Full {.title-sm .mt-6 .mb-2}

A 2-column layout that utilizes all 12 grid columns.

{{< neoblaze_table >}}
Class | Definition
--- | --- |
`layout--full`    | span `layout-main` 12 columns
`layout--full-50-40` | span `layout-main` 5 columns & `layout-aside` 4 columns       
`layout--full-40-50` | span `layout-aside` 4 columns & `layout-main` 5 columns       
`layout--full-50-50` | span `layout-main` 5 columns & `layout-aside` 5 columns       
`layout--full-60-40` | span `layout-main` 6 columns & `layout-aside` 4 columns       
`layout--full-40-60` | span `layout-aside` 4 columns & `layout-main` 6 columns       
`layout--full-60-60` | span `layout-main` 6 columns & `layout-aside` 6 columns       
`layout--full-70-40` | span `layout-main` 7 columns & `layout-aside` 4 columns       
`layout--full-40-70` | span `layout-aside` 4 columns & `layout-main` 7 columns 
`layout--full-70-30` | span `layout-main` 7 columns & `layout-aside` 3 columns       
`layout--full-30-70` | span `layout-aside` 3 columns & `layout-main` 7 columns       
`layout--full-70-50` | span `layout-main` 7 columns & `layout-aside` 5 columns       
`layout--full-50-70` | span `layout-aside` 5 columns & `layout-main` 7 columns          
`layout--full-40-80` | span `layout-aside` 4 columns & `layout-main` 8 columns          
`layout--full-80-40` | span `layout-main` 8 columns & `layout-aside` 4 columns 
`layout--full-30-80` | span `layout-aside` 3 columns & `layout-main` 8 columns          
`layout--full-80-30` | span `layout-main` 3 columns & `layout-aside` 8 columns 
`layout--full-20-80` | span `layout-aside` 2 columns & `layout-main` 8 columns          
`layout--full-80-20` | span `layout-main` 8 columns & `layout-aside` 2 columns
`layout--full-10-80` | span `layout-aside` 1 columns & `layout-main` 8 columns          
`layout--full-80-10` | span `layout-main` 8 columns & `layout-aside` 1 columns   
{{< /neoblaze_table >}}       

{{< rawhtml >}}
<div class="d-flex flex-column gap-4 box mt-8">
	<section class="layout layout--full">
		<div class="layout-main bg-secondary--xlight p-4">
			<h2>layout-main</h2>
		</div>
	</section>
	<section class="layout layout--full-70-50">
		<div class="layout-main bg-secondary--xlight p-4">
			<h2>layout-main</h2>
		</div>
		<div class="layout-aside bg-gray--light p-4">
			<h2>layout-aside</h2>
		</div>
	</section>
</div>
{{< /rawhtml >}}

``` html
	<section class="layout layout--full">
		<div class="layout-main">
			<h2>layout-main</h2>
		</div>
	</section>
	<section class="layout layout--spacious-70-50">
		<div class="layout-main">
			<h2>layout-main</h2>
		</div>
		<div class="layout-aside">
			<h2>layout-aside</h2>
		</div>
	</section>
``` 

## Multi Columns  {.title-sm .mt-6 .mb-2}

### Layout 2 Columns {.title-sm .mt-6 .mb-2}

Use `layout-2-col` for 2 columns layout

{{< rawhtml >}}
<div class="d-flex flex-column gap-4 box mt-8">
	<section class="layout layout-2-col">
		<div class="layout-main bg-secondary--xlight p-4">
			<h2>layout-main</h2>
		</div>
		<div class="layout-aside bg-gray--light p-4">
			<h2>layout-aside</h2>
		</div>
	</section>
</div>
{{< /rawhtml >}}

``` html
	<section class="layout layout-2-col">
		<div class="layout-main bg-secondary--xlight p-4">
			<h2>layout-main</h2>
		</div>
		<div class="layout-aside bg-gray--light p-4">
			<h2>layout-aside</h2>
		</div>
	</section>
``` 

### Layout Aside Fixed {.title-sm .mt-6 .mb-2}

Layout with aside fixed.
`layout-2-col--fixed-aside-right`
`layout-2-col--fixed-aside-left`

{{< rawhtml >}}
<div class="d-flex flex-column gap-4 box mt-8">
	<section class="layout layout-2-col--fixed-aside-left">
		<div class="layout-main bg-secondary--xlight p-4">
			<h2>layout-main</h2>
		</div>
		<div class="layout-aside width-10 bg-gray--light p-4">
			<h2>layout-aside</h2>
		</div>
	</section>
</div>
{{< /rawhtml >}}


``` html
	<section class="layout layout-2-col--fixed-aside-left">
		<div class="layout-main bg-secondary--xlight p-4">
			<h2>layout-main</h2>
		</div>
		<div class="layout-aside width-10 bg-gray--light p-4">
			<h2>layout-aside</h2>
		</div>
	</section>
``` 
### Layout 3 Columns {.title-sm .mt-6 .mb-2}

Use `layout-3-col` for 3 columns layout.

{{< rawhtml >}}
<div class="d-flex flex-column gap-4 box mt-8">
	<section class="layout layout-3-col">
		<div class="bg-secondary--xlight p-4">
			<h2>Starter</h2>
		</div>
		<div class="bg-tertiary--light p-4">
			<h2>Pro</h2>
		</div>
				<div class="bg-gray--light p-4">
			<h2>Business</h2>
		</div>
	</section>
</div>
{{< /rawhtml >}}

``` html
	<section class="layout layout-3-col">
		<div class="bg-secondary--xlight p-4">
			<h2>Starter</h2>
		</div>
		<div class="bg-tertiary--light p-4">
			<h2>Pro</h2>
		</div>
				<div class="bg-gray--light p-4">
			<h2>Business</h2>
		</div>
	</section>
``` 

### Layout 4 Columns {.title-sm .mt-6 .mb-2}

Use `layout-4-col` for 4 columns layout.

{{< rawhtml >}}
<div class="d-flex flex-column gap-4 box mt-8">
	<section class="layout layout-3-col">
		<div class="bg-warning--xlight p-4">
			<h2>Starter</h2>
		</div>
		<div class="bg-secondary--xlight p-4">
			<h2>Hobbyist</h2>
		</div>
		<div class="bg-tertiary--light p-4">
			<h2>Pro</h2>
		</div>
				<div class="bg-gray--light p-4">
			<h2>Business</h2>
		</div>
	</section>
</div>
{{< /rawhtml >}}

``` html
	<section class="layout layout-3-col">
		<div class="bg-warning--xlight p-4">
			<h2>Starter</h2>
		</div>
		<div class="bg-secondary--xlight p-4">
			<h2>Hobbyist</h2>
		</div>
		<div class="bg-tertiary--light p-4">
			<h2>Pro</h2>
		</div>
				<div class="bg-gray--light p-4">
			<h2>Business</h2>
		</div>
	</section>
``` 


### Layout Auto Fit {.title-sm .mt-6 .mb-2}

{{< callout type="note" >}}
For complete grid explanation refer to CSS tricks [grid template column](https://css-tricks.com/almanac/properties/g/grid-template-columns/#aa-auto-fill-and-auto-fit).

{{< /callout >}}

Use `layout-auto-fit` to create as many columns as can fit within the available space.

{{< rawhtml >}}
<div class="d-flex flex-column gap-4 box mt-8">
	<section class="layout layout-auto-fit gap-4">
		<div class="height-6 bg-secondary rounded"></div>		
		<div class="height-6 bg-secondary rounded"></div>		
	</section>
</div>
{{< /rawhtml >}}

``` html
	<section class="layout layout-auto-fit gap-4">
		<div class="height-6 bg-secondary rounded"></div>		
		<div class="height-6 bg-secondary rounded"></div>		
	</section>
``` 

### Layout Auto Fill {.title-sm .mt-6 .mb-2}

 Use `layout-auto-fill` instead of `layout-auto-fit` in the same way, but it will create as many columns as can fit within the available space, but unlike`layout-auto-fit`, it will not shrink the columns if there's not enough space.

{{< rawhtml >}}
<div class="d-flex flex-column gap-4 box mt-8">
	<section class="layout layout-auto-fill gap-4">
		<div class="height-6 bg-secondary rounded"></div>		
		<div class="height-6 bg-secondary rounded"></div>		
	</section>
</div>
{{< /rawhtml >}}

``` html
	<section class="layout layout-auto-fill gap-4">
		<div class="height-6 bg-secondary rounded"></div>		
		<div class="height-6 bg-secondary rounded"></div>		
	</section>
``` 

## Layout Helpers  {.title-sm .mt-6 .mb-2}

### md-break {.title-sm .mt-6 .mb-2}

All layout above stack at `sm` breakpoint.
Use `md-break` to stack them at `md` breakpoint.

{{< rawhtml >}}
<div class="d-flex flex-column gap-4 box mt-8">
	<section class="layout layout--spacious-50-40 md-break">
		<div class="layout-main bg-secondary--xlight p-4">
			<h2>layout-main</h2>
		</div>
		<div class="layout-aside bg-gray--light p-4">
			<h2>layout-aside</h2>
		</div>
	</section>
</div>
{{< /rawhtml >}}

``` html
	<section class="layout layout--spacious-50-40 md-break">
		<div class="layout-main bg-secondary--xlight p-4">
			<h2>layout-main</h2>
		</div>
		<div class="layout-aside bg-gray--light p-4">
			<h2>layout-aside</h2>
		</div>
	</section>
``` 

### reverse {.title-sm .mt-6 .mb-2}

`sm-reverse` and `md-break-reverse` to change the stack order at respective breakpoint.

{{< rawhtml >}}
<div class="d-flex flex-column gap-4 box mt-8">
	<section class="layout layout--spacious-50-40 md-break-reverse">
		<div class="layout-main bg-secondary--xlight p-4">
			<h2>layout-main</h2>
		</div>
		<div class="layout-aside bg-gray--light p-4">
			<h2>layout-aside</h2>
		</div>
	</section>
</div>
{{< /rawhtml >}}

``` html
	<section class="layout layout--spacious-40-50 md-break-reverse">
		<div class="layout-main bg-secondary--xlight p-4">
			<h2>layout-main</h2>
		</div>
		<div class="layout-aside bg-gray--light p-4">
			<h2>layout-aside</h2>
		</div>
	</section>
``` 