var config = {
    apiKey: "AIzaSyAKNXfgIH5O82jNFw7UFS-umPvjt4u_5us",
    authDomain: "yimikusasa.firebaseapp.com",
    databaseURL: "https://yimikusasa.firebaseio.com",
    projectId: "yimikusasa",
    storageBucket: "yimikusasa.appspot.com",
    messagingSenderId: "426917757022"
};
firebase.initializeApp(config);
var db = firebase.firestore();
var email = 'dr.dtdavan@gmail.com'
var password = '123456'
firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(errorMessage)
});
setTimeout(getUsers, 5000);
console.log(db);

function getUsers() {
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            var el=document.createElement('div');
            el.innerText=doc.data()['nickname'];
            document.body.appendChild(el);
        });
    });
}