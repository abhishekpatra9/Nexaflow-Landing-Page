export function cn(...inputs) {
  return inputs
    .flat()
    .filter((x) => typeof x === "string" || typeof x === "number")
    .join(" ")
    .trim()
}
