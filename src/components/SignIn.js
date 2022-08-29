import React from 'react'
import firebase from 'firebase/compat/app';
import { auth } from '../firebase.js'

import { Button, Typography, Box } from '@material-ui/core'
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import GoogleIcon from '@mui/icons-material/Google';

function SignIn() {

    function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <>
            <div className="flex flex-col text-center">
                <Box pt={8} pb={3}>
                    <MessageRoundedIcon color='primary' sx={{ fontSize: 100 }}></MessageRoundedIcon>
                </Box>
                <Box pt={3} pb={3}>
                    <Typography variant='h5'>React Message Chat</Typography>
                </Box>
                <Box pt={3} pb={3}>
                    <Button variant="contained" startIcon={<GoogleIcon/>} color="primary" onClick={signInWithGoogle}>Sign In With Google</Button>
                </Box>
            </div>
        </>
    )
}

export default SignIn
