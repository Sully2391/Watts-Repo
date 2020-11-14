let quotes = [
    'Test quote 1 this is a really really really reallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreally long quote to test the spacing!',
    'Test quote 2',
    'Here is a moderately long quote that is more likely to be an avg quote length',
    'small quote',
    'Test quote 5',
    'Test quote 6 this is a really really really reallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreally long quote to test the spacing!',
    'Here is a moderately long quote that is more likely to be an avg quote length',
    'Test quote 8',
    'Test quote 9',
    'Quote 10 is a little bit longer than the moderate quote just to get an idea how this will be behaving',
    'Test quote 11',
    'Here is a moderately long quote that is more likely to be an avg quote length',
    'Quote 13 is a little bit longer than the moderate quote just to get an idea how this will be behaving',
    'Test quote 14',
    'Quote 15 is a little bit longer than the moderate quote just to get an idea how this will be behaving',
    'Here is a moderately long quote that is more likely to be an avg quote length',
    'Test quote 17',
    'Test quote 18',
    'Here is a moderately long quote that is more likely to be an avg quote length',
    "Test quote 20",
]

function newQuote() {
let randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}