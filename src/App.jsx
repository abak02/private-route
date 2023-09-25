import { createContext, useState } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import PublicPage from "./Components/PublicPage/PublicPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivatePage from "./Components/PrivatePage/PrivatePage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
} from "firebase/auth";
import firebaseConfig from "./firebase.config";
import { redirect } from "react-router-dom";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const app = initializeApp(firebaseConfig);

  const handleSignOut = () => {
    const auth = getAuth(app);

    signOut(auth)
      .then(() => {
        setLoggedInUser({});
        if(!loggedInUser.email){
          redirect('/')
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <userContext.Provider
        value={[loggedInUser, setLoggedInUser, handleSignOut]}
      >
        {loggedInUser.email ? <h3>Logged In : {loggedInUser.name}</h3> : <></>}
        <Router>
          <Routes>
            <Route path="/" element={<PublicPage></PublicPage>} />
            <Route path="/login" element={<Login></Login>} />
            <Route
              path="/private"
              element={
                <PrivateRoute>
                  <PrivatePage></PrivatePage>
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </userContext.Provider>
    </>
  );
}

export default App;
