---
layout: docs
title: Links
subtitle: Links can be used to customize anchor tags.
source: https://github.com/htcni/neoblaze/blob/main/src/scss/components/_link.scss
group: components
---

## Default {.heading-xs .mt-6 .mb-2}

Anchor tag by default has no styles. Use `.link` to apply the style.

{{< rawhtml >}}
  <div class="d-flex flex-column flex-justify-center gap-4">
		<a class="link" href="#">Click here</a>
		<a class="link text-underline" href="#">Buy Now</a>
  </div>
{{< /rawhtml >}}

``` html
<a href="#">Link</a>
<a class="link" href="#">Click here</a>
<a class="link text-underline" href="#">Buy Now</a>

``` 

## Colors {.heading-xs .mt-6 .mb-2}
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

``` html
<a class="link" href="#">Default</a>
<a class="link link-primary" href="#">Primary link</a>
<a class="link link-secondary" href="#">Secondary link</a>
<a class="link link-success" href="#">Success link</a>
<a class="link link-warning" href="#">Warning link</a>
<a class="link link-danger" href="#">Danger link</a>
``` 

## Variations {.heading-xs .mt-6 .mb-2}

With the help of utilities different variations of card can be created.

### Underline {.title-sm .mt-6 .mb-2}

Add or remove underline with the help of [typography]({{< ref "/docs/utilities/typography" >}}) utilities.

{{< rawhtml >}}
  <div class="d-flex flex-column flex-justify-center gap-4">
		<a class="link text-underline" href="#">Underline</a>
		<a class="link link-danger text-no-underline-hover" href="#">No underline on hover</a>
  </div>
{{< /rawhtml >}}

``` html
<a class="link text-underline" href="#">Underline</a>
<a class="link link-danger text-no-underline-hover" href="#">No underline on hover</a>
``` 
