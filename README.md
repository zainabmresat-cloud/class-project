# Class Classification API

## Description
This project is a simple text classification system built with Node.js and Express.  
It receives text input and returns a classification category.

## How to run
npm install  
npm start  

## API

GET /  
Returns server status.

POST /classify  
Send JSON:
{
  "text": "your text here"
}

Returns:
{
  "category": "example",
  "confidence": 0.9
}

## Model Evaluation

### Confusion Matrix (4x4)

|        | Predicted Positive | Predicted Negative | Predicted Neutral | Predicted Other |
|--------|-------------------|--------------------|-------------------|-----------------|
| Actual Positive | 8 | 1 | 0 | 0 |
| Actual Negative | 1 | 7 | 1 | 0 |
| Actual Neutral  | 0 | 1 | 8 | 0 |
| Actual Other    | 0 | 0 | 1 | 8 |

### Accuracy

Accuracy = (8+7+8+8) / Total = 31 / 36 = 86%
## Technologies
Node.js, Express, Jest