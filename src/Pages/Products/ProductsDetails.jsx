import React, { useContext, useState } from 'react';


const ProductsDetails = ({ singleProduct }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    // const { user } = useContext(AuthContext);
    const {image,title,price, description,category,rating }=singleProduct;
    const shortDescription = description?.slice(0, 150) + "...";
    return (
        <div>
      <div>
        <div className="w-full h-[550px] max-w-sm overflow-hidden bg-white rounded-lg shadow-lg shadow-slate-900 lg:m-8 m-3">
       <div className='p-2'>
       <div className="relative">
      <img src={image} alt="imag" className="object-cover object-center w-56 h-56" />
      <button
        className="absolute top-50 left-50 transform -translate-y-16 translate-x-56 btn-sm btn-primary text-white rounded-xl"
        
      >
        {category}
      </button>
    </div>

          <div className="flex items-center px-6 py-3 bg-gray-900">
            <h1 className="mx-3 text-lg font-semibold text-white">{title?.length>35 ? title?.slice(0,25)+'...' : title}</h1>
          </div>

          <div className="px-6 py-4">
            <h1 className="text-xl font-semibold  text-black">
              Price: {price} $
            </h1>

            <div className="py-2  text-gray-400">{showFullDescription ? description : shortDescription} <button className="text-blue-500" onClick={() => setShowFullDescription(!showFullDescription)}>
  {showFullDescription ? "Read Less" : "Read More"}
</button></div>
            
          
            <div className="items-center mt-4  text-gray-400">
              
              
              <div className='grid grid-cols-2'>
              <h1>Rating: {rating?.rate}</h1>
               {
              <label
                disabled={singleProduct?.length === 0}
                className="btn btn-primary text-white"
              >
                Book{" "}
              </label> 
               }
               

              </div>
            </div>
          </div>
       </div>
        </div>
      </div>
    </div>
    );
};

export default ProductsDetails;