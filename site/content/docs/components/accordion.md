---
layout: docs
title: Accordion
subtitle: Accordion helps users to build vertically collapsable section.
titleBg: bg-tertiary--xlight
group: components
---

## Basic Accordion {.heading-sm .mt-6 .mb-4}

Use `btn-group` and `btn-group__item` to group buttons together.

{{< rawhtml >}}
<div class="bg-light">
	<div class="accordion border rounded-t bd-default" data-accordion="open">
		<div class="accordion__header accordion-icon p-4">Knock Knock!</div>
		<div class="accordion__content border-t bd-default bg-gray--xlight">
			<p class="p-4 mb-0">Who's there?</p>
		</div>
	</div>
	<div class="accordion border-x bd-default" data-accordion="close">
		<div class="accordion__header accordion-icon p-4">Deja </div>
		<div class="accordion__content border-t bd-default bg-gray--xlight">
			<p class="p-4 mb-0">Deja who?</p>
		</div>
	</div>
	<div class="accordion border rounded-b bd-default" data-accordion="close">
		<div class="accordion__header accordion-icon p-4">Knock Knock!</div>
		<div class="accordion__content border-t bd-default bg-gray--xlight">
			<p class="p-4 mb-0">Who's there?</p>
		</div>
	</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="accordion border rounded-t bd-default" data-accordion="open">
	<div class="accordion__header accordion-icon p-4">Knock Knock!</div>
	<div class="accordion__content border-t bd-default bg-gray--xlight">
		<p class="p-4 mb-0">Who's there?</p>
	</div>
</div>
<div class="accordion border-x bd-default" data-accordion="close">
	<div class="accordion__header accordion-icon p-4">Deja </div>
	<div class="accordion__content border-t bd-default bg-gray--xlight">
		<p class="p-4 mb-0">Deja who?</p>
	</div>
</div>
<div class="accordion border rounded-b bd-default" data-accordion="close">
	<div class="accordion__header accordion-icon p-4">Knock Knock!</div>
	<div class="accordion__content border-t bd-default bg-gray--xlight">
		<p class="p-4 mb-0">Who's there?</p>
	</div>
</div>
{{< /highlight >}}
