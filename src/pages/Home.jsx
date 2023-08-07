import About from "../Components/About/About";
import Hero from "../Components/Hero/Hero";
// import Navbar from "../Components/Navbar/Navbar";
import Count from "../Components/count/Count";
import Features from "../Components/features/Features";
import WhyUs from "../Components/whyUs/WhyUs";

const Home = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Hero></Hero>
      <About></About>
      <Count></Count>
      <WhyUs></WhyUs>
      <Features></Features>
    </div>
  );
};

export default Home;
