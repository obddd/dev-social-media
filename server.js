const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));


PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('API is running'))

// Define routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/posts', require('./routes/api/posts'))
app.use('/api/profile', require('./routes/api/profile'))

app.listen(PORT, console.log(`Server started on ${PORT}`))






















