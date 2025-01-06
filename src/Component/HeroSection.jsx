import React from "react";
import { useState, useEffect } from "react";

import useUserData from "./useUserData";
import "../assets/Css/Main.css";
// import { width } from "@fortawesome/free-solid-svg-icons/fa0";
const HeroSection = () => {
  var user = useUserData();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  const boxStyle = user.id === 1 
  ? {width:"75%" } 
  : user.id === 2 
  ? {width:"90% "} 
  : { backgroundColor: "gray", color: "black" };


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    // إضافة حدث تغيير الحجم
    window.addEventListener("resize", handleResize);

    // تنظيف الحدث عند الخروج
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        <div className="container hero">
          <div className="row justify-content-around ">
            <div className="col-lg-5 col-12 content">
              <h1>
                Hello, I'm <span>{user.name}</span>, {user.jobTitle}
              </h1>
              <div>
                <button>Get Start</button>
              </div>
              {/* <p>{user.objective}</p> */}
            </div>
            <div className="col-lg-6 col-12 imgHero">
              <img src={user.img[0]} style={boxStyle}></img>
              <img
                // src="Imgs/fB.png"
                src={isMobile ? "Imgs/CB.png" : "Imgs/fB.png"} className="back"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
