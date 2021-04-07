import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import InfoSection2 from '../components/infosection2'
import { homeObjOne } from '../components/InfoSection/Data'
import { homeObj2 } from '../components/infosection2/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <>
       <Sidebar isOpen={isOpen} toggle={toggle} />
       <Navbar toggle={toggle}/>
       <HeroSection/>
       <InfoSection {...homeObjOne}/>
        <InfoSection2 {...homeObj2}/>
       <Services/>
       <Footer/>
       </>
    )
}

export default Home
