import '../styles/Page.css'
import WorkExperienceBox from './WorkExperienceBox'
import WorkExperienceModal from './WorkExperienceModal'
import { WorkExperienceModalInfo } from '../constants/data'
import { useState } from 'react'

export default function WorkExperience () {
    const [modalStatus, setModalStatus] = useState(0)

    const ModalInfo = modalStatus > 0 ? WorkExperienceModalInfo[modalStatus - 1] : null

    const changeModal = (status: number) => {
        setModalStatus(status)
    }

    return (
        <div className='background'>
            <WorkExperienceModal open={modalStatus!=0} openCloseFunction={changeModal} data={ModalInfo}/>
            <h2>
                Work Experience
            </h2>
            <WorkExperienceBox 
                jobTitle='Junior Developer Co-Op' 
                startMonth='January'
                startYear='2023'
                endMonth='April'
                endYear='2023'
                companyName='Assembly Digital Media'
                onClick={() => changeModal(1)}
            />
            <WorkExperienceBox 
                jobTitle='Quality Assurance Co-Op' 
                startMonth='September'
                startYear='2021'
                endMonth='December'
                endYear='2021'
                companyName='VertiGIS North America'
                onClick={() => changeModal(2)}
            />
            <WorkExperienceBox 
                jobTitle='Software Developer' 
                startMonth='January'
                startYear='2021'
                endMonth='April'
                endYear='2021'
                companyName='High Energy Physics Research Center (University of Victoria)'
                onClick={() => changeModal(3)}
            />
            <WorkExperienceBox 
                jobTitle='Junior Software Developer' 
                startMonth='May'
                startYear='2020'
                endMonth='August'
                endYear='2020'
                companyName='Ruboss'
                onClick={() => changeModal(4)}
            />
        </div>
    )
}