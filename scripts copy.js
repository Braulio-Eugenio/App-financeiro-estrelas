function logarMensagem() {
    console.log("Executei a função.")
}

function listarDespesas() {
    window.location.replace("http://localhost:8080/usuarios/123/despesas")
}

function trocarClasse() {

    var arrayDeElementosDaClasse = document.getElementsByClassName("verde")
    var classeDesejada = "vermelho";

    if (arrayDeElementosDaClasse.length == 0) {
        classeDesejada = "verde"
        arrayDeElementosDaClasse = document.getElementsByClassName("vermelho");
    }

    while (arrayDeElementosDaClasse.length > 0) {
        arrayDeElementosDaClasse[0].className = classeDesejada
    }
}

function criaListaDespesa() {

    $.getJSON("http://localhost:8080/usuarios/123/despesas", function (data) {
        var items = [];

        console.log(data);

        $.each(data, function (key, val) {
            items.push("<tr><td id='" + key + "'>" + val.idDespesa + " - " + val.tipoDespesa + " - " + val.vencimento + "</td></tr>");
        });

        $("<table/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("body");
    });
}

function criaListaDoBackDependente() {

    $.getJSON("http://localhost:8080/usuarios/123/dependentes", function (data) {
        var items = [];

        console.log(data);

        $.each(data, function (key, val) {
            items.push("<tr><td id='" + key + "'>" + val.nome + " - " + val.parentesco + "</td></tr>");
        });

        // TRANSFORMAR EM TABLE

        $("<table/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("body");
    });
}

function criaListaDoBackAvaliacao() {

    $.getJSON("http://localhost:8080/usuarios/123/avaliacoes", function (data) {
        var items = [];

        console.log(data);

        $.each(data, function (key, val) {
            items.push("<tr><td id='" + key + "'>" + val.nomeUsuario + " - " + val.comentario + "</td></tr>");
        });

        // TRANSFORMAR EM TABLE

        $("<table/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("body");
    });
}

function criaListaDoBackSugestao() {

    $.getJSON("http://localhost:8080/sugestoes", function (data) {
        var items = [];

        console.log(data);

        $.each(data, function (key, val) {
            items.push("<tr><td id='" + key + "'>" + val.tipoSugestao + " - " + val.descricao + "</td></tr>");
        });

        // TRANSFORMAR EM TABLE

        $("<table/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("body");
    });
}

function criaListaDoBackObjetivo() {

    $.getJSON("http://localhost:8080/usuarios/123/objetivos", function (data) {
        var items = [];

        console.log(data);

        $.each(data, function (key, val) {
            items.push("<tr><td id='" + key + "'>" + val.nome + " - " + val.valorTotal + "</td></tr>");
        });

        // TRANSFORMAR EM TABLE

        $("<table/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("body");
    });
}
