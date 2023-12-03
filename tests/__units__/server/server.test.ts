import {describe, it, expect } from "vitest";
import { defineMqttServer } from "../../../src/index"
describe("Starting Mqtt Server", () => {
  describe("start", () => {
    it("should starting and stopping the server", () => {
      const broker = defineMqttServer({
        server: {
          host: "localhost",
          port: 1883
        }, 
        singleton: false
      });
 
      // property initialization test
      expect(broker).toHaveProperty("isStarted", false);
      expect(broker).toHaveProperty("isStopped", true);
      expect(broker.isStarted).toBe(false);
      expect(broker.isStopped).toBe(true);

      // starting broker test.
      broker.start();
      expect(broker.isStopped).toBe(false);
      expect(broker.isStarted).toBe(true);
      expect(broker).toHaveProperty("isStarted", true);
      expect(broker).toHaveProperty("isStopped", false);

      // stopping broker test.
      broker.stop();
      expect(broker.isStarted).toBe(false);
      expect(broker.isStopped).toBe(true);
      expect(broker).toHaveProperty("isStarted", false);
      expect(broker).toHaveProperty("isStopped", true);
    })
    it("should return a singleton instance when singleton options are enabled", () => {
      const broker1 = defineMqttServer({
        server: {
          host: "localhost",
          port: 1883
        }, 
        singleton: true
      });
      const broker2 = defineMqttServer({
        server: {
          host: "localhost",
          port: 1883
        }, 
        singleton: true
      });
      expect(broker2).toStrictEqual(broker1);
      expect(broker2.brokerId).toStrictEqual(broker1.brokerId);
    })
    it("should return not a singleton instance when singleton options are disabled", () => {
      const broker1 = defineMqttServer({
        server: {
          host: "localhost",
          port: 1883
        }, 
        singleton: true
      });
      const broker2 = defineMqttServer({
        server: {
          host: "localhost",
          port: 1883
        }, 
        singleton: false
      });
      expect(broker2).not.toStrictEqual(!broker1);
      expect(broker2.brokerId).not.toStrictEqual(!broker1.brokerId);
    })
  })
})