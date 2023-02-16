import "./index.css";
import { GiCottonFlower, GiCoins } from "react-icons/gi";
import { HiSpeakerphone } from "react-icons/hi";

const Section3 = () => (
  <section3 className="section3">
    <div className="section3-info">
      <h1>Our Services</h1>
      <p>****************</p>
      <p>
        Below is an excerpt of parch article Moving with Pets? We have the
        Experts Advice to do it properly.
      </p>
    </div>
    <div className="cards-info d-flex flex-row">
      <div className="card">
        <div className="flower">
          <GiCottonFlower />
        </div>
        <div className="card-info">
          <h1>
            <strong>Financial Consulting</strong>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="flower">
          <HiSpeakerphone />
        </div>
        <div className="card-info">
          <h1>
            <strong>Content Marketing</strong>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="flower">
          <GiCoins />
        </div>
        <div className="card-info">
          <h1>
            <strong>Financial Consulting</strong>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
    <button>All Services</button>
  </section3>
);
export default Section3;
