export function romanToInt(x: string): number {
  switch (x) {
    case "IX":
      return 9;
    case "X":
      return 10;
    case "XI":
      return 11;
    case "XII":
      return 12;
    default:
      return -1;
  }
}

export function toMongoDbReadable(x: string): string {
  x = x.toLowerCase();
  return x.replace("ț", "t").replace("ă", "a");
}
