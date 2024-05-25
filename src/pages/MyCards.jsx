import React from "react";
import { CardTable } from "../components/CardTable";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const MyCards = () => {
  return (
    <>
      <Header />
      <div className="mycard-area">
        <div className="container">
          <div className="poler-title flex items-center justify-between">
            <h2>My Cards (3)</h2>
            <a href="#" className="box-btn gd-btn">
              <span>Create new card</span>
            </a>
          </div>
          <CardTable />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyCards;
