function popupLogar() {
    var caixa = document.createElement("div");
    var text = document.createTextNode("Você efetuou o login com sucesso");
    caixa.appendChild(text);
    caixa.classList.add("success-message");

    caixa.style.backgroundColor = "green";
    caixa.style.color = "white";
    caixa.style.padding = "15px";
    caixa.style.margin = "30px 40%";
    caixa.style.borderRadius = "5px";


    document.body.appendChild(caixa);
    console.log("pop up exibido");
    // Remove a div após 5 segundos
    setTimeout(function() {
        document.body.removeChild(caixa);
        console.log("console removido");
        window.location.href = "./index.html"
    }, 1000);


}

function logar(){
    
    var storedEmail = localStorage.getItem('email');
    
    var storedSenha = localStorage.getItem('senha');
    
    var userEmail = document.getElementById('emailUsuario');
    
    var userSenha = document.getElementById('senhaUsuario');
    
    if(storedEmail.value == userEmail && storedSenha.value == userSenha){

            popupLogar();
    }else{
        alert('Erro ao fazer login');
    }
}