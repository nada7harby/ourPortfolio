import React from "react";
import useUserData from "./useUserData";
import "../assets/Css/Hero.css"
const HeroSection = () => {
  var user = useUserData();
  const imageSrc = user.id === 2 
  ? "Imgs/nada.png" 
  : "Imgs/bakr.png";
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div>
    <div className="container hero">
      <div className="row justify-content-around ">
        <div className="col-lg-6 content">
          <h1>
            Hello, I'm {user.name}, {user.jobTitle}
          </h1>
         <div>
         <button>Get Start</button>
         </div>
          {/* <p>{user.objective}</p> */}
        </div>
        <div className="col-lg-5 imgHero">
          <img src={imageSrc}></img>
          <img src="Imgs/fB.png" className="back"></img>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default HeroSection;
