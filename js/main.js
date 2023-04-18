// Структура для хранения ответов и вопросов 1 теста
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
    },
    {
        question: 'Что такое инлайновые стили?',
        answers: [
            {
                id: '1',
                value: 'стили прямо в css',
                correct: false,
            },
            {
                id: '2',
                value: 'стили у которых прописано свойство inline',
                correct: false,
            },
            {
                id: '3',
                value: 'стили прямо в html',
                correct: true,
            },
            {
                id: '4',
                value: 'таких стилей не существует',
                correct: false,
            },
        ]
    },
    {
        question: 'При изменении каких свойств браузер затратит больше всего ресурсов?',
        answers: [
            {
                id: '1',
                value: 'border-radius',
                correct: false,
            },
            {
                id: '2',
                value: 'width',
                correct: false,
            },
            {
                id: '3',
                value: 'height',
                correct: false,
            },
            {
                id: '4',
                value: 'left/top/right/bottom',
                correct: true,
            },
        ]
    },
    {
        question: 'CSS ',
        answers: [
            {
                id: '1',
                value: 'Common Style Sheets',
                correct: false,
            },
            {
                id: '2',
                value: 'Central Style Sheets',
                correct: false,
            },
            {
                id: '3',
                value: 'Control Style Sheets',
                correct: false,
            },
            {
                id: '4',
                value: 'Cascading Style Sheets',
                correct: true,
            },
        ]
    }
]
// Структура для хранения ответов и вопросов 2 теста
const DATA_2 = [
    {
        question: 'Какие единицы измерения могут использоваться для атрибута ширины?',
        answers: [
            {
                id: '1',
                value: 'Пиксели и %',
                correct: true,
            },
            {
                id: '2',
                value: 'Миллиметры и сантиметры',
                correct: false,
            },
            {
                id: '3',
                value: 'Только пиксели',
                correct: false,
            },
            {
                id: '4',
                value: 'Пиксели и миллиметры',
                correct: false,
            },
        ]
    },
    {
        question: 'Расшифруйте аббревиатуру HTML',
        answers: [
            {
                id: '1',
                value: 'HeadText Modulation Language',
                correct: false,
            },
            {
                id: '2',
                value: 'HyperText Markup Language',
                correct: true,
            },
            {
                id: '3',
                value: 'HeadingText Mode Language',
                correct: false,
            },
            {
                id: '4',
                value: 'HeadText Markup Language',
                correct: false,
            },
        ]
    },
    {
        question: 'Какое значение атрибута type указывается для поля-галочки в форме?',
        answers: [
            {
                id: '1',
                value: 'radio',
                correct: false,
            },
            {
                id: '2',
                value: 'checkbox',
                correct: true,
            },
            {
                id: '3',
                value: 'name',
                correct: false,
            },
            {
                id: '4',
                value: 'id',
                correct: false,
            },
        ]
    }
]
// Структура для хранения ответов и вопросов 3 теста
const DATA_3 = [
    {
        question: 'В чем отличие между локальной и глобальной переменной?',
        answers: [
            {
                id: '1',
                value: 'глобальные видны повсюду, локальные только в функциях',
                correct: true,
            },
            {
                id: '2',
                value: 'локальные можно переопределять, глобальные нельзя',
                correct: false,
            },
            {
                id: '3',
                value: 'глобальные можно переопределять, локальные нельзя',
                correct: false,
            },
            {
                id: '4',
                value: 'отличий нет',
                correct: false,
            },
        ]
    },
    {
        question: 'JSON - это...',
        answers: [
            {
                id: '1',
                value: 'JavaScript Over Network',
                correct: false,
            },
            {
                id: '2',
                value: 'JavaScript Object Notation',
                correct: true,
            },
            {
                id: '3',
                value: 'JavaScript Object Network',
                correct: false,
            },
            {
                id: '4',
                value: 'ничего из этого',
                correct: false,
            },
        ]
    },
    {
        question: 'Что такое замыкание в JavaScript?',
        answers: [
            {
                id: '1',
                value: 'способность функции вызывать саму себя',
                correct: false,
            },
            {
                id: '2',
                value: 'способность функции запоминать все переменные',
                correct: false,
            },
            {
                id: '3',
                value: 'способность функции запоминать область видимости, в которой эта функция была объявлена',
                correct: true,
            },
            {
                id: '4',
                value: 'способность функции запоминать некоторые переменные',
                correct: false,
            },
        ]
    },
    {
        question: 'Что такое DOM?',
        answers: [
            {
                id: '1',
                value: 'Digital Optical Modulation',
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
    }
]
// Структура для хранения тестов
const DATAll= [DATA, DATA_2, DATA_3]


// Переменная для хранения результата
let result = {
}

// Объявление переменных
const content = document.querySelectorAll('.quiz__content')
const quiz = document.querySelectorAll('.quiz__test')

//
const questions = document.querySelectorAll('.questions')
const indicator = document.querySelectorAll('.quiz__indicator')
const results = document.querySelectorAll('.result')

const btnNext = document.querySelectorAll('.quiz__btn-next')
const btnRestart = document.querySelectorAll('.quiz__btn-restart')
const btnExit = document.querySelectorAll('.quiz__btn-exit')
const btnCross = document.querySelectorAll('.quiz__cross')

const buttonsSelection  = document.querySelectorAll('.quiz__btn')


console.log(17/3)

//Выбор необходимого теста
buttonsSelection.forEach(function(buttonSelection, buttonSelectionIndex){
    buttonSelection.addEventListener('click', e => {
        const currentbuttonSelection = buttonSelection
        const currentSelectionIndex = buttonSelectionIndex

        buttonsSelection.forEach((buttonSelection, buttonSelectionIndex)=>{
            buttonSelection.classList.add('hidden')
        })
        document.querySelector('#title').classList.add('hidden')


        const choiceOfTest = document.querySelectorAll('.quiz__test')
        choiceOfTest[currentSelectionIndex].addEventListener('click', ()=>{
            choiceOfTest[currentSelectionIndex].firstElementChild.classList.remove('hidden')
        })
        questions[currentSelectionIndex].classList.remove('hidden') 
        indicator[currentSelectionIndex].classList.remove('hidden') 
        btnNext[currentSelectionIndex].classList.remove('hidden')

        document.querySelectorAll('.quiz__test').forEach((item) =>{
            item.classList.add('hidden')
        })
        buttonSelection.parentElement.classList.remove('hidden')
        document.body.classList.add('purple')
        renderTest(currentSelectionIndex)
        
    })
    

})

// Генерация теста
function renderTest(selectionIndex){

    // Присваиваем тест
    const DATA = DATAll[selectionIndex]
    
    // Генерация вопросов
    const renderQuestions = (index) => {
        renderIndicator(index + 1)
        questions[selectionIndex].dataset.currentIndex = index
        
        // Генерация ответов
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

        // Отображение ответов
        questions[selectionIndex].innerHTML = `
            <div class="questions__item">
            <div class="questions__item-question">${DATA[index].question}</div>
            <ul class="questions__item-answers">
                ${renderAnswers()}
            </ul>
        </div>`
    }
    
    // Генерация результатов
    const renderResults = (count) => {
        let content = `<div class="result__item-count">Результат: ${count}</div>`
        

        // Проверка корректности ответов
        const getClassname = (answer, questionIndex) =>{
            let classname = ''
            if(!answer.correct && answer.id === result[questionIndex]){
                classname = 'answer--invalid'
            }else if(answer.correct){
                classname = 'answer--valid'
            }
            return classname
        }



        // Функция для подставления ответов
        const getAnswers = (questionIndex) => DATA[questionIndex].answers.map((answer) => 
        `<li class="${getClassname(answer, questionIndex)}">${answer.value}</li>`)
        .join('')

        // Запись ответов переменную
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

        // Отображение результатов
        results[selectionIndex].innerHTML = content
    }

    // Генерация индикатора
    const renderIndicator = (currentIndex) => {
        indicator[selectionIndex].innerHTML = `${currentIndex}/${DATA.length}`
    }
    // Получение значения инпута
    quiz[selectionIndex].addEventListener('change', e =>{
        if (e.target.classList.contains('quiz__answer-input')){
            console.log(e.target)
            console.log('\n')
            result[e.target.name] = e.target.value
            btnNext[selectionIndex].disabled = false

            
        }
    })


    // Обработка клика 
    quiz[selectionIndex].addEventListener('click', e => {
        

        // Кнопка далее
        if (e.target.classList.contains('quiz__btn-next')){
            const nextQuistionIndex = +questions[selectionIndex].dataset.currentIndex + 1
            
            if(DATA.length === nextQuistionIndex ){
                questions[selectionIndex].classList.add('hidden') 
                indicator[selectionIndex].classList.add('hidden') 
                results[selectionIndex].classList.remove('hidden')
                btnNext[selectionIndex].classList.add('hidden')
                btnRestart[selectionIndex].classList.remove('hidden')
                btnExit[selectionIndex].classList.remove('hidden')
                btnCross[selectionIndex].classList.add('hidden')
                

                let count = 0
                for (let i = 0; i < Object.keys(result).length; i++){
                    for (let j = 0; j < DATA[i].answers.length; j++){
                        if (result[i] == DATA[i].answers[j].id && DATA[i].answers[j].correct){
                            count++
                        }
                    }
                }
                count = ((count/DATA.length).toFixed(4) * 100) + '%'
                
                console.log(count)
                renderResults(count)
 
            }else{
                renderQuestions(nextQuistionIndex)
            }
            btnNext[selectionIndex].disabled = true
        }

        // Кнопка Заново
        if (e.target.classList.contains('quiz__btn-restart')){
            results[selectionIndex].innerHTML = ''
            result = {}
            questions[selectionIndex].classList.remove('hidden') 
            indicator[selectionIndex].classList.remove('hidden') 
            results[selectionIndex].classList.add('hidden')
            btnNext[selectionIndex].classList.remove('hidden')
            btnRestart[selectionIndex].classList.add('hidden')
            btnExit[selectionIndex].classList.add('hidden')
            btnCross[selectionIndex].classList.remove('hidden')
            renderQuestions(0)
        }

        // Кнопка Вернуться к тестам
        if (e.target.classList.contains('quiz__btn-exit')){
            // results[selectionIndex].innerHTML = ''
            // result = {}
            // questions[selectionIndex].classList.remove('hidden') 
            // indicator[selectionIndex].classList.remove('hidden') 
            // results[selectionIndex].classList.add('hidden')
            // btnNext[selectionIndex].classList.remove('hidden')
            // btnRestart[selectionIndex].classList.add('hidden')
            // btnExit[selectionIndex].classList.add('hidden')
            // renderQuestions(0)

            // document.querySelector('#title').classList.remove('hidden')
            // document.querySelectorAll('.quiz__answer-input').forEach((answerInput) =>{
            //     answerInput.id = null
            //     answerInput.classList.remove('quiz__answer-input')
            // })
            // buttonsSelection.forEach((buttonSelection, buttonSelectionIndex)=>{
            //     buttonSelection.removeAttribute('data-active')
            //     buttonSelection.classList.remove('hidden')
            // })

            location.reload()
        }
        if (e.target.classList.contains('quiz__cross')){
            location.reload()
        }

    })
    
    renderQuestions(0)

}







const burgerBtn = document.querySelector('#burger-btn')
const navBody = document.querySelector('#nav')
burgerBtn.addEventListener('click', function(){
    burgerBtn.classList.toggle('header__menu-burger--active')
    navBody.classList.toggle('nav--active')
    document.body.classList.toggle('lock')

})
