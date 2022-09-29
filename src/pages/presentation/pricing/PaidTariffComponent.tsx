import React, { memo } from 'react';
import Card, { CardBody, CardHeader } from '../../../components/bootstrap/Card';
import Button from '../../../components/bootstrap/Button';
import Icon from '../../../components/icon/Icon';
import SubscribersPriceComponent from './SubscribersPriceComponent';

const PaidTariffComponent = () => {
	return (
		<div className='col-md-7'>
			<Card>
				<CardHeader borderSize={1}>
					<div className='col text-center pt-4'>
						<h2 className='fw-bold display-5'>PAID TARIFF</h2>
						<div className='h5 fw-light text-muted'>
							In a paid tariff package, the cost depends on the number of subscribers,
							the functionality does not change. When the limit of subscribers is
							exceeded, an automatic transition to a new tariff package occurs.
						</div>
					</div>
				</CardHeader>
				<CardBody>
					<div className='row g-5 d-flex flex-column'>
						<SubscribersPriceComponent />
						<div className='col-8 align-self-center text-left'>
							<div className='col-12 mt-2 mx-auto'>
								<Icon
									icon='AddTask'
									size='2x'
									color='primary'
									className='ms-1 cursor-help me-2'
								/>
								No limit on the number of participants, chatbots, variables
							</div>
							<div className='w-auto mt-2 mx-auto'>
								<Icon
									icon='RssFeed'
									size='2x'
									color='primary'
									className='ms-1 cursor-help me-2'
								/>
								No restrictions on the number of channels
							</div>
							<div className='mt-2 mx-auto'>
								<Icon
									icon='FilterAlt'
									size='2x'
									color='primary'
									className='ms-1 cursor-help me-2'
								/>
								Unlimited automated sales funnels
							</div>
							<div className='mt-2 mx-auto'>
								<Icon
									icon='People'
									size='2x'
									color='primary'
									className='ms-1 cursor-help me-2'
								/>
								Unlimited audience segmentation
							</div>
							<div className='mt-2 mx-auto'>
								<Icon
									icon='Payment'
									size='2x'
									color='primary'
									className='ms-1 cursor-help me-2'
								/>
								Ability to accept payments
							</div>
							<div className='mt-2 mx-auto'>
								<Icon
									icon='Sensors'
									size='2x'
									color='primary'
									className='ms-1 cursor-help me-2'
								/>
								Ability to send webhooks
							</div>
							<div className='mt-2 mx-auto'>
								<Icon
									icon='Sync'
									size='2x'
									color='primary'
									className='ms-1 cursor-help me-2'
								/>
								Using the Integration API
							</div>
							<div className='mt-2 mx-auto'>
								<Icon
									icon='Edit'
									size='2x'
									color='primary'
									className='ms-1 cursor-help me-2'
								/>
								Ability to use tags
							</div>
						</div>
						<div className='col-12'>
							<Button color='primary' isLight size='lg' className='w-100'>
								Buy
							</Button>
						</div>
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

export default memo(PaidTariffComponent);
