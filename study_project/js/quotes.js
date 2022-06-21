const quotes = [
  {
    quote: "We still do not know one-thousandth of one percent of what nature has revealed to us.",
    author: "Albert Einstein",
  },
  {
    quote: "You may delay, but time will not.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Men will fight long and hard for a bit of colored ribbon.",
    author: "Napoleon Bonaparte",
  },
  {
    quote: "At the height of laughter, the universe is flung into a kaleidoscope of new possibilities.",
    author: "Jean Houston",
  },
  {
    quote: "It is curious that physical courage should be so common in the world and moral courage so rare.",
    author: "Mark Twain",
  },
  {
    quote: "It is wise to apply the oil of refined politeness to the mechanisms of friendship.",
    author: "Colette",
  },
  {
    quote: "Life is like playing a violin in public and learning the instrument as one goes on.",
    author: "Samuel Butler",
  },
  {
    quote: "If an idea's worth having once, it's worth having twice.",
    author: "Tom Stoppard",
  },
  {
    quote: "Having been poor is no shame, but being ashamed of it, is.",
    author: "Benjamin Franklin",
  },
  {
    quote: "To punish me for my contempt for authority, fate made me an authority myself.",
    author: "Albert Einstein",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
