'use client'

import Link from 'next/link';
import { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
function Navbar() {

  const [active, setActive] = useState(false);

  return (
		<div className='bg-black text-white'>
			<div className='box-width py-8 padding-x flex justify-between items-center'>
				<div className='font-bold text-2xl'>Homyz</div>
				<div className='relative'>
					<div className='md:hidden'>
						<BiMenuAltRight
							onClick={() => {
								setActive(!active);
							}}
							size={30}
							className='cursor-pointer'
						/>
					</div>

					<ul
						className={`md:flex ${
							active ? 'mobile-navigation' : ''
						} hidden items-center gap-4`}
					>
						<li>
							<Link href={'#'} className='text-gray-300'>
								Residencies
							</Link>
						</li>
						<li>
							<Link href={'#'} className='text-gray-300'>
								Our Value
							</Link>
						</li>
						<li>
							<Link href={'#'} className='text-gray-300'>
								Contact Us
							</Link>
						</li>
						<li>
							<Link href={'#'} className='text-gray-300'>
								Get started
							</Link>
						</li>
						<li>
							<button className='py-2 px-4 rounded-md bg-blue-500 text-white'>
								Contact
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
  );
}

export default Navbar