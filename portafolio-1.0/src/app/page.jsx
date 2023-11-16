'use client';

import React, { useEffect, useState } from 'react';
import About from './views/about/about';
import Skills from './views/skills/Skills';
import Experiencie from './views/experiencie/Experiencie';
import Inicio from './views/inicio/Inicio';
import Contact from './views/contact/Contact';
import NavMobile from './components/nav-mobile/NavMobile';
import Projects  from './views/projects/Projects';
import useIsMobile from '@/hooks/useIsMobile';
const page = () => {
	const isMobile = useIsMobile();
	return (
		<>
			{isMobile&&<NavMobile />}
			<Inicio isMobile={isMobile} />
			<Projects />
			<About />
			<Skills />
			<Experiencie />
			<Contact />
		</>
	);
};

export default page;
