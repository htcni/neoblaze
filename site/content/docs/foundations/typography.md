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
<div class="d-flex flex-column">
	<h3 class="title-xl">XL Title</h3>
	<h3 class="title-lg">LG Title</h3>
	<h3 class="title-md">MD Title</h3>
	<h3 class="title">Title</h3>
	<h3 class="title-sm">SM Title</h3>
	<h3 class="title-xs">XS Title</h3>
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
