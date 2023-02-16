/*Faça com que o usuário possa alterar informações da conta, que serão salvas em localStorage, 
como url da imagem de perfil, e-mail e nome.*/

let newName = document.getElementById("name")
let newEmail = document.getElementById("email")
let confirmName
let confirmEmail

function Troca() {
  confirmName = JSON.stringify(localStorage.getItem("name"));

  if (confirmName == null) {
    localStorage.setItem("name", newName.value);
  } else {
    localStorage.setItem("name", newName.value);
  }
  if (confirmEmail == null){
    localStorage.setItem("email", newEmail.value);
  } else{
    localStorage.setItem("email", newEmail.value);
  }
  
}
function mudarConteudo() {
    document.getElementById("foto").innerHTML = "O conteúdo foi alterado!";
  }
