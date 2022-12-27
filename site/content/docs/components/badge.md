---
layout: docs
title: Badge
subtitle: Badges shows status or unread notifications.
titleBg: bg-success--xlight
group: components
---

## Badge {.heading-sm .mt-6 .mb-4}

A basic badge is a rounded dot. It can be used as status indicator.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4">
	<span class="badge"></span>
	<span class="badge badge-primary"></span>
	<span class="badge badge-danger"></span>
	<span class="badge badge-warning"></span>
	<span class="badge badge-success"></span>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<span class="badge"></span>
<span class="badge badge-primary"></span>
<span class="badge badge-danger"></span>
<span class="badge badge-warning"></span>
<span class="badge badge-success"></span>
{{< /highlight >}}


### Adding badges {.heading-xs .mt-6 .mb-4}

A badge can be added to any element. Add `badge__parent` to parent element and `badge__child` to its corresponding child element.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4">
	<button class="btn btn-icon" aria-label="bell icon">
		<span class="icon title badge-parent">
			<i class="ri-notification-line"></i>
		<span class="badge badge-danger badge__child top-0 right-0"></span>
		</span>
	</button>
	<button class="btn btn-icon" aria-label="battery icon">
		<span class="icon title badge-parent">
			<i class="ri-battery-fill"></i>
			<span class="badge badge-success badge__child top-0 right-0 min-width-0.5 min-height-0.5"></span>
		</span>
	</button>
	<div class="badge-parent">
		<img class="avatar avatar-lg rounded-sm" src="/images/profile.png" alt="profile"/>
		<span class="badge badge-primary badge__child bd-white border-2 -bottom-1 -right-1"></span>
	</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<button class="btn btn-icon" aria-label="bell icon">
	<span class="icon title badge-parent">
		<i class="ri-notification-line"></i>
	<span class="badge badge-danger badge__child top-0 right-0"></span>
	</span>
</button>

<button class="btn btn-icon" aria-label="battery icon">
	<span class="icon title badge-parent">
		<i class="ri-battery-fill"></i>
	<span class="badge badge-success badge__child top-0 right-0 min-width-0.5 min-height-0.5"></span>
	</span>
</button>

<div class="badge-parent">
	<img class="avatar avatar-lg rounded-sm" src="/images/profile.png" alt="profile"/>
	<span class="badge badge-primary badge__child bd-white border-2 -bottom-1 -right-1"></span>
</div>
{{< /highlight >}}


## Badge Text {.heading-sm .mt-6 .mb-4}

Use badge text to show any counters. Add `badge-text` to the badge.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4">
	<button class="btn btn-icon" aria-label="bell icon">
		<span class="icon title badge-parent">
			<i class="ri-notification-line"></i>
		<span class="badge badge-text badge-danger badge__child -top-1 -right-1">4</span>
		</span>
	</button>
	<button class="btn btn-icon" aria-label="chat icon">
		<span class="icon title badge-parent">
			<i class="ri-message-2-line"></i>
		<span class="badge badge-text badge-primary badge__child -top-1 -right-2">12+</span>
		</span>
	</button>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<button class="btn btn-icon" aria-label="bell icon">
	<span class="icon title badge-parent">
		<i class="ri-notification-line"></i>
	<span class="badge badge-text badge-danger badge__child -top-1 -right-1">4</span>
	</span>
</button>

<button class="btn btn-icon" aria-label="chat icon">
	<span class="icon title badge-parent">
		<i class="ri-message-2-line"></i>
	<span class="badge badge-text badge-primary badge__child -top-1 -right-2">12+</span>
	</span>
</button>
{{< /highlight >}}

## Variations {.heading-sm .mt-6 .mb-4}

With the help of utilities different variations of a badge can be created.

### Border {.heading-xs .mt-6 .mb-4}

Adjust border width and color with [border]({{< ref "/docs/utilities/borders" >}}) utilities. 

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4 flex-wrap">
	<button class="btn btn-icon" aria-label="bell icon">
		<span class="icon title badge-parent">
			<i class="ri-notification-fill"></i>
		<span class="badge badge-text badge-neutral badge__child bd-white border-2 -top-2 -right-3">4+</span>
		</span>
	</button>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<button class="btn btn-icon" aria-label="bell icon">
	<span class="icon title badge-parent">
		<i class="ri-notification-fill"></i>
	<span class="badge badge-text badge-neutral badge__child bd-white border-2 -top-2 -right-3">4+</span>
	</span>
</button>
{{< /highlight >}}
