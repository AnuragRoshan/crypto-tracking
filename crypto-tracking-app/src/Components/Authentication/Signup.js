import { Button, makeStyles, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { CryptoState } from '../../ContextAPi/CryptoContext'

function Signup({ handleClose }) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {setAlert}=CryptoState();
  const [confirmPassword, setConfirmPassword] = useState("")

  const useStyles = makeStyles(() => ({
    cssLabel: {
      color: "grey",
      "&.Mui-focused": {
        color: "#071c34"
      }
    },
    outerbox: {
      margin: 20,
      // , border:"1px solid #c0ced1",
      padding: 2,
      display: "flex",
      flexDirection: "column",
    },
    innerbox: {
      margin: 87
    },
    input: {
      color: "black"
    },
    innerel: {
      marginBottom: 30
    }


  }))


  const classes = useStyles();

  const handleSubmit =()=>{
    if(password!==confirmPassword){
        setAlert({
          open:true,
          message:"password do not matched"
          , type : 'error'
           
        })
        return;
    }
  }
  return (
    <div className={classes.outerbox}>
      {/* <div className={classes.innerbox}>
        wewf
      </div > */}

      <TextField
        className={classes.innerel}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          }
        }}
        id="outlined-basic" label="Email" variant="outlined"
        type="email"
        
        onChange={(e)=>setEmail(e.target.value)}
        inputProps={{
          autocomplete: 'new-password',
          form: {
            autocomplete: 'off',
          },
        }}
        value={email}

      />
      {/* </div> */}
      <TextField
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          }

        }}
        id="outlined-basic" label="Password" variant="outlined"
        
        value={password}
        type="password"
        onChange={(e)=>setPassword(e.target.value)}

      />

      <TextField
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          }

        }}
        value={confirmPassword}
        id="outlined-basic" label="Confirm Password" variant="outlined"
        style={{ marginTop: 30 }}
        
        onChange={(e)=>setConfirmPassword(e.target.value)}
        type="password"

      />
      <Button 
      style={{ marginTop: 25, backgroundColor: "#c0ced1"}}
       variant='outlined'
      onClick={handleSubmit}

      >
        Signup
      </Button>
      <div style={{
        marginTop: 25, width: "auto",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}>
        OR
      </div>
      <div>

      </div>
    </div>

  )
}

export default Signup