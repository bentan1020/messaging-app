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
                <div className="sendMsg">
                    <Input style={{ width: '80%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    
                    <Button style={{ width: '20%', fontSize: '15px', fontWeight: '550', margin: '4px 1% -13px 1%', maxWidth: '200px'}} type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessages