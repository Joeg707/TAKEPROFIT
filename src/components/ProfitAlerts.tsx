import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { DollarSign, TrendingUp, TrendingDown, Target, Bell } from 'lucide-react';

const ProfitAlerts: React.FC = () => {
  const { alerts } = useApp();

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'PROFIT': return <TrendingUp className="w-5 h-5 text-green-500" />;
      case 'LOSS': return <TrendingDown className="w-5 h-5 text-red-500" />;
      default: return <Target className="w-5 h-5 text-blue-500" />;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'PROFIT': return 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200';
      case 'LOSS': return 'bg-gradient-to-r from-red-50 to-rose-50 border-red-200';
      default: return 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
          <Bell className="w-4 h-4 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">Profit Alerts</h2>
        <div className="ml-auto flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-500">Live</span>
        </div>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className={`p-4 rounded-lg border-2 ${getAlertColor(alert.type)} transform hover:scale-105 transition-transform duration-200`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                {getAlertIcon(alert.type)}
                <div>
                  <span className="font-bold text-lg text-gray-800">{alert.symbol}</span>
                  <span className={`ml-2 px-3 py-1 rounded-full text-xs font-bold ${
                    alert.type === 'PROFIT' ? 'bg-green-500 text-white' :
                    alert.type === 'LOSS' ? 'bg-red-500 text-white' :
                    'bg-blue-500 text-white'
                  }`}>
                    {alert.type}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span className="text-xl font-bold text-green-600">
                    {alert.amount.toFixed(2)}
                  </span>
                </div>
                <div className={`text-sm font-semibold ${
                  alert.percentage >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {alert.percentage >= 0 ? '+' : ''}{alert.percentage.toFixed(2)}%
                </div>
              </div>
            </div>
            <p className="text-gray-700 font-medium mb-2">{alert.message}</p>
            <div className="text-xs text-gray-500">
              {alert.timestamp.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfitAlerts;