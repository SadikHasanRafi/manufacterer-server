import React, { useEffect, useState } from 'react';
import axios from 'axios'


const ManageAllOrder = () => {

  const [tableDatas, setTableDatas] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8000/showorders")
    .then( res => setTableDatas(res.data) )
  }, [])




  return (
    <div>
        <div class="overflow-x-auto">
  <table class="table w-full ">
    <thead>
      <tr>
        <th>ID</th>
        <th>Buyer Name</th>
        <th>product Name</th>
        <th>Buyer Email</th>
        <th>Buyer address</th>
        <th>Order Status</th>
      </tr>
    </thead>

    {
      tableDatas.map((tableData,i) => 
      <>
      { i%2==0 ?
      <tbody>
      <tr >
        <th>{tableData._id}</th>
        <td>{tableData.buyerName}</td>
        <td>{tableData.productName}</td>
        <td>{tableData.email}</td>
        <td>{tableData.address}</td>
        <td>{tableData.status}</td>
      </tr>
    </tbody> :
     <tbody>
     <tr class="hover:bg-slate-200">
       <th>{tableData._id}</th>
       <td>{tableData.buyerName}</td>
       <td>{tableData.productName}</td>
       <td>{tableData.email}</td>
       <td>{tableData.address}</td>
       <td>{tableData.status}</td>
     </tr>
   </tbody> 
    } 
      </> )
    }
    
    
  </table>


</div>
    </div>
);
};

export default ManageAllOrder;
