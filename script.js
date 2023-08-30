const quizData = [
    {
        question: "What is Ghatak's favourite language?",
        a: "JavaScript",
        b: "Python",
        c: "Java",
        d: "CPP",
        correct: "a"
    },
    {
        question: "Ghatak is how many years old?",
        a: "18",
        b: "20",
        c: "22",
        d: "24",
        correct: "c"
    },
    {
        question: "What is Ghatak's favourite food?",
        a: "Chilli Chicken",
        b: "Chilli Paneer",
        c: "Chole Bhature",
        d: "Chowmein",
        correct: "b"
    },
    {
        question: "Which place Ghatak likes to visit very ofter?",
        a: "Sunny Paji's House",
        b: "Centrum Mall",
        c: "Galaxy Mall",
        d: "Damodar",
        correct: "d"
    },
    {
        question: "How many girlfriend does Ghatak have?",
        a: "1",
        b: "2",
        c: "Infinite",
        d: "I don't care",
        correct: "a"
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz(){    
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;
    
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswer(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", ()=>{
    const answer = getSelected();
    if(answer === quizData[currentQuiz].correct){
        score++;
    }
    currentQuiz++;
    
    if(currentQuiz < quizData.length){
        loadQuiz();
    }else{
        quiz.innerHTML = `<h2 id="quiz-result">Your score is: ${score}/${quizData.length}</h2>
            <button onclick="location.reload()">Reload</button>
            `;

    }    
});
