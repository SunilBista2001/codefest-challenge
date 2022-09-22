import "./app.scss";
import Feature from "./component/feature/Feature";
import Intro from "./component/intro/Intro";
import Topbar from "./component/topbar/Topbar";
import Service from "./component/service/Service";
import Testimonial from "./component/testimonial/Testimonial";
import Plan from "./component/plan/Plan";
import Footer from "./component/footer/Footer";
const App = () => {
  return (
    <div className="app">
      <Topbar />
      <div className="section">
        <Intro />
        <Feature className="feature" />
        <Service />
        <Plan className="plan" />
        <Testimonial />
        <Footer className="footer" />
      </div>
    </div>
  );
};

export default App;
