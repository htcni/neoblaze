---
layout: docs
title: Accordion
subtitle: Accordion helps users to build vertically collapsable section.
source: https://github.com/htcni/neoblaze/blob/main/src/scss/components/_accordion.scss
group: components
---

## Basic Accordion {.heading-xs .mt-6 .mb-2}

Accordions are often used to present a large amount of content in a compact, space-saving format. They are also useful for organizing content into logical sections, and for allowing users to selectively view the information that is most relevant to them. 

{{< rawhtml >}}
<div class="accordion">
	<div class="accordion__item border rounded-t bd-default" data-accordion="open" aria-expanded="true">
		<div class="accordion__header accordion-icon p-4">Knock Knock!</div>
		<div class="accordion__content border-t bd-default bg-gray--xlight" aria-hidden="false">
			<p class="p-4 mb-0">Who's there?</p>
		</div>
	</div>
	<div class="accordion__item border-x bd-default" data-accordion="close" aria-expanded="false">
		<div class="accordion__header accordion-icon p-4">Deja </div>
		<div class="accordion__content border-t bd-default bg-gray--xlight" aria-hidden="true">
			<p class="p-4 mb-0">Deja who?</p>
		</div>
	</div>
	<div class="accordion__item border rounded-b bd-default" data-accordion="close" aria-expanded="false">
		<div class="accordion__header accordion-icon p-4">Knock Knock!</div>
		<div class="accordion__content border-t bd-default bg-gray--xlight" aria-hidden="true">
			<p class="p-4 mb-0">Who's there?</p>
		</div>
	</div>
</div>
{{< /rawhtml >}}

``` html
<div class="accordion">
	<div class="accordion__item border rounded-t bd-default" data-accordion="open" aria-expanded="true">
		<div class="accordion__header accordion-icon p-4">Knock Knock!</div>
		<div class="accordion__content border-t bd-default bg-gray--xlight" aria-hidden="false">
			<p class="p-4 mb-0">Who's there?</p>
		</div>
	</div>
	<div class="accordion__item border-x bd-default" data-accordion="close" aria-expanded="false">
		<div class="accordion__header accordion-icon p-4">Deja </div>
		<div class="accordion__content border-t bd-default bg-gray--xlight" aria-hidden="true">
			<p class="p-4 mb-0">Deja who?</p>
		</div>
	</div>
	<div class="accordion__item border rounded-b bd-default" data-accordion="close" aria-expanded="false">
		<div class="accordion__header accordion-icon p-4">Knock Knock!</div>
		<div class="accordion__content border-t bd-default bg-gray--xlight" aria-hidden="true">
			<p class="p-4 mb-0">Who's there?</p>
		</div>
	</div>
</div>
``` 


## Anatomy of an Accordion {.heading-xs .mt-6 .mb-2}

![alt text](/images/accordion.png)

An accodrion is composed of five components.

1. Accordion container - `.accordion`
2. Accordion item - `.accordion__item`
3. Accordion header - `.accordion__header`
4. Accordion icon - `.accordion__icon`
5. Accordion content - `accordion__content`


#### Functionality {.title-sm .mt-6 .mb-2}
In your JS environment toggle `data-accordion` attribute value to `open` or  `close`. For expanded accordion set `data-accordion` to `open`.

{{< callout type="warning" >}}
Neoblaze is pure css framework it does not inlcude any javascript files. For an accordion you can use the code below.
{{< /callout >}}


``` js
const accordions = document.querySelectorAll('[data-accordion]');

accordions.forEach((accordion) => {
	let accordionContent = accordion.querySelector('.accordion__content');
	let accordionState = accordion.getAttribute('data-accordion');

	if (accordionState === 'open') {
		accordionContent.style.height = accordionContent.scrollHeight + 'px';
	}

	if (accordionState === 'close') {
		accordionContent.style.height = '0px';
	}

	const accordionHeader = accordion.querySelector('.accordion__header');

	accordionHeader.addEventListener('click', () => {
		accordionState = accordion.getAttribute('data-accordion');
		if (accordionState === 'open') {
			accordionContent.style.height = 0 + 'px';
			accordion.setAttribute('data-accordion', 'close');
			accordion.setAttribute('aria-expanded', 'false');
			accordionContent.setAttribute('aria-hidden', 'true');
		} else if (accordionState === 'close') {
			accordion.setAttribute('data-accordion', 'open');
			accordion.setAttribute('aria-expanded', 'true');
			accordionContent.setAttribute('aria-hidden', 'false');
			accordionContent.style.height = accordionContent.scrollHeight + 'px';
		}
	});
});
``` 

## Variations {.heading-xs .mt-6 .mb-2}

Use `icon-face-left`, `icon-face-right` to change the icon direction. Use `accordion-icon--left` to change the icon position.
You can the icon type with `icon-type-custom`.

{{< rawhtml >}}
<div class="accordion">
	<div class="accordion__item" data-accordion="close" aria-expanded="false">
		<div class="accordion__header accordion-icon icon-face-right p-4 font-sbold">Shipping Details</div>
		<div class="accordion__content border-t bd-default bg-gray--xlight" aria-hidden="true">
			<p class="p-4 mb-0">....</p>
		</div>
	</div>
	<div class="accordion__item" data-accordion="close" aria-expanded="false">
		<div class="accordion__header accordion-icon icon-face-right p-4 font-sbold">Payment Info </div>
		<div class="accordion__content border-t bd-default bg-gray--xlight" aria-hidden="true">
			<p class="p-4 mb-0">....</p>
		</div>
	</div>
		<div class="accordion__item" data-accordion="close" aria-expanded="false">
		<div class="accordion__header accordion-icon--left icon-face-right p-4 font-sbold">Profile</div>
		<div class="accordion__content border-t bd-default bg-gray--xlight" aria-hidden="true">
			<p class="p-4 mb-0">....</p>
		</div>
	</div>
	<div class="accordion__item" data-accordion="close" aria-expanded="false">
		<div class="accordion__header accordion-icon--left icon-face-right p-4 font-sbold">Setting</div>
		<div class="accordion__content border-t bd-default bg-gray--xlight" aria-hidden="true">
			<p class="p-4 mb-0">....</p>
		</div>
	</div>
	<div class="accordion__item" data-accordion="close" aria-expanded="false">
		<div class="accordion__header accordion-icon--left icon-face-right icon-type-custom p-4 font-sbold">Pricing</div>
		<div class="accordion__content border-t bd-default bg-gray--xlight" aria-hidden="true">
			<p class="p-4 mb-0">....</p>
		</div>
	</div>
</div>
{{< /rawhtml >}}

``` html
<div class="accordion">
	<div class="accordion__item" data-accordion="close" aria-expanded="false">
		<div class="accordion__header accordion-icon icon-face-right p-4 font-sbold">Shipping Details</div>
		<div class="accordion__content border-t bd-default bg-gray--xlight" aria-hidden="true">
			<p class="p-4 mb-0">....</p>
		</div>
	</div>
	<div class="accordion__item" data-accordion="close" aria-expanded="false">
		<div class="accordion__header accordion-icon icon-face-right p-4 font-sbold">Payment Info </div>
		<div class="accordion__content border-t bd-default bg-gray--xlight" aria-hidden="true">
			<p class="p-4 mb-0">....</p>
		</div>
	</div>
		<div class="accordion__item" data-accordion="close" aria-expanded="false">
		<div class="accordion__header accordion-icon--left icon-face-right p-4 font-sbold">Profile</div>
		<div class="accordion__content border-t bd-default bg-gray--xlight" aria-hidden="true">
			<p class="p-4 mb-0">....</p>
		</div>
	</div>
	<div class="accordion__item" data-accordion="close" aria-expanded="false">
		<div class="accordion__header accordion-icon--left icon-face-right p-4 font-sbold">Setting</div>
		<div class="accordion__content border-t bd-default bg-gray--xlight" aria-hidden="true">
			<p class="p-4 mb-0">....</p>
		</div>
	</div>
	<div class="accordion__item" data-accordion="close" aria-expanded="false">
		<div class="accordion__header accordion-icon--left icon-face-right icon-type-custom p-4 font-sbold">Pricing</div>
		<div class="accordion__content border-t bd-default bg-gray--xlight" aria-hidden="true">
			<p class="p-4 mb-0">....</p>
		</div>
	</div>
</div>
``` 

##  SASS {.heading-xs .mt-6 .mb-2}

Customize accordion with these variables.


```  scss
	$icon-width: 24px;
	$icon-height: 24px;
	$transition-icon: transform 250ms ease-in-out;
	$transition-height: height 250ms ease-in-out;

	$accordion-icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z'/%3E%3C/svg%3E");
	$accordion-icon-open: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z'/%3E%3C/svg%3E");
	$accordion-icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M5 11h14v2H5z'/%3E%3C/svg%3E");

``` 