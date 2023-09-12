const Questions = [{
    q: "Who is the first Sasanian Shahanshah?",
    a: [{ text: "Shapur", isCorrect: false },
    { text: "Hormizd", isCorrect: false },
    { text: "Ardashir", isCorrect: true },
    { text: "Khashayarsha", isCorrect: false }
    ]

},
{
    q: "what is the meaning of Asuristan?",
    a: [{ text: "its a city", isCorrect: false, isSelected: false },
    { text: "Assyria", isCorrect: false },
    { text: "capital of Assyria", isCorrect: false },
    { text: "Heart(Capital)", isCorrect: true }
    ]

},
{
    q: "question3",
    a: [{ text: "answer3.1", isCorrect: false },
    { text: "answer3.2", isCorrect: false },
    { text: "answer3.3t", isCorrect: true },
    { text: "answer3.4", isCorrect: false }
    ]

},
{
    q: "question4",
    a: [{ text: "answer4.1", isCorrect: false },
    { text: "answer4.2", isCorrect: false },
    { text: "answer4.3t", isCorrect: true },
    { text: "answer4.4", isCorrect: false }
    ]

}, {
    q: "question5",
    a: [{ text: "answer5.1t", isCorrect: true },
    { text: "answer5.2", isCorrect: false },
    { text: "answer5.3", isCorrect: false },
    { text: "answer5.4", isCorrect: false }
    ]

}, {
    q: "question6",
    a: [{ text: "answer6.1", isCorrect: false },
    { text: "answer6.2", isCorrect: false },
    { text: "answer6.3", isCorrect: false },
    { text: "answer6.4t", isCorrect: true }
    ]

}, {
    q: "question7",
    a: [{ text: "answer7.1", isCorrect: false },
    { text: "answer7.2", isCorrect: false },
    { text: "answer7.3", isCorrect: false },
    { text: "answer7.4t", isCorrect: true }
    ]

}, {
    q: "question8",
    a: [{ text: "answer8.1", isCorrect: false },
    { text: "answer8.2", isCorrect: false },
    { text: "answer8.3", isCorrect: false },
    { text: "answer8.4t", isCorrect: true }
    ]

}, {
    q: "question9",
    a: [{ text: "answer9.1", isCorrect: false },
    { text: "answer9.2", isCorrect: false },
    { text: "answer9.3", isCorrect: false },
    { text: "answer9.4t", isCorrect: true }
    ]

}, {
    q: "question9",
    a: [{ text: "answer9.1", isCorrect: false },
    { text: "answer9.2", isCorrect: false },
    { text: "answer9.3", isCorrect: false },
    { text: "answer9.4t", isCorrect: true }
    ]

}

];

let currQuestion = 0
let score = 0
let countAnswer = 0


const buttonsContainer = document.getElementById('buttons');

Questions.forEach((question, index) => { //creating buttons
    const node = document.createElement("button");
    node.addEventListener("click", () => loadNextQuestion(index));
    node.id = `q${index}`;
    const questionNr = document.createTextNode(`Question ${index + 1}`);
    node.appendChild(questionNr);
    buttonsContainer.appendChild(node);
    if (index !== 0) {
        node.disabled = true;
      }
});


function loadNextQuestion(index) {
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");
    currQuestion = index;
    question.textContent = Questions[index].q;
    opt.innerHTML = "" /* to delete what was written */
    document.getElementById("questionNumber").textContent = `Question ${countAnswer + 1} of ${Questions.length}`;

    for (let i = 0; i < Questions[index].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
        choice.id = i;

        choiceLabel.textContent = Questions[index].a[i].text;
        choiceLabel.htmlFor = i;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}


function loadScore() {
    let win = document.getElementById("win")
    win.textContent = "YOU WON!"
}


let nextBtn = document.getElementById(`q${countAnswer + 1}`); /* to disable the button and enable next one */
let prevBtn = document.getElementById(`q${countAnswer}`);

function switchBtnCase() {
    nextBtn.disabled = false;
    prevBtn.disabled = true;
}

function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        document.getElementById(`q${currQuestion}`).style.backgroundColor = "#00e5ff";
        countAnswer++
        switchBtnCase();

        nextBtn = document.getElementById(`q${countAnswer + 1}`);
        prevBtn = document.getElementById(`q${countAnswer}`);
        if (countAnswer === Questions.length) {
            loadScore();
        }
    } else {
        alert('Wrong answer')
    }
}


function relPage() {
    location.reload();
}