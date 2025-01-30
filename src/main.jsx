import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Bba from "./components/Departments/Bba.jsx";
import Cse from "./components/Departments/Cse.jsx";
import Departments from "./components/Departments/Departments.jsx";
import Eee from "./components/Departments/Eee.jsx";
import English from "./components/Departments/English.jsx";
import Law from "./components/Departments/Law.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import "./index.css";
import UserDetails from "./components/Departments/UserDetails.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/department" element={<Departments />} >
          <Route path="/department/:id" element={<Departments />} />
          <Route path="/department/cse" element={<Cse />} />
          <Route path="/department/eee" element={<Eee />} />
          <Route path="/department/bba" element={<Bba />} />
          <Route path="/department/english" element={<English />} />
          <Route path="/department/law" element={<Law />} />
          
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Login />} />
        <Route path="/department/user/:id" element={<UserDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
