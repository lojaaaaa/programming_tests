
// Структура для хранения ответов и вопросов
const DATA = [
    {
        question: 'Что такое CSS спрайты',
        answers: [
            {
                id: '1',
                value: 'файлы-изображения, которые включают в себя набор более мелких изображений для использования их на веб-странице',
                correct: true,
            },
            {
                id: '2',
                value: 'инструменты, которые помогают нам расширить базовую функциональность CSS с помощью определенного языка сценариев',
                correct: false,
            },
            {
                id: '3',
                value: 'определённые свойства блочных элементов',
                correct: false,
            },
            {
                id: '4',
                value: 'определённые свойства строчных элементов',
                correct: false,
            },
        ]
    },
    {
        question: 'Что такое DOM?',
        answers: [
            {
                id: '1',
                value: 'библиотека в JavaScript',
                correct: false,
            },
            {
                id: '2',
                value: 'программный интерфейс к HTML-документам',
                correct: true,
            },
            {
                id: '3',
                value: 'Document Oriented Model',
                correct: false,
            },
            {
                id: '4',
                value: 'ничего из приведенных ответов',
                correct: false,
            },
        ]
    },
    {
        question: 'Что такое CORS?',
        answers: [
            {
                id: '1',
                value: 'объект, который используются в JavaScript при выполнении асинхронных операций',
                correct: false,
            },
            {
                id: '2',
                value: 'браузерный механизм, который позволяет предоставлять страницам доступ к ресурсам, расположенным за пределами некоего домена.',
                correct: true,
            },
            {
                id: '3',
                value: 'запросы, которые приводят к замене целевого ресурса на данные пользователя',
                correct: false,
            },
            {
                id: '4',
                value: 'запросы, которые приводят к специфической для ресурса обработке данных',
                correct: false,
            },
        ]
    }
]

//
let result = {
}

// Объявление переменных
const content = document.querySelector('#content')
const quiz = document.querySelector('#quiz')
const questions = document.querySelector('#questions')
const indicator = document.querySelector('#indicator')
const results = document.querySelector('#results')
const btnNext = document.querySelector('#btn-next')
const btnRestart = document.querySelector('#btn-restart')
const btnExit = document.querySelector('#btn-exit')

// Генерация вопросов
const renderQuestions = (index) => {
    renderIndicator(index + 1)

    questions.dataset.currentIndex = index
    

    renderAnswers = () => DATA[index].answers.map((answer) => 
        `
            <li>
                <label for="q${answer.id}">
                    <input class="quiz__answer-input" type="radio" name=${index} value=${answer.id} id="q${answer.id}">
                    <span class="quiz__answer-custom"></span>
                    ${answer.value}
                </label>
            </li>
        `
    )
    .join('')

    questions.innerHTML = `
        <div class="questions__item">
        <div class="questions__item-question">${DATA[index].question}</div>
        <ul class="questions__item-answers">
            ${renderAnswers()}
        </ul>
    </div>
    `
}

const renderResults = () => {
    let content = ''

    const getClassname = (answer, questionIndex) =>{
        let classname = ''

        if(!answer.correct && answer.id === result[questionIndex]){
            classname = 'answer--invalid'
        }else if(answer.correct){
            classname = 'answer--valid'
        }

        return classname
    }

    const getAnswers = (questionIndex) => DATA[questionIndex].answers
    .map((answer) => `<li class="${getClassname(answer, questionIndex)}">${answer.value}</li>`)
    .join('')

    DATA.forEach(function(question, questionIndex){
        content += `
            <div class="result__item">
                <div class="result__item-question">${question.question}</div>
                <ul class="result__item-answers">
                    ${getAnswers (questionIndex)}
                </ul>
            </div>
        `
    })
    results.innerHTML = content
}

const renderIndicator = (currentIndex) => {
    indicator.innerHTML = `${currentIndex}/${DATA.length}`
}


quiz.addEventListener('change', e =>{
    if (e.target.classList.contains('quiz__answer-input')){
        console.log('input')
        result[e.target.name] = e.target.value
        btnNext.disabled = false
    }
})

// Обработка клика
quiz.addEventListener('click', e => {
    if (e.target.classList.contains('quiz__btn-next')){
        console.log('Далее')
        
        const nextQuistionIndex = +questions.dataset.currentIndex + 1
        
        if(DATA.length === nextQuistionIndex ){
            questions.classList.add('hidden') 
            indicator.classList.add('hidden') 
            results.classList.remove('hidden')
            btnNext.classList.add('hidden')
            btnRestart.classList.remove('hidden')
            btnExit.classList.remove('hidden')
            renderResults()
        }else{
            renderQuestions(nextQuistionIndex)
        }
        btnNext.disabled = true
    }

    if (e.target.classList.contains('quiz__btn-restart')){
        results.innerHTML = ''
        result = {}
        questions.classList.remove('hidden') 
        indicator.classList.remove('hidden') 
        results.classList.add('hidden')
        btnNext.classList.remove('hidden')
        btnRestart.classList.add('hidden')
        btnExit.classList.add('hidden')
        renderQuestions(0)
    }
    if (e.target.classList.contains('quiz__btn-exit')){
        results.innerHTML = ''
        result = {}
        questions.classList.remove('hidden') 
        indicator.classList.remove('hidden') 
        results.classList.add('hidden')
        btnNext.classList.remove('hidden')
        btnRestart.classList.add('hidden')
        btnExit.classList.add('hidden')
        choiceOfTest.firstElementChild.classList.add('hidden')
        choiceOfTest.lastElementChild.classList.remove('hidden')
        document.querySelector('#title').classList.remove('hidden')
        renderQuestions(0)
    }
})


renderQuestions(0)


const choiceOfTest = document.querySelector('.quiz__test')
choiceOfTest.addEventListener('click', ()=>{
    choiceOfTest.firstElementChild.classList.remove('hidden')
    choiceOfTest.lastElementChild.classList.add('hidden')
    document.querySelector('#title').classList.add('hidden')
})

