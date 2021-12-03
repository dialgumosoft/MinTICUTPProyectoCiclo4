import React from "react";
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import Carousel from "../../components/carousel/carousel";

function Home(params) {
  return (
    <>
      <Nav />
      <Carousel />
      <Footer />
    </>
  );
}

export default Home;
