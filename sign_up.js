const auth = firebase.auth();

const email = document.querySelector("#email");
const password = document.querySelector("#password");

const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", function () {
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);

  
  promise.catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert(errorMessage);
    // preventdefault
  });

});
