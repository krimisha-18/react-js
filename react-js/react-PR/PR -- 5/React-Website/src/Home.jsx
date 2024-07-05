import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Header from "./Component/Header/Header";
import Slider from "./Component/Slider/Slider";
import Cake from "./Component/cake/Cake";
import Popular from "./Component/Popular-Product/Popular";
import Product from "./Component/Product-banner/Product";
import Service from "./Component/247 Services/Service";
import Counter from "./Component/Counter-Slider/Counter";
import Testimonial from "./Component/Testimonial/Testimonial";
import People from "./Component/Great-Word/Great";
import Latest from "./Component/Latest-News/Latest";
import Footer from "./Component/Footer/Footer";

const Home = () => {
  return (
<>
      <Header />
      <Navbar />
      <Slider />
      <Cake />
      <Popular />
      <Product/>
      <Service/>
      <Counter/>
      <Testimonial/>
      <People/>
      <Latest/>
      <Footer/>
    </>
  );
};

export default Home;
