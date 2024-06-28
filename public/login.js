$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();
        const userData = localStorage.getItem(username);
        const loginMessage = $('#loginMessage');

        if (!userData) {
            loginMessage.text('User does not exist. Please register first.').css('color', 'red');
        } else {
            const user = JSON.parse(userData);
            if (user.password === password) {
                loginMessage.text('Login successful! Redirecting to home page...').css('color', 'green');
                localStorage.setItem('loggedInUser', username);
                setTimeout(function() {
                    window.location.href = 'home.html';
                }, 2000);
            } else {
                loginMessage.text('Incorrect password. Please try again.').css('color', 'red');
            }
        }
    });
});
