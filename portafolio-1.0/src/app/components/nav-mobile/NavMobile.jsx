import React, { useState } from 'react';
import styles from './styles.module.css';
const NavMobile = () => {
	const [active, setActive] = useState(false);
	const [activeItem, setActiveItem] = useState('AboutMe');
	const handleClick = () => {
		setActive(!active);
	};
	const handleClickElement = (id) => {
		const targetElement = document.getElementById(id);
		setActiveItem(id);
		if (targetElement) 
            var offSetTop = targetElement.offsetTop;
		window.scrollTo({
			top: offSetTop,
			behavior: 'smooth',
		});
		setActive(false);
	};
	return (
		<div className={styles.container}>
			{active ? (
				<span onClick={handleClick}>&#9938;</span>
			) : (
				<span onClick={handleClick}>&#9776;</span>
			)}
			{active && (
				<div className={styles.containerChild}>
					<h2
						className={`${styles.item} ${
							activeItem === 'AboutMe' && styles.itemActive
						}`}
						onClick={() => handleClickElement('AboutMe')}
					>
						AboutMe
					</h2>
					<h2
						className={`${styles.item} ${
							activeItem === 'Projects' && styles.itemActive
						}`}
						onClick={() => handleClickElement('Projects')}
					>
						Projects
					</h2>
					<h2
						className={`${styles.item} ${
							activeItem === 'Skills' && styles.itemActive
						}`}
						onClick={() => handleClickElement('Skills')}
					>
						Skills
					</h2>
                    <h2
						className={`${styles.item} ${
							activeItem === 'Experiencie' && styles.itemActive
						}`}
						onClick={() => handleClickElement('Experiencie')}
					>
						Experiencie
					</h2>
                    <h2
						className={`${styles.item} ${
							activeItem === 'contact' && styles.itemActive
						}`}
						onClick={() => handleClickElement('contact')}
					>
						Contact
					</h2>
				</div>
			)}
		</div>
	);
};

export default NavMobile;
