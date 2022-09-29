import React, { SVGProps } from 'react';

const SvgDehaze = (props: SVGProps<SVGSVGElement>) => {
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
			<path d='M2 16v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20V6H2z' />
		</svg>
	);
}

export default SvgDehaze;
