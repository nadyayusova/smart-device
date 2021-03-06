const formFeedback = document.querySelector('.feedback-form form');
const formModal = document.querySelector('.modal form');

const onFormSubmit = function (evt) {
  const form = evt.target;

  form.elements['user-name'].required = true;
  form.elements['phone-no'].required = true;

  if (form.elements['user-name'].validity.valid) {
    localStorage.setItem('user-name', form.elements['user-name'].value);
  }

  if (form.elements['phone-no'].validity.valid) {
    localStorage.setItem('phone-no', form.elements['phone-no'].value);
  }

  if (!form.elements['user-name'].validity.valid || !form.elements['phone-no'].validity.valid) {
    evt.preventDefault();
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
  getFormValues(formFeedback);
  getFormValues(formModal);
  formFeedback.addEventListener('submit', onFormSubmit);
  formModal.addEventListener('submit', onFormSubmit);
}

export {initForm};
