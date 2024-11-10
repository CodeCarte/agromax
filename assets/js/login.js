const loginForm = document.getElementById('login-form')
const senha = document.getElementById("senha");
const icon = document.getElementById("icon");
const emailAdm = 'admin@hotmail.com'
const passwordAdm = 'admin'
const emailInput = document.getElementById('usuario')
const passwordInput = document.getElementById('senha')

function showHide(){
    if(senha.type === "password"){
    senha.setAttribute('type','text');
    icon.classList.add('hide')
}else{
    senha.setAttribute('type','password');
    icon.classList.remove('hide') 
    }
}

loginForm.addEventListener('submit', (ev) => {
    if(emailInput.value !== emailAdm && passwordInput !== passwordAdm) {
        alert("Email ou senha de admin incorretas:\n\nAdmin: admin@hotmail.com\nSenha: admin");
        confirm('Deseja preencher automaticamente?')
        if(confirm) {
            emailInput.value = emailAdm
            passwordInput.value = passwordAdm
        }
        ev.preventDefault()
    }
})