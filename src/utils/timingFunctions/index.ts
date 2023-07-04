import { cubicBezier } from '~/utils';

export const easeInOut = cubicBezier(0.42, 0, 0.58, 1.0);

export const easeOutBounce = cubicBezier(0.455, 0.03, 0.215, 1.33);
