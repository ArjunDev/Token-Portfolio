import React from 'react';
import Portfolio from '../home/p-total';
import WatchListCard from '../watch-list/index';
import WalletIcon from '@mui/icons-material/Wallet';
import TokenIcon from '@mui/icons-material/Token';

const Home = () => {

  return (
    <div className='flex flex-col items-center justify-center gap-8 w-[402px] lg:h-auto'>

      {/* Header */}
      <div className='w-[402px] h-16 flex justify-between items-center gap-6 p-4 lg:w-[1440px]'>

        <span className='flex justify-center items-center gap-1 text-white font-bold text-lg' 
        ><TokenIcon 
          fontSize="medium" 
          className="text-[rgba(169,232,1,1)]" 
        />Token Portfolio</span>

        <span className='bg-[rgba(169,232,1,1)] w-[136px] h-8 rounded-2xl p-2 text-gray-950 flex justify-center items-center gap-2 text-xs font-medium'
        ><WalletIcon 
          fontSize="small" 
          className="text-black" 
        />Connect Wallet</span>
      </div>
      {/* other cards */}
      <Portfolio/>
      <WatchListCard/>
    </div>
  )
}

export default Home