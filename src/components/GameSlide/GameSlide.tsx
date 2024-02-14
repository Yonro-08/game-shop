import { GameData } from 'types/Game';

import c from './GameSlide.module.scss';

interface GameSlideProps {
	game: GameData;
	active: boolean;
	handleToggleVideo: () => void;
}

function GameSlide({ game, active, handleToggleVideo }: GameSlideProps) {
	return (
		<div className="gameSlider">
			<img src={game.img} alt="Game Image" />
			<div className={`video ${active ? 'active' : ''}`}>
				<iframe
					width={1280}
					height={720}
					src={game.trailer}
					allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
			<div className="content">
				<h2>{game.title}</h2>
				<p>{game.description}</p>
				<div className="buttons">
					<a href="#" className="orderBtn">
						Order Now
					</a>
					<a
						href="#"
						className={`playBtn ${active ? 'active' : ''}`}
						onClick={handleToggleVideo}
					>
						<span className="pause">
							<i className="bi bi-pause-fill"></i>
						</span>
						<span className="play">
							<i className="bi bi-play-fill"></i>
						</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export default GameSlide;
