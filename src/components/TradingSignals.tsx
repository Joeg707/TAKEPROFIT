import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { TrendingUp, TrendingDown, Minus, Clock } from 'lucide-react';

const TradingSignals: React.FC = () => {
  const { signals } = useApp();

  const getSignalIcon = (type: string) => {
    switch (type) {
      case 'BUY': return <TrendingUp className="w-5 h-5 text-green-500" />;
      case 'SELL': return <TrendingDown className="w-5 h-5 text-red-500" />;
      default: return <Minus className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getSignalColor = (type: string) => {
    switch (type) {
      case 'BUY': return 'bg-green-500/10 border-green-500/20';
      case 'SELL': return 'bg-red-500/10 border-red-500/20';
      default: return 'bg-yellow-500/10 border-yellow-500/20';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <TrendingUp className="w-4 h-4 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">Trading Signals</h2>
        <div className="ml-auto">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="space-y-4">
        {signals.map((signal) => (
          <div key={signal.id} className={`p-4 rounded-lg border ${getSignalColor(signal.type)}`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                {getSignalIcon(signal.type)}
                <div>
                  <span className="font-bold text-lg">{signal.symbol}</span>
                  <span className={`ml-2 px-2 py-1 rounded text-xs font-semibold ${
                    signal.type === 'BUY' ? 'bg-green-100 text-green-800' :
                    signal.type === 'SELL' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {signal.type}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold">${signal.price.toFixed(2)}</div>
                <div className="text-sm text-gray-500">{signal.confidence}% confidence</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2">{signal.reason}</p>
            <div className="flex items-center text-xs text-gray-400">
              <Clock className="w-3 h-3 mr-1" />
              {signal.timestamp.toLocaleTimeString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingSignals;