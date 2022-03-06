import React from 'react'
import { CoinList } from '../Config/Api'
import { useState } from 'react'
import { CryptoState } from '../ContextAPi/CryptoContext'
import Pagination from "@material-ui/lab/Pagination";
import { useEffect ,setSearch } from 'react'
import axios from "axios"
import {
    Container,
    createTheme,
    TableCell,
    LinearProgress,
    ThemeProvider,
    Typography,
    TextField,
    TableBody,
    TableRow,
    TableHead,
    TableContainer,
    Table,
    Paper,makeStyles
  } from "@material-ui/core";
  import {useNavigate} from "react-router-dom"
  export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
const Coinstable = () => {
const [coins, setCoins] = useState([])
const [loading, setloading] = useState(false)
const {currency,symbol}= CryptoState();
const [page, setPage] = useState(1);
const [search, setSearch] = useState("");

const fetchCoins=async()=>{
    setloading(true)
    const {data}=await axios.get(CoinList(currency))
        setCoins(data )
        setloading(false)
}

console.log(coins);
useEffect(() => {
     
    fetchCoins();
 
}, [currency])

const darkTheme = createTheme({
    palette:{
        primary:{
            main:"#ecf2f6"
        },
        type:"light",
        color:"black"
    }
})

const useStyles = makeStyles({
    row: {
      backgroundColor: "#c0ced1",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#4c6b6996",
        color:"black"
      },
      fontFamily: "Montserrat",
    },
    pagination: {
      "& .MuiPaginationItem-root": {
        color: "black",
      },
    },
  });

  const classes = useStyles();
const navigate = useNavigate();

const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <>
    <ThemeProvider theme={darkTheme}>

    <Container style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          style={{ margin: 18, fontFamily: "Montserrat" }}
        >
          Cryptocurrency Prices by Market Cap
        </Typography>
        <TextField
          label="Search For a Crypto Currency.."
          variant="outlined"
          style={{ marginBottom: 20, width: "70%" , color:"black"}}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer component={Paper}>
          {loading ? (
            <LinearProgress variant="determinate"  style={{ backgroundColor: "#176906" }} />
          ) : (
            <Table aria-label="simple table">
              <TableHead style={{ backgroundColor: "#4c6b6996" }}>
                <TableRow>
                  {["Coin", "Price", "24h Change","Market Cap","7d Change" ].map((head) => (
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "700",
                        fontFamily: "Montserrat",
                      }}
                      key={head}
                      align={head === "Coin" ? "" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {handleSearch()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <TableRow
                        className={classes.row}
                        key={row.name}
                      >
                        <TableCell
                        onClick={()=>navigate("/")}
                          component="th"
                          scope="row"
                          style={{
                            display: "flex",
                            gap: 15,
                          }}
                        >
                          <img
                            src={row?.image}
                            alt={row.name}
                            height="20"
                            style={{ marginBottom: 0 }}
                          />
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                              }}
                            >
                              {row.symbol}
                            </span>
                            <span style={{ color: "black" }}>
                              {row.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="right">
                          {symbol}{" "}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: profit > 0 ? "#176906" : "red",
                            fontWeight: 500,
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>
                        <TableCell align="right">
                          {symbol}{" "}
                          {numberWithCommas(
                            row.market_cap.toString().slice(0, -6)
                          )}
                          M
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            fontWeight: 500,
                          }}
                        >
                          
                          {row.total_volume}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer>

        {/* Comes from @material-ui/lab */}
        <Pagination
          count={(handleSearch()?.length / 10).toFixed(0)}
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          classes={{ ul: classes.pagination }}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />
      </Container>


    </ThemeProvider>
    </>
  )
}

export default Coinstable