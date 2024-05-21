document.addEventListener('DOMContentLoaded', function() {
    // Function to extract URL parameters
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // Extract the username from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const username = getUrlParameter('username');

    // Update the navbar link to display the username
    if (username) {
        const profileLink = document.getElementById('profileLink');
        profileLink.innerHTML = `<i class="fa-regular fa-user"> ${username}</i>`;
    }

    // Add event listener to the login form
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        const userData = {
            username: formData.get('username'),
            password: formData.get('password')
        };

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Login failed');
            }
            alert('Login successful!');
            window.location.href = '/'; // Redirect to homepage
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Login failed');
        });
    });
});
