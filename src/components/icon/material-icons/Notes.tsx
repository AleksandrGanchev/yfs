import React, { SVGProps } from 'react';

const SvgNotes = (props: SVGProps<SVGSVGElement>) => {
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
			<path d='M21 11.01L3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z' />
		</svg>
	);
}

export default SvgNotes;