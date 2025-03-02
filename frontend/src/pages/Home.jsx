import React, { useContext, useEffect, useState } from 'react';

import Product from '../components/ProductCard';
import { CartContext } from '../context/CartContext';
import { getProducts } from '../services/productAPI';

 const Home = () => {

  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProducts();
      setProducts(res.data);
      // console.log(res.data);
    };
    fetchProducts();
  }, []);

    return (
      <div>
      <h2>Products</h2>
      <div>
        {products.map((product) => (
          <Product key={product._id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
    
    )
}

export default Home;