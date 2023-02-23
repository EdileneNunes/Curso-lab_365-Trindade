/*Utilizar a página de login para criar um sistema de autenticação utilizando localstorage. 
Quando o usuário logar, salvar as credenciais localmente. 
Se as credenciais existirem localmente, ir para uma página com um botão de logout, 
se elas não existirem, ir para a página de login.*/

function login(){
    let user = document.getElementById("user");
    let password = document.getElementById("password");
    document.getElementById("botaoLogin").style.display = " ";
debugger;
    let credenciais = {
        nome: user.value,
        senha: password.value
    }

    if(credenciais.nome == 'Clara' && credenciais.senha == '4567'){
      localStorage.setItem('acesso', true);
      localStorage.setItem('user', JSON.stringify(credenciais));
        //trocar de janela
      window.location = "menu.html";
    }else{
        alert("Não foi possível realizar o login!")
    }
}
function logout(){
    let acesso = false
    localStorage.setItem("acesso", JSON.stringify(acesso))
    
        window.location = "index.html";

}