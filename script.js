document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear previous errors
  document.getElementById('nameError').textContent = "";
  document.getElementById('emailError').textContent = "";
  document.getElementById('messageError').textContent = "";
  document.getElementById('successMsg').textContent = "";

  // Get values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let isValid = true;

  // Validate Name
  if (name === "") {
    document.getElementById('nameError').textContent = "Name is required.";
    isValid = false;
  }

  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = "Enter a valid email.";
    isValid = false;
  }

  // Validate Message
  if (message === "") {
    document.getElementById('messageError').textContent = "Message is required.";
    isValid = false;
  }

  if (isValid) {
    document.getElementById('successMsg').textContent = "✅ Form submitted successfully!";
    // Optionally reset form
    document.getElementById('contactForm').reset();
  }
});
