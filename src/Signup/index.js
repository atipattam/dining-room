import React ,{useState,useEffect} from 'react'
import { FormButton, FormContent, FormInput, FormLabel,Form,FormH1,FormWrap,Container,Icon } from './SignupElement'
import {auth} from '../firebase';
import{useHistory} from 'react-router-dom';

function SignUp ()  {
    const [open, setOpen] = useState(false);
const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
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
        
        const signUp = (event) =>{
            event.preventDefault();
            auth.createUserWithEmailAndPassword(email,password)
            .then((authUser) =>{
                if(authUser){
                    history.push('/page')
                    return authUser.user.updateProfile({
                        displayName: username}
                    )
                }
             
              
            })
                
           
            .catch((err) => alert(err.message));
            
            setOpen(false);
            }
    return (
        <div>
            <Container>
                <FormWrap>
                    <Icon to='/'>Dining room</Icon>
                    <FormContent>
                        <Form>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Username</FormLabel>
                            <FormInput type='text'  onChange={(e) => setUsername(e.target.value)}/>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email'  onChange={(e) => setEmail(e.target.value)}/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' onChange={(e) => setPassword(e.target.value)}/>
                            <FormButton type='submit' onClick={signUp}>Continue</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </div>
    )
}

export default SignUp