interface Math {
  E: number;
  LN10: number;
  LN2: number;
  LOG10E: number;
  LOG2E: number;
  PI: number;
  SQRT1_2: number;
  SQRT_2: number;
  abs(x: number): number;
  acos(x: number): number;
  asin(x: number): number;
  atan(x: number): number;
  atan2(y: number, x: number): number;
  ceil(x: number): Integer;
  cos(x: number): number;
  exp(x: number): number;
  floor(x: number): Integer;
  log(x: number): number;
  max(...values: number[]): number;
  min(...values: number[]): number;
  pow(x: number, y: number): number;
  random(): number;
  round(x: number): Integer;
  sin(x: number): number;
  sqrt(x: number): number;
  tan(x: number): number;
}
const Math: Math;
