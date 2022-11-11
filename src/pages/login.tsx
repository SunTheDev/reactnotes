import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate("/");
  };

  return (
    <div>
      <p style={{ color: "rgb(52, 93, 123)" }}>Select Login Method Below...</p>
      <button className="googleSignIn" onClick={signInWithGoogle}>
        Sign In with Google
      </button>
    </div>
  );
};
