import GameCard from 'components/GameCard';
import GameSwiper from 'components/GameSwiper';
import { GameData } from 'types/Game';

import c from './HomePage.module.scss';

interface HomePageProps {
	games: GameData[];
	reference: React.RefObject<HTMLDivElement>;
}

function HomePage({ games, reference }: HomePageProps) {
	return (
		<section id="home" className={`${c.home} active`} ref={reference}>
			<div className="container">
				<div>
					<GameSwiper games={games} />
				</div>
				<div className={c.head}>
					<h2 className={c.sectionTitle}>Games on promotion</h2>
					<div className={c.viewMore}>
						<a href="#" className={c.viewMoreText}>
							View More Games <i className="bi bi-arrow-right"></i>
						</a>
					</div>
				</div>
				<div className={c.body}>
					{games.slice(0, 4).map((game) => (
						<GameCard key={game.id} game={game} />
					))}
				</div>
			</div>
		</section>
	);
}

export default HomePage;
