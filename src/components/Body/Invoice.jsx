import React from "react";

const Invoice = () => {
  return (
    <div className="w-full sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 mx-auto mr-6">
      <div className="bg-white shadow-lg p-8 border-2 border-black rounded-bl-3xl font-myFont">
        <h2 className="text-xl font-bold mb-2">Pay Services Inc.</h2>
        <p className="text-xl font-bold underline decoration-purple-300">
          $100,000 invoice
        </p>
        <p className="text-xs">Invoice Title: General Corporate 2025</p>
        <hr className="h-px bg-gray-300 border-2" />
        <div className="mt-4 text-left">
          <div className="font-bold">Payment Types:</div>
          <div className="m-2">
            <ul className="list-disc list-inside">
              <li className="border-b-2 border-l border-t border-r-2 border-purple-400 list-none rounded-lg p-2">
                <strong>Pay Later:</strong> Pay your invoice over 2-12 months
              </li>
              <li className="border-2 border-gray-200 list-none rounded-lg p-2">
                <strong>Pay Now:</strong> Pay via ACH and Real-time Payments
              </li>
              <li className="border-2 border-gray-200 list-none rounded-lg p-2">
                <strong>Pay by Card:</strong> Secure Payment Portal
              </li>
              <li className="border-2 border-gray-200 list-none rounded-lg p-2">
                <strong>Pay by Crypto:</strong> Pay via cryptocurrency and
                stablecoin
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
