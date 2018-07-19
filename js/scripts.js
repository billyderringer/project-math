let state = {
    stage: "operation",
    operation: "",
    difficulty: "",
    num1: "",
    num2: "",
    correct: "",
    count: 0,
    userAttempt: "",
    answer: ""
}

const main = document.getElementById('container-main')

const operation = `
<section class="container-operation">
            <h1 class="logo">
                <span class="logo-project">Project</span> MATH
            </h1>
            <p id="choice-description">
                Please choose the operation that you would like to test on
            </p>
            <section id="container-operations">
                <a href="#"
                   onclick="setOperationState('+')"
                   class="operation center-all grow">
                    <div>
                        <i class="fas fa-plus"></i>
                    </div>
                </a>
                <a href="#"
                   onclick="setOperationState('-')"
                   class="operation center-all grow">
                    <div>
                        <i class="fas fa-minus"></i>
                    </div>
                </a>
                <a href="#"
                   onclick="setOperationState('*')"
                   class="operation center-all grow">
                    <div>
                        <i class="fas fa-times"></i>
                    </div>
                </a>
                <a href="#"
                   onclick="setOperationState('/')"
                   class="operation center-all grow">
                    <div>
                        <i class="fas fa-divide"></i>
                    </div>
                </a>
            </section>
        </section>
`

const difficulty = `
    <section class="container-difficulty">
            <section id="left-col"
                 class="center-all">
                <h1 id="difficulty-logo"
                    class="logo">
                    <span class="logo-project">Project</span> MATH
                </h1>
                <p id="difficulty-description">
                    Now choose a<br/>difficulty level
                </p>
            </section>
            <section id="right-col"
                 class="center-all">
                <a class="difficulty-button grow"
                   onclick="setDifficultyState('beginner')"
                   href="#">
                    Beginner</a>
                <a class="difficulty-button grow"
                   onclick="setDifficultyState('intermediate')"
                   href="#">
                    Intermediate</a>
                <a class="difficulty-button grow"
                   onclick="setDifficultyState('advanced')"
                   href="#">
                    Advanced</a>
            </section>
        </section>
`

const runTest = `
    <section class="container-test-frame center-all">
        <h1 class="logo">
            <span class="logo-project">Project</span> MATH
        </h1>
        <section class="container-test center-all">
            <h2 id="test-title">
            <span id="difficulty-title" 
                  class="green-word"></span> 
                  level 
            <span id="operation-title" 
                  class="green-word"></span>
                  test
            </h2>
            
            <section id="test-numbers" 
                     class="center-all">
                <h2 id="test-num-one"></h2>
                <h2 id="test-operation"></h2>
                <h2 id="test-num-two"></h2>
            </section>       
            <form onsubmit="checkAnswer(event)">
                <label for="answer">Answer</label>
                <input id="answer" 
                       type="text" 
                       name="answer">
                <input class="test-button" 
                       type="submit" 
                       value="Check Answer">
                <input class="test-button" 
                       type="button" 
                       value="Next Question" 
                       onclick="runStageCheck()"> 
                <input class="test-button" 
                       type="button" 
                       value="Home" 
                       onclick="resetTest()"> 
            </form>                 
        </section>
    </section>
`

//determines HTML to render to dom via template string
function runStageCheck(){
    if(state.stage === "operation"){
        main.innerHTML = operation
    }else if (state.stage === "difficulty"){
        main.innerHTML = difficulty
    }else if (state.stage === "run-test"){
        main.innerHTML = runTest
        setTest()
    }else if (state.stage === "reset-question"){
        let testNum1 = document.getElementById('test-num-one')
        let testNum2 = document.getElementById('test-num-two')
        let testOperation = document.getElementById('test-operation')
        testNum1.innerText = state.num1
        testNum2.innerText = state.num2
        testOperation.innerText = state.operation
    }
}

//chooses operation then sets stage to difficulty
function setOperationState (operation) {
    state.operation = operation
    state.stage = 'difficulty'
    runStageCheck()
}

//chooses difficulty then sets stage to run-test
function setDifficultyState (difficulty) {
    state.difficulty = difficulty
    state.stage = 'run-test'
    runStageCheck()
}

function getTestContent() {
    //set title HTML
    const operationTitle = document.getElementById('operation-title')
    let operation = state.operation
    if(operation === '+'){
        operationTitle.innerText =  'ADDITION'
    }else if(operation === '-'){
        operationTitle.innerText =  'SUBTRACTION'
    }else if(operation === '*'){
        operationTitle.innerText =  'MULTIPLICATION'
    }else if(operation === '/'){
        operationTitle.innerText =  'DIVISION'
    }
    let difficultyTitle = document.getElementById('difficulty-title')
    difficultyTitle.innerText = state.difficulty.toUpperCase()

    //set question HTML
    let testNum1 = document.getElementById('test-num-one')
    let testNum2 = document.getElementById('test-num-two')
    let testOperation = document.getElementById('test-operation')
    testNum1.innerText = state.num1
    testNum2.innerText = state.num2
    testOperation.innerText = state.operation
}


//test page logic
function getRandomNum(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

function setRandomNum (){
    if(state.difficulty === 'beginner'){
        state.num1 = getRandomNum(1, 10)
        state.num2 = getRandomNum(1, 10)
        state.answer = eval(state.num1 + state.operation + state.num2)
    }else if(state.difficulty === 'intermediate'){
        state.num1 = getRandomNum(10, 100)
        state.num2 = getRandomNum(1, 10)
        state.answer = eval(state.num1 + state.operation + state.num2)
    }else if(state.difficulty === 'advanced'){
        state.num1 = getRandomNum(10, 100)
        state.num2 = getRandomNum(10, 100)
        state.answer = eval(state.num1 + state.operation + state.num2)
    }
}

function checkAnswer(event) {
    let userAnswer = parseInt(document.getElementById('answer').value)
    let answerField = document.getElementById('test-numbers')
    if (userAnswer === state.answer){
        answerField.innerHTML = `
            <h2 class="correct-answer">Correct!</h2>  
        `
        state.stage === 'reset-question'
    }else {
        answerField.innerHTML = `
            <h2 class="incorrect-answer">Incorrect</h2>  
        `
        state.stage === 'reset-question'
    }

    event.preventDefault()
}

function setTest() {
    setRandomNum()
    getTestContent()
}

//**********Need to add count logic here
function resetQuestion() {
    state.count++
    runStageCheck()
}

function resetTest() {
    state.stage = 'operation'
    runStageCheck()
}

runStageCheck()

