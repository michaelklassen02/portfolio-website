import './Menu.css'
import {useState} from 'react'
import HamburgerIcon from './HamburgerIcon.tsx'

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
                </div>
            : 
                <div />
            }
            <HamburgerIcon openCloseFunction={toggleMenu}/>
        </>
    )
}