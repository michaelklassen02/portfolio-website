import { useState } from 'react'
import '../styles/Page.css'
import { QualificationsModalInfo } from '../constants/data'
import QualificationsModal from './QualificationsModal'
import QualificationsBox from './QualificationsBox'

export default function Qualifications () {
    const [modalStatus, setModalStatus] = useState(0)

    const ModalInfo = modalStatus > 0 ? QualificationsModalInfo[modalStatus - 1] : null

    const changeModal = (status: number) => {
        setModalStatus(status)
    }
    
    return (
        <div className='background'>
            <QualificationsModal open={modalStatus!=0} openCloseFunction={changeModal} data={ModalInfo}/>
            <h2>
                Qualifications
            </h2>
            <QualificationsBox 
                title='Programming Frameworks' 
                description='Programming frameworks and languages, including React, TypeScript, and Python.'
                onClick={() => changeModal(1)}
            />
            <QualificationsBox 
                title='Agile Methodologies' 
                description='Tools to support Agile programming methodologies, including Jira and CI/CD.'
                onClick={() => changeModal(2)}
            />
            <QualificationsBox 
                title='Useful Software' 
                description='Other useful software, including Git, AWS, and Microsoft Office.'
                onClick={() => changeModal(3)}
            />
            <QualificationsBox 
                title='Soft Skills' 
                description='A variety of other skills, including written communication and quality assurance.'
                onClick={() => changeModal(4)}
            />
        </div>
    )
}