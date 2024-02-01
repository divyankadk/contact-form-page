function validateForm(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let dob = document.getElementById('dob').value;
    let mobile = document.getElementById('mobile').value;
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let mobilePattern = /^[0-9]{10}$/;
    
    let emailError = document.getElementById('emailError');
    let mobileError = document.getElementById('mobileError');
    
    emailError.textContent = '';
    mobileError.textContent = '';
    
    if (!name || !email || !dob || !mobile) {
      alert('Please fill out all fields.');
      return;
    }
    
    if (!emailPattern.test(email)) {
      emailError.textContent = 'Invalid email format.';
      return;
    }
    
    if (!mobilePattern.test(mobile)) {
      mobileError.textContent = 'Invalid mobile number format (10 digits only).';
      return;
    }
  }
  