---
layout: docs
title: Form
subtitle: Define basic form controls.
source: https://github.com/htcni/neoblaze/blob/main/src/scss/components/_form.scss
group: components
---

## Input {.heading-xs .mt-6 .mb-2}

Use `form-input` to style `<input>` element.
Use form-input--{theme-colors} like form-input--danger to customize color.

{{< rawhtml >}}
<div class=" box p-4 d-flex flex-column flex-justify-center gap-4">
	<form class="d-flex flex-column gap-4">
		<div class="d-flex gap-4">
			<div>
				<label class="label-md font-sbold mb-1">First name</label>
				<input type="text" class="form-input" placeholder="James">
			</div>
			<div>
				<label class="label-md font-sbold mb-1">Last name</label>
				<input type="text" class="form-input" placeholder="Bond">
			</div>
		</div>
		<div class="d-flex gap-4">
			<div>
				<label class="label-md font-sbold mb-1">Work email</label>
				<input type="email" class="form-input form-input--danger" placeholder="007@mi6.uk">
			</div>
			<div>
				<label class="label-md font-sbold mb-1">Phone</label>
				<input type="number" class="form-input" placeholder="+44">
			</div>
		</div>
		<input type="submit" class="btn btn-primary flex-self-start">
	</form>
</div>

{{< /rawhtml >}}

``` html
<form class="d-flex flex-column gap-4">
	<div class="d-flex gap-4">
		<div>
			<label class="label-md font-sbold mb-1">First name</label>
			<input type="text" class="form-input" placeholder="James">
		</div>
		<div>
			<label class="label-md font-sbold mb-1">Last name</label>
			<input type="text" class="form-input" placeholder="Bond">
		</div>
	</div>
	<div class="d-flex gap-4">
		<div>
			<label class="label-md font-sbold mb-1">Work email</label>
			<input type="email" class="form-input form-input--danger" placeholder="007@mi6.uk">
		</div>
		<div>
			<label class="label-md font-sbold mb-1">Phone</label>
			<input type="number" class="form-input" placeholder="+44">
		</div>
	</div>
	<input type="submit" class="btn btn-primary flex-self-start">
</form>

``` 

## Checkbox {.heading-xs .mt-6 .mb-2}

Use `form-checkbox` to style `<checkbox>` element.
Use `form-checkbox--{theme-colors}` like `form-checkbox--secondary` to customize color.

{{< rawhtml >}}
<div class=" box p-4 d-flex flex-column flex-justify-center gap-4">
	<form class="d-flex gap-4">
    <label class="d-inline-flex flex-items-center gap-2">
      <input type="checkbox" class="form-checkbox" checked="checked" />
      Available for mission.
    </label>
		<label class="d-inline-flex flex-items-center gap-2">
      <input type="checkbox" class="form-checkbox form-checkbox--secondary" checked="checked" />
      Available for mission.
    </label>
	</form>
</div>

{{< /rawhtml >}}

``` html
<form class="d-flex gap-4">
	<label class="d-inline-flex flex-items-center gap-2">
		<input type="checkbox" class="form-checkbox" checked="checked" />
		Available for mission.
	</label>
		<label class="d-inline-flex flex-items-center gap-2">
      <input type="checkbox" class="form-checkbox form-checkbox--secondary" checked="checked" />
      Available for mission.
    </label>
</form>

``` 

## Radio {.heading-xs .mt-6 .mb-2}

Use `form-radio` to style `<radio>` element.
Use `form-radio--{theme-colors}` like `form-radio--secondary` to customize color.

{{< rawhtml >}}
<div class=" box p-4 d-flex flex-column flex-justify-center gap-4">
	<form class="d-flex gap-4">
  	<label> <input type="radio" class="form-radio" id="dc" name="bondies" checked /> Dainel Craig </label>
  	<label> <input type="radio" class="form-radio form-radio--secondary" id="pb" name="bondies" /> Pierce Brosnan </label>
	</form>
</div>

{{< /rawhtml >}}

``` html
<form class="d-flex gap-4">
	<label> <input type="radio" class="form-radio" id="dc" name="bondies" checked /> Dainel Craig </label>
	<label> <input type="radio" class="form-radio form-radio--secondary" id="pb" name="bondies" /> Pierce Brosnan </label>
</form>

``` 

## Select {.heading-xs .mt-6 .mb-2}

Use `form-select` to style `<select>` element.

{{< rawhtml >}}
<div class=" box p-4 d-flex flex-column flex-justify-center gap-4">
	<form>
		<select class="form-select" aria-label="Wheels">
			<option>Wheels</option>
			<option>Aston Martin DB5</option>
			<option>Aston Martin V12 </option>
			<option>Aston Martin V8</option>
		</select>
	</form>
</div>

{{< /rawhtml >}}

``` html
<form class="d-flex gap-4">
	<label class="d-inline-flex flex-items-center gap-2">
		<input type="checkbox" class="form-checkbox" checked="checked" />
		Available for mission.
	</label>
</form>
```

## TextArea {.heading-xs .mt-6 .mb-2}

Use `form-textarea` to style `<textarea>` element.
Use `form-textarea--{theme-colors}` like `form-textarea--secondary` to customize color.

{{< rawhtml >}}
<div class=" box p-4 d-flex flex-column flex-justify-center gap-4">
	<form>
		<textarea class="form-textarea" id="bond-area"></textarea>
	</form>
</div>

{{< /rawhtml >}}

``` html
	<form>
		<textarea class="form-textarea" id="bond-area"></textarea>
	</form>

```

##  SASS {.heading-xs .mt-6 .mb-2}
Override these sass variables in your scss file.

###  Variables {.title-sm .mt-6 .mb-2}

```  scss
	// form input
	--input-shadow: rgba(71, 71, 71, 0.16) 0px 0px 0px 1px;
	--input-focus-shadow: var(--primary) 0px 0px 0px 1px;
``` 