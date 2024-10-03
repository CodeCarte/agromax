
function logar(event){

    event.preventDefault();

    const email = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value

    if (email === "admin@hotmail.com" && senha === "admin" ) {

        alert("Sucesso");
        location.href = "../html/Dashboard.html";
    }

}

document.getElementById('login-form').addEventListener('submit', logar);