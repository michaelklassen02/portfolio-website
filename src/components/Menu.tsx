import '../styles/Menu.css'
import {useState} from 'react'
import HamburgerIcon from './HamburgerIcon.tsx'
import MenuButton from './MenuButton.tsx'

export default function Menu () {
    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!open)
    }

    return (
        <>
            {open 
            ? 
                <div className='menu-container'> 
                    <MenuButton name='Home' link='/'/>
                    <MenuButton name='About Me' link='/aboutme'/>
                    <MenuButton name='Qualifications' link='/qualifications'/>
                    <MenuButton name='Work Experience' link='/workexperience'/>
                    <MenuButton name='Technical Demos' link='/technicaldemos'/>
                    <MenuButton name='Contact Me' link='/contact'/>
                </div>
            : 
                <div />
            }
            <HamburgerIcon open={open} openCloseFunction={toggleMenu}/>
        </>
    )
}