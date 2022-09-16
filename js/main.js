const answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
];


function ClearFields() {
  document.getElementById("return-answer-field").innerHTML = "";
};



document.getElementById("button-js").addEventListener("click", function () {
    
    const answer = answers[Math.floor(Math.random() * answers.length)];

    document.getElementById('Magic-8-Ball-img').classList.toggle('shake');

    setTimeout(() => {
      document.getElementById("return-answer-field").innerHTML = answer
    },1200)
    console.log(answer)
});

document.getElementById("Magic-8-Ball-img").addEventListener("animationend", function() {
  document.getElementById('Magic-8-Ball-img').classList.remove('shake');
});

// const answer = document.getElementById("return-answer-field");












