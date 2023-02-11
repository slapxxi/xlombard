export type Vector<
  TLen extends number,
  T = number,
  TResult extends unknown[] = [],
> = TResult['length'] extends TLen ? TResult : Vector<TLen, T, [T, ...TResult]>;

/**
 * 2-dimensional vector
 */
export type Vec2<T = number> = [T, T];

export type Matrix =
  | [number, number, number, number, number?, number?]
  | { a: number; b: number; c: number; d: number; e: number; f: number };

export function vecSum(v1: Vec2, v2: Vec2): Vec2 {
  return [v1[0] + v2[0], v1[1] + v2[1]];
}

export function vecDiff(v1: Vec2, v2: Vec2): Vec2 {
  return [v1[0] - v2[0], v1[1] - v2[1]];
}

export function vecMul(vector: Vec2, scalar: number): Vec2 {
  return [vector[0] * scalar, vector[1] * scalar];
}

export function vecDiv(vector: Vec2, scalar: number): Vec2 {
  return [vector[0] / scalar, vector[1] / scalar];
}

export function vecLen(vector: Vec2): number {
  // Math.sqrt is much faster than Math.hypot in some browsers for some reason
  return Math.sqrt(vector[0] ** 2 + vector[1] ** 2);
}

export function vecDist(v1: Vec2, v2: Vec2): number {
  return vecLen(vecDiff(v1, v2));
}

export function vecDot(v1: Vec2, v2: Vec2): number {
  return v1[0] * v2[0] + v1[1] * v2[1];
}

export function vecMatrixTransform(vector: Vec2, matrix: Matrix): Vec2 {
  if (Array.isArray(matrix)) {
    return vecSum(
      vecMul(matrix.slice(0, 2) as Vec2, vector[0]),
      vecMul(matrix.slice(2, 4) as Vec2, vector[1]),
    );
  }
  return vecSum(vecMul([matrix.a, matrix.b], vector[0]), vecMul([matrix.c, matrix.d], vector[1]));
}

export function vecAngle(v1: Vec2, v2: Vec2): number {
  return Math.atan2(v2[1], v2[0]) - Math.atan2(v1[1], v1[0]);
}

export function vecToString(vector: Vec2): string {
  return `${vector[0]} ${vector[1]}`;
}
