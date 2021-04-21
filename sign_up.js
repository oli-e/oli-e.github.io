const auth = firebase.auth();

const email = document.querySelector("#email");
const password = document.querySelector("#password");

const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", function () {
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  console.log(location);
  // location.replace("https://pros.rafalpietrzak.repl.co/home.html");
  console.log()
  window.alert("Signed Up!")
});


 auth.onAuthStateChanged(function(user) {
   if (user) {
     var email = user.email;
     window.alert();
     console.log('user logged in: ', user);
   } else {
     console.log('user logged out');
   }
 });
