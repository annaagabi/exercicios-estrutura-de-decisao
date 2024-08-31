// Explicação Ternário
// O ternário é usado quando há apenas duas condições

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
// cliente(true)


/* Explicação if e else */

// O if é usado quando há apenas quatro condições

function validaIdadeIf(idade){
    if(idade>=18){
        return console.log("Maior de idade")

    } else{
        return console.log("Menor de idade")
    }
}

// validaIdadeIf(17)

function validaNota(nota){

    if(nota>=7){
        console.log("Aprovado")

    } else if(nota>=5 && nota<=6){
        return console.log("Recuperação")
    }else{
        console.log("Reprovado")
    }

}

// validaNota(3)


/* 2. Exercícios de Funções com `if` e `else` */

/*Exercício 1: Avaliação de Notas

Crie uma função que receba uma nota como parâmetro e retorne "Aprovado" se a nota for maior ou igual a 60, e "Reprovado" caso contrário.
*/

function validaNota2(nota){

    if(nota>=60){
        console.log("Aprovado")

    } else{
        console.log("Reprovado")
    }

}

// validaNota(62)


/* Exercício 2: Verificação de Número Positivo/Negativo

Crie uma função que receba um número e retorne "Positivo", "Negativo" ou "Zero".*/

function verificaNum(num){
    if(num==0){
        return console.log("Zero")

    } else if(num>0){
        return console.log("Positivo")

    } else{
        return console.log("Negativo")
    }
}

verificaNum(0)
verificaNum(4)
verificaNum(-9)