import '../styles/Modal.css'
import { TechnicalDemoModalProps } from '../types/propTypes'
import Modal from 'react-modal'
import GraphDemo from './GraphDemo';

export default function TechnicalDemoModal (props: TechnicalDemoModalProps) {
    const requestClose = () => {
        props.openCloseFunction(0);
    }

    const chooseDisplayComponent = () => {
        switch (props.modalTitle) {
            case 'Graph Demo':
                return <GraphDemo />
            default:
                return <></>
        }
    }

    return (
        <Modal isOpen={props.open} onRequestClose={requestClose} className='modal' overlayClassName='modal-overlay'>
            <div className='role-info'>
                <h3 className='job-title'>{props.modalTitle}</h3>
            </div>
            {chooseDisplayComponent()}
        </Modal>
    )
}