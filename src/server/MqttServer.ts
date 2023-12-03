import EventEmitter from "events";
import { nanoid } from "nanoid";
const defineBrokerID = (key: string) => {
  return key.concat(nanoid(21));
};
export interface MqttServerInterface {
  start: () => void;
  stop: () => void;
}
class MqttServer extends EventEmitter implements MqttServerInterface {
  private static instance: MqttServer | undefined;
  protected _brokerId: string | undefined;
  protected _isStarted: boolean = false;
  protected _isStopped: boolean = true;

  constructor() {
    super();
    this._brokerId = defineBrokerID("mybroker");
  }
  public get isStarted(): boolean {
    return this._isStarted;
  }
  public get isStopped(): boolean {
    return this._isStopped;
  }
  public get brokerId(): string {
    return this._brokerId as string;
  }
  public start(): void {
    if (!this._isStarted) {
      this._isStarted = true;
      this._isStopped = false;
    }
  }
  public stop(): void {
    if(this._isStarted && !this._isStopped){
      this._isStarted = false;
      this._isStopped = true;
    }
  }
  public static getInstance(): MqttServer {
    if (!MqttServer.instance) {
      MqttServer.instance = new MqttServer();
    }
    return MqttServer.instance;
  }
}
export type DefaultMqttHost = "localhost" | "127.0.0.1";
export type DefaultMqttPort = 1883;
export interface ServerOptions {
  host: DefaultMqttHost;
  port: DefaultMqttPort;
}
export interface BrokerOptions {
  singleton: boolean;
  server: ServerOptions;
}

export type DefineMqttServer = (options: BrokerOptions) => MqttServer;

export const defineMqttServer: DefineMqttServer = (options: BrokerOptions) => {
  const { singleton } = options;
  if (singleton) {
    return MqttServer.getInstance();
  }
  return new MqttServer();
};
