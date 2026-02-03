let numlist = []

function addnum() {
    const numinput = document.getElementById('num')
    const num = Number(numinput.value)
    const select = document.getElementById('numareas')

    if (numinput.value === '') {
        window.alert('Digite um número!')
        return
    }

    else if (num > 100 || num < 0) {
        window.alert('O seu número é invalido!');
        return
    }

    else if (numlist.includes(num)) {
        window.alert('Esse número já foi adicionado!')
        return
    }

    else {
        numlist.push(num)
        const elementonum = document.createElement('option')
        elementonum.textContent = `Valor ${num} adicionado. `
        select.appendChild(elementonum)
    }
}

function finishnum() {
    const res = document.getElementById("res")
    const container = document.getElementById("container-res")

    if (numlist.length === 0) {
        window.alert('Não há valores adicionado!')
    }

    else {
        container.style.display = 'flex'
        const maior = Math.max(...numlist)
        const menor = Math.min(...numlist)
        let soma = 0

        for (let i = 0; i < numlist.length; i++) {
            soma += numlist[i]
        }

        const media = (soma / numlist.length)

        res.innerHTML = `
        <p>Ao todo sua tabela possuí ${numlist.length} números. </p> <br> 
        <p> O maior número informado foi ${maior} </p> <br> 
        <p> O menor número informado foi ${menor} </p> <br> 
        <p> Somando todos os valores, temos ${soma} </p> <br> 
        <p> A média dos valores é ${media} </p>
        `  
    }
}
