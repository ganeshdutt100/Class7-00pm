import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

const CA3 = () => {
  const p1 = useContext(UserContext);
  return (
    <div>
      CA3
      <div>
        <p>username : {p1.name}</p>
        <p>course : {p1.course}</p>
      </div>
    </div>
  );
};

export default CA3;
