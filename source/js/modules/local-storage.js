const form = document.querySelector('.feedback-form .form');
const formModal = document.querySelector('.modal .form');

const onFormSubmit = function (evt) {
  evt.preventDefault();
  const form = evt.target;

  if(form.elements['user-name'].validity.valid) {
    localStorage.setItem('user-name', form.elements['user-name'].value);
  }

  if(form.elements['phone-no'].validity.valid) {
    localStorage.setItem('phone-no', form.elements['phone-no'].value);
  }
};

function getFormValues(form) {
  let userName = localStorage.getItem('user-name');
  let phoneNo = localStorage.getItem('phone-no');

  if (userName) {
    form.elements['user-name'].value = userName;
  }

  if (phoneNo) {
    form.elements['phone-no'].value = phoneNo;
  }
}

function initForm() {
  getFormValues(form);
  getFormValues(formModal);
  form.addEventListener('submit', onFormSubmit);
  formModal.addEventListener('submit', onFormSubmit);
}

export {initForm};
