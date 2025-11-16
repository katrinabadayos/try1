const contactForm = document.querySelector('form[name="contact"]');
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default form submission

  // Submit the form using Netlify API
  const formData = new FormData(contactForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      contactForm.reset(); // clear the form
      formMessage.style.display = "block"; // show thank-you
    })
    .catch((error) => alert("Oops! There was a problem submitting your form."));
});
