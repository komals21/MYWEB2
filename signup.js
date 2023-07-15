function signup() {

    var requestBody = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
    };
    var restext = document.getElementById("responsets");
    restext.innerHTML="";
  
    var UN = document.getElementById("form__error-UN");
    var UNPS = document.getElementById("form__error-UNPS");
    UN.style.display = "none";
    UNPS.style.display = "none";
  
    fetch("https://yournoteserver.herokuapp.com/users", {
      method: "Post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
        //"Access-Control-Request-Method": "Post",
        "Access-Control-Request-Headers": "origin",
        'Origin': "https://yournoteserver.herokuapp.com/",
      },
      body: new URLSearchParams(requestBody),
    }).then((response) => {
      return response.json();
    }).then((response) => {
      console.log(response);
      if (response.err==='try a different username') {
        UN.style.display = "block";
      } else if (response.err==='username and password required') {
        UNPS.style.display = "block";
      } else if (response.username) {
        restext.innerHTML  = "Signed up succesfully";
      }
    });
  }