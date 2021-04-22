const auth = firebase.auth();

const email = document.querySelector("#email");
const password = document.querySelector("#password");

const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", function (e) {
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch((error) => {
    // e.preventDefault();
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert(errorCode);
    if (errorCode!=""){
      const form = document.querySelector('#login-form');
      form.action = "login.html";
      form.submit();
      }
  });

});

function LogInWithG(){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithRedirect(provider);
    alert("Signed Up!");
}
