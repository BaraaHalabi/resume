var bubble = document.getElementById("bubble");
let quotes = ['Problem Solver 🧠', 'Team Oriented 👏🏻', 'Creative Coder 🎨', 'Attention To-Detail 🤏🏻'];
var quoteIndex = 1;

const changeQuote = index => {
    bubble.classList.add('hidden');
    setTimeout(() => {
        bubble.innerHTML = quotes[index % quotes.length];
        bubble.classList.remove('hidden');
    }, 500);
}

bubble.innerHTML = quotes[0];
bubble.classList.remove('hidden');
setInterval(() => {
    changeQuote(quoteIndex);
    quoteIndex ++;
}, 3000);