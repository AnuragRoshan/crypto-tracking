import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import { CryptoState } from '../ContextAPi/CryptoContext'
import { SingleCoin } from '../Config/Api';
import { useState,useEffect } from 'react';
import { makeStyles ,Typography } from '@material-ui/core';
import Coininfo from '../Components/Coininfo';
import parse from 'html-react-parser';



export default function Coinpage() {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  console.log(coin);

  useEffect(() => {
    fetchCoin();
  }, []);
 
  const useStyles=makeStyles((theme )=>({
    container:{
      display:"flex",
      [theme.breakpoints.down("md")]:{
        flexDirection:"column",
        alignItems:"center",
      }
    },
    sidebar: {
      width: "30%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid grey",
    },
    heading: {
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Montserrat",
    },
    description: {
      width: "100%",
      fontFamily: "Montserrat",
      padding: 35,
      paddingBottom: 15,
      paddingTop: 0,
      textAlign: "justify",
    },
  }))

  const classes=useStyles();
  
  return (
    <div  className={classes.container}>

        <div className={classes.sidebar}>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" className={classes.heading}>
          {coin?.name}
        </Typography>

        <Typography variant="subtitle1" className={classes.description}>
        {coin?.description.en.split(". ")[0]}.

        </Typography>



        </div>


        {/* chart */}
      <Coininfo  coin={coin} />

    </div>
  )
}
