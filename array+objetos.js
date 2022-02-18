let Usuarios = parseFloat(prompt('Quantos usuários você deseja cadastrar?'))
let lista = []

for (let i = 1; i <= Usuarios; i++) {

    let dados = {
        nome: '',
        CPF: 0,
        nascimento: 0
    }

    dados.nome =(prompt('Digite seu nome.'))
    dados.CPF =(prompt('Digite seu CPF.'))
    dados.nascimento =(prompt('Digite sua data de nascimento.'))

    lista.push(dados);
}

console.log(lista)

for (let a of lista) {
    document.write(`${a.nome} <br>`,`${a.CPF} <br>`, `${a.nascimento} <br> <hr>`)
}