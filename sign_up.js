const auth = firebase.auth();

const email = document.querySelector("#email");
const password = document.querySelector("#password");

const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", function (e) {
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);

  
  promise.catch((error) => {
    e.preventDefault();
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert(errorMessage);
    if (errorCode!=""){
      const form = document.querySelector('#login-form');
      form.action = "sign_up.html";
      form.submit();
      }
  });

});
