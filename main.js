const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);
userList.addEventListener('click',removeItem);

function onSubmit(e) {
  e.preventDefault();

   
    let userDetails={
      name: nameInput.value,
      email: emailInput.value
    }
    let serialized=JSON.stringify(userDetails);
    
    localStorage.setItem(nameInput.value,serialized);

   //localStorage.setItem('name', nameInput.value);
  //localStorage.setItem('email', emailInput.value);


  var li =document.createElement('li');
  li.className='item';
  li.appendChild(document.createTextNode(serialized));
  userList.appendChild(li);

  var dlt=document.createElement('button');
  dlt.className="delet";
  dlt.appendChild(document.createTextNode('Delete'));
  li.appendChild(dlt);
}

function removeItem(e){
  e.preventDefault();
  if(e.target.classList.contains('delet')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      userList.removeChild(li);
      localStorage.removeItem(nameInput.value);
    }
  }
}