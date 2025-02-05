const Product=({product})=>{    //here we destructure {product} to access its value/accept the product prop
    return(         //i forgot to write return at first, but is used to return the value to products.jsx or to the browser
    <div  className='product-container'>
          <div className='product-category'>
            <h3>Category - {product.category}</h3>
          </div>    
          <img src={product.image} alt="" className='product-image' width={200} height={215}/>         
            <h3 className='product-title'>{product.title}</h3>
            <h5>{product.description}</h5>
            <h4 className='product-price'>$ {product.price}</h4>
            <div className='button-container'>
              <button className='cart-button'>Add to Cart</button>
              <button className='buy-button'>Buy</button>
            </div>
        </div>
    )
}

export default Product;