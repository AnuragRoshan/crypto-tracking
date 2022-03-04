import { Container, makeStyles, Typography } from "@material-ui/core";
// import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./bannerbg4.png)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Cryptracker
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              // color: "black",
              textTransform: "capitalize",
              fontWeight:'medium',
          color:'black',
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        {/* <Carousel /> */}
      </Container>
    </div>
  );
}

export default Banner;


// Fastest Update and Best Crypto News on The Internet
// fontWeight:'medium',
//           color:'black',
// import React from 'react'
// import { makeStyles, Container } from '@material-ui/core'



// const useStyles=makeStyles(()=>({
  
  // banner:{
    //     backgroundImage:"url(./bannerbg.jpg)",
    
    // },
    // bannerContent:{
      // height:400,
      // display:"flex",
      // flexDirection:"column",
      // paddingTop:25,
      // justifyContent:"space-around"
// },

// }))

// function Banner() {
//     const classes =useStyles();
//   return (
//       <div className='classes.banner'>
//       <Container className='classes.bannerContent'>

//     </Container>
//     </div>
//   )
// }

// export default Banner