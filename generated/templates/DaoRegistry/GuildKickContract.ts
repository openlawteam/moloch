// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class GuildKickContract__kicksResult {
  value0: Address;
  value1: i32;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: Address,
    value1: i32,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1))
    );
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class GuildKickContract extends ethereum.SmartContract {
  static bind(address: Address): GuildKickContract {
    return new GuildKickContract("GuildKickContract", address);
  }

  getFlag(flags: BigInt, flag: BigInt): boolean {
    let result = super.call("getFlag", "getFlag(uint256,uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(flags),
      ethereum.Value.fromUnsignedBigInt(flag)
    ]);

    return result[0].toBoolean();
  }

  try_getFlag(flags: BigInt, flag: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("getFlag", "getFlag(uint256,uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(flags),
      ethereum.Value.fromUnsignedBigInt(flag)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  kicks(param0: Address, param1: Bytes): GuildKickContract__kicksResult {
    let result = super.call(
      "kicks",
      "kicks(address,bytes32):(address,uint8,uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromFixedBytes(param1)
      ]
    );

    return new GuildKickContract__kicksResult(
      result[0].toAddress(),
      result[1].toI32(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_kicks(
    param0: Address,
    param1: Bytes
  ): ethereum.CallResult<GuildKickContract__kicksResult> {
    let result = super.tryCall(
      "kicks",
      "kicks(address,bytes32):(address,uint8,uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromFixedBytes(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new GuildKickContract__kicksResult(
        value[0].toAddress(),
        value[1].toI32(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  ongoingKicks(param0: Address): Bytes {
    let result = super.call("ongoingKicks", "ongoingKicks(address):(bytes32)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBytes();
  }

  try_ongoingKicks(param0: Address): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "ongoingKicks",
      "ongoingKicks(address):(bytes32)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  setFlag(flags: BigInt, flag: BigInt, value: boolean): BigInt {
    let result = super.call(
      "setFlag",
      "setFlag(uint256,uint256,bool):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(flags),
        ethereum.Value.fromUnsignedBigInt(flag),
        ethereum.Value.fromBoolean(value)
      ]
    );

    return result[0].toBigInt();
  }

  try_setFlag(
    flags: BigInt,
    flag: BigInt,
    value: boolean
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "setFlag",
      "setFlag(uint256,uint256,bool):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(flags),
        ethereum.Value.fromUnsignedBigInt(flag),
        ethereum.Value.fromBoolean(value)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class SubmitKickProposalCall extends ethereum.Call {
  get inputs(): SubmitKickProposalCall__Inputs {
    return new SubmitKickProposalCall__Inputs(this);
  }

  get outputs(): SubmitKickProposalCall__Outputs {
    return new SubmitKickProposalCall__Outputs(this);
  }
}

export class SubmitKickProposalCall__Inputs {
  _call: SubmitKickProposalCall;

  constructor(call: SubmitKickProposalCall) {
    this._call = call;
  }

  get dao(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get proposalId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get memberToKick(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SubmitKickProposalCall__Outputs {
  _call: SubmitKickProposalCall;

  constructor(call: SubmitKickProposalCall) {
    this._call = call;
  }
}

export class ProcessProposalCall extends ethereum.Call {
  get inputs(): ProcessProposalCall__Inputs {
    return new ProcessProposalCall__Inputs(this);
  }

  get outputs(): ProcessProposalCall__Outputs {
    return new ProcessProposalCall__Outputs(this);
  }
}

export class ProcessProposalCall__Inputs {
  _call: ProcessProposalCall;

  constructor(call: ProcessProposalCall) {
    this._call = call;
  }

  get dao(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get proposalId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class ProcessProposalCall__Outputs {
  _call: ProcessProposalCall;

  constructor(call: ProcessProposalCall) {
    this._call = call;
  }
}

export class RageKickCall extends ethereum.Call {
  get inputs(): RageKickCall__Inputs {
    return new RageKickCall__Inputs(this);
  }

  get outputs(): RageKickCall__Outputs {
    return new RageKickCall__Outputs(this);
  }
}

export class RageKickCall__Inputs {
  _call: RageKickCall;

  constructor(call: RageKickCall) {
    this._call = call;
  }

  get dao(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get toIndex(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RageKickCall__Outputs {
  _call: RageKickCall;

  constructor(call: RageKickCall) {
    this._call = call;
  }
}