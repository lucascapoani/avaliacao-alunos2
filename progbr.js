function criarAluno(nome, n1, n2){
    return{
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function (){
            return (this.nota1 + this.nota2) / 2;
        }
    }
}

var turma = [
    criarAluno("Lucas", 9, 8),
    criarAluno("Bruno", 3, 6),
    criarAluno("Paula", 8, 6)
]

var aluno = turma[2];

for (var aluno of turma){
    console.log(aluno.nome + " - " + aluno.media());
}
