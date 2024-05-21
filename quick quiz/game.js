let questions = [
    {
        question: 'Which HTML tag is used to define an inline style?',
        choice1: '<script>',
        choice2: '<css>',
        choice3: '<style>',
        choice4: '<span>',
        answer: 3,
    },
    {
        question: 'Which property is used to change the text color in CSS?',
        choice1: 'text-color',
        choice2: 'font-color',
        choice3: 'text-style',
        choice4: 'color',
        answer: 4,
    },
    {
        question: 'Which of the following is the correct way to comment in HTML?',
        choice1: '// Comment',
        choice2: '<!-- Comment -->',
        choice3: '/* Comment */',
        choice4: '<! Comment>',
        answer: 2,
    },
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const questionElement = document.getElementById('question');
    const choiceButtons = document.getElementsByClassName('choice');
    const questionNumberElement = document.getElementById('question-number');
    const scoreElement = document.getElementById('score');
    const progressBar = document.getElementById('progress-bar');

    if (currentQuestionIndex >= questions.length) {
        window.location.href = `end.html?score=${score}`;
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    choiceButtons[0].innerText = currentQuestion.choice1;
    choiceButtons[1].innerText = currentQuestion.choice2;
    choiceButtons[2].innerText = currentQuestion.choice3;
    choiceButtons[3].innerText = currentQuestion.choice4;

    questionNumberElement.innerText = currentQuestionIndex + 1;
    scoreElement.innerText = score;
    progressBar.style.width = ((currentQuestionIndex + 1) / questions.length) * 100 + '%';

}


function selectAnswer(choice) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = currentQuestion.answer === choice;
    const choiceButtons = document.getElementsByClassName('choice');
    
    if (isCorrect) {
        choiceButtons[choice - 1].style.backgroundColor = 'green';
        score = score + 10;
    } else {
        choiceButtons[choice - 1].style.backgroundColor = 'red';
    }

    setTimeout(() => {
        choiceButtons[choice - 1].style.backgroundColor = '#007BFF';
        currentQuestionIndex++;
        showQuestion();
    }, 1000);
}



document.addEventListener('DOMContentLoaded', showQuestion);
