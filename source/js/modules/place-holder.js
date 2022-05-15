const tel = document.querySelectorAll('[type="tel"]');

const initPlaceholder = () => {
  tel.forEach((el) => {
    el.addEventListener('focus', () => {
      el.placeholder = '+7(___)_______';
    });
    el.addEventListener('blur', () => {
      el.placeholder = 'Телефон';
    });
  });
};

export {initPlaceholder};
