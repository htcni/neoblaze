---
layout: docs
title: Container
subtitle: Container are used to center the content.
source: https://github.com/htcni/neoblaze/blob/main/src/scss/layouts/_container.scss
group: layout
---

## Container {.heading-xs .mt-6 .mb-2}

Container are used to fix `max-width` of layout and center the content horizontally.

Use `container-{size}` to define a container like `container`, `container-md`.

 Class | Dimension | Properties
--- | --- |  --- |
	``  | 1440px | max-width: 1440px;
 `lg` | 1680px | max-width: 1680px;
 `md` | 1240px | max-width: 1240px;
 `sm` | 980px  | max-width: 980px;
 `xs` | 780px  | max-width: 780px;


 {{< rawhtml >}}
<div class="border-4 bd-default rounded mt-8">
	<div class="container mx-auto bg-secondary height-4 d-flex flex-items-center flex-justify-center">
		<span class="fg-white">container</span>
	</div>
	<div class="container-xs mx-auto bg-secondary height-4 mt-4 d-flex flex-items-center flex-justify-center">
		<span class="fg-white">container-xs</span>
	</div>
</div>
{{< /rawhtml >}}

``` html
<div class="container mx-auto">
<div class="container-xs mx-auto">
``` 
