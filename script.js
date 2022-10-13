function greetMe() 
  {alert("Bem vindo ao Trivia sobre Greys Anatomy!")}
greetMe(); 

var button = document.querySelector('button');

button.onclick = function() {
  var nome = prompt('Qual é o seu nome?');
  alert('Olá ' + nome + ', é um prazer te ver!');
}

function funcao2(){
if (document.querySelector("input[name = principal]:checked").value=="1"){
alert("Parabens, sua resposta está certa.");
}
else {
  alert("Tente novamente.");
}
}

function funcao3(){
if (document.querySelector("input[name = Mcdreamy]:checked").value=="1"){
alert("Parabens, sua resposta está certa.");
}
else {
  alert("Tente novamente.");
}
}

function funcao1(){
if (document.querySelector("input[name = Acidente]:checked").value=="1"){
alert("Parabens, sua resposta está certa.");
}
else {
  alert("Tente novamente.");
}
}

var inputs = document.querySelectorAll('input[type="radio"]');
for (var i = 0, l = inputs.length; i < l; i++){
    inputs[i].checked = false;
}