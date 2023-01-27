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
