function restricciones(palabra) {
    if (palabra == ``) {
        alert(`Esta vacio manco`);
        return false;
    }

    return true;
}

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

    /* if (!restricciones(textToEncrypt))
        return; */

    // Ocultar img y visualizar Desencriptacion
    document.querySelector(".contenedor-dencriptacion").style.display = "flex";
    document.querySelector(".img-not-found-contenedor").style.display = "none";
}

function desencripta() {
    let textToDecrypt = document.querySelector(".input-encriptado").value; // Corregido

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

    // Ocultar img y visualizar Desencriptacion
    document.querySelector(".contenedor-dencriptacion").style.display = "flex";
    document.querySelector(".img-not-found-contenedor").style.display = "none";
}