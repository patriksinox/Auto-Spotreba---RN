//Systémové importy
import { createContext, useContext, useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
//Context
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
//Moje importy

import Fetch from "../lib/Fetch";

const GlobalProvider = ({ children }) => {
  const [network, setNetwork] = useState(false);
  const { benzin95, benzin98, lpg, nafta, elektroAC, elektroDC } =
    Fetch(network);

  useEffect(() => {
    NetInfo.fetch().then((state) => {
      setNetwork(state);
    });
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetwork(state);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        benzin95,
        benzin98,
        nafta,
        lpg,
        elektroAC,
        elektroDC,
        network,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
