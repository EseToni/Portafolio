
import React from 'react';
import styles from './styles.module.css';
import Presentation from '@/app/components/presentation/Presentation';
import ImgDiv from '@/app/components/imgDiv/ImgDiv';
import NavBar from '@/app/components/navBar/navBar';
import NavBarMobile from '@/app/components/navBar-Mobile/navBarMobile';
import IconsNav from '@/app/components/iconsContact/iconsNav';
import { BsRocketTakeoff } from 'react-icons/bs';
import { useState, useEffect } from 'react';

const Inicio = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768); // Set window width to state
		};
		window.addEventListener('resize', handleResize); // Add event listener on resize
		return () => {
			window.removeEventListener('resize', handleResize); // Remove event listener on cleanup
		};
	}, [isMobile]);

	return (
		<div className={styles.page1}  >
			<div className={styles.container} >
				<div className={styles.containerIcon} >
					<BsRocketTakeoff className={styles.giIcon} />
				</div>
				{isMobile ? <NavBarMobile /> : <> <NavBar />  <IconsNav /> </> }
			</div>
			<div className={styles.containerPresentacion}>
				<Presentation />
				<ImgDiv />
			</div>
		</div>
	);
};

export default Inicio;
