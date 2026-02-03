num = [5 , 1 , 4 , 3 , 8]

num.push(2)
num.sort()
console.log(num)

let pos = num.indexOf(7)

if (pos == -1) {
    console.log('O valor não foi encontrado!')
}

else {
    console.log(`O valor está na posição ${pos} `)
}