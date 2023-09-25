const firebaseConfig = {
    apiKey: "AIzaSyD2uCY1GZ9K095bBa2_vigvzpmAHVkmbPw",
    authDomain: "todo3-80482.firebaseapp.com",
    projectId: "todo3-80482",
    storageBucket: "todo3-80482.appspot.com",
    messagingSenderId: "379497087424",
    appId: "1:379497087424:web:d4f6d32b194b134c95c825",
    measurementId: "G-NKR5YHQ91T"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics(app);
const db = firebase.firestore(app);