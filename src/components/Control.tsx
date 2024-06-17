'use client';

import { useState } from 'react';
import { type IconType } from 'react-icons';
import { GoChevronUp } from 'react-icons/go';

function Control({
	icon: Icon,
	mainText,
	text,
}: {
	icon: IconType;
	mainText: string;
	text: string;
}) {
	const [active, setActive] = useState(false);

	return (
		<div className='border-[1px] rounded-md p-4'>
			<div className='flex justify-between items-center'>
				<div className='p-3 bg-pink-50 rounded-md w-fit'>
					<Icon size={26} className='text-blue-500' />
				</div>
				<div>{mainText}</div>
				<button
					className='p-2 rounded-md bg-pink-50'
					onClick={() => {
						setActive(act => !act);
					}}
				>
					<GoChevronUp
						size={24}
						className={`text-blue-600 transition-transform duration-300 ${
							active ? 'rotate-180' : ''
						}`}
					/>
				</button>
			</div>
			<div
				className={`transition-all duration-500 ease-in-out overflow-hidden ${
					active ? 'max-h-[400px]' : 'max-h-0'
				}`}
			>
				<div
					className={`transition-opacity duration-500 ease-in-out 
					} pt-8`}
				>
					{text}
				</div>
			</div>
		</div>
	);
}

export default Control;
