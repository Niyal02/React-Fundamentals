import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
// import classes from './addproductsuccessredirect.module.css'
import Product from "../../components/products/product";

const AddProductSuccessRedirect = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState();

    useEffect(() => {
        try {
            const storedProduct = JSON.parse(localStorage.getItem('product'));
            setProduct(storedProduct);
        } catch(e) {
            console.error(e, "error")
        }
    }, [])

  return (
    <div>
        <h1  style={{color:'black', fontSize: '20px'}}> Newly Added Products </h1>
        <div> {/* passing props on product similar to product.jsx properties, optional chaining is used to see if undefined or not, if yes then shows undefined instead of error, if no simply gives output of name,desc...*/}
          <Product product={{ title: product?.title, description: product?.description, image: product?.image, category: product?.category, price: product?.price }}/>
        </div> 
        <button onClick={() => navigate('/display-products')} style={{ backgroundColor: 'green'}} > Go Back</button>
    </div>
  )
}

export default AddProductSuccessRedirect

