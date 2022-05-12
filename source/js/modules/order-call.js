const orderCallBtn = document.querySelector('.main-nav__order-call-link');

const initOrderCallBtn = () => {
  orderCallBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    modals.open("feedback");
    const af = document.querySelector('[data-modal="feedback"] input[autofocus]');
    af.focus();
    // setTimeout(af.focus(), 2000);
  });
}

export {initOrderCallBtn}
