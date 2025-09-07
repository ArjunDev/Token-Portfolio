import React from 'react'
import MyPieChart from '../pie-chart';
import { useSelector } from "react-redux";

const PortfolioTotalChart = () => {

  const data = useSelector((state) => state.watchlist.items || []); // get from store


  return (

    <div className="w-[354px] max-h-[496px] lg:max-h-full flex flex-col justify-center items-start gap-5 lg:w-[658.5px] lg:justify-start">

      <h3 className='text-[rgba(161,161,170,1)] font-medium flex'>Portfolio Total</h3>

      <div className='flex flex-col justify-center items-center w-full gap-[20px] lg:flex-row'>

        {/* Chart and data*/}
        <MyPieChart/>
      </div>
    </div>
    
  )
}

export default PortfolioTotalChart;