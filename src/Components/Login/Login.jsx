import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { userContext } from "../../App";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const [loggedInUser, setLoggedInUser, handleSignOut] = useContext(userContext);
  const app = initializeApp(firebaseConfig);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSignIn = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const newUser = {
          name: user.displayName,
          email: user.email,
        };
        setLoggedInUser(newUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={handleSignIn}>
        <FontAwesomeIcon style={{ color: "#1cc7c1", marginRight:'4px' }} icon={faGoogle} />
        Log In with Google
      </button>
    </div>
  );
};

export default Login;
