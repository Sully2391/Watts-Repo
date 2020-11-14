let quotes = [
    'Test quote 1 this is a really really really reallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreally long quote to test the spacing!',
    'Test quote 2',
    'Test quote 3',
    'Test quote 4',
    'Test quote 5',
    'Test quote 6',
    'Test quote 7',
    'Test quote 8',
    'Test quote 9',
    'Test quote 10',
    'Test quote 11',
    'Test quote 12',
    'Test quote 13',
    'Test quote 14',
    'Test quote 15',
    'Test quote 16',
    'Test quote 17',
    'Test quote 18',
    'Test quote 19',
    "Test quote 20",
]

function newQuote() {
let randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}