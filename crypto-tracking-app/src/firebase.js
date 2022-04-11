import { initializeApp } from "firebase/app"
import Firebaseconfig from "./Config/Firebaseconfig"
import getAuth from "firebase/auth"
import getFirestore from "firebase/firestore"

const firebaseApp =initializeApp(Firebaseconfig)

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export {auth,db};

