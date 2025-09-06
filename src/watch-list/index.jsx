import React from 'react'
import WatchListHeader from './watch-list-header'
import WatchListTable from './watch-list-table'

const WatchListCard = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-auto lg:w-[1384px]'>
      <WatchListHeader/>
      <WatchListTable/>
    </div>
  )
}

export default WatchListCard