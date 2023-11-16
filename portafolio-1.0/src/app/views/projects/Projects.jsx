import React from 'react';
import styles from './styles.module.css';
import ProjectsCard from '@/app/components/projects-card/ProjectsCard';
import Pagination from '@/app/components/pagination/Pagination';
const Projects = () => {
	return (
		<div className={styles.container}>
			<h2 style={{ color: '#50fa7b' }} className='h2Light' id='Projects'>
				Projects<span style={{ color: 'white' }}>{'()'}</span>
			</h2>
            <Pagination />
		</div>
	);
};
export default Projects;
