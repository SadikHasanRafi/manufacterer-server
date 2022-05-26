import React from 'react';

const Dashboard = () => {
    const status1 = 'tab-active'
    const status2 = ''
    const status3 = ''
    const status4 = 'tab-active'
    const status5 = ''
    const status6 = ''
    const status7 = ''
    return (
        <div>
    <ul class="tabs tabs-boxed menu bg-indigo-200 p-8 overflow-y-auto w-80 bg-base-100 text-base-content rounded-xl h-screen">
      <li className={`tab ${status1}`}  >My order</li>
      <li className={`tab ${status2}`}  >Add a review</li>
      <li className={`tab ${status3}`}  >My profile</li>
      <li className={`tab ${status4}`}  >Manage all order</li>
      <li className={`tab ${status5}`}  >Add a product</li>
      <li className={`tab ${status6}`}  >Make admin</li>
      <li className={`tab ${status7}`}  >Manage product</li>
      
    </ul>
</div>
    );
};

export default Dashboard;