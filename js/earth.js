/* ============================================================
   earth.js — Mini quiz

   How it works:
   - Questions are stored in an array of objects.
   - showQuestion() builds the answer buttons for one question.
   - Clicking an answer marks it right or wrong, adds to the
     score, and shows a "Next" button.
   - After the last question, the final score is shown.
   ============================================================ */

const questions = [
  {
    question: "How long does Earth take to go around the Sun?",
    answers: ["24 hours", "29.5 days", "365.25 days", "88 days"],
    correct: 2
  },
  {
    question: "About how much of Earth's surface is covered by water?",
    answers: ["25%", "50%", "71%", "90%"],
    correct: 2
  },
  {
    question: "What number planet is Earth from the Sun?",
    answers: ["2nd", "3rd", "4th", "5th"],
    correct: 1
  },
  {
    question: "How long does sunlight take to reach Earth?",
    answers: ["8 seconds", "8 minutes", "8 hours", "8 days"],
    correct: 1
  },
  {
    question: "How many moons does Earth have?",
    answers: ["0", "1", "2", "3"],
    correct: 1
  }
];

const progress = document.getElementById("quiz-progress");
const questionText = document.getElementById("quiz-question");
const answerBox = document.getElementById("quiz-answers");
const feedback = document.getElementById("quiz-feedback");
const nextBtn = document.getElementById("quiz-next");

let index = 0;
let score = 0;

function showQuestion() {
  const q = questions[index];
  progress.textContent = "Question " + (index + 1) + " / " + questions.length;
  questionText.textContent = q.question;
  feedback.textContent = "";
  nextBtn.hidden = true;
  answerBox.innerHTML = "";   // clear the old buttons

  q.answers.forEach(function (answer, i) {
    const btn = document.createElement("button");
    btn.className = "btn answer";
    btn.type = "button";
    btn.textContent = answer;
    btn.addEventListener("click", function () {
      checkAnswer(i);
    });
    answerBox.appendChild(btn);
  });
}

function checkAnswer(choice) {
  const q = questions[index];
  const buttons = answerBox.querySelectorAll("button");

  // Lock the answers and highlight the correct one
  buttons.forEach(function (btn, i) {
    btn.disabled = true;
    if (i === q.correct) {
      btn.classList.add("is-correct");
    } else if (i === choice) {
      btn.classList.add("is-wrong");
    }
  });

  if (choice === q.correct) {
    score++;
    feedback.textContent = "Correct.";
  } else {
    feedback.textContent = "Not quite. It's " + q.answers[q.correct] + ".";
  }

  nextBtn.textContent = index < questions.length - 1 ? "Next question" : "See score";
  nextBtn.hidden = false;
  nextBtn.focus();
}

function showScore() {
  progress.textContent = "Done";
  questionText.textContent = "You got " + score + " / " + questions.length + ".";
  answerBox.innerHTML = "";
  feedback.textContent = score === questions.length ? "Perfect score." : "Try again?";
  nextBtn.textContent = "Restart quiz";
  nextBtn.hidden = false;
}

nextBtn.addEventListener("click", function () {
  if (index >= questions.length) {
    // Restart
    index = 0;
    score = 0;
    showQuestion();
    return;
  }
  index++;
  if (index < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

showQuestion();
