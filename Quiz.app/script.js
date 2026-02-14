document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");

    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choiceList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");

   const quizData = [
    {
        question: "Which HTML tag is used to define an unordered list?",
        options: [
            "<ul>",
            "<ol>",
            "<li>",
            "<list>"
        ],
        answer: "<ul>"
    },
    {
        question: "Which attribute is used to provide a unique identifier to an HTML element?",
        options: [
            "class",
            "id",
            "name",
            "key"
        ],
        answer: "id"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: [
            "font-color",
            "text-color",
            "color",
            "font-style"
        ],
        answer: "color"
    },
    {
        question: "How do you write a comment in JavaScript?",
        options: [
            "<!-- Comment -->",
            "// Comment",
            "/* Comment */",
            "Both B and C"
        ],
        answer: "Both B and C"
    },
    {
        question: "Which HTML tag is used to include JavaScript code?",
        options: [
            "<js>",
            "<javascript>",
            "<script>",
            "<code>"
        ],
        answer: "<script>"
    },
    {
        question: "Which CSS property is used to make the background color transparent?",
        options: [
            "opacity",
            "background-color: transparent;",
            "visibility: hidden;",
            "Both A and B"
        ],
        answer: "Both A and B"
    },
    {
        question: "What will `console.log(2 + '2')` output in JavaScript?",
        options: [
            "4",
            "22",
            "NaN",
            "Error"
        ],
        answer: "22"
    },
    {
        question: "Which HTML tag is used for inserting a line break?",
        options: [
            "<break>",
            "<br>",
            "<lb>",
            "<hr>"
        ],
        answer: "<br>"
    },
    {
        question: "Which CSS property controls the space between lines of text?",
        options: [
            "line-height",
            "letter-spacing",
            "text-spacing",
            "spacing"
        ],
        answer: "line-height"
    },
    {
        question: "Which JavaScript method is used to select an element by its ID?",
        options: [
            "getElementById()",
            "querySelector()",
            "getElementsByClassName()",
            "getElementsByTagName()"
        ],
        answer: "getElementById()"
    }
];

    let currQuesIndex = 0;
    let score = 0;

    startBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        startBtn.classList.add('hidden');
        resultContainer.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        showQuestion();
    }

    function showQuestion() {
        nextBtn.classList.add('hidden');
        const currentQ = quizData[currQuesIndex];
        questionText.innerHTML = currentQ.question;

        choiceList.innerHTML = ""; // Clear previous choices
        currentQ.options.forEach(option => {
            const li = document.createElement("li");
            li.textContent = option;
            li.classList.add("choice");
            li.addEventListener("click", () => selectAnswer(option));
            choiceList.appendChild(li);
        });
    }

    function selectAnswer(selected) {
        const currentQ = quizData[currQuesIndex];
        if (selected === currentQ.answer) {
            score++;
        }
        currQuesIndex++;
        if (currQuesIndex < quizData.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        questionContainer.classList.add('hi dden');
        resultContainer.classList.remove('hidden');
        scoreDisplay.textContent = score + " / " + quizData.length;
    }

    restartBtn.addEventListener('click', () => {
        currQuesIndex = 0;
        score = 0;
        startBtn.classList.remove('hidden');
        resultContainer.classList.add('hidden');
    });

});
