export function generateRandomPrice(
  min: number = 100,
  max: number = 1000
): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
