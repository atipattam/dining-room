
import React , { useState} from 'react'
import {storage, db} from './firebase';
import firebase from "firebase";
import './ImageUpload.css';
const ImageUpload = ({username}) => {
    const [image,setImage] = useState(null);
     const [progress,setProgress] = useState(0);
    const [caption,setCaption] = useState('');
    
    const [user]= useState(null);
    const handleChange = (e) =>{
        if (e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };
    const handleUpload = () =>{
        const uploadTask =storage.ref(`images/${image.name}`). put(image);
        uploadTask.on(
           "state_changed",
           (snapshot) =>{
               const progress=Math.round(
             (snapshot.bytesTransferred / snapshot.totalBytes) * 100 ); 
           setProgress(progress);
            },
            (err) =>{
                console.log(err);
                alert(err.message);
            },
            () =>{
                storage.ref("images").child(image.name).getDownloadURL()
                .then(url =>{
                    db.collection("posts").add({
                      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                       caption: caption,
                       imageUrl: url,
                       username: username,
                      
                    });
                    setProgress(0);
                    setCaption("");
                    setImage(null);
                });
            }
        )
    }
    return (
        <div className="contaionerAll">
            
            <div className="imageupload">
            <div className="newPost">New Post</div>
            <input type="text" className="text" placeholder ='Enter a caption' 
            onChange={event =>setCaption(event.target.value) }/><br></br>
            <input type="file" onChange={handleChange} />
            <div className="boxProgress"> <progress className ="progress"value={progress} /> </div>
         <button className="myButton" onClick={handleUpload}>Post</button>
           
        </div>
        </div>
        
    )
}

export default ImageUpload;
