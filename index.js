
const quotes = [
    "I am so clever that sometimes I don't understand a single word of what I am saying. - Oscar Wilde",
    "Life is hard. After all, it kills you. - Katherine Hepburn",
    "People say nothing is impossible, but I do nothing every day. - A.A Milne",
    "Criticism is the best sign you're onto something. - Michael Lopp",
    "Always borrow money from a pessimist. He won't expect it back. - Oscar Wilde",
    "Don't be so humble - you are not that great. - Golda Meir",
    "Before you criticise someone, you should walk a mile in their shoes. That way when you criticise them, you are a main away from them and you have their shoes. - Jack Handey",
    "The best revense is massive success. - Frank Sinatra",
    "I am an early bird and a night owl... so I am wise and I have worms. - Michael Scott",
    "They hate us cause they ain't us. - Dave Skylark",
    "Don't be sorry, be fierce. - Rupaul" 
]

const usedIndexes = new Set()
const quoteTElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
       // usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteTElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}
