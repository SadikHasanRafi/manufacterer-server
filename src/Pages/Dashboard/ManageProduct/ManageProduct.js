import React, { useEffect, useState } from 'react';
import axios from 'axios'
import swal from 'sweetalert';



const ManageProduct = () => {
  const [deleteProduct,setDeleteProduct] = useState(null)

  const showProducts =async () => {
    await axios.get("http://localhost:8000/showproducts")
    .then( res => setTableDatas(res.data) )
    }

  const [tableDatas, setTableDatas] = useState([])
  useEffect(() => {
    showProducts()
  }, [])

 
  const  handleDelete =  (id)=> {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product item!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(async (willDelete) => {
      if (willDelete) {

        await axios.delete(`http://localhost:8000/deleteproduct/${id}`)
        .then(res=>{
         console.log(res.data.deletedCount)
          if (res.data.deletedCount === 1) {
            showProducts()
          }
         })

        swal("Product has been deleted...!", {
          icon: "success",
        });
      } else {
        swal("Delete failed...!");
      }
    });
    
  }

  return (
    <div>
        <div class="overflow-x-auto">
  <table class="table w-full ">
    <thead>
      <tr>
        <th>Serial</th>
        <th>ID</th>
        <th>Image</th>
        <th>Name</th>
        <th>Amount</th>
        <th>Price</th>
        <th className='text-center'>Edit</th>
        
      </tr>
    </thead>

    {
      tableDatas.map((tableData,i) => 
      <>
      
     <tbody>
       
     <tr class="hover:bg-slate-200">
     <th>{i+1}</th>
        <td>{tableData._id}</td>
     <div class="avatar">
         <div class="mask mask-squircle w-12 h-12">
           <img src={tableData.pic} alt="Avatar Tailwind CSS Component" />
         </div>
       </div>
       
       <td>{tableData.name}</td>
       <td>{tableData.amount}</td>
       <td>{tableData.price}</td>
       <button class="btn btn-outline btn-warning">Update amount</button>
       <button class="btn btn-outline btn-error ml-20" onClick={() => handleDelete(tableData._id)}>Delete</button>
     </tr>
   </tbody> 
      </> )
    }
    
    
  </table>


</div>
    </div>
);
};

export default ManageProduct;