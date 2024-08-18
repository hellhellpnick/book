/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/button-has-type */
import React from 'react';

function CSSPage() {
  function clearAll() {
    const meme = document.querySelector('.memeC');
    meme.innerHTML = '';
    const joke = document.querySelector('.joke');
    joke.innerHTML = '';
    const quote = document.querySelector('.Quote');
    quote.innerHTML = '';
    const riddle = document.querySelector('.Riddle');
    riddle.innerHTML = '';
  }

  function showMeme() {
    // Value is a string representing image URL
    const randomMemeUrl = getRandomData('memes');
    const Container = document.querySelector('.memeC');
    const newM = document.createElement('img');
    newM.setAttribute('src', randomMemeUrl);

    clearAll();
    Container.appendChild(newM);
  }

  function showJoke() {
    // Value is a string representing the joke
    const randomJokeText = getRandomData('jokes');
    const jContainer = document.querySelector('.joke');
    const newJ = document.createElement('p');
    newJ.textContent = randomJokeText;

    clearAll();

    jContainer.appendChild(newJ);
  }

  function showQuote() {
    // Value should be in format: { quote: '', author: '' }
    const randomQuote = getRandomData('quotes');
    const qContainer = document.querySelector('.Quote');
    const newQ = document.createElement('p');
    const newA = document.createElement('p');
    newQ.textContent = randomQuote.quote;
    newA.textContent = `- ${randomQuote.author}`;

    clearAll();
    qContainer.appendChild(newQ);
    qContainer.appendChild(newA);
  }
  function showRiddle() {
    // Value should be in format: { question: '', answer: '' }
    const randomRiddle = getRandomData('riddles');
    const rContainer = document.querySelector('.Riddle');
    const newR = document.createElement('p');
    const newAns = document.createElement('p');
    newR.textContent = randomRiddle.question;
    newAns.textContent = `-${randomRiddle.answer}`;
    newAns.setAttribute('id', 'ans');

    clearAll();

    newAns.hidden = true;

    rContainer.appendChild(newR);
    rContainer.appendChild(newAns);
  }

  function revealAnswers() {
    const rContent = document.querySelector<HTMLElement>('.Riddle');
    const riddle = rContent.querySelector<HTMLElement>('p');
    const riddleAnswer = document.querySelector<HTMLElement>('#ans');

    if (riddle && riddleAnswer.hidden) {
      riddleAnswer.hidden = false;
    } else if (riddle && riddleAnswer) {
      alert('Answer is already visible.');
    } else {
      alert('There is no riddle visible.');
    }
  }
  function getRandomData(type) {
    return data[type][rn(data[type].length)];
  }

  const memes = ['https://i.redd.it/a0v87gwzoge61.jpg', 'https://www.dailymoss.com/wp-content/uploads/2015/10/mithun.jpg', 'https://preview.redd.it/sad-reality-v0-mrhsn285izid1.jpeg?width=640&crop=smart&auto=webp&s=b4a7106ca06150bfa320e358d59cb4fa412c44f6', 'https://i.kym-cdn.com/photos/images/newsfeed/002/239/695/fc4.jpg', 'https://www.boredpanda.com/blog/wp-content/uploads/2024/05/C6EejXvuPQ9-png__700.jpg', 'https://img.ifunny.co/images/c5c6efc67a21cbba6adbdefb3add2933196a556597e519313b87a2e69c335880_1.jpg', 'https://www.boredpanda.com/blog/wp-content/uploads/2024/05/C1z8ql1vJRk-png__700.jpg', 'https://i.pinimg.com/originals/13/5a/bf/135abfe5748ab1b9ffce3ca5e4d33352.jpg', 'https://wallpapers.com/images/featured/funny-meme-pictures-ppzthb74p3b686b9.jpg', 'https://cdn-0.tutorial45.com/wp-content/uploads/2020/08/enginerring-code.jpg', 'https://images.interestingengineering.com/images/JANUARY/memes_about_engineers_before_after.jpg', 'https://www.trendingus.com/wp-content/uploads/2019/12/Hindustani_bhau_coronavirus_memes_-_trending_memes_in_india-1-1.jpg'];

  const jokes = ['This statement', 'Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”', 'There are only 10 kinds of people in this world: those who know binary and those who don’t.', 'All programmers are playwrights, and all computers are lousy actors.', 'Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.', 'The generation of random numbers is too important to be left to chance.', 'Debugging: Removing the needles from the haystack.', '“Debugging” is like being the detective in a crime drama where you are also the murderer.', 'There are two ways to write error-free programs; only the third one works.', 'The best thing about a Boolean is even if you are wrong, you are only off by a bit.'];
  const quotes = [
    { quote: 'Programs must be written for people to read, and only incidentally for machines to execute.', author: 'Harold Abelson' },
    { quote: 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.', author: 'Rick Cook' },
    { quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live', author: 'John Woods' },
    { quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', author: 'Martin Fowler' },
    { quote: 'Truth can only be found in one place: the code.', author: 'Robert C. Martin' },
    { quote: 'That\'s the thing about people who think they hate computers. What they really hate is lousy programmers.', author: 'Larry Niven' },
    { quote: 'You\'ve baked a really lovely cake, but then you\'ve used dog shit for frosting.', author: 'Steve Jobs' },
    { quote: 'A language that doesn\'t affect the way you think about programming is not worth knowing.', author: 'Alan J. Perlis' },
    { quote: 'The most disastrous thing that you can ever learn is your first programming language.', author: 'Alan Kay' },
    { quote: 'The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.', author: 'Joseph Weizenbaum' },
    { quote: 'Everyone knows that debugging is twice as hard as writing a program in the first place. So if you\'re as clever as you can be when you write it, how will you ever debug it?', author: 'Brian Kernighan' },
    { quote: 'No matter which field of work you want to go in, it is of great importance to learn at least one programming language.', author: 'Ram Ray' },
  ];

  const riddles = [
    { question: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?', answer: 'An echo' },
    { question: 'You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ', answer: 'A Candle' },
    { question: 'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ', answer: 'A Map' },
    { question: 'What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?', answer: 'The letter "R"' },
    { question: 'You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?', answer: 'All the people were married' },
    { question: 'What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?', answer: 'Heroine' },
  ];

  function rn(len) {
    return Math.floor(Math.random() * len);
  }

  const data = {
    memes,
    jokes,
    quotes,
    riddles,
  };

  const css = `/* 
NO ACTION REQUIRED BY YOU

Don't worry about this section.  These CSS styles are here to make the HTML document look cleaner, but are not part of the lesson.

Just write your HTML however you want and these will automatically work.
*/

body {
  background-color: #1D2326;
  color: #BFA38A;
  font-family: monospace;
}

main {
  display: flex;
  flex-direction: row;
}

img {
  border: 1px solid white;
  border-radius: 5px;
  max-width: 350px;
  width: 100%;
}

p {
  color: #8097A6;
}

.attribution {
  position: absolute;
  right: 20px;
  bottom: 20px;
  font-size: 0.8rem;
  background-color: #8097A6;
  padding: 10px;
  border-radius: 5px;
  color: #1D2326;
  box-shadow: 1px 2px 5px 1px rgba(255,255,255, 0.2);
}

a {
  color: white;
}

a:hover {
  opacity: 0.8;
}

.content {
  width: 65%;
  padding-left: 30px;
  padding-right: 20px;
}

.content p {
  max-width: 80%;
}

.sidebar {
  display: flex;
  flex-direction: column;
  width: 30%;
  padding-left: 30px;
  padding-right: 30px;
  border-left: 1px dotted #BFA38A;
}

button {
  width: 200px;
  max-width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 35px;
  border: 1px solid #BFA38A;
  background: transparent;
  color: #BFA38A;
  border-radius: 5px;
}

button:hover {
  cursor: pointer;
  background-color: rgba(255,255,255,0.1)
}

.reveal-btn {
  border: none;
  text-decoration: underline;
  margin: 0;
}

.reveal-btn:hover {
  color: white;
  background-color: transparent;
}`;

  return (
    <main>
      <style>
        {css}
      </style>
      <section className="content">
        <h2>Output</h2>
        <div>
          <h3>Programmer memes</h3>
          <div className="memeC" />
          <h3>Tell me something funny!</h3>
          <div className="joke" />
          <h3>Give me some wisdom...</h3>
          <div className="Quote" />
          <h3>I want a riddle!</h3>
          <div className="Riddle" />
        </div>
      </section>

      <section className="sidebar">
        <h2>Actions</h2>
        <button onClick={showMeme}>Show a Meme</button>
        <button onClick={showJoke}>Tell Me a Joke</button>
        <button onClick={showQuote}>Random Quote</button>
        <button onClick={showRiddle}>Riddle me</button>
        <button className="reveal-btn" onClick={revealAnswers}>Reveal Riddle Answer</button>

      </section>
    </main>
  );
}

export default CSSPage;
