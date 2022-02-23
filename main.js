'use strict'

const numeros = [20, 130, 70, 279, 320]

//Acescentar 100 a cada elemento


//         * Solução Imperativa

// const limite = numeros.length -1;
// let numeros100 = []
//     for(let i=0; i<=limite ; i++){
//         numeros100[i] = numeros[i] + 100
//     }


//         * Solução Declarativa
// MAP - Percorrer o array podendo modificar
//ou não e retornando um novo array de mesmo tamanho
//
// 1° Elemento
// 2° Indice
// 3° Array

// const adicionar100 = (numero) => numero + 100
// const numeros100 = numeros.map(acrescentar100)

// console.log("numeros: ", numeros)
// console.log("numeros mais 100: ", numeros100)

//Problema - Criar um novo array com os numeros menores que 100

//FILTER = Percorre todo array filtrando dependendo de uma 
//condição e retorna um array do mesmo tamanho ou menor.
// 1° Elemento
// 2° Indice
// 3° Array

// const ehMenor100 = numeros <= 100;
// const numerosMenores100 = numeros.filter(ehMenor100)
// console.log("Números menores : ",numeros)


//Problema - Somar todos os valores(elementos)
//
//REDUCE - Percorrer todo array aplicando uma função (calback)
//e retornando um unico valor
//1° Acumulador 
//2° Elemento
//3° Índice
//4° Array

const soma = (a,b) => a+b
const total = numeros.reduce(soma, 0)

const potenciacao = (numeros) => numeros*numeros
const numeroAoQuadrado = numeros.map(potenciacao)
console.log("Número ao quadrado: ", numeroAoQuadrado)

const pares = (numeros) => numeros%2 ==0
const numerosPares = numeros.filter(pares)
console.log("Números Pares: ", numerosPares)

const media = (numeros) => (numeros*numeros)/5
const numerosMedia = numeros.reduce(media)
console.log("Média dos números: ", numerosMedia)

const impares = (numeros) => numeros%2 == 1
const numerosImpares = numeros.filter(impares)
console.log("Números Ímpares: ", numerosImpares)


