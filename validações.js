function validarNome(nome) {
    var regex = /^[a-zA-Z ]*$/;
    return regex.test(nome);
}

$("#formRecrutamento").submit(function(event) {
    var nome = $("#nome").val();
    if (!validarNome(nome)) {
        alert("Por favor, insira um nome válido.");
        event.preventDefault();
    }
});