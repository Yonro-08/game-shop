import { useState } from 'react';

import NavListItem from 'components/NavListItem';
import { navListData, socialListData } from 'constants/menuData';

import c from './SideMenu.module.scss';

interface SideMenuProps {
	active: boolean;
	sectionActive: (target: string) => void;
}

function SideMenu({ active, sectionActive }: SideMenuProps) {
	const [navData, setNavData] = useState(navListData);

	const handleNavOnClick = (id: number, target: string) => {
		const newNavData = navData.map((nav) => {
			nav.active = false;
			if (nav.id === id) nav.active = true;
			return nav;
		});

		setNavData(newNavData);

		sectionActive(target);
	};

	return (
		<div className={`${c.sideMenu} ${active ? c.active : ''}`}>
			<a href="#" className={c.logo}>
				<i className="bi bi-controller"></i>
				<span className={c.brand}>Play</span>
			</a>
			<ul className={c.nav}>
				{navData.map((item) => (
					<NavListItem
						key={item.id}
						item={item}
						navOnClick={handleNavOnClick}
						className={c.navName}
					/>
				))}
			</ul>
			<ul className={c.social}>
				{socialListData.map((item) => (
					<NavListItem key={item.id} item={item} className={c.navName} />
				))}
			</ul>
		</div>
	);
}

export default SideMenu;
