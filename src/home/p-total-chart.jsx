import React from 'react'

const PortfolioTotalChart = () => {
  return (

    <div className="w-[354px] h-[496px] flex flex-col justify-center items-start gap-5 lg:h-full lg:w-[658.5px] lg:justify-start">

      <h3 className='text-[rgba(161,161,170,1)] font-medium flex'>Portfolio Total</h3>

      <div className='flex flex-col justify-center items-center w-full gap-[10px] lg:flex-row'>

        {/* Chart */}
        <div className='h-full w-full flex items-center justify-center'>
          <div className='bg-amber-400 flex items-center justify-center h-[236px] w-[236px] rounded-full border-1 border-[rgba(255,255,255,1)] lg:w-[160px] lg:h-[160px]'>Pie Chart</div>
        </div>

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