import { useState } from "react";
import "./account.css";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

const Account = ({ textLabel }) => {
  const [hari, setHari] = useState(0);

  const incrementCount = () => {
    setHari((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setHari((prevCount) => prevCount - 1);
  };
  return (
    <>
      <div>
        <label>{textLabel}</label>
        <div className="container account-Parent">
          <button className="btn btn-light" onClick={incrementCount}>
            <SlArrowUp />
          </button>
          <p className="">{hari}</p>
          <button className="btn btn-light" onClick={decrementCount}>
            <SlArrowDown />
          </button>
        </div>
      </div>
    </>
  );
};

export default Account;
