import styled from 'styled-components'

export const ServicesContainer = styled.div`
height: 1000px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;

@media screen and (max-width: 768px){
    height: 1800px;

}
@media screen and (max-width: 480px){
    height: 1800px;
    }
    
`
export const ServicesWrapper = styled.div`
 max-width: 1000px;
 margin: 0 auto;
 display: grid;
 grid-template-columns: 1fr 1fr ;
 align-items:center;
 grid-gap: 16px;
 padding: 0 50px;
 @media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;

}
@media screen and (max-width: 768px){
    grid-template-columns: 1fr ;
    padding:0 20px;

}
`
export const ServicesWrapper2 = styled.div`
 max-width: 350px;
 margin:0 auto;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 align-items:center;
 grid-gap: 16px;
 padding: 0 50px;
 @media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;

}
@media screen and (max-width: 768px){
    grid-template-columns: 1fr ;
    padding:0 20px;

}
`
export const ServicesCard = styled.div`
/* border: 5px solid #eb6117; */
background: white;
display:flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
 border-radius: 10px;  
 max-height: 340px;
 padding: 50px;
 box-shadow: 0 1px 3px rgba(0,0,0,0.2);
 transition: all 0.2s ease-in-out;

 &:hover{
     transform: scale(1.02);
     transition: all 0.2 ease-in-out;
     cursor:pointer;
 }
`
export const ServicesCardL = styled.div`
background: white;
/* border:5px solid #eb6117; */


justify-content: flex-start;
align-items: center;
margin-top: 10px;
 border-radius: 10px;  
 max-height: 340px;
 padding: 50px;
 box-shadow: 0 1px 3px rgba(0,0,0,0.2);
 transition: all 0.2s ease-in-out;

 &:hover{
     transform: scale(1.02);
     transition:  0.2 ease-in-out;
     cursor:pointer;
 }
`
export const ServicesIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
border-radius: 50%;
    display: block;
    /* border:5px solid white; */


`
export const ServicesH1 = styled.h1`
font-size:3.5rem;
color:white;
margin-bottom: 64px;
/* text-shadow: 0 0 6px #FF0000; */
@media screen and (max-width: 480px){
   font-size: 2rem;

    }
`
export const ServicesH2 = styled.h2`
font-size:1rem;

margin-bottom: 10px;

@media screen and (max-width: 480px){
   font-size: 2rem;
   
    }
`
export const ServicesP = styled.p`
font-size:1rem;
text-align: center;
max-width :150px;



@media screen and (max-width: 480px){
   font-size: 1rem;
   
    }
`



