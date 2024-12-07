document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      let isValid = true;
  
      const firstName = document.getElementById('FName');
      const lastName = document.getElementById('LName');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
  
      if (firstName.value.trim() === '') {
        isValid = false;
        firstName.style.border = '2px solid red';
      } else {
        firstName.style.border = ''; 
      }
  
      if (lastName.value.trim() === '') {
        isValid = false;
        lastName.style.border = '2px solid red';
      } else {
        lastName.style.border = '';
      }
  
      if (email.value.trim() === '' || !email.value.includes('@')) {
        isValid = false;
        email.style.border = '2px solid red';
      } else {
        email.style.border = ''; 
      }
  
      if (message.value.trim() === '') {
        isValid = false;
        message.style.border = '2px solid red';
      } else {
        message.style.border = ''; 
      }
  
      if (!isValid) {
        event.preventDefault(); 
        alert('Please fill out all required fields and make sure your email is valid.');
      }
    });
  });
  