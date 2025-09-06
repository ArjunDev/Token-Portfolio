import React from 'react'
import MyPieChart from '../pie-chart';

const PortfolioTotalChart = () => {
  return (

    <div className="w-[354px] h-[496px] flex flex-col justify-center items-start gap-5 lg:h-full lg:w-[658.5px] lg:justify-start">

      <h3 className='text-[rgba(161,161,170,1)] font-medium flex'>Portfolio Total</h3>

      <div className='flex flex-col justify-center items-center w-full gap-[20px] lg:flex-row'>

        {/* Chart */}
        <MyPieChart/>

        {/* Rows */}
        <div className='h-[200px] w-full flex flex-col justify-between items-between'>
          <div className='flex justify-between items-between'>
            <span className='text-green-400'>Bitcoin (BTC)</span>
            <span className='text-[rgba(161,161,170,1)]'>28.08%</span>
          </div>
          <div className='flex justify-between items-between'>
            <span className='text-green-400'>Bitcoin (BTC)</span>
            <span className='text-[rgba(161,161,170,1)]'>28.08%</span>
          </div>
          <div className='flex justify-between items-between'>
            <span className='text-green-400'>Bitcoin (BTC)</span>
            <span className='text-[rgba(161,161,170,1)]'>28.08%</span>
          </div>
          <div className='flex justify-between items-between'>
            <span className='text-green-400'>Bitcoin (BTC)</span>
            <span className='text-[rgba(161,161,170,1)]'>28.08%</span>
          </div>
          <div className='flex justify-between items-between'>
            <span className='text-green-400'>Bitcoin (BTC)</span>
            <span className='text-[rgba(161,161,170,1)]'>28.08%</span>
          </div>
          <div className='flex justify-between items-between'>
            <span className='text-green-400'>Bitcoin (BTC)</span>
            <span className='text-[rgba(161,161,170,1)]'>28.08%</span>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default PortfolioTotalChart;