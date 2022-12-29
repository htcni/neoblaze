---
layout: docs
title: Flexbox
subtitle: Utilities for controlling flexbox.
titleBg: bg-danger--xlight
group: utilities
---

## Flex Container {.heading-sm .mt-6 .mb-4}

Use `.d-flex` display utility to create flexbox container.

{{< callout type="note" >}}
For complete flexbox explanation refer to CSS tricks [flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).
{{< /callout >}}


Class | Properties 
--- | --- |  
`d-flex`        | display: flex;
`d-inline-flex` | display: inline-flex; 

{{< rawhtml >}}
<div class="d-flex mt-8">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}

#### Inline Flex {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-inline-flex">
	<div class="box bg-secondary--xlight p-5">Inline flex container</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-inline-flex">
	<div class="box bg-secondary--xlight p-5">Inline flex container</div>
</div>
{{< /highlight >}}

## Flex Direction {.heading-sm .mt-6 .mb-4}

Use these classes to change the direction of flex items in the container.

Class | Properties 
--- | --- |  
`flex-row`            | flex-direction: row;
`flex-row-reverse`    | flex-direction: row-reverse; 
`flex-column`         | flex-direction: column;
`flex-column-reverse` | flex-direction: column-reverse;

#### Row {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-row mt-8">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-row">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}

#### Row Reverse {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-row-reverse mt-8">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex  flex-row-reverse">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}

#### Column {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-column mt-8">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex  flex-column">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}


#### Column Reverse {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-column-reverse mt-8">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex  flex-column-reverse">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}

## Flex Wrap {.heading-sm .mt-6 .mb-4}

Use wrap utility classes to control if items wrap in single or multiple line.

Class | Properties 
--- | --- |  
`flex-wrap`            | flex-wrap: wrap;
`flex-wrap-reverse`    | flex-wrap: wrap-reverse; 
`flex-nowrap`          | flex-wrap: nowrap;

#### No Wrap {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-nowrap box overflow-auto">
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 1</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 3</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 4</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 5</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 6</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 7</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-nowrap">
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 1</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 3</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 4</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 5</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 6</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 7</div>
</div>
{{< /highlight >}}


#### Wrap {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-wrap box">
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 1</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 3</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 4</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 5</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 6</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 7</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-wrap">
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 1</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 3</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 4</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 5</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 6</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 7</div>
</div>
{{< /highlight >}}

#### Wrap Reverse {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-wrap-reverse box">
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 1</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 3</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 4</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 5</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 6</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 7</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-wrap-reverse">
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 1</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 3</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 4</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 5</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 6</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 7</div>
</div>
{{< /highlight >}}


## Justify Content {.heading-sm .mt-6 .mb-4}

Use these classes to align flex and grid items along the main axis of container.

Class | Properties 
--- | --- |  
`flex-justify-start`  | justify-content: flex-start;
`flex-justify-end`    | justify-content: flex-end; 
`flex-justify-center` | justify-content: center;
`flex-justify-between`| justify-content: space-between;
`flex-justify-around` | justify-content: space-around;
`flex-justify-evenly` | justify-content: spaxe-evenly;

#### Start {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-justify-start box">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-justify-start">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}


#### End {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-justify-end box">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-justify-end">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}

#### Center {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-justify-center box">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-justify-center">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}

#### Space Between {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-justify-between box">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-justify-between">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}

#### Space Around {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-justify-around box">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-justify-around">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}

#### Space Evenly {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-justify-evenly box">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-justify-evenly">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}


## Align Items {.heading-sm .mt-6 .mb-4}

Use these classes to align flex and grid items along the cross axis of container.

Class | Properties 
--- | --- |  
`flex-items-start`   | align-items: flex-start;
`flex-items-end`     | align-items: flex-end; 
`flex-items-center`  | align-items: center;
`flex-items-baseline`| align-items: baseline;
`flex-items-stretch` | align-items: stretch;

#### Start {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-items-start box min-height-10">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-items-start">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}


#### End {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-items-end min-height-10 box">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-items-end">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}

#### Center {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-items-center box min-height-10">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-items-center">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}

#### Baseline {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-items-baseline box">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-8"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-items-baseline">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}

#### Stretch {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-item-stretch min-height-10 box">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-item-stretch">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}


## Align Content {.heading-sm .mt-6 .mb-4}

Use these classes to align rows in multirow flex and grid items.

{{< callout type="info" >}}
This property works with multi rows flex container with `.flex-warp`.
{{< /callout >}}

Class | Properties 
--- | --- |  
`flex-content-start`   | align-content: flex-start;
`flex-content-end`     | align-content: flex-end; 
`flex-content-center`  | align-content: center;
`flex-content-between` | align-content: space-between;
`flex-content-around`  | align-content: space-around;
`flex-content-evenly`  | align-content: space-evenly;
`flex-content-stretch` | align-content: stretch;

#### Start {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-wrap flex-content-start box min-height-16">
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 1</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 3</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 4</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 5</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 6</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 7</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-wrap flex-content-start">
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 1</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 3</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 4</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 5</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 6</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 7</div>
</div>
{{< /highlight >}}


#### End {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-wrap flex-content-end box min-height-16">
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 1</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 3</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 4</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 5</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 6</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 7</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-wrap flex-content-end">
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 1</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 3</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 4</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 5</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 6</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 7</div>
</div>
{{< /highlight >}}

#### Center {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-wrap flex-content-center box min-height-16">
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 1</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 3</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 4</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 5</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 6</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 7</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-wrap flex-content-center">
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 1</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 3</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 4</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 5</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 6</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 7</div>
</div
{{< /highlight >}}

#### Space Between {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-wrap flex-content-between box min-height-16">
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 1</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 3</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 4</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 5</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 6</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 7</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-wrap flex-content-between">
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 1</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 3</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 4</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 5</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 6</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 7</div>
</div
{{< /highlight >}}

#### Space Around {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-wrap flex-content-around box min-height-16">
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 1</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 3</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 4</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 5</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 6</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 7</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-wrap flex-content-around">
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 1</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 3</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 4</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 5</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 6</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 7</div>
</div
{{< /highlight >}}

#### Space Evenly {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-wrap flex-content-evenly box min-height-16">
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 1</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 3</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 4</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 5</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 6</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 7</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-wrap flex-content-evenly">
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 1</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 3</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 4</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 5</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 6</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 7</div>
</div
{{< /highlight >}}

#### Stretch {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex flex-wrap flex-content-stretch box min-height-16">
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 1</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 3</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 4</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 5</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 6</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 7</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-wrap flex-content-stretch">
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 1</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 3</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 4</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 5</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 6</div>
	<div class="box bg-secondary--xlight width-20 p-5"> Flex item 7</div>
</div
{{< /highlight >}}


## Align Self {.heading-sm .mt-6 .mb-4}

Use these classes to align individual flex and grid items along the cross axis of container.

Class | Properties 
--- | --- |  
`flex-self-auto`    | align-self: auto;
`flex-self-start`   | align-self: flex-start;
`flex-self-end`     | align-self: flex-end; 
`flex-self-center`  | align-self: center;
`flex-self-baseline`| align-self: baseline;
`flex-self-stretch` | align-self: stretch;

#### Auto {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex box min-height-10">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="flex-self-auto box bg-secondary--light p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-items-start">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="flex-self box bg-secondary--light p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}


#### Start {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex box min-height-10">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="flex-self-start box bg-secondary--light p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-items-start">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="flex-self-start box bg-secondary--light p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}


#### End {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex min-height-10 box">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="flex-self-end box bg-secondary--light p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="flex-self-end box bg-secondary--light p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}

#### Center {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex min-height-10 box">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="flex-self-center box bg-secondary--light p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="flex-self-center box bg-secondary--light p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}

#### Baseline {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex min-height-10 box">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="flex-self-baseline box bg-secondary--light p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="flex-self-baseline box bg-secondary--light p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}

#### Stretch {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div class="d-flex min-height-10 box">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="flex-self-stretch box bg-secondary--light p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="flex-self-stretch box bg-secondary--light p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}

## Flex Items {.heading-sm .mt-6 .mb-4}

Use these classes to grow or shrink flex children.

Class | Properties 
--- | --- |  
`flex-auto`     | flex: auto;
`flex-initial`  | flex: initial;
`flex-1`        | flex: 1;
`flex-grow-1`   | flex-grow: 1; 
`flex-grow-0`   | flex-grow: 0;
`flex-shrink-1` | flex-shrink: 1;
`flex-shrink-0` | flex-shrink: 0;
`flex-none`     | flex: none;

#### Auto {.title-sm .mt-6 .mb-4}

Use `flex-auto` to allow a flex item to grow and shrink, taking initial size into account.

{{< rawhtml >}}
<div class="d-flex box">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="flex-auto box bg-secondary--light p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="flex-auto box bg-secondary--light p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}

#### Initial {.title-sm .mt-6 .mb-4}

Use `flex-inital` to allow a flex item to shrink but not grow, taking initial size into account.

{{< rawhtml >}}
<div class="d-flex box">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="flex-initial box bg-secondary--light p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="flex-initial box bg-secondary--light p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}


#### Flex 1  {.title-sm .mt-6 .mb-4}

Use `flex-1` to allow a flex item to shrink and grow as needed, taking up all the needed space.

{{< rawhtml >}}
<div class="d-flex box">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="flex-1 box bg-secondary--light p-5"> Flex item 2</div>
	<div class="flex-1 box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="flex-1 box bg-secondary--light p-5"> Flex item 2</div>
	<div class="flex-1 box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}

#### Flex Grow  {.title-sm .mt-6 .mb-4}

Use `flex-grow-1` to allow a flex item to grow taking up all the space.

{{< rawhtml >}}
<div class="d-flex box">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="flex-grow-1 box bg-secondary--light p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="flex-grow-1 box bg-secondary--light p-5"> Flex item 3</div>
</div>
{{< /highlight >}}

#### Flex Grow 0 {.title-sm .mt-6 .mb-4}

Use `flex-grow-0` to prevent flex item from growing.

{{< rawhtml >}}
<div class="d-flex flex box">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="flex-grow-0 box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="flex-grow-0 box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}

#### Flex Shrink  {.title-sm .mt-6 .mb-4}

Use `flex-shrink-1` to allow a flex item to shrink when needed.

{{< rawhtml >}}
<div class="d-flex box">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="flex-shrink-1 box bg-secondary--light p-5 width-20"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="flex-shrink-1 box bg-secondary--light p-5 width-20"> Flex item 3</div>
</div>
{{< /highlight >}}

#### Flex Shrink 0 {.title-sm .mt-6 .mb-4}

Use `flex-shrink-0` to prevent flex item from shrinking.

{{< rawhtml >}}
<div class="d-flex flex box">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="flex-shrink-0 box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="flex-shrink-0 box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}

#### Flex None {.title-sm .mt-6 .mb-4}

Use `flex-none` to prevent flex item from shrinking and growing.

{{< rawhtml >}}
<div class="d-flex flex box">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="flex-1 box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="flex-none width-20 box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="flex-1 box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="flex-none width-20 box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}


## Order {.heading-sm .mt-6 .mb-4}

Use these classes change the visual order of flex items.

Class | Properties 
--- | --- |  
`order-0`     | order: 0; 
`order-1`     | order: 1; 
`order-2`     | order: 2; 
`order-3`     | order: 3; 
`order-4`     | order: 4; 
`order-5`     | order: 5; 
`order-first` | order: -999; 
`order-last`  | order: 999; 
`order-none`  | order: inherit; 


{{< rawhtml >}}
<div class="d-flex box mt-8">
	<div class="flex-order-3 box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="flex-order-1 box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="flex-order-2 box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex">
	<div class="flex-order-3 box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="flex-order-1 box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="flex-order-2 box bg-secondary--xlight p-5"> Flex item 3</div>
</div>
{{< /highlight >}}


## Gap {.heading-sm .mt-6 .mb-4}

For gap see [spacing]({{< ref "/docs/utilities/spacing" >}}) utilities.


## Resposive Flexbox Utilities {.heading-sm .mt-6 .mb-4}

Use `d-{breakpoint}-{property}` for [display]({{< ref "/docs/utilities/spacing" >}}).
\
Use `flex-{breakpoint}-{property}` for responsive variants like `flex-md-column`, `flex-sm-grow-1`.


{{< rawhtml >}}
<div class="d-flex flex-sm-column box">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-sm-column">
	<div class="box bg-secondary--xlight p-5">Flex item 1</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 2</div>
	<div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>