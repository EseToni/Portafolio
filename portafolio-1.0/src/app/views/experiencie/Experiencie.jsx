import React from 'react';
import styles from './styles.module.css';
import ExperiencieCard from '../../components/experiencie-Card/ExperiencieCard';
import { useState, useEffect } from 'react';

const Experiencie = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [left, setLeft] = useState(true); // Set window width to state

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768); // Set window width to state
		};
		if (typeof window !== 'undefined') {
			setIsMobile(window.innerWidth < 768);
			window.addEventListener('resize', handleResize); // Add event listener on resize
		}
		if (isMobile) {
			setLeft(false);
		}
		return () => {
			if(typeof window !== 'undefined'){
				window.removeEventListener('resize', handleResize); // Remove event listener on cleanup
			}
		};
		
	}, [isMobile]);

	return (
		<div className={styles.container}>
			<h2 style={{ color: '#50fa7b' }} className='h2Light' id='Experiencie'>
				Experiencie<span style={{ color: 'white' }}>{'()'}</span>
			</h2>
			<div className={styles.containerGrid}>
				<div className={styles.line}>
					<div className={styles.timeCircle}/>
					<div className={styles.timeCircle}/>
					<div className={styles.timeCircle}/>
				</div>
				<div className={styles.divEmpty}></div>
				<ExperiencieCard
					key={'freelance'}
					time={[2023, 'now']}
					work={'Freelance'}
					type={'FullStack Developer'}
					content={['Craft engaging and functional user interfaces.', 'Build and maintain servers and databases.', 'Design and maintain efficient databases.']}
				/>
				<ExperiencieCard
					left={left}
					key={'Studing'}
					time={[2022, 2023]}
					work={'Learning new technologies'}
					type={'Bootcamp & Self-taught'}
					content={["Henry Bootcamp Graduate, skilled in web development.", "Self-taught Full Stack Developer.", "Self-directed study + Henry Bootcamp for versatile skills."]}
				/>
				<div className={styles.divEmpty}></div>
				<div className={styles.divEmpty}></div>
				<ExperiencieCard
					key={'workingTech'}
					time={[2019, 2022]}
					work={'Electronics technician'}
					type={'Digital Electronics'}
					content={['Designed efficient digital circuits.', 'Resolved issues in digital systems.', 'Optimized microprocessor tasks.']}
				/>
			</div>
		</div>
	);
};
export default Experiencie;
