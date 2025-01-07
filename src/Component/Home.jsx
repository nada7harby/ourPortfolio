import About from "./About";
import HeroSection from "./HeroSection";
import Navbarr from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

function Home() {
  return (
    <>
      <Navbarr></Navbarr>
      <HeroSection></HeroSection>
      <About></About>
      <Skills />
      <Projects/>
    </>
  );
}
export default Home;
