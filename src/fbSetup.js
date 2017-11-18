import firebase from 'firebase'

export const appName = 'advreact-1610-9cb0c'

firebase.initializeApp({
    apiKey: "AIzaSyBNaOQkLL75ZGoeaNtqbe63wEjjWLzLOPY",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: `${appName}.appspot.com`,
    messagingSenderId: "266748171955"
})
