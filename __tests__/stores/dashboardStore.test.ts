import { describe, it, expect, beforeEach } from "vitest";
import { useDashboardStore } from "@/stores/dashboardStore";

describe("Dashboard Store", () => {
  beforeEach(() => {
    const store = useDashboardStore.getState();
    store.reset();
  });

  it("should have initial state", () => {
    const { selectedCrypto, timeRange, currency } = useDashboardStore.getState();
    
    expect(selectedCrypto).toBe("bitcoin");
    expect(timeRange).toBe("7");
    expect(currency).toBe("usd");
  });

  it("should update selected crypto", () => {
    const { setSelectedCrypto } = useDashboardStore.getState();
    
    setSelectedCrypto("ethereum");
    
    expect(useDashboardStore.getState().selectedCrypto).toBe("ethereum");
  });

  it("should update time range", () => {
    const { setTimeRange } = useDashboardStore.getState();
    
    setTimeRange("30");
    
    expect(useDashboardStore.getState().timeRange).toBe("30");
  });

  it("should update currency", () => {
    const { setCurrency } = useDashboardStore.getState();
    
    setCurrency("eur");
    
    expect(useDashboardStore.getState().currency).toBe("eur");
  });

  it("should update last updated timestamp", () => {
    const { updateLastUpdated, lastUpdated: initialLastUpdated } = useDashboardStore.getState();
    
    expect(initialLastUpdated).toBeNull();
    
    updateLastUpdated();
    
    const { lastUpdated } = useDashboardStore.getState();
    expect(lastUpdated).toBeGreaterThan(0);
  });

  it("should reset to initial state", () => {
    const { setSelectedCrypto, setTimeRange, setCurrency, reset } = useDashboardStore.getState();
    
    setSelectedCrypto("ethereum");
    setTimeRange("30");
    setCurrency("eur");
    
    reset();
    
    const { selectedCrypto, timeRange, currency } = useDashboardStore.getState();
    expect(selectedCrypto).toBe("bitcoin");
    expect(timeRange).toBe("7");
    expect(currency).toBe("usd");
  });
});
