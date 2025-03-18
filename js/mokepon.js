const btn_reinicar = document.getElementById('btn_reiniciar')
const botonFuego = document.getElementById('btn_fuego')
const botonAgua = document.getElementById('btn_agua')
const botonTierra = document.getElementById('btn_tierra')
const btn_reiniciar= document.getElementById('btn_reiniciar')
const seccionSelecionarAtaque = document.getElementById('select_poderes')
const seccionSelecionarMascota = document.getElementById('select_mascota')
const btnMascotaJugador = document.getElementById('btn_mascotas')
const hipodoge = document.getElementById('hipodoge')
const capipepo = document.getElementById('capipepo')
const ratigueya = document.getElementById('ratigueya')
const langostelvis = document.getElementById('langostelvis')
const tacupalma = document.getElementById('tacupalma')
const pydos = document.getElementById('pydos')
const spanMascotaJugador = document.getElementById('nombre_mascota_jugador')
//en esta variable modificamos el innerHTML para poner el nombre de la mascota
const spanMascotaEnemigo = document.getElementById('nombre_mascota_enemigo')
const tituloSelecionaMascota = document.getElementById('title2')
const spanVidasJugador = document.getElementById('vidas_mascota_jugador')
const spanVidasEnemigo = document.getElementById('vidas_mascota_enemigo')
const mensajes = document.getElementById('resultado')
const ataques_jugador = document.getElementById('ataques_jugador')
const ataques_enemigo = document.getElementById('ataques_enemigo')
let poderJugador
let poderEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    //escondemos la seccion de ataque para que no salga hasta que se alla escogido jugador
    seccionSelecionarAtaque.style.display = 'none'
    //escondemos boton reiniciar
    btn_reinicar.style.display = 'none'    
    btnMascotaJugador.addEventListener('click', seleccionarMacotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click',ataqueTierra)
    btn_reiniciar.addEventListener('click' ,reiniciarJuego)
}

function seleccionarMacotaJugador() {
    //habilitamos la seccion poderes 
    seccionSelecionarAtaque.style.display = 'flex'
    //escondemos la seccion masconta jugador
    seccionSelecionarMascota.style.display = 'none'
    //escondemos boton de celecionar mascota
    btnMascotaJugador.style.display = 'none'
    //creamos las variables para saber cual de estas esta selecionada
    //en esta variable modificamos el innerHTML para poner el nombre de la mascota
    //preguntamos cual es el que esta seleccionado 
    if (hipodoge.checked) {
        spanMascotaJugador.innerHTML = 'HIPODOGUE'
    } else if(capipepo.checked) {
        spanMascotaJugador.innerHTML = 'CAPIPEPO'
    }else if(ratigueya.checked) {
        spanMascotaJugador.innerHTML = 'RATIGUEYA'
    }else if(langostelvis.checked) {
        spanMascotaJugador.innerHTML = 'LANGOSTELVIS'
    }else if(tacupalma.checked) {
        spanMascotaJugador.innerHTML = 'TACUPALMA'
    }else if(pydos.checked) {
        spanMascotaJugador.innerHTML = 'PYDOS'
    }else{
        alert('Debes de selecionar una opcion')
    }
    seleccionarMacotaEnemigo()
}

function seleccionarMacotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,6)
    //escondemos h2 de titulo selecciona la mascota jugador
    tituloSelecionaMascota.style.display = 'none'

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'HIPODOGUE'   
    }else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'CAPIPEPO'
    }else if (mascotaAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'RATIGÜEYA'
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
    let nuevoAtaqueDelJugador =document.createElement('p')
    let nuevoAtaqueDelEnemigo =document.createElement('p')
    
    mensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = poderJugador
    nuevoAtaqueDelEnemigo.innerHTML = poderEnemigo

    ataques_jugador.appendChild(nuevoAtaqueDelJugador)
    ataques_enemigo.appendChild(nuevoAtaqueDelEnemigo)


    /*
    let parrafo =document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + poderJugador + ' , la mascota de tu enemigo ataco con ' + poderEnemigo + ': '+ resultado
    */
    
}

function crearMensajeFinal(resultadoFinal) {
    mensajes.innerHTML = resultadoFinal
    //modificamos los botones con la propiedad disable cuando llegue a 0 la vida sea del jugador o del enemigo
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    //mostramos boton reiniciar
    btn_reinicar.style.display = 'block'
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min + 1) + min)
}

function reiniciarJuego() {
    location.reload()
}

window.addEventListener('load', iniciarJuego)
