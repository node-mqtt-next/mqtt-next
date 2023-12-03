class HexadecimalError extends Error {
  constructor(message?: string, options?: ErrorOptions){
    super(message, options)
  }
}
export class Hex {
  protected _value: number;
  constructor(value: number){
    if(typeof value !== "number" || !Number.isInteger(value)){
      throw new HexadecimalError("Invalid input. HexadecimalNumber must be initialized with an integer.")
    }
    this._value = value;
  }
  public get value(){
    return this._value.toString(16)
  }
}

export type HexadecimalNumber = InstanceType<typeof Hex>
