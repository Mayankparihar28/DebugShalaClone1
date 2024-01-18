import React from "react";
import Hero from "../Hero/Hero";
import Cards from "../Cards/Cards";
import Why from  "../Why/Why";
import DataScience from "../DataScience/DataScience";
import MernStack from "../MernStack/MernStack";
import Testimonials from "../Testimonials/Testimonials";
import JavaDeveloper from "../JavaDeveloper/JavaDeveloper";
import FAQ from "../FAQ/FAQ";
function Home(){
  return(<>
    <Hero/>
    <Cards />
    <Why />
    <DataScience />
    <MernStack />
    <JavaDeveloper />
    <Testimonials />
    <FAQ />
    </>)
}
export default Home;