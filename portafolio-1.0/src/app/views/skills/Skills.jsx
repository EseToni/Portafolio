import React from 'react';
import styles from './styles.module.css';
import { HiMail } from 'react-icons/hi';
import { SKILL_CARDS_2 , SKILL_CARDS_1} from '@/constants/skillsCards';
const skills = () => {
	return (
		<div className={styles.container}>
			<h2 style={{ color: '#50fa7b' }} className='h2Light' id='Skills'>
				Skills<span style={{ color: 'white' }}>{'()'}</span>
			</h2>
			<div className={styles.containerCards}>
				<div className={styles.containerCard}>
					{SKILL_CARDS_1.map((card) => (
						<img key={card.name} src={card.img} alt={card.name} className={styles.card} />
					))}
				</div>
				<div className={styles.containerCard}>
					{SKILL_CARDS_2.map((card) => (
						<img key={card.name} src={card.img} alt={card.name} className={styles.card} />
					))}
				</div>
			</div>
		</div>
	);
};

export default skills;
