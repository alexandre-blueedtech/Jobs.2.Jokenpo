const chalk = require ('chalk');
const figlet = require('figlet');
const prompt = require(`prompt-sync`)(); 

figlet('JOKENPO', (err, result) =>  {
  console.log(err ||result)
});

console.clear();
console.log();
const listaDoJogo = ["PEDRA", "PAPEL", "TESOURA"];

console.log(chalk.bgGreen.black(`OLA EU SOU JARVES SEU ASSISTENTE VIRTAL`));
const nome = prompt("Digite seu nome senhor: ");
console.clear();

console.log(chalk.bgGreen.black(
  `Bem vindo Senhor ${nome}. Parabéns pela cerimonia de abertura foi um sucesso, assim como sua audiancia no senado. Eu digo que é animador ver o senhor por aqui. `
));
console.log(chalk.bgGreen.black("O jogo escolhido para esse manhã é JokenPô"));
console.log();

console.log(chalk.bgGreen.black(
  "funciona assim: a tesoura corta o papel, mas quebra com a pedra; o papel embrulha a pedra, mas é cortado pela tesoura e a pedra quebra a tesoura e é embrulhada pelo papel."
));
console.log();

let ganhou = 0;
let perdeu = 0;
let empatou = 0;
let resposta = "";

//Permitir que eu decida quantas rodadas iremos fazer;
while (resposta != "nao" && resposta != "n") {
  console.log(chalk.bgGreen.black("Quantas rodadas iremos jogar ?"));
  let rodadas = +prompt();
  for (let contador = 1; contador <= rodadas; contador++) {
    console.log(chalk.bgGreen.black("Essa é a Rodada numero:", contador));

    //Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo);
    console.log("Esta é a lista");

    console.log(listaDoJogo);
    console.log(chalk.bgGreen.black(`${nome} escolha um item da lista acima: `));
    const player = prompt().toUpperCase();
    let pc = listaDoJogo[Math.floor(Math.random() * listaDoJogo.length)];
    console.log(pc);
    if (player === "PEDRA" && pc === "TESOURA") {
      console.log("Você ganhou!");
      ganhou++;
    } else if (player === "PEDRA" && pc === "PAPEL") {
      console.log(chalk.bgRedBright.black("Você perdeu!"));
      perdeu++;
    } else if (player === "PEDRA" && pc === "PEDRA") {
      console.log("Empatou!");
    }
    if (player === "PAPEL" && pc === "TESOURA") {
      console.log("Você ganhou!");
      ganhou++;
    } else if (player === "PAPEL" && pc === "TESOURA") {
      console.log(chalk.bgRedBright.black("Você perdeu!"));
      perdeu++;
    } else if (player === "PAPEL" && pc === "PAPEL") {
      console.log("Empatou!");
    }
    if (player === "TESOURA" && pc === "PAPEL") {
      console.log("Você ganhou!");
      ganhou++;
    } else if (player === "TESOURO" && pc === "PEDRA") {
      console.log(chalk.bgRedBright.black("Você perdeu!"));
      perdeu++;
    } else if (player === "TESOURA" && pc === "TESOURA") {
      console.log("Empatou!");
    }}
    if (ganhou > perdeu) {
      console.log(`${nome} Você é o grande campeão e fez ${ganhou} ponto`);
    } else if (ganhou < perdeu) {
      console.log(`O PC jarvas ganhou e fez ${ganhou} ponto`);
    } else {
      console.log(`empate entre ${nome} e o PC`);
    }
    console.log(ganhou);
    console.log(chalk.bgRedBright.black(perdeu));

    console.log(chalk.blue("Deseja continuar"));
    resposta = prompt().toLowerCase()
  }

