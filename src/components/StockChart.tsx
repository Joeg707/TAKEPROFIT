import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { generateChartData } from '@/utils/mockData';
import { BarChart3, TrendingUp } from 'lucide-react';

const StockChart: React.FC = () => {
  const chartData = generateChartData();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
          <BarChart3 className="w-4 h-4 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">Market Overview</h2>
        <div className="ml-auto flex items-center space-x-2">
          <TrendingUp className="w-4 h-4 text-green-500" />
          <span className="text-sm font-semibold text-green-600">+2.34%</span>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="time" 
              stroke="#666"
              fontSize={12}
            />
            <YAxis 
              stroke="#666"
              fontSize={12}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
            />
            <Area 
              type="monotone" 
              dataKey="price" 
              stroke="#8884d8" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorPrice)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="text-center p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
          <div className="text-sm text-gray-600">High</div>
          <div className="text-lg font-bold text-blue-600">$105.67</div>
        </div>
        <div className="text-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
          <div className="text-sm text-gray-600">Low</div>
          <div className="text-lg font-bold text-green-600">$94.23</div>
        </div>
        <div className="text-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
          <div className="text-sm text-gray-600">Volume</div>
          <div className="text-lg font-bold text-purple-600">2.4M</div>
        </div>
      </div>
    </div>
  );
};

export default StockChart;