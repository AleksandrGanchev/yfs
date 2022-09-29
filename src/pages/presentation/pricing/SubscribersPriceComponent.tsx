import React, { memo, useState } from 'react';
import Checks, { ChecksGroup } from '../../../components/bootstrap/forms/Checks';

interface ICheckboxPrice {
	price: number;
	name: string;
	id: number;
	isToggled: boolean;
}

const subscribersCount: ICheckboxPrice[] = [
	{ id: 1, name: '1К', price: 275, isToggled: true },
	{ id: 2, name: '2К', price: 470, isToggled: false },
	{ id: 3, name: '5К', price: 1100, isToggled: false },
	{ id: 4, name: '10К', price: 1750, isToggled: false },
	{ id: 5, name: '15К', price: 2390, isToggled: false },
	{ id: 6, name: '20К', price: 2900, isToggled: false },
	{ id: 7, name: '30К', price: 3800, isToggled: false },
	{ id: 8, name: '40К', price: 4790, isToggled: false },
	{ id: 9, name: '50К', price: 5600, isToggled: false },
	{ id: 10, name: '>50К', price: Infinity, isToggled: false },
];

const SubscribersPriceComponent = () => {
	const [checkboxPrice, setCheckboxPrice] = useState<ICheckboxPrice[]>(subscribersCount);

	const SubscribersPrice = (e: any) => {
		if (!e.target.checked) return;

		const value = +e.target.value;
		const fiterPrices = checkboxPrice.map((item) => {
			if (item.isToggled) {
				return { ...item, isToggled: false };
			} else if (value === item.price) {
				return { ...item, isToggled: true };
			}
			return item;
		});
		setCheckboxPrice(fiterPrices);
	};

	const prices = checkboxPrice.filter((item) => {
		return item.isToggled;
	});

	const priceDiscountYaer = (
		prices[0].price * 12 -
		((prices[0].price * 12) / 100) * 20
	).toLocaleString();
	const priceDiscountHalfYaer = (
		prices[0].price * 6 -
		((prices[0].price * 6) / 100) * 10
	).toLocaleString();

	return (
		<>
			<div className='text-center h5 fw-bold'>Number of subscribers, thousand :</div>
			<ChecksGroup>
				<div className='d-flex justify-content-center'>
					{checkboxPrice.map((subscribers) => (
						<Checks
							type='switch'
							key={subscribers.id}
							id={subscribers.id.toString()}
							name='subscribersCount'
							label={subscribers.name}
							value={subscribers.price}
							onChange={SubscribersPrice}
							checked={subscribers.isToggled}
						/>
					))}
				</div>
			</ChecksGroup>
			<div className='col-auto mx-auto'>
				<h3 className='display-1 fw-bold'>
					{prices[0].price === Infinity ? (
						<>
							<p className='h3 h-25 d-inline-block'>Call the sales department</p>
						</>
					) : (
						<>
							{prices[0].price}
							<span>UAH</span>
						</>
					)}
				</h3>
			</div>
			<ChecksGroup>
				<div className='d-flex justify-content-center'>
					{checkboxPrice.map((subscribers) => (
						<Checks
							type='switch'
							key={subscribers.id}
							id={subscribers.id.toString()}
							name='subscribersCount'
							label={subscribers.name}
							value={subscribers.price}
							onChange={SubscribersPrice}
							checked={subscribers.isToggled}
						/>
					))}
				</div>
			</ChecksGroup>
			<div className='col-auto mx-auto'>
				<h4 className='display-1 fw-bold'>
					{priceDiscountYaer}
					<span>UAH</span>
				</h4>
			</div>
			<div className='col-auto mx-auto'>
				<h4 className='display-1 fw-bold'>
					{priceDiscountHalfYaer}
					<span>UAH</span>
				</h4>
			</div>
		</>
	);
};

export default memo(SubscribersPriceComponent);
