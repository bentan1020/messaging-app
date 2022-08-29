import { Input, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { auth, db } from '../firebase'
import firebase from 'firebase/compat/app';

function SendMessages() {
    const [msg, setMsg] = useState("")

    async function sendMessage(e){
        e.preventDefault()
        const {uid, photoURL} = auth.currentUser

        await db.collection("messages").add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })

        setMsg("")
    }

    return (
        <div>
            <form onSubmit={sendMessage}> 
                <Input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Messages..."></Input>
                <Button type='submit'>Send</Button>
            </form>
        </div>
    )
}

export default SendMessages