import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StockTicker: React.FC = () => {
  const { stocks } = useApp();

  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-3 overflow-hidden">
      <div className="animate-scroll flex space-x-8 whitespace-nowrap">
        {stocks.concat(stocks).map((stock, index) => (
          <div key={`${stock.symbol}-${index}`} className="flex items-center space-x-2 min-w-max">
            <span className="font-bold text-cyan-400">{stock.symbol}</span>
            <span className="text-lg font-semibold">${stock.price.toFixed(2)}</span>
            <div className={`flex items-center space-x-1 ${
              stock.change >= 0 ? 'text-green-400' : 'text-red-400'
            }`}>
              {stock.change >= 0 ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              <span className="text-sm">
                {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} 
                ({stock.changePercent.toFixed(2)}%)
              </span>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default StockTicker;