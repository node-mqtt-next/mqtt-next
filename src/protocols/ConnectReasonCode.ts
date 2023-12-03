/**
 * 
 * 
 * This class is supposed to determine the correct kinfd of reason code for `CONNECT` packet.
 * 
 * Each static properties is represent the MQTT Reason Code for the `CONNNECT` type of MQTT Control Packet and all of these property are cast in Hexadecimal notation.
 * 
 * @see https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html#
 * 
 * @date 12/3/2023 - 10:34:55 PM
 *
 * @export
 * @class ConnectReasonCode
 * @type {ConnectReasonCode}
 */
export class ConnectReasonCode {
  /**
   * Connect Reason Code Name : `Success` 
   * 
   * Determine that the current connection state was accepted, 
   * The state is represented by following format : 
   * - `0x00` in hex notations, 
   * - `0` in decimal notations, 
   * - default use a hex with value : `0x00`.
   * 
   * 
   * @date 12/3/2023 - 10:34:55 PM
   *
   * @public These property is public.
   * @static These property is static props.
   * @readonly These property is read-only.
   * @type {number} The number represent the connect reason code in Hexadecimal notations.
   */
  public static readonly Success: number = 0x00; // decimal 0 ;
  /**
   * Connect Reason Code Name : `UnspecifiedError`
   * 
   * Determine that the current connection state is ``
   * The state is represented by following format : 
   * - `0x00` in hex notations, 
   * - `0` in decimal notations, 
   * - default use a hex with value : `0x00`. 
   * 
   * 
   * @date 12/3/2023 - 10:34:55 PM
   *
   * @public These property is public.
   * @static These property is static props.
   * @readonly These property is read-only.
   * @type {number} The number represent the connect reason code in Hexadecimal notations.
   */
  public static readonly UnspecifiedError: number = 0x80; // decimal 28;
  /**
   * Connect Reason Code Name : ``
   * 
   * Determine that the current connection state is ``
   * The state is represented by following format : 
   * - `0x00` in hex notations, 
   * - `0` in decimal notations, 
   * - default use a hex with value : `0x00`. 
   * 
   * 
   * @date 12/3/2023 - 10:34:55 PM
   *
   * @public These property is public.
   * @static These property is static props.
   * @readonly These property is read-only.
   * @type {number} The number represent the connect reason code in Hexadecimal notations.
   */
  public static readonly MalformedPacket: number = 0; // decimal 29;
  /**
   * Connect Reason Code Name : ``
   * 
   * Determine that the current connection state is ``
   * The state is represented by following format : 
   * - `0x00` in hex notations, 
   * - `0` in decimal notations, 
   * - default use a hex with value : `0x00`. 
   * 
   * 
   * @date 12/3/2023 - 10:34:55 PM
   *
   * @public These property is public.
   * @static These property is static props.
   * @readonly These property is read-only.
   * @type {number} The number represent the connect reason code in Hexadecimal notations.
   */
  public static readonly ProtocolError: number = 0; // decimal 30;
  /**
   * Connect Reason Code Name : ``
   * 
   * Determine that the current connection state is ``
   * The state is represented by following format : 
   * - `0x00` in hex notations, 
   * - `0` in decimal notations, 
   * - default use a hex with value : `0x00`. 
   * 
   * 
   * @date 12/3/2023 - 10:34:55 PM
   *
   * @public These property is public.
   * @static These property is static props.
   * @readonly These property is read-only.
   * @type {number} The number represent the connect reason code in Hexadecimal notations.
   */
  public static readonly ImplementationSpecificError: number = 0; // decimal 31;
  /**
   * Connect Reason Code Name : ``
   * 
   * Determine that the current connection state is ``
   * The state is represented by following format : 
   * - `0x00` in hex notations, 
   * - `0` in decimal notations, 
   * - default use a hex with value : `0x00`. 
   * 
   * 
   * @date 12/3/2023 - 10:34:55 PM
   *
   * @public These property is public.
   * @static These property is static props.
   * @readonly These property is read-only.
   * @type {number} The number represent the connect reason code in Hexadecimal notations.
   */
  public static readonly UnsupportedProtocolVersion: number = 0; // decimal 32;
  /**
   * Connect Reason Code Name : ``
   * 
   * Determine that the current connection state is ``
   * The state is represented by following format : 
   * - `0x00` in hex notations, 
   * - `0` in decimal notations, 
   * - default use a hex with value : `0x00`. 
   * 
   * 
   * @date 12/3/2023 - 10:34:55 PM
   *
   * @public These property is public.
   * @static These property is static props.
   * @readonly These property is read-only.
   * @type {number} The number represent the connect reason code in Hexadecimal notations.
   */
  public static readonly ClientIdentifierNotValid: number = 0; // decimal 33;
  /**
   * Connect Reason Code Name : ``
   * 
   * Determine that the current connection state is ``
   * The state is represented by following format : 
   * - `0x00` in hex notations, 
   * - `0` in decimal notations, 
   * - default use a hex with value : `0x00`. 
   * 
   * 
   * @date 12/3/2023 - 10:34:55 PM
   *
   * @public These property is public.
   * @static These property is static props.
   * @readonly These property is read-only.
   * @type {number} The number represent the connect reason code in Hexadecimal notations.
   */
  public static readonly BadUserNameOrPassword: number = 0; // decimal 34;
  /**
   * Connect Reason Code Name : ``
   * 
   * Determine that the current connection state is ``
   * The state is represented by following format : 
   * - `0x00` in hex notations, 
   * - `0` in decimal notations, 
   * - default use a hex with value : `0x00`. 
   * 
   * 
   * @date 12/3/2023 - 10:34:55 PM
   *
   * @public These property is public.
   * @static These property is static props.
   * @readonly These property is read-only.
   * @type {number} The number represent the connect reason code in Hexadecimal notations.
   */
  public static readonly NotAuthorized: number = 0; // decimal 35;
  /**
   * Connect Reason Code Name : ``
   * 
   * Determine that the current connection state is ``
   * The state is represented by following format : 
   * - `0x00` in hex notations, 
   * - `0` in decimal notations, 
   * - default use a hex with value : `0x00`. 
   * 
   * 
   * @date 12/3/2023 - 10:34:55 PM
   *
   * @public These property is public.
   * @static These property is static props.
   * @readonly These property is read-only.
   * @type {number} The number represent the connect reason code in Hexadecimal notations.
   */
  public static readonly ServerUnavailable: number = 0; // decimal 36;
  /**
   * Connect Reason Code Name : ``
   * 
   * Determine that the current connection state is ``
   * The state is represented by following format : 
   * - `0x00` in hex notations, 
   * - `0` in decimal notations, 
   * - default use a hex with value : `0x00`. 
   * 
   * 
   * @date 12/3/2023 - 10:34:55 PM
   *
   * @public These property is public.
   * @static These property is static props.
   * @readonly These property is read-only.
   * @type {number} The number represent the connect reason code in Hexadecimal notations.
   */
  public static readonly ServerBusy: number = 0; // decimal 37;
  /**
   * Connect Reason Code Name : ``
   * 
   * Determine that the current connection state is ``
   * The state is represented by following format : 
   * - `0x00` in hex notations, 
   * - `0` in decimal notations, 
   * - default use a hex with value : `0x00`. 
   * 
   * 
   * @date 12/3/2023 - 10:34:55 PM
   *
   * @public These property is public.
   * @static These property is static props.
   * @readonly These property is read-only.
   * @type {number} The number represent the connect reason code in Hexadecimal notations.
   */
  public static readonly Banned: number = 0; // decimal 38;
  /**
   * Connect Reason Code Name : ``
   * 
   * Determine that the current connection state is ``
   * The state is represented by following format : 
   * - `0x00` in hex notations, 
   * - `0` in decimal notations, 
   * - default use a hex with value : `0x00`. 
   * 
   * 
   * @date 12/3/2023 - 10:34:55 PM
   *
   * @public These property is public.
   * @static These property is static props.
   * @readonly These property is read-only.
   * @type {number} The number represent the connect reason code in Hexadecimal notations.
   */
  public static readonly BadAuthenticationMethod: number = 0; // decimal 40;
  /**
   * Connect Reason Code Name : ``
   * 
   * Determine that the current connection state is ``
   * The state is represented by following format : 
   * - `0x00` in hex notations, 
   * - `0` in decimal notations, 
   * - default use a hex with value : `0x00`. 
   * 
   * 
   * @date 12/3/2023 - 10:34:54 PM
   *
   * @public These property is public.
   * @static These property is static props.
   * @readonly These property is read-only.
   * @type {number} The number represent the connect reason code in Hexadecimal notations.
   */
  public static readonly TopicNameInvalid: number = 0; // decimal 44;
  /**
   * Connect Reason Code Name : ``
   * 
   * Determine that the current connection state is ``
   * The state is represented by following format : 
   * - `0x00` in hex notations, 
   * - `0` in decimal notations, 
   * - default use a hex with value : `0x00`. 
   * 
   * 
   * @date 12/3/2023 - 10:34:54 PM
   *
   * @public These property is public.
   * @static These property is static props.
   * @readonly These property is read-only.
   * @type {number} The number represent the connect reason code in Hexadecimal notations.
   */
  public static readonly PacketTooLarge: number = 0; // decimal 49;
  /**
   * Connect Reason Code Name : ``
   * 
   * Determine that the current connection state is ``
   * The state is represented by following format : 
   * - `0x00` in hex notations, 
   * - `0` in decimal notations, 
   * - default use a hex with value : `0x00`. 
   * 
   * 
   * @date 12/3/2023 - 10:34:54 PM
   *
   * @public These property is public.
   * @static These property is static props.
   * @readonly These property is read-only.
   * @type {number} The number represent the connect reason code in Hexadecimal notations.
   */
  public static readonly QuotaExceeded: number = 0; // decimal 51;
  /**
   * Connect Reason Code Name : ``
   * 
   * Determine that the current connection state is ``
   * The state is represented by following format : 
   * - `0x00` in hex notations, 
   * - `0` in decimal notations, 
   * - default use a hex with value : `0x00`. 
   * 
   * 
   * @date 12/3/2023 - 10:34:54 PM
   *
   * @public These property is public.
   * @static These property is static props.
   * @readonly These property is read-only.
   * @type {number} The number represent the connect reason code in Hexadecimal notations.
   */
  public static readonly PayloadFormatInvalid: number = 0; // decimal 53;
  /**
   * Connect Reason Code Name : ``
   * 
   * Determine that the current connection state is ``
   * The state is represented by following format : 
   * - `0x00` in hex notations, 
   * - `0` in decimal notations, 
   * - default use a hex with value : `0x00`. 
   * 
   * 
   * @date 12/3/2023 - 10:34:54 PM
   *
   * @public These property is public.
   * @static These property is static props.
   * @readonly These property is read-only.
   * @type {number} The number represent the connect reason code in Hexadecimal notations.
   */
  public static readonly RetainNotSupported: number = 0; // decimal 54;
  /**
   * Connect Reason Code Name : ``
   * 
   * Determine that the current connection state is ``
   * The state is represented by following format : 
   * - `0x00` in hex notations, 
   * - `0` in decimal notations, 
   * - default use a hex with value : `0x00`. 
   * 
   * 
   * @date 12/3/2023 - 10:34:54 PM
   *
   * @public These property is public.
   * @static These property is static props.
   * @readonly These property is read-only.
   * @type {number} The number represent the connect reason code in Hexadecimal notations.
   */
  public static readonly QoSNotSupported: number = 0; // decimal 55;
  /**
   * Connect Reason Code Name : ``
   * 
   * Determine that the current connection state is ``
   * The state is represented by following format : 
   * - `0x00` in hex notations, 
   * - `0` in decimal notations, 
   * - default use a hex with value : `0x00`. 
   * 
   * 
   * @date 12/3/2023 - 10:34:54 PM
   *
   * @public These property is public.
   * @static These property is static props.
   * @readonly These property is read-only.
   * @type {number} The number represent the connect reason code in Hexadecimal notations.
   */
  public static readonly UseAnotherServer: number = 0; // decimal 56;
  /**
   * Connect Reason Code Name : ``
   * 
   * Determine that the current connection state is ``
   * The state is represented by following format : 
   * - `0x00` in hex notations, 
   * - `0` in decimal notations, 
   * - default use a hex with value : `0x00`. 
   * 
   * 
   * @date 12/3/2023 - 10:34:54 PM
   *
   * @public These property is public.
   * @static These property is static props.
   * @readonly These property is read-only.
   * @type {number} The number represent the connect reason code in Hexadecimal notations.
   */
  public static readonly ServerMoved: number = 0; // decimal 57;
  /**
   * Connect Reason Code Name : ``
   * 
   * Determine that the current connection state is ``
   * The state is represented by following format : 
   * - `0x00` in hex notations, 
   * - `0` in decimal notations, 
   * - default use a hex with value : `0x00`. 
   * 
   * 
   * @date 12/3/2023 - 10:34:54 PM
   *
   * @public These property is public.
   * @static These property is static props.
   * @readonly These property is read-only.
   * @type {number} The number represent the connect reason code in Hexadecimal notations.
   */
  public static readonly ConnectionRateExceeded: number = 0; // decimal 59;
}