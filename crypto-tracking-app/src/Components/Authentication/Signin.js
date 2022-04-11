import { makeStyles, TextField } from '@material-ui/core'
import React from 'react'

function Signin() {
  const useStyles=makeStyles(()=>({

    outerbox:{
      margin:20
      , border:"1px solid #c0ced1",
      padding: 2,
      display:"flex",
      flexDirection: "column",
    },
    innerbox:{
      marginBlock:12
    },
    input: {
      color: "black"
    },
    

  }))

  
  const classes=useStyles();
  return (
    <div className={classes.outerbox}>
      {/* <div className={classes.innerbox}>
        wewf
      </div > */}
      <TextField 
    
     id="outlined-basic" label="Username" variant="outlined" 
    
  
      
      />
      <div className={classes.innerbox}>
        wewf
      </div>
      <div className={classes.innerbox}>
        wewf
      </div>
    </div>
    
  )
}

export default Signin