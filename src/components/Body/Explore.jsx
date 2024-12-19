import React from "react";

const Explore = () => {
  return (
    <div className="px-4 sm:px-8 md:px-14 py-6">
      <div className="border-l-2 border-t-2 border-b-4 border-r-4 border-black rounded-tr-3xl">
        {/* Title Section */}
        <div className="px-4 sm:px-6 md:ml-5">
          <h1 className="font-myFont text-3xl sm:text-5xl md:text-6xl font-extrabold mt-5">
            Invoice to Payment <br /> Made Easy
          </h1>
        </div>
        {/* Description Section */}
        <div className="font-normal px-4 sm:px-6 font-sans mt-4">
          <p>
            Tranch is the invoice to payments platform for enterprises who want
            to optimize cash flow by offering their business clients an
            unparalleled payment experience.
          </p>
          <br />
          <p>
            Find out more about how we simplify and accelerate accounts
            receivables for enterprises with the most innovative workflows and
            payment solutions.
          </p>
        </div>
        {/* Buttons Section */}
        <div className="flex flex-wrap gap-4 px-4 sm:px-6 mt-6">
          <button className="border-0 border-l-2 border-t-2 border-black rounded-tr-lg px-6 py-2 font-semibold hover:border-black text-lg sm:text-xl md:text-2xl border-b-4 border-r-4 bg-yellow-200 font-sans hover:bg-yellow-100 mb-5">
            Explore Products
          </button>
          <button className="border-0 border-l-2 border-t-2 border-black rounded-br-lg px-6 py-2 font-semibold hover:border-black font-sans text-lg sm:text-xl md:text-2xl border-b-4 border-r-4 bg-blue-200 hover:bg-blue-300 mb-5">
            Explore Integrations
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
