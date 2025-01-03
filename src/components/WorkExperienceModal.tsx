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
        <Modal isOpen={props.open} onRequestClose={requestClose}>
            <h3>{modalData.jobTitle}</h3>
            <p>{modalData.startMonth} {modalData.startYear}-{modalData.endMonth} {modalData.endYear}</p>
            <p>{modalData.companyName}</p>
            <p>{modalData.jobDescription}</p>
            <p>{modalData.skills}</p>
        </Modal>
    )
}