import React, { useEffect, useState } from 'react';

import ShopBagItem from 'components/ShopBagItem';
import { GameData } from 'types/Game';

import c from './BagPage.module.scss';

interface BagPageProps {
	games: GameData[];
	reference: React.RefObject<HTMLDivElement>;
}

function BagPage({ games, reference }: BagPageProps) {
	const [total, setTotal] = useState<string>('0');

	const handleTotalPayment = () => {
		return games
			.map((game) => game.price * (1 - game.discount))
			.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
			.toFixed(2);
	};

	useEffect(() => {
		setTotal(handleTotalPayment());
	}, [games]);

	return (
		<section id="bag" className="bag" ref={reference}>
			<div className={c.container}>
				<div className={c.title}>
					<h1>My Bag</h1>
				</div>
			</div>
			{games.length === 0 ? (
				<h2>Your bag is empty</h2>
			) : (
				<>
					<div className={c.body}>
						<div className={c.table}>
							<table className={`${c.shopBagTable} table`}>
								<thead>
									<th className="col">No.</th>
									<th className="col">Preview</th>
									<th className="col">Game</th>
									<th className="col">Price</th>
									<th className="col">Discount</th>
									<th className="col">Payment</th>
									<th className="col">Remove</th>
								</thead>
								<tbody>
									{games.map((game, index) => (
										<ShopBagItem key={game.id} index={index} game={game} />
									))}
								</tbody>
							</table>
						</div>
					</div>
					<div className={c.foot}>
						<div className={c.totalContainer}>
							<p className={c.itemCount}>Total Items: {games.length}</p>
						</div>
						<div className={c.paymentContainer}>
							<div className={c.payment}>
								Total: {total}
								<a href="#">
									Check out <i className="bi bi-wallet-fill"></i>
								</a>
							</div>
						</div>
					</div>
				</>
			)}
		</section>
	);
}

export default BagPage;
