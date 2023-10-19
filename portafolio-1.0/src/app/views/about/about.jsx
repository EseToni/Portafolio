import React from 'react';
import styles from './styles.module.css';
import AboutCard from '../../components/about-Card/AboutCard';
import { ABOUT_CARD } from '@/constants/aboutCard';

const About = () => {
	return (
		<div className={styles.containerAbout}>
			<h2 style={{ color: '#50fa7b' }} className='h2Light' id='AboutMe'>
				AboutMe<span style={{ color: 'white' }}>{'()'}</span>
			</h2>
			<div className={styles.containerCard}>
                {ABOUT_CARD.map((card) => (
                    <AboutCard type={card.type} name={card.name} img={card.img} content={card.content} isActivate={'Education'} key={card.key}/>
                ))}
			</div>
		</div>
	);
};

export default About;
