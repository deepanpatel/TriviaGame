
var quizQuestions = [
    {
        question: "How many letters are in the alaphbet?",
        choices: ["25", "24", "28", "26"],
        correctAnswer: "26"
    },

    {
        question: "How many states are there in the US?",
        choices: ["40", "50", "45", "52"],
        correctAnswer: "50"
    },

    {
        question: "Lebron James plays which sport?",
        choices: ["Basketball", "Football", "Chess", "Soccer"],
        correctAnswer: "Basketball"
    },

    {
        question: "UNC is better than Duke?",
        choices: ["True", "False"],
        correctAnswer: "True"
    },

    {
        question: "10 x 4 + 10 / 2 = ? ",
        choices: ["40", "50", "45", "52"],
        correctAnswer: "45"
    }
];


let counter = 30;
let currentQuestion = 0;
let score = 0;
let lost = 0;
let timer;

// function that passes the choices, goes through them, loops them 
function loadQuestion() {

    var question = quizQuestions[currentQuestion].question;
    var choices = quizQuestions[currentQuestion].choices;

    $("#time").html("Time Remaining: " + counter);
    $("#game").html(`
        <h4>${question}</h4>
        ${loadChoices(choices)}
        `);
}

function loadChoices(choices) {
    let result = "";

    for (let i = 0; i < choices.length; i++) {
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`; 
    }

    return result;
}

loadQuestion();
