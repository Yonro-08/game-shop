import React, { useState } from 'react';

import GameCard from 'components/GameCard';
import { GameData } from 'types/Game';
import { filterListData } from 'constants/filterListData';

import c from './CategoriesPage.module.scss';

interface CategoriesPageProps {
	games: GameData[];
	reference: React.RefObject<HTMLDivElement>;
}

function CategoriesPage({ games, reference }: CategoriesPageProps) {
	const [data, setData] = useState(games);
	const [filters, setFilters] = useState(filterListData);
	const [text, setText] = useState('');

	const handleFilterGames = (category: string) => {
		setFilters(
			filters.map((filter) => {
				filter.active = false;

				if (filter.name === category) filter.active = true;
				return filter;
			}),
		);

		if (category === 'All') {
			setData(games);
			return;
		}

		setData(games.filter((game) => game.category === category));
	};

	const handleSearchGames = (event: React.ChangeEvent<HTMLInputElement>) => {
		setData(
			games.filter((game) =>
				game.title.toLowerCase().includes(event.target.value.toLowerCase()),
			),
		);
		setText(event.target.value);
	};

	return (
		<section id="categories" className={c.categories} ref={reference}>
			<div className={`container ${c.container}`}>
				<div className={c.head}>
					<div className={c.categories}>
						<ul className={c.filters}>
							{filters.map((filter) => (
								<li
									key={filter.id}
									className={filter.active ? c.active : ''}
									onClick={() => handleFilterGames(filter.name)}
								>
									{filter.name}
								</li>
							))}
						</ul>
					</div>
					<div className={c.searchContainer}>
						<div className={c.search}>
							<i className="bi bi-search"></i>
							<input
								type="text"
								name="search"
								value={text}
								placeholder="Search"
								onChange={handleSearchGames}
							/>
						</div>
					</div>
				</div>
				<div className={c.body}>
					{data.map((game) => (
						<GameCard key={game.id} game={game} />
					))}
				</div>
			</div>
		</section>
	);
}

export default CategoriesPage;
