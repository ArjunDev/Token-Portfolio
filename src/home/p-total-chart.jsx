import React from 'react'
import MyPieChart from '../pie-chart';
import { useSelector } from "react-redux";

const PortfolioTotalChart = () => {

  const data = useSelector((state) => state.watchlist.items || []); // get from store


  return (

    <div className="w-[354px] max-h-[496px] flex flex-col justify-center items-start gap-5 lg:h-full lg:w-[658.5px] lg:justify-start">

      <h3 className='text-[rgba(161,161,170,1)] font-medium flex'>Portfolio Total</h3>

      <div className='flex flex-col justify-center items-center w-full gap-[20px] lg:flex-row'>

        {/* Chart */}
        <MyPieChart/>

        {/* Rows */}
        <div className='max-h-[200px] w-full flex flex-col justify-center items-between gap-4'>
        {(data.length > 0) && data?.map((coin) => (
          <div key={coin.name} className='flex justify-between items-between'>
            <span className='text-green-400'>{coin.name}</span>
            <span className='text-[rgba(161,161,170,1)]'>{coin.holdings.toFixed(2)}%</span>
          </div>
        ))}
        </div>
      </div>
    </div>
    
  )
}

export default PortfolioTotalChart;