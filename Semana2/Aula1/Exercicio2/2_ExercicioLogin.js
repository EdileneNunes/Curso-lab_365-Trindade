/*Faça uma página de login que verifique se o login e a senha do usuário batem com um login e senha fictício (armazenados em um objeto).
A página deve conter inputs e um botão para logar. Após o login, se as credenciais baterem com as fictícias deve-se imprimir ‘logado’, 
senão imprimir ‘credenciais incorretas’.*/


let valorLogin = document.getElementById("login")
let valorPassword = document.getElementById("password")

let usuario = {
    login: "Mariana",
    password: "MarianaLinda"
}
console.log(valorLogin.value)

function verify(){ 
if(valorLogin.value == usuario.login && valorPassword.value == usuario.password){
    console.log("Logado")
}else{
    console.log("credenciais incorretas")
}
}