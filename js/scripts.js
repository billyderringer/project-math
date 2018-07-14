let state = {
    stage: "operation",
    operation: "",
    difficulty: "",
    correct: "",
    num1: "",
    num2: "",
    testQuestions: []
}

const main = document.getElementById('container-main')

const operation = `
<div class="container-operation">
            <h1 class="logo">
                <span class="logo-project">Project</span> MATH
            </h1>
            <p id="choice-description">
                Please choose the operation that you would like to test on
            </p>
            <div id="container-operations">
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
                <a href="#"
                   onclick="setOperationState('all-operations')"
                   class="operation-all center-all grow">
                    <div>
                        <p><strong>Master Class</strong> (All Operations)</p>
                    </div>
                </a>
            </div>
        </div>
`

const difficulty = `
    <div class="container-difficulty">
            <div id="left-col"
                 class="center-all">
                <h1 class="logo">
                    <span class="logo-project">Project</span> MATH
                </h1>
                <p id="difficulty-description">
                    Now choose a<br/>difficulty level
                </p>
            </div>
            <div id="right-col"
                 class="center-all">
                <a class="difficulty-button"
                   onclick="setDifficultyState('beginner')"
                   href="#">
                    Beginner</a>
                <a class="difficulty-button"
                   onclick="setDifficultyState('intermediate')"
                   href="#">
                    Intermediate</a>
                <a class="difficulty-button"
                   onclick="setDifficultyState('advanced')"
                   href="#">
                    Advanced</a>
            </div>
        </div>
`

const runTest = `
    <div>
        test run test
    </div>
`

function runStageCheck(){
    if(state.stage === "operation"){
        main.innerHTML = operation
    }else if (state.stage === "difficulty"){
        main.innerHTML = difficulty
    }else if (state.stage === "run-test"){
        main.innerHTML = runTest
    }
}

function setOperationState (operation) {
    if(operation === '+'){
        state.operation = '+'
        sessionStorage.setItem('operation', '+')
    }else if(operation === '-'){
        state.operation = '-'
        sessionStorage.setItem('operation', '-')
    }else if(operation === '*'){
        state.operation = '*'
        sessionStorage.setItem('operation', '*')
    }else if(operation === '/'){
        state.operation = '/'
        sessionStorage.setItem('operation', '/')
    }else if(operation === 'all-operations'){
        state.operation = 'all-operations'
        sessionStorage.setItem('operation', 'all-operations')
    }
    state.stage = 'difficulty'
    runStageCheck()
}

function setDifficultyState (difficulty) {
    if(difficulty === 'beginner'){
        state.difficulty = 'beginner'
        sessionStorage.setItem('difficulty', 'beginner')
    }else if(difficulty === 'intermediate'){
        state.difficulty = 'intermediate'
        sessionStorage.setItem('difficulty', 'intermediate')
    }else if(difficulty === 'advanced'){
        state.difficulty = 'advanced'
        sessionStorage.setItem('difficulty', 'advanced')
    }
    state.stage = 'run-test'
    createTestArray()
    runStageCheck()
    console.log(state.testQuestions)
}

function getRandomNum(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

function createQuestion() {
    if(state.difficulty === 'beginner'){
        sessionStorage.setItem('num1', getRandomNum(1, 10))
        sessionStorage.setItem('num2', getRandomNum(1, 10))
    }else if(state.difficulty === 'intermediate'){
        sessionStorage.setItem('num1', getRandomNum(10, 100))
        sessionStorage.setItem('num2', getRandomNum(1, 10))
    }else if(state.difficulty === 'advanced'){
        sessionStorage.setItem('num1', getRandomNum(10, 100))
        sessionStorage.setItem('num2', getRandomNum(10, 100))
    }
}

function createTestArray() {
   for(let i=0;i<10;i++){
       createQuestion()
    state.testQuestions.push([sessionStorage.getItem('num1'),sessionStorage.getItem('num2')])
   }
}

runStageCheck()

