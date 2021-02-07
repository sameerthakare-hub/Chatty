 import firebase from 'firebase';
 
 const config = {
     apiKey: "AIzaSyCrJRpQbDS6vu8CrO7durfRlrtFyTQsfhk",
     authDomain: "chatty-a5787.firebaseapp.com",
     databaseURL: "https://chatty-a5787.firebaseio.com"
 };

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db   = firebase.database();
