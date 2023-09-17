
const firebaseConfig = {
  apiKey: "AIzaSyDc8VzecsCtInJMQW5nlcgNWLpqUdk4VmQ",
  authDomain: "todo2-20e61.firebaseapp.com",
  projectId: "todo2-20e61",
  storageBucket: "todo2-20e61.appspot.com",
  messagingSenderId: "622108638137",
  appId: "1:622108638137:web:b8f59daad92b1f5c921468",
  measurementId: "G-RKBMV2702P"
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics(app);


const db = firebase.firestore(app);

window.db = db;

console.log("Firebase and Firestore initialized successfully!");


firebase.auth().signInAnonymously()
    .catch((error) => {
        console.error("Error during anonymous sign-in:", error);
    });


    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          // User is signed in
          const uid = user.uid;
          console.log("Anonymous user signed in with UID:", uid);
          
          // Load the todos for this user
          loadTodosFromDatabase(uid);
      } else {
          // User is signed out
          console.log("User is signed out");
      }
  });