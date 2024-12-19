import React from "react";
import pic from "../../assets/pic.jpg";
import ProductCards from "./ProductCards";

const Products = () => {
  return (
    <div>
      <div>
        <img src={pic} alt="Banner" />
      </div>
      {/* Main Container */}
      <div className="mx-12 p-7 rounded-lg bg-gray-200">
        {/* Title */}
        <div className="mb-4">
          <h1 className="font-myFont text-3xl font-semibold underline decoration-purple-400">
            Tranch Products
          </h1>
        </div>

        {/* Cards Container */}
        <div className="flex flex-wrap gap-4 justify-start">
          <div className="w-full sm:w-[48%] lg:w-[32%]">
            <ProductCards
              title="Pay Later"
              desc="Offer flexible payment options to your clients up to $500k,
                  with no credit risk."
            />
          </div>
          <div className="w-full sm:w-[48%] lg:w-[32%]">
            <ProductCards
              title="Pay Now"
              desc="Free instant payment processing via ACH, Fed Now and Faster Payments."
            />
          </div>
          <div className="w-full sm:w-[48%] lg:w-[32%]">
            <ProductCards
              title="Pay by Card"
              desc="PCI-compliant card payments and virtual card terminals for telephone and virtual card acceptance"
            />
          </div>
          <div className="w-full sm:w-[48%] lg:w-[32%]">
            <ProductCards
              title="Pay by Crypto"
              desc="Accept payment via cryptocurrency with live conversion to flat currency"
            />
          </div>
          <div className="w-full sm:w-[48%] lg:w-[32%]">
            <ProductCards
              title="Recurring Payments"
              desc="Setup and collect recurring payments from your clients for subscitions or retainers"
            />
          </div>
          <div className="w-full sm:w-[48%] lg:w-[32%]">
            <ProductCards
              title="Credit Insights"
              desc="Make better decisions with AI-driven credit insights and collaborate internally on your receivables"
            />
          </div>
          <div className="w-full sm:w-[48%] lg:w-[32%]">
            <ProductCards
              title="Invoicing"
              desc="Email invoices and account statements to clients automatically from your ERP or within Tranch"
            />
          </div>
          <div className="w-full sm:w-[48%] lg:w-[32%]">
            <ProductCards
              title="AR Automation"
              desc="Automated workflows to accelerate client payment and faster reconcilliation"
            />
          </div>
          <div className="w-full sm:w-[48%] lg:w-[32%]">
            <ProductCards
              title="Integrations"
              desc="Integrate Tranch with your ERP system whether you are on the cloud or on-premise"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
