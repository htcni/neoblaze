---
layout: docs
title: Display
subtitle: Utilities for controlling display
titleBg: bg-tertiary--xlight
group: utilities
---

## Display {.heading-sm .mt-6 .mb-4}

use display utilites to change default display of the element.  

Class | Properties
--- | --- |
`d-block` | display : block;
`d-inline-block` | display : inline-block;
`d-inline` | display : inline;
`d-flex` | display : flex;
`d-inline-flex` | display : inline-flex;
`d-grid` | display : grid;
`d-contents` | display : contents;
`d-list-item` | display : list-item;
`d-none` | display : none;


#### Start {.title-sm .mt-6 .mb-4}

{{< rawhtml >}}

<div class="d-inline box bg-secondary--xlight p-5">d-inline</div>
<div class="d-inline-block box bg-secondary--xlight p-5">d-inline-block</div>
<div class="d-block box bg-secondary--xlight p-5">d-block</div>
<div class="d-flex box">
    <div class="box bg-secondary--xlight p-5">Flex item 1</div>
    <div class="box bg-secondary--xlight p-5"> Flex item 2</div>
    <div class="box bg-secondary--xlight p-5"> Flex item 3</div>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-inline box bg-secondary--xlight">d-inline</div>
<div class="d-inline-block box bg-secondary--xlight">d-inline-block</div>
<div class="d-block box bg-secondary--xlight">d-block</div>
<div class="d-flex box">
    <div class="box bg-secondary--xlight">Flex item 1</div>
    <div class="box bg-secondary--xlight"> Flex item 2</div>
    <div class="box bg-secondary--xlight"> Flex item 3</div>
</div>
{{< /highlight >}}


## Responsive display utility  {.heading-sm .mt-6 .mb-4}


Display utility can be applied for all available [breakpoints]({{< ref "/docs/layouts/breakpoints" >}}) .
The classes can be used in format  `d-{breakpoint}-{value}`

For reponsive design , apply multiple clases to element accordingly for different breakpoints .


Class | 
--- | --- |
`d-block d-xs-none` | hidden only for xs 
`d-inline  d-sm-block d-xs-block` | block for sm and xs 
`d-flex` | flex for all
`d-grid d-md-flex d-sm-flex d-xs-flex` | flex for md,sm,xs 



{{< rawhtml >}}
<div class="pt-6">
<div class="d-block d-xs-none box bg-secondary--xlight p-5">d-block d-xs-none</div>
<div class="d-md-block d-inline-block box bg-secondary--xlight p-5">d-block d-md-inline-block</div>
<div class="d-inline-block d-md-flex box bg-secondary--xlight p-5">d-inline-block d-md-flex</div>
</div>
{{< /rawhtml >}}


{{< highlight html >}}

<div class=" d-block d-xs-none ">d-block d-xs-none</div>
<div class=" d-md-block d-inline-block ">d-md-block d-inline-block</div>
<div class=" d-inline-block d-md-flex ">d-inline-block d-md-flex</div>

{{< /highlight >}}






