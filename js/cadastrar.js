function cadastrar() {
    
    var caixa = document.createElement("div");
    var text = document.createTextNode("Você efetuou o cadastro com sucesso");
    caixa.appendChild(text);
    caixa.classList.add("success-message");

    caixa.style.backgroundColor = "green";
    caixa.style.color = "white";
    caixa.style.padding = "15px";
    caixa.style.margin = "30px 40%";
    caixa.style.borderRadius = "5px";


    document.body.appendChild(caixa);
    console.log("pop up exibido");

    setTimeout(function() {
        document.body.removeChild(caixa);
        console.log("console removido");
        window.location.href = "./logar.html"
    }, 1000);


}


document.getElementById("botao-cadastrar").addEventListener("click", function(event) {
 
    cadastrar();

    event.target.removeEventListener(event.type, arguments.callee);
});


/*

function cadastrar(){


    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var idade= document.getElementById("idade").value;
    var senha = document.getElementById("senha").value;
    var confsenha = document.getElementById("confsenha").value;

    var usuario = {
        nome :  nome,
        email : email,
        idade : idade,
        senha : senha,
        confsenha : confsenha
    };

    usuarios.push(usuario);
    
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    dialogo();
   
}

*/