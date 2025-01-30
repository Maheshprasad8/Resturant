import React from "react";
// import "../App.css";
import Navbar from "./Navbar";
const Herosection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar/>
      <div className="container">
        {/* First Banner */}
        <div className="banner">
          <div className="largebox">
            <h1 className="title">Delicious</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="/hero1.png" alt="hero1" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Food</h1>
                {/* <h1 className="title_dishes">Dishes</h1> */}
                {/* <img src="threelines.svg" alt="three" /> */}
              </div>
              {/* <img src="logo.png" alt="logo" className="logo" /> */}
            </div>
          </div>
        </div>

        {/* Second Banner */}
        <div className="banner">
          <div className="imageBox">
            <img src="/hero2.png" alt="hero2" />
          </div>
          <h1 className="title dishes_title">Dishes</h1>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
