import React from "react";
import Explore from "./Explore";
import Invoice from "./Invoice";

const Body = () => {
  return (
    <div className="flex gap-5">
      <Explore />
      <Invoice />
    </div>
  );
};

export default Body;
