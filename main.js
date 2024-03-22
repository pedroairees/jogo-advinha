// variaveis
const screen1 = document.querySelector(".screen1")
const screen2 =  document.querySelector(".screen2")
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randonNuber = Math.round(Math.random() * 10)
let tentativas = 1


// eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', (event) => {
    if(event.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
    }
})


// Função callback
function handleTryClick(event){
    event.preventDefault() // Não faça o padrão desse evento
    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randonNuber){
        toggleScreen()

        if(tentativas === 1){
            screen2.querySelector('.screen2 h2').innerText = 'Parabéns, acertou de primeira!'
        } else{
            screen2.querySelector('.screen2 h2').innerText = `Acertou em ${tentativas} tentativas!`
        }
    }

    inputNumber.value = ""
    tentativas++
}

function handleResetClick(){
    toggleScreen()
    tentativas = 1
    randonNuber = Math.round(Math.random() * 10)
}

function toggleScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

/* Coisas para melhorar e implementar no codigo:
1 - extrair uma função para o evento de click reset pagina
2 - fazer algo para que so ao apertar o botton de tentar, não conte como tentativa
3 -  so aceitar numeros de 0 a 10
*/