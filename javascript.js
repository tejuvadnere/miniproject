var quotes = [
    'the way get started is to quit talking and begin',
    'we may encounter many defeats but we must not be defeated',
    'Few things have such a huge impact on happiness and the enjoyment, depth and plain fun of life as the friendships we have.',
    'Or even with people we have never even met at the other side of the world or the pets we love.',
    'A real friend is one who walks in when the rest of the world walks out.',
    'If you live to be 100, I hope I live to be 100 minus 1 day, so I never have to live without you.'
]

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}