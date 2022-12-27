---
layout: docs
title: Alerts
subtitle: Alerts are used to quickly grab user attention.
titleBg: bg-warning--xlight
group: components
---

## Default {.heading-sm .mt-6 .mb-4}

Alert by default is just a rounded box.

{{< highlight html >}}
<div class="alert">This is a alert</div>
{{< /highlight >}}

{{< rawhtml >}}
<div class="alert">This is a alert</div>
{{< /rawhtml >}}

Alert can have multiple paragraph nested inside it.

{{< rawhtml >}}
<div class="alert">
	<p>I don't hate you</p>
	<p>I just don't like that you exist</p>
</div>
{{< /rawhtml >}}


## Colors {.heading-sm .mt-6 .mb-4}

Add `.alert-danger` ,`.alert-success` and other classes to emphasize the message.

{{< highlight html >}}
<div class="alert alert-danger label font-medium">This is a danger alert.</div>
<div class="alert alert-warning label font-medium">This is a warning alert.</div>
<div class="alert alert-success label font-medium">This is a success alert.</div>
{{< /highlight >}}

{{< rawhtml >}}
<div class="alert alert-danger label font-medium">This is a danger alert.</div>
<div class="alert alert-warning label font-medium">This is a warning alert.</div>
<div class="alert alert-info label font-medium">This is a info alert.</div>
<div class="alert alert-success label font-medium">This is a success alert.</div>
<div class="alert alert-primary label font-medium">This is a primary alert.</div>
<div class="alert alert-secondary label font-medium">This is a secondary alert.</div>
<div class="alert alert-tertiary label font-medium">This is a tertiary.</div>
<div class="alert alert-neutral label font-medium">This is a neutal alert.</div>
<div class="alert alert-white label font-medium">This is a white alert.</div>
<div class="alert alert-black label font-medium">This is a black alert.</div>
{{< /rawhtml >}}


## Stripe {.heading-sm .mt-6 .mb-4}

Stripe alerts can be used as banners. By default stripe is on the left side.

Use `alert-stripe--top`, `alert-stripe--right` and  `alert-stripe--bottom` for different sides.

{{< highlight html >}}
<div class="alert alert-stripe alert-danger label font-medium">New update</div>
<div class="alert alert-stripe--top alert-warning label font-medium">Deprication Notice</div>
{{< /highlight >}}


{{< rawhtml >}}
<div class="alert alert-stripe alert-danger label font-medium">Offcourse</div>
<div class="alert alert-stripe--top alert-warning label font-medium">SIZE matters.</div>
<div class="alert alert-stripe--bottom alert-success label font-medium">Nobody wants</div>
<div class="alert alert-stripe--right alert-info label font-medium">A small cup of coffee.</div>
{{< /rawhtml >}}


## With Icons {.heading-sm .mt-6 .mb-4}

You can also create alerts with icons. You may need to add extra utility classes. 


{{< highlight html >}}
<div class="alert alert-stripe alert-success label font-medium">
	<div class="font-bold d-flex flex-items-center gap-2">
		<span class="icon label-xl">
			<i class="ri-lightbulb-line"></i>
		</span>
		<span>DID YOU KNOW?</span>
	</div>
	<p>90% of Rick and Morty fanboys think they're Rick.</p>
	<p>... when in reality they're Jerry.</p>
</div>
{{< /highlight >}}


{{< rawhtml >}}
<div class="alert alert-stripe alert-success label font-medium">
	<div class="font-bold d-flex flex-items-center gap-2">
		<span class="icon label-xl">
			<i class="ri-lightbulb-line"></i>
		</span>
		<span>DID YOU KNOW?</span>
	</div>
	<p class="mt-4">
		90% of Rick and Morty fanboys think they're Rick.<br>
		... when in reality they're Jerry.
	</p>
</div>
{{< /rawhtml >}}


## With Actions {.heading-sm .mt-6 .mb-4}

Alert can have action buttons.

{{< highlight html >}}
<div class="alert alert-stripe alert-info label font-medium d-flex flex-items-center">
	<span>I am a writer. My hobbies include not writing.</span>
	<button type="button" aria-label="close" class="btn btn-icon fg-info--ultra ml-auto">
		<span class="icon label-lg">
			<i class="ri-close-line"></i>
		</span>
	</button>
</div>

<div class="alert alert-stripe alert-warning label font-medium d-flex flex-items-center">
	<span>Beam Me Up, Scotty</span>
	<button type="button" aria-label="close" class="btn btn-warning ml-auto">
		Start Transmission
	</button>
</div>
{{< /highlight >}}


{{< rawhtml >}}
<div class="alert alert-stripe alert-info label font-medium d-flex flex-items-center">
	<span>I am a writer. My hobbies include not writing.</span>
	<button type="button" aria-label="close" class="btn btn-icon fg-info--ultra ml-auto">
		<span class="icon label-lg">
			<i class="ri-close-line"></i>
		</span>
	</button>
</div>

<div class="alert alert-stripe alert-warning label font-medium d-flex flex-items-center">
	<span>Beam Me Up, Scotty</span>
	<button type="button" aria-label="close" class="btn btn-warning ml-auto">
		Start Transmission
	</button>
</div>
{{< /rawhtml >}}


## Variations {.heading-sm .mt-6 .mb-4}

With help of utilites multiple variations of alert can be made.

{{< highlight html >}}
<div class="alert alert-danger rounded-none label font-medium">Alert without rounded borders</div>
<div class="alert alert-success border-0 label font-medium">Alert without border</div>
<div class="alert alert-info bg-transparent label font-medium">Alert with no money</div>
{{< /highlight >}}


{{< rawhtml >}}
<div class="alert alert-danger rounded-none label font-medium">Alert without rounded borders</div>
<div class="alert alert-success border-0 label font-medium">Alert without border</div>
<div class="alert alert-info bg-transparent label font-medium">Alert with no money</div>
{{< /rawhtml >}}
