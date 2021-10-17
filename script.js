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
        question: "The metal whose salts are sensitive to light is?",
        a: " Zinc ",
        b: "Silver ",
        c: " Copper",
        d: " Aluminium",
        ans: "ans2"
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
        question: "Fire temple is the place of worship of which of the following religion?",
        a: " Taoism ",
        b: " Shintoism",
        c: " Judaism",
        d: " Zoroastrianism (Parsi Religion)",
        ans: "ans4"
    },
    {
        question: "Golf player Vijay Singh belongs to which country?",
        a: " India ",
        b: "Fiji ",
        c: " UK",
        d: " USA",
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
}

const getCheckAnswer = () =>{
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer; 
}

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);  
}


loadQuestion();

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };
    questionCount++;

    deselectAll();
    if(questionCount < quizDB.length){
        loadQuestion();
    } else{
        showScore.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length} 🍻 </h3>
        <button class="btn" onclick = "location.reload()"> Play Again </button>

        `;

        showScore.classList.remove('scoreArea');
    }
});