let quotes = [
    'The only way to make sense out of change is to plunge into it, move with it, and join the dance',
    'Trying to define yourself is like trying to bite your own teeth',
    'No valid plans for the future can be made by those who have no capacity for living now',
    'You and I are all as much continuous with the physical universe as a wave is continuous with the ocean',
    "But I'll tell you what hermits realize. If you go off into a far, far forest and get very quiet, you'll come to understand that you're connected with everything",
    'This is the real secret of life - to be completely engaged with what you are doing in the here and now. And instead of calling it work, realize it is play.',
    "The only Zen you'll find on mountaintops is the Zen you bring up there with you.",
    'Muddy water is best cleared by leaving it alone',
    'The menu is not the meal.',
    "What I am really saying is that you don't need to do anything, because if you see yourself in the correct way, you are all as much extraordinary phenomenon of nature as trees, clouds, the patterns in running water, the flickering of fire, the arrangement of the stars, and the form of a galaxy. You are all just like that, and there is nothing wrong with you at all",
    "Things are as they are. Looking out into the universe at night, we make no comparisons between right and wrong stars, nor between well and badly arranged constellations",
    'I owe my solitude to other people.',
    'Without birth and death, and without the perpetual transmutation of all the forms of life, the world would be static, rhythm-less, undancing, mummified.',
    'No one is more dangerously insane than one who is sane all the time: he is like a steel bridge without flexibility, and the order of his life is rigid and brittle',
    'When we attempt to exercise power or control over someone else, we cannot avoid giving that person the very same power or control over',
    'The more a thing tends to be permanent, the more it tends to be lifeless.',
    'Problems that remain persistently insoluble should always be suspected as questions asked in the wrong way.',
    'Technology is destructive only in the hands of people who do not realize that they are one and the same process as the universe.',
    'Normally, we do not so much look at things as overlook them.',
    "Stay in the center, and you will be ready to move in any direction.",
    "There is nothing at all that can be talked about adequately, and the whole art of poetry is to say what can't be said.",
    "No one imagines that a symphony is supposed to imrpove as it goes along, or that the whole object of playing is to reach the finale. The point of music is discovered in every moment of playing and listening to it. It is the same, I feel, with the greater part of our lives, and if we are unduly absorbed in improving them we may forget altogether to live them.",
]

function newQuote() {
let randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

newQuote();