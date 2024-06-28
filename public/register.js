$(document).ready(function() {
    $('#registerForm').on('submit', function(event) {
        event.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();
        const email = $('#email').val();
        const phone = $('#phone').val();
        const userData = {
            username,
            password,
            email,
            phone,
            winning: 0
        };
        localStorage.setItem(username, JSON.stringify(userData));
        alert('Registration successful! Please log in.');
        window.location.href = 'login.html';
    });
});
