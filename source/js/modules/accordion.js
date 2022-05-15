const accordions = document.querySelectorAll('.accordion');
const accordionHeaders = document.querySelectorAll('.accordion__header');
const acccordionIcons = document.querySelectorAll('.accordion__icon');
let breakpoint = window.matchMedia('(max-width:769px)');

const breakpointChecker = () => {
  if (breakpoint.matches) {
    accordionHeaders.forEach((accordionHeader) => {
      accordionHeader.disabled = false;
    });
  } else {
    accordionHeaders.forEach((accordionHeader) => {
      accordionHeader.disabled = true;
    });
  }
};

const openAccordion = (accordion) => {
  const content = accordion.querySelector('.accordion__content');
  accordion.classList.add('accordion--opened');
  content.style.maxHeight = content.scrollHeight + 'px';
};

const closeAccordion = (accordion) => {
  const content = accordion.querySelector('.accordion__content');
  accordion.classList.remove('accordion--opened');
  content.style.maxHeight = null;
};

const initAccordion = () => {
  accordions.forEach((accordion) => {
    const header = accordion.querySelector('.accordion__header');
    const content = accordion.querySelector('.accordion__content');
    closeAccordion(accordion);

    header.addEventListener('click', function () {
      if (content.style.maxHeight) {
        closeAccordion(accordion);
      } else {
        accordions.forEach((accordionIn) => closeAccordion(accordionIn));
        openAccordion(accordion);
      }
    });

    acccordionIcons.forEach((icon) => icon.classList.remove('accordion__icon--no-js'));
  });

  breakpoint.addEventListener('change', breakpointChecker);
  breakpointChecker();
};

export {initAccordion};
