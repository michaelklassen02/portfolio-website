import '../styles/Modal.css'
import Modal from 'react-modal'

export default function WorkExperienceModal () {
    return (
        <Modal isOpen={true}>
            <h3>Job Title</h3>
            <p>Month 20xx-Month20xx</p>
            <p>Company Name</p>
            <p>Job Description</p>
        </Modal>
    )
}