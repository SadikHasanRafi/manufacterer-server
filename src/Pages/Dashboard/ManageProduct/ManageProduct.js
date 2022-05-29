import React, { useEffect, useState } from 'react';
import axios from 'axios'


const ManageProduct = () => {


  const [tableDatas, setTableDatas] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8000/showproducts")
    .then( res => setTableDatas(res.data) )
  }, [])

  return (
    <div>
        <div class="overflow-x-auto">
  <table class="table w-full ">
    <thead>
      <tr>
        <th>ID</th>
        <th>Image</th>
        <th>Name</th>
        <th>Amount</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>

    {
      tableDatas.map((tableData,i) => 
      <>
      { i%2==0 ?
      <tbody>
      <tr >
        <th>{tableData._id}</th>
      <div class="avatar">
          <div class="mask mask-squircle w-12 h-12">
            <img src={tableData.pic} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        
        <td>{tableData.name}</td>
        <td>{tableData.amount}</td>
        <td>{tableData.price}</td>
        <button class="btn btn-outline btn-warning">Update amount</button>
        <button class="btn btn-outline btn-error ml-20">Delete</button>
      </tr>
    </tbody> :
     <tbody>
     <tr class="hover:bg-slate-200">
       <th>{tableData._id}</th>
     <div class="avatar">
         <div class="mask mask-squircle w-12 h-12">
           <img src={tableData.pic} alt="Avatar Tailwind CSS Component" />
         </div>
       </div>
       
       <td>{tableData.name}</td>
       <td>{tableData.amount}</td>
       <td>{tableData.price}</td>
       <button class="btn btn-outline btn-warning">Update amount</button>
       <button class="btn btn-outline btn-error ml-20">Delete</button>
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

export default ManageProduct;