import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import { CryptoState } from '../ContextAPi/CryptoContext'
import { SingleCoin } from '../Config/Api';
import { useState,useEffect } from 'react';
import { LinearProgress, makeStyles ,Typography } from '@material-ui/core';
import Coininfo from '../Components/Coininfo';
import { numberWithCommas } from '../Components/Banner/Carousel';




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
      width: "100%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid grey",
    },
    image:{
      paddingLeft: 35,
      paddingTop: 35,
    },
    heading: {
      fontWeight: "bold",
      marginBottom: 20,
      paddingLeft: 35,
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
    marketData: {
      alignSelf: "start",
      padding: 25,
      paddingTop: 10,
      width: "100%",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "space-around",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
      },
      [theme.breakpoints.down("xs")]: {
        alignItems: "start",
      },
    },
  }))
  
  const classes=useStyles();
  
  if(!coin)return <LinearProgress style={{backgroundColor:"black"}}/>
  
  return (
    <>
    <img  className={classes.image}
          src={coin?.image.large}
          alt={coin?.name}
          height="150"
          style={{ marginBottom: 20 }}
          
        />
        <Typography variant="h3" className={classes.heading}>
          {coin?.name}
        </Typography>
      <Coininfo  coin={coin} />
    <div  className={classes.container}>

        <div className={classes.sidebar}>
        

        <Typography variant="subtitle1" className={classes.description}>
        {coin?.description.en.split(". ")[0]}.
        </Typography>
        <div className={classes.marketData}>
            <span style={{ display : "flex" }}>
            <Typography variant="h5" className={classes.heading}>
              Rank :
            </Typography>
            <Typography variant="h5" >
              {coin?.market_cap_rank}
            </Typography>
            </span>
            <span style={{ display : "flex" }}>
            <Typography variant="h5" className={classes.heading}>
              Current  Price:
            </Typography>
            <Typography variant="h5" >
            {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}{" "}
              
            </Typography>
            
            </span>

            <span style={{ display : "flex" }}>
            <Typography variant="h5" className={classes.heading}>
              Market   Cap:
            </Typography>
            <Typography variant="h5" >
            {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}{" "}
               M
            </Typography>
            
            </span>
        </div>



        </div>


        {/* chart */}

    </div>
    </>
  )
}
