var campoTexto = document.getElementById('txt1');
function mostrarAlerta(){
    if(!(campoTexto.value == ''))
        alert(campoTexto.value);
}

function borrarTexto(){
    campoTexto.value = '';
}
