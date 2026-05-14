
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Association
 * 
 */
export type Association = $Result.DefaultSelection<Prisma.$AssociationPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Live
 * 
 */
export type Live = $Result.DefaultSelection<Prisma.$LivePayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model LiveClient
 * 
 */
export type LiveClient = $Result.DefaultSelection<Prisma.$LiveClientPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model Operation
 * 
 */
export type Operation = $Result.DefaultSelection<Prisma.$OperationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Associations
 * const associations = await prisma.association.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Associations
   * const associations = await prisma.association.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.association`: Exposes CRUD operations for the **Association** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Associations
    * const associations = await prisma.association.findMany()
    * ```
    */
  get association(): Prisma.AssociationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.live`: Exposes CRUD operations for the **Live** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lives
    * const lives = await prisma.live.findMany()
    * ```
    */
  get live(): Prisma.LiveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.liveClient`: Exposes CRUD operations for the **LiveClient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LiveClients
    * const liveClients = await prisma.liveClient.findMany()
    * ```
    */
  get liveClient(): Prisma.LiveClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.operation`: Exposes CRUD operations for the **Operation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operations
    * const operations = await prisma.operation.findMany()
    * ```
    */
  get operation(): Prisma.OperationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Association: 'Association',
    Product: 'Product',
    Category: 'Category',
    Transaction: 'Transaction',
    Live: 'Live',
    Client: 'Client',
    LiveClient: 'LiveClient',
    OrderItem: 'OrderItem',
    Operation: 'Operation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "association" | "product" | "category" | "transaction" | "live" | "client" | "liveClient" | "orderItem" | "operation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Association: {
        payload: Prisma.$AssociationPayload<ExtArgs>
        fields: Prisma.AssociationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssociationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssociationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          findFirst: {
            args: Prisma.AssociationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssociationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          findMany: {
            args: Prisma.AssociationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>[]
          }
          create: {
            args: Prisma.AssociationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          createMany: {
            args: Prisma.AssociationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssociationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>[]
          }
          delete: {
            args: Prisma.AssociationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          update: {
            args: Prisma.AssociationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          deleteMany: {
            args: Prisma.AssociationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssociationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssociationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>[]
          }
          upsert: {
            args: Prisma.AssociationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          aggregate: {
            args: Prisma.AssociationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssociation>
          }
          groupBy: {
            args: Prisma.AssociationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssociationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssociationCountArgs<ExtArgs>
            result: $Utils.Optional<AssociationCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Live: {
        payload: Prisma.$LivePayload<ExtArgs>
        fields: Prisma.LiveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LiveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LiveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivePayload>
          }
          findFirst: {
            args: Prisma.LiveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LiveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivePayload>
          }
          findMany: {
            args: Prisma.LiveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivePayload>[]
          }
          create: {
            args: Prisma.LiveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivePayload>
          }
          createMany: {
            args: Prisma.LiveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LiveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivePayload>[]
          }
          delete: {
            args: Prisma.LiveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivePayload>
          }
          update: {
            args: Prisma.LiveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivePayload>
          }
          deleteMany: {
            args: Prisma.LiveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LiveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LiveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivePayload>[]
          }
          upsert: {
            args: Prisma.LiveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivePayload>
          }
          aggregate: {
            args: Prisma.LiveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLive>
          }
          groupBy: {
            args: Prisma.LiveGroupByArgs<ExtArgs>
            result: $Utils.Optional<LiveGroupByOutputType>[]
          }
          count: {
            args: Prisma.LiveCountArgs<ExtArgs>
            result: $Utils.Optional<LiveCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      LiveClient: {
        payload: Prisma.$LiveClientPayload<ExtArgs>
        fields: Prisma.LiveClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LiveClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LiveClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveClientPayload>
          }
          findFirst: {
            args: Prisma.LiveClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LiveClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveClientPayload>
          }
          findMany: {
            args: Prisma.LiveClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveClientPayload>[]
          }
          create: {
            args: Prisma.LiveClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveClientPayload>
          }
          createMany: {
            args: Prisma.LiveClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LiveClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveClientPayload>[]
          }
          delete: {
            args: Prisma.LiveClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveClientPayload>
          }
          update: {
            args: Prisma.LiveClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveClientPayload>
          }
          deleteMany: {
            args: Prisma.LiveClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LiveClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LiveClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveClientPayload>[]
          }
          upsert: {
            args: Prisma.LiveClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveClientPayload>
          }
          aggregate: {
            args: Prisma.LiveClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLiveClient>
          }
          groupBy: {
            args: Prisma.LiveClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<LiveClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.LiveClientCountArgs<ExtArgs>
            result: $Utils.Optional<LiveClientCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      Operation: {
        payload: Prisma.$OperationPayload<ExtArgs>
        fields: Prisma.OperationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OperationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OperationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          findFirst: {
            args: Prisma.OperationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OperationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          findMany: {
            args: Prisma.OperationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>[]
          }
          create: {
            args: Prisma.OperationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          createMany: {
            args: Prisma.OperationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OperationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>[]
          }
          delete: {
            args: Prisma.OperationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          update: {
            args: Prisma.OperationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          deleteMany: {
            args: Prisma.OperationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OperationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OperationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>[]
          }
          upsert: {
            args: Prisma.OperationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          aggregate: {
            args: Prisma.OperationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperation>
          }
          groupBy: {
            args: Prisma.OperationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OperationCountArgs<ExtArgs>
            result: $Utils.Optional<OperationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    association?: AssociationOmit
    product?: ProductOmit
    category?: CategoryOmit
    transaction?: TransactionOmit
    live?: LiveOmit
    client?: ClientOmit
    liveClient?: LiveClientOmit
    orderItem?: OrderItemOmit
    operation?: OperationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AssociationCountOutputType
   */

  export type AssociationCountOutputType = {
    products: number
    categories: number
    transactions: number
    lives: number
    clients: number
    operations: number
  }

  export type AssociationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | AssociationCountOutputTypeCountProductsArgs
    categories?: boolean | AssociationCountOutputTypeCountCategoriesArgs
    transactions?: boolean | AssociationCountOutputTypeCountTransactionsArgs
    lives?: boolean | AssociationCountOutputTypeCountLivesArgs
    clients?: boolean | AssociationCountOutputTypeCountClientsArgs
    operations?: boolean | AssociationCountOutputTypeCountOperationsArgs
  }

  // Custom InputTypes
  /**
   * AssociationCountOutputType without action
   */
  export type AssociationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssociationCountOutputType
     */
    select?: AssociationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssociationCountOutputType without action
   */
  export type AssociationCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * AssociationCountOutputType without action
   */
  export type AssociationCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * AssociationCountOutputType without action
   */
  export type AssociationCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * AssociationCountOutputType without action
   */
  export type AssociationCountOutputTypeCountLivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiveWhereInput
  }

  /**
   * AssociationCountOutputType without action
   */
  export type AssociationCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }

  /**
   * AssociationCountOutputType without action
   */
  export type AssociationCountOutputTypeCountOperationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperationWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    transactions: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | ProductCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type LiveCountOutputType
   */

  export type LiveCountOutputType = {
    liveClients: number
  }

  export type LiveCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    liveClients?: boolean | LiveCountOutputTypeCountLiveClientsArgs
  }

  // Custom InputTypes
  /**
   * LiveCountOutputType without action
   */
  export type LiveCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveCountOutputType
     */
    select?: LiveCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LiveCountOutputType without action
   */
  export type LiveCountOutputTypeCountLiveClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiveClientWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    liveClients: number
    transactions: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    liveClients?: boolean | ClientCountOutputTypeCountLiveClientsArgs
    transactions?: boolean | ClientCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountLiveClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiveClientWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type LiveClientCountOutputType
   */

  export type LiveClientCountOutputType = {
    orderItems: number
  }

  export type LiveClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | LiveClientCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * LiveClientCountOutputType without action
   */
  export type LiveClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveClientCountOutputType
     */
    select?: LiveClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LiveClientCountOutputType without action
   */
  export type LiveClientCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Association
   */

  export type AggregateAssociation = {
    _count: AssociationCountAggregateOutputType | null
    _avg: AssociationAvgAggregateOutputType | null
    _sum: AssociationSumAggregateOutputType | null
    _min: AssociationMinAggregateOutputType | null
    _max: AssociationMaxAggregateOutputType | null
  }

  export type AssociationAvgAggregateOutputType = {
    balance: number | null
  }

  export type AssociationSumAggregateOutputType = {
    balance: number | null
  }

  export type AssociationMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    balance: number | null
  }

  export type AssociationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    balance: number | null
  }

  export type AssociationCountAggregateOutputType = {
    id: number
    name: number
    email: number
    createdAt: number
    updatedAt: number
    balance: number
    _all: number
  }


  export type AssociationAvgAggregateInputType = {
    balance?: true
  }

  export type AssociationSumAggregateInputType = {
    balance?: true
  }

  export type AssociationMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    balance?: true
  }

  export type AssociationMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    balance?: true
  }

  export type AssociationCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    balance?: true
    _all?: true
  }

  export type AssociationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Association to aggregate.
     */
    where?: AssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associations to fetch.
     */
    orderBy?: AssociationOrderByWithRelationInput | AssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Associations
    **/
    _count?: true | AssociationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssociationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssociationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssociationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssociationMaxAggregateInputType
  }

  export type GetAssociationAggregateType<T extends AssociationAggregateArgs> = {
        [P in keyof T & keyof AggregateAssociation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssociation[P]>
      : GetScalarType<T[P], AggregateAssociation[P]>
  }




  export type AssociationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssociationWhereInput
    orderBy?: AssociationOrderByWithAggregationInput | AssociationOrderByWithAggregationInput[]
    by: AssociationScalarFieldEnum[] | AssociationScalarFieldEnum
    having?: AssociationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssociationCountAggregateInputType | true
    _avg?: AssociationAvgAggregateInputType
    _sum?: AssociationSumAggregateInputType
    _min?: AssociationMinAggregateInputType
    _max?: AssociationMaxAggregateInputType
  }

  export type AssociationGroupByOutputType = {
    id: string
    name: string
    email: string
    createdAt: Date
    updatedAt: Date
    balance: number
    _count: AssociationCountAggregateOutputType | null
    _avg: AssociationAvgAggregateOutputType | null
    _sum: AssociationSumAggregateOutputType | null
    _min: AssociationMinAggregateOutputType | null
    _max: AssociationMaxAggregateOutputType | null
  }

  type GetAssociationGroupByPayload<T extends AssociationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssociationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssociationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssociationGroupByOutputType[P]>
            : GetScalarType<T[P], AssociationGroupByOutputType[P]>
        }
      >
    >


  export type AssociationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    balance?: boolean
    products?: boolean | Association$productsArgs<ExtArgs>
    categories?: boolean | Association$categoriesArgs<ExtArgs>
    transactions?: boolean | Association$transactionsArgs<ExtArgs>
    lives?: boolean | Association$livesArgs<ExtArgs>
    clients?: boolean | Association$clientsArgs<ExtArgs>
    operations?: boolean | Association$operationsArgs<ExtArgs>
    _count?: boolean | AssociationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["association"]>

  export type AssociationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    balance?: boolean
  }, ExtArgs["result"]["association"]>

  export type AssociationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    balance?: boolean
  }, ExtArgs["result"]["association"]>

  export type AssociationSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    balance?: boolean
  }

  export type AssociationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "createdAt" | "updatedAt" | "balance", ExtArgs["result"]["association"]>
  export type AssociationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Association$productsArgs<ExtArgs>
    categories?: boolean | Association$categoriesArgs<ExtArgs>
    transactions?: boolean | Association$transactionsArgs<ExtArgs>
    lives?: boolean | Association$livesArgs<ExtArgs>
    clients?: boolean | Association$clientsArgs<ExtArgs>
    operations?: boolean | Association$operationsArgs<ExtArgs>
    _count?: boolean | AssociationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssociationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AssociationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AssociationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Association"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      lives: Prisma.$LivePayload<ExtArgs>[]
      clients: Prisma.$ClientPayload<ExtArgs>[]
      operations: Prisma.$OperationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      createdAt: Date
      updatedAt: Date
      balance: number
    }, ExtArgs["result"]["association"]>
    composites: {}
  }

  type AssociationGetPayload<S extends boolean | null | undefined | AssociationDefaultArgs> = $Result.GetResult<Prisma.$AssociationPayload, S>

  type AssociationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssociationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssociationCountAggregateInputType | true
    }

  export interface AssociationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Association'], meta: { name: 'Association' } }
    /**
     * Find zero or one Association that matches the filter.
     * @param {AssociationFindUniqueArgs} args - Arguments to find a Association
     * @example
     * // Get one Association
     * const association = await prisma.association.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssociationFindUniqueArgs>(args: SelectSubset<T, AssociationFindUniqueArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Association that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssociationFindUniqueOrThrowArgs} args - Arguments to find a Association
     * @example
     * // Get one Association
     * const association = await prisma.association.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssociationFindUniqueOrThrowArgs>(args: SelectSubset<T, AssociationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Association that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationFindFirstArgs} args - Arguments to find a Association
     * @example
     * // Get one Association
     * const association = await prisma.association.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssociationFindFirstArgs>(args?: SelectSubset<T, AssociationFindFirstArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Association that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationFindFirstOrThrowArgs} args - Arguments to find a Association
     * @example
     * // Get one Association
     * const association = await prisma.association.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssociationFindFirstOrThrowArgs>(args?: SelectSubset<T, AssociationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Associations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Associations
     * const associations = await prisma.association.findMany()
     * 
     * // Get first 10 Associations
     * const associations = await prisma.association.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const associationWithIdOnly = await prisma.association.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssociationFindManyArgs>(args?: SelectSubset<T, AssociationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Association.
     * @param {AssociationCreateArgs} args - Arguments to create a Association.
     * @example
     * // Create one Association
     * const Association = await prisma.association.create({
     *   data: {
     *     // ... data to create a Association
     *   }
     * })
     * 
     */
    create<T extends AssociationCreateArgs>(args: SelectSubset<T, AssociationCreateArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Associations.
     * @param {AssociationCreateManyArgs} args - Arguments to create many Associations.
     * @example
     * // Create many Associations
     * const association = await prisma.association.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssociationCreateManyArgs>(args?: SelectSubset<T, AssociationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Associations and returns the data saved in the database.
     * @param {AssociationCreateManyAndReturnArgs} args - Arguments to create many Associations.
     * @example
     * // Create many Associations
     * const association = await prisma.association.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Associations and only return the `id`
     * const associationWithIdOnly = await prisma.association.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssociationCreateManyAndReturnArgs>(args?: SelectSubset<T, AssociationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Association.
     * @param {AssociationDeleteArgs} args - Arguments to delete one Association.
     * @example
     * // Delete one Association
     * const Association = await prisma.association.delete({
     *   where: {
     *     // ... filter to delete one Association
     *   }
     * })
     * 
     */
    delete<T extends AssociationDeleteArgs>(args: SelectSubset<T, AssociationDeleteArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Association.
     * @param {AssociationUpdateArgs} args - Arguments to update one Association.
     * @example
     * // Update one Association
     * const association = await prisma.association.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssociationUpdateArgs>(args: SelectSubset<T, AssociationUpdateArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Associations.
     * @param {AssociationDeleteManyArgs} args - Arguments to filter Associations to delete.
     * @example
     * // Delete a few Associations
     * const { count } = await prisma.association.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssociationDeleteManyArgs>(args?: SelectSubset<T, AssociationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Associations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Associations
     * const association = await prisma.association.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssociationUpdateManyArgs>(args: SelectSubset<T, AssociationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Associations and returns the data updated in the database.
     * @param {AssociationUpdateManyAndReturnArgs} args - Arguments to update many Associations.
     * @example
     * // Update many Associations
     * const association = await prisma.association.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Associations and only return the `id`
     * const associationWithIdOnly = await prisma.association.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssociationUpdateManyAndReturnArgs>(args: SelectSubset<T, AssociationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Association.
     * @param {AssociationUpsertArgs} args - Arguments to update or create a Association.
     * @example
     * // Update or create a Association
     * const association = await prisma.association.upsert({
     *   create: {
     *     // ... data to create a Association
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Association we want to update
     *   }
     * })
     */
    upsert<T extends AssociationUpsertArgs>(args: SelectSubset<T, AssociationUpsertArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Associations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationCountArgs} args - Arguments to filter Associations to count.
     * @example
     * // Count the number of Associations
     * const count = await prisma.association.count({
     *   where: {
     *     // ... the filter for the Associations we want to count
     *   }
     * })
    **/
    count<T extends AssociationCountArgs>(
      args?: Subset<T, AssociationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssociationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Association.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssociationAggregateArgs>(args: Subset<T, AssociationAggregateArgs>): Prisma.PrismaPromise<GetAssociationAggregateType<T>>

    /**
     * Group by Association.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssociationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssociationGroupByArgs['orderBy'] }
        : { orderBy?: AssociationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssociationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssociationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Association model
   */
  readonly fields: AssociationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Association.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssociationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Association$productsArgs<ExtArgs> = {}>(args?: Subset<T, Association$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Association$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Association$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Association$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Association$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lives<T extends Association$livesArgs<ExtArgs> = {}>(args?: Subset<T, Association$livesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clients<T extends Association$clientsArgs<ExtArgs> = {}>(args?: Subset<T, Association$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    operations<T extends Association$operationsArgs<ExtArgs> = {}>(args?: Subset<T, Association$operationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Association model
   */
  interface AssociationFieldRefs {
    readonly id: FieldRef<"Association", 'String'>
    readonly name: FieldRef<"Association", 'String'>
    readonly email: FieldRef<"Association", 'String'>
    readonly createdAt: FieldRef<"Association", 'DateTime'>
    readonly updatedAt: FieldRef<"Association", 'DateTime'>
    readonly balance: FieldRef<"Association", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Association findUnique
   */
  export type AssociationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Association to fetch.
     */
    where: AssociationWhereUniqueInput
  }

  /**
   * Association findUniqueOrThrow
   */
  export type AssociationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Association to fetch.
     */
    where: AssociationWhereUniqueInput
  }

  /**
   * Association findFirst
   */
  export type AssociationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Association to fetch.
     */
    where?: AssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associations to fetch.
     */
    orderBy?: AssociationOrderByWithRelationInput | AssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Associations.
     */
    cursor?: AssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Associations.
     */
    distinct?: AssociationScalarFieldEnum | AssociationScalarFieldEnum[]
  }

  /**
   * Association findFirstOrThrow
   */
  export type AssociationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Association to fetch.
     */
    where?: AssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associations to fetch.
     */
    orderBy?: AssociationOrderByWithRelationInput | AssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Associations.
     */
    cursor?: AssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Associations.
     */
    distinct?: AssociationScalarFieldEnum | AssociationScalarFieldEnum[]
  }

  /**
   * Association findMany
   */
  export type AssociationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Associations to fetch.
     */
    where?: AssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associations to fetch.
     */
    orderBy?: AssociationOrderByWithRelationInput | AssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Associations.
     */
    cursor?: AssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associations.
     */
    skip?: number
    distinct?: AssociationScalarFieldEnum | AssociationScalarFieldEnum[]
  }

  /**
   * Association create
   */
  export type AssociationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * The data needed to create a Association.
     */
    data: XOR<AssociationCreateInput, AssociationUncheckedCreateInput>
  }

  /**
   * Association createMany
   */
  export type AssociationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Associations.
     */
    data: AssociationCreateManyInput | AssociationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Association createManyAndReturn
   */
  export type AssociationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * The data used to create many Associations.
     */
    data: AssociationCreateManyInput | AssociationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Association update
   */
  export type AssociationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * The data needed to update a Association.
     */
    data: XOR<AssociationUpdateInput, AssociationUncheckedUpdateInput>
    /**
     * Choose, which Association to update.
     */
    where: AssociationWhereUniqueInput
  }

  /**
   * Association updateMany
   */
  export type AssociationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Associations.
     */
    data: XOR<AssociationUpdateManyMutationInput, AssociationUncheckedUpdateManyInput>
    /**
     * Filter which Associations to update
     */
    where?: AssociationWhereInput
    /**
     * Limit how many Associations to update.
     */
    limit?: number
  }

  /**
   * Association updateManyAndReturn
   */
  export type AssociationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * The data used to update Associations.
     */
    data: XOR<AssociationUpdateManyMutationInput, AssociationUncheckedUpdateManyInput>
    /**
     * Filter which Associations to update
     */
    where?: AssociationWhereInput
    /**
     * Limit how many Associations to update.
     */
    limit?: number
  }

  /**
   * Association upsert
   */
  export type AssociationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * The filter to search for the Association to update in case it exists.
     */
    where: AssociationWhereUniqueInput
    /**
     * In case the Association found by the `where` argument doesn't exist, create a new Association with this data.
     */
    create: XOR<AssociationCreateInput, AssociationUncheckedCreateInput>
    /**
     * In case the Association was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssociationUpdateInput, AssociationUncheckedUpdateInput>
  }

  /**
   * Association delete
   */
  export type AssociationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter which Association to delete.
     */
    where: AssociationWhereUniqueInput
  }

  /**
   * Association deleteMany
   */
  export type AssociationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Associations to delete
     */
    where?: AssociationWhereInput
    /**
     * Limit how many Associations to delete.
     */
    limit?: number
  }

  /**
   * Association.products
   */
  export type Association$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Association.categories
   */
  export type Association$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Association.transactions
   */
  export type Association$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Association.lives
   */
  export type Association$livesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Live
     */
    select?: LiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Live
     */
    omit?: LiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveInclude<ExtArgs> | null
    where?: LiveWhereInput
    orderBy?: LiveOrderByWithRelationInput | LiveOrderByWithRelationInput[]
    cursor?: LiveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LiveScalarFieldEnum | LiveScalarFieldEnum[]
  }

  /**
   * Association.clients
   */
  export type Association$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Association.operations
   */
  export type Association$operationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    where?: OperationWhereInput
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    cursor?: OperationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Association without action
   */
  export type AssociationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
    quantity: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
    quantity: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    quantity: number | null
    unit: string | null
    imageUrl: string | null
    categoryId: string | null
    associationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    quantity: number | null
    unit: string | null
    imageUrl: string | null
    categoryId: string | null
    associationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    quantity: number
    unit: number
    imageUrl: number
    categoryId: number
    associationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
    quantity?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
    quantity?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    quantity?: true
    unit?: true
    imageUrl?: true
    categoryId?: true
    associationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    quantity?: true
    unit?: true
    imageUrl?: true
    categoryId?: true
    associationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    quantity?: true
    unit?: true
    imageUrl?: true
    categoryId?: true
    associationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    description: string
    price: number
    quantity: number
    unit: string
    imageUrl: string
    categoryId: string
    associationId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    unit?: boolean
    imageUrl?: boolean
    categoryId?: boolean
    associationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    association?: boolean | Product$associationArgs<ExtArgs>
    transactions?: boolean | Product$transactionsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    unit?: boolean
    imageUrl?: boolean
    categoryId?: boolean
    associationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    association?: boolean | Product$associationArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    unit?: boolean
    imageUrl?: boolean
    categoryId?: boolean
    associationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    association?: boolean | Product$associationArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    unit?: boolean
    imageUrl?: boolean
    categoryId?: boolean
    associationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "quantity" | "unit" | "imageUrl" | "categoryId" | "associationId" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    association?: boolean | Product$associationArgs<ExtArgs>
    transactions?: boolean | Product$transactionsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    association?: boolean | Product$associationArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    association?: boolean | Product$associationArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      association: Prisma.$AssociationPayload<ExtArgs> | null
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      price: number
      quantity: number
      unit: string
      imageUrl: string
      categoryId: string
      associationId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    association<T extends Product$associationArgs<ExtArgs> = {}>(args?: Subset<T, Product$associationArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Product$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Product$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly quantity: FieldRef<"Product", 'Int'>
    readonly unit: FieldRef<"Product", 'String'>
    readonly imageUrl: FieldRef<"Product", 'String'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly associationId: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.association
   */
  export type Product$associationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    where?: AssociationWhereInput
  }

  /**
   * Product.transactions
   */
  export type Product$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    associationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    associationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    associationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    associationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    associationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    associationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    associationId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    associationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    association?: boolean | Category$associationArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    associationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    association?: boolean | Category$associationArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    associationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    association?: boolean | Category$associationArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    associationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "associationId" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | Category$associationArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | Category$associationArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | Category$associationArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      association: Prisma.$AssociationPayload<ExtArgs> | null
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      associationId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    association<T extends Category$associationArgs<ExtArgs> = {}>(args?: Subset<T, Category$associationArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly associationId: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.association
   */
  export type Category$associationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    where?: AssociationWhereInput
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    quantity: number | null
  }

  export type TransactionSumAggregateOutputType = {
    quantity: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    type: string | null
    quantity: number | null
    productId: string | null
    associationId: string | null
    clientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    type: string | null
    quantity: number | null
    productId: string | null
    associationId: string | null
    clientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    type: number
    quantity: number
    productId: number
    associationId: number
    clientId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    quantity?: true
  }

  export type TransactionSumAggregateInputType = {
    quantity?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    type?: true
    quantity?: true
    productId?: true
    associationId?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    type?: true
    quantity?: true
    productId?: true
    associationId?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    type?: true
    quantity?: true
    productId?: true
    associationId?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    type: string
    quantity: number
    productId: string
    associationId: string | null
    clientId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    quantity?: boolean
    productId?: boolean
    associationId?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    association?: boolean | Transaction$associationArgs<ExtArgs>
    client?: boolean | Transaction$clientArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    quantity?: boolean
    productId?: boolean
    associationId?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    association?: boolean | Transaction$associationArgs<ExtArgs>
    client?: boolean | Transaction$clientArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    quantity?: boolean
    productId?: boolean
    associationId?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    association?: boolean | Transaction$associationArgs<ExtArgs>
    client?: boolean | Transaction$clientArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    type?: boolean
    quantity?: boolean
    productId?: boolean
    associationId?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "quantity" | "productId" | "associationId" | "clientId" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    association?: boolean | Transaction$associationArgs<ExtArgs>
    client?: boolean | Transaction$clientArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    association?: boolean | Transaction$associationArgs<ExtArgs>
    client?: boolean | Transaction$clientArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    association?: boolean | Transaction$associationArgs<ExtArgs>
    client?: boolean | Transaction$clientArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      association: Prisma.$AssociationPayload<ExtArgs> | null
      client: Prisma.$ClientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      quantity: number
      productId: string
      associationId: string | null
      clientId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    association<T extends Transaction$associationArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$associationArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    client<T extends Transaction$clientArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly type: FieldRef<"Transaction", 'String'>
    readonly quantity: FieldRef<"Transaction", 'Int'>
    readonly productId: FieldRef<"Transaction", 'String'>
    readonly associationId: FieldRef<"Transaction", 'String'>
    readonly clientId: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.association
   */
  export type Transaction$associationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    where?: AssociationWhereInput
  }

  /**
   * Transaction.client
   */
  export type Transaction$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Live
   */

  export type AggregateLive = {
    _count: LiveCountAggregateOutputType | null
    _avg: LiveAvgAggregateOutputType | null
    _sum: LiveSumAggregateOutputType | null
    _min: LiveMinAggregateOutputType | null
    _max: LiveMaxAggregateOutputType | null
  }

  export type LiveAvgAggregateOutputType = {
    purchasePrice: number | null
  }

  export type LiveSumAggregateOutputType = {
    purchasePrice: number | null
  }

  export type LiveMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    date: Date | null
    associationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    purchasePrice: number | null
  }

  export type LiveMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    date: Date | null
    associationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    purchasePrice: number | null
  }

  export type LiveCountAggregateOutputType = {
    id: number
    name: number
    description: number
    date: number
    associationId: number
    createdAt: number
    updatedAt: number
    purchasePrice: number
    _all: number
  }


  export type LiveAvgAggregateInputType = {
    purchasePrice?: true
  }

  export type LiveSumAggregateInputType = {
    purchasePrice?: true
  }

  export type LiveMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    date?: true
    associationId?: true
    createdAt?: true
    updatedAt?: true
    purchasePrice?: true
  }

  export type LiveMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    date?: true
    associationId?: true
    createdAt?: true
    updatedAt?: true
    purchasePrice?: true
  }

  export type LiveCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    date?: true
    associationId?: true
    createdAt?: true
    updatedAt?: true
    purchasePrice?: true
    _all?: true
  }

  export type LiveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Live to aggregate.
     */
    where?: LiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lives to fetch.
     */
    orderBy?: LiveOrderByWithRelationInput | LiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lives
    **/
    _count?: true | LiveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LiveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LiveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LiveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LiveMaxAggregateInputType
  }

  export type GetLiveAggregateType<T extends LiveAggregateArgs> = {
        [P in keyof T & keyof AggregateLive]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLive[P]>
      : GetScalarType<T[P], AggregateLive[P]>
  }




  export type LiveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiveWhereInput
    orderBy?: LiveOrderByWithAggregationInput | LiveOrderByWithAggregationInput[]
    by: LiveScalarFieldEnum[] | LiveScalarFieldEnum
    having?: LiveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LiveCountAggregateInputType | true
    _avg?: LiveAvgAggregateInputType
    _sum?: LiveSumAggregateInputType
    _min?: LiveMinAggregateInputType
    _max?: LiveMaxAggregateInputType
  }

  export type LiveGroupByOutputType = {
    id: string
    name: string
    description: string | null
    date: Date
    associationId: string | null
    createdAt: Date
    updatedAt: Date
    purchasePrice: number | null
    _count: LiveCountAggregateOutputType | null
    _avg: LiveAvgAggregateOutputType | null
    _sum: LiveSumAggregateOutputType | null
    _min: LiveMinAggregateOutputType | null
    _max: LiveMaxAggregateOutputType | null
  }

  type GetLiveGroupByPayload<T extends LiveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LiveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LiveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LiveGroupByOutputType[P]>
            : GetScalarType<T[P], LiveGroupByOutputType[P]>
        }
      >
    >


  export type LiveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    date?: boolean
    associationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchasePrice?: boolean
    association?: boolean | Live$associationArgs<ExtArgs>
    liveClients?: boolean | Live$liveClientsArgs<ExtArgs>
    _count?: boolean | LiveCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["live"]>

  export type LiveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    date?: boolean
    associationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchasePrice?: boolean
    association?: boolean | Live$associationArgs<ExtArgs>
  }, ExtArgs["result"]["live"]>

  export type LiveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    date?: boolean
    associationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchasePrice?: boolean
    association?: boolean | Live$associationArgs<ExtArgs>
  }, ExtArgs["result"]["live"]>

  export type LiveSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    date?: boolean
    associationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchasePrice?: boolean
  }

  export type LiveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "date" | "associationId" | "createdAt" | "updatedAt" | "purchasePrice", ExtArgs["result"]["live"]>
  export type LiveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | Live$associationArgs<ExtArgs>
    liveClients?: boolean | Live$liveClientsArgs<ExtArgs>
    _count?: boolean | LiveCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LiveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | Live$associationArgs<ExtArgs>
  }
  export type LiveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | Live$associationArgs<ExtArgs>
  }

  export type $LivePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Live"
    objects: {
      association: Prisma.$AssociationPayload<ExtArgs> | null
      liveClients: Prisma.$LiveClientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      date: Date
      associationId: string | null
      createdAt: Date
      updatedAt: Date
      purchasePrice: number | null
    }, ExtArgs["result"]["live"]>
    composites: {}
  }

  type LiveGetPayload<S extends boolean | null | undefined | LiveDefaultArgs> = $Result.GetResult<Prisma.$LivePayload, S>

  type LiveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LiveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LiveCountAggregateInputType | true
    }

  export interface LiveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Live'], meta: { name: 'Live' } }
    /**
     * Find zero or one Live that matches the filter.
     * @param {LiveFindUniqueArgs} args - Arguments to find a Live
     * @example
     * // Get one Live
     * const live = await prisma.live.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LiveFindUniqueArgs>(args: SelectSubset<T, LiveFindUniqueArgs<ExtArgs>>): Prisma__LiveClient<$Result.GetResult<Prisma.$LivePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Live that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LiveFindUniqueOrThrowArgs} args - Arguments to find a Live
     * @example
     * // Get one Live
     * const live = await prisma.live.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LiveFindUniqueOrThrowArgs>(args: SelectSubset<T, LiveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LiveClient<$Result.GetResult<Prisma.$LivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Live that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveFindFirstArgs} args - Arguments to find a Live
     * @example
     * // Get one Live
     * const live = await prisma.live.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LiveFindFirstArgs>(args?: SelectSubset<T, LiveFindFirstArgs<ExtArgs>>): Prisma__LiveClient<$Result.GetResult<Prisma.$LivePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Live that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveFindFirstOrThrowArgs} args - Arguments to find a Live
     * @example
     * // Get one Live
     * const live = await prisma.live.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LiveFindFirstOrThrowArgs>(args?: SelectSubset<T, LiveFindFirstOrThrowArgs<ExtArgs>>): Prisma__LiveClient<$Result.GetResult<Prisma.$LivePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lives
     * const lives = await prisma.live.findMany()
     * 
     * // Get first 10 Lives
     * const lives = await prisma.live.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const liveWithIdOnly = await prisma.live.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LiveFindManyArgs>(args?: SelectSubset<T, LiveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Live.
     * @param {LiveCreateArgs} args - Arguments to create a Live.
     * @example
     * // Create one Live
     * const Live = await prisma.live.create({
     *   data: {
     *     // ... data to create a Live
     *   }
     * })
     * 
     */
    create<T extends LiveCreateArgs>(args: SelectSubset<T, LiveCreateArgs<ExtArgs>>): Prisma__LiveClient<$Result.GetResult<Prisma.$LivePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lives.
     * @param {LiveCreateManyArgs} args - Arguments to create many Lives.
     * @example
     * // Create many Lives
     * const live = await prisma.live.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LiveCreateManyArgs>(args?: SelectSubset<T, LiveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lives and returns the data saved in the database.
     * @param {LiveCreateManyAndReturnArgs} args - Arguments to create many Lives.
     * @example
     * // Create many Lives
     * const live = await prisma.live.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lives and only return the `id`
     * const liveWithIdOnly = await prisma.live.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LiveCreateManyAndReturnArgs>(args?: SelectSubset<T, LiveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Live.
     * @param {LiveDeleteArgs} args - Arguments to delete one Live.
     * @example
     * // Delete one Live
     * const Live = await prisma.live.delete({
     *   where: {
     *     // ... filter to delete one Live
     *   }
     * })
     * 
     */
    delete<T extends LiveDeleteArgs>(args: SelectSubset<T, LiveDeleteArgs<ExtArgs>>): Prisma__LiveClient<$Result.GetResult<Prisma.$LivePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Live.
     * @param {LiveUpdateArgs} args - Arguments to update one Live.
     * @example
     * // Update one Live
     * const live = await prisma.live.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LiveUpdateArgs>(args: SelectSubset<T, LiveUpdateArgs<ExtArgs>>): Prisma__LiveClient<$Result.GetResult<Prisma.$LivePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lives.
     * @param {LiveDeleteManyArgs} args - Arguments to filter Lives to delete.
     * @example
     * // Delete a few Lives
     * const { count } = await prisma.live.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LiveDeleteManyArgs>(args?: SelectSubset<T, LiveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lives
     * const live = await prisma.live.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LiveUpdateManyArgs>(args: SelectSubset<T, LiveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lives and returns the data updated in the database.
     * @param {LiveUpdateManyAndReturnArgs} args - Arguments to update many Lives.
     * @example
     * // Update many Lives
     * const live = await prisma.live.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lives and only return the `id`
     * const liveWithIdOnly = await prisma.live.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LiveUpdateManyAndReturnArgs>(args: SelectSubset<T, LiveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Live.
     * @param {LiveUpsertArgs} args - Arguments to update or create a Live.
     * @example
     * // Update or create a Live
     * const live = await prisma.live.upsert({
     *   create: {
     *     // ... data to create a Live
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Live we want to update
     *   }
     * })
     */
    upsert<T extends LiveUpsertArgs>(args: SelectSubset<T, LiveUpsertArgs<ExtArgs>>): Prisma__LiveClient<$Result.GetResult<Prisma.$LivePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveCountArgs} args - Arguments to filter Lives to count.
     * @example
     * // Count the number of Lives
     * const count = await prisma.live.count({
     *   where: {
     *     // ... the filter for the Lives we want to count
     *   }
     * })
    **/
    count<T extends LiveCountArgs>(
      args?: Subset<T, LiveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LiveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Live.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LiveAggregateArgs>(args: Subset<T, LiveAggregateArgs>): Prisma.PrismaPromise<GetLiveAggregateType<T>>

    /**
     * Group by Live.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LiveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LiveGroupByArgs['orderBy'] }
        : { orderBy?: LiveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LiveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Live model
   */
  readonly fields: LiveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Live.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LiveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    association<T extends Live$associationArgs<ExtArgs> = {}>(args?: Subset<T, Live$associationArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    liveClients<T extends Live$liveClientsArgs<ExtArgs> = {}>(args?: Subset<T, Live$liveClientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Live model
   */
  interface LiveFieldRefs {
    readonly id: FieldRef<"Live", 'String'>
    readonly name: FieldRef<"Live", 'String'>
    readonly description: FieldRef<"Live", 'String'>
    readonly date: FieldRef<"Live", 'DateTime'>
    readonly associationId: FieldRef<"Live", 'String'>
    readonly createdAt: FieldRef<"Live", 'DateTime'>
    readonly updatedAt: FieldRef<"Live", 'DateTime'>
    readonly purchasePrice: FieldRef<"Live", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Live findUnique
   */
  export type LiveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Live
     */
    select?: LiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Live
     */
    omit?: LiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveInclude<ExtArgs> | null
    /**
     * Filter, which Live to fetch.
     */
    where: LiveWhereUniqueInput
  }

  /**
   * Live findUniqueOrThrow
   */
  export type LiveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Live
     */
    select?: LiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Live
     */
    omit?: LiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveInclude<ExtArgs> | null
    /**
     * Filter, which Live to fetch.
     */
    where: LiveWhereUniqueInput
  }

  /**
   * Live findFirst
   */
  export type LiveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Live
     */
    select?: LiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Live
     */
    omit?: LiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveInclude<ExtArgs> | null
    /**
     * Filter, which Live to fetch.
     */
    where?: LiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lives to fetch.
     */
    orderBy?: LiveOrderByWithRelationInput | LiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lives.
     */
    cursor?: LiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lives.
     */
    distinct?: LiveScalarFieldEnum | LiveScalarFieldEnum[]
  }

  /**
   * Live findFirstOrThrow
   */
  export type LiveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Live
     */
    select?: LiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Live
     */
    omit?: LiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveInclude<ExtArgs> | null
    /**
     * Filter, which Live to fetch.
     */
    where?: LiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lives to fetch.
     */
    orderBy?: LiveOrderByWithRelationInput | LiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lives.
     */
    cursor?: LiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lives.
     */
    distinct?: LiveScalarFieldEnum | LiveScalarFieldEnum[]
  }

  /**
   * Live findMany
   */
  export type LiveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Live
     */
    select?: LiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Live
     */
    omit?: LiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveInclude<ExtArgs> | null
    /**
     * Filter, which Lives to fetch.
     */
    where?: LiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lives to fetch.
     */
    orderBy?: LiveOrderByWithRelationInput | LiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lives.
     */
    cursor?: LiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lives.
     */
    skip?: number
    distinct?: LiveScalarFieldEnum | LiveScalarFieldEnum[]
  }

  /**
   * Live create
   */
  export type LiveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Live
     */
    select?: LiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Live
     */
    omit?: LiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveInclude<ExtArgs> | null
    /**
     * The data needed to create a Live.
     */
    data: XOR<LiveCreateInput, LiveUncheckedCreateInput>
  }

  /**
   * Live createMany
   */
  export type LiveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lives.
     */
    data: LiveCreateManyInput | LiveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Live createManyAndReturn
   */
  export type LiveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Live
     */
    select?: LiveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Live
     */
    omit?: LiveOmit<ExtArgs> | null
    /**
     * The data used to create many Lives.
     */
    data: LiveCreateManyInput | LiveCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Live update
   */
  export type LiveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Live
     */
    select?: LiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Live
     */
    omit?: LiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveInclude<ExtArgs> | null
    /**
     * The data needed to update a Live.
     */
    data: XOR<LiveUpdateInput, LiveUncheckedUpdateInput>
    /**
     * Choose, which Live to update.
     */
    where: LiveWhereUniqueInput
  }

  /**
   * Live updateMany
   */
  export type LiveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lives.
     */
    data: XOR<LiveUpdateManyMutationInput, LiveUncheckedUpdateManyInput>
    /**
     * Filter which Lives to update
     */
    where?: LiveWhereInput
    /**
     * Limit how many Lives to update.
     */
    limit?: number
  }

  /**
   * Live updateManyAndReturn
   */
  export type LiveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Live
     */
    select?: LiveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Live
     */
    omit?: LiveOmit<ExtArgs> | null
    /**
     * The data used to update Lives.
     */
    data: XOR<LiveUpdateManyMutationInput, LiveUncheckedUpdateManyInput>
    /**
     * Filter which Lives to update
     */
    where?: LiveWhereInput
    /**
     * Limit how many Lives to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Live upsert
   */
  export type LiveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Live
     */
    select?: LiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Live
     */
    omit?: LiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveInclude<ExtArgs> | null
    /**
     * The filter to search for the Live to update in case it exists.
     */
    where: LiveWhereUniqueInput
    /**
     * In case the Live found by the `where` argument doesn't exist, create a new Live with this data.
     */
    create: XOR<LiveCreateInput, LiveUncheckedCreateInput>
    /**
     * In case the Live was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LiveUpdateInput, LiveUncheckedUpdateInput>
  }

  /**
   * Live delete
   */
  export type LiveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Live
     */
    select?: LiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Live
     */
    omit?: LiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveInclude<ExtArgs> | null
    /**
     * Filter which Live to delete.
     */
    where: LiveWhereUniqueInput
  }

  /**
   * Live deleteMany
   */
  export type LiveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lives to delete
     */
    where?: LiveWhereInput
    /**
     * Limit how many Lives to delete.
     */
    limit?: number
  }

  /**
   * Live.association
   */
  export type Live$associationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    where?: AssociationWhereInput
  }

  /**
   * Live.liveClients
   */
  export type Live$liveClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveClient
     */
    select?: LiveClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveClient
     */
    omit?: LiveClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveClientInclude<ExtArgs> | null
    where?: LiveClientWhereInput
    orderBy?: LiveClientOrderByWithRelationInput | LiveClientOrderByWithRelationInput[]
    cursor?: LiveClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LiveClientScalarFieldEnum | LiveClientScalarFieldEnum[]
  }

  /**
   * Live without action
   */
  export type LiveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Live
     */
    select?: LiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Live
     */
    omit?: LiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    tel: string | null
    associationId: string | null
    createdAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    tel: string | null
    associationId: string | null
    createdAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    address: number
    tel: number
    associationId: number
    createdAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    tel?: true
    associationId?: true
    createdAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    tel?: true
    associationId?: true
    createdAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    tel?: true
    associationId?: true
    createdAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string
    address: string
    tel: string
    associationId: string | null
    createdAt: Date
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    tel?: boolean
    associationId?: boolean
    createdAt?: boolean
    association?: boolean | Client$associationArgs<ExtArgs>
    liveClients?: boolean | Client$liveClientsArgs<ExtArgs>
    transactions?: boolean | Client$transactionsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    tel?: boolean
    associationId?: boolean
    createdAt?: boolean
    association?: boolean | Client$associationArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    tel?: boolean
    associationId?: boolean
    createdAt?: boolean
    association?: boolean | Client$associationArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    tel?: boolean
    associationId?: boolean
    createdAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "tel" | "associationId" | "createdAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | Client$associationArgs<ExtArgs>
    liveClients?: boolean | Client$liveClientsArgs<ExtArgs>
    transactions?: boolean | Client$transactionsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | Client$associationArgs<ExtArgs>
  }
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | Client$associationArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      association: Prisma.$AssociationPayload<ExtArgs> | null
      liveClients: Prisma.$LiveClientPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      tel: string
      associationId: string | null
      createdAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    association<T extends Client$associationArgs<ExtArgs> = {}>(args?: Subset<T, Client$associationArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    liveClients<T extends Client$liveClientsArgs<ExtArgs> = {}>(args?: Subset<T, Client$liveClientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Client$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Client$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly address: FieldRef<"Client", 'String'>
    readonly tel: FieldRef<"Client", 'String'>
    readonly associationId: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.association
   */
  export type Client$associationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    where?: AssociationWhereInput
  }

  /**
   * Client.liveClients
   */
  export type Client$liveClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveClient
     */
    select?: LiveClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveClient
     */
    omit?: LiveClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveClientInclude<ExtArgs> | null
    where?: LiveClientWhereInput
    orderBy?: LiveClientOrderByWithRelationInput | LiveClientOrderByWithRelationInput[]
    cursor?: LiveClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LiveClientScalarFieldEnum | LiveClientScalarFieldEnum[]
  }

  /**
   * Client.transactions
   */
  export type Client$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model LiveClient
   */

  export type AggregateLiveClient = {
    _count: LiveClientCountAggregateOutputType | null
    _avg: LiveClientAvgAggregateOutputType | null
    _sum: LiveClientSumAggregateOutputType | null
    _min: LiveClientMinAggregateOutputType | null
    _max: LiveClientMaxAggregateOutputType | null
  }

  export type LiveClientAvgAggregateOutputType = {
    totalFacture: number | null
  }

  export type LiveClientSumAggregateOutputType = {
    totalFacture: number | null
  }

  export type LiveClientMinAggregateOutputType = {
    id: string | null
    liveId: string | null
    clientId: string | null
    totalFacture: number | null
    createdAt: Date | null
  }

  export type LiveClientMaxAggregateOutputType = {
    id: string | null
    liveId: string | null
    clientId: string | null
    totalFacture: number | null
    createdAt: Date | null
  }

  export type LiveClientCountAggregateOutputType = {
    id: number
    liveId: number
    clientId: number
    totalFacture: number
    createdAt: number
    _all: number
  }


  export type LiveClientAvgAggregateInputType = {
    totalFacture?: true
  }

  export type LiveClientSumAggregateInputType = {
    totalFacture?: true
  }

  export type LiveClientMinAggregateInputType = {
    id?: true
    liveId?: true
    clientId?: true
    totalFacture?: true
    createdAt?: true
  }

  export type LiveClientMaxAggregateInputType = {
    id?: true
    liveId?: true
    clientId?: true
    totalFacture?: true
    createdAt?: true
  }

  export type LiveClientCountAggregateInputType = {
    id?: true
    liveId?: true
    clientId?: true
    totalFacture?: true
    createdAt?: true
    _all?: true
  }

  export type LiveClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiveClient to aggregate.
     */
    where?: LiveClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveClients to fetch.
     */
    orderBy?: LiveClientOrderByWithRelationInput | LiveClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LiveClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LiveClients
    **/
    _count?: true | LiveClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LiveClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LiveClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LiveClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LiveClientMaxAggregateInputType
  }

  export type GetLiveClientAggregateType<T extends LiveClientAggregateArgs> = {
        [P in keyof T & keyof AggregateLiveClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLiveClient[P]>
      : GetScalarType<T[P], AggregateLiveClient[P]>
  }




  export type LiveClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiveClientWhereInput
    orderBy?: LiveClientOrderByWithAggregationInput | LiveClientOrderByWithAggregationInput[]
    by: LiveClientScalarFieldEnum[] | LiveClientScalarFieldEnum
    having?: LiveClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LiveClientCountAggregateInputType | true
    _avg?: LiveClientAvgAggregateInputType
    _sum?: LiveClientSumAggregateInputType
    _min?: LiveClientMinAggregateInputType
    _max?: LiveClientMaxAggregateInputType
  }

  export type LiveClientGroupByOutputType = {
    id: string
    liveId: string
    clientId: string
    totalFacture: number
    createdAt: Date
    _count: LiveClientCountAggregateOutputType | null
    _avg: LiveClientAvgAggregateOutputType | null
    _sum: LiveClientSumAggregateOutputType | null
    _min: LiveClientMinAggregateOutputType | null
    _max: LiveClientMaxAggregateOutputType | null
  }

  type GetLiveClientGroupByPayload<T extends LiveClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LiveClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LiveClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LiveClientGroupByOutputType[P]>
            : GetScalarType<T[P], LiveClientGroupByOutputType[P]>
        }
      >
    >


  export type LiveClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liveId?: boolean
    clientId?: boolean
    totalFacture?: boolean
    createdAt?: boolean
    live?: boolean | LiveDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    orderItems?: boolean | LiveClient$orderItemsArgs<ExtArgs>
    _count?: boolean | LiveClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["liveClient"]>

  export type LiveClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liveId?: boolean
    clientId?: boolean
    totalFacture?: boolean
    createdAt?: boolean
    live?: boolean | LiveDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["liveClient"]>

  export type LiveClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liveId?: boolean
    clientId?: boolean
    totalFacture?: boolean
    createdAt?: boolean
    live?: boolean | LiveDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["liveClient"]>

  export type LiveClientSelectScalar = {
    id?: boolean
    liveId?: boolean
    clientId?: boolean
    totalFacture?: boolean
    createdAt?: boolean
  }

  export type LiveClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "liveId" | "clientId" | "totalFacture" | "createdAt", ExtArgs["result"]["liveClient"]>
  export type LiveClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    live?: boolean | LiveDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    orderItems?: boolean | LiveClient$orderItemsArgs<ExtArgs>
    _count?: boolean | LiveClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LiveClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    live?: boolean | LiveDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type LiveClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    live?: boolean | LiveDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $LiveClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LiveClient"
    objects: {
      live: Prisma.$LivePayload<ExtArgs>
      client: Prisma.$ClientPayload<ExtArgs>
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      liveId: string
      clientId: string
      totalFacture: number
      createdAt: Date
    }, ExtArgs["result"]["liveClient"]>
    composites: {}
  }

  type LiveClientGetPayload<S extends boolean | null | undefined | LiveClientDefaultArgs> = $Result.GetResult<Prisma.$LiveClientPayload, S>

  type LiveClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LiveClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LiveClientCountAggregateInputType | true
    }

  export interface LiveClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LiveClient'], meta: { name: 'LiveClient' } }
    /**
     * Find zero or one LiveClient that matches the filter.
     * @param {LiveClientFindUniqueArgs} args - Arguments to find a LiveClient
     * @example
     * // Get one LiveClient
     * const liveClient = await prisma.liveClient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LiveClientFindUniqueArgs>(args: SelectSubset<T, LiveClientFindUniqueArgs<ExtArgs>>): Prisma__LiveClientClient<$Result.GetResult<Prisma.$LiveClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LiveClient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LiveClientFindUniqueOrThrowArgs} args - Arguments to find a LiveClient
     * @example
     * // Get one LiveClient
     * const liveClient = await prisma.liveClient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LiveClientFindUniqueOrThrowArgs>(args: SelectSubset<T, LiveClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LiveClientClient<$Result.GetResult<Prisma.$LiveClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LiveClient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveClientFindFirstArgs} args - Arguments to find a LiveClient
     * @example
     * // Get one LiveClient
     * const liveClient = await prisma.liveClient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LiveClientFindFirstArgs>(args?: SelectSubset<T, LiveClientFindFirstArgs<ExtArgs>>): Prisma__LiveClientClient<$Result.GetResult<Prisma.$LiveClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LiveClient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveClientFindFirstOrThrowArgs} args - Arguments to find a LiveClient
     * @example
     * // Get one LiveClient
     * const liveClient = await prisma.liveClient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LiveClientFindFirstOrThrowArgs>(args?: SelectSubset<T, LiveClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__LiveClientClient<$Result.GetResult<Prisma.$LiveClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LiveClients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LiveClients
     * const liveClients = await prisma.liveClient.findMany()
     * 
     * // Get first 10 LiveClients
     * const liveClients = await prisma.liveClient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const liveClientWithIdOnly = await prisma.liveClient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LiveClientFindManyArgs>(args?: SelectSubset<T, LiveClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LiveClient.
     * @param {LiveClientCreateArgs} args - Arguments to create a LiveClient.
     * @example
     * // Create one LiveClient
     * const LiveClient = await prisma.liveClient.create({
     *   data: {
     *     // ... data to create a LiveClient
     *   }
     * })
     * 
     */
    create<T extends LiveClientCreateArgs>(args: SelectSubset<T, LiveClientCreateArgs<ExtArgs>>): Prisma__LiveClientClient<$Result.GetResult<Prisma.$LiveClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LiveClients.
     * @param {LiveClientCreateManyArgs} args - Arguments to create many LiveClients.
     * @example
     * // Create many LiveClients
     * const liveClient = await prisma.liveClient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LiveClientCreateManyArgs>(args?: SelectSubset<T, LiveClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LiveClients and returns the data saved in the database.
     * @param {LiveClientCreateManyAndReturnArgs} args - Arguments to create many LiveClients.
     * @example
     * // Create many LiveClients
     * const liveClient = await prisma.liveClient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LiveClients and only return the `id`
     * const liveClientWithIdOnly = await prisma.liveClient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LiveClientCreateManyAndReturnArgs>(args?: SelectSubset<T, LiveClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LiveClient.
     * @param {LiveClientDeleteArgs} args - Arguments to delete one LiveClient.
     * @example
     * // Delete one LiveClient
     * const LiveClient = await prisma.liveClient.delete({
     *   where: {
     *     // ... filter to delete one LiveClient
     *   }
     * })
     * 
     */
    delete<T extends LiveClientDeleteArgs>(args: SelectSubset<T, LiveClientDeleteArgs<ExtArgs>>): Prisma__LiveClientClient<$Result.GetResult<Prisma.$LiveClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LiveClient.
     * @param {LiveClientUpdateArgs} args - Arguments to update one LiveClient.
     * @example
     * // Update one LiveClient
     * const liveClient = await prisma.liveClient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LiveClientUpdateArgs>(args: SelectSubset<T, LiveClientUpdateArgs<ExtArgs>>): Prisma__LiveClientClient<$Result.GetResult<Prisma.$LiveClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LiveClients.
     * @param {LiveClientDeleteManyArgs} args - Arguments to filter LiveClients to delete.
     * @example
     * // Delete a few LiveClients
     * const { count } = await prisma.liveClient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LiveClientDeleteManyArgs>(args?: SelectSubset<T, LiveClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LiveClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LiveClients
     * const liveClient = await prisma.liveClient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LiveClientUpdateManyArgs>(args: SelectSubset<T, LiveClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LiveClients and returns the data updated in the database.
     * @param {LiveClientUpdateManyAndReturnArgs} args - Arguments to update many LiveClients.
     * @example
     * // Update many LiveClients
     * const liveClient = await prisma.liveClient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LiveClients and only return the `id`
     * const liveClientWithIdOnly = await prisma.liveClient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LiveClientUpdateManyAndReturnArgs>(args: SelectSubset<T, LiveClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LiveClient.
     * @param {LiveClientUpsertArgs} args - Arguments to update or create a LiveClient.
     * @example
     * // Update or create a LiveClient
     * const liveClient = await prisma.liveClient.upsert({
     *   create: {
     *     // ... data to create a LiveClient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LiveClient we want to update
     *   }
     * })
     */
    upsert<T extends LiveClientUpsertArgs>(args: SelectSubset<T, LiveClientUpsertArgs<ExtArgs>>): Prisma__LiveClientClient<$Result.GetResult<Prisma.$LiveClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LiveClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveClientCountArgs} args - Arguments to filter LiveClients to count.
     * @example
     * // Count the number of LiveClients
     * const count = await prisma.liveClient.count({
     *   where: {
     *     // ... the filter for the LiveClients we want to count
     *   }
     * })
    **/
    count<T extends LiveClientCountArgs>(
      args?: Subset<T, LiveClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LiveClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LiveClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LiveClientAggregateArgs>(args: Subset<T, LiveClientAggregateArgs>): Prisma.PrismaPromise<GetLiveClientAggregateType<T>>

    /**
     * Group by LiveClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LiveClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LiveClientGroupByArgs['orderBy'] }
        : { orderBy?: LiveClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LiveClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLiveClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LiveClient model
   */
  readonly fields: LiveClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LiveClient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LiveClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    live<T extends LiveDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LiveDefaultArgs<ExtArgs>>): Prisma__LiveClient<$Result.GetResult<Prisma.$LivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends LiveClient$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, LiveClient$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LiveClient model
   */
  interface LiveClientFieldRefs {
    readonly id: FieldRef<"LiveClient", 'String'>
    readonly liveId: FieldRef<"LiveClient", 'String'>
    readonly clientId: FieldRef<"LiveClient", 'String'>
    readonly totalFacture: FieldRef<"LiveClient", 'Float'>
    readonly createdAt: FieldRef<"LiveClient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LiveClient findUnique
   */
  export type LiveClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveClient
     */
    select?: LiveClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveClient
     */
    omit?: LiveClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveClientInclude<ExtArgs> | null
    /**
     * Filter, which LiveClient to fetch.
     */
    where: LiveClientWhereUniqueInput
  }

  /**
   * LiveClient findUniqueOrThrow
   */
  export type LiveClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveClient
     */
    select?: LiveClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveClient
     */
    omit?: LiveClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveClientInclude<ExtArgs> | null
    /**
     * Filter, which LiveClient to fetch.
     */
    where: LiveClientWhereUniqueInput
  }

  /**
   * LiveClient findFirst
   */
  export type LiveClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveClient
     */
    select?: LiveClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveClient
     */
    omit?: LiveClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveClientInclude<ExtArgs> | null
    /**
     * Filter, which LiveClient to fetch.
     */
    where?: LiveClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveClients to fetch.
     */
    orderBy?: LiveClientOrderByWithRelationInput | LiveClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiveClients.
     */
    cursor?: LiveClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiveClients.
     */
    distinct?: LiveClientScalarFieldEnum | LiveClientScalarFieldEnum[]
  }

  /**
   * LiveClient findFirstOrThrow
   */
  export type LiveClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveClient
     */
    select?: LiveClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveClient
     */
    omit?: LiveClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveClientInclude<ExtArgs> | null
    /**
     * Filter, which LiveClient to fetch.
     */
    where?: LiveClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveClients to fetch.
     */
    orderBy?: LiveClientOrderByWithRelationInput | LiveClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiveClients.
     */
    cursor?: LiveClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiveClients.
     */
    distinct?: LiveClientScalarFieldEnum | LiveClientScalarFieldEnum[]
  }

  /**
   * LiveClient findMany
   */
  export type LiveClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveClient
     */
    select?: LiveClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveClient
     */
    omit?: LiveClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveClientInclude<ExtArgs> | null
    /**
     * Filter, which LiveClients to fetch.
     */
    where?: LiveClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveClients to fetch.
     */
    orderBy?: LiveClientOrderByWithRelationInput | LiveClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LiveClients.
     */
    cursor?: LiveClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveClients.
     */
    skip?: number
    distinct?: LiveClientScalarFieldEnum | LiveClientScalarFieldEnum[]
  }

  /**
   * LiveClient create
   */
  export type LiveClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveClient
     */
    select?: LiveClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveClient
     */
    omit?: LiveClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveClientInclude<ExtArgs> | null
    /**
     * The data needed to create a LiveClient.
     */
    data: XOR<LiveClientCreateInput, LiveClientUncheckedCreateInput>
  }

  /**
   * LiveClient createMany
   */
  export type LiveClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LiveClients.
     */
    data: LiveClientCreateManyInput | LiveClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LiveClient createManyAndReturn
   */
  export type LiveClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveClient
     */
    select?: LiveClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LiveClient
     */
    omit?: LiveClientOmit<ExtArgs> | null
    /**
     * The data used to create many LiveClients.
     */
    data: LiveClientCreateManyInput | LiveClientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LiveClient update
   */
  export type LiveClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveClient
     */
    select?: LiveClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveClient
     */
    omit?: LiveClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveClientInclude<ExtArgs> | null
    /**
     * The data needed to update a LiveClient.
     */
    data: XOR<LiveClientUpdateInput, LiveClientUncheckedUpdateInput>
    /**
     * Choose, which LiveClient to update.
     */
    where: LiveClientWhereUniqueInput
  }

  /**
   * LiveClient updateMany
   */
  export type LiveClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LiveClients.
     */
    data: XOR<LiveClientUpdateManyMutationInput, LiveClientUncheckedUpdateManyInput>
    /**
     * Filter which LiveClients to update
     */
    where?: LiveClientWhereInput
    /**
     * Limit how many LiveClients to update.
     */
    limit?: number
  }

  /**
   * LiveClient updateManyAndReturn
   */
  export type LiveClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveClient
     */
    select?: LiveClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LiveClient
     */
    omit?: LiveClientOmit<ExtArgs> | null
    /**
     * The data used to update LiveClients.
     */
    data: XOR<LiveClientUpdateManyMutationInput, LiveClientUncheckedUpdateManyInput>
    /**
     * Filter which LiveClients to update
     */
    where?: LiveClientWhereInput
    /**
     * Limit how many LiveClients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LiveClient upsert
   */
  export type LiveClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveClient
     */
    select?: LiveClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveClient
     */
    omit?: LiveClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveClientInclude<ExtArgs> | null
    /**
     * The filter to search for the LiveClient to update in case it exists.
     */
    where: LiveClientWhereUniqueInput
    /**
     * In case the LiveClient found by the `where` argument doesn't exist, create a new LiveClient with this data.
     */
    create: XOR<LiveClientCreateInput, LiveClientUncheckedCreateInput>
    /**
     * In case the LiveClient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LiveClientUpdateInput, LiveClientUncheckedUpdateInput>
  }

  /**
   * LiveClient delete
   */
  export type LiveClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveClient
     */
    select?: LiveClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveClient
     */
    omit?: LiveClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveClientInclude<ExtArgs> | null
    /**
     * Filter which LiveClient to delete.
     */
    where: LiveClientWhereUniqueInput
  }

  /**
   * LiveClient deleteMany
   */
  export type LiveClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiveClients to delete
     */
    where?: LiveClientWhereInput
    /**
     * Limit how many LiveClients to delete.
     */
    limit?: number
  }

  /**
   * LiveClient.orderItems
   */
  export type LiveClient$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * LiveClient without action
   */
  export type LiveClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveClient
     */
    select?: LiveClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveClient
     */
    omit?: LiveClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveClientInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    liveClientId: string | null
    reference: string | null
    quantity: number | null
    unitPrice: number | null
    createdAt: Date | null
    isDeliveredAndPaid: boolean | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    liveClientId: string | null
    reference: string | null
    quantity: number | null
    unitPrice: number | null
    createdAt: Date | null
    isDeliveredAndPaid: boolean | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    liveClientId: number
    reference: number
    quantity: number
    unitPrice: number
    createdAt: number
    isDeliveredAndPaid: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    liveClientId?: true
    reference?: true
    quantity?: true
    unitPrice?: true
    createdAt?: true
    isDeliveredAndPaid?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    liveClientId?: true
    reference?: true
    quantity?: true
    unitPrice?: true
    createdAt?: true
    isDeliveredAndPaid?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    liveClientId?: true
    reference?: true
    quantity?: true
    unitPrice?: true
    createdAt?: true
    isDeliveredAndPaid?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    liveClientId: string
    reference: string
    quantity: number
    unitPrice: number
    createdAt: Date
    isDeliveredAndPaid: boolean
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liveClientId?: boolean
    reference?: boolean
    quantity?: boolean
    unitPrice?: boolean
    createdAt?: boolean
    isDeliveredAndPaid?: boolean
    liveClient?: boolean | LiveClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liveClientId?: boolean
    reference?: boolean
    quantity?: boolean
    unitPrice?: boolean
    createdAt?: boolean
    isDeliveredAndPaid?: boolean
    liveClient?: boolean | LiveClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liveClientId?: boolean
    reference?: boolean
    quantity?: boolean
    unitPrice?: boolean
    createdAt?: boolean
    isDeliveredAndPaid?: boolean
    liveClient?: boolean | LiveClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    liveClientId?: boolean
    reference?: boolean
    quantity?: boolean
    unitPrice?: boolean
    createdAt?: boolean
    isDeliveredAndPaid?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "liveClientId" | "reference" | "quantity" | "unitPrice" | "createdAt" | "isDeliveredAndPaid", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    liveClient?: boolean | LiveClientDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    liveClient?: boolean | LiveClientDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    liveClient?: boolean | LiveClientDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      liveClient: Prisma.$LiveClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      liveClientId: string
      reference: string
      quantity: number
      unitPrice: number
      createdAt: Date
      isDeliveredAndPaid: boolean
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    liveClient<T extends LiveClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LiveClientDefaultArgs<ExtArgs>>): Prisma__LiveClientClient<$Result.GetResult<Prisma.$LiveClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly liveClientId: FieldRef<"OrderItem", 'String'>
    readonly reference: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly unitPrice: FieldRef<"OrderItem", 'Float'>
    readonly createdAt: FieldRef<"OrderItem", 'DateTime'>
    readonly isDeliveredAndPaid: FieldRef<"OrderItem", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model Operation
   */

  export type AggregateOperation = {
    _count: OperationCountAggregateOutputType | null
    _avg: OperationAvgAggregateOutputType | null
    _sum: OperationSumAggregateOutputType | null
    _min: OperationMinAggregateOutputType | null
    _max: OperationMaxAggregateOutputType | null
  }

  export type OperationAvgAggregateOutputType = {
    amount: number | null
  }

  export type OperationSumAggregateOutputType = {
    amount: number | null
  }

  export type OperationMinAggregateOutputType = {
    id: string | null
    operationType: string | null
    amount: number | null
    reason: string | null
    associationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OperationMaxAggregateOutputType = {
    id: string | null
    operationType: string | null
    amount: number | null
    reason: string | null
    associationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OperationCountAggregateOutputType = {
    id: number
    operationType: number
    amount: number
    reason: number
    associationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OperationAvgAggregateInputType = {
    amount?: true
  }

  export type OperationSumAggregateInputType = {
    amount?: true
  }

  export type OperationMinAggregateInputType = {
    id?: true
    operationType?: true
    amount?: true
    reason?: true
    associationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OperationMaxAggregateInputType = {
    id?: true
    operationType?: true
    amount?: true
    reason?: true
    associationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OperationCountAggregateInputType = {
    id?: true
    operationType?: true
    amount?: true
    reason?: true
    associationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OperationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operation to aggregate.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Operations
    **/
    _count?: true | OperationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OperationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OperationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperationMaxAggregateInputType
  }

  export type GetOperationAggregateType<T extends OperationAggregateArgs> = {
        [P in keyof T & keyof AggregateOperation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperation[P]>
      : GetScalarType<T[P], AggregateOperation[P]>
  }




  export type OperationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperationWhereInput
    orderBy?: OperationOrderByWithAggregationInput | OperationOrderByWithAggregationInput[]
    by: OperationScalarFieldEnum[] | OperationScalarFieldEnum
    having?: OperationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperationCountAggregateInputType | true
    _avg?: OperationAvgAggregateInputType
    _sum?: OperationSumAggregateInputType
    _min?: OperationMinAggregateInputType
    _max?: OperationMaxAggregateInputType
  }

  export type OperationGroupByOutputType = {
    id: string
    operationType: string
    amount: number
    reason: string | null
    associationId: string
    createdAt: Date
    updatedAt: Date
    _count: OperationCountAggregateOutputType | null
    _avg: OperationAvgAggregateOutputType | null
    _sum: OperationSumAggregateOutputType | null
    _min: OperationMinAggregateOutputType | null
    _max: OperationMaxAggregateOutputType | null
  }

  type GetOperationGroupByPayload<T extends OperationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperationGroupByOutputType[P]>
            : GetScalarType<T[P], OperationGroupByOutputType[P]>
        }
      >
    >


  export type OperationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    operationType?: boolean
    amount?: boolean
    reason?: boolean
    associationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operation"]>

  export type OperationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    operationType?: boolean
    amount?: boolean
    reason?: boolean
    associationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operation"]>

  export type OperationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    operationType?: boolean
    amount?: boolean
    reason?: boolean
    associationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operation"]>

  export type OperationSelectScalar = {
    id?: boolean
    operationType?: boolean
    amount?: boolean
    reason?: boolean
    associationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OperationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "operationType" | "amount" | "reason" | "associationId" | "createdAt" | "updatedAt", ExtArgs["result"]["operation"]>
  export type OperationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }
  export type OperationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }
  export type OperationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }

  export type $OperationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Operation"
    objects: {
      association: Prisma.$AssociationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      operationType: string
      amount: number
      reason: string | null
      associationId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["operation"]>
    composites: {}
  }

  type OperationGetPayload<S extends boolean | null | undefined | OperationDefaultArgs> = $Result.GetResult<Prisma.$OperationPayload, S>

  type OperationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OperationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OperationCountAggregateInputType | true
    }

  export interface OperationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Operation'], meta: { name: 'Operation' } }
    /**
     * Find zero or one Operation that matches the filter.
     * @param {OperationFindUniqueArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OperationFindUniqueArgs>(args: SelectSubset<T, OperationFindUniqueArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Operation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OperationFindUniqueOrThrowArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OperationFindUniqueOrThrowArgs>(args: SelectSubset<T, OperationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindFirstArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OperationFindFirstArgs>(args?: SelectSubset<T, OperationFindFirstArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindFirstOrThrowArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OperationFindFirstOrThrowArgs>(args?: SelectSubset<T, OperationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Operations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operations
     * const operations = await prisma.operation.findMany()
     * 
     * // Get first 10 Operations
     * const operations = await prisma.operation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operationWithIdOnly = await prisma.operation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OperationFindManyArgs>(args?: SelectSubset<T, OperationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Operation.
     * @param {OperationCreateArgs} args - Arguments to create a Operation.
     * @example
     * // Create one Operation
     * const Operation = await prisma.operation.create({
     *   data: {
     *     // ... data to create a Operation
     *   }
     * })
     * 
     */
    create<T extends OperationCreateArgs>(args: SelectSubset<T, OperationCreateArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Operations.
     * @param {OperationCreateManyArgs} args - Arguments to create many Operations.
     * @example
     * // Create many Operations
     * const operation = await prisma.operation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OperationCreateManyArgs>(args?: SelectSubset<T, OperationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Operations and returns the data saved in the database.
     * @param {OperationCreateManyAndReturnArgs} args - Arguments to create many Operations.
     * @example
     * // Create many Operations
     * const operation = await prisma.operation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Operations and only return the `id`
     * const operationWithIdOnly = await prisma.operation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OperationCreateManyAndReturnArgs>(args?: SelectSubset<T, OperationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Operation.
     * @param {OperationDeleteArgs} args - Arguments to delete one Operation.
     * @example
     * // Delete one Operation
     * const Operation = await prisma.operation.delete({
     *   where: {
     *     // ... filter to delete one Operation
     *   }
     * })
     * 
     */
    delete<T extends OperationDeleteArgs>(args: SelectSubset<T, OperationDeleteArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Operation.
     * @param {OperationUpdateArgs} args - Arguments to update one Operation.
     * @example
     * // Update one Operation
     * const operation = await prisma.operation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OperationUpdateArgs>(args: SelectSubset<T, OperationUpdateArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Operations.
     * @param {OperationDeleteManyArgs} args - Arguments to filter Operations to delete.
     * @example
     * // Delete a few Operations
     * const { count } = await prisma.operation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OperationDeleteManyArgs>(args?: SelectSubset<T, OperationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operations
     * const operation = await prisma.operation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OperationUpdateManyArgs>(args: SelectSubset<T, OperationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operations and returns the data updated in the database.
     * @param {OperationUpdateManyAndReturnArgs} args - Arguments to update many Operations.
     * @example
     * // Update many Operations
     * const operation = await prisma.operation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Operations and only return the `id`
     * const operationWithIdOnly = await prisma.operation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OperationUpdateManyAndReturnArgs>(args: SelectSubset<T, OperationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Operation.
     * @param {OperationUpsertArgs} args - Arguments to update or create a Operation.
     * @example
     * // Update or create a Operation
     * const operation = await prisma.operation.upsert({
     *   create: {
     *     // ... data to create a Operation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operation we want to update
     *   }
     * })
     */
    upsert<T extends OperationUpsertArgs>(args: SelectSubset<T, OperationUpsertArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Operations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationCountArgs} args - Arguments to filter Operations to count.
     * @example
     * // Count the number of Operations
     * const count = await prisma.operation.count({
     *   where: {
     *     // ... the filter for the Operations we want to count
     *   }
     * })
    **/
    count<T extends OperationCountArgs>(
      args?: Subset<T, OperationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OperationAggregateArgs>(args: Subset<T, OperationAggregateArgs>): Prisma.PrismaPromise<GetOperationAggregateType<T>>

    /**
     * Group by Operation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OperationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperationGroupByArgs['orderBy'] }
        : { orderBy?: OperationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OperationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Operation model
   */
  readonly fields: OperationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Operation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OperationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    association<T extends AssociationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssociationDefaultArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Operation model
   */
  interface OperationFieldRefs {
    readonly id: FieldRef<"Operation", 'String'>
    readonly operationType: FieldRef<"Operation", 'String'>
    readonly amount: FieldRef<"Operation", 'Float'>
    readonly reason: FieldRef<"Operation", 'String'>
    readonly associationId: FieldRef<"Operation", 'String'>
    readonly createdAt: FieldRef<"Operation", 'DateTime'>
    readonly updatedAt: FieldRef<"Operation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Operation findUnique
   */
  export type OperationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation findUniqueOrThrow
   */
  export type OperationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation findFirst
   */
  export type OperationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operations.
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operations.
     */
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Operation findFirstOrThrow
   */
  export type OperationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operations.
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operations.
     */
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Operation findMany
   */
  export type OperationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operations to fetch.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Operations.
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Operation create
   */
  export type OperationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * The data needed to create a Operation.
     */
    data: XOR<OperationCreateInput, OperationUncheckedCreateInput>
  }

  /**
   * Operation createMany
   */
  export type OperationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Operations.
     */
    data: OperationCreateManyInput | OperationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Operation createManyAndReturn
   */
  export type OperationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * The data used to create many Operations.
     */
    data: OperationCreateManyInput | OperationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Operation update
   */
  export type OperationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * The data needed to update a Operation.
     */
    data: XOR<OperationUpdateInput, OperationUncheckedUpdateInput>
    /**
     * Choose, which Operation to update.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation updateMany
   */
  export type OperationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Operations.
     */
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyInput>
    /**
     * Filter which Operations to update
     */
    where?: OperationWhereInput
    /**
     * Limit how many Operations to update.
     */
    limit?: number
  }

  /**
   * Operation updateManyAndReturn
   */
  export type OperationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * The data used to update Operations.
     */
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyInput>
    /**
     * Filter which Operations to update
     */
    where?: OperationWhereInput
    /**
     * Limit how many Operations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Operation upsert
   */
  export type OperationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * The filter to search for the Operation to update in case it exists.
     */
    where: OperationWhereUniqueInput
    /**
     * In case the Operation found by the `where` argument doesn't exist, create a new Operation with this data.
     */
    create: XOR<OperationCreateInput, OperationUncheckedCreateInput>
    /**
     * In case the Operation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OperationUpdateInput, OperationUncheckedUpdateInput>
  }

  /**
   * Operation delete
   */
  export type OperationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter which Operation to delete.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation deleteMany
   */
  export type OperationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operations to delete
     */
    where?: OperationWhereInput
    /**
     * Limit how many Operations to delete.
     */
    limit?: number
  }

  /**
   * Operation without action
   */
  export type OperationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AssociationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    balance: 'balance'
  };

  export type AssociationScalarFieldEnum = (typeof AssociationScalarFieldEnum)[keyof typeof AssociationScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    quantity: 'quantity',
    unit: 'unit',
    imageUrl: 'imageUrl',
    categoryId: 'categoryId',
    associationId: 'associationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    associationId: 'associationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    quantity: 'quantity',
    productId: 'productId',
    associationId: 'associationId',
    clientId: 'clientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const LiveScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    date: 'date',
    associationId: 'associationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    purchasePrice: 'purchasePrice'
  };

  export type LiveScalarFieldEnum = (typeof LiveScalarFieldEnum)[keyof typeof LiveScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    tel: 'tel',
    associationId: 'associationId',
    createdAt: 'createdAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const LiveClientScalarFieldEnum: {
    id: 'id',
    liveId: 'liveId',
    clientId: 'clientId',
    totalFacture: 'totalFacture',
    createdAt: 'createdAt'
  };

  export type LiveClientScalarFieldEnum = (typeof LiveClientScalarFieldEnum)[keyof typeof LiveClientScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    liveClientId: 'liveClientId',
    reference: 'reference',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    createdAt: 'createdAt',
    isDeliveredAndPaid: 'isDeliveredAndPaid'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const OperationScalarFieldEnum: {
    id: 'id',
    operationType: 'operationType',
    amount: 'amount',
    reason: 'reason',
    associationId: 'associationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OperationScalarFieldEnum = (typeof OperationScalarFieldEnum)[keyof typeof OperationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type AssociationWhereInput = {
    AND?: AssociationWhereInput | AssociationWhereInput[]
    OR?: AssociationWhereInput[]
    NOT?: AssociationWhereInput | AssociationWhereInput[]
    id?: StringFilter<"Association"> | string
    name?: StringFilter<"Association"> | string
    email?: StringFilter<"Association"> | string
    createdAt?: DateTimeFilter<"Association"> | Date | string
    updatedAt?: DateTimeFilter<"Association"> | Date | string
    balance?: FloatFilter<"Association"> | number
    products?: ProductListRelationFilter
    categories?: CategoryListRelationFilter
    transactions?: TransactionListRelationFilter
    lives?: LiveListRelationFilter
    clients?: ClientListRelationFilter
    operations?: OperationListRelationFilter
  }

  export type AssociationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    balance?: SortOrder
    products?: ProductOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    lives?: LiveOrderByRelationAggregateInput
    clients?: ClientOrderByRelationAggregateInput
    operations?: OperationOrderByRelationAggregateInput
  }

  export type AssociationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AssociationWhereInput | AssociationWhereInput[]
    OR?: AssociationWhereInput[]
    NOT?: AssociationWhereInput | AssociationWhereInput[]
    name?: StringFilter<"Association"> | string
    createdAt?: DateTimeFilter<"Association"> | Date | string
    updatedAt?: DateTimeFilter<"Association"> | Date | string
    balance?: FloatFilter<"Association"> | number
    products?: ProductListRelationFilter
    categories?: CategoryListRelationFilter
    transactions?: TransactionListRelationFilter
    lives?: LiveListRelationFilter
    clients?: ClientListRelationFilter
    operations?: OperationListRelationFilter
  }, "id" | "email">

  export type AssociationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    balance?: SortOrder
    _count?: AssociationCountOrderByAggregateInput
    _avg?: AssociationAvgOrderByAggregateInput
    _max?: AssociationMaxOrderByAggregateInput
    _min?: AssociationMinOrderByAggregateInput
    _sum?: AssociationSumOrderByAggregateInput
  }

  export type AssociationScalarWhereWithAggregatesInput = {
    AND?: AssociationScalarWhereWithAggregatesInput | AssociationScalarWhereWithAggregatesInput[]
    OR?: AssociationScalarWhereWithAggregatesInput[]
    NOT?: AssociationScalarWhereWithAggregatesInput | AssociationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Association"> | string
    name?: StringWithAggregatesFilter<"Association"> | string
    email?: StringWithAggregatesFilter<"Association"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Association"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Association"> | Date | string
    balance?: FloatWithAggregatesFilter<"Association"> | number
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    quantity?: IntFilter<"Product"> | number
    unit?: StringFilter<"Product"> | string
    imageUrl?: StringFilter<"Product"> | string
    categoryId?: StringFilter<"Product"> | string
    associationId?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    association?: XOR<AssociationNullableScalarRelationFilter, AssociationWhereInput> | null
    transactions?: TransactionListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    imageUrl?: SortOrder
    categoryId?: SortOrder
    associationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    association?: AssociationOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    quantity?: IntFilter<"Product"> | number
    unit?: StringFilter<"Product"> | string
    imageUrl?: StringFilter<"Product"> | string
    categoryId?: StringFilter<"Product"> | string
    associationId?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    association?: XOR<AssociationNullableScalarRelationFilter, AssociationWhereInput> | null
    transactions?: TransactionListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    imageUrl?: SortOrder
    categoryId?: SortOrder
    associationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    price?: FloatWithAggregatesFilter<"Product"> | number
    quantity?: IntWithAggregatesFilter<"Product"> | number
    unit?: StringWithAggregatesFilter<"Product"> | string
    imageUrl?: StringWithAggregatesFilter<"Product"> | string
    categoryId?: StringWithAggregatesFilter<"Product"> | string
    associationId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    associationId?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    association?: XOR<AssociationNullableScalarRelationFilter, AssociationWhereInput> | null
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    associationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    association?: AssociationOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    associationId?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    association?: XOR<AssociationNullableScalarRelationFilter, AssociationWhereInput> | null
    products?: ProductListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    associationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    associationId?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    type?: StringFilter<"Transaction"> | string
    quantity?: IntFilter<"Transaction"> | number
    productId?: StringFilter<"Transaction"> | string
    associationId?: StringNullableFilter<"Transaction"> | string | null
    clientId?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    association?: XOR<AssociationNullableScalarRelationFilter, AssociationWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    associationId?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    association?: AssociationOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    type?: StringFilter<"Transaction"> | string
    quantity?: IntFilter<"Transaction"> | number
    productId?: StringFilter<"Transaction"> | string
    associationId?: StringNullableFilter<"Transaction"> | string | null
    clientId?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    association?: XOR<AssociationNullableScalarRelationFilter, AssociationWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    associationId?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    type?: StringWithAggregatesFilter<"Transaction"> | string
    quantity?: IntWithAggregatesFilter<"Transaction"> | number
    productId?: StringWithAggregatesFilter<"Transaction"> | string
    associationId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    clientId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type LiveWhereInput = {
    AND?: LiveWhereInput | LiveWhereInput[]
    OR?: LiveWhereInput[]
    NOT?: LiveWhereInput | LiveWhereInput[]
    id?: StringFilter<"Live"> | string
    name?: StringFilter<"Live"> | string
    description?: StringNullableFilter<"Live"> | string | null
    date?: DateTimeFilter<"Live"> | Date | string
    associationId?: StringNullableFilter<"Live"> | string | null
    createdAt?: DateTimeFilter<"Live"> | Date | string
    updatedAt?: DateTimeFilter<"Live"> | Date | string
    purchasePrice?: FloatNullableFilter<"Live"> | number | null
    association?: XOR<AssociationNullableScalarRelationFilter, AssociationWhereInput> | null
    liveClients?: LiveClientListRelationFilter
  }

  export type LiveOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    associationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    purchasePrice?: SortOrderInput | SortOrder
    association?: AssociationOrderByWithRelationInput
    liveClients?: LiveClientOrderByRelationAggregateInput
  }

  export type LiveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LiveWhereInput | LiveWhereInput[]
    OR?: LiveWhereInput[]
    NOT?: LiveWhereInput | LiveWhereInput[]
    name?: StringFilter<"Live"> | string
    description?: StringNullableFilter<"Live"> | string | null
    date?: DateTimeFilter<"Live"> | Date | string
    associationId?: StringNullableFilter<"Live"> | string | null
    createdAt?: DateTimeFilter<"Live"> | Date | string
    updatedAt?: DateTimeFilter<"Live"> | Date | string
    purchasePrice?: FloatNullableFilter<"Live"> | number | null
    association?: XOR<AssociationNullableScalarRelationFilter, AssociationWhereInput> | null
    liveClients?: LiveClientListRelationFilter
  }, "id">

  export type LiveOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    associationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    purchasePrice?: SortOrderInput | SortOrder
    _count?: LiveCountOrderByAggregateInput
    _avg?: LiveAvgOrderByAggregateInput
    _max?: LiveMaxOrderByAggregateInput
    _min?: LiveMinOrderByAggregateInput
    _sum?: LiveSumOrderByAggregateInput
  }

  export type LiveScalarWhereWithAggregatesInput = {
    AND?: LiveScalarWhereWithAggregatesInput | LiveScalarWhereWithAggregatesInput[]
    OR?: LiveScalarWhereWithAggregatesInput[]
    NOT?: LiveScalarWhereWithAggregatesInput | LiveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Live"> | string
    name?: StringWithAggregatesFilter<"Live"> | string
    description?: StringNullableWithAggregatesFilter<"Live"> | string | null
    date?: DateTimeWithAggregatesFilter<"Live"> | Date | string
    associationId?: StringNullableWithAggregatesFilter<"Live"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Live"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Live"> | Date | string
    purchasePrice?: FloatNullableWithAggregatesFilter<"Live"> | number | null
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    address?: StringFilter<"Client"> | string
    tel?: StringFilter<"Client"> | string
    associationId?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    association?: XOR<AssociationNullableScalarRelationFilter, AssociationWhereInput> | null
    liveClients?: LiveClientListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    tel?: SortOrder
    associationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    association?: AssociationOrderByWithRelationInput
    liveClients?: LiveClientOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    address?: StringFilter<"Client"> | string
    tel?: StringFilter<"Client"> | string
    associationId?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    association?: XOR<AssociationNullableScalarRelationFilter, AssociationWhereInput> | null
    liveClients?: LiveClientListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    tel?: SortOrder
    associationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    address?: StringWithAggregatesFilter<"Client"> | string
    tel?: StringWithAggregatesFilter<"Client"> | string
    associationId?: StringNullableWithAggregatesFilter<"Client"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type LiveClientWhereInput = {
    AND?: LiveClientWhereInput | LiveClientWhereInput[]
    OR?: LiveClientWhereInput[]
    NOT?: LiveClientWhereInput | LiveClientWhereInput[]
    id?: StringFilter<"LiveClient"> | string
    liveId?: StringFilter<"LiveClient"> | string
    clientId?: StringFilter<"LiveClient"> | string
    totalFacture?: FloatFilter<"LiveClient"> | number
    createdAt?: DateTimeFilter<"LiveClient"> | Date | string
    live?: XOR<LiveScalarRelationFilter, LiveWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    orderItems?: OrderItemListRelationFilter
  }

  export type LiveClientOrderByWithRelationInput = {
    id?: SortOrder
    liveId?: SortOrder
    clientId?: SortOrder
    totalFacture?: SortOrder
    createdAt?: SortOrder
    live?: LiveOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type LiveClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    liveId_clientId?: LiveClientLiveIdClientIdCompoundUniqueInput
    AND?: LiveClientWhereInput | LiveClientWhereInput[]
    OR?: LiveClientWhereInput[]
    NOT?: LiveClientWhereInput | LiveClientWhereInput[]
    liveId?: StringFilter<"LiveClient"> | string
    clientId?: StringFilter<"LiveClient"> | string
    totalFacture?: FloatFilter<"LiveClient"> | number
    createdAt?: DateTimeFilter<"LiveClient"> | Date | string
    live?: XOR<LiveScalarRelationFilter, LiveWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    orderItems?: OrderItemListRelationFilter
  }, "id" | "liveId_clientId">

  export type LiveClientOrderByWithAggregationInput = {
    id?: SortOrder
    liveId?: SortOrder
    clientId?: SortOrder
    totalFacture?: SortOrder
    createdAt?: SortOrder
    _count?: LiveClientCountOrderByAggregateInput
    _avg?: LiveClientAvgOrderByAggregateInput
    _max?: LiveClientMaxOrderByAggregateInput
    _min?: LiveClientMinOrderByAggregateInput
    _sum?: LiveClientSumOrderByAggregateInput
  }

  export type LiveClientScalarWhereWithAggregatesInput = {
    AND?: LiveClientScalarWhereWithAggregatesInput | LiveClientScalarWhereWithAggregatesInput[]
    OR?: LiveClientScalarWhereWithAggregatesInput[]
    NOT?: LiveClientScalarWhereWithAggregatesInput | LiveClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LiveClient"> | string
    liveId?: StringWithAggregatesFilter<"LiveClient"> | string
    clientId?: StringWithAggregatesFilter<"LiveClient"> | string
    totalFacture?: FloatWithAggregatesFilter<"LiveClient"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LiveClient"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    liveClientId?: StringFilter<"OrderItem"> | string
    reference?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: FloatFilter<"OrderItem"> | number
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    isDeliveredAndPaid?: BoolFilter<"OrderItem"> | boolean
    liveClient?: XOR<LiveClientScalarRelationFilter, LiveClientWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    liveClientId?: SortOrder
    reference?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    isDeliveredAndPaid?: SortOrder
    liveClient?: LiveClientOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    liveClientId?: StringFilter<"OrderItem"> | string
    reference?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: FloatFilter<"OrderItem"> | number
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    isDeliveredAndPaid?: BoolFilter<"OrderItem"> | boolean
    liveClient?: XOR<LiveClientScalarRelationFilter, LiveClientWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    liveClientId?: SortOrder
    reference?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    isDeliveredAndPaid?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    liveClientId?: StringWithAggregatesFilter<"OrderItem"> | string
    reference?: StringWithAggregatesFilter<"OrderItem"> | string
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    unitPrice?: FloatWithAggregatesFilter<"OrderItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
    isDeliveredAndPaid?: BoolWithAggregatesFilter<"OrderItem"> | boolean
  }

  export type OperationWhereInput = {
    AND?: OperationWhereInput | OperationWhereInput[]
    OR?: OperationWhereInput[]
    NOT?: OperationWhereInput | OperationWhereInput[]
    id?: StringFilter<"Operation"> | string
    operationType?: StringFilter<"Operation"> | string
    amount?: FloatFilter<"Operation"> | number
    reason?: StringNullableFilter<"Operation"> | string | null
    associationId?: StringFilter<"Operation"> | string
    createdAt?: DateTimeFilter<"Operation"> | Date | string
    updatedAt?: DateTimeFilter<"Operation"> | Date | string
    association?: XOR<AssociationScalarRelationFilter, AssociationWhereInput>
  }

  export type OperationOrderByWithRelationInput = {
    id?: SortOrder
    operationType?: SortOrder
    amount?: SortOrder
    reason?: SortOrderInput | SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    association?: AssociationOrderByWithRelationInput
  }

  export type OperationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OperationWhereInput | OperationWhereInput[]
    OR?: OperationWhereInput[]
    NOT?: OperationWhereInput | OperationWhereInput[]
    operationType?: StringFilter<"Operation"> | string
    amount?: FloatFilter<"Operation"> | number
    reason?: StringNullableFilter<"Operation"> | string | null
    associationId?: StringFilter<"Operation"> | string
    createdAt?: DateTimeFilter<"Operation"> | Date | string
    updatedAt?: DateTimeFilter<"Operation"> | Date | string
    association?: XOR<AssociationScalarRelationFilter, AssociationWhereInput>
  }, "id">

  export type OperationOrderByWithAggregationInput = {
    id?: SortOrder
    operationType?: SortOrder
    amount?: SortOrder
    reason?: SortOrderInput | SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OperationCountOrderByAggregateInput
    _avg?: OperationAvgOrderByAggregateInput
    _max?: OperationMaxOrderByAggregateInput
    _min?: OperationMinOrderByAggregateInput
    _sum?: OperationSumOrderByAggregateInput
  }

  export type OperationScalarWhereWithAggregatesInput = {
    AND?: OperationScalarWhereWithAggregatesInput | OperationScalarWhereWithAggregatesInput[]
    OR?: OperationScalarWhereWithAggregatesInput[]
    NOT?: OperationScalarWhereWithAggregatesInput | OperationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Operation"> | string
    operationType?: StringWithAggregatesFilter<"Operation"> | string
    amount?: FloatWithAggregatesFilter<"Operation"> | number
    reason?: StringNullableWithAggregatesFilter<"Operation"> | string | null
    associationId?: StringWithAggregatesFilter<"Operation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Operation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Operation"> | Date | string
  }

  export type AssociationCreateInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balance?: number
    products?: ProductCreateNestedManyWithoutAssociationInput
    categories?: CategoryCreateNestedManyWithoutAssociationInput
    transactions?: TransactionCreateNestedManyWithoutAssociationInput
    lives?: LiveCreateNestedManyWithoutAssociationInput
    clients?: ClientCreateNestedManyWithoutAssociationInput
    operations?: OperationCreateNestedManyWithoutAssociationInput
  }

  export type AssociationUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balance?: number
    products?: ProductUncheckedCreateNestedManyWithoutAssociationInput
    categories?: CategoryUncheckedCreateNestedManyWithoutAssociationInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutAssociationInput
    lives?: LiveUncheckedCreateNestedManyWithoutAssociationInput
    clients?: ClientUncheckedCreateNestedManyWithoutAssociationInput
    operations?: OperationUncheckedCreateNestedManyWithoutAssociationInput
  }

  export type AssociationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: FloatFieldUpdateOperationsInput | number
    products?: ProductUpdateManyWithoutAssociationNestedInput
    categories?: CategoryUpdateManyWithoutAssociationNestedInput
    transactions?: TransactionUpdateManyWithoutAssociationNestedInput
    lives?: LiveUpdateManyWithoutAssociationNestedInput
    clients?: ClientUpdateManyWithoutAssociationNestedInput
    operations?: OperationUpdateManyWithoutAssociationNestedInput
  }

  export type AssociationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: FloatFieldUpdateOperationsInput | number
    products?: ProductUncheckedUpdateManyWithoutAssociationNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutAssociationNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutAssociationNestedInput
    lives?: LiveUncheckedUpdateManyWithoutAssociationNestedInput
    clients?: ClientUncheckedUpdateManyWithoutAssociationNestedInput
    operations?: OperationUncheckedUpdateManyWithoutAssociationNestedInput
  }

  export type AssociationCreateManyInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balance?: number
  }

  export type AssociationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: FloatFieldUpdateOperationsInput | number
  }

  export type AssociationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    description: string
    price: number
    quantity?: number
    unit: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    association?: AssociationCreateNestedOneWithoutProductsInput
    transactions?: TransactionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    price: number
    quantity?: number
    unit: string
    imageUrl: string
    categoryId: string
    associationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    association?: AssociationUpdateOneWithoutProductsNestedInput
    transactions?: TransactionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    associationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    description: string
    price: number
    quantity?: number
    unit: string
    imageUrl: string
    categoryId: string
    associationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    associationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    association?: AssociationCreateNestedOneWithoutCategoriesInput
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    associationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneWithoutCategoriesNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    associationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    associationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    associationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    type: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutTransactionsInput
    association?: AssociationCreateNestedOneWithoutTransactionsInput
    client?: ClientCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    type: string
    quantity: number
    productId: string
    associationId?: string | null
    clientId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutTransactionsNestedInput
    association?: AssociationUpdateOneWithoutTransactionsNestedInput
    client?: ClientUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    associationId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    type: string
    quantity: number
    productId: string
    associationId?: string | null
    clientId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    associationId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveCreateInput = {
    id?: string
    name: string
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    purchasePrice?: number | null
    association?: AssociationCreateNestedOneWithoutLivesInput
    liveClients?: LiveClientCreateNestedManyWithoutLiveInput
  }

  export type LiveUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    date?: Date | string
    associationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    purchasePrice?: number | null
    liveClients?: LiveClientUncheckedCreateNestedManyWithoutLiveInput
  }

  export type LiveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    association?: AssociationUpdateOneWithoutLivesNestedInput
    liveClients?: LiveClientUpdateManyWithoutLiveNestedInput
  }

  export type LiveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    associationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    liveClients?: LiveClientUncheckedUpdateManyWithoutLiveNestedInput
  }

  export type LiveCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    date?: Date | string
    associationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    purchasePrice?: number | null
  }

  export type LiveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type LiveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    associationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ClientCreateInput = {
    id?: string
    name: string
    address: string
    tel: string
    createdAt?: Date | string
    association?: AssociationCreateNestedOneWithoutClientsInput
    liveClients?: LiveClientCreateNestedManyWithoutClientInput
    transactions?: TransactionCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    tel: string
    associationId?: string | null
    createdAt?: Date | string
    liveClients?: LiveClientUncheckedCreateNestedManyWithoutClientInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneWithoutClientsNestedInput
    liveClients?: LiveClientUpdateManyWithoutClientNestedInput
    transactions?: TransactionUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    associationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveClients?: LiveClientUncheckedUpdateManyWithoutClientNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    name: string
    address: string
    tel: string
    associationId?: string | null
    createdAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    associationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveClientCreateInput = {
    id?: string
    totalFacture?: number
    createdAt?: Date | string
    live: LiveCreateNestedOneWithoutLiveClientsInput
    client: ClientCreateNestedOneWithoutLiveClientsInput
    orderItems?: OrderItemCreateNestedManyWithoutLiveClientInput
  }

  export type LiveClientUncheckedCreateInput = {
    id?: string
    liveId: string
    clientId: string
    totalFacture?: number
    createdAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutLiveClientInput
  }

  export type LiveClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalFacture?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    live?: LiveUpdateOneRequiredWithoutLiveClientsNestedInput
    client?: ClientUpdateOneRequiredWithoutLiveClientsNestedInput
    orderItems?: OrderItemUpdateManyWithoutLiveClientNestedInput
  }

  export type LiveClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    liveId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    totalFacture?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutLiveClientNestedInput
  }

  export type LiveClientCreateManyInput = {
    id?: string
    liveId: string
    clientId: string
    totalFacture?: number
    createdAt?: Date | string
  }

  export type LiveClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalFacture?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    liveId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    totalFacture?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    reference: string
    quantity: number
    unitPrice: number
    createdAt?: Date | string
    isDeliveredAndPaid?: boolean
    liveClient: LiveClientCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    liveClientId: string
    reference: string
    quantity: number
    unitPrice: number
    createdAt?: Date | string
    isDeliveredAndPaid?: boolean
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeliveredAndPaid?: BoolFieldUpdateOperationsInput | boolean
    liveClient?: LiveClientUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    liveClientId?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeliveredAndPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderItemCreateManyInput = {
    id?: string
    liveClientId: string
    reference: string
    quantity: number
    unitPrice: number
    createdAt?: Date | string
    isDeliveredAndPaid?: boolean
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeliveredAndPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    liveClientId?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeliveredAndPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OperationCreateInput = {
    id?: string
    operationType: string
    amount: number
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    association: AssociationCreateNestedOneWithoutOperationsInput
  }

  export type OperationUncheckedCreateInput = {
    id?: string
    operationType: string
    amount: number
    reason?: string | null
    associationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    operationType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneRequiredWithoutOperationsNestedInput
  }

  export type OperationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    operationType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    associationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationCreateManyInput = {
    id?: string
    operationType: string
    amount: number
    reason?: string | null
    associationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    operationType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    operationType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    associationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type LiveListRelationFilter = {
    every?: LiveWhereInput
    some?: LiveWhereInput
    none?: LiveWhereInput
  }

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type OperationListRelationFilter = {
    every?: OperationWhereInput
    some?: OperationWhereInput
    none?: OperationWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LiveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OperationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssociationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    balance?: SortOrder
  }

  export type AssociationAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type AssociationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    balance?: SortOrder
  }

  export type AssociationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    balance?: SortOrder
  }

  export type AssociationSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type AssociationNullableScalarRelationFilter = {
    is?: AssociationWhereInput | null
    isNot?: AssociationWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    imageUrl?: SortOrder
    categoryId?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    imageUrl?: SortOrder
    categoryId?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    imageUrl?: SortOrder
    categoryId?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ClientNullableScalarRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    associationId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    associationId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    associationId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type LiveClientListRelationFilter = {
    every?: LiveClientWhereInput
    some?: LiveClientWhereInput
    none?: LiveClientWhereInput
  }

  export type LiveClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LiveCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    date?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    purchasePrice?: SortOrder
  }

  export type LiveAvgOrderByAggregateInput = {
    purchasePrice?: SortOrder
  }

  export type LiveMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    date?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    purchasePrice?: SortOrder
  }

  export type LiveMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    date?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    purchasePrice?: SortOrder
  }

  export type LiveSumOrderByAggregateInput = {
    purchasePrice?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    tel?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    tel?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    tel?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
  }

  export type LiveScalarRelationFilter = {
    is?: LiveWhereInput
    isNot?: LiveWhereInput
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LiveClientLiveIdClientIdCompoundUniqueInput = {
    liveId: string
    clientId: string
  }

  export type LiveClientCountOrderByAggregateInput = {
    id?: SortOrder
    liveId?: SortOrder
    clientId?: SortOrder
    totalFacture?: SortOrder
    createdAt?: SortOrder
  }

  export type LiveClientAvgOrderByAggregateInput = {
    totalFacture?: SortOrder
  }

  export type LiveClientMaxOrderByAggregateInput = {
    id?: SortOrder
    liveId?: SortOrder
    clientId?: SortOrder
    totalFacture?: SortOrder
    createdAt?: SortOrder
  }

  export type LiveClientMinOrderByAggregateInput = {
    id?: SortOrder
    liveId?: SortOrder
    clientId?: SortOrder
    totalFacture?: SortOrder
    createdAt?: SortOrder
  }

  export type LiveClientSumOrderByAggregateInput = {
    totalFacture?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LiveClientScalarRelationFilter = {
    is?: LiveClientWhereInput
    isNot?: LiveClientWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    liveClientId?: SortOrder
    reference?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    isDeliveredAndPaid?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    liveClientId?: SortOrder
    reference?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    isDeliveredAndPaid?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    liveClientId?: SortOrder
    reference?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    isDeliveredAndPaid?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AssociationScalarRelationFilter = {
    is?: AssociationWhereInput
    isNot?: AssociationWhereInput
  }

  export type OperationCountOrderByAggregateInput = {
    id?: SortOrder
    operationType?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperationAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type OperationMaxOrderByAggregateInput = {
    id?: SortOrder
    operationType?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperationMinOrderByAggregateInput = {
    id?: SortOrder
    operationType?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    associationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperationSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ProductCreateNestedManyWithoutAssociationInput = {
    create?: XOR<ProductCreateWithoutAssociationInput, ProductUncheckedCreateWithoutAssociationInput> | ProductCreateWithoutAssociationInput[] | ProductUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutAssociationInput | ProductCreateOrConnectWithoutAssociationInput[]
    createMany?: ProductCreateManyAssociationInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutAssociationInput = {
    create?: XOR<CategoryCreateWithoutAssociationInput, CategoryUncheckedCreateWithoutAssociationInput> | CategoryCreateWithoutAssociationInput[] | CategoryUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutAssociationInput | CategoryCreateOrConnectWithoutAssociationInput[]
    createMany?: CategoryCreateManyAssociationInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutAssociationInput = {
    create?: XOR<TransactionCreateWithoutAssociationInput, TransactionUncheckedCreateWithoutAssociationInput> | TransactionCreateWithoutAssociationInput[] | TransactionUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAssociationInput | TransactionCreateOrConnectWithoutAssociationInput[]
    createMany?: TransactionCreateManyAssociationInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type LiveCreateNestedManyWithoutAssociationInput = {
    create?: XOR<LiveCreateWithoutAssociationInput, LiveUncheckedCreateWithoutAssociationInput> | LiveCreateWithoutAssociationInput[] | LiveUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: LiveCreateOrConnectWithoutAssociationInput | LiveCreateOrConnectWithoutAssociationInput[]
    createMany?: LiveCreateManyAssociationInputEnvelope
    connect?: LiveWhereUniqueInput | LiveWhereUniqueInput[]
  }

  export type ClientCreateNestedManyWithoutAssociationInput = {
    create?: XOR<ClientCreateWithoutAssociationInput, ClientUncheckedCreateWithoutAssociationInput> | ClientCreateWithoutAssociationInput[] | ClientUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutAssociationInput | ClientCreateOrConnectWithoutAssociationInput[]
    createMany?: ClientCreateManyAssociationInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type OperationCreateNestedManyWithoutAssociationInput = {
    create?: XOR<OperationCreateWithoutAssociationInput, OperationUncheckedCreateWithoutAssociationInput> | OperationCreateWithoutAssociationInput[] | OperationUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutAssociationInput | OperationCreateOrConnectWithoutAssociationInput[]
    createMany?: OperationCreateManyAssociationInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutAssociationInput = {
    create?: XOR<ProductCreateWithoutAssociationInput, ProductUncheckedCreateWithoutAssociationInput> | ProductCreateWithoutAssociationInput[] | ProductUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutAssociationInput | ProductCreateOrConnectWithoutAssociationInput[]
    createMany?: ProductCreateManyAssociationInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutAssociationInput = {
    create?: XOR<CategoryCreateWithoutAssociationInput, CategoryUncheckedCreateWithoutAssociationInput> | CategoryCreateWithoutAssociationInput[] | CategoryUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutAssociationInput | CategoryCreateOrConnectWithoutAssociationInput[]
    createMany?: CategoryCreateManyAssociationInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutAssociationInput = {
    create?: XOR<TransactionCreateWithoutAssociationInput, TransactionUncheckedCreateWithoutAssociationInput> | TransactionCreateWithoutAssociationInput[] | TransactionUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAssociationInput | TransactionCreateOrConnectWithoutAssociationInput[]
    createMany?: TransactionCreateManyAssociationInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type LiveUncheckedCreateNestedManyWithoutAssociationInput = {
    create?: XOR<LiveCreateWithoutAssociationInput, LiveUncheckedCreateWithoutAssociationInput> | LiveCreateWithoutAssociationInput[] | LiveUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: LiveCreateOrConnectWithoutAssociationInput | LiveCreateOrConnectWithoutAssociationInput[]
    createMany?: LiveCreateManyAssociationInputEnvelope
    connect?: LiveWhereUniqueInput | LiveWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutAssociationInput = {
    create?: XOR<ClientCreateWithoutAssociationInput, ClientUncheckedCreateWithoutAssociationInput> | ClientCreateWithoutAssociationInput[] | ClientUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutAssociationInput | ClientCreateOrConnectWithoutAssociationInput[]
    createMany?: ClientCreateManyAssociationInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type OperationUncheckedCreateNestedManyWithoutAssociationInput = {
    create?: XOR<OperationCreateWithoutAssociationInput, OperationUncheckedCreateWithoutAssociationInput> | OperationCreateWithoutAssociationInput[] | OperationUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutAssociationInput | OperationCreateOrConnectWithoutAssociationInput[]
    createMany?: OperationCreateManyAssociationInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<ProductCreateWithoutAssociationInput, ProductUncheckedCreateWithoutAssociationInput> | ProductCreateWithoutAssociationInput[] | ProductUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutAssociationInput | ProductCreateOrConnectWithoutAssociationInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutAssociationInput | ProductUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: ProductCreateManyAssociationInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutAssociationInput | ProductUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutAssociationInput | ProductUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<CategoryCreateWithoutAssociationInput, CategoryUncheckedCreateWithoutAssociationInput> | CategoryCreateWithoutAssociationInput[] | CategoryUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutAssociationInput | CategoryCreateOrConnectWithoutAssociationInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutAssociationInput | CategoryUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: CategoryCreateManyAssociationInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutAssociationInput | CategoryUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutAssociationInput | CategoryUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<TransactionCreateWithoutAssociationInput, TransactionUncheckedCreateWithoutAssociationInput> | TransactionCreateWithoutAssociationInput[] | TransactionUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAssociationInput | TransactionCreateOrConnectWithoutAssociationInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutAssociationInput | TransactionUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: TransactionCreateManyAssociationInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutAssociationInput | TransactionUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutAssociationInput | TransactionUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type LiveUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<LiveCreateWithoutAssociationInput, LiveUncheckedCreateWithoutAssociationInput> | LiveCreateWithoutAssociationInput[] | LiveUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: LiveCreateOrConnectWithoutAssociationInput | LiveCreateOrConnectWithoutAssociationInput[]
    upsert?: LiveUpsertWithWhereUniqueWithoutAssociationInput | LiveUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: LiveCreateManyAssociationInputEnvelope
    set?: LiveWhereUniqueInput | LiveWhereUniqueInput[]
    disconnect?: LiveWhereUniqueInput | LiveWhereUniqueInput[]
    delete?: LiveWhereUniqueInput | LiveWhereUniqueInput[]
    connect?: LiveWhereUniqueInput | LiveWhereUniqueInput[]
    update?: LiveUpdateWithWhereUniqueWithoutAssociationInput | LiveUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: LiveUpdateManyWithWhereWithoutAssociationInput | LiveUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: LiveScalarWhereInput | LiveScalarWhereInput[]
  }

  export type ClientUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<ClientCreateWithoutAssociationInput, ClientUncheckedCreateWithoutAssociationInput> | ClientCreateWithoutAssociationInput[] | ClientUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutAssociationInput | ClientCreateOrConnectWithoutAssociationInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutAssociationInput | ClientUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: ClientCreateManyAssociationInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutAssociationInput | ClientUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutAssociationInput | ClientUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type OperationUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<OperationCreateWithoutAssociationInput, OperationUncheckedCreateWithoutAssociationInput> | OperationCreateWithoutAssociationInput[] | OperationUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutAssociationInput | OperationCreateOrConnectWithoutAssociationInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutAssociationInput | OperationUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: OperationCreateManyAssociationInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutAssociationInput | OperationUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutAssociationInput | OperationUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<ProductCreateWithoutAssociationInput, ProductUncheckedCreateWithoutAssociationInput> | ProductCreateWithoutAssociationInput[] | ProductUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutAssociationInput | ProductCreateOrConnectWithoutAssociationInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutAssociationInput | ProductUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: ProductCreateManyAssociationInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutAssociationInput | ProductUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutAssociationInput | ProductUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<CategoryCreateWithoutAssociationInput, CategoryUncheckedCreateWithoutAssociationInput> | CategoryCreateWithoutAssociationInput[] | CategoryUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutAssociationInput | CategoryCreateOrConnectWithoutAssociationInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutAssociationInput | CategoryUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: CategoryCreateManyAssociationInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutAssociationInput | CategoryUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutAssociationInput | CategoryUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<TransactionCreateWithoutAssociationInput, TransactionUncheckedCreateWithoutAssociationInput> | TransactionCreateWithoutAssociationInput[] | TransactionUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAssociationInput | TransactionCreateOrConnectWithoutAssociationInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutAssociationInput | TransactionUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: TransactionCreateManyAssociationInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutAssociationInput | TransactionUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutAssociationInput | TransactionUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type LiveUncheckedUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<LiveCreateWithoutAssociationInput, LiveUncheckedCreateWithoutAssociationInput> | LiveCreateWithoutAssociationInput[] | LiveUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: LiveCreateOrConnectWithoutAssociationInput | LiveCreateOrConnectWithoutAssociationInput[]
    upsert?: LiveUpsertWithWhereUniqueWithoutAssociationInput | LiveUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: LiveCreateManyAssociationInputEnvelope
    set?: LiveWhereUniqueInput | LiveWhereUniqueInput[]
    disconnect?: LiveWhereUniqueInput | LiveWhereUniqueInput[]
    delete?: LiveWhereUniqueInput | LiveWhereUniqueInput[]
    connect?: LiveWhereUniqueInput | LiveWhereUniqueInput[]
    update?: LiveUpdateWithWhereUniqueWithoutAssociationInput | LiveUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: LiveUpdateManyWithWhereWithoutAssociationInput | LiveUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: LiveScalarWhereInput | LiveScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<ClientCreateWithoutAssociationInput, ClientUncheckedCreateWithoutAssociationInput> | ClientCreateWithoutAssociationInput[] | ClientUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutAssociationInput | ClientCreateOrConnectWithoutAssociationInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutAssociationInput | ClientUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: ClientCreateManyAssociationInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutAssociationInput | ClientUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutAssociationInput | ClientUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type OperationUncheckedUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<OperationCreateWithoutAssociationInput, OperationUncheckedCreateWithoutAssociationInput> | OperationCreateWithoutAssociationInput[] | OperationUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutAssociationInput | OperationCreateOrConnectWithoutAssociationInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutAssociationInput | OperationUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: OperationCreateManyAssociationInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutAssociationInput | OperationUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutAssociationInput | OperationUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type AssociationCreateNestedOneWithoutProductsInput = {
    create?: XOR<AssociationCreateWithoutProductsInput, AssociationUncheckedCreateWithoutProductsInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutProductsInput
    connect?: AssociationWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutProductInput = {
    create?: XOR<TransactionCreateWithoutProductInput, TransactionUncheckedCreateWithoutProductInput> | TransactionCreateWithoutProductInput[] | TransactionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutProductInput | TransactionCreateOrConnectWithoutProductInput[]
    createMany?: TransactionCreateManyProductInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<TransactionCreateWithoutProductInput, TransactionUncheckedCreateWithoutProductInput> | TransactionCreateWithoutProductInput[] | TransactionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutProductInput | TransactionCreateOrConnectWithoutProductInput[]
    createMany?: TransactionCreateManyProductInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type AssociationUpdateOneWithoutProductsNestedInput = {
    create?: XOR<AssociationCreateWithoutProductsInput, AssociationUncheckedCreateWithoutProductsInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutProductsInput
    upsert?: AssociationUpsertWithoutProductsInput
    disconnect?: AssociationWhereInput | boolean
    delete?: AssociationWhereInput | boolean
    connect?: AssociationWhereUniqueInput
    update?: XOR<XOR<AssociationUpdateToOneWithWhereWithoutProductsInput, AssociationUpdateWithoutProductsInput>, AssociationUncheckedUpdateWithoutProductsInput>
  }

  export type TransactionUpdateManyWithoutProductNestedInput = {
    create?: XOR<TransactionCreateWithoutProductInput, TransactionUncheckedCreateWithoutProductInput> | TransactionCreateWithoutProductInput[] | TransactionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutProductInput | TransactionCreateOrConnectWithoutProductInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutProductInput | TransactionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: TransactionCreateManyProductInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutProductInput | TransactionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutProductInput | TransactionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TransactionUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<TransactionCreateWithoutProductInput, TransactionUncheckedCreateWithoutProductInput> | TransactionCreateWithoutProductInput[] | TransactionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutProductInput | TransactionCreateOrConnectWithoutProductInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutProductInput | TransactionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: TransactionCreateManyProductInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutProductInput | TransactionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutProductInput | TransactionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type AssociationCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<AssociationCreateWithoutCategoriesInput, AssociationUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutCategoriesInput
    connect?: AssociationWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type AssociationUpdateOneWithoutCategoriesNestedInput = {
    create?: XOR<AssociationCreateWithoutCategoriesInput, AssociationUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutCategoriesInput
    upsert?: AssociationUpsertWithoutCategoriesInput
    disconnect?: AssociationWhereInput | boolean
    delete?: AssociationWhereInput | boolean
    connect?: AssociationWhereUniqueInput
    update?: XOR<XOR<AssociationUpdateToOneWithWhereWithoutCategoriesInput, AssociationUpdateWithoutCategoriesInput>, AssociationUncheckedUpdateWithoutCategoriesInput>
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<ProductCreateWithoutTransactionsInput, ProductUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTransactionsInput
    connect?: ProductWhereUniqueInput
  }

  export type AssociationCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<AssociationCreateWithoutTransactionsInput, AssociationUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutTransactionsInput
    connect?: AssociationWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<ClientCreateWithoutTransactionsInput, ClientUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutTransactionsInput
    connect?: ClientWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<ProductCreateWithoutTransactionsInput, ProductUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTransactionsInput
    upsert?: ProductUpsertWithoutTransactionsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutTransactionsInput, ProductUpdateWithoutTransactionsInput>, ProductUncheckedUpdateWithoutTransactionsInput>
  }

  export type AssociationUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<AssociationCreateWithoutTransactionsInput, AssociationUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutTransactionsInput
    upsert?: AssociationUpsertWithoutTransactionsInput
    disconnect?: AssociationWhereInput | boolean
    delete?: AssociationWhereInput | boolean
    connect?: AssociationWhereUniqueInput
    update?: XOR<XOR<AssociationUpdateToOneWithWhereWithoutTransactionsInput, AssociationUpdateWithoutTransactionsInput>, AssociationUncheckedUpdateWithoutTransactionsInput>
  }

  export type ClientUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<ClientCreateWithoutTransactionsInput, ClientUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutTransactionsInput
    upsert?: ClientUpsertWithoutTransactionsInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutTransactionsInput, ClientUpdateWithoutTransactionsInput>, ClientUncheckedUpdateWithoutTransactionsInput>
  }

  export type AssociationCreateNestedOneWithoutLivesInput = {
    create?: XOR<AssociationCreateWithoutLivesInput, AssociationUncheckedCreateWithoutLivesInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutLivesInput
    connect?: AssociationWhereUniqueInput
  }

  export type LiveClientCreateNestedManyWithoutLiveInput = {
    create?: XOR<LiveClientCreateWithoutLiveInput, LiveClientUncheckedCreateWithoutLiveInput> | LiveClientCreateWithoutLiveInput[] | LiveClientUncheckedCreateWithoutLiveInput[]
    connectOrCreate?: LiveClientCreateOrConnectWithoutLiveInput | LiveClientCreateOrConnectWithoutLiveInput[]
    createMany?: LiveClientCreateManyLiveInputEnvelope
    connect?: LiveClientWhereUniqueInput | LiveClientWhereUniqueInput[]
  }

  export type LiveClientUncheckedCreateNestedManyWithoutLiveInput = {
    create?: XOR<LiveClientCreateWithoutLiveInput, LiveClientUncheckedCreateWithoutLiveInput> | LiveClientCreateWithoutLiveInput[] | LiveClientUncheckedCreateWithoutLiveInput[]
    connectOrCreate?: LiveClientCreateOrConnectWithoutLiveInput | LiveClientCreateOrConnectWithoutLiveInput[]
    createMany?: LiveClientCreateManyLiveInputEnvelope
    connect?: LiveClientWhereUniqueInput | LiveClientWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssociationUpdateOneWithoutLivesNestedInput = {
    create?: XOR<AssociationCreateWithoutLivesInput, AssociationUncheckedCreateWithoutLivesInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutLivesInput
    upsert?: AssociationUpsertWithoutLivesInput
    disconnect?: AssociationWhereInput | boolean
    delete?: AssociationWhereInput | boolean
    connect?: AssociationWhereUniqueInput
    update?: XOR<XOR<AssociationUpdateToOneWithWhereWithoutLivesInput, AssociationUpdateWithoutLivesInput>, AssociationUncheckedUpdateWithoutLivesInput>
  }

  export type LiveClientUpdateManyWithoutLiveNestedInput = {
    create?: XOR<LiveClientCreateWithoutLiveInput, LiveClientUncheckedCreateWithoutLiveInput> | LiveClientCreateWithoutLiveInput[] | LiveClientUncheckedCreateWithoutLiveInput[]
    connectOrCreate?: LiveClientCreateOrConnectWithoutLiveInput | LiveClientCreateOrConnectWithoutLiveInput[]
    upsert?: LiveClientUpsertWithWhereUniqueWithoutLiveInput | LiveClientUpsertWithWhereUniqueWithoutLiveInput[]
    createMany?: LiveClientCreateManyLiveInputEnvelope
    set?: LiveClientWhereUniqueInput | LiveClientWhereUniqueInput[]
    disconnect?: LiveClientWhereUniqueInput | LiveClientWhereUniqueInput[]
    delete?: LiveClientWhereUniqueInput | LiveClientWhereUniqueInput[]
    connect?: LiveClientWhereUniqueInput | LiveClientWhereUniqueInput[]
    update?: LiveClientUpdateWithWhereUniqueWithoutLiveInput | LiveClientUpdateWithWhereUniqueWithoutLiveInput[]
    updateMany?: LiveClientUpdateManyWithWhereWithoutLiveInput | LiveClientUpdateManyWithWhereWithoutLiveInput[]
    deleteMany?: LiveClientScalarWhereInput | LiveClientScalarWhereInput[]
  }

  export type LiveClientUncheckedUpdateManyWithoutLiveNestedInput = {
    create?: XOR<LiveClientCreateWithoutLiveInput, LiveClientUncheckedCreateWithoutLiveInput> | LiveClientCreateWithoutLiveInput[] | LiveClientUncheckedCreateWithoutLiveInput[]
    connectOrCreate?: LiveClientCreateOrConnectWithoutLiveInput | LiveClientCreateOrConnectWithoutLiveInput[]
    upsert?: LiveClientUpsertWithWhereUniqueWithoutLiveInput | LiveClientUpsertWithWhereUniqueWithoutLiveInput[]
    createMany?: LiveClientCreateManyLiveInputEnvelope
    set?: LiveClientWhereUniqueInput | LiveClientWhereUniqueInput[]
    disconnect?: LiveClientWhereUniqueInput | LiveClientWhereUniqueInput[]
    delete?: LiveClientWhereUniqueInput | LiveClientWhereUniqueInput[]
    connect?: LiveClientWhereUniqueInput | LiveClientWhereUniqueInput[]
    update?: LiveClientUpdateWithWhereUniqueWithoutLiveInput | LiveClientUpdateWithWhereUniqueWithoutLiveInput[]
    updateMany?: LiveClientUpdateManyWithWhereWithoutLiveInput | LiveClientUpdateManyWithWhereWithoutLiveInput[]
    deleteMany?: LiveClientScalarWhereInput | LiveClientScalarWhereInput[]
  }

  export type AssociationCreateNestedOneWithoutClientsInput = {
    create?: XOR<AssociationCreateWithoutClientsInput, AssociationUncheckedCreateWithoutClientsInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutClientsInput
    connect?: AssociationWhereUniqueInput
  }

  export type LiveClientCreateNestedManyWithoutClientInput = {
    create?: XOR<LiveClientCreateWithoutClientInput, LiveClientUncheckedCreateWithoutClientInput> | LiveClientCreateWithoutClientInput[] | LiveClientUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LiveClientCreateOrConnectWithoutClientInput | LiveClientCreateOrConnectWithoutClientInput[]
    createMany?: LiveClientCreateManyClientInputEnvelope
    connect?: LiveClientWhereUniqueInput | LiveClientWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutClientInput = {
    create?: XOR<TransactionCreateWithoutClientInput, TransactionUncheckedCreateWithoutClientInput> | TransactionCreateWithoutClientInput[] | TransactionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutClientInput | TransactionCreateOrConnectWithoutClientInput[]
    createMany?: TransactionCreateManyClientInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type LiveClientUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<LiveClientCreateWithoutClientInput, LiveClientUncheckedCreateWithoutClientInput> | LiveClientCreateWithoutClientInput[] | LiveClientUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LiveClientCreateOrConnectWithoutClientInput | LiveClientCreateOrConnectWithoutClientInput[]
    createMany?: LiveClientCreateManyClientInputEnvelope
    connect?: LiveClientWhereUniqueInput | LiveClientWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<TransactionCreateWithoutClientInput, TransactionUncheckedCreateWithoutClientInput> | TransactionCreateWithoutClientInput[] | TransactionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutClientInput | TransactionCreateOrConnectWithoutClientInput[]
    createMany?: TransactionCreateManyClientInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type AssociationUpdateOneWithoutClientsNestedInput = {
    create?: XOR<AssociationCreateWithoutClientsInput, AssociationUncheckedCreateWithoutClientsInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutClientsInput
    upsert?: AssociationUpsertWithoutClientsInput
    disconnect?: AssociationWhereInput | boolean
    delete?: AssociationWhereInput | boolean
    connect?: AssociationWhereUniqueInput
    update?: XOR<XOR<AssociationUpdateToOneWithWhereWithoutClientsInput, AssociationUpdateWithoutClientsInput>, AssociationUncheckedUpdateWithoutClientsInput>
  }

  export type LiveClientUpdateManyWithoutClientNestedInput = {
    create?: XOR<LiveClientCreateWithoutClientInput, LiveClientUncheckedCreateWithoutClientInput> | LiveClientCreateWithoutClientInput[] | LiveClientUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LiveClientCreateOrConnectWithoutClientInput | LiveClientCreateOrConnectWithoutClientInput[]
    upsert?: LiveClientUpsertWithWhereUniqueWithoutClientInput | LiveClientUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: LiveClientCreateManyClientInputEnvelope
    set?: LiveClientWhereUniqueInput | LiveClientWhereUniqueInput[]
    disconnect?: LiveClientWhereUniqueInput | LiveClientWhereUniqueInput[]
    delete?: LiveClientWhereUniqueInput | LiveClientWhereUniqueInput[]
    connect?: LiveClientWhereUniqueInput | LiveClientWhereUniqueInput[]
    update?: LiveClientUpdateWithWhereUniqueWithoutClientInput | LiveClientUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: LiveClientUpdateManyWithWhereWithoutClientInput | LiveClientUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: LiveClientScalarWhereInput | LiveClientScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutClientNestedInput = {
    create?: XOR<TransactionCreateWithoutClientInput, TransactionUncheckedCreateWithoutClientInput> | TransactionCreateWithoutClientInput[] | TransactionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutClientInput | TransactionCreateOrConnectWithoutClientInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutClientInput | TransactionUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: TransactionCreateManyClientInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutClientInput | TransactionUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutClientInput | TransactionUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type LiveClientUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<LiveClientCreateWithoutClientInput, LiveClientUncheckedCreateWithoutClientInput> | LiveClientCreateWithoutClientInput[] | LiveClientUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LiveClientCreateOrConnectWithoutClientInput | LiveClientCreateOrConnectWithoutClientInput[]
    upsert?: LiveClientUpsertWithWhereUniqueWithoutClientInput | LiveClientUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: LiveClientCreateManyClientInputEnvelope
    set?: LiveClientWhereUniqueInput | LiveClientWhereUniqueInput[]
    disconnect?: LiveClientWhereUniqueInput | LiveClientWhereUniqueInput[]
    delete?: LiveClientWhereUniqueInput | LiveClientWhereUniqueInput[]
    connect?: LiveClientWhereUniqueInput | LiveClientWhereUniqueInput[]
    update?: LiveClientUpdateWithWhereUniqueWithoutClientInput | LiveClientUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: LiveClientUpdateManyWithWhereWithoutClientInput | LiveClientUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: LiveClientScalarWhereInput | LiveClientScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<TransactionCreateWithoutClientInput, TransactionUncheckedCreateWithoutClientInput> | TransactionCreateWithoutClientInput[] | TransactionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutClientInput | TransactionCreateOrConnectWithoutClientInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutClientInput | TransactionUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: TransactionCreateManyClientInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutClientInput | TransactionUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutClientInput | TransactionUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type LiveCreateNestedOneWithoutLiveClientsInput = {
    create?: XOR<LiveCreateWithoutLiveClientsInput, LiveUncheckedCreateWithoutLiveClientsInput>
    connectOrCreate?: LiveCreateOrConnectWithoutLiveClientsInput
    connect?: LiveWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutLiveClientsInput = {
    create?: XOR<ClientCreateWithoutLiveClientsInput, ClientUncheckedCreateWithoutLiveClientsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutLiveClientsInput
    connect?: ClientWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutLiveClientInput = {
    create?: XOR<OrderItemCreateWithoutLiveClientInput, OrderItemUncheckedCreateWithoutLiveClientInput> | OrderItemCreateWithoutLiveClientInput[] | OrderItemUncheckedCreateWithoutLiveClientInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutLiveClientInput | OrderItemCreateOrConnectWithoutLiveClientInput[]
    createMany?: OrderItemCreateManyLiveClientInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutLiveClientInput = {
    create?: XOR<OrderItemCreateWithoutLiveClientInput, OrderItemUncheckedCreateWithoutLiveClientInput> | OrderItemCreateWithoutLiveClientInput[] | OrderItemUncheckedCreateWithoutLiveClientInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutLiveClientInput | OrderItemCreateOrConnectWithoutLiveClientInput[]
    createMany?: OrderItemCreateManyLiveClientInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type LiveUpdateOneRequiredWithoutLiveClientsNestedInput = {
    create?: XOR<LiveCreateWithoutLiveClientsInput, LiveUncheckedCreateWithoutLiveClientsInput>
    connectOrCreate?: LiveCreateOrConnectWithoutLiveClientsInput
    upsert?: LiveUpsertWithoutLiveClientsInput
    connect?: LiveWhereUniqueInput
    update?: XOR<XOR<LiveUpdateToOneWithWhereWithoutLiveClientsInput, LiveUpdateWithoutLiveClientsInput>, LiveUncheckedUpdateWithoutLiveClientsInput>
  }

  export type ClientUpdateOneRequiredWithoutLiveClientsNestedInput = {
    create?: XOR<ClientCreateWithoutLiveClientsInput, ClientUncheckedCreateWithoutLiveClientsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutLiveClientsInput
    upsert?: ClientUpsertWithoutLiveClientsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutLiveClientsInput, ClientUpdateWithoutLiveClientsInput>, ClientUncheckedUpdateWithoutLiveClientsInput>
  }

  export type OrderItemUpdateManyWithoutLiveClientNestedInput = {
    create?: XOR<OrderItemCreateWithoutLiveClientInput, OrderItemUncheckedCreateWithoutLiveClientInput> | OrderItemCreateWithoutLiveClientInput[] | OrderItemUncheckedCreateWithoutLiveClientInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutLiveClientInput | OrderItemCreateOrConnectWithoutLiveClientInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutLiveClientInput | OrderItemUpsertWithWhereUniqueWithoutLiveClientInput[]
    createMany?: OrderItemCreateManyLiveClientInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutLiveClientInput | OrderItemUpdateWithWhereUniqueWithoutLiveClientInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutLiveClientInput | OrderItemUpdateManyWithWhereWithoutLiveClientInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutLiveClientNestedInput = {
    create?: XOR<OrderItemCreateWithoutLiveClientInput, OrderItemUncheckedCreateWithoutLiveClientInput> | OrderItemCreateWithoutLiveClientInput[] | OrderItemUncheckedCreateWithoutLiveClientInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutLiveClientInput | OrderItemCreateOrConnectWithoutLiveClientInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutLiveClientInput | OrderItemUpsertWithWhereUniqueWithoutLiveClientInput[]
    createMany?: OrderItemCreateManyLiveClientInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutLiveClientInput | OrderItemUpdateWithWhereUniqueWithoutLiveClientInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutLiveClientInput | OrderItemUpdateManyWithWhereWithoutLiveClientInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type LiveClientCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<LiveClientCreateWithoutOrderItemsInput, LiveClientUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: LiveClientCreateOrConnectWithoutOrderItemsInput
    connect?: LiveClientWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type LiveClientUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<LiveClientCreateWithoutOrderItemsInput, LiveClientUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: LiveClientCreateOrConnectWithoutOrderItemsInput
    upsert?: LiveClientUpsertWithoutOrderItemsInput
    connect?: LiveClientWhereUniqueInput
    update?: XOR<XOR<LiveClientUpdateToOneWithWhereWithoutOrderItemsInput, LiveClientUpdateWithoutOrderItemsInput>, LiveClientUncheckedUpdateWithoutOrderItemsInput>
  }

  export type AssociationCreateNestedOneWithoutOperationsInput = {
    create?: XOR<AssociationCreateWithoutOperationsInput, AssociationUncheckedCreateWithoutOperationsInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutOperationsInput
    connect?: AssociationWhereUniqueInput
  }

  export type AssociationUpdateOneRequiredWithoutOperationsNestedInput = {
    create?: XOR<AssociationCreateWithoutOperationsInput, AssociationUncheckedCreateWithoutOperationsInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutOperationsInput
    upsert?: AssociationUpsertWithoutOperationsInput
    connect?: AssociationWhereUniqueInput
    update?: XOR<XOR<AssociationUpdateToOneWithWhereWithoutOperationsInput, AssociationUpdateWithoutOperationsInput>, AssociationUncheckedUpdateWithoutOperationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProductCreateWithoutAssociationInput = {
    id?: string
    name: string
    description: string
    price: number
    quantity?: number
    unit: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    transactions?: TransactionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutAssociationInput = {
    id?: string
    name: string
    description: string
    price: number
    quantity?: number
    unit: string
    imageUrl: string
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutAssociationInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutAssociationInput, ProductUncheckedCreateWithoutAssociationInput>
  }

  export type ProductCreateManyAssociationInputEnvelope = {
    data: ProductCreateManyAssociationInput | ProductCreateManyAssociationInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutAssociationInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutAssociationInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutAssociationInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutAssociationInput, CategoryUncheckedCreateWithoutAssociationInput>
  }

  export type CategoryCreateManyAssociationInputEnvelope = {
    data: CategoryCreateManyAssociationInput | CategoryCreateManyAssociationInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutAssociationInput = {
    id?: string
    type: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutTransactionsInput
    client?: ClientCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutAssociationInput = {
    id?: string
    type: string
    quantity: number
    productId: string
    clientId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutAssociationInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutAssociationInput, TransactionUncheckedCreateWithoutAssociationInput>
  }

  export type TransactionCreateManyAssociationInputEnvelope = {
    data: TransactionCreateManyAssociationInput | TransactionCreateManyAssociationInput[]
    skipDuplicates?: boolean
  }

  export type LiveCreateWithoutAssociationInput = {
    id?: string
    name: string
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    purchasePrice?: number | null
    liveClients?: LiveClientCreateNestedManyWithoutLiveInput
  }

  export type LiveUncheckedCreateWithoutAssociationInput = {
    id?: string
    name: string
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    purchasePrice?: number | null
    liveClients?: LiveClientUncheckedCreateNestedManyWithoutLiveInput
  }

  export type LiveCreateOrConnectWithoutAssociationInput = {
    where: LiveWhereUniqueInput
    create: XOR<LiveCreateWithoutAssociationInput, LiveUncheckedCreateWithoutAssociationInput>
  }

  export type LiveCreateManyAssociationInputEnvelope = {
    data: LiveCreateManyAssociationInput | LiveCreateManyAssociationInput[]
    skipDuplicates?: boolean
  }

  export type ClientCreateWithoutAssociationInput = {
    id?: string
    name: string
    address: string
    tel: string
    createdAt?: Date | string
    liveClients?: LiveClientCreateNestedManyWithoutClientInput
    transactions?: TransactionCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutAssociationInput = {
    id?: string
    name: string
    address: string
    tel: string
    createdAt?: Date | string
    liveClients?: LiveClientUncheckedCreateNestedManyWithoutClientInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutAssociationInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutAssociationInput, ClientUncheckedCreateWithoutAssociationInput>
  }

  export type ClientCreateManyAssociationInputEnvelope = {
    data: ClientCreateManyAssociationInput | ClientCreateManyAssociationInput[]
    skipDuplicates?: boolean
  }

  export type OperationCreateWithoutAssociationInput = {
    id?: string
    operationType: string
    amount: number
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperationUncheckedCreateWithoutAssociationInput = {
    id?: string
    operationType: string
    amount: number
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperationCreateOrConnectWithoutAssociationInput = {
    where: OperationWhereUniqueInput
    create: XOR<OperationCreateWithoutAssociationInput, OperationUncheckedCreateWithoutAssociationInput>
  }

  export type OperationCreateManyAssociationInputEnvelope = {
    data: OperationCreateManyAssociationInput | OperationCreateManyAssociationInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutAssociationInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutAssociationInput, ProductUncheckedUpdateWithoutAssociationInput>
    create: XOR<ProductCreateWithoutAssociationInput, ProductUncheckedCreateWithoutAssociationInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutAssociationInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutAssociationInput, ProductUncheckedUpdateWithoutAssociationInput>
  }

  export type ProductUpdateManyWithWhereWithoutAssociationInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutAssociationInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    quantity?: IntFilter<"Product"> | number
    unit?: StringFilter<"Product"> | string
    imageUrl?: StringFilter<"Product"> | string
    categoryId?: StringFilter<"Product"> | string
    associationId?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type CategoryUpsertWithWhereUniqueWithoutAssociationInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutAssociationInput, CategoryUncheckedUpdateWithoutAssociationInput>
    create: XOR<CategoryCreateWithoutAssociationInput, CategoryUncheckedCreateWithoutAssociationInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutAssociationInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutAssociationInput, CategoryUncheckedUpdateWithoutAssociationInput>
  }

  export type CategoryUpdateManyWithWhereWithoutAssociationInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutAssociationInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    associationId?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutAssociationInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutAssociationInput, TransactionUncheckedUpdateWithoutAssociationInput>
    create: XOR<TransactionCreateWithoutAssociationInput, TransactionUncheckedCreateWithoutAssociationInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutAssociationInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutAssociationInput, TransactionUncheckedUpdateWithoutAssociationInput>
  }

  export type TransactionUpdateManyWithWhereWithoutAssociationInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutAssociationInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    type?: StringFilter<"Transaction"> | string
    quantity?: IntFilter<"Transaction"> | number
    productId?: StringFilter<"Transaction"> | string
    associationId?: StringNullableFilter<"Transaction"> | string | null
    clientId?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type LiveUpsertWithWhereUniqueWithoutAssociationInput = {
    where: LiveWhereUniqueInput
    update: XOR<LiveUpdateWithoutAssociationInput, LiveUncheckedUpdateWithoutAssociationInput>
    create: XOR<LiveCreateWithoutAssociationInput, LiveUncheckedCreateWithoutAssociationInput>
  }

  export type LiveUpdateWithWhereUniqueWithoutAssociationInput = {
    where: LiveWhereUniqueInput
    data: XOR<LiveUpdateWithoutAssociationInput, LiveUncheckedUpdateWithoutAssociationInput>
  }

  export type LiveUpdateManyWithWhereWithoutAssociationInput = {
    where: LiveScalarWhereInput
    data: XOR<LiveUpdateManyMutationInput, LiveUncheckedUpdateManyWithoutAssociationInput>
  }

  export type LiveScalarWhereInput = {
    AND?: LiveScalarWhereInput | LiveScalarWhereInput[]
    OR?: LiveScalarWhereInput[]
    NOT?: LiveScalarWhereInput | LiveScalarWhereInput[]
    id?: StringFilter<"Live"> | string
    name?: StringFilter<"Live"> | string
    description?: StringNullableFilter<"Live"> | string | null
    date?: DateTimeFilter<"Live"> | Date | string
    associationId?: StringNullableFilter<"Live"> | string | null
    createdAt?: DateTimeFilter<"Live"> | Date | string
    updatedAt?: DateTimeFilter<"Live"> | Date | string
    purchasePrice?: FloatNullableFilter<"Live"> | number | null
  }

  export type ClientUpsertWithWhereUniqueWithoutAssociationInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutAssociationInput, ClientUncheckedUpdateWithoutAssociationInput>
    create: XOR<ClientCreateWithoutAssociationInput, ClientUncheckedCreateWithoutAssociationInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutAssociationInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutAssociationInput, ClientUncheckedUpdateWithoutAssociationInput>
  }

  export type ClientUpdateManyWithWhereWithoutAssociationInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutAssociationInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    address?: StringFilter<"Client"> | string
    tel?: StringFilter<"Client"> | string
    associationId?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
  }

  export type OperationUpsertWithWhereUniqueWithoutAssociationInput = {
    where: OperationWhereUniqueInput
    update: XOR<OperationUpdateWithoutAssociationInput, OperationUncheckedUpdateWithoutAssociationInput>
    create: XOR<OperationCreateWithoutAssociationInput, OperationUncheckedCreateWithoutAssociationInput>
  }

  export type OperationUpdateWithWhereUniqueWithoutAssociationInput = {
    where: OperationWhereUniqueInput
    data: XOR<OperationUpdateWithoutAssociationInput, OperationUncheckedUpdateWithoutAssociationInput>
  }

  export type OperationUpdateManyWithWhereWithoutAssociationInput = {
    where: OperationScalarWhereInput
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyWithoutAssociationInput>
  }

  export type OperationScalarWhereInput = {
    AND?: OperationScalarWhereInput | OperationScalarWhereInput[]
    OR?: OperationScalarWhereInput[]
    NOT?: OperationScalarWhereInput | OperationScalarWhereInput[]
    id?: StringFilter<"Operation"> | string
    operationType?: StringFilter<"Operation"> | string
    amount?: FloatFilter<"Operation"> | number
    reason?: StringNullableFilter<"Operation"> | string | null
    associationId?: StringFilter<"Operation"> | string
    createdAt?: DateTimeFilter<"Operation"> | Date | string
    updatedAt?: DateTimeFilter<"Operation"> | Date | string
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    association?: AssociationCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    description?: string | null
    associationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type AssociationCreateWithoutProductsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balance?: number
    categories?: CategoryCreateNestedManyWithoutAssociationInput
    transactions?: TransactionCreateNestedManyWithoutAssociationInput
    lives?: LiveCreateNestedManyWithoutAssociationInput
    clients?: ClientCreateNestedManyWithoutAssociationInput
    operations?: OperationCreateNestedManyWithoutAssociationInput
  }

  export type AssociationUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balance?: number
    categories?: CategoryUncheckedCreateNestedManyWithoutAssociationInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutAssociationInput
    lives?: LiveUncheckedCreateNestedManyWithoutAssociationInput
    clients?: ClientUncheckedCreateNestedManyWithoutAssociationInput
    operations?: OperationUncheckedCreateNestedManyWithoutAssociationInput
  }

  export type AssociationCreateOrConnectWithoutProductsInput = {
    where: AssociationWhereUniqueInput
    create: XOR<AssociationCreateWithoutProductsInput, AssociationUncheckedCreateWithoutProductsInput>
  }

  export type TransactionCreateWithoutProductInput = {
    id?: string
    type: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    association?: AssociationCreateNestedOneWithoutTransactionsInput
    client?: ClientCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutProductInput = {
    id?: string
    type: string
    quantity: number
    associationId?: string | null
    clientId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutProductInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutProductInput, TransactionUncheckedCreateWithoutProductInput>
  }

  export type TransactionCreateManyProductInputEnvelope = {
    data: TransactionCreateManyProductInput | TransactionCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    associationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssociationUpsertWithoutProductsInput = {
    update: XOR<AssociationUpdateWithoutProductsInput, AssociationUncheckedUpdateWithoutProductsInput>
    create: XOR<AssociationCreateWithoutProductsInput, AssociationUncheckedCreateWithoutProductsInput>
    where?: AssociationWhereInput
  }

  export type AssociationUpdateToOneWithWhereWithoutProductsInput = {
    where?: AssociationWhereInput
    data: XOR<AssociationUpdateWithoutProductsInput, AssociationUncheckedUpdateWithoutProductsInput>
  }

  export type AssociationUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: FloatFieldUpdateOperationsInput | number
    categories?: CategoryUpdateManyWithoutAssociationNestedInput
    transactions?: TransactionUpdateManyWithoutAssociationNestedInput
    lives?: LiveUpdateManyWithoutAssociationNestedInput
    clients?: ClientUpdateManyWithoutAssociationNestedInput
    operations?: OperationUpdateManyWithoutAssociationNestedInput
  }

  export type AssociationUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: FloatFieldUpdateOperationsInput | number
    categories?: CategoryUncheckedUpdateManyWithoutAssociationNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutAssociationNestedInput
    lives?: LiveUncheckedUpdateManyWithoutAssociationNestedInput
    clients?: ClientUncheckedUpdateManyWithoutAssociationNestedInput
    operations?: OperationUncheckedUpdateManyWithoutAssociationNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutProductInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutProductInput, TransactionUncheckedUpdateWithoutProductInput>
    create: XOR<TransactionCreateWithoutProductInput, TransactionUncheckedCreateWithoutProductInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutProductInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutProductInput, TransactionUncheckedUpdateWithoutProductInput>
  }

  export type TransactionUpdateManyWithWhereWithoutProductInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutProductInput>
  }

  export type AssociationCreateWithoutCategoriesInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balance?: number
    products?: ProductCreateNestedManyWithoutAssociationInput
    transactions?: TransactionCreateNestedManyWithoutAssociationInput
    lives?: LiveCreateNestedManyWithoutAssociationInput
    clients?: ClientCreateNestedManyWithoutAssociationInput
    operations?: OperationCreateNestedManyWithoutAssociationInput
  }

  export type AssociationUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balance?: number
    products?: ProductUncheckedCreateNestedManyWithoutAssociationInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutAssociationInput
    lives?: LiveUncheckedCreateNestedManyWithoutAssociationInput
    clients?: ClientUncheckedCreateNestedManyWithoutAssociationInput
    operations?: OperationUncheckedCreateNestedManyWithoutAssociationInput
  }

  export type AssociationCreateOrConnectWithoutCategoriesInput = {
    where: AssociationWhereUniqueInput
    create: XOR<AssociationCreateWithoutCategoriesInput, AssociationUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    name: string
    description: string
    price: number
    quantity?: number
    unit: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    association?: AssociationCreateNestedOneWithoutProductsInput
    transactions?: TransactionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description: string
    price: number
    quantity?: number
    unit: string
    imageUrl: string
    associationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type AssociationUpsertWithoutCategoriesInput = {
    update: XOR<AssociationUpdateWithoutCategoriesInput, AssociationUncheckedUpdateWithoutCategoriesInput>
    create: XOR<AssociationCreateWithoutCategoriesInput, AssociationUncheckedCreateWithoutCategoriesInput>
    where?: AssociationWhereInput
  }

  export type AssociationUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: AssociationWhereInput
    data: XOR<AssociationUpdateWithoutCategoriesInput, AssociationUncheckedUpdateWithoutCategoriesInput>
  }

  export type AssociationUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: FloatFieldUpdateOperationsInput | number
    products?: ProductUpdateManyWithoutAssociationNestedInput
    transactions?: TransactionUpdateManyWithoutAssociationNestedInput
    lives?: LiveUpdateManyWithoutAssociationNestedInput
    clients?: ClientUpdateManyWithoutAssociationNestedInput
    operations?: OperationUpdateManyWithoutAssociationNestedInput
  }

  export type AssociationUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: FloatFieldUpdateOperationsInput | number
    products?: ProductUncheckedUpdateManyWithoutAssociationNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutAssociationNestedInput
    lives?: LiveUncheckedUpdateManyWithoutAssociationNestedInput
    clients?: ClientUncheckedUpdateManyWithoutAssociationNestedInput
    operations?: OperationUncheckedUpdateManyWithoutAssociationNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductCreateWithoutTransactionsInput = {
    id?: string
    name: string
    description: string
    price: number
    quantity?: number
    unit: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    association?: AssociationCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    description: string
    price: number
    quantity?: number
    unit: string
    imageUrl: string
    categoryId: string
    associationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutTransactionsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutTransactionsInput, ProductUncheckedCreateWithoutTransactionsInput>
  }

  export type AssociationCreateWithoutTransactionsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balance?: number
    products?: ProductCreateNestedManyWithoutAssociationInput
    categories?: CategoryCreateNestedManyWithoutAssociationInput
    lives?: LiveCreateNestedManyWithoutAssociationInput
    clients?: ClientCreateNestedManyWithoutAssociationInput
    operations?: OperationCreateNestedManyWithoutAssociationInput
  }

  export type AssociationUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balance?: number
    products?: ProductUncheckedCreateNestedManyWithoutAssociationInput
    categories?: CategoryUncheckedCreateNestedManyWithoutAssociationInput
    lives?: LiveUncheckedCreateNestedManyWithoutAssociationInput
    clients?: ClientUncheckedCreateNestedManyWithoutAssociationInput
    operations?: OperationUncheckedCreateNestedManyWithoutAssociationInput
  }

  export type AssociationCreateOrConnectWithoutTransactionsInput = {
    where: AssociationWhereUniqueInput
    create: XOR<AssociationCreateWithoutTransactionsInput, AssociationUncheckedCreateWithoutTransactionsInput>
  }

  export type ClientCreateWithoutTransactionsInput = {
    id?: string
    name: string
    address: string
    tel: string
    createdAt?: Date | string
    association?: AssociationCreateNestedOneWithoutClientsInput
    liveClients?: LiveClientCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    address: string
    tel: string
    associationId?: string | null
    createdAt?: Date | string
    liveClients?: LiveClientUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutTransactionsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutTransactionsInput, ClientUncheckedCreateWithoutTransactionsInput>
  }

  export type ProductUpsertWithoutTransactionsInput = {
    update: XOR<ProductUpdateWithoutTransactionsInput, ProductUncheckedUpdateWithoutTransactionsInput>
    create: XOR<ProductCreateWithoutTransactionsInput, ProductUncheckedCreateWithoutTransactionsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutTransactionsInput, ProductUncheckedUpdateWithoutTransactionsInput>
  }

  export type ProductUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    association?: AssociationUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    associationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssociationUpsertWithoutTransactionsInput = {
    update: XOR<AssociationUpdateWithoutTransactionsInput, AssociationUncheckedUpdateWithoutTransactionsInput>
    create: XOR<AssociationCreateWithoutTransactionsInput, AssociationUncheckedCreateWithoutTransactionsInput>
    where?: AssociationWhereInput
  }

  export type AssociationUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: AssociationWhereInput
    data: XOR<AssociationUpdateWithoutTransactionsInput, AssociationUncheckedUpdateWithoutTransactionsInput>
  }

  export type AssociationUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: FloatFieldUpdateOperationsInput | number
    products?: ProductUpdateManyWithoutAssociationNestedInput
    categories?: CategoryUpdateManyWithoutAssociationNestedInput
    lives?: LiveUpdateManyWithoutAssociationNestedInput
    clients?: ClientUpdateManyWithoutAssociationNestedInput
    operations?: OperationUpdateManyWithoutAssociationNestedInput
  }

  export type AssociationUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: FloatFieldUpdateOperationsInput | number
    products?: ProductUncheckedUpdateManyWithoutAssociationNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutAssociationNestedInput
    lives?: LiveUncheckedUpdateManyWithoutAssociationNestedInput
    clients?: ClientUncheckedUpdateManyWithoutAssociationNestedInput
    operations?: OperationUncheckedUpdateManyWithoutAssociationNestedInput
  }

  export type ClientUpsertWithoutTransactionsInput = {
    update: XOR<ClientUpdateWithoutTransactionsInput, ClientUncheckedUpdateWithoutTransactionsInput>
    create: XOR<ClientCreateWithoutTransactionsInput, ClientUncheckedCreateWithoutTransactionsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutTransactionsInput, ClientUncheckedUpdateWithoutTransactionsInput>
  }

  export type ClientUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneWithoutClientsNestedInput
    liveClients?: LiveClientUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    associationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveClients?: LiveClientUncheckedUpdateManyWithoutClientNestedInput
  }

  export type AssociationCreateWithoutLivesInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balance?: number
    products?: ProductCreateNestedManyWithoutAssociationInput
    categories?: CategoryCreateNestedManyWithoutAssociationInput
    transactions?: TransactionCreateNestedManyWithoutAssociationInput
    clients?: ClientCreateNestedManyWithoutAssociationInput
    operations?: OperationCreateNestedManyWithoutAssociationInput
  }

  export type AssociationUncheckedCreateWithoutLivesInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balance?: number
    products?: ProductUncheckedCreateNestedManyWithoutAssociationInput
    categories?: CategoryUncheckedCreateNestedManyWithoutAssociationInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutAssociationInput
    clients?: ClientUncheckedCreateNestedManyWithoutAssociationInput
    operations?: OperationUncheckedCreateNestedManyWithoutAssociationInput
  }

  export type AssociationCreateOrConnectWithoutLivesInput = {
    where: AssociationWhereUniqueInput
    create: XOR<AssociationCreateWithoutLivesInput, AssociationUncheckedCreateWithoutLivesInput>
  }

  export type LiveClientCreateWithoutLiveInput = {
    id?: string
    totalFacture?: number
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutLiveClientsInput
    orderItems?: OrderItemCreateNestedManyWithoutLiveClientInput
  }

  export type LiveClientUncheckedCreateWithoutLiveInput = {
    id?: string
    clientId: string
    totalFacture?: number
    createdAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutLiveClientInput
  }

  export type LiveClientCreateOrConnectWithoutLiveInput = {
    where: LiveClientWhereUniqueInput
    create: XOR<LiveClientCreateWithoutLiveInput, LiveClientUncheckedCreateWithoutLiveInput>
  }

  export type LiveClientCreateManyLiveInputEnvelope = {
    data: LiveClientCreateManyLiveInput | LiveClientCreateManyLiveInput[]
    skipDuplicates?: boolean
  }

  export type AssociationUpsertWithoutLivesInput = {
    update: XOR<AssociationUpdateWithoutLivesInput, AssociationUncheckedUpdateWithoutLivesInput>
    create: XOR<AssociationCreateWithoutLivesInput, AssociationUncheckedCreateWithoutLivesInput>
    where?: AssociationWhereInput
  }

  export type AssociationUpdateToOneWithWhereWithoutLivesInput = {
    where?: AssociationWhereInput
    data: XOR<AssociationUpdateWithoutLivesInput, AssociationUncheckedUpdateWithoutLivesInput>
  }

  export type AssociationUpdateWithoutLivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: FloatFieldUpdateOperationsInput | number
    products?: ProductUpdateManyWithoutAssociationNestedInput
    categories?: CategoryUpdateManyWithoutAssociationNestedInput
    transactions?: TransactionUpdateManyWithoutAssociationNestedInput
    clients?: ClientUpdateManyWithoutAssociationNestedInput
    operations?: OperationUpdateManyWithoutAssociationNestedInput
  }

  export type AssociationUncheckedUpdateWithoutLivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: FloatFieldUpdateOperationsInput | number
    products?: ProductUncheckedUpdateManyWithoutAssociationNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutAssociationNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutAssociationNestedInput
    clients?: ClientUncheckedUpdateManyWithoutAssociationNestedInput
    operations?: OperationUncheckedUpdateManyWithoutAssociationNestedInput
  }

  export type LiveClientUpsertWithWhereUniqueWithoutLiveInput = {
    where: LiveClientWhereUniqueInput
    update: XOR<LiveClientUpdateWithoutLiveInput, LiveClientUncheckedUpdateWithoutLiveInput>
    create: XOR<LiveClientCreateWithoutLiveInput, LiveClientUncheckedCreateWithoutLiveInput>
  }

  export type LiveClientUpdateWithWhereUniqueWithoutLiveInput = {
    where: LiveClientWhereUniqueInput
    data: XOR<LiveClientUpdateWithoutLiveInput, LiveClientUncheckedUpdateWithoutLiveInput>
  }

  export type LiveClientUpdateManyWithWhereWithoutLiveInput = {
    where: LiveClientScalarWhereInput
    data: XOR<LiveClientUpdateManyMutationInput, LiveClientUncheckedUpdateManyWithoutLiveInput>
  }

  export type LiveClientScalarWhereInput = {
    AND?: LiveClientScalarWhereInput | LiveClientScalarWhereInput[]
    OR?: LiveClientScalarWhereInput[]
    NOT?: LiveClientScalarWhereInput | LiveClientScalarWhereInput[]
    id?: StringFilter<"LiveClient"> | string
    liveId?: StringFilter<"LiveClient"> | string
    clientId?: StringFilter<"LiveClient"> | string
    totalFacture?: FloatFilter<"LiveClient"> | number
    createdAt?: DateTimeFilter<"LiveClient"> | Date | string
  }

  export type AssociationCreateWithoutClientsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balance?: number
    products?: ProductCreateNestedManyWithoutAssociationInput
    categories?: CategoryCreateNestedManyWithoutAssociationInput
    transactions?: TransactionCreateNestedManyWithoutAssociationInput
    lives?: LiveCreateNestedManyWithoutAssociationInput
    operations?: OperationCreateNestedManyWithoutAssociationInput
  }

  export type AssociationUncheckedCreateWithoutClientsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balance?: number
    products?: ProductUncheckedCreateNestedManyWithoutAssociationInput
    categories?: CategoryUncheckedCreateNestedManyWithoutAssociationInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutAssociationInput
    lives?: LiveUncheckedCreateNestedManyWithoutAssociationInput
    operations?: OperationUncheckedCreateNestedManyWithoutAssociationInput
  }

  export type AssociationCreateOrConnectWithoutClientsInput = {
    where: AssociationWhereUniqueInput
    create: XOR<AssociationCreateWithoutClientsInput, AssociationUncheckedCreateWithoutClientsInput>
  }

  export type LiveClientCreateWithoutClientInput = {
    id?: string
    totalFacture?: number
    createdAt?: Date | string
    live: LiveCreateNestedOneWithoutLiveClientsInput
    orderItems?: OrderItemCreateNestedManyWithoutLiveClientInput
  }

  export type LiveClientUncheckedCreateWithoutClientInput = {
    id?: string
    liveId: string
    totalFacture?: number
    createdAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutLiveClientInput
  }

  export type LiveClientCreateOrConnectWithoutClientInput = {
    where: LiveClientWhereUniqueInput
    create: XOR<LiveClientCreateWithoutClientInput, LiveClientUncheckedCreateWithoutClientInput>
  }

  export type LiveClientCreateManyClientInputEnvelope = {
    data: LiveClientCreateManyClientInput | LiveClientCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutClientInput = {
    id?: string
    type: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutTransactionsInput
    association?: AssociationCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutClientInput = {
    id?: string
    type: string
    quantity: number
    productId: string
    associationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutClientInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutClientInput, TransactionUncheckedCreateWithoutClientInput>
  }

  export type TransactionCreateManyClientInputEnvelope = {
    data: TransactionCreateManyClientInput | TransactionCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type AssociationUpsertWithoutClientsInput = {
    update: XOR<AssociationUpdateWithoutClientsInput, AssociationUncheckedUpdateWithoutClientsInput>
    create: XOR<AssociationCreateWithoutClientsInput, AssociationUncheckedCreateWithoutClientsInput>
    where?: AssociationWhereInput
  }

  export type AssociationUpdateToOneWithWhereWithoutClientsInput = {
    where?: AssociationWhereInput
    data: XOR<AssociationUpdateWithoutClientsInput, AssociationUncheckedUpdateWithoutClientsInput>
  }

  export type AssociationUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: FloatFieldUpdateOperationsInput | number
    products?: ProductUpdateManyWithoutAssociationNestedInput
    categories?: CategoryUpdateManyWithoutAssociationNestedInput
    transactions?: TransactionUpdateManyWithoutAssociationNestedInput
    lives?: LiveUpdateManyWithoutAssociationNestedInput
    operations?: OperationUpdateManyWithoutAssociationNestedInput
  }

  export type AssociationUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: FloatFieldUpdateOperationsInput | number
    products?: ProductUncheckedUpdateManyWithoutAssociationNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutAssociationNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutAssociationNestedInput
    lives?: LiveUncheckedUpdateManyWithoutAssociationNestedInput
    operations?: OperationUncheckedUpdateManyWithoutAssociationNestedInput
  }

  export type LiveClientUpsertWithWhereUniqueWithoutClientInput = {
    where: LiveClientWhereUniqueInput
    update: XOR<LiveClientUpdateWithoutClientInput, LiveClientUncheckedUpdateWithoutClientInput>
    create: XOR<LiveClientCreateWithoutClientInput, LiveClientUncheckedCreateWithoutClientInput>
  }

  export type LiveClientUpdateWithWhereUniqueWithoutClientInput = {
    where: LiveClientWhereUniqueInput
    data: XOR<LiveClientUpdateWithoutClientInput, LiveClientUncheckedUpdateWithoutClientInput>
  }

  export type LiveClientUpdateManyWithWhereWithoutClientInput = {
    where: LiveClientScalarWhereInput
    data: XOR<LiveClientUpdateManyMutationInput, LiveClientUncheckedUpdateManyWithoutClientInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutClientInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutClientInput, TransactionUncheckedUpdateWithoutClientInput>
    create: XOR<TransactionCreateWithoutClientInput, TransactionUncheckedCreateWithoutClientInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutClientInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutClientInput, TransactionUncheckedUpdateWithoutClientInput>
  }

  export type TransactionUpdateManyWithWhereWithoutClientInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutClientInput>
  }

  export type LiveCreateWithoutLiveClientsInput = {
    id?: string
    name: string
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    purchasePrice?: number | null
    association?: AssociationCreateNestedOneWithoutLivesInput
  }

  export type LiveUncheckedCreateWithoutLiveClientsInput = {
    id?: string
    name: string
    description?: string | null
    date?: Date | string
    associationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    purchasePrice?: number | null
  }

  export type LiveCreateOrConnectWithoutLiveClientsInput = {
    where: LiveWhereUniqueInput
    create: XOR<LiveCreateWithoutLiveClientsInput, LiveUncheckedCreateWithoutLiveClientsInput>
  }

  export type ClientCreateWithoutLiveClientsInput = {
    id?: string
    name: string
    address: string
    tel: string
    createdAt?: Date | string
    association?: AssociationCreateNestedOneWithoutClientsInput
    transactions?: TransactionCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutLiveClientsInput = {
    id?: string
    name: string
    address: string
    tel: string
    associationId?: string | null
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutLiveClientsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutLiveClientsInput, ClientUncheckedCreateWithoutLiveClientsInput>
  }

  export type OrderItemCreateWithoutLiveClientInput = {
    id?: string
    reference: string
    quantity: number
    unitPrice: number
    createdAt?: Date | string
    isDeliveredAndPaid?: boolean
  }

  export type OrderItemUncheckedCreateWithoutLiveClientInput = {
    id?: string
    reference: string
    quantity: number
    unitPrice: number
    createdAt?: Date | string
    isDeliveredAndPaid?: boolean
  }

  export type OrderItemCreateOrConnectWithoutLiveClientInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutLiveClientInput, OrderItemUncheckedCreateWithoutLiveClientInput>
  }

  export type OrderItemCreateManyLiveClientInputEnvelope = {
    data: OrderItemCreateManyLiveClientInput | OrderItemCreateManyLiveClientInput[]
    skipDuplicates?: boolean
  }

  export type LiveUpsertWithoutLiveClientsInput = {
    update: XOR<LiveUpdateWithoutLiveClientsInput, LiveUncheckedUpdateWithoutLiveClientsInput>
    create: XOR<LiveCreateWithoutLiveClientsInput, LiveUncheckedCreateWithoutLiveClientsInput>
    where?: LiveWhereInput
  }

  export type LiveUpdateToOneWithWhereWithoutLiveClientsInput = {
    where?: LiveWhereInput
    data: XOR<LiveUpdateWithoutLiveClientsInput, LiveUncheckedUpdateWithoutLiveClientsInput>
  }

  export type LiveUpdateWithoutLiveClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    association?: AssociationUpdateOneWithoutLivesNestedInput
  }

  export type LiveUncheckedUpdateWithoutLiveClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    associationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ClientUpsertWithoutLiveClientsInput = {
    update: XOR<ClientUpdateWithoutLiveClientsInput, ClientUncheckedUpdateWithoutLiveClientsInput>
    create: XOR<ClientCreateWithoutLiveClientsInput, ClientUncheckedCreateWithoutLiveClientsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutLiveClientsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutLiveClientsInput, ClientUncheckedUpdateWithoutLiveClientsInput>
  }

  export type ClientUpdateWithoutLiveClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneWithoutClientsNestedInput
    transactions?: TransactionUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutLiveClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    associationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutClientNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutLiveClientInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutLiveClientInput, OrderItemUncheckedUpdateWithoutLiveClientInput>
    create: XOR<OrderItemCreateWithoutLiveClientInput, OrderItemUncheckedCreateWithoutLiveClientInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutLiveClientInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutLiveClientInput, OrderItemUncheckedUpdateWithoutLiveClientInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutLiveClientInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutLiveClientInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    liveClientId?: StringFilter<"OrderItem"> | string
    reference?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: FloatFilter<"OrderItem"> | number
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    isDeliveredAndPaid?: BoolFilter<"OrderItem"> | boolean
  }

  export type LiveClientCreateWithoutOrderItemsInput = {
    id?: string
    totalFacture?: number
    createdAt?: Date | string
    live: LiveCreateNestedOneWithoutLiveClientsInput
    client: ClientCreateNestedOneWithoutLiveClientsInput
  }

  export type LiveClientUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    liveId: string
    clientId: string
    totalFacture?: number
    createdAt?: Date | string
  }

  export type LiveClientCreateOrConnectWithoutOrderItemsInput = {
    where: LiveClientWhereUniqueInput
    create: XOR<LiveClientCreateWithoutOrderItemsInput, LiveClientUncheckedCreateWithoutOrderItemsInput>
  }

  export type LiveClientUpsertWithoutOrderItemsInput = {
    update: XOR<LiveClientUpdateWithoutOrderItemsInput, LiveClientUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<LiveClientCreateWithoutOrderItemsInput, LiveClientUncheckedCreateWithoutOrderItemsInput>
    where?: LiveClientWhereInput
  }

  export type LiveClientUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: LiveClientWhereInput
    data: XOR<LiveClientUpdateWithoutOrderItemsInput, LiveClientUncheckedUpdateWithoutOrderItemsInput>
  }

  export type LiveClientUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalFacture?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    live?: LiveUpdateOneRequiredWithoutLiveClientsNestedInput
    client?: ClientUpdateOneRequiredWithoutLiveClientsNestedInput
  }

  export type LiveClientUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    liveId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    totalFacture?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssociationCreateWithoutOperationsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balance?: number
    products?: ProductCreateNestedManyWithoutAssociationInput
    categories?: CategoryCreateNestedManyWithoutAssociationInput
    transactions?: TransactionCreateNestedManyWithoutAssociationInput
    lives?: LiveCreateNestedManyWithoutAssociationInput
    clients?: ClientCreateNestedManyWithoutAssociationInput
  }

  export type AssociationUncheckedCreateWithoutOperationsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balance?: number
    products?: ProductUncheckedCreateNestedManyWithoutAssociationInput
    categories?: CategoryUncheckedCreateNestedManyWithoutAssociationInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutAssociationInput
    lives?: LiveUncheckedCreateNestedManyWithoutAssociationInput
    clients?: ClientUncheckedCreateNestedManyWithoutAssociationInput
  }

  export type AssociationCreateOrConnectWithoutOperationsInput = {
    where: AssociationWhereUniqueInput
    create: XOR<AssociationCreateWithoutOperationsInput, AssociationUncheckedCreateWithoutOperationsInput>
  }

  export type AssociationUpsertWithoutOperationsInput = {
    update: XOR<AssociationUpdateWithoutOperationsInput, AssociationUncheckedUpdateWithoutOperationsInput>
    create: XOR<AssociationCreateWithoutOperationsInput, AssociationUncheckedCreateWithoutOperationsInput>
    where?: AssociationWhereInput
  }

  export type AssociationUpdateToOneWithWhereWithoutOperationsInput = {
    where?: AssociationWhereInput
    data: XOR<AssociationUpdateWithoutOperationsInput, AssociationUncheckedUpdateWithoutOperationsInput>
  }

  export type AssociationUpdateWithoutOperationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: FloatFieldUpdateOperationsInput | number
    products?: ProductUpdateManyWithoutAssociationNestedInput
    categories?: CategoryUpdateManyWithoutAssociationNestedInput
    transactions?: TransactionUpdateManyWithoutAssociationNestedInput
    lives?: LiveUpdateManyWithoutAssociationNestedInput
    clients?: ClientUpdateManyWithoutAssociationNestedInput
  }

  export type AssociationUncheckedUpdateWithoutOperationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: FloatFieldUpdateOperationsInput | number
    products?: ProductUncheckedUpdateManyWithoutAssociationNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutAssociationNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutAssociationNestedInput
    lives?: LiveUncheckedUpdateManyWithoutAssociationNestedInput
    clients?: ClientUncheckedUpdateManyWithoutAssociationNestedInput
  }

  export type ProductCreateManyAssociationInput = {
    id?: string
    name: string
    description: string
    price: number
    quantity?: number
    unit: string
    imageUrl: string
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateManyAssociationInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyAssociationInput = {
    id?: string
    type: string
    quantity: number
    productId: string
    clientId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LiveCreateManyAssociationInput = {
    id?: string
    name: string
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    purchasePrice?: number | null
  }

  export type ClientCreateManyAssociationInput = {
    id?: string
    name: string
    address: string
    tel: string
    createdAt?: Date | string
  }

  export type OperationCreateManyAssociationInput = {
    id?: string
    operationType: string
    amount: number
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    transactions?: TransactionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutTransactionsNestedInput
    client?: ClientUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    liveClients?: LiveClientUpdateManyWithoutLiveNestedInput
  }

  export type LiveUncheckedUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    liveClients?: LiveClientUncheckedUpdateManyWithoutLiveNestedInput
  }

  export type LiveUncheckedUpdateManyWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ClientUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveClients?: LiveClientUpdateManyWithoutClientNestedInput
    transactions?: TransactionUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveClients?: LiveClientUncheckedUpdateManyWithoutClientNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    operationType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationUncheckedUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    operationType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationUncheckedUpdateManyWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    operationType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyProductInput = {
    id?: string
    type: string
    quantity: number
    associationId?: string | null
    clientId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneWithoutTransactionsNestedInput
    client?: ClientUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    associationId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    associationId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    name: string
    description: string
    price: number
    quantity?: number
    unit: string
    imageUrl: string
    associationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneWithoutProductsNestedInput
    transactions?: TransactionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    associationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    associationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveClientCreateManyLiveInput = {
    id?: string
    clientId: string
    totalFacture?: number
    createdAt?: Date | string
  }

  export type LiveClientUpdateWithoutLiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalFacture?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutLiveClientsNestedInput
    orderItems?: OrderItemUpdateManyWithoutLiveClientNestedInput
  }

  export type LiveClientUncheckedUpdateWithoutLiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    totalFacture?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutLiveClientNestedInput
  }

  export type LiveClientUncheckedUpdateManyWithoutLiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    totalFacture?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveClientCreateManyClientInput = {
    id?: string
    liveId: string
    totalFacture?: number
    createdAt?: Date | string
  }

  export type TransactionCreateManyClientInput = {
    id?: string
    type: string
    quantity: number
    productId: string
    associationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LiveClientUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalFacture?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    live?: LiveUpdateOneRequiredWithoutLiveClientsNestedInput
    orderItems?: OrderItemUpdateManyWithoutLiveClientNestedInput
  }

  export type LiveClientUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    liveId?: StringFieldUpdateOperationsInput | string
    totalFacture?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutLiveClientNestedInput
  }

  export type LiveClientUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    liveId?: StringFieldUpdateOperationsInput | string
    totalFacture?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutTransactionsNestedInput
    association?: AssociationUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    associationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    associationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyLiveClientInput = {
    id?: string
    reference: string
    quantity: number
    unitPrice: number
    createdAt?: Date | string
    isDeliveredAndPaid?: boolean
  }

  export type OrderItemUpdateWithoutLiveClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeliveredAndPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderItemUncheckedUpdateWithoutLiveClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeliveredAndPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderItemUncheckedUpdateManyWithoutLiveClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeliveredAndPaid?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}