// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Laoland extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Laoland entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Laoland entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Laoland", id.toString(), this);
  }

  static load(id: string): Laoland | null {
    return store.get("Laoland", id) as Laoland | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get daoAddress(): Bytes | null {
    let value = this.get("daoAddress");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set daoAddress(value: Bytes | null) {
    if (value === null) {
      this.unset("daoAddress");
    } else {
      this.set("daoAddress", Value.fromBytes(value as Bytes));
    }
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get totalShares(): string | null {
    let value = this.get("totalShares");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set totalShares(value: string | null) {
    if (value === null) {
      this.unset("totalShares");
    } else {
      this.set("totalShares", Value.fromString(value as string));
    }
  }

  get createdAt(): string | null {
    let value = this.get("createdAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set createdAt(value: string | null) {
    if (value === null) {
      this.unset("createdAt");
    } else {
      this.set("createdAt", Value.fromString(value as string));
    }
  }

  get initialized(): boolean {
    let value = this.get("initialized");
    return value.toBoolean();
  }

  set initialized(value: boolean) {
    this.set("initialized", Value.fromBoolean(value));
  }

  get bank(): string | null {
    let value = this.get("bank");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set bank(value: string | null) {
    if (value === null) {
      this.unset("bank");
    } else {
      this.set("bank", Value.fromString(value as string));
    }
  }

  get daoConstants(): string | null {
    let value = this.get("daoConstants");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set daoConstants(value: string | null) {
    if (value === null) {
      this.unset("daoConstants");
    } else {
      this.set("daoConstants", Value.fromString(value as string));
    }
  }
}

export class Bank extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Bank entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Bank entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Bank", id.toString(), this);
  }

  static load(id: string): Bank | null {
    return store.get("Bank", id) as Bank | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bankAddress(): Bytes | null {
    let value = this.get("bankAddress");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set bankAddress(value: Bytes | null) {
    if (value === null) {
      this.unset("bankAddress");
    } else {
      this.set("bankAddress", Value.fromBytes(value as Bytes));
    }
  }

  get balance(): BigInt | null {
    let value = this.get("balance");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set balance(value: BigInt | null) {
    if (value === null) {
      this.unset("balance");
    } else {
      this.set("balance", Value.fromBigInt(value as BigInt));
    }
  }

  get createdAt(): string | null {
    let value = this.get("createdAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set createdAt(value: string | null) {
    if (value === null) {
      this.unset("createdAt");
    } else {
      this.set("createdAt", Value.fromString(value as string));
    }
  }

  get laoland(): string {
    let value = this.get("laoland");
    return value.toString();
  }

  set laoland(value: string) {
    this.set("laoland", Value.fromString(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (value === null) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(value as string));
    }
  }

  get logo(): string | null {
    let value = this.get("logo");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set logo(value: string | null) {
    if (value === null) {
      this.unset("logo");
    } else {
      this.set("logo", Value.fromString(value as string));
    }
  }

  get decimals(): string | null {
    let value = this.get("decimals");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set decimals(value: string | null) {
    if (value === null) {
      this.unset("decimals");
    } else {
      this.set("decimals", Value.fromString(value as string));
    }
  }

  get whitelisted(): boolean {
    let value = this.get("whitelisted");
    return value.toBoolean();
  }

  set whitelisted(value: boolean) {
    this.set("whitelisted", Value.fromBoolean(value));
  }
}

export class TokenBalance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenBalance entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenBalance entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenBalance", id.toString(), this);
  }

  static load(id: string): TokenBalance | null {
    return store.get("TokenBalance", id) as TokenBalance | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get tokenBalance(): BigInt {
    let value = this.get("tokenBalance");
    return value.toBigInt();
  }

  set tokenBalance(value: BigInt) {
    this.set("tokenBalance", Value.fromBigInt(value));
  }

  get member(): string | null {
    let value = this.get("member");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set member(value: string | null) {
    if (value === null) {
      this.unset("member");
    } else {
      this.set("member", Value.fromString(value as string));
    }
  }
}

export class Member extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Member entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Member entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Member", id.toString(), this);
  }

  static load(id: string): Member | null {
    return store.get("Member", id) as Member | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get memberAddress(): Bytes {
    let value = this.get("memberAddress");
    return value.toBytes();
  }

  set memberAddress(value: Bytes) {
    this.set("memberAddress", Value.fromBytes(value));
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get delegateKey(): Bytes {
    let value = this.get("delegateKey");
    return value.toBytes();
  }

  set delegateKey(value: Bytes) {
    this.set("delegateKey", Value.fromBytes(value));
  }

  get shares(): BigInt {
    let value = this.get("shares");
    return value.toBigInt();
  }

  set shares(value: BigInt) {
    this.set("shares", Value.fromBigInt(value));
  }

  get loot(): BigInt {
    let value = this.get("loot");
    return value.toBigInt();
  }

  set loot(value: BigInt) {
    this.set("loot", Value.fromBigInt(value));
  }

  get lockedLoot(): BigInt {
    let value = this.get("lockedLoot");
    return value.toBigInt();
  }

  set lockedLoot(value: BigInt) {
    this.set("lockedLoot", Value.fromBigInt(value));
  }

  get tokenBalances(): Array<string> | null {
    let value = this.get("tokenBalances");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tokenBalances(value: Array<string> | null) {
    if (value === null) {
      this.unset("tokenBalances");
    } else {
      this.set("tokenBalances", Value.fromStringArray(value as Array<string>));
    }
  }

  get jailed(): boolean {
    let value = this.get("jailed");
    return value.toBoolean();
  }

  set jailed(value: boolean) {
    this.set("jailed", Value.fromBoolean(value));
  }
}

export class Proposal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Proposal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Proposal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Proposal", id.toString(), this);
  }

  static load(id: string): Proposal | null {
    return store.get("Proposal", id) as Proposal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get proposalId(): Bytes {
    let value = this.get("proposalId");
    return value.toBytes();
  }

  set proposalId(value: Bytes) {
    this.set("proposalId", Value.fromBytes(value));
  }

  get flags(): BigInt {
    let value = this.get("flags");
    return value.toBigInt();
  }

  set flags(value: BigInt) {
    this.set("flags", Value.fromBigInt(value));
  }

  get sponsoredAt(): string | null {
    let value = this.get("sponsoredAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set sponsoredAt(value: string | null) {
    if (value === null) {
      this.unset("sponsoredAt");
    } else {
      this.set("sponsoredAt", Value.fromString(value as string));
    }
  }

  get sponsored(): boolean {
    let value = this.get("sponsored");
    return value.toBoolean();
  }

  set sponsored(value: boolean) {
    this.set("sponsored", Value.fromBoolean(value));
  }

  get sponsor(): string | null {
    let value = this.get("sponsor");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set sponsor(value: string | null) {
    if (value === null) {
      this.unset("sponsor");
    } else {
      this.set("sponsor", Value.fromString(value as string));
    }
  }

  get processedAt(): string | null {
    let value = this.get("processedAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set processedAt(value: string | null) {
    if (value === null) {
      this.unset("processedAt");
    } else {
      this.set("processedAt", Value.fromString(value as string));
    }
  }

  get processed(): boolean {
    let value = this.get("processed");
    return value.toBoolean();
  }

  set processed(value: boolean) {
    this.set("processed", Value.fromBoolean(value));
  }
}

export class Adapter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Adapter entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Adapter entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Adapter", id.toString(), this);
  }

  static load(id: string): Adapter | null {
    return store.get("Adapter", id) as Adapter | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get adapterId(): Bytes {
    let value = this.get("adapterId");
    return value.toBytes();
  }

  set adapterId(value: Bytes) {
    this.set("adapterId", Value.fromBytes(value));
  }

  get adapterAddress(): Bytes {
    let value = this.get("adapterAddress");
    return value.toBytes();
  }

  set adapterAddress(value: Bytes) {
    this.set("adapterAddress", Value.fromBytes(value));
  }

  get acl(): BigInt {
    let value = this.get("acl");
    return value.toBigInt();
  }

  set acl(value: BigInt) {
    this.set("acl", Value.fromBigInt(value));
  }
}

export class Extension extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Extension entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Extension entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Extension", id.toString(), this);
  }

  static load(id: string): Extension | null {
    return store.get("Extension", id) as Extension | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get extensionAddress(): Bytes {
    let value = this.get("extensionAddress");
    return value.toBytes();
  }

  set extensionAddress(value: Bytes) {
    this.set("extensionAddress", Value.fromBytes(value));
  }

  get extensionId(): Bytes {
    let value = this.get("extensionId");
    return value.toBytes();
  }

  set extensionId(value: Bytes) {
    this.set("extensionId", Value.fromBytes(value));
  }
}

export class DaoConstants extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DaoConstants entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DaoConstants entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DaoConstants", id.toString(), this);
  }

  static load(id: string): DaoConstants | null {
    return store.get("DaoConstants", id) as DaoConstants | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get laoland(): string | null {
    let value = this.get("laoland");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set laoland(value: string | null) {
    if (value === null) {
      this.unset("laoland");
    } else {
      this.set("laoland", Value.fromString(value as string));
    }
  }

  get GUILD(): Bytes | null {
    let value = this.get("GUILD");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set GUILD(value: Bytes | null) {
    if (value === null) {
      this.unset("GUILD");
    } else {
      this.set("GUILD", Value.fromBytes(value as Bytes));
    }
  }

  get TOTAL(): Bytes | null {
    let value = this.get("TOTAL");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set TOTAL(value: Bytes | null) {
    if (value === null) {
      this.unset("TOTAL");
    } else {
      this.set("TOTAL", Value.fromBytes(value as Bytes));
    }
  }

  get SHARES(): Bytes | null {
    let value = this.get("SHARES");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set SHARES(value: Bytes | null) {
    if (value === null) {
      this.unset("SHARES");
    } else {
      this.set("SHARES", Value.fromBytes(value as Bytes));
    }
  }

  get LOOT(): Bytes | null {
    let value = this.get("LOOT");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set LOOT(value: Bytes | null) {
    if (value === null) {
      this.unset("LOOT");
    } else {
      this.set("LOOT", Value.fromBytes(value as Bytes));
    }
  }

  get LOCKED_LOOT(): Bytes | null {
    let value = this.get("LOCKED_LOOT");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set LOCKED_LOOT(value: Bytes | null) {
    if (value === null) {
      this.unset("LOCKED_LOOT");
    } else {
      this.set("LOCKED_LOOT", Value.fromBytes(value as Bytes));
    }
  }

  get ETH_TOKEN(): Bytes | null {
    let value = this.get("ETH_TOKEN");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set ETH_TOKEN(value: Bytes | null) {
    if (value === null) {
      this.unset("ETH_TOKEN");
    } else {
      this.set("ETH_TOKEN", Value.fromBytes(value as Bytes));
    }
  }
}
