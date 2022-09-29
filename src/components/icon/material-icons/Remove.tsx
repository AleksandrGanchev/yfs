import React, { SVGProps } from 'react';

const SvgRemove = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			fill='currentColor'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M19 13H5v-2h14v2z' />
		</svg>
	);
}

export default SvgRemove;
