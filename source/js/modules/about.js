const mobileInvisibleText = document.querySelector('.about__mobile-invisible');
const showMoreBtn = document.querySelector('.about__show-more');
const hiddenText = document.querySelectorAll('.about__more-text');

const onButtonClick = function () {
  if (mobileInvisibleText.classList.contains('about__mobile-invisible')) {
    mobileInvisibleText.classList.remove('about__mobile-invisible');
  }

  hiddenText.forEach(text => {
    if (text.classList.contains('visually-hidden')) {
      text.classList.remove('visually-hidden');
    }
  });

  showMoreBtn.style.display = 'none';
};

const initButton = () => {
  showMoreBtn.addEventListener('click', onButtonClick);
};

export {initButton};
