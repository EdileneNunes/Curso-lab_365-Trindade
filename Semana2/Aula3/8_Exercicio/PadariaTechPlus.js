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
let totaDosProdutos = 0;
let totalTroco = 0;
function adicionarValorDoProduto(){
debugger;
    //Captura o valor informado no campo input da tela e atribui a variável: valorDoProduto;
    var valorDoProduto = document.getElementById("valorDoProduto").value;
    
    if( valorDoProduto == 0) {
        listaValoresProdutos.forEach(function(item){
            totaDosProdutos = (totaDosProdutos + Number(item));
        });
        document.getElementById("valoTotal").innerHTML = "Valor total da compra R$: "+totaDosProdutos
        document.getElementById("valorDoProduto").style.display = "none";
        document.getElementById("botao").style.display = "none";
        document.getElementById("idLabelProduto").style.display = "none";   
    }else{
        listaValoresProdutos.push(valorDoProduto);
    }
    document.getElementById("valorDoProduto").value = "";
}

function valorRecebido(){
    debugger
    var valorRecebido = document.getElementById("valorRecebido").value;
    totalTroco = valorRecebido - totaDosProdutos;

    document.getElementById("idDinheiro").innerHTML = "Valor do dinheiro R$: "+valorRecebido;
    document.getElementById("idTroco").innerHTML = "Valor do Troco R$: "+totalTroco;
    
    
}

