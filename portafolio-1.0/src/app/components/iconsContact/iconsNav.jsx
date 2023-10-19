import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import style from './style.module.css';
const IconsNav = () => {
	const handleClick = (id) => {
		const targetElement = document.getElementById(id)
		if(targetElement)
		 	var offSetTop = targetElement.offsetTop
		window.scrollTo({
			top: offSetTop,
			behavior : 'smooth'
		})
	}
	const handleLinkClick = (link) => {
		window.open(link, '_blank');
	  };
	return (
		<div className={style.container} >
			<BsGithub className={style.icon} onClick={() => handleLinkClick('https://github.com/EseToni')}/>
			<BsLinkedin className={style.icon} onClick={() => handleLinkClick('https://www.linkedin.com/in/antonio-fullstackdev/')}/>
			<div className={style.containerContact} onClick={() => handleClick('contact')}>
				<h4>Contact Me</h4>
				<HiMail className={style.icon}/>
			</div>
		</div>
	);
};

export default IconsNav;
