import React, { useRef, useState } from 'react';
import './Chat.css';
import {Link} from 'react-router-dom';
import firebase from 'firebase/app';
import Avatar from "@material-ui/core/Avatar";

import {auth,db,provider} from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function Chat() {

  const [user] = useAuthState(auth);

  return (
    <div className="App11">
      <header>
        <h1>Dining Room Chat</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
   
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in11" onClick={signInWithGoogle}>Sign in with Google</button>
      
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <Link to="/page"><button className="sign-back" >Back</button></Link>
  )
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = db.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main className ="main11">

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form className ="form11" onSubmit={sendMessage}>

      <input className ="input11" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Aa" />

      <button className ="button11" type="submit" disabled={!formValue}>💬</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
  
    <Avatar src={photoURL}/>
      <p className ="p11">{text}</p>
    </div>
  </>)
}


export default Chat;