export function cond(cond: boolean, value: string): string {
  if (cond) {
    return value;
  }
  return '';
}
