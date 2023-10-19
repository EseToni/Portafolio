import React from 'react';
import styles from './styles.module.css'
const Presentation = () => {
	return (
		<div >
			<h2 style={{marginBottom: "-30px"}}>Hello, I am</h2>
			<h1 className={styles.h1Name}>
				<span style={{ color: '#bd93f9' }}>{'<'}</span>
				<span style={{ color: "#50fa7b" }}>Antonio</span>
				<br className={styles.br}/>
				<span style={{ color: "#50fa7b" }} className={styles.apellido}>Rodríguez</span>
				<span style={{ color: '#bd93f9' }}>{'/>'}</span>
			</h1>
			<h2 style={{paddingLeft: "40px"}} className={styles.h2Name}>Full Stack Developer</h2>
		</div>
	);
};

export default Presentation;
