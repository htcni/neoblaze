---
layout: docs
title: Flexbox Grid
subtitle: Utility for building flex layout.
titleBg: bg-danger--xlight
group: layout
---

## Flexbox Grid {.heading-sm .mt-6 .mb-4}

Flexbox grid has 12 percentage base column for creating responsive designs using the CSS flexbox module. 
Use `d-flex` display utility to make a row and `col-{size}` for columns.

{{< rawhtml >}}
<div class="d-flex flex-column gap-4">
	<div class="d-flex gap-2">
		<div class="col-1 p-2 bg-secondary--light text-center">col-1</div>
		<div class="col-11 p-2 bg-secondary--light text-center">col-11</div>
	</div>
	<div class="d-flex gap-2">
		<div class="col-2 p-2 bg-secondary--light text-center">col-2</div>
		<div class="col-10 p-2 bg-secondary--light text-center">col-10</div>
	</div>
	<div class="d-flex gap-2">
		<div class="col-3 p-2 bg-secondary--light text-center">col-3</div>
		<div class="col-9 p-2 bg-secondary--light text-center">col-9</div>
	</div>	
	<div class="d-flex gap-2">
		<div class="col-4 p-2 bg-secondary--light text-center">col-4</div>
		<div class="col-8 p-2 bg-secondary--light text-center">col-8</div>
	</div>
	<div class="d-flex gap-2">
		<div class="col-5 p-2 bg-secondary--light text-center">col-5</div>
		<div class="col-7 p-2 bg-secondary--light text-center">col-7</div>
	</div>
	<div class="d-flex gap-2">
		<div class="col-6 p-2 bg-secondary--light text-center">col-6</div>
		<div class="col-6 p-2 bg-secondary--light text-center">col-6</div>
	</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex gap-2">
	<div class="col-1 p-2">col-1</div>
	<div class="col-11 p-2">col-11</div>
</div>
<div class="d-flex gap-2">
	<div class="col-2 p-2">col-2</div>
	<div class="col-10 p-2">col-10</div>
</div>
<div class="d-flex gap-2">
	<div class="col-3 p-2">col-3</div>
	<div class="col-9 p-2">col-9</div>
</div>	
{{< /highlight >}}

## Gutters {.heading-sm .mt-6 .mb-4}

For gutters use  [gap]({{< ref "/docs/utilities/spacing.md#gap" >}}) utilities.

{{< rawhtml >}}
<div class="d-flex gap-4">
	<div class="col-6 p-2 bg-secondary--light text-center">col-6</div>
	<div class="col-6 p-2 bg-secondary--light text-center">col-6</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex gap-4">
	<div class="col-6 p-2">col-6</div>
	<div class="col-6 p-2">col-6</div>
</div>
{{< /highlight >}}


## Responsive Columns  {.heading-sm .mt-6 .mb-4}

Use `col-{breakpoint}-{property}` for responsive variants like col-md-4, col-sm-12.

{{< rawhtml >}}
<div class="d-flex gap-4">
	<div class="col-8 col-md-6 p-2 bg-secondary--light text-center">col-8 col-md-6</div>
	<div class="col-4 col-md-6 p-2 bg-secondary--light text-center">col-4 col-md-6</div>
</div>
{{< /rawhtml >}}


{{< highlight html >}}
<div class="d-flex gap-4">
	<div class="col-8 col-md-6">col-8 col-md-6</div>
	<div class="col-4 col-md-6 p-2">col-4 col-md-6</div>
</div>
{{< /highlight >}}


## Stack Columns {.heading-sm .mt-6 .mb-4}

Use flex utilities along with responsive columns to stack columns at specific breakpoint.
`flex-{breakpoint}-column` to change flex direction.

{{< rawhtml >}}
<div class="d-flex flex-sm-column gap-4">
	<div class="col-8 col-md-6 col-sm-12 p-2 bg-secondary--light text-center">col-8 col-md-6 col-sm-12</div>
	<div class="col-4 col-md-6 col-sm-12 p-2 bg-secondary--light text-center">col-4 col-md-6 col-sm-12</div>
</div>
{{< /rawhtml >}}


{{< highlight html >}}
<div class="d-flex flex-sm-column gap-4">
	<div class="col-8 col-md-6 col-sm-12 p-2">col-8 col-md-6 col-sm-12</div>
	<div class="col-4 col-md-6 col-sm-12 p-2">col-8 col-md-6 col-sm-12</div>
</div>
{{< /highlight >}}