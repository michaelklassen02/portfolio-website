import '../styles/Box.css'
import { QualificationsBoxProps } from '../types/propTypes'

export default function WorkExperienceBox (props: QualificationsBoxProps) {
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