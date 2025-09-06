import React from 'react'
import PortfolioTotalChart from '../home/p-total-chart';

const PortfolioTotal = () => {
  return (
    <div className="w-[402px] h-max flex flex-col justify-center items-center gap-8 py-4 bg-[rgba(39,39,42,1)] lg:flex-row lg:w-[1384px] lg:h-[288px] lg:gap-4 lg:p-6 rounded-xl lg:justify-between"
    >
      {/* Left Block */}
      <div className="w-[354px] h-[124px] flex flex-col justify-center items-start gap-5 lg:max-w-[658.5px] lg:h-full  lg:justify-start ">
        <span className="text-[rgba(161,161,170,1)] font-medium">Portfolio Total</span>
        <span className="w-full h-[44px] text-[rgba(244,244,245,1)] text-3xl flex items-center font-medium">$10,275.08</span>
        <span className="text-sm text-[rgba(161,161,170,1)] font-medium lg:mt-auto">Last update: 3:42:12 PM</span>
      </div>

      {/* Right Block */}
      <PortfolioTotalChart />
    </div>
  )
}

export default PortfolioTotal;