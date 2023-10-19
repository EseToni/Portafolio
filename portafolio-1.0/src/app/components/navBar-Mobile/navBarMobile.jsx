import React from 'react';
import styles from './styles.module.css'
import { useState } from 'react';
const NavBarMobile = () => {
	const heigh = document.documentElement.clientHeight;
	const width = document.documentElement.clientWidth;
	const top = document.documentElement.scrollTop;
	const [open, setOpen] = useState(false);
	const [activeItem, setActiveItem] = useState('AboutMe');

	const detailsRef = React.useRef(null);
	const handleClick = (id) => {
		const targetElement = document.getElementById(id)
		setActiveItem(id)
		if(targetElement)
		 	var offSetTop = targetElement.offsetTop
		window.scrollTo({
			top: offSetTop,
			behavior : 'smooth'
		})
		detailsRef.current.open = false
		setOpen(false)
	}
	const handleClickSumary = () =>{
		detailsRef.current.open = open
		setOpen(!open)
	}
	return (
		<details className={styles.details} ref={detailsRef} open={false} >
			<summary className={styles.summary} onClick={()=> handleClickSumary()}>{open? "✕" : <>&#9776;</>}</summary>
			<ul className={styles.ulContainer} style={{height : heigh, width: width, top : top -30}}>
				<li className={`${styles.ulItem} ${activeItem === 'AboutMe' ? ` ${styles.ulItemsActive}` : ''}`} onClick={() => handleClick('AboutMe')}>AboutMe</li>
				<li className={`${styles.ulItem} ${activeItem === 'Skills' ? ` ${styles.ulItemsActive}` : ''}`} onClick={() => handleClick('Skills')}>Skills</li>
				<li className={`${styles.ulItem} ${activeItem === 'Experiencie' ? ` ${styles.ulItemsActive}` : ''}`} onClick={() => handleClick('Experiencie')}>Experiencie</li>
				<li className={`${styles.ulItem} ${activeItem === 'contact' ? ` ${styles.ulItemsActive}` : ''}`} onClick={() => handleClick('contact')}>Contact</li>
			</ul>
		</details>
	);
};

export default NavBarMobile;
