import React, {useState,useEffect} from 'react'
import { db ,auth} from './firebase';

import Post from './Post';
import ImageUpload from './ImageUpload';
import Nav from './Nav';
function Page ()  {
  
  const [posts, setPosts] = useState([]);


  const [username] = useState('');
 
  const [user,setUser] = useState(null);
    useEffect(() =>{
        auth.onAuthStateChanged((authUser) => {
        if(authUser){
        console.log(authUser);
        setUser(authUser);
        
        
        }
        else{
        
          setUser(null);
        }
        })
        }, [user, username]);
        useEffect(() => {
            db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(doc=>({
              id: doc.id,
              post: doc.data()
            })));
            }) 
            }, []);
    return (
        <div>
            
              <Nav/>
    

      {user?.displayName ?(
        <ImageUpload username={user.displayName}/>
     ):(
       <h3> You must login to upload</h3>
     )}

      <div className="apppost">
        <div className="apppostleft">
      {
      posts.map(({id,post})=>(
        <Post key ={id} postId={id} timestamp={post.timestamp} user={user}  username={post.username} caption={post.caption} imageUrl={post.imageUrl} profilepic={post.photoURL}/>
      ))
      }
      </div>
      
      </div>
        
        </div>
    )
}

export default Page
