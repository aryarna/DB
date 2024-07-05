document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const userData = JSON.parse(localStorage.getItem(username));

    if (userData && userData.password === password) {
        sessionStorage.setItem('loggedInUser', username);
        document.getElementById('successMessage').style.display = 'block';
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 2000);
    } else {
        document.getElementById('errorMessage').style.display = 'block';
    }
});
