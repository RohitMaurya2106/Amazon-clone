import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyDJfUura8853ZSM931OPo0ysZdK1_1zzfg",
        authDomain: "clone-ed8da.firebaseapp.com",
        databaseURL: "https://clone-ed8da.firebaseio.com",
        projectId: "clone-ed8da",
        storageBucket: "clone-ed8da.appspot.com",
        messagingSenderId: "1026229626246",
        appId: "1:1026229626246:web:0b97e064f1051c046f7807",
        measurementId: "G-2XWRQDHX6N"

});


const auth = firebase.auth();

export { auth };