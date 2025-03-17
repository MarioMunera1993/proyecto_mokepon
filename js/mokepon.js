let poderJugador
let poderEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    //escondemos la seccion de ataque para que no salga hasta que se alla escogido jugador
    let seccionSelecionarAtaque = document.getElementById('select_poderes')
    seccionSelecionarAtaque.style.display = 'none'

    //escondemos boton reiniciar
    let btn_reinicar = document.getElementById('btn_reiniciar')
    btn_reinicar.style.display = 'none'

    
    let btnMascotaJugador = document.getElementById('btn_mascotas')
    btnMascotaJugador.addEventListener('click', seleccionarMacotaJugador)
    

    let botonFuego = document.getElementById('btn_fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('btn_agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('btn_tierra')
    botonTierra.addEventListener('click',ataqueTierra)

    let btn_reiniciar= document.getElementById('btn_reiniciar')
    btn_reiniciar.addEventListener('click' ,reiniciarJuego)

    
}

function seleccionarMacotaJugador() {
    //habilitamos la seccion poderes 
    let seccionSelecionarAtaque = document.getElementById('select_poderes')
    seccionSelecionarAtaque.style.display = 'block'

    //escondemos la seccion masconta jugador
    let seccionSelecionarMascota = document.getElementById('select_mascota')
    seccionSelecionarMascota.style.display = 'none'

    //escondemos boton de celecionar mascota
    let btnMascotaJugador = document.getElementById('btn_mascotas')
    btnMascotaJugador.style.display = 'none'


    //creamos las variables para saber cual de estas esta selecionada
    let hipodoge = document.getElementById('hipodoge').checked
    let capipepo = document.getElementById('capipepo').checked
    let ratigueya = document.getElementById('ratigueya').checked
    let langostelvis = document.getElementById('langostelvis').checked
    let tacupalma = document.getElementById('tacupalma').checked
    let pydos = document.getElementById('pydos').checked

    //en esta variable modificamos el innerHTML para poner el nombre de la mascota
    let spanMascotaJugador = document.getElementById('nombre_mascota_jugador')
    
    //preguntamos cual es el que esta seleccionado 
    if (hipodoge) {
        spanMascotaJugador.innerHTML = 'HIPODOGUE'
    } else if(capipepo) {
        spanMascotaJugador.innerHTML = 'CAPIPEPO'
    }else if(ratigueya) {
        spanMascotaJugador.innerHTML = 'RATIGUEYA'
    }else if(langostelvis) {
        spanMascotaJugador.innerHTML = 'LANGOSTELVIS'
    }else if(tacupalma) {
        spanMascotaJugador.innerHTML = 'TACUPALMA'
    }else if(pydos) {
        spanMascotaJugador.innerHTML = 'PYDOS'
    }else{
        alert('Debes de selecionar una opcion')
    }

    seleccionarMacotaEnemigo()


    
}

function seleccionarMacotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,6)

    //en esta variable modificamos el innerHTML para poner el nombre de la mascota
    let spanMascotaEnemigo = document.getElementById('nombre_mascota_enemigo')

    //escondemos h2 de titulo selecciona la mascota jugador
    let tituloSelecionaMascota = document.getElementById('title2')
    tituloSelecionaMascota.style.display = 'none'

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'HIPODOGUE'   
    }else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'CAPIPEPO'
    }else if (mascotaAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'RATIGUEYA'
    }else if (mascotaAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = 'LANGOSTELVIS'
    }else if (mascotaAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = 'TACUPALMA'
    }else if (mascotaAleatorio == 6) {
        spanMascotaEnemigo.innerHTML = 'PYDOS'
    }else{
        alert('A ocurrido un error')
    }

}

function ataqueFuego() {
    poderJugador = 'FUEGO'
    ataqueEnemigo()
}

function ataqueAgua() {
    poderJugador = 'AGUA'
    ataqueEnemigo()
}

function ataqueTierra() {
    poderJugador = 'TIERRA'
    ataqueEnemigo()
}

function ataqueEnemigo() {
    enemigo = aleatorio(1,3)

    if (enemigo == 1) {
        poderEnemigo = 'FUEGO'
    }else if(enemigo == 2){
        poderEnemigo = 'AGUA'
    }else{
        poderEnemigo = 'TIERRA'
    }

    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas_mascota_jugador')
    let spanVidasEnemigo = document.getElementById('vidas_mascota_enemigo')
    
    if(poderJugador == poderEnemigo) {
        crearMensaje("EMPATE 🙄")
    } else if(poderJugador == 'FUEGO' && poderEnemigo == 'TIERRA') {
        crearMensaje("GANASTE 🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(poderJugador == 'AGUA' && poderEnemigo == 'FUEGO') {
        crearMensaje("GANASTE 🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(poderJugador == 'TIERRA' && poderEnemigo == 'AGUA') {
        crearMensaje("GANASTE 🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE 😭")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal('Fin del Juego 🎉🎉🎉🎉 GANASTE 🎉🎉🎉🎉')
    }else if(vidasJugador == 0){
        crearMensajeFinal('Fin del Juego 😭😭😭😭 PERDISTE 😭😭😭😭')
    }
}

function crearMensaje(resultado) {
    let mensajes = document.getElementById('mensajitos')
    let parrafo =document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + poderJugador + ' , la mascota de tu enemigo ataco con ' + poderEnemigo + ': '+ resultado
    mensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let mensajes = document.getElementById('mensajitos')
    let parrafo =document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    mensajes.appendChild(parrafo)

    //modificamos los botones con la propiedad disable cuando llegue a 0 la vida sea del jugador o del enemigo
    let botonFuego = document.getElementById('btn_fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('btn_agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('btn_tierra')
    botonTierra.disabled = true

    //mostramos boton reiniciar
    let btn_reinicar = document.getElementById('btn_reiniciar')
    btn_reinicar.style.display = 'block'
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min + 1) + min)
}

function reiniciarJuego() {
    location.reload()
}

window.addEventListener('load', iniciarJuego)
