import { useSwiper } from 'swiper/react';

function SwiperButtonNext({ children }: any) {
	const swiper = useSwiper();

	return (
		<button
			onClick={() => {
				console.log(swiper.slideNext());
			}}
			className='btn-prev'
		>
			{children}
		</button>
	);
}

export default SwiperButtonNext;
