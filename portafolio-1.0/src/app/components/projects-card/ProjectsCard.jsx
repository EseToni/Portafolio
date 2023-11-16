import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
const ProjectsCard = ({ name, description, url, image, techUse, active }) => {
	const [isActive, setIsActive] = useState(active);
	const classActive = isActive ? styles.itemActive : '';
	useEffect(() => {
		setIsActive(active);
	}, [active]);
	return (
		<article className={`${styles.container} ${classActive} `}>
			<a href={url} target='_blank' rel='noopener noreferrer'>
				<span>&#128279;</span>
				<img src={image} alt={name} className={styles.image} />
			</a>
			<header className={styles.header}>
				<h1>{name}</h1>
			</header>
			<div className={styles.containerDescription}>
				<h3>{description}</h3>
			</div>

			<div className={styles.containerTech}>
				{techUse.map((tech,index) => (
					<img key={index} src={tech.img} />
				))}
			</div>
		</article>
	);
};

export default ProjectsCard;
