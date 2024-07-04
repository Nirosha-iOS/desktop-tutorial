// registerValidation.js

// Validation functions
function validateTitle(title) {
    return title !== "";
  }
  
  function validateUsername(username) {
    return username.trim().length >= 3;
  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  
  function validatePhone(phone) {
    const re = /^\+?[1-9]\d{1,14}$/;
    return re.test(String(phone));
  }
  
  function validatePassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(String(password));
  }
  
  function validateConfirmPassword(password, confirmPassword) {
    return password === confirmPassword;
  }
  
  // Main validation function
  function validateForm() {
    const title = document.getElementById('title').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    let valid = true;
  
    // Clear previous error messages
    document.getElementById('titleError').textContent = '';
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
  
    // Validate fields
    if (!validateTitle(title)) {
      document.getElementById('titleError').textContent = 'Please select a title.';
      valid = false;
    }
  
    if (!validateUsername(username)) {
      document.getElementById('usernameError').textContent = 'Username must be at least 3 characters long.';
      valid = false;
    }
  
    if (!validateEmail(email)) {
      document.getElementById('emailError').textContent = 'Invalid email address.';
      valid = false;
    }
  
    if (!validatePhone(phone)) {
      document.getElementById('phoneError').textContent = 'Invalid phone number.';
      valid = false;
    }
  
    if (!validatePassword(password)) {
      document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.';
      valid = false;
    }
  
    if (!validateConfirmPassword(password, confirmPassword)) {
      document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
      valid = false;
    }
  
    return valid;
  }
  
  // Event listener for form submission
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      // Perform form submission, e.g., using AJAX or redirect to another page
    }
  });
  