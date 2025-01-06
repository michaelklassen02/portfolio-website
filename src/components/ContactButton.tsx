import '../styles/Button.css'
import { ContactButtonProps } from '../types/propTypes'

export default function MenuButton (props: ContactButtonProps) {
    return (
        <div className='contact button'>
            <a href={props.link} target='_blank' className='button-text'>{props.name}</a>
        </div>
    )
}