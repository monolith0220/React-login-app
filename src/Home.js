import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const SignInButton = () => {
	const signInWithGoogle = () => {
		// firebaseを使ってグーグルでログイン
		signInWithPopup(auth, provider);
	};

	return (
		<button onClick={signInWithGoogle}>
			<p>グーグルでサインイン!!!!</p>
		</button>
	);
};

// サインアウト
const SignOutButton = () => {
	return (
		<button onClick={() => auth.signOut()}>
			<p>サインアウト</p>
		</button>
	);
};

// サインアウト
const UserInfo = () => {
	return (
		<div>
			<div className="userInfo">
				<img src={auth.currentUser.photoURL} alt="" />
			</div>
			<p>ログインしました！！！！</p>
		</div>
	);
};

export const Home = () => {
	const [user] = useAuthState(auth);

	return (
		<div>
			{user ? (
				<>
					<UserInfo />
					<SignOutButton />
				</>
			) : (
				<SignInButton />
			)}
		</div>
	);
};
