import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function BeforeNav() {
  return (
    <>
      <div className="hidden sm:flex w-[100%] px-12 justify-between overflow-hidden text-white font-sans h-16 items-center">
        <div className="flex">
          <a
            href="mailto:contact@debugshala.com"
            className="flex items-center text-body-text-regular"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            contact@debugshala.com&nbsp;&nbsp;
          </a>
          <a href="tel:+918982385539" className="flex items-center text-body-text-regular">
          <FontAwesomeIcon icon={faPhone} className="mr-2" />
          +918982385539
        </a>
        </div>
        <div><h1>Get Internship Opportunity with Debugshala</h1></div>
        <div>
          <div className="topbarsociallinks">
            <a
              href="https://www.facebook.com/debugshala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-text-regular mr-2"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://twitter.com/debugshala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-text-regular mr-2"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.youtube.com/@debugshala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-text-regular mr-2"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://www.instagram.com/debugshala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-text-regular"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>

          <a
            href="https://www.facebook.com/debugshala"
            target="_blank"
            className="text-body-text-regular"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com/debugshala"
            target="_blank"
            className="text-body-text-regular"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.youtube.com/@debugshala"
            target="_blank"
            className="text-body-text-regular"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://www.instagram.com/debugshala"
            target="_blank"
            className="text-body-text-regular"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </>
  );
}
export default BeforeNav;
