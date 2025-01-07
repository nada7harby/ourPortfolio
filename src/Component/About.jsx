import "../assets/Css/Main.css";
import useUserData from "./useUserData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  var user = useUserData();
  if (!user) {
               return <div>Loading...</div>;
             }
  return (
    <>
      <div className="About">
        <div className="position-relative d-flex justify-content-center align-items-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "2px #dee2e6" }}
          >
            About
          </h1>
          <h1 className="position-absolute text-uppercase word">About</h1>
        </div>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 aboutImg">
              <div>
                <img src={user.img[1]}/>
              </div>
              <h2>{user.jobTitle}</h2>

              <div className="contact">
                <a
                  href={user.contacts.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </span>
                </a>
                <a
                  href={user.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <FontAwesomeIcon
                      icon={faSquareGithub}
                      size="2x"
                      className="icon"
                    />
                  </span>
                </a>
                <a
                  href={user.contacts.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </span>
                </a>
                <a
                  href={user.contacts}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-7  aboutContent">
              <h1>{user.name}</h1>
              <p>{user.objective}</p>
              <div>
                <button>Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
