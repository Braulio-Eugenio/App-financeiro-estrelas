function logarMensagem() {
    console.log("Executei a função.")
}

function buscarTodasAvaliacoes() {
    window.location.replace("http://localhost:8080/usuarios/avaliacoes")

    
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

function criaListaDoBack() {

    $.getJSON( "http://localhost:8080/usuarios/123/avaliacoes", function( data ) {
        var items = [];

        console.log(data);

        $.each( data, function( key, val ) {
          items.push( "<li id='" + key + "'>" + val.idUsuario + " - " + val.avaliacao + "</li>" );
        });

        // TRANSFORMAR EM TABLE
       
        $( "<ul/>", {
          "class": "my-new-list",
          html: items.join( "" )
        }).appendTo( "body" );
      });
}