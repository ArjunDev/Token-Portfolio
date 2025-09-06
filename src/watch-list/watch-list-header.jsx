import React, { useState } from 'react';
import CustomModal from '../modal';

const WatchListHeader = () => {

   const [isOpen, setIsOpen] = useState(false);



  return (
    <div className="w-[370px] h-9 lg:w-full flex justify-between items-start">

        <span className="text-white font-medium">* WatchList</span>
        <div className='flex justify-between items-center gap-4'>
          <button className='bg-[#FFFFFF0A] rounded-lg h-full text-sm p-1 px-2 text-white hover:cursor-pointer'>* Refresh Prices</button>
          <button 
            onClick={() => setIsOpen(true)}
            className='bg-[rgba(169,232,1,1)] rounded-lg h-full text-sm p-1 px-2 hover:cursor-pointer'
          >+ Add Token</button>
        </div>

        {/* Custom Modal */}
        <CustomModal 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)}
        ></CustomModal>
      </div>
  )
}

export default WatchListHeader;