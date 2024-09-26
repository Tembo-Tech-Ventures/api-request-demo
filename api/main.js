const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/location', async (req, res) => {
    const ip = '174.7.252.220';
    const response = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await response.json();

    
    console.log(data);
    res.send(`Your location is ${data.city}, ${data.regionName}, ${data.country}`);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});