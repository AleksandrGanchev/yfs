import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import { demoPages } from '../../../menu';
import FreeTariffComponents from './FreeTariffComponent';
import PaidTariffComponent from './PaidTariffComponent';

const PricingTablePage = () => {
	return (
		<PageWrapper title={demoPages.pricingTable.text}>
			<Page>
				<div id='third' className='row scroll-margin'>
					<div className='col-12 my-3'>
						<div className='display-4 fw-bold py-3'>Tariff Packages</div>
					</div>
					<FreeTariffComponents />
					<PaidTariffComponent />
				</div>
			</Page>
		</PageWrapper>
	);
};

export default PricingTablePage;
