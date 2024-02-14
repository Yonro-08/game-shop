import { useState } from 'react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import GameSlide from 'components/GameSlide';
import { GameData } from 'types/Game';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './GameSwiper.scss';

interface GameSwiperProps {
	games: GameData[];
}

function GameSwiper({ games }: GameSwiperProps) {
	const [active, setActive] = useState(false);

	const handleToggleVideo = () => {
		setActive(!active);
	};

	return (
		<Swiper
			effect="coverflow"
			grabCursor
			navigation
			loop
			centeredSlides
			slidesPerView="auto"
			coverflowEffect={{
				rotate: 35,
				stretch: 200,
				depth: 250,
				modifier: 1,
				slideShadows: true,
			}}
			// autoplay={{
			// 	delay: 2500,
			// 	disableOnInteraction: false,
			// }}
			modules={[Autoplay, EffectCoverflow, Navigation]}
			className="gameSwiper"
		>
			{games.map((game) => (
				<SwiperSlide key={game.id}>
					<GameSlide
						game={game}
						active={active}
						handleToggleVideo={handleToggleVideo}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default GameSwiper;
