import React from "react";
import PropsD2 from "./PropsD2";

const PropsD1 = ({ title }) => {
  return (
    <div>
      PropsD1
      <PropsD2 title={title} />
    </div>
  );
};

export default PropsD1;
