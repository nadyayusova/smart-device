import {FocusLock} from '../utils/focus-lock';

const modalOpen = document.querySelector('.main-nav__order-call-link');
const modal = document.querySelector('.modal');
const modalClose = modal.querySelector('.modal__close-btn');
const af = document.querySelector('.modal input[autofocus]');
const form = document.querySelector('.modal form');
let html = document.documentElement;
let scrollPosition;
let modalFocus = new FocusLock();

const onModalEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
};

const onModalMouseDown = function (evt) {
  if (evt.target === modal) {
    closeModal();
  }
};

const onModalCloseClick = function () {
  closeModal();
};

const onFormSubmit = function () {
  if (form.elements['user-name'].validity.valid || form.elements['phone-no'].validity.valid) {
    closeModal();
  }
};

const openModal = function () {
  modal.addEventListener('mousedown', onModalMouseDown);
  document.addEventListener('keydown', onModalEscPress);
  modalClose.addEventListener('click', onModalCloseClick);
  form.addEventListener('submit', onFormSubmit);

  modal.classList.add('show');
  modal.setAttribute('aria-hidden', false);
  scrollPosition = window.pageYOffset;
  html.style.top = -scrollPosition + 'px';
  html.classList.add('scroll-lock');
  modal.style.top = scrollPosition + 'px';

  modalFocus.lock('.modal__content');
};

const closeModal = function () {
  modal.removeEventListener('mousedown', onModalMouseDown);
  document.removeEventListener('keydown', onModalEscPress);
  modalClose.removeEventListener('click', onModalCloseClick);
  form.removeEventListener('submit', onFormSubmit);

  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', true);
  html.classList.remove('scroll-lock');
  window.scrollTo({
    left: 0,
    top: scrollPosition,
    behavior: 'instant',
  });
  html.style.top = '';

  modalFocus.unlock();
};

const onOpen = function (evt) {
  evt.preventDefault();
  openModal();
  af.focus();
};

const initModal = () => {

  modalOpen.addEventListener('click', onOpen);

  modalOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      onOpen();
    }
  });
};

export {initModal};
