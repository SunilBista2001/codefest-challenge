import { useEffect, useState } from "react";
import ServiceList from "../serviceList/ServiceList";
import "./service.scss";
import { economy, deluxe, ultimate } from "../../Data";

const Service = () => {
  const [selected, setSelected] = useState("economy");
  const [data, setData] = useState([]);
  const List = [
    {
      id: "economy",
      name: "Economy",
    },
    {
      id: "deluxe",
      name: "Deluxe",
    },
    {
      id: "ultimate",
      name: "Ultimate",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "economy":
        setData(economy);
        break;
      case "deluxe":
        setData(deluxe);
        break;

      case "ultimate":
        setData(ultimate);
        break;
      default:
        setData(economy);
        break;
    }
  }, [selected]);

  return (
    <div className="service">
      <div className="wrapper">
        <h1>We Recommend</h1>
      </div>
      <ul>
        {List.map((e) => (
          <ServiceList
            title={e.name}
            id={e.id}
            active={selected === e.id}
            setItemSelected={setSelected}
          />
        ))}
      </ul>
      <div className="plans">
        {data.map((e) => (
          <div className="planList">
            <h2>{e.discount}</h2>
            <ul>
              <li>{e.list[0]}</li>
              <li>{e.list[1]}</li>
              <li>{e.list[2]}</li>
              <li>{e.list[3]}</li>
              <li>{e.list[4]}</li>
              <li>{e.list[5]} </li>
            </ul>
            <h3>{e.offer}</h3>
            <h4>{e.price}</h4>
          </div>
        ))}
        <button type="submit">Buy Now</button>
      </div>
    </div>
  );
};

export default Service;
