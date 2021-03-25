if (localStorage.getItem("uid") === null) {

  /////logIn
  signIn = () => {
    var username = document.getElementById('user-name').value
    var userpass = document.getElementById('user-pass').value

    firebase.auth().signInWithEmailAndPassword(username, userpass).then((success) => {
      var user = firebase.auth().currentUser
      if (user != null) {
        //storing user info
        localStorage.setItem("email", user.email)
        localStorage.setItem("uid", user.uid)
        
        window.location.replace("index.html")
      }
      else {
        window.location.replace("signin.html")
      };
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

  fbLogin = () => {
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // The signed-in user info.
        var user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var accessToken = credential.accessToken;

        if (user != null) {
          //storing user info
          localStorage.setItem("email", user.email)
          localStorage.setItem("uid", user.uid)

          window.location.replace("index.html")
        }
        else {
          window.location.replace("signin.html")
        };

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        // ...
      });
  }

  //////signUp
  signUp = () => {
    var email = document.getElementById('user-name').value
    var password = document.getElementById('user-pass').value
    var confirmpass = document.getElementById('user-c-pass').value
    if (password === confirmpass) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((success) => {
          // Signed in
          var user = firebase.auth().currentUser
          if (user != null) {
            //storing user info
            localStorage.setItem("email", user.email)
            localStorage.setItem("uid", user.uid)
            
            window.location.replace("index.html")
          }
          else {
            window.location.replace("signin.html")
          }
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage)
          // ..
        });
    }
    // else {
    //   console.log("Pass Error");
    // }
  }



}
else {
  window.location.replace("index.html")
}