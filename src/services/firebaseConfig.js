import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBlD7dCEwiNc5rV9W_h6Yco_iEPeM4vBx0",
  authDomain: "tccc-df76b.firebaseapp.com",
  databaseURL: "https://tccc-df76b.firebaseio.com",
  projectId: "tccc-df76b",
  storageBucket: "tccc-df76b.appspot.com",
  messagingSenderId: "375255559758",
  appId: "1:375255559758:web:df9380558a2f94c06edd1f",
  measurementId: "G-DN1J9TVG36"
};

firebase.initializeApp(firebaseConfig);
export default firebase.database();
