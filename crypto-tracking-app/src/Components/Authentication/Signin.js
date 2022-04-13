import { Button, makeStyles, TextField } from '@material-ui/core'
import { useState,React } from 'react'

function Signin({handleClose} ) {
  const useStyles = makeStyles(() => ({
    cssLabel: {
      color: "grey",
      "&.Mui-focused": {
        color: "#071c34"
      }
    },
    outerbox: {
      margin: 30,
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

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit=()=>{
    // if(password!==confirmPassword){
    
    // }
  }
  const classes = useStyles();
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
      <Button style={{ marginTop: 30, backgroundColor: "#c0ced1", color: "#c0ced1" }} variant='outlined'
        onClick={handleSubmit}
      >
        Signin
      </Button>
      <div style={{ marginTop: 30 ,  width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",}}>
        OR
      </div>
    </div>

  )
}

export default Signin