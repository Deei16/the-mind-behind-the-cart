// The Mind Behind the Cart — shared site behavior

document.addEventListener('DOMContentLoaded', function () {
  // Mobile navigation toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Close menu when a link is chosen (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Contact form: client-side validation + friendly confirmation.
  // NOTE FOR DEPLOYMENT: this form currently only validates in the browser.
  // To actually receive messages once the site is live, either:
  //   1) Point the <form> "action" attribute at a form backend such as
  //      Formspree, Getform, or Basin and remove preventDefault() below, or
  //   2) Wire this up to your own server endpoint.
  var form = document.querySelector('#contact-form');
  if (form) {
    var success = document.querySelector('#form-success');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = form.checkValidity();
      if (!valid) {
        form.reportValidity();
        return;
      }
      form.reset();
      if (success) {
        success.style.display = 'block';
        success.setAttribute('tabindex', '-1');
        success.focus();
      }
    });
  }
});
