'use client';

import React from 'react';
import About from './views/about/about';
import Skills from './views/skills/Skills';
import Experiencie from './views/experiencie/Experiencie';
import Inicio from './views/inicio/inicio';
import Contact from './views/contact/Contact';

const page = () => {
	return (
		<>
			<Inicio />
			<About />
			<Skills />
			<Experiencie />
			<Contact />
		</>
	);
};

export default page;
