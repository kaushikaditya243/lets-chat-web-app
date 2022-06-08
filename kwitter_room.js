const firebaseConfig = {
    apiKey: "AIzaSyBRwixZEgTfoisO616qDjDedyruMgMS9iA",
    authDomain: "kwitter-984f3.firebaseapp.com",
    databaseURL: "https://kwitter-984f3-default-rtdb.firebaseio.com",
    projectId: "kwitter-984f3",
    storageBucket: "kwitter-984f3.appspot.com",
    messagingSenderId: "399144857749",
    appId: "1:399144857749:web:aaf9e20500cefcf056ab9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();