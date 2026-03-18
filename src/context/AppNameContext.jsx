import { createContext } from "react";

export const AppNameContext=createContext();

export const AppNameProvider=({children}) => {
    const appName="Invento App";
    return (<AppNameContext.Provider value={{appName}}>
        {children}
    </AppNameContext.Provider>)
}