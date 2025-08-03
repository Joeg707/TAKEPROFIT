import { Stock, TradingSignal, ProfitAlert, ChartData } from '@/types/stock';

export const mockStocks: Stock[] = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 175.43, change: 2.34, changePercent: 1.35, volume: 45234567 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2847.92, change: -15.67, changePercent: -0.55, volume: 1234567 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', price: 378.85, change: 4.23, changePercent: 1.13, volume: 23456789 },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 248.73, change: 12.45, changePercent: 5.27, volume: 67890123 },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 892.34, change: -8.92, changePercent: -0.99, volume: 34567890 }
];

export const mockSignals: TradingSignal[] = [
  {
    id: '1',
    symbol: 'AAPL',
    type: 'BUY',
    confidence: 85,
    price: 175.43,
    timestamp: new Date(),
    reason: 'Strong earnings momentum'
  },
  {
    id: '2',
    symbol: 'TSLA',
    type: 'SELL',
    confidence: 72,
    price: 248.73,
    timestamp: new Date(Date.now() - 300000),
    reason: 'Overbought conditions'
  }
];

export const mockAlerts: ProfitAlert[] = [
  {
    id: '1',
    symbol: 'NVDA',
    type: 'PROFIT',
    amount: 1250.50,
    percentage: 8.5,
    timestamp: new Date(),
    message: 'Target profit reached!'
  }
];

export const generateChartData = (): ChartData[] => {
  const data: ChartData[] = [];
  let price = 100;
  
  for (let i = 0; i < 24; i++) {
    price += (Math.random() - 0.5) * 5;
    data.push({
      time: `${i}:00`,
      price: Math.round(price * 100) / 100,
      volume: Math.floor(Math.random() * 1000000)
    });
  }
  
  return data;
};