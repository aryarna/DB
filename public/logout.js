$(document).ready(function() {
    // Remove the logged-in user from localStorage
    localStorage.removeItem('loggedInUser');
    
    // Redirect to the login page after a brief delay
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 2000);
});
