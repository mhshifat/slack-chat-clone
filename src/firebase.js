import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyC9KR2v1DqVHWbwrMpLSpExNjS1snlwLMo",
  authDomain: "slack-chat-app-f9a05.firebaseapp.com",
  databaseURL: "https://slack-chat-app-f9a05.firebaseio.com",
  projectId: "slack-chat-app-f9a05",
  storageBucket: "slack-chat-app-f9a05.appspot.com",
  messagingSenderId: "1010494056415"
};
firebase.initializeApp(config);

export default firebase;
