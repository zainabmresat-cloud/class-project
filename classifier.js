class Classifier {
    constructor() {
        this.classes = ["Technical", "Billing", "General Inquiry", "Spam"];
    }

    predict(text) {
        if (!text.trim()) {
            return { category: "Unknown", confidence: 0.0 };
        }

        // Mocking inference with basic logic
        const lowerText = text.toLowerCase();
        let category = this.classes[Math.floor(Math.random() * this.classes.length)];
        let confidence = (Math.random() * (0.99 - 0.7) + 0.7).toFixed(2);

        // Slightly smarter mock
        if (lowerText.includes("invoice") || lowerText.includes("billing") || lowerText.includes("payment")) {
            category = "Billing";
            confidence = (Math.random() * (0.99 - 0.9) + 0.9).toFixed(2);
        } else if (lowerText.includes("error") || lowerText.includes("bug") || lowerText.includes("help")) {
            category = "Technical";
            confidence = (Math.random() * (0.99 - 0.9) + 0.9).toFixed(2);
        }

        return {
            category: category,
            confidence: parseFloat(confidence)
        };
    }
}

module.exports = Classifier;
