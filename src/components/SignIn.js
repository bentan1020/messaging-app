import React from 'react'
import firebase from 'firebase/compat/app';
import { auth } from '../firebase.js'

import { Button, Typography, Box} from '@material-ui/core'
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import GoogleIcon from '@mui/icons-material/Google';

function SignIn() {

    function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <>
            <div className="flex bg-yellow-500 h-screen">
                <div className='flex-1'></div>
                <div className='flex-1 py-32 px-72'>
                    <div className="flex flex-col text-center bg-yellow-100 rounded-3xl">
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
                </div>
                <div className='flex-1'></div>
            </div>
        </>
    )
}

export default SignIn
