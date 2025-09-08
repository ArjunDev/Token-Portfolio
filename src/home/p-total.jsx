import React from 'react'
import PortfolioTotalChart from '../home/p-total-chart';
import { useSelector } from "react-redux";

const PortfolioTotal = () => {
  const data = useSelector((state) => state.watchlist.items || []);
  const lastUpdatedTime = useSelector((state) => state.watchlist.lastUpdated || "");

  const portfolioTotal = data.reduce((sum, coin) => sum + (coin.value || 0), 0);
  return (
    <div className="lg:max-w-[1384px] max-w-[402px] h-full flex flex-col justify-center items-center gap-8 p-4 bg-[rgba(39,39,42,1)] lg:flex-row  lg:h-[288px] lg:gap-4 lg:p-6 rounded-xl lg:justify-between"
    >
      {/* Left Block */}
      <div className="w-[354px] h-[124px] flex flex-col justify-center items-start gap-5 lg:w-[658.5px] lg:h-full lg:justify-start ">

        <span className="text-[rgba(161,161,170,1)] font-medium">Portfolio Total</span>

        <span className="w-full h-[44px] text-[rgba(244,244,245,1)] text-3xl flex items-center font-medium"
        >${portfolioTotal.toFixed(2)}</span>

        <span className="text-sm text-[rgba(161,161,170,1)] font-medium lg:mt-auto">Last updated: {lastUpdatedTime}</span>
      </div>

      {/* Right Block */}
      <PortfolioTotalChart />
    </div>
  )
}

export default PortfolioTotal;