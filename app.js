// Funcion para texto 
function asignarTextoConParametros(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

// Restricciones/validacion de encriptacion
function restricciones(palabra) {
    const invalidChars = /[^a-z\s]/;
    if (palabra == ``) {
        asignarTextoConParametros(`#restriccion`, `⚠ Debes rellenar el campo primero`);
        return false;
    }
    if (invalidChars.test(palabra)) {
        asignarTextoConParametros(`#restriccion`, `⚠ Solo letras minúsculas y sin acentos`);
        return false;
    }
    return true;
}

// restriccion Desencriptado
function restriccionesDesencriptacion(palabra) {
    const invalidChars = /[^a-z\s]/;
    if (palabra == ``) {
        asignarTextoConParametros(`#restriccion`, `⚠ Debes rellenar el campo primero`);
        return false;
    }
    if (invalidChars.test(palabra)) {
        asignarTextoConParametros(`#restriccion`, `⚠ Solo letras minúsculas y sin acentos`);
        return false;
    }
    return true;
}

// Agregar parpadeo al <p> cuando hay un error
function aplicarParpadeo() {
    const mensaje = document.querySelector(".contenedor-encriptacion p");
    mensaje.classList.add('parpadeo');
    setTimeout(() => {
        mensaje.classList.remove('parpadeo');
    }, 3000); // El parpadeo dura 3 segundos
}


// boton copiar al portapapeles
function copypaste() {
    let copy = document.querySelector(".input-desencriptado").value;
    navigator.clipboard.writeText(copy);
    // Reiniciar pestana
    document.querySelector(".input-encriptado").value = ``;
    document.querySelector(".contenedor-dencriptacion").classList.remove('show');
    setTimeout(() => {
        document.querySelector(".contenedor-dencriptacion").style.display = "none";
        document.querySelector(".img-not-found-contenedor").style.display = "flex";
    }, 500);
}

// Funcion de Encriptado
function encriptar() {
    let textToEncrypt = document.querySelector(".input-encriptado").value;
    const cifrado = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    // Reemplaza cada letra según el objeto de reemplazo
    let reemplazo = textToEncrypt.replace(/[aeiou]/g, match => cifrado[match]);

    document.querySelector(".input-desencriptado").value = reemplazo;

    if (!restricciones(textToEncrypt))
        return aplicarParpadeo();

    // Ocultar img y visualizar Desencriptacion
    document.querySelector(".contenedor-dencriptacion").style.display = "flex";
    setTimeout(() => {
        document.querySelector(".contenedor-dencriptacion").classList.add('show');
    }, 10);
    document.querySelector(".img-not-found-contenedor").style.display = "none";
}

// Funcion de Desencriptado
function desencripta() {
    let textToDecrypt = document.querySelector(".input-encriptado").value;

    if (!/(enter|imes|ai|ober|ufat)/.test(palabraIngresada)) {
        alert('No se debe desencriptar');
    };
        
        return;
    }

    // Objeto de reemplazo para desencriptar
    const desencriptado = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    // Crear una expresión regular para todas las secuencias de reemplazo
    const regex = new RegExp(Object.keys(desencriptado).join('|'), 'g');

    // Reemplazar cada secuencia según el objeto de reemplazo
    let reemplazo2 = textToDecrypt.replace(regex, match => desencriptado[match]);

    document.querySelector(".input-desencriptado").value = reemplazo2;

    //Restriccion 
    if (!restriccionesDesencriptacion(textToDecrypt))
        return aplicarParpadeo();

    //visualizar Desencriptacion
    document.querySelector(".contenedor-dencriptacion").style.display = "flex";
    setTimeout(() => {
        document.querySelector(".contenedor-dencriptacion").classList.add('show');
    }, 10);
    document.querySelector(".img-not-found-contenedor").style.display = "none";
}