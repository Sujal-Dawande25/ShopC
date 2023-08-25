document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registration-form');
    const messageElement = document.getElementById('message');
  
    registrationForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // You can perform validation here before sending data to the server
  
      // Simulate sending data to the server
      const userData = {
        username: username,
        email: email,
        password: password,
      };
  
      // Simulate a successful registration
      messageElement.textContent = 'Registration successful!';
  
     
    });
  });
  