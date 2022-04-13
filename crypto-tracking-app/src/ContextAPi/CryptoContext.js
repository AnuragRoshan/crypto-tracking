import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { CoinList } from "../Config/Api";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  const [coins, setCoins] = useState([])
  const [loading, setloading] = useState(false)

  const [user, setuser] = useState(null)

  const [alert, setAlert] = useState({

    open:false,
    message:"",
    type:"error",
  })
  const fetchCoins = async () => {
    setloading(true)
    const { data } = await axios.get(CoinList(currency))
    setCoins(data)
    setloading(false)
}

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
    else if (currency === "EUR") setSymbol("€");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency ,symbol ,coins ,loading ,fetchCoins ,alert , setAlert}}>
      {children}
    </Crypto.Provider>  
  ); 
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
