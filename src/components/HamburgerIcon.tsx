import '../styles/HamburgerIcon.css'
import {HamburgerIconProps} from '../types/propTypes.tsx'

export default function HamburgerIcon (props: HamburgerIconProps) {
    return (
        <div className='hamburger-container' onClick={props.openCloseFunction}>
            <div className = {props.open ? 'hamburger-line open' : 'hamburger-line closed'}/>
            <div className = {props.open ? 'hamburger-line open' : 'hamburger-line closed'}/>
            <div className = {props.open ? 'hamburger-line open' : 'hamburger-line closed'}/>
        </div>
    )
}