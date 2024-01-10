import { create } from "zustand";
import { persist } from "zustand/middleware";

type AppState = {
  count: number;
  example: string;

  setExample: (example: string) => void;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      count: 0,
      example: "example",

      setExample: (example: string) => set({ example }),
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
    }),
    { name: "app-storage" }
  )
);
