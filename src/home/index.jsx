import React from 'react';
import Portfolio from '../home/p-total';
import WatchListCard from '../watch-list/index';
import WalletIcon from '@mui/icons-material/Wallet';
import TokenIcon from '@mui/icons-material/Token';

const Home = () => {

  return (
    <div className='flex flex-col items-center justify-center gap-8 max-w-[402px] lg:h-full lg:max-w-[1440px]'>

      {/* Header */}
      <div className='w-max lg:w-full h-16 flex justify-between items-center gap-6 p-4'>

        <span className='flex justify-center items-center gap-1 text-white font-bold text-lg' 
        ><TokenIcon 
          fontSize="medium" 
          className="text-[rgba(169,232,1,1)]" 
        />Token Portfolio</span>

        <button className='bg-[rgba(169,232,1,1)] w-[136px] h-8 rounded-2xl p-2 text-gray-950 flex justify-center items-center gap-2 text-xs font-medium hover:cursor-pointer'
        ><WalletIcon 
          fontSize="small" 
          className="text-black" 
        />Connect Wallet</button>
      </div>
      {/* other cards */}
      <Portfolio/>
      <WatchListCard/>
    </div>
  )
}

export default Home