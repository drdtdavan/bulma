
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
  .catch(function (error) {
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
  card.style.cla = 'card container';
  card.innerHTML =
    `<div class='card header'>
  <img class='avatar' src="https://firebasestorage.googleapis.com/v0/b/yimikusasa.appspot.com/o/profilepics%2FJ9CtCcNEwVObXcULU5UyAD15z4r1-1.webp?alt=media&token=4e504f8f-c19a-40c3-81ce-291aed33136a">
  <div>
    <p class='card header lb'>${data.nickname}</p>
    <p class='card header m'>${data.school}</p>
    <p class='card header m'>${data.grade}</p>
  </div>
</div>
<p class="card title">${data.title}</p>
<div class="card body">
  <!-- <img src="https://firebasestorage.googleapis.com/v0/b/yimikusasa.appspot.com/o/articles%2FbeRfGHgVJLyXVGhJSdRx.png?alt=media&token=31b73dc1-ea76-4d54-9db8-ca399dc1d792"alt=""> -->
  <p>${data.body}</p>
</div>
<div class="card footer">
  <button class="reply">
    <span class="icon-reply"></span>
    <span>Reply</span>
  </button>
  <button class="comments">
    <span class="icon-comments"></span>Comments
  </button>
</div><hr>      `;
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