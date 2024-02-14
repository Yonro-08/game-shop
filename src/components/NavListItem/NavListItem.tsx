import { MenuData } from 'types/Side';

interface NavListItemProps {
	item: MenuData;
	navOnClick?: (id: number, target: string) => void;
	className: string;
}

function NavListItem({ item, navOnClick, className }: NavListItemProps) {
	return (
		<li>
			<a
				href="#"
				className={`${item.active ? 'active' : ''}`}
				onClick={() => {
					if (!navOnClick) return null;
					navOnClick(item.id, item.target);
				}}
			>
				<i className={`bi ${item.icon}`}></i>
				{item.name && <span className={className}>{item?.name}</span>}
			</a>
		</li>
	);
}

export default NavListItem;
