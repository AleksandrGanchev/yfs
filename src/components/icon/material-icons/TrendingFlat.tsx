import React, { SVGProps } from 'react';

const SvgTrendingFlat = (props: SVGProps<SVGSVGElement>) => {
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
			<path d='M22 12l-4-4v3H3v2h15v3l4-4z' />
		</svg>
	);
}

export default SvgTrendingFlat;