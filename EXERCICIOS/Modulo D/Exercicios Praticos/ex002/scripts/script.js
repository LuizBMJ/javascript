
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("txtmsg")
    var foto = document.getElementById('foto')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERROR] Verifique os dados e tente novamente!")
    }

    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade < 10){
                foto.style.display = 'block'
                foto.src = 'imagens/BabyHomem.jpg'
            }

            else if (idade < 21){
                foto.style.display = 'block'
                foto.src = 'imagens/YoungHomem.jpg'
            }

             else if (idade < 60){
                foto.style.display = 'block'
                foto.src = 'imagens/AdultoHomem.jpg'
            }

            else {
                foto.style.display = 'block'
                foto.src = 'imagens/OldHomem.jpg'
            }
        }

        else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade < 10){
                foto.style.display = 'block'
                foto.src = 'imagens/BabyMulher.jpg'
            }

            else if (idade < 21){
                foto.style.display = 'block'
                foto.src = 'imagens/YoungMulher.jpg'
            }

             else if (idade < 60){
                foto.style.display = 'block'
                foto.src = 'imagens/AdultMulher.jpg'
            }

            else {
                foto.style.display = 'block'
                foto.src = 'imagens/OldMulher.jpg'
            }
        }


        
        res.innerHTML = `<p> Detectamos ${genero} com ${idade} anos.</p>`
    }
}