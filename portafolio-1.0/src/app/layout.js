import './globals.css';
import './globals-Fonts.css';
export const metadata = {
	title: 'Portafolio/Antonio',
	description: 'Portafolio generated with Next.js',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/fotoperfil/favicon.ico' sizes='48x48' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0 user-scalable=no'
				></meta>
			</head>
			<body>{children}</body>
		</html>
	);
}
