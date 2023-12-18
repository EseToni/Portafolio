export const PROJECTS_LIST = [
	{
		name: 'WoF',
		description: 
        "🐾 WoF is a cutting-edge platform that links pet owners with caregivers seamlessly! With tech like React and Express, it's secure (thanks to JWT) and offers multiple payment options, including PayPal and credit cards. 🌟 Enhancing user experience, it stores data locally for a smoother, personalized touch! 📱🐶",
		url: 'https://wof-project.vercel.app/',
		image: '/projectsImg/wof3.png',
		techUse: [
			{ img: '/skillsIcons/react.png', name: 'ReactJs' },
			{ img: '/skillsIcons/redux.png', name: 'Redux' },
			{ img: '/skillsIcons/sass.png', name: 'Sass' },
			{ img: '/skillsIcons/nodejs.png', name: 'NodeJs' },
			{ img: '/skillsIcons/postgresql.png', name: 'PostGreSQL' },
		],
		key: '12345',
	},
	
	{
		name: 'Pilotos Formula 1',
		description:
			'This project was developed utilizing React, Redux, and pure CSS. Its main functionality involves searching for Formula 1 drivers through various filters like teams and origin. Furthermore, users have the capability to create their own F1 driver. This was implemented by creating a custom API using Node.js and PostgreSQL.',
		url: 'https://pilotosformula1.vercel.app/',
		image: '/projectsImg/pilotosFormula1.png',
		techUse: [
			{ img: '/skillsIcons/redux.png', name: 'redux' },
			{ img: '/skillsIcons/react.png', name: 'react' },
			{ img: '/skillsIcons/nodejs.png', name: 'nodejs' },
			{ img: '/skillsIcons/postgresql.png', name: 'postgresql' },
		],
		key: '1234',
	},

	{
		name: 'Rick and Morty',
		description: "Project developed using React, Redux, and Tailwind CSS on the front end. It involves fetching data from an API and displaying it on the screen. Additionally, users can filter and search through the data. On the backend, Node.js and MongoDB were employed to create an API enabling user creation and the ability to save favorites.",
		url: 'https://github.com/EseToni/RickAndMortyAPP',
		image: '/projectsImg/rickAndMorty.png',
		techUse: [
			{ img: '/skillsIcons/react.png', name: 'react' },
			{ img: '/skillsIcons/redux.png', name: 'redux' },
			{ img: '/skillsIcons/tailwind.png', name: 'tailwind' },
			{ img: '/skillsIcons/nodejs.png', name: 'nodejs' },
			{ img: '/skillsIcons/mongodb.png', name: 'mongodb' },
		],
		key: '12326',
	},
];
