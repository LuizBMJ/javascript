
function contar() {
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var res = document.getElementById("res")

    var nI = Number(inicio.value)
    var nF = Number(fim.value)
    var nP = Number(passo.value)

    res.innerHTML = ""

    if (nP <= 0) {
        res.innerHTML = "Passo inválido"
        return
    }

    for (var i = nI; i <= nF; i += nP) {
        res.innerHTML += `${i} 👉 `
    }

    res.innerHTML += `🏁`
}
