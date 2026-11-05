require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/health', (req, res) => {
    res.status(200).json({
        status:'ok', 
        message: 'Server is running' 
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});