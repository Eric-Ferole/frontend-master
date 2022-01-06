const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const packs = document.getElementById('packs');
const phone = document.getElementById('phone');
const company = document.getElementById('company');

form.addEventListener('submit', e => {
  e.preventDefault();
  checkInputs();
});

const checkInputs = () => {
  // get the values of the inputs
  const fullnameValue = fullname.value.trim();
  const emailValue = email.value.trim();
  const packsValue = packs.value.trim();
  const phoneValue = phone.value.trim();
  const companyValue = company.value.trim();

  if(fullnameValue === '') {
    // show error
    // add error class
    setErrorFor(fullname, 'Name cannot be blank');
  } else {
    // show success class
    setSuccessFor(fullname);
  }
  if(emailValue === '') {
    setErrorFor(email, 'Email address cannot be blank');
  } else {
    // show success class
    setSuccessFor(email);
  }
  if(phoneValue === '') {
    setErrorFor(phone, 'Phone cannot be blank');
  } else {
    // show success class
    setSuccessFor(phone);
  }
  if(companyValue === '') {
    setErrorFor(company, 'Company cannot be blank');
  } else {
    // show success class
    setSuccessFor(company);
  }
} 

const setErrorFor = (input, message) => {
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector('small');
  // add error message in small
  small.innerText = message;
  // add error class
  formControl.className = 'form-control error';
}

const setSuccessFor = input => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}