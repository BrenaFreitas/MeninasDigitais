function logar() {
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


document.getElementById("botao-logar").addEventListener("click", function(event) {
 
    logar();

    event.target.removeEventListener(event.type, arguments.callee);
});
