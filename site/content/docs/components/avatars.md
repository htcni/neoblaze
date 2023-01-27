---
layout: docs
title: Avatars
subtitle: Avatars are used to represent user's profile image.
source: https://github.com/htcni/neoblaze/blob/main/src/scss/components/_avatars.scss
group: components
---

## Avatar {.heading-xs .mt-6 .mb-2}

Add `.avatar` class to any image.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4">
	<img class="avatar" src="/images/profile.png" alt="profile"/>
</div>
{{< /rawhtml >}}

``` html
<img class="avatar" src="/images/profile.png" alt="profile"/>
``` 


## Variations {.heading-xs .mt-6 .mb-2}

With the help of utilities different variations of a chips can be created.

### Size {.title-sm .mt-6 .mb-2}

Use `.avatar-sm`, `.avatar-md`,  `.avatar-lg` and `.avatar-xl` for different sizes.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4">
	<img class="avatar avatar-sm" src="/images/profile.png" alt="profile"/>
	<img class="avatar" src="/images/profile.png" alt="profile"/>
	<img class="avatar avatar-md" src="/images/profile.png" alt="profile"/>
	<img class="avatar avatar-lg" src="/images/profile.png" alt="profile"/>
	<img class="avatar avatar-xl" src="/images/profile.png" alt="profile"/>
</div>
{{< /rawhtml >}}

``` html
<img class="avatar avatar-sm" src="/images/profile.png" alt="profile"/>
<img class="avatar" src="/images/profile.png" alt="profile"/>
<img class="avatar avatar-md" src="/images/profile.png" alt="profile"/>
<img class="avatar avatar-lg" src="/images/profile.png" alt="profile"/>
<img class="avatar avatar-xl" src="/images/profile.png" alt="profile"/>
``` 

### Shape {.title-sm .mt-6 .mb-2}

Adjust border radius and other border properties with [border]({{< ref "/docs/utilities/borders" >}}) utilities.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4 flex-wrap">
	<img class="avatar avatar-lg rounded-sm" src="/images/profile.png" alt="profile"/>
	<img class="avatar avatar-lg rounded-full" src="/images/profile.png" alt="profile"/>
	<img class="avatar avatar-lg rounded-full border-2 bd-secondary" src="/images/profile.png" alt="profile"/>
</div>
{{< /rawhtml >}}

``` html
<img class="avatar avatar-lg rounded-sm" src="/images/profile.png" alt="profile"/>
<img class="avatar avatar-lg rounded-full" src="/images/profile.png" alt="profile"/>
<img class="avatar avatar-lg rounded-full border-2 bd-secondary" src="/images/profile.png" alt="profile"/>

``` 
