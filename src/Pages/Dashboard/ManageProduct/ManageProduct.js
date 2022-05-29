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


  useEffect(()=>{
    console.log('kam kaj nai')
  },[deleteProduct])


  const  handleDelete = (i)=> {
    console.log(i)
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(async (willDelete) => {
      if (willDelete) {
        swal("Product has been deleted!", {
          icon: "success",
        });
        setDeleteProduct(i)
        console.log("deleting")
    const data = { _id : deleteProduct }
    await axios.post("http://localhost:8000/deleteproduct",data)
    .then(res => {
      console.log(res)
      showProducts()
    })
      } else {
        swal("Your imaginary file is safe!");
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
      { i%2==0 ?
      <tbody>
      <tr >
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
    :
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
    } 
      </> )
    }
    
    
  </table>


</div>
    </div>
);
};

export default ManageProduct;