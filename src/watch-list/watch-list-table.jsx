import React, { useState } from 'react'

const WatchListTable = () => {
const data = [
  ["R1C1", "R1C2", "R1C3", "R1C4", "R1C5", "R1C6", "R1C7"],
  ["R2C1", "R2C2", "R2C3", "R2C4", "R2C5", "R2C6", "R2C7"],
  ["R3C1", "R3C2", "R3C3", "R3C4", "R3C5", "R3C6", "R3C7"],
  ["R4C1", "R4C2", "R4C3", "R4C4", "R4C5", "R4C6", "R4C7"],
  ["R5C1", "R5C2", "R5C3", "R5C4", "R5C5", "R5C6", "R5C7"],
  ["R6C1", "R6C2", "R6C3", "R6C4", "R6C5", "R6C6", "R6C7"],];

  const [APIData, setAPIData] = useState(data);
  

  return (
    <div className='flex flex-col justify-center items-start w-full h-auto border-[rgba(161,161,170,0.3)] border rounded-lg overflow-x-scroll lg:overflow-hidden'>

      <table className="h-auto border-collapse w-[1384px]">
        <thead>
          <tr className="text-[rgba(161,161,170,1)] text-sm bg-[rgba(39,39,42,1)] h-12 w-[209.9px] lg:w-[206px]">
            <th className="px-4 py-2 text-left">Token</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">24h %</th>
            <th className="px-4 py-2 text-left">Sparkline (7d)</th>
            <th className="px-4 py-2 text-left">Holdings</th>
            <th className="px-4 py-2 text-left">Value</th>
            <th className="px-4 py-2 text-right"></th>
          </tr>
        </thead>
        <tbody className='border-t border-b border-[rgba(161,161,170,0.3)]'>
        {(APIData.length > 0) && APIData.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className="text-sm p-3 h-12"
          >{row.map((cell, colIndex) => (
              <td
                key={colIndex}
                className={`px-4 py-2 ${
                  colIndex === 6
                    ? "text-right text-[rgba(244,244,245,1)]"
                    : "text-left text-[rgba(161,161,170,1)]"
                }`}
              >{cell}</td>
            ))}
          </tr>
         ))}
        </tbody>

      </table>

      {/* table footer with pagination */}
      <div className='flex justify-between items-center w-full h-[60px] p-4'>

        <span className="text-[rgba(161,161,170,1)] text-sm">10 of 100 results</span>

        <div className='flex justify-between items-center gap-4'>
          <span className='text-sm p-1 text-[rgba(161,161,170,1)]'>10 of 10 Pages</span>
          <button className='text-[rgba(161,161,170,1)] text-sm p-1'>Prev</button>
          <button className='text-[rgba(161,161,170,1)] text-sm p-1'>Next</button>
        </div>
      </div>
    </div>
  )
}

export default WatchListTable;