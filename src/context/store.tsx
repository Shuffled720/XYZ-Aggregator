"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  apiType: string;
  setApiType: Dispatch<SetStateAction<string>>;
}
const GlobalContext = createContext<ContextProps>({
  search: "",
  setSearch: (): string => "",
  apiType: "",
  setApiType: (): string => "",
});

export const GlobalContextProvider = ({ children }: any) => {
  const [search, setSearch] = useState("india");
  const [apiType, setApiType] = useState("news");
  return (
    <GlobalContext.Provider value={{ search, setSearch, apiType, setApiType }}>
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => useContext(GlobalContext);
