import React , {useState, useEffect} from 'react'
import './Post.css'
import {db} from './firebase'
import Avatar from "@material-ui/core/Avatar";
import firebase from 'firebase';
import moment from 'moment';
function Post({postId,username,user, caption, imageUrl,timestamp,picp}) {
   
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    useEffect(() =>{
        let unsub;
        if (postId) {
        unsub = db.collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot) =>{
            setComments(snapshot.docs.map((doc) => doc.data()));
            });
    }
    return () => {
        unsub();

    };
}, [postId]);

const postComment = (event) =>{
event.preventDefault();
db.collection("posts").doc(postId).collection("comments").add({
   text: comment,
   username : user.displayName,
   timestamp : firebase.firestore.FieldValue.serverTimestamp(),
   picp :user.photoURL
}
   );
setComment('');

}
        

     return (
       
        <div className="post"> 
           
            <div className="allInPost">
            <div className="post__header">
               
         

          
            <Avatar className="post__avatar" alt='User1' />
    <h3>{username} </h3>  
   
     </div> <div className="date">  </div>
           
           <img className="post__image" src={imageUrl}/>
<div className = "BoxComment">
             <h4 className="post__text"><b>{username}</b> : {caption}   </h4>
</div>

        <div className="postcomment"  >
            {comments.map((comment) => (
<p>
            <b>{comment.username}</b> {comment.text} 
            </p> 

            ))}


        </div>

        <form className="postcommentbox">
     <input
     className ="postinput"
     type="text"
     placeholder=""
     value= {comment}
     onChange={(e) => setComment(e.target.value)}/>
     <button
     className="postbutton"
     disabled ={!comment}
     type ="submit"
     onClick={postComment}>Comment</button>

        </form>

       

        </div>
        </div>
     



       
        
    )
    
}



export default Post
