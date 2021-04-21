 const auth = firebase.auth();

  function LogOut(){
    auth.signOut();
    alert("Signed Out");
  }
  // auth.onAuthStateChanged(user => {
  // if (user) {
  //   console.log('user logged in: ', user);
  // } else {
  //   console.log('user logged out');}
  // })
