import "./styles/global.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import PublicHomePage from "./pages/Home/PublicHomePage";
import { useState } from "react";
import HomePage from "./pages/Home/HomePage";
import ProfilePage from "./pages/Profile/ProfilePage";
import LoginPage from "./pages/Login/LoginPage";
import PrivateRoute from "./middleware/PrivateRoute";
import SignUpPage from "./pages/SignUp/SignUpPage";

function App() {
  const [auth] = useState(true);

  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route
          index
          element={
            auth ? <HomePage></HomePage> : <PublicHomePage></PublicHomePage>
          }
        ></Route>
        <Route path="login" element={<LoginPage></LoginPage>}></Route>
        <Route path="signup" element={<SignUpPage></SignUpPage>}></Route>

        <Route element={<PrivateRoute></PrivateRoute>}>
          <Route path="profile" element={<ProfilePage></ProfilePage>}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
