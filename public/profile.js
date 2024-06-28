$(document).ready(function() {
    // Check if there is a logged-in user stored in local storage
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        // Redirect to login page if no logged-in user found
        alert('You need to log in to view your profile.');
        window.location.href = 'login.html';
        return;
    }

    // Fetch user data from local storage using the logged-in user key
    const userData = localStorage.getItem(loggedInUser);
    if (userData) {
        // Parse user data from JSON format
        const user = JSON.parse(userData);
        
        // Update profile information in the HTML
        $('#username').text(user.username); // Display username
        $('#userEmail').text(user.email);
        $('#userPhone').text(user.phone);
        $('#userWinning').text(user.winning);
        
        // Display first three characters of the password followed by ***
        const maskedPassword = user.password.substring(0, 3) + '***'; // Mask the rest for security
        $('#userPassword').text(maskedPassword);
    } else {
        // Redirect to login page if user data is not found
        alert('User data not found.');
        window.location.href = 'login.html';
    }
});
