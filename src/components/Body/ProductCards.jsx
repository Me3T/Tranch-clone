import React from "react";

const ProductCards = ({ title, desc }) => {
  return (
    <div>
      <div className="bg-white border-2 border-black  rounded-xl p-1.5 mt-4   ">
        <h1 className="font-myFont text-2xl font-bold">{title}</h1>
        <h4 className="font-sans text-justify text-lg ">{desc}</h4>
      </div>
    </div>
  );
};

export default ProductCards;
