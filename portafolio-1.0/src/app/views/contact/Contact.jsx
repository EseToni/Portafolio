import React from 'react';
import styles from './styles.module.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Contact = () => {
    const handleLinkClick = (link) => {
		window.open(link, '_blank');
	  };

      const handleClick = () => {
		const targetElement = document.getElementById('start')
		if(targetElement)
		 	var offSetTop = targetElement.offsetTop	
		window.scrollTo({
			top: offSetTop - offSetTop,
			behavior : 'smooth'
		})
	}
	return (
		<div className={styles.container}>
			<h1 style={{color : '#bd93f9'}} id='contact'>INTERESTING IN WORKING <span>TOGETHER</span>?</h1>
            <form className={styles.containerForm} action="https://formspree.io/f/mleyaagy" method="POST">
                <input className={styles.inputs} placeholder='How can i tell you?' type='text' id='name' name='name'/>
                <input className={styles.inputs} placeholder='Your email address?' type='email' id='email' name='email'/>
                <textarea className={styles.inputMessage} placeholder='Type message...' type='text' id='message' name='message'/>
                <button className={styles.button} type='submit'>Send email</button>
            </form>
            <h1 style={{marginBottom: '5px',fontSize : '2.6vw'}}>OR</h1>
            <h1 style={{color: '#bd93f9', marginTop: '0px', fontSize : '2.6vw'}}>Use Social Media <span style={{fontSize: '2.6vw'}}>Link</span>s</h1> 
            <div className={styles.containerIcons}>
			    <BsGithub className={styles.icon} onClick={() => handleLinkClick('https://github.com/EseToni')}/>
			    <BsLinkedin className={styles.icon} onClick={() => handleLinkClick('https://www.linkedin.com/in/antonio-fullstackdev/')}/>
                <div className={styles.containerTop} onClick={() => handleClick()}>
                    <h4 className={styles.backTopArrow}>&uarr;</h4>
                    <h4 className={styles.backTop}>Back to Top!  </h4>
                </div>
            </div>
		</div>
	);
};

export default Contact;
