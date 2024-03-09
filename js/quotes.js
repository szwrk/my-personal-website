const quotes = [
    { quote: "Clean code is simple and direct. Clean code reads like well-written prose.", author: "Robert C. Martin" },
    { quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

window.onload = function() {
    const quoteContainer = document.getElementById('blockquote');
    const randomQuote = getRandomQuote();
    quoteContainer.innerHTML = `<blockquote>${randomQuote.quote}<footer><cite>${randomQuote.author}</cite></footer></blockquote>`;
};