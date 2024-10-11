let resultado;

const preco = 50;

if (preco < 40) {
  resultado = "Livro é barato.";
} else {
  resultado = "Livro não é barato.";
}

console.log(resultado);



const meuArray = [1,2,3]

const meuObjeto = {
   texto: "uma propiedade",
   numero: 34
}

let minha_var = "endereco"

function soma(a, b){
  return a + b;
}

const anonima = function (a, b){
  return a + b;
}

const arrow = (a, b) => {
  return a + b
}

const arrow2 = (a,b) => a + b;

const arrow3 = a => a + 2;

const dobro = (elemento) => (console.lpg(elemento * 2))