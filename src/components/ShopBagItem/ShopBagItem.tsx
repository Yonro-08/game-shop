import { useBag } from 'hooks/useBag';
import { GameData } from 'types/Game';

import c from './ShopBagItem.module.scss';

interface ShopBagItemProps {
	game: GameData;
	index: number;
}

function ShopBagItem({ game, index }: ShopBagItemProps) {
	const { handleRemoveFromBag } = useBag();

	return (
		<tr className={c.shopBagItem}>
			<th scope="row">{index + 1}</th>
			<td>
				<img src={game.img} alt="Game Image" className={c.img} />
			</td>
			<td>{game.title}</td>
			<td>${game.price.toFixed(2)}</td>
			<td>{game.discount * 100}%</td>
			<td>${(game.price * (1 - game.discount)).toFixed(2)}</td>
			<td>
				<a href="#" onClick={() => handleRemoveFromBag(game)}>
					<i className="bi bi-trash"></i>
				</a>
			</td>
		</tr>
	);
}

export default ShopBagItem;
