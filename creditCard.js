
    function validateCreditCard() {
      const cardNumber = document.getElementById("cardNumber").value.trim();
      const result = document.getElementById("result");

      const amexRegex = /^3[47][0-9]{13}$/;
      const masterRegex = /^5[1-5][0-9]{14}$/;
      const visaRegex = /^4([0-9]{12}|[0-9]{15})$/;
      const discoverRegex = /^6011([0-9]{11}|[0-9]{12})$/;
      const dinersRegex = /^30[0-5][0-9]{11}$/;

      if (amexRegex.test(cardNumber)) {
        result.textContent = "Valid American Express Card";
        result.className = "valid";
      } else if (masterRegex.test(cardNumber)) {
        result.textContent = " Valid MasterCard";
        result.className = "valid";
      } else if (visaRegex.test(cardNumber)) {
        result.textContent = " Valid VISA Card";
        result.className = "valid";
      } else if (discoverRegex.test(cardNumber)) {
        result.textContent = "Valid Discover Card";
        result.className = "valid";
      } else if (dinersRegex.test(cardNumber)) {
        result.textContent = "Valid Diners Club Card";
        result.className = "valid";
      } else {
        result.textContent = "Invalid credit card number";
        result.className = "invalid";
      }
    }
  