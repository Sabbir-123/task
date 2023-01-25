import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import FilterSection from './FilterSection/FilterSection';
import ProductsDetails from './ProductsDetails';

const Products = () => {
    document.title= "Products";
    const {data: products = [], refetch}= useQuery({
        queryKey: ['products'],
        queryFn: async()=>{
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            return data
        }
    })

    return (
      <div >
         <div className='grid'>
<FilterSection products={products} ></FilterSection>
        </div>
          
     
      </div>
    );
};

export default Products;