'use client'

import Image from "next/image"
import hero_image from '@/assets/hero-image.png'
import { FaLocationDot } from "react-icons/fa6";
import {motion} from 'framer-motion'

function Hero() {
  return (
		<div className='bg-black relative'>
      <div className="absolute left-0 top-[-100px] w-[320px] h-[320px] hero-white blur-[100px]">

      </div>
			<div className='box-width py-12'>
				<div className='lg:px-[100px] padding-x  flex flex-col lg:flex-row justify-between gap-y-12'>
					<div className='lg:w-[400px] self-end flex flex-col gap-8 text-white'>
						<motion.h2 initial={{
							opacity:0,
							y:'-4rem'
						}} animate={{
							opacity:1,
							y:'0'
						}} transition={{
							type:'spring',
							duration:1
						}} className='text-[59px] font-bold leading-[1.2]'>
							Discover Most Suitable Property
						</motion.h2>
						<div className='text-gray-500'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Recusandae dignissimos
						</div>
						<div className='bg-white px-4 flex py-2 rounded-lg items-center gap-2'>
							<div>
								<FaLocationDot className='text-blue-500' size={26} />
							</div>
							<div className='flex-1'>
								<input
									type='text'
									className='w-full py-2 px-4 outline-none text-black'
								/>
							</div>
							<div>
								<button className='px-4 py-2 bg-blue-500 rounded-lg'>
									Search
								</button>
							</div>
						</div>
						<div className='flex flex-wrap justify-between'>
							<div className='flex flex-col gap-1'>
								<span className='text-3xl'>9,000 +</span>
								<span className='text-gray-500 text-[13px]'>
									Premium Product
								</span>
							</div>
							<div className='flex flex-col gap-1'>
								<span className='text-3xl'>9,000 +</span>
								<span className='text-gray-500 text-[13px]'>
									Premium Product
								</span>
							</div>
							<div className='flex flex-col gap-1'>
								<span className='text-3xl'>9,000 +</span>
								<span className='text-gray-500 text-[13px]'>
									Premium Product
								</span>
							</div>
						</div>
					</div>
					<motion.div initial={{
						opacity:0,
						x:'7rem'
					}} animate={{
						opacity:1,
						x:0
					}} className='lg:w-[400px] flex justify-center lg:block'>
						<Image
							src={hero_image}
							alt='#'
							className='rounded-tl-[200px] rounded-tr-[200px] lg:w-full w-[20rem]'
						/>
					</motion.div>
				</div>
			</div>
		</div>
  );
}

export default Hero