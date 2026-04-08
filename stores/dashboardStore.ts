import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { TimeRange } from "@/types/crypto";

interface DashboardState {
  selectedCrypto: string;
  timeRange: TimeRange;
  currency: string;
  isRefreshing: boolean;
  lastUpdated: number | null;
}

interface DashboardActions {
  setSelectedCrypto: (crypto: string) => void;
  setTimeRange: (range: TimeRange) => void;
  setCurrency: (currency: string) => void;
  setRefreshing: (isRefreshing: boolean) => void;
  updateLastUpdated: () => void;
  reset: () => void;
}

type DashboardStore = DashboardState & DashboardActions;

const initialState: DashboardState = {
  selectedCrypto: "bitcoin",
  timeRange: "7",
  currency: "usd",
  isRefreshing: false,
  lastUpdated: null,
};

export const useDashboardStore = create<DashboardStore>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        
        setSelectedCrypto: (crypto) =>
          set({ selectedCrypto: crypto }, false, "setSelectedCrypto"),
        
        setTimeRange: (range) =>
          set({ timeRange: range }, false, "setTimeRange"),
        
        setCurrency: (currency) =>
          set({ currency }, false, "setCurrency"),
        
        setRefreshing: (isRefreshing) =>
          set({ isRefreshing }, false, "setRefreshing"),
        
        updateLastUpdated: () =>
          set({ lastUpdated: Date.now() }, false, "updateLastUpdated"),
        
        reset: () => set(initialState, false, "reset"),
      }),
      {
        name: "dashboard-storage",
        partialize: (state) => ({
          selectedCrypto: state.selectedCrypto,
          timeRange: state.timeRange,
          currency: state.currency,
        }),
      }
    ),
    { name: "DashboardStore" }
  )
);
