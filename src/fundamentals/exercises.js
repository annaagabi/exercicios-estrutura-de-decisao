// Explicação Ternário

function validaIdade(idade){
    return (
        idade>=18 ? console.log("Pode comprar") : console.log("Não pode comprar")
    )
}
// validaIdade(19)


const age = 16
const message = age >= 18 ? "Você é maior de idade" : "Você é menor de idade"

// console.log(message)

/* 1.Exercícios de Operador Ternário*/

/*Exercício 1: Verificação de Paridade

    Escreva um código que verifique se um número é par ou ímpar usando o operador ternário.*/

function paridade(num){
    return(
        num%2===0 ? console.log("Par") : console.log("Ímpar")
    )
}

// paridade(2)

/* Exercício 2: Verificação de Desconto

Dada a variável: "clienteFidelidade", use um operador ternário para definir o valor do desconto (10% para clientes fiéis, 5% para novos clientes).*/

function cliente(clienteFidelidade){
    return(
        clienteFidelidade === true ? console.log("10% de desconto") : ("5% de desconto")
    )
}
cliente(true)
