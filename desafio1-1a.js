// 1o Desafio do curso Launchbase
// *** Calculo do IMC de uma pessoa

const nome = "Marcus"
const peso = 125
const altura = 1.81

const imc = peso / (altura*altura)

if (imc>=30){
    console.log(`${nome} o seu imc é ${imc}. Voce está gordaço!`)
} else {
    console.log(`${nome} o seu imc é ${imc}. Voce está em forma!`)
}


