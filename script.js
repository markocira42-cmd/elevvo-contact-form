// Global Variables
const contactForm = document.querySelector('#contact-form');
const name = contactForm.querySelector('#name');
const email = contactForm.querySelector('#email');
const subject = contactForm.querySelector('#subject');
const message = contactForm.querySelector('#message');

const errorDiv = document.querySelector('.error-div');
const successDiv = document.querySelector('.success-div');

const errorMsg = document.querySelector('#error');
const successMsg = document.querySelector('#success');

const closeError = document.querySelector('.x-error');
const closeSuccess = document.querySelector('.x-success');

// Single-purpose Functions

const formatString = (string) => {
  return string.trim();
};

const throwError = (msg) => {
  errorDiv.classList.add('show');
  errorMsg.textContent = msg;
};

const throwSuccess = (msg) => {
  successDiv.classList.add('show');
  successMsg.textContent = msg;
};

const removeError = () => {
  errorDiv.classList.remove('show');
};

const removeSuccess = () => {
  successDiv.classList.remove('show');
};

const clearFields = () => {
  name.value = '';
  email.value = '';
  subject.value = '';
  message.value = '';
};

// Event Listeners

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (name.value === '') {
    throwError('Please enter your full name!');
    removeSuccess();
  } else if (email.value === '') {
    throwError('Please enter your email address!');
    removeSuccess();
  } else if (subject.value === '') {
    throwError('Please enter a subject!');
    removeSuccess();
  } else if (message.value === '') {
    throwError('Please type in your message!');
    removeSuccess();
  } else {
    throwSuccess('Message sent successfully!');
    removeError();

    const submittedData = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };

    console.log('Form submitted!');
    console.log(submittedData);

    console.log(submittedData.name.length);

    clearFields();
  }
});

closeError.addEventListener('click', (e) => {
  e.stopPropagation();
  removeError();
});

closeSuccess.addEventListener('click', (e) => {
  e.stopPropagation();
  removeSuccess();
});
