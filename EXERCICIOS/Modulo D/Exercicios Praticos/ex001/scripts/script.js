
function carregar() {
    var msg = document.getElementById('textmsg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'imagens/Dia.jpg'
        document.body.style.background = '#3f88c4'
    }

    else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'imagens/Tarde.jpg'
        document.body.style.background = '#dab03d'
    }

    else {
        //BOA NOITE
        img.src = 'imagens/Noite.jpg'
        document.body.style.background = '#292401'
    }
}
