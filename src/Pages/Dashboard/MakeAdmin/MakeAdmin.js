import React, { useEffect, useState } from 'react';

import axios from 'axios'

const MakeAdmin = () => {


 
  const [tableDatas, setTableDatas] = useState([])
  useEffect(() => {
    axios.get("https://glacial-tundra-61856.herokuapp.com/showusers")
    .then( res => setTableDatas(res.data) )
    
  }, [])


console.log(tableDatas)
return (
  <div>
      <div className="overflow-x-auto">
<table className="table w-full ">
  <thead>
    <tr>
      <th>Serial</th>
      <th>ID</th>
      <th>Image</th>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>

  {
    tableDatas.map((tableData,i) => 
    <>
    { i%2==0 ?
    <tbody>
    <tr >
      <th>{i+1}</th>
      <td>{tableData._id}</td>
    <div className="avatar">
        <div className="mask mask-squircle w-12 h-12">
          <img src={tableData.photoURL} alt="Avatar Tailwind CSS Component" />
        </div>
      </div>
      
      <td>{tableData.displayName}</td>
      <td>{tableData.email}</td>
      <td>{tableData.role}</td>
    </tr>
  </tbody> :
   <tbody>
   <tr className="hover:bg-slate-200">
     <th>{i+1}</th>
     <td>{tableData._id}</td>
   <div className="avatar">
       <div className="mask mask-squircle w-12 h-12">
         <img src={tableData.photoURL} alt="Avatar Tailwind CSS Component" />
       </div>
     </div>
     
     <td>{tableData.displayName}</td>
     <td>{tableData.email}</td>
     <td>{tableData.role}</td>
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

export default MakeAdmin;