const senha = document.getElementById("senha");
      const icon = document.getElementById("icon");
  
      function showHide(){
        if(senha.type === "password"){
          senha.setAttribute('type','text');
          icon.classList.add('hide')
        }else{
          senha.setAttribute('type','password');
          icon.classList.remove('hide') 
        }
      }