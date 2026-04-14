const express = require('express');
const bodyParser = require('body-parser');
const Classifier = require('./classifier');

const app = express();
const port = process.env.PORT || 8000;
const classifier = new Classifier();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ message: "Class Classification API is running" });
});

app.post('/classify', (req, res) => {
    const { text } = req.body;
    
    if (!text) {
        return res.status(400).json({ error: "Text field is required" });
    }

    try {
        const { category, confidence } = classifier.predict(text);
        res.json({
            text: text,
            category: category,
            confidence: confidence
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Class Classification API listening at http://localhost:${port}`);
    });
}

module.exports = app;
