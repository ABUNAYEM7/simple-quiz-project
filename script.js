// const questions = [
//     {question : 'What is the largest animal in the world ?',
//         answers :[
//             {text : "Shark", correct : "false"},
//             {text : "Blue Wheal", correct : "true"},
//             {text : "Elephant", correct : "false"},
//             {text : "Giraffe", correct : "false"},
//         ]
//     },
//     {question : 'What is the smallest country in the world ?',
//         answers :[
//             {text : "Nepal", correct : "false"},
//             {text : "Vatican City", correct : "true"},
//             {text : "Bhutan", correct : "false"},
//             {text : "Bangladesh", correct : "false"},
//         ]
//     },
//     {question : 'What is the largest desert in the world ?',
//         answers :[
//             {text : "Kalahari", correct : "false"},
//             {text : "Gobi", correct : "false"},
//             {text : "Antarctica", correct : "true"},
//             {text : "Sahara", correct : "false"},
//         ]
//     },
//     {question : 'What is the smallest continent in the world ?',
//         answers :[
//             {text : "Australia", correct : "true"},
//             {text : "Asia", correct : "false"},
//             {text : "Arctic", correct : "false"},
//             {text : "Africa", correct : "false"},
//         ]
//     },
// ]

// const questionsElement = document.getElementById('question')
// const ansContainer = document.getElementById('ansContainer')
// const NextBtn = document.getElementById('NextBtn')

// let currentQIndex = 0;
// let score = 0;

// const startQuiz =()=>{
//     currentQIndex = 0;
//     score = 0;
//     NextBtn.innerHTML = 'Next'
//     showQuestion()
// }

// const showQuestion=()=>{
//     resetButtons()
//     let currentQuestion = questions[currentQIndex];
//     let questionNum = currentQIndex + 1;
//     questionsElement.innerHTML = questionNum +"."+currentQuestion.question;
//     currentQuestion.answers.forEach((Element)=>{
//         const button = document.createElement('button')
//         button.classList.add('btns')
//         button.innerHTML = Element.text;
//         ansContainer.append(button)
//         if(Element.correct){
//             button.dataset.correct =Element.correct
//         }
//         button.addEventListener('click',selectAnswer)
//     })
// }

// const resetButtons= ()=>{
//     NextBtn.classList.add('hidden')
//     while(ansContainer.firstChild){
//         ansContainer.removeChild(ansContainer.firstChild)
//     }
// }

// function selectAnswer(e){
//     const selectBtn = e.target;
//     const isCorrect =selectBtn.dataset.correct === 'true'
//     if(isCorrect){
//         selectBtn.classList.add('bg-green-600')
//         score++;
//     }else{
//         selectBtn.classList.add('bg-red-600')
//     }
//     Array.from(ansContainer.children).forEach((button)=>{
//         if(button.dataset.correct === 'true'){
//             button.classList.add('bg-green-500')
//         }
//         button.disabled = 'true'
//     })
//     NextBtn.classList.remove('hidden','cursor-no-drop')
    
// } 


// NextBtn.addEventListener('click',()=>{
//     if(currentQIndex < questions.length){
//         handleNextBtn()
//     }else(
//         startQuiz()
//     )
// })

// const handleNextBtn =()=>{
//     currentQIndex++
//     if(currentQIndex < questions.length){
//         showQuestion()
//     }else{
//         showScore()
//         questionsElement.innerHTML =`Your Score ${score} Out of ${questions.length}`
//         NextBtn.innerText = 'Play Again'
//         NextBtn.classList.remove('hidden')
//     }
// }

// const showScore=()=>{
//     resetButtons()
// }


// startQuiz()

// const questions = [
//     {question : 'What is the largest animal in the world ?',
//         answers :[
//             {text : "Shark", correct : "false"},
//             {text : "Blue Wheal", correct : "true"},
//             {text : "Elephant", correct : "false"},
//             {text : "Giraffe", correct : "false"},
//         ]
//     },
//     {question : 'What is the smallest country in the world ?',
//         answers :[
//             {text : "Nepal", correct : "false"},
//             {text : "Vatican City", correct : "true"},
//             {text : "Bhutan", correct : "false"},
//             {text : "Bangladesh", correct : "false"},
//         ]
//     },
//     {question : 'What is the largest desert in the world ?',
//         answers :[
//             {text : "Kalahari", correct : "false"},
//             {text : "Gobi", correct : "false"},
//             {text : "Antarctica", correct : "true"},
//             {text : "Sahara", correct : "false"},
//         ]
//     },
//     {question : 'What is the smallest continent in the world ?',
//         answers :[
//             {text : "Australia", correct : "true"},
//             {text : "Asia", correct : "false"},
//             {text : "Arctic", correct : "false"},
//             {text : "Africa", correct : "false"},
//         ]
//     },
// ]


// const questionElement = document.getElementById('question')
// const ansContainer = document.getElementById('ansContainer')
// const NextBtn = document.getElementById('NextBtn')

// let currentQIndex = 0;
// let score = 0;

// const startQuiz=()=>{
//     currentQIndex = 0;
//     score = 0;
//     NextBtn.innerText ='Next'
//     showAnswer()
// }

// const showAnswer =()=>{
//     NextBtn.classList.add('hidden')
//     const currentQuestion = questions[currentQIndex]
//     const questionNum = currentQIndex + 1;
//     questionElement.innerHTML = `${questionNum} . ${currentQuestion.question}`
//     currentQuestion.answers.forEach((element)=>{
//         const button = document.createElement('button')
//         button.classList.add('btns')
//         button.innerHTML = `${element.text}`
//         button.dataset.correct = element.correct
//         button.addEventListener('click',buttonClickHandler)
//         ansContainer.append(button)
//     })
    
// }
// function buttonClickHandler(e){
//     const selectButton = e.target;
//     const isCorrect =selectButton.dataset.correct === 'true'
//     if(isCorrect){
//         selectButton.classList.add('bg-green-500')
//         score++;
//     }else{
//         selectButton.classList.add('bg-red-500')
//     }
//     Array.from(ansContainer.children).forEach((button)=>{
//         if(button.dataset.correct === 'true'){
//             button.classList.add('bg-green-500')
//         }
//     })
//     NextBtn.classList.remove('hidden')
// }

// NextBtn.addEventListener('click',()=>{
//     if(currentQIndex < questions.length){
//         nextButtonClickHandler()
//     }else{
//         startQuiz()
//     }
// })

// const nextButtonClickHandler =()=>{
//     currentQIndex++;
//     ansContainer.innerHTML = "";
//     if(currentQIndex < questions.length){
//         showAnswer()
//     }else{
//         showNextQ()
//         questionElement.innerHTML =`Your Score is ${score} Out of ${questions.length}`
//         NextBtn.innerHTML = 'Play Again'
//         NextBtn.classList.remove('hidden')
//     }
// }
// const showNextQ =()=>{
//     NextBtn.classList.add('hidden')
//     ansContainer.innerHTML = "";
// }

// startQuiz()


const questions = [
    {question : 'What is the largest animal in the world ?',
        answers :[
            {text : "Shark", correct : "false"},
            {text : "Blue Wheal", correct : "true"},
            {text : "Elephant", correct : "false"},
            {text : "Giraffe", correct : "false"},
        ]
    },
    {question : 'What is the smallest country in the world ?',
        answers :[
            {text : "Nepal", correct : "false"},
            {text : "Vatican City", correct : "true"},
            {text : "Bhutan", correct : "false"},
            {text : "Bangladesh", correct : "false"},
        ]
    },
    {question : 'What is the largest desert in the world ?',
        answers :[
            {text : "Kalahari", correct : "false"},
            {text : "Gobi", correct : "false"},
            {text : "Antarctica", correct : "true"},
            {text : "Sahara", correct : "false"},
        ]
    },
    {question : 'What is the smallest continent in the world ?',
        answers :[
            {text : "Australia", correct : "true"},
            {text : "Asia", correct : "false"},
            {text : "Arctic", correct : "false"},
            {text : "Africa", correct : "false"},
        ]
    },
]

const questionElement = document.getElementById('question')
const ansContainer = document.getElementById('ansContainer')
const NextBtn = document.getElementById('NextBtn')

let currentQIndex = 0;
let score = 0;

const startQuiz=()=>{
    currentQIndex = 0;
    score = 0;
    NextBtn.innerHTML = 'Next'
    showAnswer()
}

const showAnswer= ()=>{
    NextBtn.classList.add('hidden')
    const currentQuestion = questions[currentQIndex];
    const questionNum = currentQIndex + 1;
    questionElement.innerHTML = `${questionNum} . ${currentQuestion.question}`
    currentQuestion.answers.forEach(element => {
        const button = document.createElement('button')
        button.classList.add('btns')
        button.innerHTML = `${element.text}`
        button.dataset.correct = `${element.correct}`
        button.addEventListener('click',buttonsClickHandler)
        ansContainer.appendChild(button)
    });
}

const buttonsClickHandler =(e)=>{
    NextBtn.classList.remove('hidden')
    const currentButton = e.target;
    if(currentButton.dataset.correct ==='true'){
        currentButton.classList.add('bg-green-400')
        score++;
    }else{
        currentButton.classList.add('bg-red-400')
    }
    Array.from(ansContainer.children).forEach(button=>{
        if(button.dataset.correct === 'true'){
            button.classList.add('bg-green-400')
        }
    })
}

NextBtn.addEventListener('click',function (){
    if(currentQIndex < questions.length){
        nextButtonClickHandler()
    }else{
        startQuiz()
    }
})

const nextButtonClickHandler =()=>{
    currentQIndex++;
    NextBtn.classList.add('hidden')
    ansContainer.innerHTML="";
    if(currentQIndex < questions.length){
        showAnswer()
    }else{
        showNext()
        questionElement.innerHTML = `Your Score is ${score} out of ${questions.length}`
        NextBtn.innerHTML = 'Play Again'
        NextBtn.classList.remove('hidden')
    }
}
const showNext =()=>{
    NextBtn.classList.add('hidden')
    ansContainer.innerHTML = '';
}

startQuiz()