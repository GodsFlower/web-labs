import SuccessReg from "./alfabet/success-reg.js";

const form = document.getElementById('loginForm');
const password = document.getElementById('password');
const showPassword = document.getElementById('showPassword');
const successReg = new SuccessReg();

// Показ / приховування пароля
showPassword.addEventListener('change', () => {
    password.type = showPassword.checked ? 'text' : 'password';
});

// Обробка натискання на кнопку "Submit"
form.addEventListener('submit', (event) => {
    event.preventDefault();   // не перезавантажуємо сторінку
    successReg.writeName();   // виводимо ім'я по літерах
});
