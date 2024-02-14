import GameRating from 'components/GameRating';
import { useBag } from 'hooks/useBag';
import { useLibrary } from 'hooks/useLibrary';
import { GameData } from 'types/Game';

import c from './GameCard.module.scss';

interface GameCardProps {
	game: GameData;
}

function GameCard({ game }: GameCardProps) {
	const { library, handleAddToLibrary, handleRemoveFromLibrary } = useLibrary();
	const { handleAddToBag } = useBag();

	return (
		<div className={c.container}>
			<div className={c.gameCard}>
				<img src={game.img} alt={game.title} className={c.img} />
				<a
					href="#"
					className={`${c.like} ${library.includes(game) ? c.active : ''}`}
					onClick={
						library.includes(game)
							? () => handleRemoveFromLibrary(game)
							: () => handleAddToLibrary(game)
					}
				>
					<i className="bi bi-heart-fill"></i>
				</a>
				<div className={c.gameFeature}>
					<span className={c.gameType}>{game.level}</span>
					<GameRating rating={game.rating} />
				</div>
				<div className={c.gameTitle}>{game.title}</div>
				<div className={c.gamePrice}>
					{game.discount !== 0 && (
						<>
							<span className={c.discount}>
								<i>{game.discount * 100}%</i>
							</span>
							<span className={c.prevPrice}>${game.price.toFixed(2)}</span>
						</>
					)}
					<span className={c.currentPrice}>
						${((1 - game.discount) * game.price).toFixed(2)}
					</span>
				</div>
				<a href="#" className={c.addBag} onClick={() => handleAddToBag(game)}>
					<i className="bi bi-bag-plus-fill"></i>
				</a>
			</div>
		</div>
	);
}

export default GameCard;
