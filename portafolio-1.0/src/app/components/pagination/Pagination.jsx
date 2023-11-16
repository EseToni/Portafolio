import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import ProjectsCard from '../projects-card/ProjectsCard';
import { PROJECTS_LIST } from '@/constants/projects';

const Pagination = () => {
	const totalPages = PROJECTS_LIST.length;
	const pages = [1, 2, 3];
	const [selected, setSelected] = useState(1);
	const [currentArray, setCurrentArray] = useState([]);

	const adjustArray = () => {
		const newArray = [...PROJECTS_LIST];
		const centerIndex = Math.floor(totalPages / 2);
		const selectedCard = newArray[selected - 1];
		newArray.splice(selected - 1, 1);
		newArray.splice(centerIndex, 0, selectedCard);

		setCurrentArray(newArray);
	};
	const handleSelected = (page) => {
		setSelected(page);
	};
	useEffect(() => {
		adjustArray();
	}, [selected]);
	return (
		<div className={styles.container}>
			<div className={styles.containerCards}>
				{currentArray.map((item, index) => {
					return (
						item && (
							<ProjectsCard
								active={index === Math.floor(currentArray.length / 2)}
								name={item.name}
								description={item.description}
								url={item.url}
								image={item.image}
								techUse={item.techUse}
								key={item.key}
							/>
						)
					);
				})}
			</div>
			<div className={styles.containerPages}>
				{pages.map((page,index) => (
					<button key={index} onClick={() => handleSelected(page)} className={`${styles.page} ${selected === page && styles.pageActive}`} ></button>
				))}
			</div>
		</div>
	);
};

export default Pagination;
