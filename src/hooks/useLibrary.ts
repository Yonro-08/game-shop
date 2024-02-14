import { create } from 'zustand';

import { GameData } from 'types/Game';

interface useLibraryProps {
	library: GameData[];
	handleAddToLibrary: (library: GameData) => void;
	handleRemoveFromLibrary: (game: GameData) => void;
}

export const useLibrary = create<useLibraryProps>((set) => ({
	library: [],
	handleAddToLibrary: (game) =>
		set((state) => ({ library: [...state.library, game] })),
	handleRemoveFromLibrary: (game) =>
		set((state) => ({
			library: state.library.filter((item) => item.id !== game.id),
		})),
}));
