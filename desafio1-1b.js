//Desafio 1-2
// Calculo de Aposentadoria

const nome = "Johny"
const sexo = "M"
const idade = 48
const contribuicao = 43

//homem ou mulher?
if(sexo == "M"){
    //tempo de contribuição
    if(contribuicao+idade>=95){
        console.log(`${nome}, parabéns, voce pode se aposentar!`)
    } else {
        console.log(`${nome}, infelizmente voce não pode se aposentar!`)
    }
} else {
    if(contribuicao+idade>=85){
        console.log(`${nome}, parabéns, voce pode se aposentar!`)
    } else {
        console.log(`${nome}, infelizmente voce não pode se aposentar!`)
    }
}

