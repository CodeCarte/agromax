document.querySelector('.token-button').addEventListener("click", function(event) {
event.preventDefault();

const tokenInput = document.getElementById('token-input');

const token = tokenInput.value;

const tokenFormat = /^[A-Z]{3}-\d{4}-[A-Z]{2}$/;

if (tokenFormat.test(token)) {

    alert("Token confirmado com sucesso!");
    alert("Por favor aguarde...");

    document.querySelector('main').style.display = 'none';

    document.getElementById('loading-screen').style.display = 'flex';
      
    setTimeout(function() {
        alert("Coletando Dados...");
        alert("Redirecionando para a Página de Dados...");
        
    setTimeout(function() {
        window.location.href = "./Graficos.html";
        }, 1000);

      }, 2000);

    } 

    else {
      alert("Token inválido! Por favor, insira um token no formato correto.");
    }
  });