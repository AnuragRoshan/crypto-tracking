import React from 'react'
import { makeStyles, Box, Typography, Button } from '@material-ui/core'


const useStyles = makeStyles(theme => ({

container:{
    width: "auto",
    height: "100%",
    display: "flex",
    paddingTop:"41px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    
    
    
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexDirection: "column",
      marginTop: 0,
      padding: 200,
      width: "auto",
      height: "auto",
      alignItems: "center",
      justifyContent: "center",
    },
  
},
  containerTop: {
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingInline: 150,
    paddingBlock:30,
    
    
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexDirection: "column",
      marginTop: 0,
      padding: 200,
      width: "auto",
      height: "auto",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  containerInside: {
    backgroundColor:"white",
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 60,
    // border: "1px solid black",
    borderRadius: 8,
    marginInline:12,
    '&:hover': {
      transform: "scale3d(1.05, 1.05, 1)",
      transition: "transform 0.5s ease-in-out",
      boxShadow: 2,
    },
    [theme.breakpoints.down("md")]: {
      // width: "100%",
      flexDirection: "column",
      marginTop: 30,
      padding: 100,
      width: "auto",
      height: "auto",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  Subheading: {
    width: "auto",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    fontFamily:'Montserrat', 
  },

  Button:{
    margin:10,
    padding:10,
    backgroundColor:"#c0ced1",
    '&:hover': {
      backgroundColor: "white",
      border:"1px solid #c0ced1",
    },
  }
}))
function Pricing() {
  const classes = useStyles()
  return (
    <>
      <div className={classes.container}>
       <Typography variant='h3' style={ {fontFamily:'Montserrat' , fontWeight:'800'} } >Pricing </Typography>
      </div>
    <div className={classes.containerTop}>
      
      <div className={classes.containerInside}>
        <Typography variant='heading' className={classes.Subheading}>
          Students
        </Typography>
        <Typography variant='h4' className={classes.Subheading}>
          Free
        </Typography>
        <Typography variant='heading' className={classes.Subheading}>
          Testing testing 1
        </Typography>
        <Typography variant='heading' className={classes.Subheading}>
          Testing Testing 2
        </Typography>
        <Typography variant='heading' className={classes.Subheading}>
          Testing Testing 3
        </Typography>
        <Button className={classes.Button} > 
          Buy Now
        </Button>
      </div>
      <div className={classes.containerInside}>
        <Typography variant='heading' className={classes.Subheading}>
          Pro
        </Typography>
        <Typography variant='h4' className={classes.Subheading}>
          $49
        </Typography>
        <Typography variant='heading' className={classes.Subheading}>
          Testing testing 1
        </Typography>
        <Typography variant='heading' className={classes.Subheading}>
          Testing Testing 2
        </Typography>
        <Typography variant='heading' className={classes.Subheading}>
          Testing Testing 3
        </Typography>
        <Button className={classes.Button}  >
          Buy Now
        </Button>

      </div>
      <div className={classes.containerInside}>
        <Typography variant='heading' className={classes.Subheading}>
          Enterprise
        </Typography>
        <Typography variant='h4' className={classes.Subheading}>
          $69
        </Typography>
        <Typography variant='heading' className={classes.Subheading}>
          Testing testing 1
        </Typography>
        <Typography variant='heading' className={classes.Subheading}>
          Testing Testing 2
        </Typography>
        <Typography variant='heading' className={classes.Subheading}>
          Testing Testing 3
        </Typography>
        <Button className={classes.Button} >
          Buy Now
        </Button>
      </div>


    </div>
    </>
  )
}

export default Pricing