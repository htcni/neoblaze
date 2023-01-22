---
layout: docs
title: Image
subtitle: Utilities for controlling image and backround properties.
titleBg: bg-secondary--xlight
group: utilities
---

## Responsive Image {.heading-xs .mt-6 .mb-2}

Use `img-full` for a responsive image.

{{< rawhtml >}}
<div class="mt-8">
	<img class="img-full height-20" src="/images/background.png" alt="background"/>
</div>
{{< /rawhtml >}}

``` html
<img class="img-full height-20" src="/images/background.png" alt="background"/>
``` 

## Background Position {.heading-xs .mt-6 .mb-2}

Use `bg-{property}` to set intial position of background image.
For responsive variant use `tracking-{breakpoint}-{property}` like `bg-sm-bottom`.

Class | Properties 
--- | --- |  
`bg-bottom`       | background-position: bottom;
`bg-center`       | background-position: center; 
`bg-left`         | background-position: left; 
`bg-left-bottom`  | background-position: left bottom; 
`bg-left-top`     | background-position: left top; 
`bg-right`        | background-position: right; 
`bg-right-bottom` | background-position: right bottom; 
`bg-right-top`    | background-position: right top; 
`bg-top`          | background-position: top; 


{{< rawhtml >}}
<div class="mt-8 height-20 bg-center" style="background-image: url('/images/background.png')">
</div>
{{< /rawhtml >}}

``` html
<div class="height-20 bg-center" style="background-image: url('/images/background.png')"></div>
``` 

## Background Repeat {.heading-xs .mt-6 .mb-2}

Use `bg-{property}` to control repetition of background image.
For responsive variant use `bg-{breakpoint}-{property}` like `bg-sm-repeat`.

Class | Properties 
--- | --- |  
`bg-repeat`       | background-repeat: repeat;
`bg-no-repeat`    | background-repeat: no-repeat; 
`bg-repeat-x`     | background-repeat: repeat-x; 
`bg-repeat-y`     | background-repeat: repeat-y; 
`bg-repeat-round` | background-repeat: round; 
`bg-repeat-space` | background-repeat: space; 


{{< rawhtml >}}
<div class="mt-8 height-20 bg-no-repeat" style="background-image: url('/images/background.png')">
</div>
{{< /rawhtml >}}

``` html
<div class="height-20 bg-no-repeat" style="background-image: url('/images/background.png')"></div>
```

## Background Size {.heading-xs .mt-6 .mb-2}

Use `bg-{property}` to control size of background's element.
For responsive variant use `bg-{breakpoint}-{property}` like `bg-sm-auto`.

Class | Properties 
--- | --- |  
`bg-auto`     | background-size: auto;
`bg-cover`    | background-size: cover; 
`bg-contain`  | background-size: contain; 


{{< rawhtml >}}
<div class="mt-8 height-20 bg-cover" style="background-image: url('/images/background.png')">
</div>
{{< /rawhtml >}}

``` html
<div class="height-20 bg-cover" style="background-image: url('/images/background.png')"></div>
```

## Icon {.heading-xs .mt-6 .mb-2}

`icon` utility allows to easily align and change size of svg with font-size property. 

{{< rawhtml >}}
<div class="mt-4">
	<span class="icon label-lg">
		<i class="ri-notification-2-line"></i>
	</span>
</div>
{{< /rawhtml >}}

``` html
<span class="icon label-lg">
	<i class="ri-notification-2-line"></i>
</span>
```