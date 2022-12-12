const accordions = document.querySelectorAll('[data-accordion]');

const showAccordion = (accordionContent) => {
  if (accordionContent.classList.contains('accordion-hide')) {
    accordionContent.classList.remove('accordion-hide');
  }
  accordionContent.classList.add('accordion-show');
};

const collapsingAccordion = (accordionContent) => {
  if (accordionContent.classList.contains('accordion-show')) {
    accordionContent.classList.remove('accordion-show');
  }

  accordionContent.classList.add('accordion-collapsing');
};

const hideAccordion = (accordionContent) => {
  if (accordionContent.classList.contains('accordion-show')) {
    accordionContent.classList.remove('accordion-show');
  }
  accordionContent.classList.add('accordion-hide');
};

accordions.forEach((accordion) => {
  let accordionContent = accordion.querySelector('.accordion__content');
  let accordionState = accordion.getAttribute('data-accordion');

  accordionState === 'open'
    ? showAccordion(accordionContent)
    : hideAccordion(accordionContent);

  const accordionHeader = accordion.querySelector('.accordion__header');
  accordionHeader.addEventListener('click', () => {
    accordionContent = accordion.querySelector('.accordion__content');

    accordionState = accordion.getAttribute('data-accordion');
    setAccordionState(accordion, accordionContent, accordionState);
  });
});

const setAccordionState = (accordion, accordionContent, accordionState) => {
  if (accordionState === 'open') {
    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    collapsingAccordion(accordionContent);

    setTimeout(() => {
      accordionContent.removeAttribute('style');
    }, 0);

    accordionContent.addEventListener('transitionend', () => {
      accordionContent.classList.remove('accordion-collapsing');
      accordion.setAttribute('data-accordion', 'close');
      hideAccordion(accordionContent);
    });
  } else if (accordionState === 'close') {
    accordionContent.classList.remove('accordion-hide');
    collapsingAccordion(accordionContent);

    setTimeout(() => {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    }, 0);

    accordionContent.addEventListener('transitionend', () => {
      accordionContent.classList.remove('accordion-collapsing');
      accordionContent.removeAttribute('style');
      accordion.setAttribute('data-accordion', 'open');
      showAccordion(accordionContent);
    });
  }
};
