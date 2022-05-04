const mobileBtnText = document.querySelector('[data-btn-visible="mobile"]');

const makeTextVisible = () => {
  if (mobileBtnText.classList.contains('visually-hidden')) {
    mobileBtnText.classList.remove('visually-hidden');
  }
};

export {makeTextVisible};
