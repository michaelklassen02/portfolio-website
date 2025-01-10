import { useState } from 'react'
import '../styles/Page.css'
import TechnicalDemoModal from './TechnicalDemoModal'
import TechnicalDemoBox from './TechnicalDemoBox'

export default function TechnicalDemos () {
    const [modalStatus, setModalStatus] = useState(0)

    const changeModal = (status: number) => {
        setModalStatus(status)
    }

    const modalTitles = ['Graph Demo']
    
    return (
        <div className='background'>
            <TechnicalDemoModal open={modalStatus != 0} openCloseFunction={changeModal} modalTitle={modalTitles[modalStatus - 1]}/>
            <h2>
                Technical Demos
            </h2>
            <TechnicalDemoBox 
                title='Graph Demo'
                description='A basic charting example using the recharts library'
                onClick={() => changeModal(1)}
            />
        </div>
    )
}