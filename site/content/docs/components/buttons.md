---
layout: docs
title: Buttons
subtitle: Buttons helps users to take some action.
titleBg: bg-secondary--xlight
group: components
---

## All buttons {.heading-sm .mt-6 .mb-4}

There are five types of buttons.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4">
	<button class="btn btn-primary">Solid</button>
	<button class="btn btn-outline-success">Outline</button>
	<button class="btn btn-text-secondary">Text</button>
	<button class="btn btn-link">Link</button>
	<button class="btn btn-icon" aria-label="bell icon">
		<span class="icon label-lg">
			<i class="ri-notification-2-line"></i>
		</span>
	</button>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<button class="btn btn-primary">Solid</button>
<button class="btn btn-outline-success">Outline</button>
<button class="btn btn-text-secondary">Text</button>
<button class="btn btn-link">Link</button>
<button class="btn btn-icon" aria-label="bell icon">
	<span class="icon label-lg">
		<i class="ph-bell"></i>
	</span>
</button>
{{< /highlight >}}


## Solid buttons {.heading-sm .mt-6 .mb-4}

Solid button emphasize primary actions with solid and high contrast background.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4 flex-wrap">
	<button class="btn">Wake up</button>
	<button class="btn btn-primary">Subscribe</button>
	<button class="btn btn-secondary">Login</button>
	<button class="btn btn-tertiary">Be Nice</button>
	<button class="btn btn-info">Dude</button>
	<button class="btn btn-warning">Add to Heart</button>
	<button class="btn btn-danger">Don't Push me</button>
	<button class="btn btn-success">Offer Bribe</button>
	<button class="btn btn-neutral">Tommorow</button>
	<button class="btn btn-black">Ding</button>
	<button class="btn btn-white">Dong</button>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<button class="btn">Wake up</button>
<button class="btn btn-primary">Subscribe</button>
<button class="btn btn-secondary">Login</button>
<button class="btn btn-tertiary">Be Nice</button>
<button class="btn btn-info">Dude</button>
<button class="btn btn-warning">Add to Heart</button>
<button class="btn btn-danger">Don't Push me</button>
<button class="btn btn-success">Offer Bribe</button>
<button class="btn btn-neutral">Tommorow</button>
<button class="btn btn-black">Ding</button>
<button class="btn btn-white">Dong</button>
{{< /highlight >}}


### Inverted Solid buttons {.heading-xs .mt-6 .mb-4}

Solid button also have inverted style.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4 flex-wrap">
	<button class="btn btn-primary--inverted">Subscribe</button>
	<button class="btn btn-secondary--inverted">Login</button>
	<button class="btn btn-tertiary--inverted">Be Nice</button>
	<button class="btn btn-info--inverted">Dude</button>
	<button class="btn btn-warning--inverted">Add to Heart</button>
	<button class="btn btn-danger--inverted">Don't Push me</button>
	<button class="btn btn-success--inverted">Offer Bribe</button>
	<button class="btn btn-neutral--inverted">Tommorow</button>
	<button class="btn btn-black--inverted">Ding</button>
	<button class="btn btn-white--inverted">Dong</button>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<button class="btn btn-primary--inverted">Subscribe</button>
<button class="btn btn-secondary--inverted">Login</button>
<button class="btn btn-tertiary--inverted">Be Nice</button>
<button class="btn btn-info--inverted">Dude</button>
<button class="btn btn-warning--inverted">Add to Heart</button>
<button class="btn btn-danger--inverted">Don't Push me</button>
<button class="btn btn-success--inverted">Offer Bribe</button>
<button class="btn btn-neutral--inverted">Tommorow</button>
<button class="btn btn-black--inverted">Ding</button>
<button class="btn btn-white--inverted">Dong</button>
{{< /highlight >}}


## Outline buttons {.heading-sm .mt-6 .mb-4}

Outline button are used to emphasize medium prominent action.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4 flex-wrap">
	<button class="btn btn-outline">Wake up</button>
	<button class="btn btn-outline-primary">Subscribe</button>
	<button class="btn btn-outline-secondary">Login</button>
	<button class="btn btn-outline-tertiary">Be Nice</button>
	<button class="btn btn-outline-info">Dude</button>
	<button class="btn btn-outline-warning">Add to Heart</button>
	<button class="btn btn-outline-danger">Don't Push me</button>
	<button class="btn btn-outline-success">Offer Bribe</button>
	<button class="btn btn-outline-neutral">Tommorow</button>
	<button class="btn btn-outline-black">Ding</button>
	<button class="btn btn-outline-white">Dong</button>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<button class="btn btn-outline">Wake up</button>
<button class="btn btn-outline-primary">Subscribe</button>
<button class="btn btn-outline-secondary">Login</button>
<button class="btn btn-outline-tertiary">Be Nice</button>
<button class="btn btn-outline-info">Dude</button>
<button class="btn btn-outline-warning">Add to Heart</button>
<button class="btn btn-outline-danger">Don't Push me</button>
<button class="btn btn-outline-success">Offer Bribe</button>
<button class="btn btn-outline-neutral">Tommorow</button>
<button class="btn btn-outline-black">Ding</button>
<button class="btn btn-outline-white">Dong</button>
{{< /highlight >}}


## Text buttons {.heading-sm .mt-6 .mb-4}

Outline button are used for less prominent action.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4 flex-wrap">
	<button class="btn btn-text">Wake up</button>
	<button class="btn btn-text-primary">Subscribe</button>
	<button class="btn btn-text-secondary">Login</button>
	<button class="btn btn-text-tertiary">Be Nice</button>
	<button class="btn btn-text-info">Dude</button>
	<button class="btn btn-text-warning">Add to Heart</button>
	<button class="btn btn-text-danger">Don't Push me</button>
	<button class="btn btn-text-success">Offer Bribe</button>
	<button class="btn btn-text-neutral">Tommorow</button>
	<button class="btn btn-text-black">Ding</button>
	<button class="btn btn-text-white">Dong</button>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<button class="btn btn-text">Wake up</button>
<button class="btn btn-text-primary">Subscribe</button>
<button class="btn btn-text-secondary">Login</button>
<button class="btn btn-text-tertiary">Be Nice</button>
<button class="btn btn-text-info">Dude</button>
<button class="btn btn-text-warning">Add to Heart</button>
<button class="btn btn-text-danger">Don't Push me</button>
<button class="btn btn-text-success">Offer Bribe</button>
<button class="btn btn-text-neutral">Tommorow</button>
<button class="btn btn-text-black">Ding</button>
<button class="btn btn-text-white">Dong</button>
{{< /highlight >}}


## With Icons {.heading-sm .mt-6 .mb-4}

Buttons can appear with icons and labels.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4 flex-wrap">
	<button class="btn btn-black">
		<span class="icon mr-1 label-md">
			<i class="ri-github-fill"></i>
		</span>
		<span>Github</span>
	</button>
	<button class="btn btn-outline-primary">
			<span class="icon mr-1 label-md">
				<i class="ri-upload-cloud-line"></i>
			</span>
			<span>Upload</span>
	</button>
	<button class="btn btn-success">
		<span class="icon mr-1 label-md">
			<i class="ri-check-line"></i>
		</span>
		<span>Save</span>
	</button>
</div>

{{< /rawhtml >}}

{{< highlight html >}}
<button class="btn btn-black">
	<span class="icon mr-1 label-md">
		<i class="ri-github-fill"></i>
	</span>
	<span>Github</span>
</button>

<button class="btn btn-outline-primary">
		<span class="icon mr-1 label-md">
			<i class="ri-upload-cloud-line"></i>
		</span>
		<span>Upload</span>
</button>

<button class="btn btn-success">
	<span class="icon mr-1 label-md">
		<i class="ri-check-line"></i>
	</span>
	<span>Save</span>
</button>
{{< /highlight >}}


## Icon buttons {.heading-sm .mt-6 .mb-4}

Icon buttons can be used for a specific action. You can use `btn-icon-primary` and other classes to apply theme colors.  
You can use `icon-bg-none` to remove the background on hover.



{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4 flex-wrap">
	<button class="btn btn-icon" aria-label="sun icon">
		<span class="icon label-lg">
			<i class="ri-sun-line"></i>
		</span>
	</button>
	<button class="btn btn-icon fg-secondary" aria-label="moon icon">
		<span class="icon label-lg">
			<i class="ri-moon-fill"></i>
		</span>
	</button>
	<button class="btn btn-icon-warning icon-bg-none" aria-label="folder icon">
		<span class="icon title">
			<i class="ri-folder-3-fill"></i>
		</span>
	</button>
	<button class="btn btn-icon-danger fg-danger" aria-label="youtube icon">
		<span class="icon title-md p-2">
			<i class="ri-youtube-fill"></i>
		</span>
	</button>

</div>

{{< /rawhtml >}}

{{< highlight html >}}
<button class="btn btn-icon" aria-label="sun icon">
	<span class="icon label-lg">
		<i class="ri-sun-line"></i>
	</span>
</button>

<button class="btn btn-icon fg-secondary" aria-label="moon icon">
	<span class="icon label-lg">
		<i class="ri-moon-fill"></i>
	</span>
</button>

<button class="btn btn-icon-warning icon-bg-none" aria-label="folder icon">
	<span class="icon title">
		<i class="ri-folder-3-fill"></i>
	</span>
</button>

<button class="btn btn-icon-danger fg-danger" aria-label="youtube icon">
	<span class="icon title-md p-2">
		<i class="ri-youtube-fill"></i>
	</span>
</button>
{{< /highlight >}}


## Link buttons {.heading-sm .mt-6 .mb-4}

Use link buttons for trigger onpage javacript.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4 flex-wrap">
	<button class="btn btn-link">More</button>
	<button class="btn btn-link fg-primary">Add</button>
	<button class="btn btn-link fg-secondary">Create</button>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<button class="btn btn-link">More</button>
<button class="btn btn-link fg-primary">Add</button>
<button class="btn btn-link fg-secondary">Create</button>
{{< /highlight >}}


## Variations {.heading-sm .mt-6 .mb-4}

With the help of utilities different variations of buttons can be created.

### Elevation {.heading-xs .mt-6 .mb-4}

Add elevation with [shadow]({{< ref "/docs/utilities/shadows" >}}) utilities. 


{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4 flex-wrap">
	<button class="btn btn-outline-primary shadow">Subscribe</button>
	<button class="btn btn-black--inverted px-8 shadow-md">Pay Now</button>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<button class="btn btn-outline-primary shadow">Subscribe</button>
<button class="btn btn-black--inverted px-8 shadow-md">Pay Now</button>
{{< /highlight >}}

### Size {.heading-xs .mt-6 .mb-4}

Adjust the size of buttons with [spacing]({{< ref "/docs/utilities/spacing" >}}) and font utilities.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4 flex-wrap">
<button class="btn btn-primary px-6 py-3 label-lg">Getting started</button>
<button class="btn btn-black px-8">Pay Now</button>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<button class="btn btn-primary px-6 py-3 label-lg">Getting started</button>
<button class="btn btn-black px-8">Pay Now</button>
{{< /highlight >}}

### Shape {.heading-xs .mt-6 .mb-4}

Adjust border radius and other border properties with [border]({{< ref "/docs/utilities/borders" >}}) utilities.


{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4 flex-wrap">
<button class="btn btn-primary px-6 rounded-full">Sign Up</button>
<button class="btn btn-black px-8 rounded-none">Pay Now</button>
<button class="btn btn-outline-success px-8 rounded-none bd-success">Buy</button>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<button class="btn btn-primary px-6 rounded-full">Sign Up</button>
<button class="btn btn-black px-8 rounded-none">Pay Now</button>
{{< /highlight >}}

