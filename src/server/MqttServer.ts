import EventEmitter from "events";
import { nanoid } from "nanoid";

const defineBrokerID = (key: string) => {
  return key.concat(nanoid(21));
};

export interface MqttServerInterface {
  /**
   * Start the Mqtt Server
   *
   * @returns void
   */
  start: () => void;
  /**
   * Stop the Mqtt Server
   *
   * @returns void
   */
  stop: () => void;
}

/**
 * The `MqttServer` Class
 *
 * An abstraction layer implement Mqtt Prootocol standard with Node Js.
 *
 * @date 12/2/2023 - 11:11:44 PM
 *
 * @export
 * @class MqttServer
 * @typedef {MqttServer}
 * @extends {EventEmitter}
 * @implements {MqttServerInterface}
 */
class MqttServer extends EventEmitter implements MqttServerInterface {
  private static instance: MqttServer | undefined;

  protected _brokerId: string | undefined;

  /**
   * Determine that the broker is already started.
   * @date 12/2/2023 - 11:07:31 PM
   *
   * @protected
   * @type {boolean}
   */
  protected _isStarted: boolean = false;

  /**
   * Determine that the broker is already stopped.
   * @date 12/2/2023 - 11:08:10 PM
   *
   * @protected
   * @type {boolean}
   */
  protected _isStopped: boolean = true;

  constructor() {
    super();
    this._brokerId = defineBrokerID("mybroker");
  }

  /**
   * Expose the `isStarted` value.
   * @date 12/2/2023 - 11:08:34 PM
   *
   * @public
   * @readonly
   * @type {boolean}
   */
  public get isStarted(): boolean {
    return this._isStarted;
  }

  /**
   * Expose the `isStopped` value.
   * @date 12/2/2023 - 11:09:08 PM
   *
   * @public
   * @readonly
   * @type {boolean}
   */
  public get isStopped(): boolean {
    return this._isStopped;
  }

  public get brokerId(): string {
    return this._brokerId as string;
  }

  /**
   * Starting the Mqtt Server.
   * @date 12/2/2023 - 11:10:19 PM
   *
   * @public
   */
  public start(): void {
    if (!this._isStarted) {
      this._isStarted = true;
      this._isStopped = false;
    }
  }

  /**
   * Stopping the Mqtt Server.
   * @date 12/2/2023 - 11:10:46 PM
   *
   * @public
   */
  public stop() {}

  /**
   * Get the shared instance as singleton inatance, shared accross app.
   * @date 12/3/2023 - 12:28:46 AM
   *
   * @public
   * @static
   * @returns {MqttServer}
   */
  public static getInstance(): MqttServer {
    if (!MqttServer.instance) {
      MqttServer.instance = new MqttServer();
    }

    return MqttServer.instance;
  }
}

/**
 * Default host type options.
 * @date 12/2/2023 - 11:36:56 PM
 *
 * @export
 * @typedef {DefaultMqttHost}
 */
export type DefaultMqttHost = "localhost" | "127.0.0.1";

/**
 * Default port number options.
 * @date 12/2/2023 - 11:37:20 PM
 *
 * @export
 * @typedef {DefaultMqttPort}
 */
export type DefaultMqttPort = 1883;

/**
 * The shape of server config.
 * @date 12/2/2023 - 11:38:00 PM
 *
 * @export
 * @interface ServerOptions
 * @typedef {ServerOptions}
 */
export interface ServerOptions {
  host: DefaultMqttHost;
  port: DefaultMqttPort;
}

/**
 * The broker config.
 * @date 12/2/2023 - 11:38:21 PM
 *
 * @interface BrokerOptions
 * @typedef {BrokerOptions}
 */
export interface BrokerOptions {
  /**
   * Determine that returned broker instance is a singleton / shared instance.
   * @date 12/2/2023 - 11:50:56 PM
   *
   * @type {boolean}
   */
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
