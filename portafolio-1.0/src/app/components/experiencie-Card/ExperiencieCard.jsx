import React from 'react';
import styles from './styles.module.css';
const ExperiencieCard = ({
	left,
	time: [timeStart, timeEnd],
	work,
	type,
	content,
}) => {

	
	return (
		<div className={`${styles.container}${left ? ` ${styles.containerLeft}` : ''}`}>
			<div className={styles.containerTime}>
				<h4 className={styles.timeEnd}>{timeEnd}</h4>
				<h4 className={styles.timeStart}>{timeStart}</h4>
			</div>
			<h3  className={styles.h3}>{work}</h3>
			<h3 style={{ color: '#50fa7b'}} className={styles.h3}>
				<span style={{ color: 'white' }}>{'('}</span>
				{type}
				<span style={{ color: 'white' }}>{')'}</span>
			</h3>
			<h4 className={`h4light ${styles.h4Respons}`} style={{ color: '#c5c5c5d6' }}>
				Responsibilities:
			</h4>
			<ul style={{ margin: '0px' }} className={styles.ulContainer}>
				{content.map((element) => (
					<li key={element} className={`liLight ${styles.h4Respons}`}>
						{element}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ExperiencieCard;
