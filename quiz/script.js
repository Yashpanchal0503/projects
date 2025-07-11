

const questions = [
    {
        questions:"Which is largest animal in the world?",
        answers:[
            {text:"Shark", correct:false},
            {text:"Blue whale", correct:true},
            {text:"Elephant", correct:false},
            {text:"Giraffe", correct:false},
        ]
    },
    {
        questions:"Which is the largest continent in the world?",
        answers:[
            {text:"Asia", correct:true},
            {text:"Africa", correct:false},
            {text:"Europe", correct:false},
            {text:"Australia", correct:false},
        ]
    },
    {
        questions:"Which planet is known as the Red Planet?",
        answers:[
            {text:"Earth", correct:false},
            {text:"Jupiter", correct:false},
            {text:"Mars", correct:true},
            {text:"Venus", correct:false},
        ]
    },
    {
        questions:"Who invented the telephone?",
        answers:[
            {text:"Thomas Edison", correct:false},
            {text:"Nikola Tesla", correct:false},
            {text:"Isaac Newton", correct:false},
            {text:"Alexander Graham Bell", correct:true},
        ]
    },
    {
        questions:"Which is the longest river in the world?",
        answers:[
            {text:"Nile", correct:true},
            {text:"Amazon", correct:false},
            {text:"Yangtze", correct:false},
            {text:"Mississippi", correct:false},
        ]
    },
    {
        questions:"Which gas do plants absorb from the atmosphere?",
        answers:[
            {text:"Oxygen", correct:false},
            {text:"Nitrogen", correct:false},
            {text:"Carbon dioxide", correct:true},
            {text:"Helium", correct:false},
        ]
    },
    {
        questions:"Who wrote 'Romeo and Juliet'?",
        answers:[
            {text:"Charles Dickens", correct:false},
            {text:"William Shakespeare", correct:true},
            {text:"Jane Austen", correct:false},
            {text:"Mark Twain", correct:false},
        ]
    },
    {
        questions:"What is the capital city of Japan?",
        answers:[
            {text:"Beijing", correct:false},
            {text:"Seoul", correct:false},
            {text:"Bangkok", correct:false},
            {text:"Tokyo", correct:true},
        ]
    },
    {
        questions:"Which organ purifies our blood?",
        answers:[
            {text:"Heart", correct:false},
            {text:"Lungs", correct:false},
            {text:"Kidney", correct:true},
            {text:"Liver", correct:false},
        ]
    },
    {
        questions:"How many sides does a hexagon have?",
        answers:[
            {text:"Five", correct:false},
            {text:"Six", correct:true},
            {text:"Seven", correct:false},
            {text:"Eight", correct:false},
        ]
    }
];
const questionElement= document.getElementById("question");
const answerButton= document.getElementById("answer-buttons");
const nextBtn= document.getElementById("next-btn");
let currentIdx=0;
let score =0;

function startQuiz(){
    currentIdx=0;
    score=0;
    nextBtn.innerText="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion= questions[currentIdx];
    let quesNumber =currentIdx+1;
    questionElement.innerText=quesNumber+". "+currentQuestion.questions;

    currentQuestion.answers.forEach(answer=>{
        let button =document.createElement("button");
        button.innerText=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextBtn.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect = selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
    });
    nextBtn.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`Your Score is ${score} out of ${questions.length}`;
    nextBtn.style.display="block";
    nextBtn.innerHTML="Play again";
}
function handleNextQues(){
    currentIdx++;
    if(currentIdx<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextBtn.addEventListener("click",()=>{
    if(currentIdx<questions.length){
        handleNextQues();
    }
    else{
        startQuiz();
    }
})
startQuiz();