import React from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
<div class="form-control">
  <label class="input-group input-group-horizontal">
    <span>Name</span>
    <input type="text"  class="input input-bordered" />
  </label>
  <label class="input-group input-group-horizontal">
    <span>Amount</span>
    <input type="number"  class="input input-bordered" />
  </label>
  <label class="input-group input-group-horizontal">
    <span>Image</span>
    <input type="text" class="input input-bordered" />
  </label>
  <label class="input-group input-group-horizontal">
    <span>Description</span>
    <input type="text"  class="input input-bordered" />
  </label>

  <input type="submit" />

</div>            
        </div>
    );
};

export default AddProduct;