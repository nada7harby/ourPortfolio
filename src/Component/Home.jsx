import About from "./About";
import Experience from "./Experience";
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
      <Experience />
    </>
  );
}
export default Home;
