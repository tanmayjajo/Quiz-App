const quizDB = [
    {
        question: "Who among the following wrote Sanskrit grammar?",
        a: " Kalidasa ",
        b: "Charak ",
        c: " Panini",
        d: " Aryabhatt",
        ans: "ans3"
    },
    {
        question: "The best conductor of Electricity among following is?",
        a: " Zinc ",
        b: "Silver ",
        c: " Copper",
        d: " Aluminium",
        ans: "ans3"
    },
    {
        question: "The Hottest Planet in the solar system is?",
        a: " Mercury",
        b: " Earth",
        c: " Venus",
        d: " Mars",
        ans: "ans3"
    },
    {
        question: "What is Real Name of Iron Man?",
        a: " Tony Stark ",
        b: " Mick Wingert",
        c: " Robert Downey Jr.",
        d: " Davin Ransom",
        ans: "ans3"
    },
    {
        question: "Who is the Father of Geometry?",
        a: " Aristotle ",
        b: " Euclid",
        c: " Pythagoras",
        d: " Kepler",
        ans: "ans2"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector(' #option1');
const option2 = document.querySelector(' #option2');
const option3 = document.querySelector(' #option3');
const option4 = document.querySelector(' #option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;



    var element;
    if (questionCount == 0) {
        element = document.getElementById("prev");
        element.style.display = "none";
        element = document.getElementById("next");
        element.style.display = "inline";
    } else if (questionCount == quizDB.length - 1) {
        element = document.getElementById("next");
        element.style.display = "none";
        element = document.getElementById("prev");
        element.style.display = "inline";
    } else {

        element = document.getElementById("prev");
        element.style.display = "inline";
        element = document.getElementById("next");
        element.style.display = "inline";
    }

}

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
}

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}


loadQuestion();

next.addEventListener('click', () => {
    deselectAll();
    questionCount++;
    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {

    }
});


prev.addEventListener('click', () => {
    questionCount--;
    loadQuestion();
    deselectAll();
});

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer == quizDB[questionCount].ans) {
        score++;
    };
    questionCount++;

    deselectAll();
    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {

        var element = document.getElementById("navigation-bar");
        element.style.display = "none";

        showScore.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length} 🍻 </h3>
        <button class="btn" onclick = "location.reload()"> Play Again </button>

        `;

        showScore.classList.remove('scoreArea');
    }
});