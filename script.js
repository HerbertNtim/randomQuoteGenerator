document.window = init;
function init () {
    generateQuote();
}

function generateQuote() {
    let quoteSize = localQuotes.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomQuote = localQuotes[randomIndex];
    
    document.getElementById('text').innerText = randomQuote.text;
    document.getElementById('author').innerText = randomQuote.author;
}