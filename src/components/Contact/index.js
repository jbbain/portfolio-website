import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef();

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

      const sendEmail = (e) => {
        e.preventDefault()
        
        emailjs.sendForm(
            'service_g46illn', 
            'template_rrx7tlq',
            form.current,
            '8S1tpODm0MLHbp_Px'
        ).then(
            () => {
                alert ('Message successfully sent!')
                window.location.reload(false)
            }, 
            () => {
            alert('Failed to send the message, please try again')
            }
        )
      }
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass} 
                            strArray={['C','o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} 
                            idx={15}
                        />
                    </h1>
                    <p>
                        If you have any requests or questions, don't hesitate to contact me using the below form. 
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name='email' placeholder='Email' required/>
                                </li>
                                <li>
                                    <input type="text" name='subject' placeholder='Subject' required/>
                                </li>
                                <li>
                                    <textarea type="text" name='message' placeholder='Message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                    <div className='info-map'>
                        Jared Bain,<br/>
                        Washington DC,<br/>
                        United States <br/>
                        <span>jaredbain2@gmail.com</span>
                    </div>
                    <div className='map-wrap'>
                        <MapContainer center={[38.8951, -77.0364]} zoom={13}>
                            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                            <Marker position={[38.8951, -77.0364]}>
                                <Popup>Stop by for a drink!</Popup>
                            </Marker>
                        </MapContainer>
                    </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
};

export default Contact;