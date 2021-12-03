import React from "react";
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import Carousel from '../../components/carousel/carousel';


function Home(params) {
  return (
    <>
      <div className="d-flex h-100 text-dark">
        <Nav/>
          <div className="cover-container d-flex w-100 h-100 p-0 mx-auto flex-column">               
            <Carousel/>
          </div>
        <Footer/>
      </div>
    </>
  );
}

export default Home;
