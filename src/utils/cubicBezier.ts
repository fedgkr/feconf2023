function cubicBezier(p1x: number, p1y: number, p2x: number, p2y: number) {
  // The cubic bezier curve formula
  const calculateBezier = (
    t: number,
    a: number,
    b: number,
    c: number,
    d: number
  ) => {
    return (
      Math.pow(1 - t, 3) * a +
      3 * Math.pow(1 - t, 2) * t * b +
      3 * (1 - t) * Math.pow(t, 2) * c +
      Math.pow(t, 3) * d
    );
  };

  return function (t: number) {
    return calculateBezier(t, 0, p1x, p2x, 1);
  };
}

export default cubicBezier;
