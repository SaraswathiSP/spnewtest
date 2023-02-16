import {
  BsTelephonePlus,
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";

import { MdMarkEmailRead, MdPhoneIphone } from "react-icons/md";
import "./index.css";

const Footer = () => (
  <div className="footer">
    <div className="info1">
      <img
        src="https://fable.club/wp-content/uploads/2022/11/Fable-Club.svg"
        alt="fable"
      />
      <h1>
        We know pets are like family so we are committed to providing the
        highest-quality products & services that you can trust
      </h1>
      <div className="order">
        <BsTelephonePlus />
        <p>Hotline Order</p>
      </div>
      <h1>+91 9866666353</h1>
      <div className="icons-container">
        <div className="icons">
          <BsFacebook />
        </div>
        <div className="icons">
          <BsTwitter />
        </div>
        <div className="icons">
          <BsInstagram />
        </div>
        <div className="icons">
          <BsPinterest />
        </div>
      </div>
    </div>
    <div className="info-2">
      <h1>USEFUL LINKS</h1>
      <div className="links-info">
        <p>New Products</p>
        <p>Best Sellers</p>
        <p>Bundle & Save</p>
        <p>Online Gift Card</p>
        <p>Discount</p>
        <p>Pet Store Locator</p>
      </div>
    </div>
    <div className="info-2">
      <h1>MY ACCOUNT</h1>
      <div className="links-info">
        <p>New Products</p>
        <p>Best Sellers</p>
        <p>Bundle & Save</p>
        <p>Online Gift Card</p>
        <p>Discount</p>
        <p>Pet Store Locator</p>
      </div>
    </div>
    <div className="info-2">
      <h1>COMPANY</h1>
      <div className="links-info">
        <p>New Products</p>
        <p>Best Sellers</p>
        <p>Bundle & Save</p>
        <p>Online Gift Card</p>
        <p>Discount</p>
        <p>Pet Store Locator</p>
      </div>
    </div>
    <div className="info-2">
      <h1>NEWS LETTER</h1>
      <div className="links-info">
        <p>
          Subscribe & get 10% discount. Get email updates about our latest shop
          and <span>special offers</span>.
        </p>
        <div className="input-email">
          <input type="text" placeholder="Enter your email..." />
          <MdMarkEmailRead />
        </div>
        <div>
          <MdPhoneIphone />
          <h1>Download Our App</h1>
        </div>
        <div className="apps">
          <img
            src="https://res.cloudinary.com/dg0telgxq/image/upload/v1670595706/2022-12-09_pihti1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
