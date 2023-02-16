import { ImCheckboxUnchecked } from "react-icons/im";
import "./index.css";

const Header = () => (
  <section id="header">
    <div className="logo-container d-flex">
      <ImCheckboxUnchecked />
      <h1>Bisnes</h1>
    </div>

    <ul className="header-list d-flex flex-row justify-content-end">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/shop">About</a>
      </li>
      <li>
        <a href="/pages">Project</a>
      </li>
      <li>
        <a href="/blog">Blog</a>
      </li>
      <li>
        <a href="/blog">Services</a>
      </li>
      <li>
        <a href="/contact">Contact Us</a>
      </li>
    </ul>
  </section>
);

export default Header;
