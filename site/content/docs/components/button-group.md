---
layout: docs
title: Button Group
subtitle: Group series of buttons.
source: https://github.com/htcni/neoblaze/blob/main/src/scss/components/_button.scss
group: components
---

## Button Group {.heading-xs .mt-6 .mb-2}

Use `btn-group` and `btn-group__item` to group buttons together.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4">
	<div class="btn-group" role="group">
		<button class="btn-group__item btn label rounded-l">Left</button>
		<button class="btn-group__item btn label">Middle</button>
		<button class="btn-group__item btn label rounded-r">Right</button>
	</div>  
	<div class="btn-group" role="group">
		<button class="btn-group__item btn btn-outline-tertiary label rounded-l">Yes</button>
		<button class="btn-group__item btn btn-outline-danger label">Maybe</button>
		<button class="btn-group__item btn btn-outline-tertiary label rounded-r">No</button>
	</div>
</div>
{{< /rawhtml >}}

``` html
<div class="btn-group" role="group">
	<button class="btn-group__item btn label rounded-l">Left</button>
	<button class="btn-group__item btn label">Middle</button>
	<button class="btn-group__item btn label rounded-r">Right</button>
</div>  

<div class="btn-group" role="group">
	<button class="btn-group__item btn btn-outline-tertiary label rounded-l">Yes</button>
	<button class="btn-group__item btn btn-outline-danger label">Maybe</button>
	<button class="btn-group__item btn btn-outline-tertiary label rounded-r">No</button>
</div>
``` 


## Vertical Button Group {.heading-xs .mt-6 .mb-2}

Use `btn-group--vertical` and `btn-group__item--vertical` to group buttons together vertically.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4">
	<div class="btn-group--vertical" role="group">
		<button class="btn-group__item--vertical btn label rounded-t">Figma</button>
		<button class="btn-group__item--vertical btn label">Adobe</button>
		<button class="btn-group__item--vertical btn label rounded-b">Paint</button>
	</div>  
	<div class="btn-group--vertical" role="group">
		<button class="btn-group__item--vertical btn btn-tertiary--inverted label rounded-t">Yes</button>
		<button class="btn-group__item--vertical btn btn-tertiary--inverted label">Maybe</button>
		<button class="btn-group__item--vertical btn btn-tertiary--inverted label rounded-b">No</button>
	</div>
</div>
{{< /rawhtml >}}

``` html
<div class="btn-group--vertical" role="group">
	<button class="btn-group__item--vertical btn label rounded-t">Figma</button>
	<button class="btn-group__item--vertical btn label">Adobe</button>
	<button class="btn-group__item--vertical btn label rounded-b">Paint</button>
</div>  

<div class="btn-group--vertical" role="group">
	<button class="btn-group__item--vertical btn btn-tertiary--inverted label rounded-t">Yes</button>
	<button class="btn-group__item--vertical btn btn-tertiary--inverted label">Maybe</button>
	<button class="btn-group__item--vertical btn btn-tertiary--inverted label rounded-b">No</button>
</div>

``` 