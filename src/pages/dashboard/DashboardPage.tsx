import React, { useContext, useEffect } from 'react';
import { useTour } from '@reactour/tour';
import { demoPages } from '../../menu';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Page from '../../layout/Page/Page';
import ThemeContext from '../../contexts/themeContext';

const DashboardPage = () => {
	const { mobileDesign } = useContext(ThemeContext);
	/**
	 * Tour Start
	 */
	const { setIsOpen } = useTour();
	useEffect(() => {
		if (localStorage.getItem('tourModalStarted') !== 'shown' && !mobileDesign) {
			setTimeout(() => {
				setIsOpen(true);
				localStorage.setItem('tourModalStarted', 'shown');
			}, 3000);
		}
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<PageWrapper title={demoPages.sales.subMenu.dashboard.text}>
			<Page container='fluid'>
				<div className='row'>Home page</div>
			</Page>
		</PageWrapper>
	);
};

export default DashboardPage;
