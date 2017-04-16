import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyDBCKrGNaP4OZ28oFHDh3ryXiu-96pkDUw",
    authDomain: "lahma-ef943.firebaseapp.com",
    databaseURL: "https://lahma-ef943.firebaseio.com",
    projectId: "lahma-ef943",
    storageBucket: "lahma-ef943.appspot.com",
    messagingSenderId: "832486922905"
};

export const firebaseAuthConfig = {
  provider: AuthProviders.Custom,
  method: AuthMethods.Popup
};