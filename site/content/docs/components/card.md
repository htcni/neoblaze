---
layout: docs
title: Card
subtitle: Card are used as container to display information in a compact manner.
titleBg: bg-success--xlight
group: components
---

## Basic Card {.heading-sm .mt-6 .mb-4}

Card has multiple component.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4">
	<div class="card d-flex flex-column max-width-20">
		<div class="card__header p-4">
			<h3 class="title-sm">Rickverse.</h3>
			<h4 class="title-xs fg-gray">A tale of heroes.</43>
		</div>
		<div class="card__image">
			<img src="/images/background.png" alt="background"/>
		</div>
		<div class="card__content p-4">
			<p class="mt-2">Welcome to Rick and Morty adventures. 
			It's just Rick and Morty forever, a hundred year Rick and Morty.
			</p>
		</div>
		<div class="card__action p-4">
			<button class="btn btn-success">Portal</button>
		</div>
	</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex flex-items-center gap-4">
	<div class="card d-flex flex-column max-width-20">
		<div class="card__header p-4">
			<h3 class="title-sm">Rickverse.</h3>
			<h4 class="title-xs fg-gray">A tale of heroes.</43>
		</div>
		<div class="card__image">
			<img src="/images/background.png" alt="background"/>
		</div>
		<div class="card__content p-4">
			<p class="mt-2">Welcome to Rick and Morty adventures. 
			It's just Rick and Morty forever, a hundred year Rick and Morty.
			</p>
		</div>
		<div class="card__action p-4">
			<button class="btn btn-success">Portal</button>
		</div>
	</div>
</div>
</div>  
{{< /highlight >}}

## Anatomy of a Card {.heading-sm .mt-6 .mb-4}

{{< rawhtml >}}
<div>
	<img src="/images/Card_diagram.svg" alt=""/>
</div>
{{< /rawhtml >}}

\
{{< callout type="info" >}}
Card is similar to generic [box]({{< ref "/docs/components/box" >}}) component.
{{< /callout >}}

A card is composed of five components.

1. Card Container - `.card`
2. Card Header - `.card__header`
3. Card Image - `.card__image`
4. Card Content - `card__content`
5. Card Action - `card__action`

\
Individually all these classes don't apply an styles except `.card__image`.
All the classes above provide a structure to a card and all the cards in the universe follow this style.
A card header may contain a title and other information. This applicable to all other card classes.
You can either override or use utility classes to style theses classes. 


### Card Container {.heading-xs .mt-6 .mb-4}

Card container wraps the entire card.
Add `.card` to a div to make it a container.

{{< rawhtml >}}
<div class="card width-16 p-4">
	I am a card.
</div>
{{< /rawhtml >}}


{{< highlight html >}}
<div class="card width-16 p-4">
	I am a card.
</div>
{{< /highlight >}}

### Card Header {.heading-xs .mt-6 .mb-4}
Card header can have title or subtitle and other information.
Add `.card__header` for 

{{< rawhtml >}}
<div class="card width-16 p-4">
	<div class="card__header">
		<h3 class="title-sm">Activity</h3>
		<h4 class="title-xs fg-gray">No new activity</h4>
	</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="card width-16 p-4">
	<div class="card__header">
		<h3 class="title-sm">Activity</h3>
		<h4 class="title-xs fg-gray">No new activity</h4>
	</div>
</div>
{{< /highlight >}}

### Card Image {.heading-xs .mt-6 .mb-4}
Card image uses object fit cover property with 100% width.
Add `.card__image` to div that wraps image tag. 

{{< rawhtml >}}
<div class="card width-20">
	<div class="card__image">
		<img class="rounded-t" src="/images/background.png" alt="background" />
	</div>
	<div class="card__header p-2">
		<h3 class="title-xs">Destination</h3>	
	</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="card width-20">
	<div class="card__image">
		<img class="rounded-t" src="/images/background.png" alt="background" />
	</div>
	<div class="card__header p-2">
		<h3 class="title-xs">Destination</h3>	
	</div>
</div>
{{< /highlight >}}


### Card Content {.heading-xs .mt-6 .mb-4}
Add `.card__content` to wrap the content.

{{< rawhtml >}}
<div class="card width-20">
	<div class="card__image">
		<img class="rounded-t" src="/images/background.png" alt="background" />
	</div>
	<div class="card__header p-2">
		<h3 class="title-xs">Destination</h3>	
	</div>
	<div class="card-content p-2">
		<p>Discover unique destination every week.</p>
	</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="card width-20">
	<div class="card__image">
		<img class="rounded-t" src="/images/background.png" alt="background" />
	</div>
	<div class="card__header p-2">
		<h3 class="title-xs">Destination</h3>	
	</div>
	<div class="card-content p-2">
		<p>Discover unique destination every week.</p>
	</div>
</div>
{{< /highlight >}}

### Card Action {.heading-xs .mt-6 .mb-4}
Actions can be added to the cards.
Add `.card__action` to wrap the actions..

{{< rawhtml >}}
<div class="card width-20">
	<div class="card__image">
		<img class="rounded-t" src="/images/background.png" alt="background" />
	</div>
	<div class="card__header p-2">
		<h3 class="title-xs">Destination</h3>	
	</div>
	<div class="card-content p-2">
		<p class="mb-0">Discover unique destination every week.</p>
	</div>
	<div class="card-action p-2 border-t bd-gray--light">
		<button class="btn btn-outline-primary">Dicover Now</button>
	</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="card width-20">
	<div class="card__image">
		<img class="rounded-t" src="/images/background.png" alt="background" />
	</div>
	<div class="card__header p-2">
		<h3 class="title-xs">Destination</h3>	
	</div>
	<div class="card-content p-2">
		<p class="mb-0">Discover unique destination every week.</p>
	</div>
	<div class="card-action p-2 border-t bd-gray--light">
		<button class="btn btn-outline-primary">Dicover Now</button>
	</div>
</div>
{{< /highlight >}}


## Variations {.heading-sm .mt-6 .mb-4}

With the help of utilities different variations of card can be created.

### Horizontal Card {.heading-xs .mt-6 .mb-4}


{{< rawhtml >}}
<div class="card d-flex max-width-32">
	<div class="card__image width-8">
		<img class="rounded-l" src="/images/background.png" alt="background" />
	</div>
	<div class="d-flex flex-column p-2">
		<div class="card__header d-flex">
			<h3 class="title-sm">Destination</h3>	
		</div>
		<div class="card-content">
			<p class="mb-0">Discover unique destination every week.</p>
		</div>
		<div class="card-action border-t bd-gray--light mt-2">
			<button class="btn btn-outline-primary">Dicover Now</button>
		</div>
	</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="card d-flex max-width-32">
	<div class="card__image width-8">
		<img class="rounded-l" src="/images/background.png" alt="background" />
	</div>
	<div class="d-flex flex-column p-2">
		<div class="card__header d-flex">
			<h3 class="title-sm">Destination</h3>	
		</div>
		<div class="card-content">
			<p class="mb-0">Discover unique destination every week.</p>
		</div>
		<div class="card-action border-t bd-gray--light mt-2">
			<button class="btn btn-outline-primary">Dicover Now</button>
		</div>
	</div>
</div>
{{< /highlight >}}