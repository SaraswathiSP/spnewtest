import "./index.css";

const NewsLetter = () => (
  <section className="news-letter">
    <div className="news-text">
      <h4>Subscribe Our Newletter For More Update</h4>
      <p>Get E-mail updates about our latest shop and special offers.</p>
    </div>
    <div className="form">
      <input type="text" placeholder="Enter Your Mail" />
      <button className="normal">Subscribe</button>
    </div>
  </section>
);

export default NewsLetter;
