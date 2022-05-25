import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const BusinessSummary = () => {
  let x = 70;
  const data = [
    { name: "Group A", value: x },
    { name: "Group D", value: 100 - x },
  ];
  const COLORS = ["#0088FE", "#00C49F"];

  return (
    <div>
        
      <div className="grid grid-cols-4 gap-[70px] px-4 py-8">
        {/* card 1 */}
        <div class="card w-auto bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <div class="stat">
              <div class="stat-title">Total Page Views</div>
              <div class="stat-value">89,400</div>
              <div class="stat-desc">21% more than last month</div>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div class="card w-auto bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <div class="stat place-items-center">
              <div class="stat-title">Downloads</div>
              <div class="stat-value">31K</div>
              <div class="stat-desc">From January 1st to February 1st</div>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div class="card w-auto bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <div class="stat place-items-center">
              <div class="stat-title">Users</div>
              <div class="stat-value text-secondary">4,200</div>
              <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
            </div>
          </div>
        </div>

        {/* card 4 */}
        <div class="card w-auto bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <div class="stat place-items-center">
              <div class="stat-title">New Registers</div>
              <div class="stat-value">1,200</div>
              <div class="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
