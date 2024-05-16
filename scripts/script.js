const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(loginForm);
    const response = await fetch('/login', {
        method: 'POST',
        body: formData
    });
    
    const data = await response.json();
    console.log(data); // Handle response here (e.g., display message to user)
});

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(signupForm);
    const response = await fetch('/signup', {
        method: 'POST',
        body: formData
    });
    
    const data = await response.json();
    console.log(data); // Handle response here (e.g., display message to user)
});
