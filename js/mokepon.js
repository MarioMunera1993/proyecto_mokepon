const btn_reinicar = document.getElementById('btn_reiniciar')
const seccionSelecionarAtaque = document.getElementById('select_poderes')
const seccionSelecionarpoder = document.getElementById('selecionar_ataques')
const seccionSelecionarMascota = document.getElementById('select_mascota')
const btnMascotaJugador = document.getElementById('btn_mascotas')
const spanMascotaJugador = document.getElementById('nombre_mascota_jugador')
const spanMascotaEnemigo = document.getElementById('nombre_mascota_enemigo')
const tituloSelecionaMascota = document.getElementById('title2')
const spanVidasJugador = document.getElementById('vidas_mascota_jugador')
const spanVidasEnemigo = document.getElementById('vidas_mascota_enemigo')
const mensajes = document.getElementById('resultado')
const ataques_jugador = document.getElementById('ataques_jugador')
const ataques_enemigo = document.getElementById('ataques_enemigo')


let mokepones = []
let poderJugador
let poderEnemigo
let opcionDeMokepones
let opcionAtaquesMokepon
let inputhipodoge
let inputcapipepo
let inputratigueya
let mascotaJugador
let inputlangostelvis
let inputtacupalma
let inputpydos
let mascontaJugador
let ataquesMokepon
let botonFuego
let botonAgua
let botonTierra
let botones = []
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('hipodogue', './img/hipodogue.png', 5)
let capipepo = new Mokepon('capipepo', '/img/capipepo.png', 5)
let ratigueya = new Mokepon('ratigueya', '/img/ratigueya.png', 5)
let langostelvis = new Mokepon('langostelvis', '/img/langostelvis.png', 5)
let tacupalma = new Mokepon('tacupalma', '/img/tacupalma.png', 5)
let pydos = new Mokepon('pydos', '/img/pydos.png', 5)

hipodoge.ataques.push(
    { nombre: 'Agua 💧', id: 'btn_agua' },
    { nombre: 'Agua 💧', id: 'btn_agua' },
    { nombre: 'Agua 💧', id: 'btn_agua' },
    { nombre: 'Fuego 🔥', id: 'btn_fuego' },
    { nombre: 'Tierra 🌱', id: 'btn_tierra' },
)

capipepo.ataques.push(
    { nombre: 'Tierra 🌱', id: 'btn_tierra' },
    { nombre: 'Tierra 🌱', id: 'btn_tierra' },
    { nombre: 'Tierra 🌱', id: 'btn_tierra' },
    { nombre: 'Fuego 🔥', id: 'btn_fuego' },
    { nombre: 'Agua 💧', id: 'btn_agua' },
)

ratigueya.ataques.push(
    { nombre: 'Agua 💧', id: 'btn_agua' },
    { nombre: 'Agua 💧', id: 'btn_agua' },
    { nombre: 'Agua 💧', id: 'btn_agua' },
    { nombre: 'Fuego 🔥', id: 'btn_fuego' },
    { nombre: 'Tierra 🌱', id: 'btn_tierra' },
)

langostelvis.ataques.push(
    { nombre: 'Agua 💧', id: 'btn_agua' },
    { nombre: 'Agua 💧', id: 'btn_agua' },
    { nombre: 'Agua 💧', id: 'btn_agua' },
    { nombre: 'Fuego 🔥', id: 'btn_fuego' },
    { nombre: 'Tierra 🌱', id: 'btn_tierra' },
)

tacupalma.ataques.push(
    { nombre: 'Agua 💧', id: 'btn_agua' },
    { nombre: 'Agua 💧', id: 'btn_agua' },
    { nombre: 'Agua 💧', id: 'btn_agua' },
    { nombre: 'Fuego 🔥', id: 'btn_fuego' },
    { nombre: 'Tierra 🌱', id: 'btn_tierra' },
)

pydos.ataques.push(
    { nombre: 'Fuego 🔥', id: 'btn_fuego' },
    { nombre: 'Fuego 🔥', id: 'btn_fuego' },
    { nombre: 'Fuego 🔥', id: 'btn_fuego' },
    { nombre: 'Agua 💧', id: 'btn_agua' },
    { nombre: 'Tierra 🌱', id: 'btn_tierra' },
)

mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tacupalma, pydos)



function iniciarJuego() {
    //escondemos la seccion de ataque para que no salga hasta que se alla escogido jugador
    seccionSelecionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
            <input type="radio" name="seleccion" id=${mokepon.nombre} />
            <label for=${mokepon.nombre} class="targeta_mokepon">
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt="${mokepon.nombre}" class="imagen_mokepon">
            </label>
        `
        seccionSelecionarMascota.innerHTML += opcionDeMokepones

        //en este momento ya los mokepones con su id existen en html
        inputhipodoge = document.getElementById('hipodogue')
        inputcapipepo = document.getElementById('capipepo')
        inputratigueya = document.getElementById('ratigueya')
        inputlangostelvis = document.getElementById('langostelvis')
        inputtacupalma = document.getElementById('tacupalma')
        inputpydos = document.getElementById('pydos')

    })

    //escondemos boton reiniciar
    btn_reinicar.style.display = 'none'
    btnMascotaJugador.addEventListener('click', seleccionarMacotaJugador)
    btn_reiniciar.addEventListener('click', reiniciarJuego)
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
    if (inputhipodoge.checked) {
        spanMascotaJugador.innerHTML = inputhipodoge.id
        mascontaJugador = inputhipodoge.id
    } else if (inputcapipepo.checked) {
        spanMascotaJugador.innerHTML = inputcapipepo.id
        mascontaJugador = inputcapipepo.id
    } else if (inputratigueya.checked) {
        spanMascotaJugador.innerHTML = inputratigueya.id
        mascontaJugador = inputratigueya.id
    } else if (inputlangostelvis.checked) {
        spanMascotaJugador.innerHTML = inputlangostelvis.id
        mascontaJugador = inputlangostelvis.id
    } else if (inputtacupalma.checked) {
        spanMascotaJugador.innerHTML = inputtacupalma.id
        mascontaJugador = inputtacupalma.id
    } else if (inputpydos.checked) {
        spanMascotaJugador.innerHTML = inputpydos.id
        mascontaJugador = inputpydos.id
    } else {
        alert('Debes de selecionar una opcion')
    }

    extraerAtaques(mascontaJugador)
    seleccionarMacotaEnemigo()
}

function extraerAtaques(mascontaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascontaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }

    }

    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="btn_ataque bAtaque">${ataque.nombre}</button>
        `

        seccionSelecionarpoder.innerHTML += ataquesMokepon
    })
    botonFuego = document.getElementById('btn_fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    botonAgua = document.getElementById('btn_agua')
    botonAgua.addEventListener('click', ataqueAgua)

    botonTierra = document.getElementById('btn_tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    botones = document.querySelectorAll('.bAtaque')

}

function secuenciaAtaque(){
    
}

function seleccionarMacotaEnemigo() {
    //me trae un numero del 0 al 5 ya que solo tengo 6 mokepones
    let mascotaAleatorio = aleatorio(0, mokepones.length - 1)
    //escondemos h2 de titulo selecciona la mascota jugador
    tituloSelecionaMascota.style.display = 'none'

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
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
    enemigo = aleatorio(1, 3)

    if (enemigo == 1) {
        poderEnemigo = 'FUEGO'
    } else if (enemigo == 2) {
        poderEnemigo = 'AGUA'
    } else {
        poderEnemigo = 'TIERRA'
    }

    combate()
}

function combate() {
    if (poderJugador == poderEnemigo) {
        crearMensaje("EMPATE 🙄")
    } else if (poderJugador == 'FUEGO' && poderEnemigo == 'TIERRA') {
        crearMensaje("GANASTE 🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (poderJugador == 'AGUA' && poderEnemigo == 'FUEGO') {
        crearMensaje("GANASTE 🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (poderJugador == 'TIERRA' && poderEnemigo == 'AGUA') {
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
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Fin del Juego 😭😭😭😭 PERDISTE 😭😭😭😭')
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

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

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function reiniciarJuego() {
    location.reload()
}

window.addEventListener('load', iniciarJuego)
