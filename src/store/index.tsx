type User = {
	id: string;
	email: string;
	username: string;
};
type UserState = {
	user: User | null;
	token: string | null;
	setUser: (user: User | null, token: string | null) => void;
	logout: () => void;
};

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useUserStore = create<UserState>()(
	persist(
		(set) => ({
			user: null,
			token: null,
			setUser: (user, token) => set({ user, token }),
			logout: () => set({ user: null, token: null }),
		}),
		{ name: "user-storage", storage: createJSONStorage(() => localStorage) }
	)
);
