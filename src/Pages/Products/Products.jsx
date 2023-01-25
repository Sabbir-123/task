import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import FilterSection from './FilterSection/FilterSection';
import ProductsDetails from './ProductsDetails';

const Products = () => {
    const {data: products = [], refetch}= useQuery({
        queryKey: ['products'],
        queryFn: async()=>{
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            return data
        }
    })

    return (
      <div className='flex'>
         <div>
<FilterSection products={products}></FilterSection>
        </div>
          <div className="grid grid-cols-1 m-5 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {products.map((singleProduct, i) => (
          <ProductsDetails
            key={i}
            singleProduct={singleProduct}
            
          >
            {" "}
          </ProductsDetails >
        ))}
  
        
      </div>
     
      </div>
    );
};

export default Products;