
const body = document.querySelector('body')
const main = document.querySelector('main')
let dollar = 'R$ '
let soma = 0
let result = dollar + soma
let contId = insertedValues.length


let valid = insertedValues.length   
let renderww = ''

const sectionValue = document.createElement('section')
sectionValue.className = 'section__transantion'

const containerOne = document.createElement('div')
containerOne.className = 'section-transation__container--one'


const spanContainerOne = document.createElement('span')
spanContainerOne.className = 'section-transation__containerOne__span'
spanContainerOne.innerText = 'Resumo financeiro'
const teste = document.createElement('div')
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
containerOne.appendChild(teste)
teste.appendChild(divButtons)
divButtons.appendChild(buttonOne)
divButtons.appendChild(buttonTwo)
divButtons.appendChild(buttonTree)

sectionValue.appendChild(containerTwo)
containerTwo.appendChild(divSum)
divSum.appendChild(textSum)
divSum.appendChild(currentSum)
containerTwo.appendChild(listValues)

render(insertedValues)



function render(list) {
    list.forEach(element => {
        
        const li = document.createElement('ul')
        
        const card = document.createElement('li')
        
        card.id = element.id
        
        const value = document.createElement('span')
        const dollar = 'R$ '
        let valuetransantion = element.value
        
        let valuecontaneado = dollar + valuetransantion
        value.innerText = valuecontaneado
        
        
        
        
        const typeTransantion = document.createElement('p')
        
        if (element.categoryID === 0) {
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
            
           
            
            let indice = searchIndice(element.id , insertedValues)
            
            insertedValues.splice(indice, 1)
            
            card.remove()
           
            if (list.length == 0){
                renderww = renderMensage()
            }
            
                soma = soma - element.value
                result =  dollar + soma
                currentSum.innerText = result
        })
        
        listValues.appendChild(card)
        
    });
    }
    

buttonOne.addEventListener('click', () => {
    listValues.innerText=  ''
    currentSum.innerText = ''
    currentSum.innerText = somar(insertedValues)

    if (insertedValues.length == 0){
        renderww = renderMensage()
    } else {
        renderww = ''
    }
    render(insertedValues)

})
buttonTwo.addEventListener('click', () => {
    let entradas = insertedValues.filter(entrada => entrada.categoryID == 0)
    listValues.innerText = ''
    currentSum.innerText = somar(entradas)
    
    if (entradas.length == 0){
        renderww = renderMensage()
    } else {
        renderww = ''
    }
    render(entradas)

})
buttonTree.addEventListener('click', () => {
    let saidas = insertedValues.filter(saida => saida.categoryID == 1)
    listValues.innerText= ''
    currentSum.innerText =  somar(saidas)

    if (saidas.length == 0){
        renderww = renderMensage()
    } else {
        renderww = ''
    }
    render(saidas)
})



function somar(list) {
    soma = 0
    list.forEach(element => {
       
    
            soma += element.value
    
        
    });
    let result = dollar + soma.toFixed(2)
    return result
}



function targerbutton(objeto) {
    insertedValues.forEach(element => {
        if (objeto.id == element.id){
                    
             
            return element
        }
       
    });
    
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

