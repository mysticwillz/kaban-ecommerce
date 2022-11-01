import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { db } from "./Firebase.js";

function GoogleAuth() {
  const navigate = useNavigate();
  async function handleGoogleButton() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      // check for the user (i.e if user is already existing in the database)
      const docRef = doc(db, "users", user.uid);

      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
        navigate("/");
      }
    } catch (error) {
      toast.error("could not authorize with google");
    }
  }

  return (
    <div className="flex justify-between">
      <button
        onClick={handleGoogleButton}
        type="button"
        className="w-[100%] border-sm py-[ 10px] google-btn flex items-center justify-center"
      >
        {" "}
        <FcGoogle className="mx-1" /> Google
      </button>
    </div>
  );
}

export default GoogleAuth;
