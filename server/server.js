const express = require('express');
const path = require('path');
const db = require('./database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public')));

//Route for the root URL
app.get('/', (req, res) => {
    // Send the index.html file as the response
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

//Route for other HTML pages
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'signup.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'cart.html'));
});

// Route for user login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // check if the username and password are valid
    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (!row) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        // Successful login
        res.status(200).json({ message: 'Login successful' });
    });
});

// Route for user registration
app.post('/signup', (req, res) => {
    const { name, last_name, username, password, email } = req.body;

    // Insert new user into the database
    db.run('INSERT INTO users (name, last_name, username, password, email) VALUES (?, ?, ?, ?, ?)', [name, last_name, username, password, email], (err) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        // Successful registration
        res.status(201).json({ message: 'Registration successful' });
    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

