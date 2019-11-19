/* eslint-disable import/prefer-default-export */

export class numberService {
  // constructor() {}

  toVerySmallText(n) {
    if (n < 1000) {
      return n.toString();
    }
    if (n > 500000) {
      return '>500k';
    }
    if (n < 1000000) {
      const x = Math.round(n / 1000);
      return `${x}k`;
    }

  }
}
