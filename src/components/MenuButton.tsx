import '../styles/MenuButton.css'
import {MenuButtonProps} from '../types/propTypes.tsx'

export default function MenuButton (props: MenuButtonProps) {
    return (
        <div className='button'>
            <p>{props.name}</p>
        </div>
    )
}