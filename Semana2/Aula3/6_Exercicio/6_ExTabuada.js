/*Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10.
O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
Tabuada de 5:
5 X 1 = 5
5 X 2 = 10
...
5 X 10 = 50*/

let numero

numero = prompt("Digite a tabuada desejada")


    for(let i = 1; i <= 10; i++ )
    {
        console.log(numero + 'x' + i + '=' + numero*i);
    }
    console.log("________")

/*'use strict'
let tabuada;
let numero = 1;

tabuada = prompt("Digite a tabuada desejada")

while ( numero<= 10){
    for(let i = 1; i <= 10; i++ )
    {
        console.log(numero + 'x' + i + '=' + numero*i);
    }
    console.log("________")
    numero++;
}*/




