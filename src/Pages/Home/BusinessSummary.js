import React from "react";


const BusinessSummary = () => {


  return (
    <div className="py-20 mb-16">
        <div className="pt-8 pb-12">
            <p className="text-center p-3 text-5xl uppercase">Grow You business with us</p>
            <p className="text-center text-2xl ">Getting accessories is now easier than ever before</p>
        </div>
      <div className="grid grid-cols-4 gap-[70px] px-4 py-8">
        {/* card 1 */}
        <div class="card w-auto bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <div class="stat">
              <div class="stat-title">Total employee</div>
              <div class="stat-value">2,400</div>
              <div class="stat-desc">All over the world</div>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div class="card w-auto bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <div class="stat place-items-center">
              <div class="stat-title">Yearly turnover</div>
              <div class="stat-value">31M</div>
              <div class="stat-desc text-center">Fastest growing company</div>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div class="card w-auto bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <div class="stat place-items-center">
              <div class="stat-title">Business partner</div>
              <div class="stat-value text-secondary">4,200</div>
              <div class="stat-desc text-secondary">↗︎ Leading company</div>
            </div>
          </div>
        </div>

        {/* card 4 */}
        <div class="card w-auto bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <div class="stat place-items-center">
              <div class="stat-title">Shipped product</div>
              <div class="stat-value">989,200</div>
              <div class="stat-desc">↗︎ 1000 per hour </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
