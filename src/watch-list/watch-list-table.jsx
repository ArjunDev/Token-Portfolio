import React from "react";
import { useSelector } from "react-redux";

const WatchListTable = () => {
  const data = useSelector((state) => state.watchlist.items); // get from store

  return (
    <div className="flex flex-col justify-center items-start w-full h-auto border-[rgba(161,161,170,0.3)] border rounded-lg overflow-x-scroll lg:overflow-hidden">
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
        <tbody className="border-t border-b border-[rgba(161,161,170,0.3)]">

          {data?.length > 0 &&
            data.map((coin, index) => {
              const price = coin?.data?.price ?? 0;
              const change24h =
                coin?.data?.price_change_percentage_24h?.usd ?? 0;

              return (
                <tr key={index} className="text-sm p-3 h-12">
                  {/* Token */}
                  <td className="px-4 py-2 flex items-center gap-2 text-[rgba(244,244,245,1)]">
                    <img
                      src={coin.small}
                      alt={coin.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <div className="flex flex-col">
                      <span className="font-medium">{coin.name}</span>
                      <span className="text-xs text-gray-400 uppercase">
                        {coin.symbol}
                      </span>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="px-4 py-2 text-left text-[rgba(244,244,245,1)]">
                    ${price.toFixed(3)}
                  </td>

                  {/* 24h % */}
                  <td
                    className={`px-4 py-2 text-left ${
                      change24h >= 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >{change24h.toFixed(2)}%</td>

                  {/* Sparkline */}
                  <td className="px-4 py-2 text-left text-gray-400">
                    {coin.data.sparkline ? (
                      <img
                        src={coin.data.sparkline}
                        alt={`${coin.name} sparkline`}
                        className="w-24 h-6"
                      />) : ("-")}
                  </td>

                  {/* Holdings */}
                  <td className="px-4 py-2 text-left text-gray-400">0</td>

                  {/* Value */}
                  <td className="px-4 py-2 text-left text-gray-400">0</td>

                  {/* Actions */}
                  <td className="px-4 py-2 text-right text-[rgba(244,244,245,1)]">
                    <button aria-label={`More options for ${coin.name}`}>
                      ...
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {/* table footer with pagination */}
      <div className="flex justify-between items-center w-full h-[60px] p-4">
        <span className="text-[rgba(161,161,170,1)] text-sm">
          {data.length} of {data.length} results
        </span>

        <div className="flex justify-between items-center gap-4">
          <span className="text-sm p-1 text-[rgba(161,161,170,1)]">1 of 1 Pages</span>
          <button className="text-[rgba(161,161,170,1)] text-sm p-1">Prev</button>
          <button className="text-[rgba(161,161,170,1)] text-sm p-1">Next</button>
        </div>
      </div>
    </div>
  );
};

export default WatchListTable;
