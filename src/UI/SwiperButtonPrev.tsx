import React from 'react'
import { useSwiper } from 'swiper/react';

function SwiperButtonPrev({children}:any) {
  const swiper = useSwiper();

  const active = 'shadow(0_0_10_0)';

	return (
			<button
				className={`btn-prev`}
				onClick={() => {
					swiper.slidePrev();
				}}
			>
				{children}
			</button>
	);
}

export default SwiperButtonPrev