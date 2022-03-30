import { getAuth, signInWithPopup, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signin(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

export function signInWithGitHub() {
const provider = new GithubAuthProvider();
  return signInWithPopup(auth, provider)
}
