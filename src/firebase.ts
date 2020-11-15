import firebase from 'firebase'; 

import { configFirebase } from './types';
    const config : configFirebase = {
    apiKey: "AIzaSyBJAwnltrjPIj_kR5DFHtf3_y-vvZu609Q",
    authDomain: "expense-tracker-f26ea.firebaseapp.com",
    databaseURL: "https://expense-tracker-f26ea.firebaseio.com",
    projectId: "expense-tracker-f26ea",
    storageBucket: "expense-tracker-f26ea.appspot.com",
    messagingSenderId: "1065188602666",
    appId: "1:1065188602666:web:5c2502883c7adfc9312453"
    };

    firebase.initializeApp(config);

    export default firebase;