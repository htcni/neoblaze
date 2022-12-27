---
layout: docs
title: Links
subtitle: Links can be used to customize anchor tags.
titleBg: bg-primary--xlight
group: components
---

## Default {.heading-sm .mt-6 .mb-4}

Anchor tag by default has no styles. Use `.link` to apply the style.

{{< rawhtml >}}
  <div class="d-flex flex-column flex-justify-center gap-4">
		<a class="link" href="#">Click here</a>
		<a class="link text-underline" href="#">Buy Now</a>
  </div>
{{< /rawhtml >}}

{{< highlight html >}}
<a href="#">Link</a>
<a class="link" href="#">Click here</a>
<a class="link text-underline" href="#">Buy Now</a>

{{< /highlight >}}

## Colors {.heading-sm .mt-6 .mb-4}
Use `.link-primary` and other semantic color classes.

{{< rawhtml >}}
  <div class="d-flex flex-column flex-justify-center gap-4">
		<a class="link" href="#">Default</a>
		<a class="link link-primary" href="#">Primary link</a>
		<a class="link link-secondary" href="#">Secondary link</a>
		<a class="link link-success" href="#">Success link</a>
		<a class="link link-warning" href="#">Warning link</a>
		<a class="link link-danger" href="#">Danger link</a>
  </div>
{{< /rawhtml >}}

{{< highlight html >}}
<a class="link" href="#">Default</a>
<a class="link link-primary" href="#">Primary link</a>
<a class="link link-secondary" href="#">Secondary link</a>
<a class="link link-success" href="#">Success link</a>
<a class="link link-warning" href="#">Warning link</a>
<a class="link link-danger" href="#">Danger link</a>
{{< /highlight >}}

## Variations {.heading-sm .mt-6 .mb-4}

With the help of utilities different variations of card can be created.

### Underline {.heading-xs .mt-6 .mb-4}

Add or remove underline with the help of [typography]({{< ref "/docs/utilities/typography" >}}) utilities.

{{< rawhtml >}}
  <div class="d-flex flex-column flex-justify-center gap-4">
		<a class="link text-underline" href="#">Underline</a>
		<a class="link link-danger text-no-underline-hover" href="#">No underline on hover</a>
  </div>
{{< /rawhtml >}}

{{< highlight html >}}
<a class="link text-underline" href="#">Underline</a>
<a class="link link-danger text-no-underline-hover" href="#">No underline on hover</a>
{{< /highlight >}}
