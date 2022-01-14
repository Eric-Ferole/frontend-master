// Inspired form https://www.youtube.com/watch?v=rsd4FNGTRBw

// What are the elements to target?

// 1.The form
// 2.Each input fields

const form = document.querySelector(".form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password")
const fields = [firstName, lastName, email, password]

// function that prevents the default behavior of the form when we submit it and trigger the 
// checkInputs function

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
})

// This function check the input value of each field. If field is empty, it triggers an error
// otherwise it add a success class.

const checkInputs = () => {
  // Get the value of the inputs
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if(firstNameValue === "") {
    setErrorFor(firstName, 'First Name cannot be empty'); // Go to setErrorFor function
  } else {
    setSuccesFor(firstName); // Go to setErrorFor function
  }

  if(lastNameValue === '') {
    setErrorFor(lastName, 'Last Name cannot be empty');
  } else {
    setSuccesFor(lastName); 
  }
  
  if(emailValue === '') {
    setErrorFor(email, 'Looks like this is not an email');
  } else if(!isEmail(emailValue)) {
    setErrorFor(email, 'This in not a valid email');
  } else {
    setSuccesFor(email);
  }

  if(passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty');
  } else {
    setSuccesFor(password);
  }
}

// This function that triggers if the input value is empty or doesn't fullfill the conditions.

const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  
  // Add an error message
  small.classList.remove('hidden');
  small.innerText = message;

  // add error class
  formControl.className = 'form-control error'
}

const setSuccesFor = input => {
  const formControl = document.querySelector('.form-control');

  // Add success class
  formControl.className = 'form-control success'
}

const isEmail = email => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// This function validate the form on entry

// const validateOnEntry = () => {
//   fields.forEach(field => {

//   })
// }