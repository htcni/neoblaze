---
layout: docs
title: Colors
subtitle: Utilities for controlling colors. 
titleBg: bg-secondary--xlight
group: utilities
---

## Color {.heading-xs .mt-6 .mb-2}

Use color utilities for setting text, background, borders and shadow colors. All color utilites are based on [base]({{< ref "/docs/foundations/colors.md#base-colors" >}}) and [theme colors]({{< ref "/docs/foundations/colors.md#theme-colors" >}}).

{{< colors >}}


## Text Color {.heading-xs .mt-6 .mb-2}

Use `fg-{color}` for applying text color.

{{< rawhtml >}}
<div class="d-flex flex-column">
	<div class="fg-gray">fg-gray</div>
	<div class="fg-primary">fg-primary</div>
	<div class="fg-secondary">fg-secondary</div>
	<div class="fg-danger">fg-danger</div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex">
	<div class="fg-gray">fg-gray</div>
	<div class="fg-primary">fg-primary</div>
	<div class="fg-secondary">fg-secondary</div>
	<div class="fg-danger">fg-danger</div>
</div>
{{< /highlight >}}

## Background Color {.heading-xs .mt-6 .mb-2}

Use `bg-{color}` for applying background color.

{{< rawhtml >}}
<div class="d-flex gap-2">
	<div class="rounded-sm width-6 height-6 bg-primary"></div>
	<div class="rounded-sm width-6 height-6 bg-primary--light"></div>
	<div class="rounded-sm width-6 height-6 bg-secondary"></div>
	<div class="rounded-sm width-6 height-6 bg-danger--soft"></div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex">
	<div class="bg-primary"></div>
	<div class="bg-primary--light"></div>
	<div class="bg-secondary"></div>
	<div class="bg-danger--soft"></div>
</div>
{{< /highlight >}}

## Border Color {.heading-xs .mt-6 .mb-2}

Use `bd-{color}` for applying background color.

{{< rawhtml >}}
<div class="d-flex gap-2">
	<div class="rounded-sm width-6 height-6 border bd-secondary"></div>
	<div class="rounded-sm width-6 height-6 border bd-primary"></div>
	<div class="rounded-sm width-6 height-6 border bd-danger"></div>
	<div class="rounded-sm width-6 height-6 border bd-success"></div>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<div class="d-flex">
	<div class="border bd-secondary"></div>
	<div class="border bd-primary"></div>
	<div class="border bd-danger"></div>
	<div class="border bd-success"></div>>
</div>
{{< /highlight >}}


## Shadow Color {.heading-xs .mt-6 .mb-2}

Use `shadow-{color}` for applying shadow color.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-8 mt-8">
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>shadow-secondary</code>
		<span class="rounded width-6 height-6 shadow-sm shadow-secondary bg-secondary"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>shadow-primary--light</code>
		<span class="rounded width-6 height-6 shadow shadow-primary--light bg-primary--light"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>shadow-success--ultra</code>
		<span class="rounded width-6 height-6 shadow-md shadow-success--ultra bg-success--ultra"></span>
	</div>
	<div class="d-flex flex-column flex-items-center gap-2">
		<code>shadow-danger</code>
		<span class="rounded width-6 height-6 shadow-md shadow-danger bg-danger"></span>
	</div>
</div>
{{< /rawhtml >}}


{{< highlight html >}}
<div class="d-flex">
	<div class="shadow-sm shadow-secondary"></div>
	<div class="shadow-primary--light bg-primary--light"></div>
	<div class="shadow-success--ultra bg-success--ultra"></div>
	<div class="shadow-danger bg-danger"></div>
</div>
{{< /highlight >}}


## Customize {.heading-xs .mt-6 .mb-2}

### Theme Colors {.title-sm .mt-6 .mb-2}

You can set your own theme colors with following variables.

{{< callout type="warning" >}}
Overriding css variable automatically change all color utility except shadow colors.
{{< /callout >}}

{{< highlight scss >}}
	--white: #fff;
  --midnight: #1a1a1a;
  --black: #000;
  --transparent: rgba(0, 0, 0, 0);
  --default: rgba(212, 214, 218, 0.4);
  --default--xlight: rgba(240, 240, 240, 0.4);
  --default--light: #f9fafb;
  --default--soft: #f3f4f6;
  --default--medium: rgba(0, 0, 0, 0.5);
  --default--ultra: #2f353d;
  --default--plus-ultra: #121418;
  --primary: #2563eb;
  --primary--xlight: #f4f7fe;
  --primary--light: #cbdafa;
  --primary--soft: #789ef3;
  --primary--medium: #1e50be;
  --primary--ultra: #173d92;
  --primary--plus-ultra: #091838;
  --secondary: #7c3aed;
  --secondary--xlight: #f8f5fe;
  --secondary--light: #e0d0fb;
  --secondary--soft: #ae85f4;
  --secondary--medium: #642fc0;
  --secondary--ultra: #4d2493;
  --secondary--plus-ultra: #1e0e39;
  --tertiary: #65a30d;
  --tertiary--xlight: #f7faf3;
  --tertiary--light: #dae9c5;
  --tertiary--soft: #a0c669;
  --tertiary--medium: #52840b;
  --tertiary--ultra: #3f6508;
  --tertiary--plus-ultra: #182703;
  --info: #0284c7;
  --info--xlight: #f2f9fc;
  --info--light: #c2e1f2;
  --info--soft: #62b3dc;
  --info--medium: #026ba1;
  --info--ultra: #01527b;
  --info--plus-ultra: #002030;
  --warning: #d97706;
  --warning--xlight: #fdf8f3;
  --warning--light: #f6dec3;
  --warning--soft: #e7ab65;
  --warning--medium: #b06005;
  --warning--ultra: #874a04;
  --warning--plus-ultra: #341d01;
  --danger: #dc2626;
  --danger--xlight: #fdf4f4;
  --danger--light: #f7cbcb;
  --danger--soft: #e97878;
  --danger--medium: #b21f1f;
  --danger--ultra: #881818;
  --danger--plus-ultra: #350909;
  --success: #16a34a;
  --success--xlight: #f3faf6;
  --success--light: #c7e9d4;
  --success--soft: #6fc68f;
  --success--medium: #12843c;
  --success--ultra: #0e652e;
  --success--plus-ultra: #052712;
  --neutral: #525252;
  --neutral--xlight: #fafafa;
  --neutral--light: #f5f5f5;
  --neutral--soft: #949494;
  --neutral--medium: #424242;
  --neutral--ultra: #333333;
  --neutral--plus-ultra: #141414;
  --gray: #4b5563;
  --gray--xlight: #f9fafb;
  --gray--light: #f3f4f6;
  --gray--soft: #8f969e;
  --gray--medium: #3d4550;
  --gray--ultra: #2f353d;
  --gray--plus-ultra: #121418;
  --slate: #475569;
  --slate--xlight: #f8fafc;
  --slate--light: #f1f5f9;
  --slate--soft: #8d96a2;
  --slate--medium: #3a4555;
  --slate--ultra: #2c3541;
  --slate--plus-ultra: #111419;
{{< /highlight >}}


### Extending Colors {.title-sm .mt-6 .mb-2}

To incorporate your own brand color, you can extend the` theme-colors` map in your scss file. This will automatically generate all necessary color utility classes, which you can then use to access the added color.
Eg. `bg-{your-brand-color}` etc.

{{< highlight scss >}}
// src/scss/helpers/variables/_theme_colors.scss

$base-colors: (
	"white": #fff,
	midnight: #1a1a1a,
	"black": #000,
	"transparent": #00000000,
);

$theme-colors: (
	primary--xlight: map-get(c.$colors, blue-50),
	primary--light: map-get(c.$colors, blue-100),
	primary--soft: map-get(c.$colors, blue-300),
	primary--medium: map-get(c.$colors, blue-600),
	primary--ultra: map-get(c.$colors, blue-700),
	primary--plus-ultra: map-get(c.$colors, blue-900),
	...............
);

{{< /highlight >}}