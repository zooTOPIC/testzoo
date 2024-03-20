import React from "react";
import Developer from "../components/Developer";
import developersData from "../data/developersData.json";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Developers() {
  return (
    <div>
      <Header developersData={developersData} />
      {developersData.map((developer) => (
        <div id={developer.id} key={developer.id}>
          <Developer {...developer} />
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Developers;

