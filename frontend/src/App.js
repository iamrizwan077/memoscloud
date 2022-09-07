import "./styles.css";
import NavFoot from "./NavFoot";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./Gallery";
import Landing from "./Landing";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Profile from "./Profile";
import Home from "./Home";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavFoot />}>
          <Route index element={<Landing />} />
          <Route path="home" element={<Home />} />

          <Route path="gallery" element={<Gallery />} />
          <Route path="accounts/signin" element={<SignIn />} />
          <Route path="accounts/signup" element={<SignUp />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
