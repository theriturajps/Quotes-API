# Quotes API

![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black) ![Vercel](https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white)

Welcome to the Quotes API! Access a vast collection of motivational quotes designed to enhance your applications. This free and open API is easy to integrate into your projects, helping you inspire and motivate your users effectively.

<div align='center'>
  <br>
  <img src="https://github.com/user-attachments/assets/b989a196-34e8-4b42-9e9a-9351608a2248" alt="Free-Quotes-API-A-free-and-Open-Source-Quotes-API">
  <br>
</div>

## Technologies Used

- **Language**: JavaScript
- **Backend**: Express.js
- **Hosting**: Vercel

## Getting Started

To get started with the API, you can make requests to the following endpoints to get quotes:

### Get a Random Quote

```
GET https://qapi.vercel.app/api/random
```

This will return a JSON response with a random quote and its author.

### Get All Quotes

```
GET https://qapi.vercel.app/api/quotes
```

This will return a JSON response with all quotes in the collection.

### Get Quote by ID

```
GET https://qapi.vercel.app/api/quotes/{id}
```

Replace `{id}` with the specific ID of the quote you want to fetch. This will return a JSON response with the quote and its author.

## Example Responses

### Random Quote

```json
{
    "id" : 1, 
    "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "author": "Albert Schweitzer"
}
```

### All Quotes

```json
[
    {
        "id": 1,
        "quote": "The best way to get started is to quit talking and begin doing.",
        "author": "Walt Disney"
    },
    {
        "id": 2,
        "quote": "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
        "author": "Winston Churchill"
    },
    {
        "id": 3,
        "quote": "Don’t let yesterday take up too much of today.",
        "author": "Will Rogers"
    }
]
```

### Quote by ID

```json
{
    "id": 1,
    "quote": "The best way to get started is to quit talking and begin doing.",
    "author": "Walt Disney"
}
```

## Rate Limiting
- **Window Duration**: 15 minutes
- **Maximum Requests**: 200 requests per IP within the window duration
- **Response on Limit Exceed**: A 429 Too Many Requests status code with the following JSON response

```json
{
  "message": "Too many requests from this IP, please try again after 15 minutes"
}
```

## Usage

You can use the API to display quotes on your website or application to motivate your users. Here are some examples of how you can use the API with JavaScript:

### Get Random Quote

```javascript
fetch('https://qapi.vercel.app/api/random')
    .then(response => response.json())
    .then(data => {
        console.log(data.quote);
        console.log("- " + data.author);
    });
```

### Get All Quotes

```javascript
fetch('https://qapi.vercel.app/api/quotes')
    .then(response => response.json())
    .then(data => {
        data.forEach(quote => {
            console.log(quote.quote);
            console.log("- " + quote.author);
        });
    });
```

### Get Quote by ID

```javascript
const quoteId = 1; // Example ID
fetch(`https://qapi.vercel.app/api/quotes/${quoteId}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.quote);
        console.log("- " + data.author);
    });
```

## Installation

1. Clone this repository:
```
git clone https://github.com/theriturajps/quotes-api.git
```
2. Go inside Folder
```
cd quotes-api
```
3. Install the dependencies:
```
npm install
```
3.Start the server:
```
npm start
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## More Details

<a href="https://github.com/theriturajps">![Github](https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=GitHub&logoColor=white)</a> <a href="https://telegram.me/riturajps">![Telegram](https://img.shields.io/badge/Telegram-26A5E4.svg?style=for-the-badge&logo=Telegram&logoColor=white)</a> <a href="https://instagram.com/riturajps">![Instagram](https://img.shields.io/badge/Instagram-E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)</a>


- **Developer :-** @theriturajps
- **Fork :-** [Fork this Repo](https://github.com/theriturajps/Quotes-API/fork)
