import React, { memo } from 'react';
import classNames from 'classnames';
import Icon from '../../../components/icon/Icon';
import Button from '../../../components/bootstrap/Button';
import Card, { CardBody, CardHeader } from '../../../components/bootstrap/Card';
import useDarkMode from '../../../hooks/useDarkMode';

const FreeTariffComponents = () => {
	const { darkModeStatus } = useDarkMode();

	return (
		<div className='col-md-5'>
			<Card
				className={classNames({
					'bg-lo25-primary': darkModeStatus,
					'bg-l25-primary': !darkModeStatus,
				})}>
				<CardHeader borderSize={1} borderColor='primary' className='bg-transparent'>
					<div className='col text-center pt-4 position-relative'>
						<h2 className='fw-bold display-5'>FREE TARIFF</h2>
						<div className='h5 fw-light text-muted'>
							Attract up to 1000 subscribers for free
						</div>
					</div>
				</CardHeader>
				<CardBody>
					<div className='g-5 d-flex flex-column'>
						<div className='col-auto mx-auto text-center'>
							<h3 className='display-1 fw-bold'>FREE</h3>
						</div>
						<div className='w-auto align-self-center text-left'>
							<div className='mt-2 mx-auto'>
								<Icon
									icon='Send'
									size='2x'
									color='primary'
									className='ms-1 cursor-help me-2'
								/>
								Sending up to 10,000 messages in month
							</div>
							<div className='mt-2 mx-auto'>
								<Icon
									icon='PersonAddAlt'
									size='2x'
									color='primary'
									className='ms-1 cursor-help me-2'
								/>
								Number of subscribers up to 1000 people
							</div>
							<div className='mt-2 mx-auto'>
								<Icon
									icon='Android'
									size='2x'
									color='primary'
									className='ms-1 cursor-help me-2'
								/>
								Creating only 3 chatbots
							</div>
							<div className='mt-2 mx-auto'>
								<Icon
									icon='AppRegistration'
									size='2x'
									color='primary'
									className='ms-1 cursor-help me-2'
								/>
								Create up to 10 variables
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
							<div className='mt-2 mb-4 mx-auto'>
								<Icon
									icon='RssFeed'
									size='2x'
									color='primary'
									className='ms-1 cursor-help me-2'
								/>
								One RSS auto-post feed
							</div>
						</div>
						<div className='col-12'>
							<Button color='primary' size='lg' className='w-100'>
								Connect For Free
							</Button>
						</div>
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

export default memo(FreeTariffComponents);
