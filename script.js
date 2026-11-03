// Global Variables
const contactForm = document.querySelector('#contact-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');

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
  errorDiv.classList.toggle('show');
  errorMsg.textContent = msg;
};

const throwSuccess = (msg) => {
  successDiv.classList.toggle('show');
  successMsg.textContent = msg;
};

const removeError = () => {
  errorDiv.classList.remove('show');
};

const removeSuccess = () => {
  successDiv.classList.remove('show');
};

// Event Listeners

closeError.addEventListener('click', (e) => {
  e.stopPropagation();
  removeError();
});

closeSuccess.addEventListener('click', (e) => {
  e.stopPropagation();
  removeSuccess();
});
