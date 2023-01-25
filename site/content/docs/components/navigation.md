---
layout: docs
title: Navigation
subtitle: Navigation allows user to organize information.
titleBg: bg-secondary--xlight
group: components
---

## Basic Navigation {.heading-xs .mt-6 .mb-2}

A navigation is composed of five components.

1. Menu  - `.menu`
2. Menu List - `.menu__list`
3. Menu List Item - `.menu__list-item`
4. Menu Link - `.menu__link`

{{< rawhtml >}}
<div class="mt-4">
	<nav class="menu">
		<ul class="menu__list">
			<li class="menu__list-item">
				<a class="menu__link font-medium">Setting</a>
			</li>
			<li class="menu__list-item">
				<a class="menu__link font-medium" aria-current="page">Payment</a>
			</li>
			<li class="menu__list-item">
				<a class="menu__link font-medium">Profile</a>
			</li>
			<li class="menu__list-item">
				<a class="menu__link font-medium">Logout</a>
			</li>
		</ul>
	</nav>
	
</div>
{{< /rawhtml >}}

``` html
	<nav class="menu">
		<ul class="menu__list">
			<li class="menu__list-item">
				<a class="menu__link font-medium">Setting</a>
			</li>
			<li class="menu__list-item">
				<a class="menu__link font-medium" aria-current="page">Payment</a>
			</li>
			<li class="menu__list-item">
				<a class="menu__link font-medium">Profile</a>
			</li>
			<li class="menu__list-item">
				<a class="menu__link font-medium">Logout</a>
			</li>
		</ul>
	</nav>
```

##  Navbar Navigation {.heading-xs .mt-6 .mb-2}

With help of different utility class horizontal navbar can be created.

{{< rawhtml >}}
<div class="mt-4">
	<nav class="menu d-flex flex-justify-between box p-4 shadow">
		<ul class="menu__list d-flex">
			<li class="menu__list-item">
				<a class="menu__link font-medium fg-slate fg-secondary-hover">Docs</a>
			</li>
			<li class="menu__list-item">
				<a class="menu__link font-medium fg-secondary-hover" >API</a>
			</li>
			<li class="menu__list-item">
				<a class="menu__link font-medium fg-slate fg-secondary-hover">Blog</a>
			</li>
			<li class="menu__list-item">
				<a class="menu__link font-medium fg-slate fg-secondary-hover">Showcase</a>
			</li>
		</ul>
		<ul class="menu__list d-flex">
			<li class="menu__list-item">
				<a class="menu__link font-medium fg-slate fg-secondary-hover">Get Started</a>
			</li>
			<li class="menu__list-item">
				<a class="menu__link font-medium fg-slate fg-secondary-hover">Login</a>
			</li>
		</ul>
	</nav>
</div>

{{< /rawhtml >}}

``` html
	<nav class="menu d-flex flex-justify-between box p-4 shadow">
		<ul class="menu__list d-flex">
			<li class="menu__list-item">
				<a class="menu__link font-medium fg-slate fg-secondary-hover">Docs</a>
			</li>
			<li class="menu__list-item">
				<a class="menu__link font-medium fg-secondary-hover menu__link--active" >API</a>
			</li>
			<li class="menu__list-item">
				<a class="menu__link font-medium fg-slate fg-secondary-hover">Blog</a>
			</li>
			<li class="menu__list-item">
				<a class="menu__link font-medium fg-slate fg-secondary-hover">Showcase</a>
			</li>
		</ul>
		<ul class="menu__list d-flex">
			<li class="menu__list-item">
				<a class="menu__link font-medium fg-slate fg-secondary-hover">Get Started</a>
			</li>
			<li class="menu__list-item">
				<a class="menu__link font-medium fg-slate fg-secondary-hover">Login</a>
			</li>
		</ul>
	</nav>
```