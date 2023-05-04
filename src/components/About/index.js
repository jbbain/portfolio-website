import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['A','b','o','u','t', ' ', 'M', 'e']} 
                        idx={15}
                    />
                </h1>
                <p>As an ambitious front-end developer with 6 years of experience, I have a strong passion for creating dynamic and engaging user experiences. My approach to development is centered around the user - I believe that the best products are those that seamlessly blend form and function to create a delightful experience for the end-user. I am proficient in HTML, CSS, JavaScript, Java, PHP and have experience working with various front-end frameworks and libraries such as React and Angular. I am also familiar with version control systems such as Git and have experience with Agile development methodologies.</p>
                <p>I am a creative problem-solver with a keen eye for design and a dedication to creating clean and efficient code. I thrive in a fast-paced environment and enjoy working collaboratively with cross-functional teams to deliver high-quality products. My ability to quickly learn and adapt to new technologies allows me to stay up-to-date with the latest industry trends and best practices.</p>
                <p>When I'm not coding, you can find me experimenting with new design concepts, learning a new skill such as playing the violin, working on a DIY house project, or simply enjoying the great outdoors. I am a firm believer in continuous learning and improvement, and I am always looking for ways to challenge myself and expand my skillset.</p>
                <p>I am committed to delivering high-quality products that exceed user expectations. If you're looking for a dedicated and skilled front-end developer, I'd love to hear from you!</p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default About;