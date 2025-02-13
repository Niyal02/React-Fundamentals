
import { useNavigate } from "react-router-dom";
import Products from "../../components/products/products";

// {{{{{{{{{{{{{{{{{{{{  Using async/await instead of .then and catch to fetch data from api (from above code)  }}}}}}}}}}}}}}}}}}}}
const DisplayProducts = ()=>{
  const navigate = useNavigate(); //products.jsx ko sab kura rakhnu parena just naya kura add and call <Product/>, esley garda everytime we call <Product/> -
  return (                        //tesma vako sab logic pani auxa/include hunxa, if need to make changes simply go to product and chagne it
    <div>
        <div style={{display:'flex',alignItems:'center', justifyContent:'space-between', padding:'10px'}}>
            <h1 style={{flexGrow:1, textAlign:'center', color:'wheat'}}>Newly Released</h1>
            <button onClick={()=>navigate('/add-products-form')} style={{cursor: 'pointer', backgroundColor:'#28a745', padding: '8px 12px'}}>Add Products</button> 
      </div>
      <Products/>   {/* instead of writing all the codes from products.jsx/Products we simply call/import that function,can be reused in different pages like this*/}
    </div>
  )
}

export default DisplayProducts;