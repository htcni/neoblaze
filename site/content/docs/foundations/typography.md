---
layout: docs
title: Typography
subtitle: Use typography to make text beautiful.
titleBg: bg-primary--xlight
group: getting-started
---

## Typography Tokens {.heading-sm .mt-6 .mb-4}

There are five different type of tokens use to define different text size on screen.

1. Display
2. Heading
3. Title
4. Body
5. Label

## Display {.heading-sm .mt-6 .mb-4}

Use for large heading on a large screen.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4">
	<h3 class="display-sm">Magical CSS</h3>
</div>
{{< /rawhtml >}}


{{< highlight html >}}
<h3 class="display-sm">Magical CSS</h3>
{{< /highlight >}}


Type | Scale 
--- | --- |  
`display-xl` | 14vw
`display-lg` | 12vw
`display-md` | 10vw
`display`    | 8vw
`display-sm` | 6vw
`display-xs` | 4vw

## Heading {.heading-sm .mt-6 .mb-4}

Default `h1` to `h6` has no style. Use different `heading` classes.

{{< rawhtml >}}
<div class="d-flex flex-column">
	<h3 class="heading-3xl leading-normal">3XL Heading</h3>
	<h3 class="heading-2xl leading-normal">2XL Heading</h3>
	<h3 class="heading-xl">XL Heading</h3>
	<h3 class="heading-lg">LG Heading</h3>
	<h3 class="heading-md">MD Heading</h3>
	<h3 class="heading">Heading</h3>
	<h3 class="heading-sm">SM Heading</h3>
	<h3 class="heading-xs">XS Heading</h3>
</div>
{{< /rawhtml >}}


{{< highlight html >}}
<h3 class="heading-3xl">3XL Heading</h3>
<h3 class="heading-2xl">2XL Heading</h3>
<h3 class="heading-xl">XL Heading</h3>
<h3 class="heading-lg">LG Heading</h3>
<h3 class="heading-md">MD Heading</h3>
<h3 class="heading">Heading</h3>
<h3 class="heading-sm">SM Heading</h3>
<h3 class="heading-xs">XS Heading</h3>
{{< /highlight >}}


Type | Default | Medium | Small
---  | --- | --- | --- |
`heading-3xl` | 9rem - 144px   | 7rem - 112px   | 5rem - 80px
`heading-2xl` | 8rem - 128px   | 6rem - 96px    | 4rem - 64px
`heading-xl`  | 6rem - 96px    | 4rem - 64px    | 3rem - 48px
`heading-lg`  | 4rem - 64px    | 3rem - 48px    | 2.5rem - 40px
`heading-md`  | 3.5rem - 56px  | 3rem - 48px    | 2rem - 32px
`heading`     | 3rem - 48px    | 2.5rem - 40px  | 2rem - 32px
`heading-sm`  | 2.25rem - 36px | 1.75rem - 28px | 1.5rem - 24px
`heading-xs`  | 1.5rem - 24px  | 1.25rem - 20px | 1.125rem - 18px


## Title {.heading-sm .mt-6 .mb-4}

Use `.title` for card title, section title. 

{{< rawhtml >}}
<div class="d-flex flex-column gap-4">
	<div class="d-flex flex-column">
		<span><code>title-xl</code></span>
		<h3 class="title-xl">The Need To Read</h3>
	</div>
	<div class="d-flex flex-column">
		<span><code>title-lg</code></span>
		<h3 class="title-lg">The Need To Read</h3>
	</div>
	<div class="d-flex flex-column">
		<span><code>title-md</code></span>
		<h3 class="title-md">The Need To Read</h3>
	</div>
	<div class="d-flex flex-column">
		<span><code>title</code></span>
		<h3 class="title">The Need To Read</h3>
	</div>
	<div class="d-flex flex-column">
		<span><code>title-sm</code></span>
		<h3 class="title-sm">The Need To Read</h3>
	</div>
	<div class="d-flex flex-column">
		<span><code>title-xs</code></span>
		<h3 class="title-xs">The Need To Read</h3>
	</div>
</div>
{{< /rawhtml >}}


{{< highlight html >}}
<h3 class="title-xl">XL Title</h3>
<h3 class="title-lg">LG Title</h3>
<h3 class="title-md">MD Title</h3>
<h3 class="title">Title</h3>
<h3 class="title-sm">SM Title</h3>
<h3 class="title-xs">XS Title</h3>
{{< /highlight >}}


Type | Default 
---  | --- |
`title-xl`  | 2rem - 32px    
`title-lg`  | 1.875rem - 30px    
`title-md`  | 1.75rem - 28px  
`title`     | 1.5rem - 24px    
`title-sm`  | 1.25rem - 20px 
`title-xs`  | 1rem - 16px  


## Body {.heading-sm .mt-6 .mb-4}

Use `.body` for paragraphs and main text in your site.

{{< rawhtml >}}
<div class="d-flex flex-column gap-1">
	<div class="d-flex flex-column">
		<span><code>body-xl</code></span>
		<p class="body-xl">In the science fiction books I read as a kid, reading had often been replaced by some more efficient way of acquiring knowledge. Mysterious "tapes" would load it into one's brain like a program being loaded into a computer. Paul G</p>
	</div>
	<div class="d-flex flex-column">
		<span><code>body-lg</code></span>
		<p class="body-lg">In the science fiction books I read as a kid, reading had often been replaced by some more efficient way of acquiring knowledge. Mysterious "tapes" would load it into one's brain like a program being loaded into a computer. Paul G</p>
	</div>
	<div class="d-flex flex-column">
		<span><code>body-md</code></span>
		<p class="body-md">In the science fiction books I read as a kid, reading had often been replaced by some more efficient way of acquiring knowledge. Mysterious "tapes" would load it into one's brain like a program being loaded into a computer. Paul G</p>
	</div>
	<div class="d-flex flex-column">
		<span><code>body</code></span>
		<p class="body">In the science fiction books I read as a kid, reading had often been replaced by some more efficient way of acquiring knowledge. Mysterious "tapes" would load it into one's brain like a program being loaded into a computer. Paul G</p>
	</div>
	<div class="d-flex flex-column">
		<span><code>body-sm</code></span>
		<p class="body-sm">In the science fiction books I read as a kid, reading had often been replaced by some more efficient way of acquiring knowledge. Mysterious "tapes" would load it into one's brain like a program being loaded into a computer. Paul G</p>
	</div>
	<div class="d-flex flex-column">
		<span><code>body-xs</code></span>
		<p class="body-xs">In the science fiction books I read as a kid, reading had often been replaced by some more efficient way of acquiring knowledge. Mysterious "tapes" would load it into one's brain like a program being loaded into a computer. Paul G</p>
	</div>
</div>
{{< /rawhtml >}}


{{< highlight html >}}
<p class="body-xl">XL Body</p>
<p class="body-lg">LG Body</p>
<p class="body-md">MD Body</p>
<p class="body">Body</p>
<p class="body-sm">SM Body</p>
<p class="body-xs">XS Body</p>
{{< /highlight >}}


Type | Default | Medium
---  | --- | --- |
`body-xl`  | 1.375rem - 22px | 1.25rem - 20px
`body-lg`  | 1.25rem - 20px  | 1.0625rem - 17px
`body-md`  | 1.0625rem - 17px | - 
`body`     | 1rem - 16px     | -
`body-sm`  | 0.875rem - 14px | -
`body-xs`  | 0.75rem - 12px  | -



## Label {.heading-sm .mt-6 .mb-4}

Use `.label` for smaller text like in buttons, chips etc.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4">
	<button class="btn btn-primary label-xl">Like</button>
	<button class="btn btn-primary label-lg">Like</button>
	<button class="btn btn-primary label-md">Like</button>
	<span class="label">140K</span>
	<span class="chip chip-info label-sm">Stable</span>
	<span class="label-xs">New</span>
</div>
{{< /rawhtml >}}


{{< highlight html >}}
<button class="btn btn-primary label-xl">Like</button>
<button class="btn btn-primary label-lg">Like</button>
<button class="btn btn-primary label-md">Like</button>
<span class="label">140K</span>
<span class="chip chip-info label-sm">Stable</span>
<span class="label-xs">New</span>
{{< /highlight >}}


Type | Default
---  | --- |
`label-xl`  | 1.25rem - 20px
`label-lg`  | 1.125rem - 18px 
`label-md`  | 1rem - 16px
`label`     | 0.875rem - 14px
`label-sm`  | 0.75 - 12px
`label-xs`  | 0.625rem - 10px 

