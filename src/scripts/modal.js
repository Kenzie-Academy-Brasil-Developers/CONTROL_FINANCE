/* Desenvolva sua lógica aqui */
const modal = document.querySelector('dialog')
const textArea = document.querySelector('.dialog__input')

const headerButton = document.querySelector('.header__button')



const closeModalButton = document.querySelector('.dialog__div--button')
closeModalButton.addEventListener('click', () => {
    modal.close()
})
const buttonSend = document.querySelector('.dialog__div4__button2')


const entryButton = document.querySelector('.dialog__input__type--transantion')

let type = 0


buttonSend.addEventListener('click', () => {
    let inputValue = textArea.value
    let valuefomatado = parseInt(inputValue)

    
    if (typeEntrada.checked) {
        type = 0
    } else if (typeSaida.checked) {
        type = 1

    }
    
    newValue(valuefomatado, type)
    listValues.innerText = ''
     render(insertedValues)
    currentSum.innerText = somar(insertedValues)
    
    
    modal.close()

})
const inputModal = document.querySelector('#input__modal')


function newValue(valor1, tipo) {

    const objet = {
        id: contId + 1,
        value: valor1,
        categoryID: tipo
    }
    
    
   
    insertedValues.push(objet)
    
}

const typeEntrada = document.querySelector('#entrada')
const typeSaida = document.querySelector('#saida')


headerButton.addEventListener('click', () => {
    modal.showModal()
})

const buttonCancel = document.querySelector('.dialog__div4__button1')

buttonCancel.addEventListener('click', ()=>{
    modal.close()
    
})