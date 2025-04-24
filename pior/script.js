/*var bor = 76;
console.log(`Hello`);
console.log(`olha meu amigo parece que sua idade é ${bor}`);

let idade = 22;
let altura = 1.65;
let peso = 80;
let verdadeiro = false;
let nome = "Nahtan de souza nunes";

console.log(`sua idade é ${idade}`);
console.log(`sua altura é ${altura}`);
console.log(`seu peso é ${peso}`);
console.log(typeof(idade));
console.log(typeof(false));

function mudarNome() {
    document.getElementById("p1").textContent = nome;
}
*/
let userName;
document.getElementById("enviar").onclick = function() {
    userName = document.getElementById("myText").value;
    console.log(userName);
}