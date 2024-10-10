const express = require('express');
const rateLimit = require('express-rate-limit');
const path = require('path');
const quotes = require('./quotes');
const app = express();
const PORT = process.env.PORT || 3000;

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 200, // Limit each IP to 100 requests per windowMs
    handler: (req, res) => {
        res.status(429).json({
            message: 'Too many requests from this IP, please try again after 15 minutes'
        });
    }
});
app.use(limiter);

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'FreeQuotesAPI.html'));
});

app.get("/docs", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Docs.html'));
});

app.get("/api/quotes", (req, res) => {
    res.status(200).json(quotes);
})

app.get("/api/random", (req, res) => {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
    res.status(200).json(randomQuote);
});

app.get('/api/quotes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const quote = quotes.find(q => q.id === id);

    if (quote) {
        res.status(200).json(quote);
    } else {
        res.status(404).send({ message: 'Quote not found please try again with different id :-(' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
