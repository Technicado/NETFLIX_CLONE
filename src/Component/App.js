import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../Styling/App.css";
import Homepage from "./Homepage";
import LoginPage from "./LoginPage";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../userSlice";
import ProfilePage from "./ProfilePage";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginPage />
        ) : (
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
