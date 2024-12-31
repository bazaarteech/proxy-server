const express = require('express');
const request = require('request');
const app = express();

app.get('/proxy', (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).send('URL is required');
    }

    request(url, (error, response, body) => {
        if (error) {
            return res.status(500).send('Error fetching the URL');
        }
        res.send(body);
    });
});

// استخدم منفذ Render أو منفذ 3000 بشكل افتراضي
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});
