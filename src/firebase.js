const config = {
  apiKey: "AIzaSyBq8u1toTA3Z_vdwT3KPIhrkxCL8U0ZS1I",
  authDomain: "find-waldo-2e955.firebaseapp.com",
  projectId: "find-waldo-2e955",
  storageBucket: "find-waldo-2e955.appspot.com",
  messagingSenderId: "391077041760",
  appId: "1:391077041760:web:9fa49da4d043b6e9f45505"
};


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}