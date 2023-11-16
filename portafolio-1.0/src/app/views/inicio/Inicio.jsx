
import React from 'react';
import styles from './styles.module.css';
import Presentation from '@/app/components/presentation/Presentation';
import ImgDiv from '@/app/components/imgDiv/ImgDiv';
import NavBar from '@/app/components/navBar/navBar';
import IconsNav from '@/app/components/iconsContact/iconsNav';
import { BsRocketTakeoff } from 'react-icons/bs';

const Inicio = ({isMobile}) => {
	return (
		<div className={styles.page1}  >
			<div className={styles.container} >
				<div className={styles.containerIcon} >
					<BsRocketTakeoff className={styles.giIcon} />
				</div>
				{isMobile ? null : <> <NavBar />  <IconsNav /> </> }
			</div>
			<div className={styles.containerPresentacion}>
				<Presentation />
				<ImgDiv />
			</div>
		</div>
	);
};

export default Inicio;
