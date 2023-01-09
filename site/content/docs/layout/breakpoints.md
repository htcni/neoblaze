---
layout: docs
title: Breakpoints
subtitle: Use breakpoints for responsive design.
titleBg: bg-tertiary--xlight
group: layout
---

## Breakpoints {.heading-sm .mt-6 .mb-4}

Neoblaze use desktop first approach. The breakpoints are based on max-width media query. 

breakpoint | Class | Dimension
--- | --- | --- |
Extra small | `xs` | 39.625em ( <=634px)
Small       | `sm` | 58.375em ( <=934px)
Medium      | `md` | 77.125em ( <=1234px)
Large       | ``   | above 1234px


{{< highlight text >}}

--------------------------------- | 1234px ->
--------------------------------- | default

------------------------------ | 1234px <-
------------------------------ | md

------------------- | 934px <-
------------------- | sm

-------- | 634px <-
-------- | xs
				
{{< /highlight >}}

## SASS {.heading-sm .mt-6 .mb-4}

###  Variables {.heading-xs .mt-6 .mb-4}

Override the breakpoints map to customize. 

{{< highlight scss >}}
	$breakpoints: (
		'': '',
		'md': 77.125em,
		'sm': 58.375em,
		'xs': 39.625em,
	);

{{< /highlight >}}


###  Mixin {.heading-xs .mt-6 .mb-4}

Use the mixins we you want a responsive variant at particular breakpoint.

{{< highlight scss >}}
	.layout {
		display: grid;
		grid-template-columns: repeat(12, 1fr);

		@include mq("sm") {
			grid-template-columns: 1fr;
		}
	}

{{< /highlight >}}