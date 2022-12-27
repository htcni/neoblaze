---
layout: docs
title: Box
subtitle: Box is a abstract generic wrapper component.
titleBg: bg-warning--xlight
group: components
---

## Basic Box {.heading-sm .mt-6 .mb-4}

Box is just container with a border.

{{< rawhtml >}}
<div class="box">
	<span>I am a box full of mysteries.</span>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="box">
	<span>I am a box full of mysteries.</span>
</div> 
{{< /highlight >}}


## Customize {.heading-sm .mt-6 .mb-4}

With help of different utilities like [spacing]({{< ref "/docs/utilities/spacing" >}}), [border]({{< ref "/docs/utilities/borders" >}}) etc we can make different components and layout. 

{{< rawhtml >}}
<div class="d-flex flex-column gap-4 flex-wrap">
	<div class="box bg-danger--light p-4">
		<span class="fg-danger--ultra">Alert box</span>
	</div>
	<div class="box d-flex flex-column max-width-20">
		<div class="box__header p-4">
			<h3 class="title-sm">Title.</h3>
			<h4 class="title-xs fg-gray">Subtitle.</43>
		</div>
		<div class="box__image">
			<img src="/images/background.png" alt="background"/>
		</div>
		<div class="box__content p-4">
			<p class="mt-2">Box content
			</p>
		</div>
		<div class="box__action p-2">
			<button class="btn">Action</button>
		</div>
	</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="box bg-danger--light p-4">
	<span class="fg-danger--ultra">Alert box</span>
</div>

<div class="box d-flex flex-column max-width-20">
	<div class="box__header p-4">
		<h3 class="title-sm">Title.</h3>
		<h4 class="title-xs fg-gray">Subtitle.</43>
	</div>
	<div class="box__image">
		<img src="/images/background.png" alt="background"/>
	</div>
	<div class="box__content p-4">
		<p class="mt-2">Box content
		</p>
	</div>
	<div class="box__action p-2">
		<button class="btn">Action</button>
	</div>
	</div>
{{< /highlight >}}



## Anatomy of a Box {.heading-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div>
	<img src="/images/box.svg" alt=""/>
</div>
{{< /rawhtml >}}

A box is composed of five components.

1. Box Container - `.box`
2. Box Header - `.box__header`
3. Box Image - `.box__image`
4. Box Content - `box__content`
5. Box Action - `box__action`

\
Individually all these classes don't apply an styles except `.box__image`.
All the classes above provide a structure.
