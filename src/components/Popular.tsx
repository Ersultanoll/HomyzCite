'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import r1 from '@/assets/r1.png';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperButtonNext from '@/UI/SwiperButtonNext';
import SwiperButtonPrev from '@/UI/SwiperButtonPrev';
function Popular() {
	return (
		<div className='box-width padding-x py-8'>
			<div className='flex flex-col gap-1'>
				<h2 className='text-yellow-500 font-bold text-lg'>Best Choices</h2>
				<h1 className='text-blue-800 font-bold text-2xl'>
					Popular Residencies
				</h1>
			</div>

			<div className='mt-8 relative'>
				<Swiper
					spaceBetween={50}
					breakpoints={{
						420: { slidesPerView: 2 },
						768: { slidesPerView: 3 },
						960: { slidesPerView: 4 },
					}}
				>
					<SwiperSlide className=''>
						<div className='!h-[180px]'>
							<Image src={r1} alt='#' className='w-full h-full' />
						</div>
						<div className='text-gray-600 pt-2 text-lg'>
							<span className='text-yellow-400'>$</span>
							47,043
						</div>
						<div className='py-1 font-bold text-blue-700 text-xl'>
							<h2>Aliva Priva Jardin</h2>
						</div>
						<div className='text-xs text-gray-500'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Repellendus cum
						</div>
					</SwiperSlide>
					<SwiperSlide className=''>
						<div className='!h-[180px]'>
							<Image src={r1} alt='#' className='w-full h-full' />
						</div>
						<div className='text-gray-600 pt-2 text-lg'>
							<span className='text-yellow-400'>$</span>
							47,043
						</div>
						<div className='py-1 font-bold text-blue-700 text-xl'>
							<h2>Aliva Priva Jardin</h2>
						</div>
						<div className='text-xs text-gray-500'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Repellendus cum
						</div>
					</SwiperSlide>
					<SwiperSlide className=''>
						<div className='!h-[180px]'>
							<Image src={r1} alt='#' className='w-full h-full' />
						</div>
						<div className='text-gray-600 pt-2 text-lg'>
							<span className='text-yellow-400'>$</span>
							47,043
						</div>
						<div className='py-1 font-bold text-blue-700 text-xl'>
							<h2>Aliva Priva Jardin</h2>
						</div>
						<div className='text-xs text-gray-500'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Repellendus cum
						</div>
					</SwiperSlide>
					<SwiperSlide className=''>
						<div className='!h-[180px]'>
							<Image src={r1} alt='#' className='w-full h-full' />
						</div>
						<div className='text-gray-600 pt-2 text-lg'>
							<span className='text-yellow-400'>$</span>
							47,043
						</div>
						<div className='py-1 font-bold text-blue-700 text-xl'>
							<h2>Aliva Priva Jardin</h2>
						</div>
						<div className='text-xs text-gray-500'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Repellendus cum
						</div>
					</SwiperSlide>
					<SwiperSlide className=''>
						<div className='!h-[180px]'>
							<Image src={r1} alt='#' className='w-full h-full' />
						</div>
						<div className='text-gray-600 pt-2 text-lg'>
							<span className='text-yellow-400'>$</span>
							47,043
						</div>
						<div className='py-1 font-bold text-blue-700 text-xl'>
							<h2>Aliva Priva Jardin</h2>
						</div>
						<div className='text-xs text-gray-500'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Repellendus cum
						</div>
					</SwiperSlide>
					<SwiperSlide className=''>
						<div className='!h-[180px]'>
							<Image src={r1} alt='#' className='w-full h-full' />
						</div>
						<div className='text-gray-600 pt-2 text-lg'>
							<span className='text-yellow-400'>$</span>
							47,043
						</div>
						<div className='py-1 font-bold text-blue-700 text-xl'>
							<h2>Aliva Priva Jardin</h2>
						</div>
						<div className='text-xs text-gray-500'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Repellendus cum
						</div>
					</SwiperSlide>

					<div className='flex items-center gap-3 pt-2'>
						<SwiperButtonPrev>{'<'}</SwiperButtonPrev>
						<SwiperButtonNext>{'>'}</SwiperButtonNext>
					</div>
				</Swiper>
			</div>
		</div>
	);
}

export default Popular;
