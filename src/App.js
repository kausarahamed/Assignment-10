import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Login from "./components/Auth/Login/Login";
import RequierAuth from "./components/Auth/RequierAuth/RequierAuth";
import Blogs from "./components/Blogs/Blogs";
import Checkout from "./components/checkout/Checkout";
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
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
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
