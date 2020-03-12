import { useState } from "react";

const Prices = props => {
  const [currency, setCurrency] = useState("USD");

  const handleOnChange = e => {
    setCurrency(e.target.value.toString());
  };
  //console.log(props);
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          Bitcoin rate for {props.bpi[currency].description}:{" "}
          <span className="badge badge-primary">
            {props.bpi[currency].code}
          </span>{" "}
          <strong>{props.bpi[currency].rate}</strong>
        </li>
      </ul>

      <br />
      <select
        className="form-control"
        value={currency}
        onChange={handleOnChange}
      >
        <option value="EUR">EUR: Euro</option>
        <option value="GBP">GBP: British Pound</option>
        <option value="USD">USD: American Dollar</option>
      </select>
    </div>
  );
};

export default Prices;
