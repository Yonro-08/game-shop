import userImage from 'assets/images/user.jpg';

import c from './Header.module.scss';

interface HeaderProps {
	toggleActive: () => void;
}

function Header({ toggleActive }: HeaderProps) {
	return (
		<header className={c.header}>
			<a href="#" className={c.menu} onClick={toggleActive}>
				<i className="bi bi-sliders"></i>
			</a>
			<div className={c.userItems}>
				<a href="#" className={c.icon}>
					<i className="bi bi-heart-fill"></i>
					<span className={c.like}>0</span>
				</a>
				<a href="#" className={c.icon}>
					<i className="bi bi-bag-fill"></i>
					<span className={c.bag}>0</span>
				</a>
				<div className={c.avatar}>
					<a href="#">
						<img src={userImage} alt="User Image" />
					</a>
					<div className={c.user}>
						<span>User Name</span>
						<a href="#">View Profile</a>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
