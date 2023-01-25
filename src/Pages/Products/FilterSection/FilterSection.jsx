import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const FilterSection = ({products}) => {
    // const singlePrductChart= products.map (anotherProduct=>anotherProduct.rating.count)
    // const singlePrductChartName= products.map (anotherProduct=>anotherProduct.category)
const label= [];
const datas=[];
    for(let intoProduct of products){
        label.push(intoProduct.category)
        datas.push(intoProduct.rating.count)
    }
const data = {
        labels: ['electronics', 'jewelery', 'mens clothing"', 'womens clothing'],
        datasets: [
          {
           
            data: datas,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
             
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
             
            ],
            borderWidth: 5,
          },
        ],
      };
   
    return (
        <div className='flex'>
            <div>
                Filter
            </div>
            <div className=''>
            <label htmlFor="my-modal-3" className="btn">Analyze</label>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <Pie data={data} />
  </div>
</div>
            </div>
        </div>
    );
};

export default FilterSection;