import React from 'react';
import styles from './styles.module.css';
import { useState } from 'react';

const AboutCard = ({ type, img, name, isActivate, content }) => {
	const [active, setActive] = useState(false);
	return (
		<div
			className={`${styles.container} ${isActivate === type ? ` ${styles.containerActive}` : ''} ${active ? `${styles.containerRotate}`: ""}`}
      		onClick={() => setActive(!active)}
		>
			{!active ? <><h3 style={{ color: '#bd93f9' }} className={styles.type}>
				<span style={{ color: '#50fa7b' }}>{'< '}</span>
				{type}
				<span style={{ color: '#50fa7b' }}>{' />'}</span>
			</h3>
			<img src={img} alt={name} className={styles.img}/>
			<h4  className={styles.name}>{name}</h4></> : <h4 className={styles.content}>{content}</h4>}
		</div>
	);
};

export default AboutCard;
