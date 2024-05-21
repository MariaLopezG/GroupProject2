 // Extract the username from the URL
 const urlParams = new URLSearchParams(window.location.search);
 const username = urlParams.get('username');

 if (username) {
     // Update the navbar link to display the username
     const profileLink = document.getElementById('profileLink');
     profileLink.innerHTML = `<i class="fa-regular fa-user"> ${username}</i>`;
 }