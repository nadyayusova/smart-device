const showMoreBtn = document.querySelector('.about__show-more');
const textToCheck = document.querySelectorAll('.about p.no-js');
const spanToCheck = document.querySelector('.about span.no-js');
let breakpoint = window.matchMedia('(max-width:769px)');

const breakpointChecker = () => {
  // спан не виден на мобилке, только если скрыто все остальное
  if (breakpoint.matches) {
    const hiddenParagraphs = document.querySelectorAll('.about p.hidden');
    if (hiddenParagraphs.length > 0) {
      if (!spanToCheck.classList.contains('hidden')) {
        spanToCheck.classList.add('hidden');
      }
    } else {
      if (spanToCheck.classList.contains('hidden')) {
        spanToCheck.classList.remove('hidden');
      }
    }
  } else {
    if (spanToCheck.classList.contains('hidden')) {
      spanToCheck.classList.remove('hidden');
    }
  }
};

const onButtonClick = function () {
  textToCheck.forEach((text) => text.classList.toggle('hidden'));
  breakpointChecker();
  showMoreBtn.textContent = showMoreBtn.textContent === 'Подробнее' ? 'Свернуть' : 'Подробнее';
};

const initText = () => {
  textToCheck.forEach((text) => {
    if (text.classList.contains('no-js')) {
      text.classList.remove('no-js');
    }
  });
  if (spanToCheck.classList.contains('no-js')) {
    spanToCheck.classList.remove('no-js');
  }
};

const initButton = () => {
  if (showMoreBtn.classList.contains('hidden')) {
    showMoreBtn.classList.remove('hidden');
  }

  breakpoint.addEventListener('change', breakpointChecker);

  showMoreBtn.addEventListener('click', onButtonClick);
  showMoreBtn.click();
};

export {initText, initButton};
