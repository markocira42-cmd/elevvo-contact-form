// Global Variables
const contactForm = document.querySelector('#contact-form');
const name = contactForm.querySelector('#name');
const email = contactForm.querySelector('#email');
const subject = contactForm.querySelector('#subject');
const message = contactForm.querySelector('#message');

const errorDiv = contactForm.querySelector('.error-div');
const successDiv =
  contactForm.querySelector('.success-div');

const errorMsg = errorDiv.querySelector('#error');
const successMsg = successDiv.querySelector('#success');

const closeError = errorDiv.querySelector('.x-error');
const closeSuccess = successDiv.querySelector('.x-success');

// Single-purpose Functions

const trim = (string) => {
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

  if (trim(name.value) === '') {
    throwError('Please enter your full name!');
    removeSuccess();
  } else if (trim(email.value) === '') {
    throwError('Please enter your email address!');
    removeSuccess();
  } else if (!email.validity.valid) {
    throwError(
      'Invalid email. Please enter a valid email address!'
    );
    removeSuccess();
  } else if (trim(subject.value) === '') {
    throwError('Please enter a subject!');
    removeSuccess();
  } else if (trim(message.value) === '') {
    throwError('Please type in your message!');
    removeSuccess();
  } else {
    throwSuccess('Message sent successfully!');
    removeError();

    const submittedData = {
      name: trim(name.value),
      email: trim(email.value),
      subject: trim(subject.value),
      message: trim(message.value),
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
