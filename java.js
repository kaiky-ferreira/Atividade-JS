let anoAtual = '2021';
let nome, texto, anoNascimento;
nome = prompt('Digite seu nome: ');
function idade (anoAtual, anoNascimento) {
    return anoAtual-anoNascimento;
}
let a = idade(2021, prompt('Digite seu ano de nascimento: '));
texto = alert(`Olá, seu nome é ${nome} e você tem ${a} anos`);