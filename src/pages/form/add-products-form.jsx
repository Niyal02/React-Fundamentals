import { useEffect, useRef, useState } from "react"
import classes from './addproductform.module.css'

const ProductForm = () => {
  const [product, setProduct] = useState({
    name:'',
    description:'',
    image:[],         //changed from '' to array []
    category:'',
    condition:'',
    price:'',
  })

  const [errors, setErrors] = useState({
    name:'',
    description:'',
    image:'',         
    category:'',
    condition:'',
    price:'',
  });
  console.log({errors});

  useEffect(() => {       //use effect is used here  to make 'focus' work. previously no useEffect was used os focus didnt work.
    if (errors.name) {
      nameRef.current.focus();
    }
    else if(errors.description){
      descriptionRef.current.focus();
    }
    else if(errors.image){
      imageRef.current.focus();
    }
    else if(errors.category){
      categoryRef.current.focus();
    }
    else if(errors.condition){
      conditionRef.current.focus();
    }
    else if(errors.price){
      priceRef.current.focus();
    }
  },[errors])

  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const categoryRef = useRef(null);
  const conditionRef = useRef(null);
  const priceRef = useRef(null);

  const handleChange = (e) =>{
    const {name: targetName, value} = e.target;   //here name comes from 'name' inside of input tag ,, applicable for all 'name/s'
    setProduct({...product, [targetName]: value}); //first input given by user goes and stores in value and displayed in name/desc/price/category..
    // setErrors((prevErrors => ({...prevErrors, [targetName]: ''}))) // used to remove errors when user starts typing/ giving input
  }

  const handleFileChange =(e) => {
    const files = Array.from(e.target.files);  //new variable 'files' is created and array.from is used to store img in array
    const imagePreview = files.map((file) => URL.createObjectURL(file));   //generate preview urls
    setProduct({...product, image: files, imagePreview});   
    // setErrors((prevErrors => ({...prevErrors, image: ''})))     //used to remove error msg when user starts inputting images
  }

  const validateForm = () => {
    let isFormValid = true;
    setErrors({         //this step is done/copied again for when u press submit button, it resets/rerenders the error part and empties it again
      name:'',
      description:'',
      image:'',        
      category:'',
      condition:'',
      price:'',
    });

    //Validate Product Name
    if(!product.name.trim()) {           // trim is used to remove whitespace from beginning and end of string
      setErrors(prevErrors => ({
        ...prevErrors,
        name: "Product name is required"
      }))
      isFormValid = false;
    }
    
    //Validate description
    if(!product.description.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        description: "Product description is required"
      }))
      isFormValid = false;
    }

    //Validate image
    if(product.image.length === 0) {          //array cannot consists of trim function
      setErrors(prevErrors => ({
        ...prevErrors,
        image: "Product image is required"
      }))
      isFormValid = false;
    }

    //validate category
    if(!product.category.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        category: "Product category is required"
      }))
      isFormValid = false;
    }

    //validate condition
    if(!product.condition) {
      setErrors(prevErrors => ({
        ...prevErrors,
        condition: "Please choose one condition"
      }))
      isFormValid = false;
    }

    //validate price
    if(!product.price.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        price: "Product price is required"
      }))
      isFormValid = false;
    } else if(isNaN(product.price) || parseFloat(product.price) < 0 ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        price: "Price must be a positive number"
      }))
      isFormValid = false;
    }

    return isFormValid; 
  }

  const handleSubmit =(e) =>{
    e.preventDefault();

    // validation 
    if(validateForm()){
      console.log("Product Details:", product);   //validating form for success or no success
      alert('Product added successfully')
    }else{
      console.log("Product validation failed");
    }  
  }

  return (
    <div className={classes.container}>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit} noValidate>

        {/* product name */}
        <div className={classes.group}>
        <label style={{color: 'black'}} > Product Name: </label>
        <input type="text" name="name" value={product.name} style={{color:"black"}} onChange={handleChange} required  placeholder="Enter your product name" ref={nameRef} className={classes.error} data-invalid={errors.name ? "true" : "false"} />
        {errors.name }  {/* in input tag onBlur is used when the focus on a particular field is changed, we used validateForm so it can validate */}
        </div>

        {/* product description */}
        <div className={classes.group}>
        <label style={{color: 'black'}} > Description: </label>
        <input type="text" name="description" value={product.description} onChange={handleChange} required placeholder="Enter your products description" ref={descriptionRef}/>
        {errors.description  }
        </div>

        {/* product image */}
        <div className={classes.image}>
        <label style={{color: 'black'}}> Image: </label>
        <input type="file"  name="image" style={{color:"black"}} onChange={handleFileChange}  required multiple ref={imageRef} />
        {errors.image}
        </div>

        {/* Preview product image */}
        <div className={classes.preview}>
          {product.imagePreview && 
              product.imagePreview.map((preview, index) => (
                <img key={index} src={preview} alt={`Preview ${index}`} className={classes.thumbnail} ref={imageRef}  />
              ))}
        </div>

        {/* product category */}
        <div className={classes.category}>
        <label style={{color: 'black'}}> Category: </label>
        <select name="category" value={product.category} onChange={handleChange}   required ref={categoryRef}>
          <option value="">Select a category</option>
          <option value="jewellery">Jewellery</option>
          <option value="clothes">Clothes</option>
          <option value="electronics">Electronics</option>
        </select>
        {errors.category}
        </div>

        {/* product condition */}
        <div className={classes.condition}>
        <label style={{color: 'black'}}> Condition: </label>
        <label> 
          <input type="radio" name="condition" value='new' onChange={handleChange} required ref={conditionRef}/> New
        </label>
        <label> 
          <input type="radio" name="condition" value='used' onChange={handleChange} required ref={conditionRef}/> Used
        </label>
        {errors.condition}
        </div>

        {/* product price */}
        <div className={classes.group}>
        <label style={{color: 'black'}}  > Price: </label>
        <input type="number" name="price" value={product.price} onChange={handleChange}  required placeholder="Enter your products price" ref={priceRef} />
        {errors.price && <span className={classes.error}>{errors.price}</span> }
        </div>
        
        <button type="submit" className={classes.sbutton}>Submit</button>
      </form>
      
    </div>
  )
}

export default ProductForm
