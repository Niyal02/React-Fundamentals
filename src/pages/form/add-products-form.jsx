import { useState } from "react"
import classes from './addproductform.module.css'

const ProductForm = () => {
  const [product, setProduct] = useState({
    name:'',
    description:'',
    image:'' ,
    category:'',
    condition:[],
    price:'',
  })

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setProduct({...product, [name]: value});
  }

  const handleFileChange =(e) => {
    setProduct({...product, image: e.target.files[0]});
  }

  const handleSubmit =(e) =>{
    e.preventDefault();
    console.log("Product Details:", product);
    alert("Product added succesfully");
  }

  return (
    <div className={classes.container}>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>

        {/* product name */}
        <div className={classes.group}>
        <label style={{color: 'black'}}> Product Name: </label>
        <input type="text" name="name" value={product.name} onChange={handleChange} required  placeholder="Enter your product name" />
        </div>

        {/* product desription */}
        <div className={classes.group}>
        <label style={{color: 'black'}} > Description: </label>
        <input type="text" name="description" value={product.description} onChange={handleChange} required placeholder="Enter your products description"/>
        </div>

        {/* product image */}
        <div className={classes.image}>
        <label style={{color: 'black'}}> Image: </label>
        <input type="file"  name="image" onChange={handleFileChange} required multiple />
        </div>

        {/* product category */}
        <div className={classes.category}>
        <label style={{color: 'black'}}> Category: </label>
        <select name="category" value={product.category} onChange={handleChange} required >
          <option value="">Select a category</option>
          <option value="jewellery">Jewellery</option>
          <option value="clothes">Clothes</option>
          <option value="electronics">Electronics</option>
        </select>
        </div>

        {/* product condition */}
        <div className={classes.condition}>
        <label style={{color: 'black'}}> Condition: </label>
        <label> 
          <input type="radio" name="condition" value='new' onChange={handleChange} required /> New
        </label>
        <label> 
          <input type="radio" name="condition" value='used' onChange={handleChange} required /> Used
        </label>
        
        </div>

        {/* product price */}
        <div className={classes.group}>
        <label style={{color: 'black'}}  > Price: </label>
        <input type="number" name="price" value={product.price} onChange={handleChange} required placeholder="Enter your products price" />
        </div>
        
        <button type="submit" className={classes.sbutton}>Submit</button>
      </form>
    </div>
  )
}

export default ProductForm
