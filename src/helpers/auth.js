import firebaseApp from "../services/firebase";

export function signup(email, password) {
  return firebaseApp().createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
  return firebaseApp().signInWithEmailAndPassword(email, password);
}

export function signInWithGoogle() {
  const provider = new firebaseApp.GoogleAuthProvider();
  return firebaseApp().signInWithPopup(provider);
}
