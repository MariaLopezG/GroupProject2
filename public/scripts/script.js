// const isLoggedIn = true; // For demonstration purposes, assuming the user is logged in

//     if (isLoggedIn) {
//         // Update the navbar link to display the username
//         const profileLink = document.getElementById('profileLink');
//         profileLink.innerHTML = `<i class="fa-regular fa-user"> ${username}</i>`;
//     }
// Extract the username from the URL
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

if (username) {
    // Update the navbar link to display the username
    const profileLink = document.getElementById('profileLink');
    profileLink.innerHTML = `<i class="fa-regular fa-user"> ${username}</i>`;
}