const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());    // Middleware to parse Json

// Routers
const postRouter = require('./routes/Posts');

app.use('/posts', postRouter);

// Importing Models and Creating tables
const db = require('./models');
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});