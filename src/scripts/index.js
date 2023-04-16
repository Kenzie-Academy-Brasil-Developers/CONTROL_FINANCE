

const body = document.querySelector('body')
const main = document.querySelector('main')
let dollar = 'R$ '
let soma = 0
let result = dollar + soma
let contId = insertedValues.length

let aba = 'all'
let valid = insertedValues.length   
let renderww = ''

const sectionValue = document.createElement('section')
sectionValue.className = 'section__transantion'

const containerOne = document.createElement('div')
containerOne.className = 'section-transation__container--one'


const spanContainerOne = document.createElement('span')
spanContainerOne.className = 'section-transation__containerOne__span'
spanContainerOne.innerText = 'Resumo financeiro'


const divButtons = document.createElement('div')
divButtons.className = 'section-transation__containerOne__div'

const buttonOne = document.createElement('button')
buttonOne.className = 'section-transation__containerOne__div--buttons'
buttonOne.innerText = 'Todos'

const buttonTwo = document.createElement('button')
buttonTwo.className = 'section-transation__containerOne__div--buttons'
buttonTwo.innerText = 'Entradas'

const buttonTree = document.createElement('button')
buttonTree.className = 'section-transation__containerOne__div--buttons'
buttonTree.innerText = 'Saidas'


const containerTwo = document.createElement('div')
containerTwo.className = 'section-transation__container-two'

const currentSum = document.createElement('span')
currentSum.className = 'section-transation__container-two__div-sum__curret-sum'
currentSum.innerText = somar(insertedValues)

const divSum = document.createElement('div')
divSum.className = 'section-transation__container-two__div-sum'

const textSum = document.createElement('h3')
textSum.className = 'section-transation__container-two__div-sum__title'
textSum.innerText = 'Soma dos valores'





const listValues = document.createElement('ul')
listValues.className = 'section-transation__container-two__list-value'
body.appendChild(main)
main.appendChild(sectionValue)
sectionValue.appendChild(containerOne)

containerOne.appendChild(spanContainerOne)
containerOne.appendChild(divButtons)
divButtons.appendChild(buttonOne)
divButtons.appendChild(buttonTwo)
divButtons.appendChild(buttonTree)

sectionValue.appendChild(containerTwo)
containerTwo.appendChild(divSum)
divSum.appendChild(textSum)
divSum.appendChild(currentSum)
containerTwo.appendChild(listValues)

let renderizar = render(insertedValues)



function render(list) {
    for (let i = 0; i < list.length; i++) {
        const li = document.createElement('ul')

        const card = document.createElement('li')
        
        card.id = list[i].id

        const value = document.createElement('span')
        const dollar = 'R$ '
        let valuetransantion = list[i].value

        let valuecontaneado = dollar + valuetransantion
        value.innerText = valuecontaneado




        const typeTransantion = document.createElement('p')

        if (list[i].categoryID === 0) {
            typeTransantion.innerText = 'Entrada'
        } else {
            typeTransantion.innerText = 'Saida'
        }
        const boxDivCard = document.createElement('button')

        const buttonCard = document.createElement('img')
        buttonCard.src = './src/assets/trash.svg'

        li.appendChild(card)
        card.appendChild(value)
        card.appendChild(typeTransantion)
        card.appendChild(boxDivCard)
        boxDivCard.appendChild(buttonCard)


        card.className = 'section--transation__container-two__div-card'
        value.className = 'section--transation__container-two__div-card__value'
        buttonCard.className = 'section--transation__container-two__div-card__button'
        boxDivCard.className = 'section--transation__container-two__div-card__boxButton'
        typeTransantion.className = 'section--transation__container-two__div-card__type'
        
        

        buttonCard.addEventListener('click', () => {
            let currentCardClicked = targerbutton(card)
            let indice = searchIndice(currentCardClicked.id, insertedValues)
            insertedValues.splice(indice, 1)

            
            
             valid = insertedValues.length
            
            if (currentCardClicked.categoryID == 0) {
                let indiceEntry = searchIndice(currentCardClicked.id, entradas)
                entradas.splice(indiceEntry, 1)
                

            } else if (currentCardClicked.categoryID == 1) {
                let indiceExit = searchIndice(currentCardClicked.id, saidas)
                saidas.splice(indiceExit, 1)
            }

            if (aba == 'all') {
                listValues.innerText = ''

                renderizar = render(insertedValues)
            } else if (aba == 'entradas') {
                listValues.innerText = ''
                renderizar = render(entradas)
            } else {
                listValues.innerText = ''
                renderizar = render(saidas)
            }
            soma = soma - currentCardClicked.value
            result = dollar + soma
            currentSum.innerText = result

            if (valid == 0){
                
                renderww = renderMensage()
           } else {
                renderww = ''
           }
        })

        listValues.appendChild(card)

    }

}
let entradas = insertedValues.filter(batata => insertedValues.categoryID == 0)

let saidas = insertedValues.filter(batata => insertedValues.categoryID == 1)

function separeteTransationsforID(list) {

    for (let i = 0; i < list.length; i++) {

        if (list[i].categoryID == 0) {



            entradas.push(list[i])
        } else if (list[i].categoryID == 1) {
            saidas.push(list[i])

        } else {
            lixeira.push(list[i])
        }
    }
}
separeteTransationsforID(insertedValues)

buttonOne.addEventListener('click', () => {
    listValues.innerText = ''
    soma = 0
    aba= 'all'
    renderizar = render(insertedValues)

    currentSum.innerText = ''
    currentSum.innerText = somar(insertedValues)
    if (valid == 0){
                
        renderww = renderMensage()
   } else {
        renderww = ''
   }


})
buttonTwo.addEventListener('click', () => {
    listValues.innerText = ''
    soma = 0
    aba = 'entradas'
    renderizar = render(entradas)
    currentSum.innerText = ''
    currentSum.innerText = somar(entradas)
    if (entradas.length == 0){
                
        renderww = renderMensage()
   } else {
        renderww = ''
   }
})
buttonTree.addEventListener('click', () => {
    listValues.innerText = ''
    aba = 'saidas'
    soma = 0

    renderizar = render(saidas)

    currentSum.innerText = ''
    currentSum.innerText = somar(saidas)
    if (saidas.length == 0){
                
        renderww = renderMensage()
   } else {
        renderww = ''
   }
})



function somar(list) {
    soma = 0
    for (let i = 0; i < list.length; i++) {

        soma += list[i].value

    }
    let result = dollar + soma.toFixed(2)
    return result
}

function targerbutton(objeto) {
    for (let i = 0; i < insertedValues.length; i++) {
        if (objeto.id == insertedValues[i].id) {

            return insertedValues[i]
        }
    }
}

function searchIndice(id, list) {
    for (let i = 0; i < list.length; i++) {
        if (id == list[i].id) {

            return i



        }
    }
}
function renderMensage(){
const spanNewValue = document.createElement('div')

const h4 = document.createElement('h4')
h4.innerText = 'Nenhum valor Cadastrado'

const btt = document.createElement('button')
btt.innerText = 'Registrar novo valor'


btt.addEventListener('click', ()=>{
    modal.showModal()
})


listValues.appendChild(spanNewValue)

spanNewValue.appendChild(h4)
spanNewValue.appendChild(btt)

spanNewValue.className = 'spanListValuesVazia'
h4.className = 'spanlist__h4'
btt.className = 'spanlist__btt'
}

