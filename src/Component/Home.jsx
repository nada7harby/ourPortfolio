import About from "./About";
import HeroSection from "./HeroSection";
import Navbarr from "./Navbar";
import Skills from "./Skills";

function Home() {
  return (
    <>
      <Navbarr></Navbarr>
      <HeroSection></HeroSection>
      <About></About>
      <Skills />
    </>
  );
}
export default Home;
