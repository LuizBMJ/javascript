function tabuada() {
    const numeroInput = document.getElementById("numero")
    const cabeca = document.getElementById("cabeca")
    const corpo = document.getElementById("corpo")

    const numero = Number(numeroInput.value)

    if (numeroInput.value === "") {
        alert("Por favor, digite um número.")
        return
    }

    cabeca.innerHTML = ""
    corpo.innerHTML = ""

    const trHead = document.createElement("tr")
    const th = document.createElement("th")
    th.colSpan = 2
    th.textContent = `Tabuada do ${numero}`
    trHead.appendChild(th)
    cabeca.appendChild(trHead)

    for (let i = 1; i <= 10; i++) {
        const tr = document.createElement("tr")

        const tdConta = document.createElement("td")
        tdConta.textContent = `${numero} x ${i}`

        const tdResultado = document.createElement("td")
        tdResultado.textContent = numero * i

        tr.appendChild(tdConta)
        tr.appendChild(tdResultado)
        corpo.appendChild(tr)
    }
}
