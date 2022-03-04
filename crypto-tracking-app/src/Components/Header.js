import React from 'react'
import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import {useNavigate} from "react-router-dom"
// import { CryptoState } from '../CryptoContext';
import { CryptoState } from '../ContextAPi/CryptoContext';

export default function Header() {

    //to navigate one page to another
    const navigate = useNavigate();

    const darkTheme = createTheme({
        palette:{
            primary:{
                main:"#123d6e"
            },
            // type:"light"
        }
    })
    
    const useStyles=makeStyles(()=>({
        title:{
            flex:1,
            color:'#123d6e',
            fontFamily:'Montserrat',
            fontWeight:"bold",
            cursor:"pointer"
        }
    }))
    const classes=useStyles();

    const {currency, setCurrency} = CryptoState()
    // console.log(symbol);

    return (
        // use create theme in the provided area
        <ThemeProvider theme={darkTheme} >  
        <AppBar color='transparent' position='static'>
            <Container>
                <Toolbar>
                    <Typography className={classes.title} onClick={()=>navigate("/")}
                    variant='h6'
                    > 
                         Crypto-App
                    </Typography>
                    <Select 
                    value={currency}
                    onChange={(e)=>setCurrency(e.target.value)}
                    variant='outlined' style={{ width: 100, height: 40, marginRight: 15, color:"#123d6e",backgroundColor: '#c0ced1' }}>
                        <MenuItem value={"USD"} >USD</MenuItem>
                        <MenuItem value={"INR"}>INR</MenuItem>
                        <MenuItem value={"TUR"}>TUR</MenuItem>
                    </Select>
                </Toolbar>
            </Container>



        </AppBar>
        </ThemeProvider>
    )
}
