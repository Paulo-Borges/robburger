function logar() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(email == 'borgespaulo72@yahoo.com.br' && senha == 'Layng2022'){
        alert('Sucesso!');
        location.href = 'bebidas.html';

    }else{
        alert('email ou senha incorreto!')
    }
}

