const form = document.querySelector('.signup-form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput?.value?.trim();

    if (!email) return;

    const button = form.querySelector('button');
    if (button) {
      button.textContent = 'You\'re on the list';
      button.disabled = true;
    }

    if (emailInput) {
      emailInput.value = '';
      emailInput.placeholder = 'Thanks for joining!';
      emailInput.disabled = true;
    }
  });
}
