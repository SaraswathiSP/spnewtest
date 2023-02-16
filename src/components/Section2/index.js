import "./index.css";
import { BsFillCaretRightFill, BsFillCloudFill } from "react-icons/bs";
import {
  MdOutlineSettingsSuggest,
  MdOutlineConstruction,
} from "react-icons/md";
import { DiGoogleDrive } from "react-icons/di";

const Section2 = () => (
  <div className="section-2">
    <div className="section d-flex flex-row">
      <div className="content-info">
        <h1>
          <strong>We Have Many Year Experience in Consuntent Business</strong>
        </h1>
        <p>
          Below is an excerpt of parch.com's article Moving with Pets? We have
          the Experts Advice to do it properly.Below is an excerpt of
          parch.com's article Moving with Pets? We have the Experts Advice to do
          it properly
        </p>
        <button className="bg-primary">Know More</button>
      </div>
      <div className="video-info d-flex flex-row>">
        <button className="play-icon">
          <BsFillCaretRightFill />
        </button>
        <img
          src="https://res.cloudinary.com/dg0telgxq/image/upload/v1676020040/laptop_np2yo0.jpg"
          alt=""
        />
      </div>
    </div>

    <div className="brand-info d-flex flex-row">
      <div className="brand d-flex flex-column">
        <MdOutlineSettingsSuggest />
        <h1>Contruction</h1>
      </div>
      <div className="brand d-flex flex-column">
        <BsFillCloudFill />
        <h1>DUMMY-LOGO</h1>
      </div>
      <div className="brand d-flex flex-column">
        <DiGoogleDrive />
        <h1>RANDOM-LOGO</h1>
      </div>
      <div className="brand d-flex flex-column">
        <MdOutlineConstruction />
        <h1>RANDOM-BRAND</h1>
      </div>
    </div>
  </div>
);

export default Section2;
