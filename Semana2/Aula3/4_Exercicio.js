let number = 0

function contador(){
    if( number == 0){
       console.log("Seu tempo acabou!! Tente novamente!!")
    }else{
number --
console.log(number)
    }
    
}
function iniciar(){
    setTimeout(contador, 10000)
}