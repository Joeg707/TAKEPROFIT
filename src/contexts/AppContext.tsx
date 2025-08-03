import React, { createContext, useContext, useState, useEffect } from 'react';
import { Stock, TradingSignal, ProfitAlert } from '@/types/stock';
import { mockStocks, mockSignals, mockAlerts } from '@/utils/mockData';

interface AppContextType {
  stocks: Stock[];
  signals: TradingSignal[];
  alerts: ProfitAlert[];
  addAlert: (alert: ProfitAlert) => void;
  addSignal: (signal: TradingSignal) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stocks, setStocks] = useState<Stock[]>(mockStocks);
  const [signals, setSignals] = useState<TradingSignal[]>(mockSignals);
  const [alerts, setAlerts] = useState<ProfitAlert[]>(mockAlerts);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(prev => prev.map(stock => ({
        ...stock,
        price: stock.price + (Math.random() - 0.5) * 2,
        change: (Math.random() - 0.5) * 5,
        changePercent: (Math.random() - 0.5) * 3
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const addAlert = (alert: ProfitAlert) => {
    setAlerts(prev => [alert, ...prev]);
  };

  const addSignal = (signal: TradingSignal) => {
    setSignals(prev => [signal, ...prev]);
  };

  return (
    <AppContext.Provider value={{ stocks, signals, alerts, addAlert, addSignal }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};