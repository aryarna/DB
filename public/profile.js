$(document).ready(function() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        alert('You need to log in to view your profile.');
        window.location.href = 'login.html';
        return;
    }

    const userData = JSON.parse(localStorage.getItem(loggedInUser));
    if (userData) {
        console.log(userData); // Debugging line
        $('#username').text(userData.username);
        $('#email').text(userData.email);
        $('#phone').text(userData.phone);
        $('#password').text(userData.password.substring(0, 3) + '***');
        $('#winningAmount').text(userData.winningAmount);
    } else {
        alert('User data not found.');
        window.location.href = 'login.html';
    }
});
