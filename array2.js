let nome = ['Alessandra', 'Laise', 'João']
let telefone = [9999887889, 99999995678, 981917161]
let alunos_agenda = [nome,telefone]


function pegar_telefone(nome){
    let aluno = alunos_agenda[0]
    let telefone = alunos_agenda[1]

    if(aluno.includes(nome)){
        let indice = aluno.indexOf(nome)
        console.log(telefone[indice])
    }
    else{
        console.log('Aluno não encontrado')
    }
}
console.log(
    'Existem $(alunos_agenda[0].length) alunos na lista'
)
{
alunos_agenda[0].push('Moises')
alunos_agenda[1].push(989898999)
console.log(nome)
console.log(telefone)
console.log(alunos_agenda)
pegar_telefone('Laise')
}
function exibir_agenda(){
    let aluno = alunos_agenda[0]
    let telefone = alunos_agenda[1]
     let tamanho = aluno.length

     for(posicao=0;posicao < tamanho;posicao++){
        console.log(
            ${aluno[posicao]} : {telefone[posicao]}
        )
     }
}
function cadrastra_agenda(){
    let aluno = alunos_agenda[0]
    let telefone = alunos_agenda

    const prompt = require("prompt-sync")();

    let input = prompt("Qual o nome do aluno?");
    aluno.push(input)

    if(aluno.includes(input)){
        input = prompt("Qual o elelfone do aluno?")
        telefone.push(input)
    }
    else{
    console.log('Erro ao cadrastrar')
    }
}
cadrastra_agenda()
pegar_telefone('moises')
exibir_agenda()
