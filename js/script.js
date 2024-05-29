const form = document.getElementById("subscribeForm");
const emailInput = document.getElementById("email");
const modal = document.getElementById("subscribeModal");
const userEmail = document.getElementById("userEmail");
const dismissButton = document.getElementById("dismissButton");
const errorMessage = document.getElementById("error-message");

document.addEventListener("DOMContentLoaded", function () {
  emailInput.addEventListener("input", function () {
    if (emailInput.validity.valid) {
      submitButton.disabled = false;
      errorMessage.style.display = "none";
    } else {
      submitButton.disabled = true;
      errorMessage.style.display = "inline";
    }
  });
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = emailInput.value;

  if (validateEmail(email)) {
    userEmail.textContent = email;
    modal.showModal();
  } else {
    errorMessage.style.display = "block";
  }
});

dismissButton.addEventListener("click", function () {
  modal.close();
});

emailInput.addEventListener("input", function () {
  if (validateEmail(emailInput.value)) {
    errorMessage.style.display = "none";
    document.getElementById("submitButton").disabled = false;
  } else {
    document.getElementById("submitButton").disabled = true;
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
