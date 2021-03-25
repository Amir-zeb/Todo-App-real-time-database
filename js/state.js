if (localStorage.getItem("uid") === null) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        //user credential
        // localStorage.setItem("displayName", user.displayName)
        // localStorage.setItem("email", user.email)
        // localStorage.setItem("uid", user.uid)
        console.log("done");
        // document.getElementById("display-name").innerHTML = localStorage.getItem("displayName")
        // document.getElementById("display-email").innerHTML = localStorage.getItem("email")
        
        // console.log("if");
        // console.log(localStorage.getItem('displayName'));
      } else {
        // No user is signed in.
        window.location.replace("signin.html")
      }
    });
  }
  // else {
  //   //console.log('else');
  //   // document.getElementById("display-name").innerHTML = localStorage.getItem("displayName")
  //   document.getElementById("display-email").innerHTML = localStorage.getItem("email")
  //   // document.getElementById("display-email").setAttribute("style", "font-size:10")
  // }
  
  
  // const logOut = () => {
  //   console.log("logout");
  //   localStorage.removeItem("uid");
  //   // localStorage.removeItem("displayName");
  //   localStorage.removeItem("email");
  //   firebase.auth().signOut();
  //   window.location.replace("signin.html")
  
  // }
