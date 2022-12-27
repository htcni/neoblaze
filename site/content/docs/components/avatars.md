---
layout: docs
title: Avatars
subtitle: Avatars are used show represent user's profile image.
titleBg: bg-primary--xlight
group: components
---

## Avatar {.heading-sm .mt-6 .mb-4}

Add `.avatar` class to any image.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4">
	<img class="avatar" src="/images/profile.png" alt="profile"/>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<img class="avatar" src="/images/profile.png" alt="profile"/>
{{< /highlight >}}


## Variations {.heading-sm .mt-6 .mb-4}

With the help of utilities different variations of a chips can be created.

### Size {.heading-xs .mt-6 .mb-4}

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

{{< highlight html >}}
<img class="avatar avatar-sm" src="/images/profile.png" alt="profile"/>
<img class="avatar" src="/images/profile.png" alt="profile"/>
<img class="avatar avatar-md" src="/images/profile.png" alt="profile"/>
<img class="avatar avatar-lg" src="/images/profile.png" alt="profile"/>
<img class="avatar avatar-xl" src="/images/profile.png" alt="profile"/>
{{< /highlight >}}

### Shape {.heading-xs .mt-6 .mb-4}

Adjust border radius and other border properties with [border]({{< ref "/docs/utilities/borders" >}}) utilities.

{{< rawhtml >}}
<div class="d-flex flex-items-center gap-4 flex-wrap">
	<img class="avatar avatar-lg rounded-sm" src="/images/profile.png" alt="profile"/>
	<img class="avatar avatar-lg rounded-full" src="/images/profile.png" alt="profile"/>
	<img class="avatar avatar-lg rounded-full border-2 bd-secondary" src="/images/profile.png" alt="profile"/>
</div>
{{< /rawhtml >}}

{{< highlight html >}}
<img class="avatar avatar-lg rounded-sm" src="/images/profile.png" alt="profile"/>
<img class="avatar avatar-lg rounded-full" src="/images/profile.png" alt="profile"/>
<img class="avatar avatar-lg rounded-full border-2 bd-secondary" src="/images/profile.png" alt="profile"/>

{{< /highlight >}}
