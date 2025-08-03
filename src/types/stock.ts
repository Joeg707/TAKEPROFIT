export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
}

export interface TradingSignal {
  id: string;
  symbol: string;
  type: 'BUY' | 'SELL' | 'HOLD';
  confidence: number;
  price: number;
  timestamp: Date;
  reason: string;
}

export interface ProfitAlert {
  id: string;
  symbol: string;
  type: 'PROFIT' | 'LOSS' | 'TARGET_HIT';
  amount: number;
  percentage: number;
  timestamp: Date;
  message: string;
}

export interface ChartData {
  time: string;
  price: number;
  volume: number;
}