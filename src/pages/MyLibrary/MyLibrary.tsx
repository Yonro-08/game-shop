import React from 'react';

import GameCard from 'components/GameCard';
import { GameData } from 'types/Game';

import c from './MyLibrary.module.scss';

interface MyLibraryProps {
	games: GameData[];
	reference: React.RefObject<HTMLDivElement>;
}

function MyLibrary({ games, reference }: MyLibraryProps) {
	return (
		<section id="library" className={c.library} ref={reference}>
			<div className="container">
				<div className={c.head}>
					<h1>My Library</h1>
				</div>
				<div className={c.body}>
					{games.length === 0 ? (
						<h2>No games in library</h2>
					) : (
						games.map((game) => <GameCard key={game.id} game={game} />)
					)}
				</div>
			</div>
		</section>
	);
}

export default MyLibrary;
