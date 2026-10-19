// Чекбокс "Show password": показує або ховає пароль
const passwordInput = document.getElementById('password');
const showPassword = document.getElementById('showPassword');

showPassword.addEventListener('change', () => {
    // якщо чекбокс увімкнено — тип поля "text", інакше — "password"
    passwordInput.type = showPassword.checked ? 'text' : 'password';
});
