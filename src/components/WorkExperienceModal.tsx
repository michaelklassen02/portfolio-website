import '../styles/Modal.css'
import Modal from 'react-modal'
import { WorkExperienceModalData, WorkExperienceModalProps } from '../types/propTypes'

export default function WorkExperienceModal (props: WorkExperienceModalProps) {
    const modalData: WorkExperienceModalData = props.data != null ? props.data : {
        jobTitle: 'Error',
        startMonth: '',
        startYear: '',
        endMonth: '',
        endYear: '',
        companyName: '',
        jobDescription: '',
        skills: []
    }

    const requestClose = () => {
        props.openCloseFunction(0);
    }

    return (
        <Modal isOpen={props.open} onRequestClose={requestClose} className='modal' overlayClassName='modal-overlay'>
            <div className='role-info'>
                <h3 className='job-title'>{modalData.jobTitle}</h3>
                <p className='job-dates'>{modalData.startMonth} {modalData.startYear}-{modalData.endMonth} {modalData.endYear}</p>
            </div>
            <p className='company-name'>{modalData.companyName}</p>
            <p className='job-description'>{modalData.jobDescription}</p>
            <p className='skills'>{modalData.skills}</p>
        </Modal>
    )
}