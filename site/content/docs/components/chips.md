---
layout: docs
title: Chips
subtitle: Chips helps in filter and label information.
titleBg: bg-tertiary--xlight
group: components
---

## Chips {.heading-sm .mt-6 .mb-4}

Use chips as tag or as filter.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4">
	<span class="chip">New
		<i class="ri-close-line"></i>
	</span>
	<span class="chip chip-info">Stable</span>
	<span class="chip chip-success">Release</span>
	<span class="chip chip-danger">Depricated</span>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<span class="chip">New
	<i class="ri-close-line"></i>
</span>
<span class="chip chip-info">Stable</span>
<span class="chip chip-success">Release</span>
<span class="chip chip-danger">Depricated</span>
{{< /highlight >}}


## Variations {.heading-sm .mt-6 .mb-4}

With the help of utilities different variations of a chips can be created.

### Filled {.heading-xs .mt-6 .mb-4}

Adjust color with [color]({{< ref "/docs/utilities/colors" >}}) utilities. 

{{< rawhtml >}}
	<div class="d-flex flex-items-center gap-4 flex-wrap">
		<span class="chip bg-black fg-white">New
			<i class="ri-close-line"></i>
		</span>
		<span class="chip bg-success--light fg-success--ultra">Stable</span>
		<span class="chip bg-danger fg-white">Depricated</span>
	</div>
{{< /rawhtml >}}

{{< highlight html >}}
<span class="chip bg-black fg-white">New
	<i class="ri-close-line"></i>
</span>
<span class="chip bg-success--light fg-success--ultra">Stable</span>
<span class="chip bg-danger fg-white">Depricated</span>
{{< /highlight >}}

### Shape {.heading-xs .mt-6 .mb-4}

Adjust border radius and other border properties with [border]({{< ref "/docs/utilities/borders" >}}) utilities.

{{< rawhtml >}}
	<div class="d-flex flex-items-center gap-4 flex-wrap">
		<span class="chip bg-black fg-white rounded-full">New
			<i class="ri-close-line"></i>
		</span>
		<span class="chip bg-success fg-white rounded-none">Stable</span>
		<span class="chip bg-danger fg-white rounded-sm">Depricated</span>
	</div>
{{< /rawhtml >}}

{{< highlight html >}}
	<span class="chip bg-black fg-white">New
		<i class="ri-close-line"></i>
	</span>
	<span class="chip bg-success fg-white">Stable</span>
	<span class="chip bg-danger fg-white">Depricated</span>
{{< /highlight >}}


### Size {.heading-xs .mt-6 .mb-4}

Adjust the size of buttons with [spacing]({{< ref "/docs/utilities/spacing" >}}) and font utilities.

{{< rawhtml >}}
	<div class="d-flex flex-items-center gap-4 flex-wrap">
		<span class="chip bg-black fg-white rounded-full label-sm">New
			<i class="ri-close-line"></i>
		</span>
		<span class="chip bg-success fg-white rounded label-lg px-4">Stable</span>
	</div>
{{< /rawhtml >}}

{{< highlight html >}}
	<span class="chip bg-black fg-white rounded-full label-sm">New
		<i class="ri-close-line"></i>
	</span>
	<span class="chip bg-success fg-white rounded label-lg px-4">Stable</span>
{{< /highlight >}}
