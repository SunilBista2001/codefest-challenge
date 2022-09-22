import "./testimonial.scss";
import { BsStarFill } from "react-icons/bs";
import { user } from "../../User";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <h1>Featured client stories</h1>

      <div className="container">
        <Carousel
          // showArrows={false}
          showStatus={false}
          showIndicators={false}
          autoPlay={true}
          infiniteLoop={true}
          className="slide"
        >
          {user.map((c) => (
            <div className="wrapper">
              <div className="star">
                <BsStarFill className="icon" />
                <BsStarFill className="icon" />
                <BsStarFill className="icon" />
                <BsStarFill className="icon" />
                <BsStarFill className="icon" />
              </div>
              <p>{c.review}</p>
              <div className="user">
                <div className="users">
                  <img src={c.img} alt="" />
                  <div className="user-detail">
                    <h2>{c.name}</h2>
                    <h4>{c.job}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
