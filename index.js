const salida =document.getElementById('salida');

function login(){
    const usuario = document.getElementById('txtUser');
    const password = document.getElementById('txtPassword');
    const textousuario = usuario.value;

    salida.innerHTML = '';

    if(!(textousuario=='') && !(password.value == '')){
        const listItem = document.createElement('div');
        listItem.textContent = `Login correcto ${textousuario}`;
        salida.appendChild(listItem);
        usuario.value = '';
        password.value = '';
    }
}

function registro(){
    const usuario = document.getElementById('txtUser');
    const password = document.getElementById('txtPassword');
    const textousuario = usuario.value;

    salida.innerHTML = '';
    if(!(textousuario=='') && !(password.value == '')){
        const listItem = document.createElement('div');
        listItem.textContent = `Registro con exito ${textousuario}`;
        salida.appendChild(listItem);
        usuario.value = '';
        password.value = '';
    }
}