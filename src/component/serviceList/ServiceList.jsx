import "./serviceList.scss";

const ServiceList = ({ title, active, setItemSelected, id }) => {
  return (
    <li
      className={active ? "icon active" : "icon"}
      onClick={() => setItemSelected(id)}
    >
      {title}
    </li>
  );
};

export default ServiceList;
