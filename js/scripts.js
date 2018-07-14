let state = {
    stage: "difficulty",
    operation: "",
    difficulty: ""
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
                   class="operation center-all grow">
                    <div>
                        <i class="fas fa-plus"></i>
                    </div>
                </a>
                <a href="#"
                   class="operation center-all grow">
                    <div>
                        <i class="fas fa-minus"></i>
                    </div>
                </a>
                <a href="#"
                   class="operation center-all grow">
                    <div>
                        <i class="fas fa-times"></i>
                    </div>
                </a>
                <a href="#"
                   class="operation center-all grow">
                    <div>
                        <i class="fas fa-divide"></i>
                    </div>
                </a>
                <a href="#"
                   class="operation-all center-all grow">
                    <div>
                        <p><strong>Master Class</strong> (All Operations)</p>
                    </div>
                </a>
            </div>
        </div>
`

const difficulty = ``


if(state.stage === "operation"){
    main.innerHTML = operation
}else if (state.stage === "difficulty"){
    main.innerHTML = difficulty
}



