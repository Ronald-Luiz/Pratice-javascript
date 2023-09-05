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

profile("Ronald", 29, "Rock");

// 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function entertainment(filme, musica) {
    console.log(filme)
    console.log(musica)
}

entertainment("Spider-Man 2", "Linkin Park - In The End")

// 07 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function TripleNumber(number) {
    return number * 3
}

const resultado = TripleNumber(5);
console.log(resultado);

// 08 - crie uma função que verifique se uma variável é true ou false

function checkOut(variable) {
    return variable === true;
}

let test = checkOut(true)

if (test === true) {
    console.log("the variable is true")
} else {
    console.log("the variable is false")
}

// 09 - Crie um array que receba 5 itens e exiba no console.

let array = ["item1", "item2", "item3", "item4", "item5"]
console.log(array)

// 10 - Utilize um método para adicionar um nome ao inicio do array.

let array2 = ["item1", "item2", "item3", "item4", "item5"]
array2.unshift("Javascript");
console.log(array2)

// 11 - Utilize um método para remover o último nome do array.

let array3 = ["item1", "item2", "item3", "item4", "item5"]
array3.pop();
console.log(array3)

// 12 - Utilize um método para adicionar dois nomes ao fim do array.

let array4 = ["item1", "item2", "item3", "item4", "item5"]
array4.push("item6", "item7")
console.log(array4)

// 13 - Utilize um método para remover o primeiro nome do array.

let array5 = ["item1", "item2", "item3", "item4", "item5"]
array5.shift();
console.log(array5)

// 14 - Utilize um método para organizar em ordem crescente o seguinte array: let numbers = [7,5,6,3,8,9,2,1,4]

let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4]
numbers.sort();
console.log(numbers)

// 14 - Crie um objeto que receba ao menos três propriedades sobre você.

const myProfile = {
    nome: "Ronald",
    idade: 29,
    ocupacao: "unemployed"
}

console.log(myProfile)

// 15 - Adicione uma nova propriedade sem alterar seu objeto inicial.

const myProfile2 = {
    nome: "Ronald",
    idade: 29,
    ocupacao: "unemployed"
}

myProfile2.origem = "Brazil"

console.log(myProfile2)

// 16 - Remova uma propriedade desse objeto.

const myProfile3 = {
    nome: "Ronald",
    idade: 29,
    ocupacao: "unemployed",
    origem: "brazil"
}

delete myProfile3.origem;

console.log(myProfile3)

// 17 - Mostre no console todas as propriedades desse objeto.

const myProfile4 = {
    nome: "Ronald",
    idade: 29,
    ocupacao: "unemployed",
    origem: "brazil"
}

console.log(myProfile4)


// 18 - Crie um array chamado 'cadastro' contendo ao menos 5 objetos. Cada objeto deve receber as seguintes propriedades: nome, idade, telefone, amigos. Na propriedade amigos, adicione ao menos 4 amigos.

let cadastro = [
    {
        nome: "rafael",
        idade: 20,
        telefone: 123,
        amigo: ["joão", "carlos", "ana", "thamyres"]
    },
    {
        nome: "rafael",
        idade: 20,
        telefone: 123,
        amigo: ["joão", "carlos", "ana", "thamyres"]
    },
    {
        nome: "rafael",
        idade: 20,
        telefone: 123,
        amigo: ["joão", "carlos", "ana", "thamyres"]
    },
    {
        nome: "rafael",
        idade: 20,
        telefone: 123,
        amigo: ["joão", "carlos", "ana", "thamyres"]
    },
    {
        nome: "rafael",
        idade: 20,
        telefone: 123,
        amigo: ["joão", "carlos", "ana", "thamyres", "thiago"]
    }]

// 19 - Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigo[0])
console.log(cadastro[1].amigo[1])
console.log(cadastro[2].amigo[2])
console.log(cadastro[3].amigo[3])
console.log(cadastro[4].amigo[4])
