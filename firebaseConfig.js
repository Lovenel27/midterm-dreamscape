import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOcEQsAWRol2AYyjiddOgOp0o3T7kdTpU",
  authDomain: "dreamscape-2c5af.firebaseapp.com",
  projectId: "dreamscape-2c5af",
  storageBucket: "dreamscape-2c5af.appspot.com",
  messagingSenderId: "673505932021",
  appId: "1:673505932021:web:908c19d105d707cb62cbbc"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app); 
export { auth, db };
