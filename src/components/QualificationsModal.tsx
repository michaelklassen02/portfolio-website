import '../styles/Modal.css'
import Modal from 'react-modal'
import { QualificationsModalData, QualificationsModalProps } from '../types/propTypes'

export default function QualificationsModal (props: QualificationsModalProps) {
    const modalData: QualificationsModalData = props.data != null ? props.data : {
        title: '',
        description: []
    }

    const requestClose = () => {
        props.openCloseFunction(0);
    }

    return (
        <Modal isOpen={props.open} onRequestClose={requestClose} className='modal' overlayClassName='modal-overlay'>
            <div className='role-info'>
                <h3 className='job-title'>{modalData.title}</h3>
            </div>
            <ul>
                {modalData.description.map( (item) => 
                    <li>{item}</li>
                )}
            </ul>
        </Modal>
    )
}