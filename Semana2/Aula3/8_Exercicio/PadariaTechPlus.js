/*O Sr. Manoel Joaquim expandiu seus negócios para além dos negócios de 1,99 e agora possui uma loja de conveniências. 
Faça um programa que implemente uma caixa registradora rudimentar.
O programa deverá receber um número desconhecido de valores referentes aos preços das mercadorias. 
Um valor zero deve ser informado pelo operador para indicar o final da compra. 



O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente forneceu, 
para então calcular e mostrar o valor do troco. Após esta operação, o programa deverá voltar ao ponto inicial, 
para registrar a próxima compra. A saída deve ser conforme o exemplo abaixo:
Lojas Tabajara
Produto 1: R$ 2.20
Produto 2: R$ 5.80
Produto 3: R$ 0
Total: R$ 9.00
Dinheiro: R$ 20.00
Troco: R$ 11.00*/
let listaValoresProdutos = []
let totalDosProdutos = 0;
let totalTroco = 0;

function adicionarValorDoProduto(){
    var valorDoProduto = document.getElementById("valorDoProduto").value;

    if(valorDoProduto < 0){
        alert("O valor do produto deve ser maior que zero.");
        return;
    }

    if(valorDoProduto == 0 && listaValoresProdutos.length == 0){
        alert("Não existe compra a ser encerrada.");
        document.getElementById("valorDoProduto").value = "";
        return;
    }

    if( valorDoProduto == 0) {
        listaValoresProdutos.forEach(function(item){
            totalDosProdutos = (totalDosProdutos + Number(item));
        });
        document.getElementById("valoTotal").innerHTML = "Valor total da compra R$: "+totalDosProdutos
        document.getElementById("valorDoProduto").style.display = "none";
        document.getElementById("botaoAdicionar").style.display = "none";
        document.getElementById("idLabelProduto").style.display = "none"; 

        document.getElementById("idLabelDinheiro").style.display = ""; 
        document.getElementById("valorRecebido").style.display = ""; 
        document.getElementById("botaoCalcular").style.display = ""; 

    }else{
        listaValoresProdutos.push(valorDoProduto);
    }
    document.getElementById("valorDoProduto").value = "";
}

function valorRecebido(){
    var valorRecebido = document.getElementById("valorRecebido").value;
    totalTroco = valorRecebido - totalDosProdutos;
    document.getElementById("idDinheiro").innerHTML = "Valor do dinheiro R$: "+valorRecebido;
    document.getElementById("idTroco").innerHTML = "Valor do Troco R$: "+totalTroco;

    document.getElementById("valorRecebido").style.display = "";
    document.getElementById("idDinheiro").style.display = "";
    document.getElementById("idTroco").style.display = "";
    document.getElementById("valoTotal").style.display = "";

    document.getElementById("idLabelDinheiro").style.display = "none";
    document.getElementById("valorRecebido").style.display = "none";
    document.getElementById("botaoCalcular").style.display = "none";

}

function novaCompra(){
    listaValoresProdutos = [];
    totalDosProdutos = 0;
    totalTroco = 0; 
    
    document.getElementById("idLabelDinheiro").style.display = "none";
    document.getElementById("valorRecebido").style.display = "none";
    document.getElementById("botaoCalcular").style.display = "none";
    document.getElementById("idDinheiro").style.display = "none";
    document.getElementById("idTroco").style.display = "none";
    document.getElementById("valoTotal").style.display = "none";

    document.getElementById("idLabelProduto").style.display = "";
    document.getElementById("valorDoProduto").style.display = "";
    document.getElementById("botaoAdicionar").style.display = "";
}

document.getElementById("idLabelDinheiro").style.display = "none";
document.getElementById("valorRecebido").style.display = "none";
document.getElementById("botaoCalcular").style.display = "none";
document.getElementById("idDinheiro").style.display = "none";
document.getElementById("idTroco").style.display = "none";

