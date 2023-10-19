import React from 'react';
import styles from './styles.module.css';
import { useState } from 'react';
import { NAV_BAR_ITEMS } from '@/constants/navBarItems';

const NavBar = () => {
	const [activeItem, setActiveItem] = useState('AboutMe');

	const handleClick = (id) => {
		const targetElement = document.getElementById(id)
		setActiveItem(id)
		if(targetElement)
		 	var offSetTop = targetElement.offsetTop
		window.scrollTo({
			top: offSetTop,
			behavior : 'smooth'
		})
	}
	return (
		<nav className={styles.nav} id='start'>
			<ul className={styles.container} >
				{NAV_BAR_ITEMS.map((item) => (
					<h4
						className={`${styles.ulItems} ${
							activeItem === item.name ? ` ${styles.ulItemsActive}` : ''
						}`}
						key={item.name}
						onClick={() => handleClick(item.name) }
					>
						{item.name}
					</h4>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
