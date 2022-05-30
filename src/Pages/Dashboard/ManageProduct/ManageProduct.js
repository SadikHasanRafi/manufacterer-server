import React, { useEffect, useState } from 'react';
import axios from 'axios'
import swal from 'sweetalert';
import { useForm } from "react-hook-form";

const ManageProduct = () => {
 
 
  

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




const [useUpdateAmount,setUpdatedAmount] = useState(0)

const [dataForUpdate,setDataForUpdate] = useState({})
  const handleUpate = (targetData) =>{
    //target data has the value that are going to be updated
    console.log(targetData)
    setDataForUpdate(targetData)
    let increasedValue = parseInt(useUpdateAmount.updateAmount)

  }

 const handleIncreaseing = (operationName) => {
   
 }
 const handleDecreasing = (operationName) => {

 }






  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{ 
    setUpdatedAmount(data)
    
  };

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
       <label class="btn btn-outline btn-warning" onClick={()=>handleUpate(tableData)} for="my-modal-6" >Update amount</label>

       <button class="btn btn-outline btn-error ml-20" onClick={() => handleDelete(tableData._id)}>Delete</button>
     </tr>

   </tbody> 
      </> )
    }
    
    
  </table>




  <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
              <div class="modal-box">
     
              <form onSubmit={handleSubmit(onSubmit)} class="form-control w-auto max-w-xs">
                <label class="label flex flex-col">
                  <span class="label-text text-2xl font-bold ">{dataForUpdate.name}</span>
                  <span class="label-text ">Current stock <span className='font-bold'>{dataForUpdate.amount}</span></span>
                  <span class="label-text">Enter the amount</span>
                </label>

                <input type="number" defaultValue='' placeholder='Enter the amount' class="input input-bordered w-full max-w-xs" required {...register("updateAmount",{min:1})} />
                {errors.updateAmount && <span className=' text-red-700'>Amount must be more than 1</span>}

                <div className='flex justify-end gap-5'>
                  <div class="modal-action">
                    <label for="my-modal-6" class="btn bg-slate-200 hover:bg-slate-400 hover:text-neutral">Close</label>
                  </div>

                  <div class="modal-action">

                    <input type="submit" value='Increase' class=" btn bg-primary disabled:bg-slate-300 hover:bg-accent hover:text-neutral text-neutral" onClick={() => handleIncreaseing('add')} for="my-modal-6" />
                    <input type="submit" value='Decrease' class=" btn bg-primary disabled:bg-slate-300 hover:bg-accent hover:text-neutral text-neutral" onClick={() => handleDecreasing('subtract')} for="my-modal-6" />

                  </div>
                 </div>


                </form>
    
                
                
                
               
              </div>
            </div>

 



</div>
    </div>
);
};

export default ManageProduct;