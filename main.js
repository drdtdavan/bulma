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
var email = "dr.dtdavan@gmail.com";
var password = "123456";
firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(errorMessage);
  });
setTimeout(getUsers, 5000);
console.log(db);
function createCard(data) {
    console.table(data);
  var card = document.createElement("div");
  card.innerHTML =
    `<div class='card header'><img class='avatar' src=${data.profileUrl}></div>`;
  return card;
}
function getUsers() {
  var main = document.getElementsByTagName("main")[0];
  db.collection("topics-Maths")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        main.appendChild(createCard(doc.data()));
      });
    });
}
