import './HamburgerIcon.css'
import {HamburgerIconProps} from './propTypes.tsx'

export default function HamburgerIcon (props: HamburgerIconProps) {
    return (
        <div className='hamburger-container' onClick={props.openCloseFunction}>
            <div className = 'hamburger-line'/>
            <div className = 'hamburger-line'/>
            <div className = 'hamburger-line'/>
        </div>
    )
}