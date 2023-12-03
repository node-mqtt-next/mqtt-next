import {describe, it, expect } from "vitest";
import {AuthenticateReasonCode} from "../../../src/protocols/AuthenticationReasonCode";
import {TestUtilsFor} from "../../__utils__/strict-num";
describe("AuthenticationReasonCode", () => {
  describe("Success", () => {
    it("should have property called `success` and return correct type", () => {
      expect(AuthenticateReasonCode).to.toHaveProperty("Success");
      expect(AuthenticateReasonCode.Success).to.toBeTypeOf("number");
    })
    it("`Success` props should return correct value", () => {
      TestUtilsFor(AuthenticateReasonCode.Success).StrictNumTest({dec: 0, hex: 0x00});
    })
  })
})