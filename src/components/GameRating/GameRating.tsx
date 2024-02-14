import { useEffect, useState } from 'react';

import c from './GameRating.module.scss';

interface GameRatingProps {
	rating: number;
}

function GameRating({ rating }: GameRatingProps) {
	const [stars, setStars] = useState<number[]>([]);

	const generateStars = () => {
		let stars: number[] = [];
		if (rating > 5 || rating < 1) {
			return stars;
		}

		for (let i = 0; i < rating; i++) {
			stars.push(i);
		}

		return stars;
	};

	useEffect(() => {
		setStars(generateStars());
	}, [rating]);

	return (
		<div className={c.gameRating}>
			{stars.map((star, index) => (
				<i key={index} className="bi bi-star-fill"></i>
			))}
		</div>
	);
}

export default GameRating;
