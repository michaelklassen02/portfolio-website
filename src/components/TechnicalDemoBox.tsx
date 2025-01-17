import '../styles/Box.css'
import { GenericBoxProps } from '../types/propTypes'

export default function TechnicalDemoBox (props: GenericBoxProps) {
    return (
        <div className='work-experience-box' onClick={props.onClick}>
            <div className='role-info'>
                <h3>{props.title}</h3>
            </div>
            <div className='other-info'>
                <p>{props.description}</p>
            </div>
        </div>
    )
}