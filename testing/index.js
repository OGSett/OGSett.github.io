document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("emailInput");
    const errorMessage = document.querySelector(".error-message");

    emailInput.addEventListener("input", function() {
        if (!isValidEmail(emailInput.value)) {
            emailInput.classList.add("invalid-email");
            errorMessage.style.display = "block";
        } else {
            emailInput.classList.remove("invalid-email");
            errorMessage.style.display = "none";
        }
    });

    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    document.querySelector('button').addEventListener('click', function() {
        // Select the container div and set its display property to 'none'
        document.querySelector('.container').style.display = 'none';
      });
      document.querySelector('button').addEventListener('click', function() {
        // Select the new-div and set its display property to 'block'
        document.querySelector('.card').style.display = 'block';
      });
      
});