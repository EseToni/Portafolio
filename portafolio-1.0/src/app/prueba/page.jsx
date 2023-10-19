import React from 'react';
import style from './style.module.css';
const page = () => {
	return (
		<body className={style.body}>
			<div className={style.container}>
      <div></div>
				<div className={style.box}></div>
        
				<div className={style.verticalLine}></div>
				<div className={style.box}></div>
        <div></div>
        <div></div>
				<div className={style.box}></div>
			</div>
		</body>
	);
};

export default page;
