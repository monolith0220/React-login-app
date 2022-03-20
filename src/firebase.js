import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCW0UsQEaMepQOlVWRDB4aQFLE-hrnRLhY",
	authDomain: "fir-login-d90c5.firebaseapp.com",
	projectId: "fir-login-d90c5",
	storageBucket: "fir-login-d90c5.appspot.com",
	messagingSenderId: "694347741266",
	appId: "1:694347741266:web:6830000f33c7372bcf478b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
