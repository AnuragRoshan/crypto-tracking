import React, { useEffect } from 'react'
import { HistoricalChart } from '../Config/Api'
import { CryptoState } from '../ContextAPi/CryptoContext';
import axios from "axios"
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const Coininfo = ({coin}) => {
  const  [historicData, sethistoricData] = useState()
  const [days, setdays] = useState(1)
  const {currency}=CryptoState();

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id,currency,days));

    sethistoricData(data.prices);
  };

  useEffect(()=>{

    fetchHistoricData();
  },[days,currency])

  const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#ecf2f6"
        },
        type: "light",
        color: "black"
    }
})



const useStyles=makeStyles((theme)=>({
  container: {
    width: "75%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    padding: 40,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: 0,
      padding: 20,
      paddingTop: 0,
    },
  },

}))
const classes=useStyles
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
    {/* chart */}
    
    {/* buttons */}
      </div>

    </ThemeProvider>
  )
}

export default Coininfo