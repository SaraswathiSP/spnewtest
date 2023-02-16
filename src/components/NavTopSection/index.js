import "./index.css";
import { BsClock, BsTwitter, BsInstagram } from "react-icons/bs";
import { AiOutlineMail, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

const Navbar = () => (
  <div className="nav-top-section d-flex flex-row justify-content-space-around">
    <div className="contact-info d-flex flex-row">
      <div className="time-info d-flex">
        <BsClock />
        <h1>We are open 24/7</h1>
      </div>
      <div className="email-info d-flex">
        <AiOutlineMail />
        <p>maha23@gmail.com</p>
      </div>
    </div>
    <div className="icons-container d-flex">
      <BsTwitter />
      <AiFillLinkedin />
      <AiFillFacebook />
      <BsInstagram />
    </div>
  </div>
);

export default Navbar;
