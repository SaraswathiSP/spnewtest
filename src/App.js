import Header from "./components/Header";
import Navbar from "./components/NavTopSection";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import NewsLetter from "./components/NewsLetter";
import "./App.css";

const App = () => (
  <>
    <Navbar />
    <Header />
    <Section1 />
    <Section2 />
    <Section3 />
    <NewsLetter />
  </>
);

export default App;
