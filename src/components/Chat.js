import React, { useState, useEffect} from 'react'
import { db, auth } from '../firebase'
import SendMessages from './SendMessages'
import SignOut from './SignOut'

function Chat() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    db.collection("messages").orderBy("createdAt").limit(50).onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
    <div>
      <SignOut/>
      <div className='msgs'>
        {messages.map(({id, text, photoURL, uid}) => (
          <div>
            <div key={id} className={`msg ${uid == auth.currentUser.uid ? 'sent' : 'received'}`}>
              <img src={photoURL} alt="image"></img>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessages/> 
    </div>
  )
}

export default Chat 