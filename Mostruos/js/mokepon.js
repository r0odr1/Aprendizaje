function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', SeleccionarMascotaJugador)
}

function SeleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMacotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked) {
        spanMacotaJugador.innerHTML = 'Hipodoge'     
    }else if (inputCapipepo.checked){
        spanMacotaJugador.innerHTML = 'Capipepo'
    }else if (inputRatigueya.checked){
        spanMacotaJugador.innerHTML = 'Ratigueya'  
    }else {
        alert("No seleccionaste una mascota")
    }
}

window.addEventListener('load', iniciarJuego)
