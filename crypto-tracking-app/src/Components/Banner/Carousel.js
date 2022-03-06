import {makeStyles, Link } from  "@material-ui/core"
import { CryptoState } from '../../ContextAPi/CryptoContext'
import { useState } from 'react'
import axios from "axios"
import { TrendingCoins } from '../../Config/Api'
import { useEffect , React } from 'react'
import AliceCarousel from "react-alice-carousel";


const useStyles=makeStyles((theme)=>({
    carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
        backgroundColor:"#c0ced15e"
      },
      carouselItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        textTransform: "uppercase",
        color: "white",
        '&:hover': {
            backgroundColor:"#c0ced15e"
         },
         borderRadius: "4px 4px 4px 4px",
        },

}))

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const Carousel = () => {
const classes=useStyles();
const {currency,symbol}= CryptoState();
const [trending, settrending] = useState([])
    const fetchTrendingCoins=async()=>{
        const {data}=await axios.get(TrendingCoins(currency))
        settrending(data )
    };
        // console.log(trending);

     useEffect(() => {
     
        fetchTrendingCoins();
     
    }, [currency])
    
    const items = trending.map((coin) => {
      let profit = coin?.price_change_percentage_24h >= 0;
  
      return (
        <Link className={classes.carouselItem} to={`/coins/${coin.id}`} style={{ textDecoration: 'none' }}>
          <img
            src={coin?.image}
            alt={coin.name}
            height="80"
            style={{ marginBottom: 10 }}
          />
          <span>
            {coin?.symbol}
            &nbsp;
            <span
              style={{
                color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                fontWeight: 500,
              }}
            >
              {profit && "+"}
              {coin?.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </span>
          <span style={{ fontSize: 22, fontWeight: 500 }}>
            {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
          </span>
        </Link>
      );
    });



    const responsive = {
      0: {
        items: 2,
      },
      512: {
        items: 4,
      },
    };

  return (
    <div className={classes.carousel}>
      <AliceCarousel
     mouseTracking
     infinite
    //  autoPlayInterval={100}
     animationDuration={4000}
     disableDotsControls
     disableButtonsControls
     responsive={responsive}
     items={items}
     autoPlay
    
    /></div>
  )
}

export default Carousel