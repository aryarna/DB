document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    const userData = { username, email, phone, password, winningAmount: 0 };

    localStorage.setItem(username, JSON.stringify(userData));
    document.getElementById('successMessage').style.display = 'block';

    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
});
