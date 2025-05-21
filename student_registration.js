    function togglePermanentAddress() {
      const tempAddr = document.getElementById('tempAddress');
      const permAddr = document.getElementById('permAddress');
      const checkbox = document.getElementById('sameAddressCheckbox');

      if (checkbox.checked) {
        permAddr.value = tempAddr.value;
        permAddr.disabled = true;
      } else {
        permAddr.disabled = false;
        permAddr.value = '';
      }
    }

    function validateRegistrationForm() {
      const errors = document.querySelectorAll('.error-message');
      errors.forEach(e => e.style.display = 'none');

      const name = document.getElementById('studentName').value.trim();
      const regNo = document.getElementById('regNumber').value.trim();
      const phone = document.getElementById('phoneInput').value.trim();
      const email = document.getElementById('emailInput').value.trim();

      let valid = true;

      // Name: alphabets only max 30
      const nameRegex = /^[A-Za-z\s]{1,30}$/;
      if (!nameRegex.test(name)) {
        document.getElementById('nameError').style.display = 'block';
        valid = false;
      }

      // Register Number: alphanumeric only
      const regRegex = /^[A-Za-z0-9]+$/;
      if (!regRegex.test(regNo)) {
        document.getElementById('regError').style.display = 'block';
        valid = false;
      }

      
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').style.display = 'block';
        valid = false;
      }

     
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        valid = false;
      }

      if (!valid) {
        return false; 
      }

      alert("Form submitted successfully!");
      return true;
    }
