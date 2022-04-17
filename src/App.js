import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Login from "./components/Auth/Login/Login";
import RequierAuth from "./components/Auth/RequierAuth/RequierAuth";
import Home from "./components/Home/Home";
import Services from "./components/Home/Services";
import Package from "./components/Package/Package";
import Header from "./components/Shared/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/package" element={<Package></Package>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route
          path="services"
          element={
            <RequierAuth>
              <Services></Services>
            </RequierAuth>
          }
        ></Route>
        <Route path="login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
