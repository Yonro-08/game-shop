import { create } from 'zustand';

import { GameData } from 'types/Game';

interface useBagProps {
	bag: GameData[];
	handleAddToBag: (game: GameData) => void;
	handleRemoveFromBag: (game: GameData) => void;
}

export const useBag = create<useBagProps>((set) => ({
	bag: [],
	handleAddToBag: (game) =>
		set((state) => {
			if (state.bag.includes(game)) return state;
			return { bag: [...state.bag, game] };
		}),
	handleRemoveFromBag: (game) =>
		set((state) => ({ bag: state.bag.filter((item) => item.id !== game.id) })),
}));
