import "./topbar.scss";
import { useState } from "react";
import { SiGhost } from "react-icons/si";
const Topbar = () => {
  const [topbar, setTopbar] = useState(false);

  const changeTopbar = () => {
    if (window.scrollY >= 70) {
      setTopbar(true);
    } else {
      setTopbar(false);
    }
  };
  window.addEventListener("scroll", changeTopbar);

  return (
    <div className={topbar ? "topbar active" : "topbar"}>
      <div className="container">
        <div className="left">
          <a href="#intro">
            <SiGhost className="icon" />
            <h2>HOSTINGER</h2>
          </a>
          <ul>
            <li>
              <a href="#intro">WordPress</a>
            </li>
            <li>
              <a href="#intro">Hosting</a>
            </li>
            <li>
              <a href="#intro">Websites</a>
            </li>
            <li>
              <a href="#intro">Pro Services</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li className="btn">
              <a href="#intro">Get Started</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
