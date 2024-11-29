import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth(app);

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);

      // Corrected Content-Type header
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to authenticate with the server.");
      }

      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/"); // Navigate to the home page after successful login
    } catch (error) {
      console.error("Google Sign-In Error:", error.message || error);
    }
  };

  return (
    <Button
      className="text-white bg-gradient-to-br from-green-400 to-blue-600"
      outline
      type="button"
      onClick={handleGoogleClick}
    >
      <AiFillGoogleCircle className="mr-2 w-6 h-6" />
      Continue with Google
    </Button>
  );
}
