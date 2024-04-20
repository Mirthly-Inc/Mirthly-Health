"use client";

import { createContext, useContext, useState } from "react";

interface DataContextValue {
  data: any | null;
  setData: (data: any) => void;
}

const DataContext = createContext<DataContextValue>({
  data: null,
  setData: () => {},
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<any | null>(null);
  const [user, setUser] = useState<string | null>(null);

  return (
    <DataContext.Provider value={{ data, setData, user, setUser }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
