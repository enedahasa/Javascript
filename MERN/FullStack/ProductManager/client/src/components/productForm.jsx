import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [title , setTitle] = useState("")
    const [price , setPrice] = useState(0)
    const [description , setDescription] = useState("")


  const createProduct = (e) => {
    e.preventDefault();
  
    axios.post('http://localhost:8000/api/products', {
        title,
        price,
        description
    })
        .then(res=>{
            console.log(res); 
            console.log(res.data);
        setTitle("");
        setPrice();
        setDescription("");
        })
        .catch(err=>console.log(err))

}

  return (
    <div className="container text-center d-flex justify-content-center align-items-center">
      <form className=" p-4" onSubmit={(e)=>createProduct(e)}>
      <h2>Product Manager</h2>
        <div className="bg-light d-flex m-2">
          <label className="col-form-label mb-2 ">Title</label>
          <input className="form-control col-9" onChange = {(e)=>setTitle(e.target.value)} type='text' placeholder='Enter the product name'/>
        </div>          
        {title.length >0 && title.length <2 ? 
          <p className='danger'>The product title must have 2 or more characters</p>
         : null}
        <div className="bg-light d-flex m-2">
          <label className="col-form-label mb-2 ">Price</label>
          <input  className="form-control col-9"  onChange = {(e)=>setPrice(e.target.value)} type='number'/>
        </div>
        {price == 0? 
          <p className='danger'>The product price is required</p>
         : null}
        <div className="bg-light d-flex m-2">
          <label className="col-form-label mb-2 ">Description</label>
          <input className="form-control col-9" onChange = {(e)=>setDescription(e.target.value)} type='text'/>
        </div>
        {description.length >0 && description.length <5 ? 
          <p className='danger'>The description must have 5 or more characters</p>
         : null}
        <input type='submit' className="btn btn-secondary m-2"></input>

      </form>
    </div>
  );
};

export default ProductForm;