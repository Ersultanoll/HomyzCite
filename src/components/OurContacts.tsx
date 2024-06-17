'use client'

import Calling from "@/UI/Calling";
import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import value from '@/assets/value.png'

function OurContacts() {
  return (
		<div className='box-width padding-x'>
			<div className='mt-12 flex lg:flex-row flex-col lg:items-center'>
				<div className='flex-1'>
					<h2 className='text-xl text-yellow-500 font-bold'>
						Our Contact Us
					</h2>
					<h1 className='my-6  text-blue-900 font-bold text-2xl'>
						Easy to Contact Us
					</h1>
					<p className='text-lg text-gray-500'>
						We always ready to help by providing the best services for you
						<br />
						We believe a good blace to live can make your life better
					</p>
					<div className='flex mt-10 justify-between flex-wrap gap-4'>
						<div className='xs:w-full w-[48%] border-[1px]'>
							<div className='flex gap-4 items-start'>
								<Calling Icon={BsTelephone} />
								<div>
									<h4 className='text-black font-bold'>Call</h4>
									<p>021 123 145 14</p>
								</div>
							</div>
							<button className='bg-pink-100 text-blue-500 font-bold w-full py-2 text-lg mt-4'>
								Call now
							</button>
						</div>
						<div className='xs:w-full w-[48%] border-[1px]'>
							<div className='flex gap-4 items-start'>
								<Calling Icon={BsTelephone} />
								<div>
									<h4 className='text-black font-bold'>Call</h4>
									<p>021 123 145 14</p>
								</div>
							</div>
							<button className='bg-pink-100 text-blue-500 font-bold w-full py-2 text-lg mt-4'>
								Call now
							</button>
						</div>
						<div className='xs:w-full w-[48%] border-[1px]'>
							<div className='flex gap-4 items-start'>
								<Calling Icon={BsTelephone} />
								<div>
									<h4 className='text-black font-bold'>Call</h4>
									<p>021 123 145 14</p>
								</div>
							</div>
							<button className='bg-pink-100 text-blue-500 font-bold w-full py-2 text-lg mt-4'>
								Call now
							</button>
						</div>
						<div className='xs:w-full w-[48%] border-[1px]'>
							<div className='flex gap-4 items-start'>
								<Calling Icon={BsTelephone} />
								<div>
									<h4 className='text-black font-bold'>Call</h4>
									<p>021 123 145 14</p>
								</div>
							</div>
							<button className='bg-pink-100 text-blue-500 font-bold w-full py-2 text-lg mt-4'>
								Call now
							</button>
						</div>
					</div>
				</div>
				<div className='flex-1 flex lg:justify-end lg:flex-row flex-col items-center mt-10 lg:mt-0'>
					<Image
						src={value}
						alt='#'
						className='w-[400px] rounded-t-full'
					/>
				</div>
			</div>
		</div>
  );
}

export default OurContacts