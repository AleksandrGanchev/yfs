import React, { SVGProps } from 'react';

const SvgEditNotifications = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			fill='currentColor'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M16 14.2l-.8.8h-4.6v-4.6l3.68-3.68A3.89 3.89 0 0012 6c-2.21 0-4 1.79-4 4v7h8v-2.8z'
				opacity={0.3}
			/>
			<path d='M17.58 6.25l1.77 1.77L14.37 13H12.6v-1.77l4.98-4.98zm3.27-.44l-1.06-1.06c-.2-.2-.51-.2-.71 0l-.85.85L20 7.37l.85-.85c.2-.2.2-.52 0-.71zM18 12.2V17h2v2H4v-2h2v-7c0-2.79 1.91-5.14 4.5-5.8v-.7c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.7c.82.21 1.57.59 2.21 1.09l-1.43 1.43A3.89 3.89 0 0012 6c-2.21 0-4 1.79-4 4v7h8v-2.8l2-2zM10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2z' />
		</svg>
	);
}

export default SvgEditNotifications;
