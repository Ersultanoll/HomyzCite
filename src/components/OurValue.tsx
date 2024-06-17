'use client'

import value from '@/assets/value.png'
import Image from 'next/image';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import Control from './Control';

function OurValue() {
  return (
		<div className='box-width padding-x py-4'>
			<div className='flex gap-8 lg:flex-row flex-col items-center'>
				<div className='flex-1'>
					<Image
						src={value}
						alt='#'
						width={500}
						className='rounded-t-full'
					/>
				</div>
				<div className='flex-1 flex flex-col gap-4'>
					<h2 className='text-xl text-yellow-500 font-bold'>Our Value</h2>
					<div>
						<h1 className='text-3xl font-bold text-blue-600'>
							Value We Give to You
						</h1>
						<p className='pt-4'>
							We always ready to help by providing the best services for
							you <br />
							We believe a good blace to live can make your life better
						</p>
					</div>
					<div>
						<Control
							icon={AiFillSafetyCertificate}
							mainText='The main start'
							text='We believe a good blace to live can make your life better'
						/>

						<Control
							icon={AiFillSafetyCertificate}
							mainText='The main start'
							text='We believe a good blace to live can make your life better'
						/>

						<Control
							icon={AiFillSafetyCertificate}
							mainText='The main start'
							text='We believe a good blace to live can make your life better'
						/>
					</div>
				</div>
			</div>
		</div>
  );
}

export default OurValue