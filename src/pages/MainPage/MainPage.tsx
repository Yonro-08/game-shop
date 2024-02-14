import { useEffect, useRef, useState } from 'react';

import Header from 'components/Header';
import SideMenu from 'components/SideMenu';
import { useBag } from 'hooks/useBag';
import { useLibrary } from 'hooks/useLibrary';
import BagPage from 'pages/BagPage';
import CategoriesPage from 'pages/CategoriesPage';
import HomePage from 'pages/HomePage';
import MyLibrary from 'pages/MyLibrary';

import c from './MainPage.module.scss';

interface MainPageProps {}

function MainPage({}: MainPageProps) {
	const [active, setActive] = useState(false);
	const [games, setGames] = useState([]);
	const { library } = useLibrary();
	const { bag } = useBag();

	const homeRef = useRef<HTMLDivElement>(null);
	const categoriesRef = useRef<HTMLDivElement>(null);
	const libraryRef = useRef<HTMLDivElement>(null);
	const bagRef = useRef<HTMLDivElement>(null);

	const sections = [
		{
			name: 'home',
			ref: homeRef,
			active: true,
		},
		{
			name: 'categories',
			ref: categoriesRef,
			active: false,
		},
		{
			name: 'library',
			ref: libraryRef,
			active: false,
		},
		{
			name: 'bag',
			ref: bagRef,
			active: false,
		},
	];

	const handleToggleActive = () => {
		setActive(!active);
	};

	const handleSectionActive = (target: string) => {
		sections.map((section) => {
			if (!section.ref.current) return;
			section.ref.current.classList.remove('active');
			if (section.ref.current.id === target)
				section.ref.current.classList.add('active');
			return section;
		});
	};

	const fetchData = () => {
		fetch('http://localhost:3000/api/gamesData.json')
			.then((response) => response.json())
			.then((data) => {
				setGames(data);
			})
			.catch((error) => console.error(error.message));
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<main className={c.main}>
			<SideMenu active={active} sectionActive={handleSectionActive} />
			<div className={`${c.banner} ${active ? c.active : ''}`}>
				<Header toggleActive={handleToggleActive} />
				<div className="container">
					{games.length && (
						<>
							<HomePage games={games} reference={homeRef} />
							<CategoriesPage games={games} reference={categoriesRef} />
							<MyLibrary games={library} reference={libraryRef} />
							<BagPage games={bag} reference={bagRef} />
						</>
					)}
				</div>
			</div>
		</main>
	);
}

export default MainPage;
