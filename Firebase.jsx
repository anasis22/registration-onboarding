import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB5cWQUeXVxxtGyiHNjuAsNyORUQRtqWk0",
    authDomain:"registration-onboarding.firebaseapp.com" ,
    projectId: "registration-onboarding",
    storageBucket: "registration-onboarding.appspot.com",
    messagingSenderId: "63742999474",
    appId: "1:63742999474:web:146a509b8e6edcb00702ab",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)