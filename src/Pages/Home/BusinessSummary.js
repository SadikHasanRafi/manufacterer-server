import React from "react";


const BusinessSummary = () => {


  return (
    <div className="py-20 mb-16">
        <div className="pt-8 pb-12">
            <p className="text-center p-3 text-5xl uppercase">Grow You business with us</p>
            <p className="text-center text-2xl ">Getting accessories is now easier than ever before</p>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-[70px] px-4 py-8">
        {/* card 1 */}
        <div className="card w-auto bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <div className="stat">
              <div className="stat-title">Total employee</div>
              <div className="stat-value">2,400</div>
              <div className="stat-desc">All over the world</div>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="card w-auto bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <div className="stat place-items-center">
              <div className="stat-title">Yearly turnover</div>
              <div className="stat-value">31M</div>
              <div className="stat-desc text-center">Fastest growing company</div>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className="card w-auto bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <div className="stat place-items-center">
              <div className="stat-title">Business partner</div>
              <div className="stat-value text-secondary">4,200</div>
              <div className="stat-desc text-secondary">↗︎ Leading company</div>
            </div>
          </div>
        </div>

        {/* card 4 */}
        <div className="card w-auto bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <div className="stat place-items-center">
              <div className="stat-title">Shipped product</div>
              <div className="stat-value">989,200</div>
              <div className="stat-desc">↗︎ 1000 per hour </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
