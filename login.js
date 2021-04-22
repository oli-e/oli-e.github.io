const auth = firebase.auth();

function LogIn(){
    const email = document.querySelector("#username");
    const password = document.querySelector("#password");

    console.log(password.value, email.value);
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Signed Up!" + email.value);
   
}

function LogInWithG(){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithRedirect(provider);
    alert("Signed Up!");
}
