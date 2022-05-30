import React, { useEffect, useState } from 'react';
import axios from 'axios'


const ManageAllOrder = () => {

  const [tableDatas, setTableDatas] = useState([] || {})
  useEffect(() => {
    
    axios.get("https://glacial-tundra-61856.herokuapp.com/showorders")
    .then( res => setTableDatas(res.data) )

    console.log(tableDatas.number)
  }, [])






  return (
    <div>
        <div className="overflow-x-auto">
  <table className="table w-full ">
    <thead>
      <tr>
        <th>Serial</th>
        <th>Order ID</th>
        <th>User ID</th>   
        <th>Buyer Name</th>  
        <th>product Name</th>  
        <th>Buyer Email</th>  
        <th>Buyer Phone Number</th>  
        <th>Buyer address</th>  
        <th>Order Status</th>  
        <th>Amount</th>  

      </tr>
    </thead>

    {
      tableDatas.map((tableData,i) => 
      < >
      { i%2 == 0 ?
      <tbody>
      <tr key={tableData._id}>
        <th>{i+1}</th>
        <th>{tableData._id}</th>
        <td>{tableData.uid}</td>
        <td>{tableData.name}</td>
        <td>{tableData.productName}</td>
        <td>{tableData.email}</td>
        <td>{tableData.number}</td>
        <td>{tableData.address}</td>
        <td>{tableData.status}</td>
        <td>{tableData.quantity?.amount}</td>
      </tr>
    </tbody>
     :

     <tbody key={tableData._id}>
     <tr className="hover:bg-slate-800 bg-black">
       <th>{i+1}</th>
       <th>{tableData._id}</th>
       <td>{tableData.uid}</td>
       <td>{tableData.name}</td>
       <td>{tableData.productName}</td>
       <td>{tableData.email}</td>
       <td>{tableData.nummber}</td>
       <td>{tableData.address}</td>
       <td>{tableData.status}</td>
       <td>{tableData.quantity.amount}</td>
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
