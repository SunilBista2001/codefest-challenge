import "./plan.scss";
import { plan } from "../../PlanItem";
const Plan = () => {
  return (
    <div className="plan">
      <h1>Included With Every Plan</h1>
      <div className="container">
        {plan.map((c) => (
          <div className="title">
            <h2>{c.title}</h2>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
