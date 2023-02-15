import { createContext, FC, ReactElement, useContext, useState } from "react";
import { IContext } from "../types/types";

export type AppProviderProps = { children: ReactElement };

const AppContext = createContext({} as IContext);

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(false);
  return (
    <AppContext.Provider value={{ sidebarOpened, setSidebarOpened }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): IContext => useContext(AppContext);
