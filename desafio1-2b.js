
const programador = {
    nome : "Marcus Moreira",
    idade : "38",
    tecnologias : [

        { nome : 'C++', especialidade : 'Desktop' },
        { nome : 'Python', especialidade : 'Data Science' },
        { nome : 'JavaScript', especialidade : 'Web/Mobile' }

    ]

}

// console.log
// (
//    `O usuário ${programador.nome} tem ${programador.idade} e usa as tecnologias` 
    for (tecnologia of programador.tecnologias) {
        console.log(`${tecnologia.nome}, `)
    }
//)