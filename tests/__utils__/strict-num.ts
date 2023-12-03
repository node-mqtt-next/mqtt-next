import {expect} from "vitest";
export const TestUtilsFor = (context: number) => {
  const StrictNumTest = (expected: {
    dec: number,
    hex: number
  }) => {
  
    const {dec, hex} = expected;
  
    expect(context).toBeTypeOf("number");
    expect(context).toBe(dec);
    expect(context).toBe(hex);
    expect(context).toStrictEqual(dec);
    expect(context).toStrictEqual(hex);
  }
  return {
    StrictNumTest
  }
}