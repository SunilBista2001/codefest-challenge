import "./feature.scss";
import { feature } from "../../feature";
const Feature = () => {
  return (
    <div className="feature">
      <div className="container">
        <h1>Hosting is even better with all these FREE features</h1>
        <div className="items">
          {feature.map((e) => (
            <div className="wrapper">
              <img src={e.img} alt="" />
              <div className="desc">
                <h2>{e.title}</h2>
                <h4>{e.desc}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
