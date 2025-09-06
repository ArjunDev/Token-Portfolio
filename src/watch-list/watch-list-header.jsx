import React from 'react'

const WatchListHeader = () => {
  return (
    <div className="w-[370px] h-9 lg:w-full flex justify-between items-start">

        <span className="text-white font-medium">* WatchList</span>

        <div className='flex justify-between items-center gap-4'>
          <button className='bg-gray-800 rounded-lg h-full text-sm p-1 text-white'>* Refresh Prices</button>
          <button className='bg-[rgba(169,232,1,1)] rounded-lg h-full text-sm p-1'>+ Add Token</button>
        </div>
      </div>
  )
}

export default WatchListHeader