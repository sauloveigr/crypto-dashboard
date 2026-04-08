import { describe, it, expect } from "vitest";
import {
  formatCurrency,
  formatNumber,
  formatPercentage,
  formatCompactNumber,
} from "@/lib/utils/format";

describe("Format Utilities", () => {
  describe("formatCurrency", () => {
    it("should format currency with default USD", () => {
      expect(formatCurrency(1234.56)).toBe("$1,234.56");
    });

    it("should handle large numbers", () => {
      expect(formatCurrency(1234567.89)).toBe("$1,234,567.89");
    });

    it("should handle zero", () => {
      expect(formatCurrency(0)).toBe("$0");
    });

    it("should handle negative numbers", () => {
      expect(formatCurrency(-1234.56)).toBe("-$1,234.56");
    });
    
    it("should format integers without decimals", () => {
      expect(formatCurrency(1000)).toBe("$1,000");
    });
  });

  describe("formatNumber", () => {
    it("should format number with commas", () => {
      expect(formatNumber(1234567)).toBe("1,234,567");
    });

    it("should handle decimals", () => {
      expect(formatNumber(1234.567)).toBe("1,234.567");
    });
    
    it("should handle zero", () => {
      expect(formatNumber(0)).toBe("0");
    });
  });

  describe("formatPercentage", () => {
    it("should format positive percentage with + sign", () => {
      expect(formatPercentage(12.345)).toBe("+12.3%");
    });

    it("should format negative percentage", () => {
      expect(formatPercentage(-5.67)).toBe("-5.7%");
    });

    it("should handle custom decimals", () => {
      expect(formatPercentage(12.345, 2)).toBe("+12.35%");
    });
    
    it("should handle zero", () => {
      expect(formatPercentage(0)).toBe("0.0%");
    });
  });

  describe("formatCompactNumber", () => {
    it("should format thousands", () => {
      expect(formatCompactNumber(1500)).toBe("1.5K");
    });

    it("should format millions", () => {
      expect(formatCompactNumber(1500000)).toBe("1.5M");
    });

    it("should format large millions", () => {
      expect(formatCompactNumber(1500000000)).toBe("1500.0M");
    });

    it("should handle small numbers", () => {
      expect(formatCompactNumber(500)).toBe("500");
    });
    
    it("should handle exact thousands", () => {
      expect(formatCompactNumber(10000)).toBe("10.0K");
    });
  });
});
