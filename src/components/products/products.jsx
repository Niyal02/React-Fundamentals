import { useEffect, useState } from 'react'
import axios from 'axios'
import './style.css';
import Product from './product';

// //----------------------- Data Fetching using Axios------------------------
// const Axios = () => {
//   const [product, setProduct] = useState([]);
//   useEffect(() => {             //Data fetch garda axios ma useEffect use garnu parxa
//     axios.get('https://fakestoreapi.com/products/1')       //axios.get(url) fetches data from the api provided
//       .then((res) => {                //.then is a promise,, first checks the content/api if correct or not(takes few sec to load)
//         setProduct(res.data);         // then displays the data if avaiable.. also consists of catch to catch the error(if no data found)
//     })            //res.data extracts only useful data from response,,,as .data contains the actual data returned by the API
//   }, [])    

//   return (
//     <div>
//       <h1>Products:</h1>
//       <h4>{product.category}</h4>
//       <h3>{product.title}</h3>
//       <h4>{product.description}</h4>
//       <img src={product.image} alt="" width={400} height={425}/>
//       <h4>${product.price}</h4>
//     </div>
//   )}

//   export default Axios;

//----------------------- Multiple Data Fetching using Axios------------------------

// const Axios = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(()=>{
//     axios.get('https://fakestoreapi.com/products?limit=7')
//     .then((res)=>{
//       setProducts(res.data);
//     })
//     .catch((error)=>{
//       console.log('Error fetching data', error);
//     })
//   },[])

//   return (
//     <div>
//       <h1>Newly Released</h1> {/* instead of writing all the content/html,css here, we can create a new product file, write there and simply 
//       call the product func here. This is useful if we need to display the same content next time/next page. so we can simply just call <Product/>
//        instead of needing to write it everytime  */}
//       {products.map((product)=>(
//         <Product key={product.id} product={product}/>  //we pass product object as a prop here i.e {product}
//       ))}
      
//     </div>
//   )
// }

// export default Axios

// {{{{{{{{{{{{{{{{{{{{  Using async/await instead of .then and catch to fetch data from api (from above code)  }}}}}}}}}}}}}}}}}}}}
const Products = ()=>{
  const [products, setProduct] = useState([]); 
  const [loading, setLoading] = useState(true);

  //fetch the data using async/await
  const fetchProduct = async() =>{
    try {
      const response = await axios.get('https://fakestoreapi.com/products?limit=11')
      setProduct(response.data);
    } catch (error) {
      console.log("Error fetching data", error);
    } finally{
      setLoading(false);  //stop loading if the try block runs successfully
    }
  }
  useEffect(()=>{
    fetchProduct();     //calling the async function here
  },[])
  return (
    <div>
      {loading ? (       //show spinner while loading
        <div className='spinner'> </div>
      ) : (
      products.map((product)=>
        <Product key={product.id} product={product}/>)  //we pass product object as a prop here i.e {product}    
    )}
    </div>
  )
}

export default Products;

