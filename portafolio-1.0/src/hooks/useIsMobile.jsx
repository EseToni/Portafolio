import  { useEffect, useState } from 'react';

const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768); // Set window width to state
		};
		if (typeof window !== 'undefined') {
			setIsMobile(window.innerWidth < 768);
			window.addEventListener('resize', handleResize); // Add event listener on resize
		}
		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('resize', handleResize); // Remove event listener on cleanup
			}
		};
	}, [isMobile]);
	return isMobile;
};

export default useIsMobile;
