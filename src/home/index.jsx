import React from 'react'
import Portfolio from '../home/p-total'
import WatchListCard from '../watch-list/index'

const Home = () => {


  return (
    <div className='flex flex-col items-center justify-center gap-12 w-[402px] lg:h-auto '>

      {/* Header */}
      <div className='w-[402px] h-16 flex justify-between items-center gap-6 p-4 lg:w-[1440px]'>
        <div className='flex justify-center items-center gap-3 '>
          <span className='bg-[rgba(169,232,1,1)] w-8 h-8 rounded-lg'></span>
          <span className='text-white font-bold text-lg'>Token Portfolio</span>
        </div>
        <div className='bg-[rgba(169,232,1,1)] w-[136px] h-8 rounded-2xl p-2 text-gray-950 flex justify-center items-center gap-2'>
          <span className='w-4 h-4 bg-black rounded-lg'></span>
          <span className='text-xs font-medium'>Connect Wallet</span>
        </div>
      </div>
      
      <Portfolio/>

      {/* Watchlist Card */}
      <WatchListCard/>
    </div>
  )
}

export default Home