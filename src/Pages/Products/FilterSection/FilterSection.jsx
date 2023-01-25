import React, { useState } from "react";
import ProductsDetails from "../ProductsDetails";
import Piechart from "./PieChart/Piechart";

const FilterSection = ({ products, filterValueSelected }) => {
  const getUniqueData = (data, attr) => {
    let newVal = data.map((currElem) => {
      return currElem[attr];
    });
    return (newVal = ["All", ...new Set(newVal)]);
  };

  const categoryData = getUniqueData(products, "category");

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelection = (e) => {
    setSelectedCategory(e.target.value);
    console.log(e.target.value);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  console.log(filteredProducts);
  return (
    <div>
        <div className="flex bg-gray-300 justify-between px-10 py-2">
      <div>
        <select
          className="border p-2  rounded-xl "
          name="Choose a Category"
          onChange={handleCategorySelection}
        >
          {categoryData.map((singleCate, i) => (
            <option key={i}>{singleCate}</option>
          ))}
        </select>
      </div>
      <Piechart products={products} categoryData={categoryData}></Piechart>
     
    </div>
    <div className="grid grid-cols-1 m-5 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {filteredProducts.map((singleProduct, i) => (
          <ProductsDetails key={i} singleProduct={singleProduct}>
            {" "}
          </ProductsDetails>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
