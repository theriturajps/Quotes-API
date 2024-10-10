function copyToClipboard() {
    const quoteText = document.getElementById('quoteLink').innerText;
    navigator.clipboard.writeText(quoteText).then(() => {
        alert('Quote API link copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy quote API link:', err);
    });
}

function get_random_quote() {
    fetch('https://qapi.vercel.app/api/random')
    .then(response => response.json())
    .then(data => {
        let quote = document.getElementById("quote");
        quote.style.display = 'block';
        quote.textContent = data.quote;

        let quoteAuthor = document.getElementById("quoteAuthor");
        quoteAuthor.style.display = 'block';
        quoteAuthor.textContent = data.author;
    })
    .catch(error => {
        console.error('Error fetching quote:', error);
    });
}

document.addEventListener('DOMContentLoaded', function() {
const text = "Free Quotes API!";
const delay = 100;
const element = document.getElementById('typing-heading');

function typeWriter(text, i) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => {
            typeWriter(text, i);
        }, delay);
    } else {
        setTimeout(() => {
            element.innerHTML = '';
            typeWriter(text, 0);
        }, 3000);
    }
}
typeWriter(text, 0);
});
