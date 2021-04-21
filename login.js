const auth = firebase.auth();

function LogIn(){
    const email = document.querySelector("#username");
    const password = document.querySelector("#password");

    console.log(password.value, email.value);
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Signed Up!" + email.value);
    location.replace("https://pros.rafalpietrzak.repl.co/home.html");

    //if location.replace("https://pros.rafalpietrzak.repl.co/home.html?username=&password=");
    
}

// function LogInWithG(){
//     var provider = new firebase.auth.GoogleAuthProvider();
//     provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
//     firebase.auth().signInWithRedirect(provider);
//     alert("Signed Up!");
// }

// auth.onAuthStateChanged(user => {
//     if (user) {
//       // var email = user.email;
//       console.log('user logged in: ');
//       location.replace("https://pros.rafalpietrzak.repl.co/home.html?email=${email}&password=${password}");
//     } else {
//       location.replace("https://pros.rafalpietrzak.repl.co/home.html?email=${email}&password=${password}");
//       console.log('user logged out');
//     }
// // });"https://pros.rafalpietrzak.repl.co/sign_up.html?email=${email}&password=${password}"

// -> https://pros.rafalpietrzak.repl.co/sign_up.html?email=olichkachorna%40gmail.com&password=password1234


// https://pros.rafalpietrzak.repl.co/home.html?data=