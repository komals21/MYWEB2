function login(){
    var requestBody={
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
    }
    var respo = document.getElementById("form__error-var");
    fetch("https://yournoteserver.herokuapp.com/users/login",{
        method:"Post",
        body: new URLSearchParams(requestBody),
        headers:{
            'Content-type': 'application/x-www-form-urlencoded',
                            'Access-Control-Request-Method': 'Post',
                            'Access-Control-Request-Headers': 'origin',
                            'Origin': 'https://yournoteserver.herokuapp.com/',
        }
    }).then((response) => {
        return response.json();
    }).then((response) => {
        console.log(response);
        if(response.err === "user not found"){
            respo.innerHTML="User not found";
            respo.style.color="red";
        }
        else if(response.err === "incorrect password"){
            respo.innerHTML="Incorrect password";
            respo.style.color="red";
        }
        else if(response.success){
            respo.innerHTML="Login successful";
            respo.style.color="green";
        }
        console.log(respo);
    })
    }