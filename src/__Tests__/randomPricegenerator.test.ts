import { describe, expect, it } from "vitest";
import { generateRandomPrice } from "../Utils/randomPricegenerator";
// adjust import path

describe("Random Price Generator", () => {
  it("should generate a random price", () => {
    const price = generateRandomPrice();
    expect(price).toBeGreaterThanOrEqual(100);
    expect(price).toBeLessThanOrEqual(1000);
    // Add more specific assertions based on your function
  });
});
