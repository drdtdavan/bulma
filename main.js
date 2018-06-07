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
    db.collection("topics-Maths").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            var cardHeader=document.createElement('div');                     
            cardHeader.className="card header";
            cardHeader.innerText=doc.data()['nickname'];
            var cardContent=document.createElement('div');                     
            cardContent.className="card content";
            cardContent.innerText=doc.data()['body'];
            var main=document.getElementsByTagName('main')[0];   
            main.appendChild(cardHeader);
            main.appendChild(cardContent);
        });
    });
}