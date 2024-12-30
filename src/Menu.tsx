import './Menu.css'
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
                    <MenuButton name='About Me'/>
                    <MenuButton name='Qualifications'/>
                    <MenuButton name='Work Experience'/>
                    <MenuButton name='Technical Demos'/>
                    <MenuButton name='Contact Me'/>
                </div>
            : 
                <div />
            }
            <HamburgerIcon open={open} openCloseFunction={toggleMenu}/>
        </>
    )
}