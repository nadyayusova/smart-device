const showMoreBtn = document.querySelector('.about__show-more');
const textToCheck = document.querySelectorAll('.about__text--opened, .about__mobile-invisible--opened');

const onButtonClick = function () {
  textToCheck.forEach(text => {
    if (text.classList.contains('about__text')) {
      text.classList.toggle('about__text--opened');
      text.classList.toggle('about__text--hidden');
    } else if (text.classList.contains('about__mobile-invisible')) {
      text.classList.toggle('about__mobile-invisible--opened');
      text.classList.toggle('about__mobile-invisible--hidden');
    }
  });

  showMoreBtn.textContent = showMoreBtn.textContent === 'Подробнее' ? 'Свернуть' : 'Подробнее';
};

const initButton = () => {
  if (showMoreBtn.classList.contains('about__show-more--hidden')) {
    showMoreBtn.classList.remove('about__show-more--hidden');
  }
  showMoreBtn.addEventListener('click', onButtonClick);
  showMoreBtn.click();
};

export {initButton};
