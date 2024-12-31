import '../styles/MenuButton.css'
import {Link} from 'react-router-dom'
import {MenuButtonProps} from '../types/propTypes.tsx'

export default function MenuButton (props: MenuButtonProps) {
    return (
        <div className='button'>
            <Link to={props.link} className='button-text'>{props.name}</Link>
        </div>
    )
}