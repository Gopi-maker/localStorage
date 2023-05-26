const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

   
    let userDetails={
      name: nameInput.value,
      email: emailInput.value
    }
    let serialized=JSON.stringify(userDetails);
    
    localStorage.setItem('userDetails',serialized);

   //localStorage.setItem('name', nameInput.value);
  //localStorage.setItem('email', emailInput.value);

}