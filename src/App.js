import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Login/Register";
import RequierAuth from "./components/Auth/RequierAuth/RequierAuth";
import Blogs from "./components/Blogs/Blogs";
import Checkout from "./components/checkout/Checkout";
import Home from "./components/Home/Home";
import Notfound from "./components/notfound/Notfound";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>

        <Route
          path="/checkout"
          element={
            <RequierAuth>
              <Checkout></Checkout>
            </RequierAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
