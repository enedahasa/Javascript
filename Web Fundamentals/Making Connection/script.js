
function hide(personin) {
    document.getElementById(personin).remove();
            
}

function change(){
    
    document.querySelector("#formaEditimit").classList.remove('none')
}

var emriRi = '';
function ndryshoEmrin(elementi){
    emriRi = elementi.value;
}
function ruajEmrin(){
   
    document.querySelector("#eddit").innerText = emriRi;
    document.querySelector("#formaEditimit").classList.add('none')

}