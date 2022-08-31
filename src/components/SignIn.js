import React from 'react'
import firebase from 'firebase/compat/app';
import { auth } from '../firebase.js'

import { Button, Typography, Box, Paper } from '@material-ui/core'
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import GoogleIcon from '@mui/icons-material/Google';

import signInBackground from "../assets/background.jpeg"

const styles = {
    paperContainer: {
        backgroundImage: `url(${signInBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }
};

function SignIn() {

    function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <>
            <Paper style={styles.paperContainer}>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                    <Box></Box>
                    <Box sx={{ p:10 }}> 
                        <div className="flex flex-col text-center h-screen pt-32 bg-slate-50">
                            <Box pt={5}>
                                <Typography variant='h5'>React Message Chat</Typography>
                            </Box>
                            <Box pt={2}>
                                <Typography variant='h8'>Sign Into Your Account</Typography>
                            </Box>
                            <Box py={3}>
                                <MessageRoundedIcon color='primary' sx={{ fontSize: 100 }}></MessageRoundedIcon>
                            </Box>
                            <Box py={3}>
                                <Button variant="contained" startIcon={<GoogleIcon/>} color="primary" onClick={signInWithGoogle}>Sign In With Google</Button>
                            </Box>
                        </div> 
                    </Box>
                    <Box></Box>
                </Box>
            </Paper>
        </>
    )
}

export default SignIn
