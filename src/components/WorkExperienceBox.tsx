import '../styles/Box.css'
import { WorkExperienceBoxProps } from '../types/propTypes'

export default function WorkExperienceBox (props: WorkExperienceBoxProps) {
    return (
        <div className='work-experience-box' onClick={props.onClick}>
            <div className='role-info'>
                <h3>{props.jobTitle}</h3>
                <p>{props.startMonth} {props.startYear}-{props.endMonth} {props.endYear}</p>
            </div>
            <div className='other-info'>
                <p>{props.companyName}</p>
            </div>
        </div>
    )
}