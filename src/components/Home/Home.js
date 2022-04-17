import React, { useEffect, useState } from "react";
import Package from "../Package/Package";
import Reviwe from "../reviwe/Reviwe";
import Footer from "../Shared/Footer";
import Banner from "./Banner";

const Home = () => {
  const [packags, setpackages] = useState([]);
  useEffect(() => {
    fetch("fakedata.json")
      .then((response) => response.json())
      .then((data) => setpackages(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="pt-10 grid md:grid-cols-3 gap-5 py10">
        {packags.map((packag) => (
          <Package key={packag.id} packag={packag}></Package>
        ))}
      </div>
      <Reviwe></Reviwe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
