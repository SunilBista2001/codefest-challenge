import "./intro.scss";
import { TiTick } from "react-icons/ti";
const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="container">
        <div className="left">
          <h1>Start, Build, and Grow Your Business</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
            nulla, expedita, nesciunt placeat eligendi ut quo inventore vitae
            fugit reprehenderit ratione ullam, blanditiis optio atque?
          </p>
          <div className="buy">
            <button>Start Now</button>
            <div className="play">
              <TiTick className="icon" />
              <h4>30-Day Money-Back Guarantee</h4>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="./assets/hostinger.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
