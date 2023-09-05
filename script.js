// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'

document.getElementById('submit').addEventListener('click', () => {
    event.preventDefault()
    const check = document.getElementById('time').value;

    // checks whether the variable is day or night and is shown to the user
    if (check === 'day') {
        alert('Claro')
    } else if (check === 'night') {
        alert('De noite')
    }

})

// 02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()

document.getElementById('button1').addEventListener('click', () => {
    for (let i = 2; i <= 20; i += 2) {
        alert(i)
    }

})

// 03 - crie uma função que exiba uma mensagem no console

function show() {
    console.log('Mensagem no console')
}

show();

// 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function nome(nome) {
    console.log(nome)
}

nome("Ronald")


// 05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function profile(nome, idade, estiloMusical) {
    console.log(nome)
    console.log(idade)
    console.log(estiloMusical)
}

nome("Ronald")
idade(29)
estiloMusical("Rock")

