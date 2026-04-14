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

## Technologies
Node.js, Express, Jest