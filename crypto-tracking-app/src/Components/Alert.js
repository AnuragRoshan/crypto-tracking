import React from 'react'
import { CryptoState } from '../ContextAPi/CryptoContext'
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core'
const Alert = () => {

    const{alert,setAlert}=CryptoState()
    const handleClose=(event,reason)=>{
        if(reason==="clickaway"){
            return;
        }
        setAlert({open:false});
    }
    return (
        <Snackbar open={alert.open} autoHideDuration={2000} onClose={handleClose}>
        <MuiAlert
        onClose={handleClose}
        elevation={10}
        variant="filled"
        severity={alert.type}
        style={{color:"white"}}
        >
        {alert.message}
        </MuiAlert>
      </Snackbar>


  )
}

export default Alert