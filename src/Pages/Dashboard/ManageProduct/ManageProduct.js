import React, { useEffect, useState } from 'react';
import axios from 'axios'
import swal from 'sweetalert';
import { useForm } from "react-hook-form";
import useUpdateproductAmount from '../../../Hooks/useUpdateproductAmount';


const ManageProduct = () => {
 
 


  const showProducts =async () => {
    await axios.get("https://glacial-tundra-61856.herokuapp.com/showproducts")
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

        await axios.delete(`https://glacial-tundra-61856.herokuapp.com/deleteproduct/${id}`)
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


const [operationSign, setOperationSign] = useState('') // here is the operation sign .....add or subtract 

const [useUpdateAmount,setUpdatedAmount] = useState(0) //here is the amount that will be increase or decrease 

const [dataForUpdate,setDataForUpdate] = useState({})  // here the data is stored which going to be updated
  const handleUpate = (targetData) =>{
    //target data has the value that are going to be updated
    console.log(targetData)
    setDataForUpdate(targetData)
  }

 const handleIncreaseing = (operationName) => {
   console.log(operationName)
   setOperationSign(operationName)
 }
 const handleDecreasing = (operationName) => {
  console.log(operationName)
  setOperationSign(operationName)
 }


const {setSign,setCurrentData,setUpdateAmount,latestData} = useUpdateproductAmount()


console.log(latestData)

useEffect(()=>{
  setSign(operationSign)
  setCurrentData(dataForUpdate)
  setUpdateAmount(useUpdateAmount)
},[handleDecreasing])


useEffect(()=>{
  setSign(operationSign)
  setCurrentData(dataForUpdate)
  setUpdateAmount(useUpdateAmount)
},[handleIncreaseing])

  const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{ 
    setUpdatedAmount(data)
    console.log('data',data)
    reset()
  };


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
        <th>Amount</th>
        <th>Price</th>
        <th className='text-center'>Edit</th>
        
      </tr>
    </thead>

    {
      tableDatas.map((tableData,i) => 
      <>
      
     <tbody>
       
     <tr className="hover:bg-slate-200">
     <th>{i+1}</th>
        <td>{tableData._id}</td>
     <div className="avatar">
         <div className="mask mask-squircle w-12 h-12">
           <img src={tableData.pic} alt="Avatar Tailwind CSS Component" />
         </div>
       </div>
       <td>{tableData.name}</td>
       <td>{tableData.amount}</td>
       <td>{tableData.price}</td>
       <label className="btn btn-outline btn-warning" onClick={()=>handleUpate(tableData)} for="my-modal-6" >Update amount</label>

       <button className="btn btn-outline btn-error ml-20" onClick={() => handleDelete(tableData._id)}>Delete</button>
     </tr>

   </tbody> 
      </> )
    }
    
    
  </table>




  <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
     
              <form onSubmit={handleSubmit(onSubmit)} className="form-control w-auto max-w-xs">
                <label className="label flex flex-col">
                  <span className="label-text text-2xl font-bold ">{dataForUpdate.name}</span>
                  <span className="label-text ">Current stock <span className='font-bold'>{dataForUpdate.amount}</span></span>
                  <span className="label-text">Enter the amount</span>
                </label>

                <input type="number" id='amount-form' placeholder='Enter the amount' className="input input-bordered w-full max-w-xs" required {...register("updateAmount",{min:1})} />
                {errors.updateAmount && <span className=' text-red-700'>Amount must be more than 1</span>}

                <div className='flex justify-end gap-5'>
                  <div className="modal-action">
                    <label for="my-modal-6" className="btn bg-slate-200 hover:bg-slate-400 hover:text-neutral">Close</label>
                  </div>

                  <div className="modal-action">

                    <input type="submit" value='Increase' className=" btn bg-primary disabled:bg-slate-300 hover:bg-green-600 hover:text-neutral text-neutral" onClick={() => handleIncreaseing('+')} for="my-modal-6" />
                    <input type="submit" value='Decrease' className=" btn bg-primary disabled:bg-slate-300 hover:bg-red-600 hover:text-neutral text-neutral" onClick={() => handleDecreasing('-')} for="my-modal-6" />

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