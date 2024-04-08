/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { GlobalOptions } from "./global_options";

/** List all deployed changesets and their deployment ID */
export interface HistoryRequest {
  /** The root changelog */
  changelogFile?: string;
  /** The default catalog name to use for the database connection */
  defaultCatalogName?: string;
  /** The default schema name to use for the database connection */
  defaultSchemaName?: string;
  /** The JDBC driver class */
  driver?: string;
  /** The JDBC driver properties file */
  driverPropertiesFile?: string;
  /** History output format */
  format?: string;
  /** Password to use to connect to the database */
  password?: string;
  /** required* The JDBC database connection URL */
  url: string;
  /** Username to use to connect to the database */
  username?: string;
  globalOptions: GlobalOptions | undefined;
}

export interface Response {
  message: string;
}

function createBaseHistoryRequest(): HistoryRequest {
  return {
    changelogFile: undefined,
    defaultCatalogName: undefined,
    defaultSchemaName: undefined,
    driver: undefined,
    driverPropertiesFile: undefined,
    format: undefined,
    password: undefined,
    url: "",
    username: undefined,
    globalOptions: undefined,
  };
}

export const HistoryRequest = {
  encode(message: HistoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.changelogFile !== undefined) {
      writer.uint32(10).string(message.changelogFile);
    }
    if (message.defaultCatalogName !== undefined) {
      writer.uint32(18).string(message.defaultCatalogName);
    }
    if (message.defaultSchemaName !== undefined) {
      writer.uint32(26).string(message.defaultSchemaName);
    }
    if (message.driver !== undefined) {
      writer.uint32(34).string(message.driver);
    }
    if (message.driverPropertiesFile !== undefined) {
      writer.uint32(42).string(message.driverPropertiesFile);
    }
    if (message.format !== undefined) {
      writer.uint32(50).string(message.format);
    }
    if (message.password !== undefined) {
      writer.uint32(58).string(message.password);
    }
    if (message.url !== "") {
      writer.uint32(66).string(message.url);
    }
    if (message.username !== undefined) {
      writer.uint32(74).string(message.username);
    }
    if (message.globalOptions !== undefined) {
      GlobalOptions.encode(message.globalOptions, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.changelogFile = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.defaultCatalogName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultSchemaName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.driver = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.driverPropertiesFile = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.format = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.password = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.url = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.username = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.globalOptions = GlobalOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HistoryRequest {
    return {
      changelogFile: isSet(object.changelogFile) ? globalThis.String(object.changelogFile) : undefined,
      defaultCatalogName: isSet(object.defaultCatalogName) ? globalThis.String(object.defaultCatalogName) : undefined,
      defaultSchemaName: isSet(object.defaultSchemaName) ? globalThis.String(object.defaultSchemaName) : undefined,
      driver: isSet(object.driver) ? globalThis.String(object.driver) : undefined,
      driverPropertiesFile: isSet(object.driverPropertiesFile)
        ? globalThis.String(object.driverPropertiesFile)
        : undefined,
      format: isSet(object.format) ? globalThis.String(object.format) : undefined,
      password: isSet(object.password) ? globalThis.String(object.password) : undefined,
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      username: isSet(object.username) ? globalThis.String(object.username) : undefined,
      globalOptions: isSet(object.globalOptions) ? GlobalOptions.fromJSON(object.globalOptions) : undefined,
    };
  },

  toJSON(message: HistoryRequest): unknown {
    const obj: any = {};
    if (message.changelogFile !== undefined) {
      obj.changelogFile = message.changelogFile;
    }
    if (message.defaultCatalogName !== undefined) {
      obj.defaultCatalogName = message.defaultCatalogName;
    }
    if (message.defaultSchemaName !== undefined) {
      obj.defaultSchemaName = message.defaultSchemaName;
    }
    if (message.driver !== undefined) {
      obj.driver = message.driver;
    }
    if (message.driverPropertiesFile !== undefined) {
      obj.driverPropertiesFile = message.driverPropertiesFile;
    }
    if (message.format !== undefined) {
      obj.format = message.format;
    }
    if (message.password !== undefined) {
      obj.password = message.password;
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.username !== undefined) {
      obj.username = message.username;
    }
    if (message.globalOptions !== undefined) {
      obj.globalOptions = GlobalOptions.toJSON(message.globalOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HistoryRequest>, I>>(base?: I): HistoryRequest {
    return HistoryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HistoryRequest>, I>>(object: I): HistoryRequest {
    const message = createBaseHistoryRequest();
    message.changelogFile = object.changelogFile ?? undefined;
    message.defaultCatalogName = object.defaultCatalogName ?? undefined;
    message.defaultSchemaName = object.defaultSchemaName ?? undefined;
    message.driver = object.driver ?? undefined;
    message.driverPropertiesFile = object.driverPropertiesFile ?? undefined;
    message.format = object.format ?? undefined;
    message.password = object.password ?? undefined;
    message.url = object.url ?? "";
    message.username = object.username ?? undefined;
    message.globalOptions = (object.globalOptions !== undefined && object.globalOptions !== null)
      ? GlobalOptions.fromPartial(object.globalOptions)
      : undefined;
    return message;
  },
};

function createBaseResponse(): Response {
  return { message: "" };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Response {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Response>, I>>(base?: I): Response {
    return Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.message = object.message ?? "";
    return message;
  },
};

export interface HistoryService {
  execute(request: HistoryRequest): Promise<Response>;
}

export const HistoryServiceServiceName = "liquibase.HistoryService";
export class HistoryServiceClientImpl implements HistoryService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || HistoryServiceServiceName;
    this.rpc = rpc;
    this.execute = this.execute.bind(this);
  }
  execute(request: HistoryRequest): Promise<Response> {
    const data = HistoryRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "execute", data);
    return promise.then((data) => Response.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
