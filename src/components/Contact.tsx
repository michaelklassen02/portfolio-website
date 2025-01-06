import '../styles/Page.css'
import ContactButton from './ContactButton'

export default function Contact () {
    return (
        <div className='background'>
            <h2>
                Contact Me
            </h2>
            <div className='container'>
                <ContactButton name='LinkedIn' link='https://www.linkedin.com/in/michael-klassen-510094327/'/>
                <ContactButton name='Discord' link='https://www.discordapp.com/users/839551803589918771'/>
                <ContactButton name='GitHub' link='https://github.com/michaelklassen02'/>
                <ContactButton name='Email' link='mailto:mkuvic02@gmail.com'/>
            </div>
        </div>
    )
}