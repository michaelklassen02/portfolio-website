import './MenuButton.css'
import {MenuButtonProps} from './propTypes.tsx'

export default function MenuButton (props: MenuButtonProps) {
    return (
        <div className='button'>
            <p>{props.name}</p>
        </div>
    )
}