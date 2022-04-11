import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { AppBar, Button, Tab, Tabs } from '@material-ui/core';
import Signin from './Signin';
import Signup from './Signup';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: 400,
        backgroundColor: theme.palette.background.paper,
        color: "white"
        , borderRadius: 10,
    },
}));

export default function Authmodal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    //   const classes = useStyles();
    const [value, setValue] = React.useState(0);
    console.log(value);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Button onClick={handleOpen} variant='contained' style={{ width: 85, height: 40, marginRight: 15, color: "#123d6e", backgroundColor: '#ecf2f6' }}
            >
                Login
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper} >
                        <AppBar position="static" style={{ backgroundColor: "transparent", color: "white" }}>
                            <Tabs onChange={handleChange} variant="fullWidth" style={{ borderRadius: 10 }}>
                                <Tab label="Sign In" />
                                <Tab label="Sign Up" />
                            </Tabs>

                        </AppBar>
                        {value===0 && <Signin/>}
                        {value===1 && <Signup/>}
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
