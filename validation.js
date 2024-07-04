// validation.js

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  
  function validatePassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(String(password));
  }
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let valid = true;
  
    // Clear previous error messages
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
  
    if (!validateEmail(email)) {
      document.getElementById('emailError').textContent = 'Invalid email address.';
      valid = false;
    }
  
    if (!validatePassword(password)) {
      document.getElementById('passwordError').textContent = 'Invalid password. Must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.';
      valid = false;
    }
  
    if (valid) {
      alert('Form submitted successfully!');
      // Perform form submission, e.g., using AJAX or redirect to another page
    }
  });
  