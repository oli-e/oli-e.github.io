 const auth = firebase.auth();

  function LogOut(){
    auth.signOut();
    alert("Signed Out");
  }

