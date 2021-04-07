import React ,{useState,useEffect} from 'react'
import { FormButton, FormContent, FormInput, FormLabel,Form,FormH1,FormWrap,Container,Icon ,Img,ImgWrap} from './SigninElements'
import {auth,provider} from '../firebase';
import { useHistory } from 'react-router-dom';
import picture from '../images/google.png';
function SignIn ()  {
  const history = useHistory();
  const [username] = useState('');
  const [user,setUser] = useState(null);
 
    useEffect(() =>{
        auth.onAuthStateChanged((authUser) => {
        if(authUser){
            history.push('/page')
        console.log(authUser);
        setUser(authUser);
        
        
        }
        else{
        
          setUser(null);
        }
        })
        }, [user, username]);
        
        const signIn = (event) =>{
            event.preventDefault();
            auth.signInWithPopup(provider)
            .catch((err) => alert (err.message))

           
          
            
          }
    return (
        <div>
            <Container>
                <FormWrap>
                    <Icon to='/'>Dining room</Icon>
                    <FormContent>
                        <Form>
                            <ImgWrap>
                            <Img src ={picture}/>
                            </ImgWrap>
                            <FormH1>Sign in to your Google account</FormH1>
                            
                            <FormButton type='submit' onClick={signIn}>Continue</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </div>
    )
}

export default SignIn