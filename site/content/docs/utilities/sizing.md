---
layout: docs
title: Sizing
subtitle: Utilities for controlling element height and width.
titleBg: bg-danger--xlight
group: utilities
---

## Size {.heading-sm .mt-6 .mb-4}

{{< neoblaze_table >}}
Size | Value 
--- | --- |  
`0`  | 0px
`px` | 1px
`0.125` | 0.125rem - 2px
`0.25` | 0.25rem - 4px
`0.5` | 0.5rem - 8px
`1` | 1rem - 16px
`2` | 2rem - 32px
`3` | 3rem - 48px
`4` | 4rem - 64px
`5` | 5rem - 80px
`6` | 6rem - 96px
`8` | 8rem - 128px
`10` | 10rem - 160px
`12` | 12rem - 192px
`16` | 16rem - 256px
`20` | 20rem - 320px
`24` | 24rem - 384px
`30` | 30rem - 480px
`32` | 32rem - 512px
`40` | 40rem - 640px
`48` | 48rem - 768px
`56` | 56rem - 896px
`64` | 64rem - 1024px
{{< /neoblaze_table >}}

## Width {.heading-sm .mt-6 .mb-4}

Use `width-{size}` utility to set element's width.

Class | Properties 
--- | --- |  
`width-auto`   | width: auto;
`width-full`   | width: 100%; 
`width-screen` | width: 100vw;
`width-min`    | width: min-content;
`width-max`    | width: max-content;
`width-fit`    | width: fit-content;
`width-unset`  | width: unset;

{{< rawhtml >}}
<div class="d-flex flex-column gap-4 mt-8">
	<div class="box bg-secondary p-2 rounded fg-white text-center width-8">width-8</div>
	<div class="box bg-secondary p-2 rounded fg-white text-center width-12">width-12</div>
	<div class="box bg-secondary p-2 rounded fg-white text-center width-16">width-16</div>
	<div class="box bg-secondary p-2 rounded fg-white text-center width-24 d-xs-none">width-24</div>
	<div class="box bg-secondary p-2 rounded fg-white text-center width-30 d-xs-none">width-30</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex">
	<div class="box width-8">width-8</div>
	<div class="box width-12">width-12</div>
	<div class="box width-16">width-16</div>
	<div class="box width-24">width-24</div>
	<div class="box width-30">width-30</div>
</div>

{{< /highlight >}}

### Min Width {.heading-xs .mt-6 .mb-4}

Use `min-width-{size}` utility to set element's minimum width.

Class | Properties 
--- | --- |  
`min-width-full`   | min-width: 100%; 
`min-width-screen` | min-width: 100vw;
`min-width-min`    | min-width: min-content;
`min-width-max`    | min-width: max-content;
`min-width-fit`    | min-width: fit-content;
`min-width-unset`  | min-width: unset;

{{< rawhtml >}}
<div class="d-flex flex-column gap-4 mt-8">
	<div class="box bg-secondary p-2 rounded fg-white text-center width-fit min-width-8">min-width-8</div>
	<div class="box bg-secondary p-2 rounded fg-white text-center width-fit min-width-12">min-width-12</div>
	<div class="box bg-secondary p-2 rounded fg-white text-center width-fit min-width-16">min-width-16</div>
	<div class="box bg-secondary p-2 rounded fg-white text-center width-fit min-width-24 d-xs-none">min-width-24</div>
	<div class="box bg-secondary p-2 rounded fg-white text-center width-fit min-width-30 d-xs-none">min-width-30</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex">
	<div class="box min-width-8">min-width-8</div>
	<div class="box min-width-12">min-width-12</div>
	<div class="box min-width-16">min-width-16</div>
	<div class="box min-width-24">min-width-24</div>
	<div class="box min-width-30">width-30</div>
</div>
{{< /highlight >}}


### Max Width {.heading-xs .mt-6 .mb-4}

Use `max-width-{size}` utility to set element's maximum width.

Class | Properties 
--- | --- |  
`max-width-full`   | max-width: 100%; 
`max-width-none`   | max-width: none; 
`max-width-screen` | max-width: 100vw;
`max-width-min`    | min-width: max-content;
`max-width-max`    | max-width: max-content;
`max-width-fit`    | max-width: fit-content;
`max-width-unset`  | max-width: unset;
`max-width-line-sm`  | max-width: 55ch;
`max-width-line`  | max-width: 65ch;
`max-width-line-md`  | max-width: 75ch;

{{< rawhtml >}}
<div class="d-flex flex-column gap-4 mt-8">
	<div class="box bg-secondary p-2 rounded fg-white text-center max-width-8">max-width-8</div>
	<div class="box bg-secondary p-2 rounded fg-white text-center max-width-12">max-width-12</div>
	<div class="box bg-secondary p-2 rounded fg-white text-center max-width-16">max-width-16</div>
	<div class="box bg-secondary p-2 rounded fg-white text-center max-width-24">max-width-24</div>
	<div class="box bg-secondary p-2 rounded fg-white text-center max-width-30">max-width-30</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex">
	<div class="box min-width-8">max-width-8</div>
	<div class="box max-width-12">max-width-12</div>
	<div class="box max-width-16">max-width-16</div>
	<div class="box max-width-24">max-width-124</div>
	<div class="box max-width-30">max-width-30</div>
</div>
{{< /highlight >}}


## Height {.heading-sm .mt-6 .mb-4}

Use `height-{size}` utility to set element's height.

Class | Properties 
--- | --- |  
`height-auto`   | height: auto;
`height-full`   | height: 100%; 
`height-screen` | height: 100vh;
`height-min`    | height: min-content;
`height-max`    | height: max-content;
`height-fit`    | height: fit-content;
`height-unset`  | height: unset;

{{< rawhtml >}}
<div class="d-flex flex-items-end gap-4 mt-8">
	<div class="box bg-secondary p-2 rounded fg-white text-center height-8">height-8</div>
	<div class="box bg-secondary p-2 rounded fg-white text-center height-12">height-12</div>
	<div class="box bg-secondary p-2 rounded fg-white text-center height-16">height-16</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex">
	<div class="box height-8">height-8</div>
	<div class="box height-12">height-12</div>
	<div class="box height-16">height-16</div>
</div>
{{< /highlight >}}

### Min height {.heading-xs .mt-6 .mb-4}

Use `min-height-{size}` utility to set element's minimum height.

Class | Properties 
--- | --- |  
`min-height-full`   | min-height: 100%; 
`min-height-screen` | min-height: 100vh;
`min-height-min`    | min-height: min-content;
`min-height-max`    | min-height: max-content;
`min-height-fit`    | min-height: fit-content;
`min-height-unset`  | min-height: unset;

{{< rawhtml >}}
<div class="d-flex flex-items-end gap-4 mt-8">
	<div class="box bg-secondary p-2 rounded fg-white text-center height-fit min-height-8">min-height-8</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex">
	<div class="box min-height-8">min-height-8</div>
</div>

{{< /highlight >}}


### Max height {.heading-xs .mt-6 .mb-4}

Use `max-height-{size}` utility to set element's maximum height.

Class | Properties 
--- | --- |  
`max-height-none`   | max-height: none; 
`max-height-full`   | max-height: 100%; 
`max-height-screen` | max-height: 100vh;
`max-height-min`    | max-height: min-content;
`max-height-max`    | max-height: max-content;
`max-height-fit`    | max-height: fit-content;
`max-height-unset`  | max-height: unset;


{{< highlight html >}}
<div class="d-flex">
	<div class="box max-height-8">max-height-8</div>
</div>

{{< /highlight >}}

## Resposive Sizing Utilities {.heading-sm .mt-6 .mb-4}

Use `{width|height|min-height|max-height}-{breakpoint}-{property}` for responsive variants like `width-md-16`, `min-width-xs-16`

{{< rawhtml >}}
<div class="d-flex flex-column gap-4 mt-8">
	<div class="box bg-secondary p-2 rounded fg-white text-center width-30 width-sm-16">width-30</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex">
	<div class="box width-30 width-sm-16">width-30</div>
</div>