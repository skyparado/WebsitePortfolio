// GLOBAL STATE: Stores data that many different, unrelated components need.
// (You'd typically use Zustand or Redux here)

// Example shape of a global store (using standard React context or Zustand style)
/*
import { create } from 'zustand';

interface UserState {
  currentUser: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  currentUser: null,
  login: (user) => set({ currentUser: user }),
  logout: () => set({ currentUser: null }),
}));
*/

// Rules:
// - Only put data here if multiple pages/organisms need to share it (like "Who is logged in?").
// - Do NOT put local component state here (like "is this dropdown open?"). That goes in the component.
