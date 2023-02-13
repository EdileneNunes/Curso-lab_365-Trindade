/*[App SaveCollege] Calcular a média e imprimir o nome dos alunos aprovados ou reprovados utilizando Estruturas de repetição

Realize as mesmas operações de cálculo e impressão do nome dos alunos aprovados/reprovados utilizando agora estruturas de repetição.*/
let media
let alunos = [{
    nome: "José",
    mat: 7,
    geo: 0,
    art: 8,
    cie: 9
},
{
    nome: "Claudia",
    mat: 10,
    geo: 5,
    art: 8,
    cie: 9
},
{
    nome: "Daniel",
    mat: 8,
    geo: 5,
    art: 6,
    cie: 10
},
{
    nome: "Debora",
    mat: 9,
    geo: 0,
    art: 8,
    cie: 5
}] 

for(i = 0; i< alunos.length; i++){

    media = (alunos[i].mat + alunos[i].geo + alunos[i].art + alunos[i].cie)/4
    
    if(media >=7){
        console.log(alunos[i].nome + " Aprovado: Média " + media)
    }else{
        console.log(alunos[i].nome + " Reprovado: Média " + media) 
    }
}

