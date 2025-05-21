function validateForm() {
      let valid = true;
      document.querySelectorAll('.error').forEach(e => e.innerText = '');
      document.getElementById('result').innerText = '';

      const name = document.getElementById("name").value.trim();
      const address = document.getElementById("address").value.trim();
      const zip = document.getElementById("zipcode").value.trim();
      const country = document.getElementById("country").value;
      const gender = document.querySelector('input[name="gender"]:checked');
      const prefs = document.querySelectorAll('input[name="color"]:checked');
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (name === "") {
        document.getElementById("nameError").innerText = "Please enter your name.";
        valid = false;
      }

      if (address === "") {
        document.getElementById("addressError").innerText = "Please enter your ddress.";
        valid = false;
      }

      if (zip === "") {
        document.getElementById("zipError").innerText = "Enter your Zip code.";
        valid = false;
      }

      if (country === "") {
        document.getElementById("countryError").innerText = "Select your country.";
        valid = false;
      }

      if (!gender) {
        document.getElementById("genderError").innerText = "Select gender.";
        valid = false;
      }

      if (prefs.length < 2) {
        document.getElementById("prefsError").innerText = "Select at least two preference.";
        valid = false;
      }

      if (!/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError").innerText = "Enter a 10-digit phone number.";
        valid = false;
      }

      if (email === "") {
        document.getElementById("emailError").innerText = "Please your email.";
        valid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email.";
        valid = false;
      }

      if (password.length < 6 || password.length > 8) {
        document.getElementById("passwordError").innerText = "Password must be 6-8 characters.";
        valid = false;
      }

      if (password !== confirmPassword) {
        document.getElementById("confirmError").innerText = "Passwords do not match.";
        valid = false;
      }

      if (valid) {
        document.getElementById("result").innerText = "Form submitted successfully!";
      }

      return valid;
    }
