import React, { useEffect, useState } from 'react';

import axios from 'axios'

const MakeAdmin = () => {


 
  const [tableDatas, setTableDatas] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8000/showusers")
    .then( res => setTableDatas(res.data))
  }, [])
  

console.log(tableDatas)
    return (
        <div>
            <div class="overflow-x-auto">
      <table class="table-normal w-full">
        <thead>
          <tr>
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
            <th>{tableData._id}</th>
          <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={tableData.photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
            <td>{tableData.displayName}</td>
            <td>{tableData.email}</td>
            <td>{tableData.role}</td>
          </tr>
        </tbody> :
         <tbody>
         <tr class="hover:bg-slate-200">
           <th>{tableData._id}</th>
         <div class="avatar">
             <div class="mask mask-squircle w-12 h-12">
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