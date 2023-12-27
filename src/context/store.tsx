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
}
const GlobalContext = createContext<ContextProps>({
  search: "",
  setSearch: (): string => "",
});

export const GlobalContextProvider = ({ children }: any) => {
  const [search, setSearch] = useState("");

  return (
    <GlobalContext.Provider value={{ search, setSearch }}>
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => useContext(GlobalContext);
