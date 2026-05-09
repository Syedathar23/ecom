
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SavedProduct
 * 
 */
export type SavedProduct = $Result.DefaultSelection<Prisma.$SavedProductPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedProduct`: Exposes CRUD operations for the **SavedProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedProducts
    * const savedProducts = await prisma.savedProduct.findMany()
    * ```
    */
  get savedProduct(): Prisma.SavedProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
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
    User: 'User',
    SavedProduct: 'SavedProduct',
    Product: 'Product'
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
      modelProps: "user" | "savedProduct" | "product"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SavedProduct: {
        payload: Prisma.$SavedProductPayload<ExtArgs>
        fields: Prisma.SavedProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>
          }
          findFirst: {
            args: Prisma.SavedProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>
          }
          findMany: {
            args: Prisma.SavedProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>[]
          }
          create: {
            args: Prisma.SavedProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>
          }
          createMany: {
            args: Prisma.SavedProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>[]
          }
          delete: {
            args: Prisma.SavedProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>
          }
          update: {
            args: Prisma.SavedProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>
          }
          deleteMany: {
            args: Prisma.SavedProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>[]
          }
          upsert: {
            args: Prisma.SavedProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>
          }
          aggregate: {
            args: Prisma.SavedProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedProduct>
          }
          groupBy: {
            args: Prisma.SavedProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedProductCountArgs<ExtArgs>
            result: $Utils.Optional<SavedProductCountAggregateOutputType> | number
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
    user?: UserOmit
    savedProduct?: SavedProductOmit
    product?: ProductOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    saved: number
    products: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saved?: boolean | UserCountOutputTypeCountSavedArgs
    products?: boolean | UserCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedProductWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    savedBy: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedBy?: boolean | ProductCountOutputTypeCountSavedByArgs
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
  export type ProductCountOutputTypeCountSavedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    stripe_customer_id: string | null
    isVerified: boolean | null
    accountVerificationToken: string | null
    accountVerificationTokenExpires: Date | null
    passwordChangeAt: Date | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
    profilePhoto: string | null
    role: string | null
    isBlocked: boolean | null
    isSubscribed: string | null
    isSubCanceled: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    stripe_customer_id: string | null
    isVerified: boolean | null
    accountVerificationToken: string | null
    accountVerificationTokenExpires: Date | null
    passwordChangeAt: Date | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
    profilePhoto: string | null
    role: string | null
    isBlocked: boolean | null
    isSubscribed: string | null
    isSubCanceled: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    stripe_customer_id: number
    subscriptions: number
    isVerified: number
    accountVerificationToken: number
    accountVerificationTokenExpires: number
    passwordChangeAt: number
    passwordResetToken: number
    passwordResetExpires: number
    profilePhoto: number
    role: number
    isBlocked: number
    isSubscribed: number
    isSubCanceled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    stripe_customer_id?: true
    isVerified?: true
    accountVerificationToken?: true
    accountVerificationTokenExpires?: true
    passwordChangeAt?: true
    passwordResetToken?: true
    passwordResetExpires?: true
    profilePhoto?: true
    role?: true
    isBlocked?: true
    isSubscribed?: true
    isSubCanceled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    stripe_customer_id?: true
    isVerified?: true
    accountVerificationToken?: true
    accountVerificationTokenExpires?: true
    passwordChangeAt?: true
    passwordResetToken?: true
    passwordResetExpires?: true
    profilePhoto?: true
    role?: true
    isBlocked?: true
    isSubscribed?: true
    isSubCanceled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    stripe_customer_id?: true
    subscriptions?: true
    isVerified?: true
    accountVerificationToken?: true
    accountVerificationTokenExpires?: true
    passwordChangeAt?: true
    passwordResetToken?: true
    passwordResetExpires?: true
    profilePhoto?: true
    role?: true
    isBlocked?: true
    isSubscribed?: true
    isSubCanceled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    firstName: string
    lastName: string
    stripe_customer_id: string | null
    subscriptions: JsonValue | null
    isVerified: boolean
    accountVerificationToken: string | null
    accountVerificationTokenExpires: Date | null
    passwordChangeAt: Date | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
    profilePhoto: string
    role: string
    isBlocked: boolean
    isSubscribed: string | null
    isSubCanceled: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    stripe_customer_id?: boolean
    subscriptions?: boolean
    isVerified?: boolean
    accountVerificationToken?: boolean
    accountVerificationTokenExpires?: boolean
    passwordChangeAt?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
    profilePhoto?: boolean
    role?: boolean
    isBlocked?: boolean
    isSubscribed?: boolean
    isSubCanceled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    saved?: boolean | User$savedArgs<ExtArgs>
    products?: boolean | User$productsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    stripe_customer_id?: boolean
    subscriptions?: boolean
    isVerified?: boolean
    accountVerificationToken?: boolean
    accountVerificationTokenExpires?: boolean
    passwordChangeAt?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
    profilePhoto?: boolean
    role?: boolean
    isBlocked?: boolean
    isSubscribed?: boolean
    isSubCanceled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    stripe_customer_id?: boolean
    subscriptions?: boolean
    isVerified?: boolean
    accountVerificationToken?: boolean
    accountVerificationTokenExpires?: boolean
    passwordChangeAt?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
    profilePhoto?: boolean
    role?: boolean
    isBlocked?: boolean
    isSubscribed?: boolean
    isSubCanceled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    stripe_customer_id?: boolean
    subscriptions?: boolean
    isVerified?: boolean
    accountVerificationToken?: boolean
    accountVerificationTokenExpires?: boolean
    passwordChangeAt?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
    profilePhoto?: boolean
    role?: boolean
    isBlocked?: boolean
    isSubscribed?: boolean
    isSubCanceled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "stripe_customer_id" | "subscriptions" | "isVerified" | "accountVerificationToken" | "accountVerificationTokenExpires" | "passwordChangeAt" | "passwordResetToken" | "passwordResetExpires" | "profilePhoto" | "role" | "isBlocked" | "isSubscribed" | "isSubCanceled" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saved?: boolean | User$savedArgs<ExtArgs>
    products?: boolean | User$productsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      saved: Prisma.$SavedProductPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      firstName: string
      lastName: string
      stripe_customer_id: string | null
      subscriptions: Prisma.JsonValue | null
      isVerified: boolean
      accountVerificationToken: string | null
      accountVerificationTokenExpires: Date | null
      passwordChangeAt: Date | null
      passwordResetToken: string | null
      passwordResetExpires: Date | null
      profilePhoto: string
      role: string
      isBlocked: boolean
      isSubscribed: string | null
      isSubCanceled: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    saved<T extends User$savedArgs<ExtArgs> = {}>(args?: Subset<T, User$savedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends User$productsArgs<ExtArgs> = {}>(args?: Subset<T, User$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly stripe_customer_id: FieldRef<"User", 'String'>
    readonly subscriptions: FieldRef<"User", 'Json'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly accountVerificationToken: FieldRef<"User", 'String'>
    readonly accountVerificationTokenExpires: FieldRef<"User", 'DateTime'>
    readonly passwordChangeAt: FieldRef<"User", 'DateTime'>
    readonly passwordResetToken: FieldRef<"User", 'String'>
    readonly passwordResetExpires: FieldRef<"User", 'DateTime'>
    readonly profilePhoto: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly isBlocked: FieldRef<"User", 'Boolean'>
    readonly isSubscribed: FieldRef<"User", 'String'>
    readonly isSubCanceled: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.saved
   */
  export type User$savedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    where?: SavedProductWhereInput
    orderBy?: SavedProductOrderByWithRelationInput | SavedProductOrderByWithRelationInput[]
    cursor?: SavedProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedProductScalarFieldEnum | SavedProductScalarFieldEnum[]
  }

  /**
   * User.products
   */
  export type User$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model SavedProduct
   */

  export type AggregateSavedProduct = {
    _count: SavedProductCountAggregateOutputType | null
    _avg: SavedProductAvgAggregateOutputType | null
    _sum: SavedProductSumAggregateOutputType | null
    _min: SavedProductMinAggregateOutputType | null
    _max: SavedProductMaxAggregateOutputType | null
  }

  export type SavedProductAvgAggregateOutputType = {
    userId: number | null
    productId: number | null
  }

  export type SavedProductSumAggregateOutputType = {
    userId: number | null
    productId: number | null
  }

  export type SavedProductMinAggregateOutputType = {
    userId: number | null
    productId: number | null
  }

  export type SavedProductMaxAggregateOutputType = {
    userId: number | null
    productId: number | null
  }

  export type SavedProductCountAggregateOutputType = {
    userId: number
    productId: number
    _all: number
  }


  export type SavedProductAvgAggregateInputType = {
    userId?: true
    productId?: true
  }

  export type SavedProductSumAggregateInputType = {
    userId?: true
    productId?: true
  }

  export type SavedProductMinAggregateInputType = {
    userId?: true
    productId?: true
  }

  export type SavedProductMaxAggregateInputType = {
    userId?: true
    productId?: true
  }

  export type SavedProductCountAggregateInputType = {
    userId?: true
    productId?: true
    _all?: true
  }

  export type SavedProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedProduct to aggregate.
     */
    where?: SavedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedProducts to fetch.
     */
    orderBy?: SavedProductOrderByWithRelationInput | SavedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedProducts
    **/
    _count?: true | SavedProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavedProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavedProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedProductMaxAggregateInputType
  }

  export type GetSavedProductAggregateType<T extends SavedProductAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedProduct[P]>
      : GetScalarType<T[P], AggregateSavedProduct[P]>
  }




  export type SavedProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedProductWhereInput
    orderBy?: SavedProductOrderByWithAggregationInput | SavedProductOrderByWithAggregationInput[]
    by: SavedProductScalarFieldEnum[] | SavedProductScalarFieldEnum
    having?: SavedProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedProductCountAggregateInputType | true
    _avg?: SavedProductAvgAggregateInputType
    _sum?: SavedProductSumAggregateInputType
    _min?: SavedProductMinAggregateInputType
    _max?: SavedProductMaxAggregateInputType
  }

  export type SavedProductGroupByOutputType = {
    userId: number
    productId: number
    _count: SavedProductCountAggregateOutputType | null
    _avg: SavedProductAvgAggregateOutputType | null
    _sum: SavedProductSumAggregateOutputType | null
    _min: SavedProductMinAggregateOutputType | null
    _max: SavedProductMaxAggregateOutputType | null
  }

  type GetSavedProductGroupByPayload<T extends SavedProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedProductGroupByOutputType[P]>
            : GetScalarType<T[P], SavedProductGroupByOutputType[P]>
        }
      >
    >


  export type SavedProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    productId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedProduct"]>

  export type SavedProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    productId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedProduct"]>

  export type SavedProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    productId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedProduct"]>

  export type SavedProductSelectScalar = {
    userId?: boolean
    productId?: boolean
  }

  export type SavedProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "productId", ExtArgs["result"]["savedProduct"]>
  export type SavedProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type SavedProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type SavedProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $SavedProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedProduct"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      productId: number
    }, ExtArgs["result"]["savedProduct"]>
    composites: {}
  }

  type SavedProductGetPayload<S extends boolean | null | undefined | SavedProductDefaultArgs> = $Result.GetResult<Prisma.$SavedProductPayload, S>

  type SavedProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedProductCountAggregateInputType | true
    }

  export interface SavedProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedProduct'], meta: { name: 'SavedProduct' } }
    /**
     * Find zero or one SavedProduct that matches the filter.
     * @param {SavedProductFindUniqueArgs} args - Arguments to find a SavedProduct
     * @example
     * // Get one SavedProduct
     * const savedProduct = await prisma.savedProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedProductFindUniqueArgs>(args: SelectSubset<T, SavedProductFindUniqueArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedProductFindUniqueOrThrowArgs} args - Arguments to find a SavedProduct
     * @example
     * // Get one SavedProduct
     * const savedProduct = await prisma.savedProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedProductFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProductFindFirstArgs} args - Arguments to find a SavedProduct
     * @example
     * // Get one SavedProduct
     * const savedProduct = await prisma.savedProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedProductFindFirstArgs>(args?: SelectSubset<T, SavedProductFindFirstArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProductFindFirstOrThrowArgs} args - Arguments to find a SavedProduct
     * @example
     * // Get one SavedProduct
     * const savedProduct = await prisma.savedProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedProductFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedProducts
     * const savedProducts = await prisma.savedProduct.findMany()
     * 
     * // Get first 10 SavedProducts
     * const savedProducts = await prisma.savedProduct.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const savedProductWithUserIdOnly = await prisma.savedProduct.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends SavedProductFindManyArgs>(args?: SelectSubset<T, SavedProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedProduct.
     * @param {SavedProductCreateArgs} args - Arguments to create a SavedProduct.
     * @example
     * // Create one SavedProduct
     * const SavedProduct = await prisma.savedProduct.create({
     *   data: {
     *     // ... data to create a SavedProduct
     *   }
     * })
     * 
     */
    create<T extends SavedProductCreateArgs>(args: SelectSubset<T, SavedProductCreateArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedProducts.
     * @param {SavedProductCreateManyArgs} args - Arguments to create many SavedProducts.
     * @example
     * // Create many SavedProducts
     * const savedProduct = await prisma.savedProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedProductCreateManyArgs>(args?: SelectSubset<T, SavedProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedProducts and returns the data saved in the database.
     * @param {SavedProductCreateManyAndReturnArgs} args - Arguments to create many SavedProducts.
     * @example
     * // Create many SavedProducts
     * const savedProduct = await prisma.savedProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedProducts and only return the `userId`
     * const savedProductWithUserIdOnly = await prisma.savedProduct.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedProductCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedProduct.
     * @param {SavedProductDeleteArgs} args - Arguments to delete one SavedProduct.
     * @example
     * // Delete one SavedProduct
     * const SavedProduct = await prisma.savedProduct.delete({
     *   where: {
     *     // ... filter to delete one SavedProduct
     *   }
     * })
     * 
     */
    delete<T extends SavedProductDeleteArgs>(args: SelectSubset<T, SavedProductDeleteArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedProduct.
     * @param {SavedProductUpdateArgs} args - Arguments to update one SavedProduct.
     * @example
     * // Update one SavedProduct
     * const savedProduct = await prisma.savedProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedProductUpdateArgs>(args: SelectSubset<T, SavedProductUpdateArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedProducts.
     * @param {SavedProductDeleteManyArgs} args - Arguments to filter SavedProducts to delete.
     * @example
     * // Delete a few SavedProducts
     * const { count } = await prisma.savedProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedProductDeleteManyArgs>(args?: SelectSubset<T, SavedProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedProducts
     * const savedProduct = await prisma.savedProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedProductUpdateManyArgs>(args: SelectSubset<T, SavedProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedProducts and returns the data updated in the database.
     * @param {SavedProductUpdateManyAndReturnArgs} args - Arguments to update many SavedProducts.
     * @example
     * // Update many SavedProducts
     * const savedProduct = await prisma.savedProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedProducts and only return the `userId`
     * const savedProductWithUserIdOnly = await prisma.savedProduct.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends SavedProductUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedProduct.
     * @param {SavedProductUpsertArgs} args - Arguments to update or create a SavedProduct.
     * @example
     * // Update or create a SavedProduct
     * const savedProduct = await prisma.savedProduct.upsert({
     *   create: {
     *     // ... data to create a SavedProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedProduct we want to update
     *   }
     * })
     */
    upsert<T extends SavedProductUpsertArgs>(args: SelectSubset<T, SavedProductUpsertArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProductCountArgs} args - Arguments to filter SavedProducts to count.
     * @example
     * // Count the number of SavedProducts
     * const count = await prisma.savedProduct.count({
     *   where: {
     *     // ... the filter for the SavedProducts we want to count
     *   }
     * })
    **/
    count<T extends SavedProductCountArgs>(
      args?: Subset<T, SavedProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavedProductAggregateArgs>(args: Subset<T, SavedProductAggregateArgs>): Prisma.PrismaPromise<GetSavedProductAggregateType<T>>

    /**
     * Group by SavedProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProductGroupByArgs} args - Group by arguments.
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
      T extends SavedProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedProductGroupByArgs['orderBy'] }
        : { orderBy?: SavedProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SavedProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedProduct model
   */
  readonly fields: SavedProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SavedProduct model
   */
  interface SavedProductFieldRefs {
    readonly userId: FieldRef<"SavedProduct", 'Int'>
    readonly productId: FieldRef<"SavedProduct", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SavedProduct findUnique
   */
  export type SavedProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * Filter, which SavedProduct to fetch.
     */
    where: SavedProductWhereUniqueInput
  }

  /**
   * SavedProduct findUniqueOrThrow
   */
  export type SavedProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * Filter, which SavedProduct to fetch.
     */
    where: SavedProductWhereUniqueInput
  }

  /**
   * SavedProduct findFirst
   */
  export type SavedProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * Filter, which SavedProduct to fetch.
     */
    where?: SavedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedProducts to fetch.
     */
    orderBy?: SavedProductOrderByWithRelationInput | SavedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedProducts.
     */
    cursor?: SavedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedProducts.
     */
    distinct?: SavedProductScalarFieldEnum | SavedProductScalarFieldEnum[]
  }

  /**
   * SavedProduct findFirstOrThrow
   */
  export type SavedProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * Filter, which SavedProduct to fetch.
     */
    where?: SavedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedProducts to fetch.
     */
    orderBy?: SavedProductOrderByWithRelationInput | SavedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedProducts.
     */
    cursor?: SavedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedProducts.
     */
    distinct?: SavedProductScalarFieldEnum | SavedProductScalarFieldEnum[]
  }

  /**
   * SavedProduct findMany
   */
  export type SavedProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * Filter, which SavedProducts to fetch.
     */
    where?: SavedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedProducts to fetch.
     */
    orderBy?: SavedProductOrderByWithRelationInput | SavedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedProducts.
     */
    cursor?: SavedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedProducts.
     */
    skip?: number
    distinct?: SavedProductScalarFieldEnum | SavedProductScalarFieldEnum[]
  }

  /**
   * SavedProduct create
   */
  export type SavedProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedProduct.
     */
    data: XOR<SavedProductCreateInput, SavedProductUncheckedCreateInput>
  }

  /**
   * SavedProduct createMany
   */
  export type SavedProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedProducts.
     */
    data: SavedProductCreateManyInput | SavedProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedProduct createManyAndReturn
   */
  export type SavedProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * The data used to create many SavedProducts.
     */
    data: SavedProductCreateManyInput | SavedProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedProduct update
   */
  export type SavedProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedProduct.
     */
    data: XOR<SavedProductUpdateInput, SavedProductUncheckedUpdateInput>
    /**
     * Choose, which SavedProduct to update.
     */
    where: SavedProductWhereUniqueInput
  }

  /**
   * SavedProduct updateMany
   */
  export type SavedProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedProducts.
     */
    data: XOR<SavedProductUpdateManyMutationInput, SavedProductUncheckedUpdateManyInput>
    /**
     * Filter which SavedProducts to update
     */
    where?: SavedProductWhereInput
    /**
     * Limit how many SavedProducts to update.
     */
    limit?: number
  }

  /**
   * SavedProduct updateManyAndReturn
   */
  export type SavedProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * The data used to update SavedProducts.
     */
    data: XOR<SavedProductUpdateManyMutationInput, SavedProductUncheckedUpdateManyInput>
    /**
     * Filter which SavedProducts to update
     */
    where?: SavedProductWhereInput
    /**
     * Limit how many SavedProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedProduct upsert
   */
  export type SavedProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedProduct to update in case it exists.
     */
    where: SavedProductWhereUniqueInput
    /**
     * In case the SavedProduct found by the `where` argument doesn't exist, create a new SavedProduct with this data.
     */
    create: XOR<SavedProductCreateInput, SavedProductUncheckedCreateInput>
    /**
     * In case the SavedProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedProductUpdateInput, SavedProductUncheckedUpdateInput>
  }

  /**
   * SavedProduct delete
   */
  export type SavedProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * Filter which SavedProduct to delete.
     */
    where: SavedProductWhereUniqueInput
  }

  /**
   * SavedProduct deleteMany
   */
  export type SavedProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedProducts to delete
     */
    where?: SavedProductWhereInput
    /**
     * Limit how many SavedProducts to delete.
     */
    limit?: number
  }

  /**
   * SavedProduct without action
   */
  export type SavedProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
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
    id: number | null
    priceOfGoods: number | null
    sellPrice: number | null
    competitivness: number | null
    userId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    priceOfGoods: number | null
    sellPrice: number | null
    competitivness: number | null
    userId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    description2: string | null
    description3: string | null
    descriptionHero: string | null
    adcopyFb1: string | null
    adcopyFb2: string | null
    adcopy1: string | null
    adcopy2: string | null
    adcopy3: string | null
    creative1: string | null
    creative2: string | null
    free: boolean | null
    priceOfGoods: number | null
    sellPrice: number | null
    aliexpressLink: string | null
    cjdropshippingLink: string | null
    competitorShop: string | null
    productAge: string | null
    popullarity: string | null
    competitivness: number | null
    bestPlatform: string | null
    category: string | null
    image1: string | null
    image2: string | null
    image3: string | null
    image4: string | null
    image5: string | null
    image6: string | null
    image7: string | null
    image8: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    description2: string | null
    description3: string | null
    descriptionHero: string | null
    adcopyFb1: string | null
    adcopyFb2: string | null
    adcopy1: string | null
    adcopy2: string | null
    adcopy3: string | null
    creative1: string | null
    creative2: string | null
    free: boolean | null
    priceOfGoods: number | null
    sellPrice: number | null
    aliexpressLink: string | null
    cjdropshippingLink: string | null
    competitorShop: string | null
    productAge: string | null
    popullarity: string | null
    competitivness: number | null
    bestPlatform: string | null
    category: string | null
    image1: string | null
    image2: string | null
    image3: string | null
    image4: string | null
    image5: string | null
    image6: string | null
    image7: string | null
    image8: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    title: number
    description: number
    description2: number
    description3: number
    descriptionHero: number
    adcopyFb1: number
    adcopyFb2: number
    adcopy1: number
    adcopy2: number
    adcopy3: number
    creative1: number
    creative2: number
    free: number
    priceOfGoods: number
    sellPrice: number
    aliexpressLink: number
    cjdropshippingLink: number
    competitorShop: number
    productAge: number
    popullarity: number
    competitivness: number
    bestPlatform: number
    category: number
    keywords: number
    image1: number
    image2: number
    image3: number
    image4: number
    image5: number
    image6: number
    image7: number
    image8: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    priceOfGoods?: true
    sellPrice?: true
    competitivness?: true
    userId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    priceOfGoods?: true
    sellPrice?: true
    competitivness?: true
    userId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    description2?: true
    description3?: true
    descriptionHero?: true
    adcopyFb1?: true
    adcopyFb2?: true
    adcopy1?: true
    adcopy2?: true
    adcopy3?: true
    creative1?: true
    creative2?: true
    free?: true
    priceOfGoods?: true
    sellPrice?: true
    aliexpressLink?: true
    cjdropshippingLink?: true
    competitorShop?: true
    productAge?: true
    popullarity?: true
    competitivness?: true
    bestPlatform?: true
    category?: true
    image1?: true
    image2?: true
    image3?: true
    image4?: true
    image5?: true
    image6?: true
    image7?: true
    image8?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    description2?: true
    description3?: true
    descriptionHero?: true
    adcopyFb1?: true
    adcopyFb2?: true
    adcopy1?: true
    adcopy2?: true
    adcopy3?: true
    creative1?: true
    creative2?: true
    free?: true
    priceOfGoods?: true
    sellPrice?: true
    aliexpressLink?: true
    cjdropshippingLink?: true
    competitorShop?: true
    productAge?: true
    popullarity?: true
    competitivness?: true
    bestPlatform?: true
    category?: true
    image1?: true
    image2?: true
    image3?: true
    image4?: true
    image5?: true
    image6?: true
    image7?: true
    image8?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    description2?: true
    description3?: true
    descriptionHero?: true
    adcopyFb1?: true
    adcopyFb2?: true
    adcopy1?: true
    adcopy2?: true
    adcopy3?: true
    creative1?: true
    creative2?: true
    free?: true
    priceOfGoods?: true
    sellPrice?: true
    aliexpressLink?: true
    cjdropshippingLink?: true
    competitorShop?: true
    productAge?: true
    popullarity?: true
    competitivness?: true
    bestPlatform?: true
    category?: true
    keywords?: true
    image1?: true
    image2?: true
    image3?: true
    image4?: true
    image5?: true
    image6?: true
    image7?: true
    image8?: true
    userId?: true
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
    id: number
    title: string | null
    description: string | null
    description2: string | null
    description3: string | null
    descriptionHero: string | null
    adcopyFb1: string | null
    adcopyFb2: string | null
    adcopy1: string | null
    adcopy2: string | null
    adcopy3: string | null
    creative1: string | null
    creative2: string | null
    free: boolean
    priceOfGoods: number | null
    sellPrice: number | null
    aliexpressLink: string | null
    cjdropshippingLink: string | null
    competitorShop: string | null
    productAge: string | null
    popullarity: string | null
    competitivness: number | null
    bestPlatform: string | null
    category: string
    keywords: string[]
    image1: string | null
    image2: string | null
    image3: string | null
    image4: string | null
    image5: string | null
    image6: string | null
    image7: string | null
    image8: string | null
    userId: number | null
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
    title?: boolean
    description?: boolean
    description2?: boolean
    description3?: boolean
    descriptionHero?: boolean
    adcopyFb1?: boolean
    adcopyFb2?: boolean
    adcopy1?: boolean
    adcopy2?: boolean
    adcopy3?: boolean
    creative1?: boolean
    creative2?: boolean
    free?: boolean
    priceOfGoods?: boolean
    sellPrice?: boolean
    aliexpressLink?: boolean
    cjdropshippingLink?: boolean
    competitorShop?: boolean
    productAge?: boolean
    popullarity?: boolean
    competitivness?: boolean
    bestPlatform?: boolean
    category?: boolean
    keywords?: boolean
    image1?: boolean
    image2?: boolean
    image3?: boolean
    image4?: boolean
    image5?: boolean
    image6?: boolean
    image7?: boolean
    image8?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Product$userArgs<ExtArgs>
    savedBy?: boolean | Product$savedByArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    description2?: boolean
    description3?: boolean
    descriptionHero?: boolean
    adcopyFb1?: boolean
    adcopyFb2?: boolean
    adcopy1?: boolean
    adcopy2?: boolean
    adcopy3?: boolean
    creative1?: boolean
    creative2?: boolean
    free?: boolean
    priceOfGoods?: boolean
    sellPrice?: boolean
    aliexpressLink?: boolean
    cjdropshippingLink?: boolean
    competitorShop?: boolean
    productAge?: boolean
    popullarity?: boolean
    competitivness?: boolean
    bestPlatform?: boolean
    category?: boolean
    keywords?: boolean
    image1?: boolean
    image2?: boolean
    image3?: boolean
    image4?: boolean
    image5?: boolean
    image6?: boolean
    image7?: boolean
    image8?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Product$userArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    description2?: boolean
    description3?: boolean
    descriptionHero?: boolean
    adcopyFb1?: boolean
    adcopyFb2?: boolean
    adcopy1?: boolean
    adcopy2?: boolean
    adcopy3?: boolean
    creative1?: boolean
    creative2?: boolean
    free?: boolean
    priceOfGoods?: boolean
    sellPrice?: boolean
    aliexpressLink?: boolean
    cjdropshippingLink?: boolean
    competitorShop?: boolean
    productAge?: boolean
    popullarity?: boolean
    competitivness?: boolean
    bestPlatform?: boolean
    category?: boolean
    keywords?: boolean
    image1?: boolean
    image2?: boolean
    image3?: boolean
    image4?: boolean
    image5?: boolean
    image6?: boolean
    image7?: boolean
    image8?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Product$userArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    description2?: boolean
    description3?: boolean
    descriptionHero?: boolean
    adcopyFb1?: boolean
    adcopyFb2?: boolean
    adcopy1?: boolean
    adcopy2?: boolean
    adcopy3?: boolean
    creative1?: boolean
    creative2?: boolean
    free?: boolean
    priceOfGoods?: boolean
    sellPrice?: boolean
    aliexpressLink?: boolean
    cjdropshippingLink?: boolean
    competitorShop?: boolean
    productAge?: boolean
    popullarity?: boolean
    competitivness?: boolean
    bestPlatform?: boolean
    category?: boolean
    keywords?: boolean
    image1?: boolean
    image2?: boolean
    image3?: boolean
    image4?: boolean
    image5?: boolean
    image6?: boolean
    image7?: boolean
    image8?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "description2" | "description3" | "descriptionHero" | "adcopyFb1" | "adcopyFb2" | "adcopy1" | "adcopy2" | "adcopy3" | "creative1" | "creative2" | "free" | "priceOfGoods" | "sellPrice" | "aliexpressLink" | "cjdropshippingLink" | "competitorShop" | "productAge" | "popullarity" | "competitivness" | "bestPlatform" | "category" | "keywords" | "image1" | "image2" | "image3" | "image4" | "image5" | "image6" | "image7" | "image8" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Product$userArgs<ExtArgs>
    savedBy?: boolean | Product$savedByArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Product$userArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Product$userArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      savedBy: Prisma.$SavedProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      description: string | null
      description2: string | null
      description3: string | null
      descriptionHero: string | null
      adcopyFb1: string | null
      adcopyFb2: string | null
      adcopy1: string | null
      adcopy2: string | null
      adcopy3: string | null
      creative1: string | null
      creative2: string | null
      free: boolean
      priceOfGoods: number | null
      sellPrice: number | null
      aliexpressLink: string | null
      cjdropshippingLink: string | null
      competitorShop: string | null
      productAge: string | null
      popullarity: string | null
      competitivness: number | null
      bestPlatform: string | null
      category: string
      keywords: string[]
      image1: string | null
      image2: string | null
      image3: string | null
      image4: string | null
      image5: string | null
      image6: string | null
      image7: string | null
      image8: string | null
      userId: number | null
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
    user<T extends Product$userArgs<ExtArgs> = {}>(args?: Subset<T, Product$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    savedBy<T extends Product$savedByArgs<ExtArgs> = {}>(args?: Subset<T, Product$savedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Product", 'Int'>
    readonly title: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly description2: FieldRef<"Product", 'String'>
    readonly description3: FieldRef<"Product", 'String'>
    readonly descriptionHero: FieldRef<"Product", 'String'>
    readonly adcopyFb1: FieldRef<"Product", 'String'>
    readonly adcopyFb2: FieldRef<"Product", 'String'>
    readonly adcopy1: FieldRef<"Product", 'String'>
    readonly adcopy2: FieldRef<"Product", 'String'>
    readonly adcopy3: FieldRef<"Product", 'String'>
    readonly creative1: FieldRef<"Product", 'String'>
    readonly creative2: FieldRef<"Product", 'String'>
    readonly free: FieldRef<"Product", 'Boolean'>
    readonly priceOfGoods: FieldRef<"Product", 'Float'>
    readonly sellPrice: FieldRef<"Product", 'Float'>
    readonly aliexpressLink: FieldRef<"Product", 'String'>
    readonly cjdropshippingLink: FieldRef<"Product", 'String'>
    readonly competitorShop: FieldRef<"Product", 'String'>
    readonly productAge: FieldRef<"Product", 'String'>
    readonly popullarity: FieldRef<"Product", 'String'>
    readonly competitivness: FieldRef<"Product", 'Int'>
    readonly bestPlatform: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly keywords: FieldRef<"Product", 'String[]'>
    readonly image1: FieldRef<"Product", 'String'>
    readonly image2: FieldRef<"Product", 'String'>
    readonly image3: FieldRef<"Product", 'String'>
    readonly image4: FieldRef<"Product", 'String'>
    readonly image5: FieldRef<"Product", 'String'>
    readonly image6: FieldRef<"Product", 'String'>
    readonly image7: FieldRef<"Product", 'String'>
    readonly image8: FieldRef<"Product", 'String'>
    readonly userId: FieldRef<"Product", 'Int'>
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
   * Product.user
   */
  export type Product$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Product.savedBy
   */
  export type Product$savedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    where?: SavedProductWhereInput
    orderBy?: SavedProductOrderByWithRelationInput | SavedProductOrderByWithRelationInput[]
    cursor?: SavedProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedProductScalarFieldEnum | SavedProductScalarFieldEnum[]
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    stripe_customer_id: 'stripe_customer_id',
    subscriptions: 'subscriptions',
    isVerified: 'isVerified',
    accountVerificationToken: 'accountVerificationToken',
    accountVerificationTokenExpires: 'accountVerificationTokenExpires',
    passwordChangeAt: 'passwordChangeAt',
    passwordResetToken: 'passwordResetToken',
    passwordResetExpires: 'passwordResetExpires',
    profilePhoto: 'profilePhoto',
    role: 'role',
    isBlocked: 'isBlocked',
    isSubscribed: 'isSubscribed',
    isSubCanceled: 'isSubCanceled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SavedProductScalarFieldEnum: {
    userId: 'userId',
    productId: 'productId'
  };

  export type SavedProductScalarFieldEnum = (typeof SavedProductScalarFieldEnum)[keyof typeof SavedProductScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    description2: 'description2',
    description3: 'description3',
    descriptionHero: 'descriptionHero',
    adcopyFb1: 'adcopyFb1',
    adcopyFb2: 'adcopyFb2',
    adcopy1: 'adcopy1',
    adcopy2: 'adcopy2',
    adcopy3: 'adcopy3',
    creative1: 'creative1',
    creative2: 'creative2',
    free: 'free',
    priceOfGoods: 'priceOfGoods',
    sellPrice: 'sellPrice',
    aliexpressLink: 'aliexpressLink',
    cjdropshippingLink: 'cjdropshippingLink',
    competitorShop: 'competitorShop',
    productAge: 'productAge',
    popullarity: 'popullarity',
    competitivness: 'competitivness',
    bestPlatform: 'bestPlatform',
    category: 'category',
    keywords: 'keywords',
    image1: 'image1',
    image2: 'image2',
    image3: 'image3',
    image4: 'image4',
    image5: 'image5',
    image6: 'image6',
    image7: 'image7',
    image8: 'image8',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    stripe_customer_id?: StringNullableFilter<"User"> | string | null
    subscriptions?: JsonNullableFilter<"User">
    isVerified?: BoolFilter<"User"> | boolean
    accountVerificationToken?: StringNullableFilter<"User"> | string | null
    accountVerificationTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    passwordChangeAt?: DateTimeNullableFilter<"User"> | Date | string | null
    passwordResetToken?: StringNullableFilter<"User"> | string | null
    passwordResetExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    profilePhoto?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    isBlocked?: BoolFilter<"User"> | boolean
    isSubscribed?: StringNullableFilter<"User"> | string | null
    isSubCanceled?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    saved?: SavedProductListRelationFilter
    products?: ProductListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    stripe_customer_id?: SortOrderInput | SortOrder
    subscriptions?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    accountVerificationToken?: SortOrderInput | SortOrder
    accountVerificationTokenExpires?: SortOrderInput | SortOrder
    passwordChangeAt?: SortOrderInput | SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetExpires?: SortOrderInput | SortOrder
    profilePhoto?: SortOrder
    role?: SortOrder
    isBlocked?: SortOrder
    isSubscribed?: SortOrderInput | SortOrder
    isSubCanceled?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    saved?: SavedProductOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    stripe_customer_id?: StringNullableFilter<"User"> | string | null
    subscriptions?: JsonNullableFilter<"User">
    isVerified?: BoolFilter<"User"> | boolean
    accountVerificationToken?: StringNullableFilter<"User"> | string | null
    accountVerificationTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    passwordChangeAt?: DateTimeNullableFilter<"User"> | Date | string | null
    passwordResetToken?: StringNullableFilter<"User"> | string | null
    passwordResetExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    profilePhoto?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    isBlocked?: BoolFilter<"User"> | boolean
    isSubscribed?: StringNullableFilter<"User"> | string | null
    isSubCanceled?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    saved?: SavedProductListRelationFilter
    products?: ProductListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    stripe_customer_id?: SortOrderInput | SortOrder
    subscriptions?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    accountVerificationToken?: SortOrderInput | SortOrder
    accountVerificationTokenExpires?: SortOrderInput | SortOrder
    passwordChangeAt?: SortOrderInput | SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetExpires?: SortOrderInput | SortOrder
    profilePhoto?: SortOrder
    role?: SortOrder
    isBlocked?: SortOrder
    isSubscribed?: SortOrderInput | SortOrder
    isSubCanceled?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    stripe_customer_id?: StringNullableWithAggregatesFilter<"User"> | string | null
    subscriptions?: JsonNullableWithAggregatesFilter<"User">
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    accountVerificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    accountVerificationTokenExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    passwordChangeAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    passwordResetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordResetExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    profilePhoto?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    isBlocked?: BoolWithAggregatesFilter<"User"> | boolean
    isSubscribed?: StringNullableWithAggregatesFilter<"User"> | string | null
    isSubCanceled?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SavedProductWhereInput = {
    AND?: SavedProductWhereInput | SavedProductWhereInput[]
    OR?: SavedProductWhereInput[]
    NOT?: SavedProductWhereInput | SavedProductWhereInput[]
    userId?: IntFilter<"SavedProduct"> | number
    productId?: IntFilter<"SavedProduct"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type SavedProductOrderByWithRelationInput = {
    userId?: SortOrder
    productId?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type SavedProductWhereUniqueInput = Prisma.AtLeast<{
    userId_productId?: SavedProductUserIdProductIdCompoundUniqueInput
    AND?: SavedProductWhereInput | SavedProductWhereInput[]
    OR?: SavedProductWhereInput[]
    NOT?: SavedProductWhereInput | SavedProductWhereInput[]
    userId?: IntFilter<"SavedProduct"> | number
    productId?: IntFilter<"SavedProduct"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "userId_productId">

  export type SavedProductOrderByWithAggregationInput = {
    userId?: SortOrder
    productId?: SortOrder
    _count?: SavedProductCountOrderByAggregateInput
    _avg?: SavedProductAvgOrderByAggregateInput
    _max?: SavedProductMaxOrderByAggregateInput
    _min?: SavedProductMinOrderByAggregateInput
    _sum?: SavedProductSumOrderByAggregateInput
  }

  export type SavedProductScalarWhereWithAggregatesInput = {
    AND?: SavedProductScalarWhereWithAggregatesInput | SavedProductScalarWhereWithAggregatesInput[]
    OR?: SavedProductScalarWhereWithAggregatesInput[]
    NOT?: SavedProductScalarWhereWithAggregatesInput | SavedProductScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"SavedProduct"> | number
    productId?: IntWithAggregatesFilter<"SavedProduct"> | number
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    title?: StringNullableFilter<"Product"> | string | null
    description?: StringNullableFilter<"Product"> | string | null
    description2?: StringNullableFilter<"Product"> | string | null
    description3?: StringNullableFilter<"Product"> | string | null
    descriptionHero?: StringNullableFilter<"Product"> | string | null
    adcopyFb1?: StringNullableFilter<"Product"> | string | null
    adcopyFb2?: StringNullableFilter<"Product"> | string | null
    adcopy1?: StringNullableFilter<"Product"> | string | null
    adcopy2?: StringNullableFilter<"Product"> | string | null
    adcopy3?: StringNullableFilter<"Product"> | string | null
    creative1?: StringNullableFilter<"Product"> | string | null
    creative2?: StringNullableFilter<"Product"> | string | null
    free?: BoolFilter<"Product"> | boolean
    priceOfGoods?: FloatNullableFilter<"Product"> | number | null
    sellPrice?: FloatNullableFilter<"Product"> | number | null
    aliexpressLink?: StringNullableFilter<"Product"> | string | null
    cjdropshippingLink?: StringNullableFilter<"Product"> | string | null
    competitorShop?: StringNullableFilter<"Product"> | string | null
    productAge?: StringNullableFilter<"Product"> | string | null
    popullarity?: StringNullableFilter<"Product"> | string | null
    competitivness?: IntNullableFilter<"Product"> | number | null
    bestPlatform?: StringNullableFilter<"Product"> | string | null
    category?: StringFilter<"Product"> | string
    keywords?: StringNullableListFilter<"Product">
    image1?: StringNullableFilter<"Product"> | string | null
    image2?: StringNullableFilter<"Product"> | string | null
    image3?: StringNullableFilter<"Product"> | string | null
    image4?: StringNullableFilter<"Product"> | string | null
    image5?: StringNullableFilter<"Product"> | string | null
    image6?: StringNullableFilter<"Product"> | string | null
    image7?: StringNullableFilter<"Product"> | string | null
    image8?: StringNullableFilter<"Product"> | string | null
    userId?: IntNullableFilter<"Product"> | number | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    savedBy?: SavedProductListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    description2?: SortOrderInput | SortOrder
    description3?: SortOrderInput | SortOrder
    descriptionHero?: SortOrderInput | SortOrder
    adcopyFb1?: SortOrderInput | SortOrder
    adcopyFb2?: SortOrderInput | SortOrder
    adcopy1?: SortOrderInput | SortOrder
    adcopy2?: SortOrderInput | SortOrder
    adcopy3?: SortOrderInput | SortOrder
    creative1?: SortOrderInput | SortOrder
    creative2?: SortOrderInput | SortOrder
    free?: SortOrder
    priceOfGoods?: SortOrderInput | SortOrder
    sellPrice?: SortOrderInput | SortOrder
    aliexpressLink?: SortOrderInput | SortOrder
    cjdropshippingLink?: SortOrderInput | SortOrder
    competitorShop?: SortOrderInput | SortOrder
    productAge?: SortOrderInput | SortOrder
    popullarity?: SortOrderInput | SortOrder
    competitivness?: SortOrderInput | SortOrder
    bestPlatform?: SortOrderInput | SortOrder
    category?: SortOrder
    keywords?: SortOrder
    image1?: SortOrderInput | SortOrder
    image2?: SortOrderInput | SortOrder
    image3?: SortOrderInput | SortOrder
    image4?: SortOrderInput | SortOrder
    image5?: SortOrderInput | SortOrder
    image6?: SortOrderInput | SortOrder
    image7?: SortOrderInput | SortOrder
    image8?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    savedBy?: SavedProductOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    title?: StringNullableFilter<"Product"> | string | null
    description?: StringNullableFilter<"Product"> | string | null
    description2?: StringNullableFilter<"Product"> | string | null
    description3?: StringNullableFilter<"Product"> | string | null
    descriptionHero?: StringNullableFilter<"Product"> | string | null
    adcopyFb1?: StringNullableFilter<"Product"> | string | null
    adcopyFb2?: StringNullableFilter<"Product"> | string | null
    adcopy1?: StringNullableFilter<"Product"> | string | null
    adcopy2?: StringNullableFilter<"Product"> | string | null
    adcopy3?: StringNullableFilter<"Product"> | string | null
    creative1?: StringNullableFilter<"Product"> | string | null
    creative2?: StringNullableFilter<"Product"> | string | null
    free?: BoolFilter<"Product"> | boolean
    priceOfGoods?: FloatNullableFilter<"Product"> | number | null
    sellPrice?: FloatNullableFilter<"Product"> | number | null
    aliexpressLink?: StringNullableFilter<"Product"> | string | null
    cjdropshippingLink?: StringNullableFilter<"Product"> | string | null
    competitorShop?: StringNullableFilter<"Product"> | string | null
    productAge?: StringNullableFilter<"Product"> | string | null
    popullarity?: StringNullableFilter<"Product"> | string | null
    competitivness?: IntNullableFilter<"Product"> | number | null
    bestPlatform?: StringNullableFilter<"Product"> | string | null
    category?: StringFilter<"Product"> | string
    keywords?: StringNullableListFilter<"Product">
    image1?: StringNullableFilter<"Product"> | string | null
    image2?: StringNullableFilter<"Product"> | string | null
    image3?: StringNullableFilter<"Product"> | string | null
    image4?: StringNullableFilter<"Product"> | string | null
    image5?: StringNullableFilter<"Product"> | string | null
    image6?: StringNullableFilter<"Product"> | string | null
    image7?: StringNullableFilter<"Product"> | string | null
    image8?: StringNullableFilter<"Product"> | string | null
    userId?: IntNullableFilter<"Product"> | number | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    savedBy?: SavedProductListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    description2?: SortOrderInput | SortOrder
    description3?: SortOrderInput | SortOrder
    descriptionHero?: SortOrderInput | SortOrder
    adcopyFb1?: SortOrderInput | SortOrder
    adcopyFb2?: SortOrderInput | SortOrder
    adcopy1?: SortOrderInput | SortOrder
    adcopy2?: SortOrderInput | SortOrder
    adcopy3?: SortOrderInput | SortOrder
    creative1?: SortOrderInput | SortOrder
    creative2?: SortOrderInput | SortOrder
    free?: SortOrder
    priceOfGoods?: SortOrderInput | SortOrder
    sellPrice?: SortOrderInput | SortOrder
    aliexpressLink?: SortOrderInput | SortOrder
    cjdropshippingLink?: SortOrderInput | SortOrder
    competitorShop?: SortOrderInput | SortOrder
    productAge?: SortOrderInput | SortOrder
    popullarity?: SortOrderInput | SortOrder
    competitivness?: SortOrderInput | SortOrder
    bestPlatform?: SortOrderInput | SortOrder
    category?: SortOrder
    keywords?: SortOrder
    image1?: SortOrderInput | SortOrder
    image2?: SortOrderInput | SortOrder
    image3?: SortOrderInput | SortOrder
    image4?: SortOrderInput | SortOrder
    image5?: SortOrderInput | SortOrder
    image6?: SortOrderInput | SortOrder
    image7?: SortOrderInput | SortOrder
    image8?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
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
    id?: IntWithAggregatesFilter<"Product"> | number
    title?: StringNullableWithAggregatesFilter<"Product"> | string | null
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    description2?: StringNullableWithAggregatesFilter<"Product"> | string | null
    description3?: StringNullableWithAggregatesFilter<"Product"> | string | null
    descriptionHero?: StringNullableWithAggregatesFilter<"Product"> | string | null
    adcopyFb1?: StringNullableWithAggregatesFilter<"Product"> | string | null
    adcopyFb2?: StringNullableWithAggregatesFilter<"Product"> | string | null
    adcopy1?: StringNullableWithAggregatesFilter<"Product"> | string | null
    adcopy2?: StringNullableWithAggregatesFilter<"Product"> | string | null
    adcopy3?: StringNullableWithAggregatesFilter<"Product"> | string | null
    creative1?: StringNullableWithAggregatesFilter<"Product"> | string | null
    creative2?: StringNullableWithAggregatesFilter<"Product"> | string | null
    free?: BoolWithAggregatesFilter<"Product"> | boolean
    priceOfGoods?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    sellPrice?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    aliexpressLink?: StringNullableWithAggregatesFilter<"Product"> | string | null
    cjdropshippingLink?: StringNullableWithAggregatesFilter<"Product"> | string | null
    competitorShop?: StringNullableWithAggregatesFilter<"Product"> | string | null
    productAge?: StringNullableWithAggregatesFilter<"Product"> | string | null
    popullarity?: StringNullableWithAggregatesFilter<"Product"> | string | null
    competitivness?: IntNullableWithAggregatesFilter<"Product"> | number | null
    bestPlatform?: StringNullableWithAggregatesFilter<"Product"> | string | null
    category?: StringWithAggregatesFilter<"Product"> | string
    keywords?: StringNullableListFilter<"Product">
    image1?: StringNullableWithAggregatesFilter<"Product"> | string | null
    image2?: StringNullableWithAggregatesFilter<"Product"> | string | null
    image3?: StringNullableWithAggregatesFilter<"Product"> | string | null
    image4?: StringNullableWithAggregatesFilter<"Product"> | string | null
    image5?: StringNullableWithAggregatesFilter<"Product"> | string | null
    image6?: StringNullableWithAggregatesFilter<"Product"> | string | null
    image7?: StringNullableWithAggregatesFilter<"Product"> | string | null
    image8?: StringNullableWithAggregatesFilter<"Product"> | string | null
    userId?: IntNullableWithAggregatesFilter<"Product"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    firstName: string
    lastName: string
    stripe_customer_id?: string | null
    subscriptions?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: boolean
    accountVerificationToken?: string | null
    accountVerificationTokenExpires?: Date | string | null
    passwordChangeAt?: Date | string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    profilePhoto?: string
    role?: string
    isBlocked?: boolean
    isSubscribed?: string | null
    isSubCanceled?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    saved?: SavedProductCreateNestedManyWithoutUserInput
    products?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    firstName: string
    lastName: string
    stripe_customer_id?: string | null
    subscriptions?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: boolean
    accountVerificationToken?: string | null
    accountVerificationTokenExpires?: Date | string | null
    passwordChangeAt?: Date | string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    profilePhoto?: string
    role?: string
    isBlocked?: boolean
    isSubscribed?: string | null
    isSubCanceled?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    saved?: SavedProductUncheckedCreateNestedManyWithoutUserInput
    products?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    stripe_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptions?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accountVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    accountVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePhoto?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isSubscribed?: NullableStringFieldUpdateOperationsInput | string | null
    isSubCanceled?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saved?: SavedProductUpdateManyWithoutUserNestedInput
    products?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    stripe_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptions?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accountVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    accountVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePhoto?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isSubscribed?: NullableStringFieldUpdateOperationsInput | string | null
    isSubCanceled?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saved?: SavedProductUncheckedUpdateManyWithoutUserNestedInput
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    firstName: string
    lastName: string
    stripe_customer_id?: string | null
    subscriptions?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: boolean
    accountVerificationToken?: string | null
    accountVerificationTokenExpires?: Date | string | null
    passwordChangeAt?: Date | string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    profilePhoto?: string
    role?: string
    isBlocked?: boolean
    isSubscribed?: string | null
    isSubCanceled?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    stripe_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptions?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accountVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    accountVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePhoto?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isSubscribed?: NullableStringFieldUpdateOperationsInput | string | null
    isSubCanceled?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    stripe_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptions?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accountVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    accountVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePhoto?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isSubscribed?: NullableStringFieldUpdateOperationsInput | string | null
    isSubCanceled?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedProductCreateInput = {
    user: UserCreateNestedOneWithoutSavedInput
    product: ProductCreateNestedOneWithoutSavedByInput
  }

  export type SavedProductUncheckedCreateInput = {
    userId: number
    productId: number
  }

  export type SavedProductUpdateInput = {
    user?: UserUpdateOneRequiredWithoutSavedNestedInput
    product?: ProductUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type SavedProductUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type SavedProductCreateManyInput = {
    userId: number
    productId: number
  }

  export type SavedProductUpdateManyMutationInput = {

  }

  export type SavedProductUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateInput = {
    title?: string | null
    description?: string | null
    description2?: string | null
    description3?: string | null
    descriptionHero?: string | null
    adcopyFb1?: string | null
    adcopyFb2?: string | null
    adcopy1?: string | null
    adcopy2?: string | null
    adcopy3?: string | null
    creative1?: string | null
    creative2?: string | null
    free?: boolean
    priceOfGoods?: number | null
    sellPrice?: number | null
    aliexpressLink?: string | null
    cjdropshippingLink?: string | null
    competitorShop?: string | null
    productAge?: string | null
    popullarity?: string | null
    competitivness?: number | null
    bestPlatform?: string | null
    category?: string
    keywords?: ProductCreatekeywordsInput | string[]
    image1?: string | null
    image2?: string | null
    image3?: string | null
    image4?: string | null
    image5?: string | null
    image6?: string | null
    image7?: string | null
    image8?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutProductsInput
    savedBy?: SavedProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    title?: string | null
    description?: string | null
    description2?: string | null
    description3?: string | null
    descriptionHero?: string | null
    adcopyFb1?: string | null
    adcopyFb2?: string | null
    adcopy1?: string | null
    adcopy2?: string | null
    adcopy3?: string | null
    creative1?: string | null
    creative2?: string | null
    free?: boolean
    priceOfGoods?: number | null
    sellPrice?: number | null
    aliexpressLink?: string | null
    cjdropshippingLink?: string | null
    competitorShop?: string | null
    productAge?: string | null
    popullarity?: string | null
    competitivness?: number | null
    bestPlatform?: string | null
    category?: string
    keywords?: ProductCreatekeywordsInput | string[]
    image1?: string | null
    image2?: string | null
    image3?: string | null
    image4?: string | null
    image5?: string | null
    image6?: string | null
    image7?: string | null
    image8?: string | null
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    savedBy?: SavedProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description2?: NullableStringFieldUpdateOperationsInput | string | null
    description3?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionHero?: NullableStringFieldUpdateOperationsInput | string | null
    adcopyFb1?: NullableStringFieldUpdateOperationsInput | string | null
    adcopyFb2?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy1?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy2?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy3?: NullableStringFieldUpdateOperationsInput | string | null
    creative1?: NullableStringFieldUpdateOperationsInput | string | null
    creative2?: NullableStringFieldUpdateOperationsInput | string | null
    free?: BoolFieldUpdateOperationsInput | boolean
    priceOfGoods?: NullableFloatFieldUpdateOperationsInput | number | null
    sellPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    aliexpressLink?: NullableStringFieldUpdateOperationsInput | string | null
    cjdropshippingLink?: NullableStringFieldUpdateOperationsInput | string | null
    competitorShop?: NullableStringFieldUpdateOperationsInput | string | null
    productAge?: NullableStringFieldUpdateOperationsInput | string | null
    popullarity?: NullableStringFieldUpdateOperationsInput | string | null
    competitivness?: NullableIntFieldUpdateOperationsInput | number | null
    bestPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    keywords?: ProductUpdatekeywordsInput | string[]
    image1?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    image5?: NullableStringFieldUpdateOperationsInput | string | null
    image6?: NullableStringFieldUpdateOperationsInput | string | null
    image7?: NullableStringFieldUpdateOperationsInput | string | null
    image8?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutProductsNestedInput
    savedBy?: SavedProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description2?: NullableStringFieldUpdateOperationsInput | string | null
    description3?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionHero?: NullableStringFieldUpdateOperationsInput | string | null
    adcopyFb1?: NullableStringFieldUpdateOperationsInput | string | null
    adcopyFb2?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy1?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy2?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy3?: NullableStringFieldUpdateOperationsInput | string | null
    creative1?: NullableStringFieldUpdateOperationsInput | string | null
    creative2?: NullableStringFieldUpdateOperationsInput | string | null
    free?: BoolFieldUpdateOperationsInput | boolean
    priceOfGoods?: NullableFloatFieldUpdateOperationsInput | number | null
    sellPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    aliexpressLink?: NullableStringFieldUpdateOperationsInput | string | null
    cjdropshippingLink?: NullableStringFieldUpdateOperationsInput | string | null
    competitorShop?: NullableStringFieldUpdateOperationsInput | string | null
    productAge?: NullableStringFieldUpdateOperationsInput | string | null
    popullarity?: NullableStringFieldUpdateOperationsInput | string | null
    competitivness?: NullableIntFieldUpdateOperationsInput | number | null
    bestPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    keywords?: ProductUpdatekeywordsInput | string[]
    image1?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    image5?: NullableStringFieldUpdateOperationsInput | string | null
    image6?: NullableStringFieldUpdateOperationsInput | string | null
    image7?: NullableStringFieldUpdateOperationsInput | string | null
    image8?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedBy?: SavedProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    title?: string | null
    description?: string | null
    description2?: string | null
    description3?: string | null
    descriptionHero?: string | null
    adcopyFb1?: string | null
    adcopyFb2?: string | null
    adcopy1?: string | null
    adcopy2?: string | null
    adcopy3?: string | null
    creative1?: string | null
    creative2?: string | null
    free?: boolean
    priceOfGoods?: number | null
    sellPrice?: number | null
    aliexpressLink?: string | null
    cjdropshippingLink?: string | null
    competitorShop?: string | null
    productAge?: string | null
    popullarity?: string | null
    competitivness?: number | null
    bestPlatform?: string | null
    category?: string
    keywords?: ProductCreatekeywordsInput | string[]
    image1?: string | null
    image2?: string | null
    image3?: string | null
    image4?: string | null
    image5?: string | null
    image6?: string | null
    image7?: string | null
    image8?: string | null
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description2?: NullableStringFieldUpdateOperationsInput | string | null
    description3?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionHero?: NullableStringFieldUpdateOperationsInput | string | null
    adcopyFb1?: NullableStringFieldUpdateOperationsInput | string | null
    adcopyFb2?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy1?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy2?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy3?: NullableStringFieldUpdateOperationsInput | string | null
    creative1?: NullableStringFieldUpdateOperationsInput | string | null
    creative2?: NullableStringFieldUpdateOperationsInput | string | null
    free?: BoolFieldUpdateOperationsInput | boolean
    priceOfGoods?: NullableFloatFieldUpdateOperationsInput | number | null
    sellPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    aliexpressLink?: NullableStringFieldUpdateOperationsInput | string | null
    cjdropshippingLink?: NullableStringFieldUpdateOperationsInput | string | null
    competitorShop?: NullableStringFieldUpdateOperationsInput | string | null
    productAge?: NullableStringFieldUpdateOperationsInput | string | null
    popullarity?: NullableStringFieldUpdateOperationsInput | string | null
    competitivness?: NullableIntFieldUpdateOperationsInput | number | null
    bestPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    keywords?: ProductUpdatekeywordsInput | string[]
    image1?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    image5?: NullableStringFieldUpdateOperationsInput | string | null
    image6?: NullableStringFieldUpdateOperationsInput | string | null
    image7?: NullableStringFieldUpdateOperationsInput | string | null
    image8?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description2?: NullableStringFieldUpdateOperationsInput | string | null
    description3?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionHero?: NullableStringFieldUpdateOperationsInput | string | null
    adcopyFb1?: NullableStringFieldUpdateOperationsInput | string | null
    adcopyFb2?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy1?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy2?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy3?: NullableStringFieldUpdateOperationsInput | string | null
    creative1?: NullableStringFieldUpdateOperationsInput | string | null
    creative2?: NullableStringFieldUpdateOperationsInput | string | null
    free?: BoolFieldUpdateOperationsInput | boolean
    priceOfGoods?: NullableFloatFieldUpdateOperationsInput | number | null
    sellPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    aliexpressLink?: NullableStringFieldUpdateOperationsInput | string | null
    cjdropshippingLink?: NullableStringFieldUpdateOperationsInput | string | null
    competitorShop?: NullableStringFieldUpdateOperationsInput | string | null
    productAge?: NullableStringFieldUpdateOperationsInput | string | null
    popullarity?: NullableStringFieldUpdateOperationsInput | string | null
    competitivness?: NullableIntFieldUpdateOperationsInput | number | null
    bestPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    keywords?: ProductUpdatekeywordsInput | string[]
    image1?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    image5?: NullableStringFieldUpdateOperationsInput | string | null
    image6?: NullableStringFieldUpdateOperationsInput | string | null
    image7?: NullableStringFieldUpdateOperationsInput | string | null
    image8?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type SavedProductListRelationFilter = {
    every?: SavedProductWhereInput
    some?: SavedProductWhereInput
    none?: SavedProductWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SavedProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    stripe_customer_id?: SortOrder
    subscriptions?: SortOrder
    isVerified?: SortOrder
    accountVerificationToken?: SortOrder
    accountVerificationTokenExpires?: SortOrder
    passwordChangeAt?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpires?: SortOrder
    profilePhoto?: SortOrder
    role?: SortOrder
    isBlocked?: SortOrder
    isSubscribed?: SortOrder
    isSubCanceled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    stripe_customer_id?: SortOrder
    isVerified?: SortOrder
    accountVerificationToken?: SortOrder
    accountVerificationTokenExpires?: SortOrder
    passwordChangeAt?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpires?: SortOrder
    profilePhoto?: SortOrder
    role?: SortOrder
    isBlocked?: SortOrder
    isSubscribed?: SortOrder
    isSubCanceled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    stripe_customer_id?: SortOrder
    isVerified?: SortOrder
    accountVerificationToken?: SortOrder
    accountVerificationTokenExpires?: SortOrder
    passwordChangeAt?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpires?: SortOrder
    profilePhoto?: SortOrder
    role?: SortOrder
    isBlocked?: SortOrder
    isSubscribed?: SortOrder
    isSubCanceled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type SavedProductUserIdProductIdCompoundUniqueInput = {
    userId: number
    productId: number
  }

  export type SavedProductCountOrderByAggregateInput = {
    userId?: SortOrder
    productId?: SortOrder
  }

  export type SavedProductAvgOrderByAggregateInput = {
    userId?: SortOrder
    productId?: SortOrder
  }

  export type SavedProductMaxOrderByAggregateInput = {
    userId?: SortOrder
    productId?: SortOrder
  }

  export type SavedProductMinOrderByAggregateInput = {
    userId?: SortOrder
    productId?: SortOrder
  }

  export type SavedProductSumOrderByAggregateInput = {
    userId?: SortOrder
    productId?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    description2?: SortOrder
    description3?: SortOrder
    descriptionHero?: SortOrder
    adcopyFb1?: SortOrder
    adcopyFb2?: SortOrder
    adcopy1?: SortOrder
    adcopy2?: SortOrder
    adcopy3?: SortOrder
    creative1?: SortOrder
    creative2?: SortOrder
    free?: SortOrder
    priceOfGoods?: SortOrder
    sellPrice?: SortOrder
    aliexpressLink?: SortOrder
    cjdropshippingLink?: SortOrder
    competitorShop?: SortOrder
    productAge?: SortOrder
    popullarity?: SortOrder
    competitivness?: SortOrder
    bestPlatform?: SortOrder
    category?: SortOrder
    keywords?: SortOrder
    image1?: SortOrder
    image2?: SortOrder
    image3?: SortOrder
    image4?: SortOrder
    image5?: SortOrder
    image6?: SortOrder
    image7?: SortOrder
    image8?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    priceOfGoods?: SortOrder
    sellPrice?: SortOrder
    competitivness?: SortOrder
    userId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    description2?: SortOrder
    description3?: SortOrder
    descriptionHero?: SortOrder
    adcopyFb1?: SortOrder
    adcopyFb2?: SortOrder
    adcopy1?: SortOrder
    adcopy2?: SortOrder
    adcopy3?: SortOrder
    creative1?: SortOrder
    creative2?: SortOrder
    free?: SortOrder
    priceOfGoods?: SortOrder
    sellPrice?: SortOrder
    aliexpressLink?: SortOrder
    cjdropshippingLink?: SortOrder
    competitorShop?: SortOrder
    productAge?: SortOrder
    popullarity?: SortOrder
    competitivness?: SortOrder
    bestPlatform?: SortOrder
    category?: SortOrder
    image1?: SortOrder
    image2?: SortOrder
    image3?: SortOrder
    image4?: SortOrder
    image5?: SortOrder
    image6?: SortOrder
    image7?: SortOrder
    image8?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    description2?: SortOrder
    description3?: SortOrder
    descriptionHero?: SortOrder
    adcopyFb1?: SortOrder
    adcopyFb2?: SortOrder
    adcopy1?: SortOrder
    adcopy2?: SortOrder
    adcopy3?: SortOrder
    creative1?: SortOrder
    creative2?: SortOrder
    free?: SortOrder
    priceOfGoods?: SortOrder
    sellPrice?: SortOrder
    aliexpressLink?: SortOrder
    cjdropshippingLink?: SortOrder
    competitorShop?: SortOrder
    productAge?: SortOrder
    popullarity?: SortOrder
    competitivness?: SortOrder
    bestPlatform?: SortOrder
    category?: SortOrder
    image1?: SortOrder
    image2?: SortOrder
    image3?: SortOrder
    image4?: SortOrder
    image5?: SortOrder
    image6?: SortOrder
    image7?: SortOrder
    image8?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    priceOfGoods?: SortOrder
    sellPrice?: SortOrder
    competitivness?: SortOrder
    userId?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SavedProductCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedProductCreateWithoutUserInput, SavedProductUncheckedCreateWithoutUserInput> | SavedProductCreateWithoutUserInput[] | SavedProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutUserInput | SavedProductCreateOrConnectWithoutUserInput[]
    createMany?: SavedProductCreateManyUserInputEnvelope
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type SavedProductUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedProductCreateWithoutUserInput, SavedProductUncheckedCreateWithoutUserInput> | SavedProductCreateWithoutUserInput[] | SavedProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutUserInput | SavedProductCreateOrConnectWithoutUserInput[]
    createMany?: SavedProductCreateManyUserInputEnvelope
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SavedProductUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedProductCreateWithoutUserInput, SavedProductUncheckedCreateWithoutUserInput> | SavedProductCreateWithoutUserInput[] | SavedProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutUserInput | SavedProductCreateOrConnectWithoutUserInput[]
    upsert?: SavedProductUpsertWithWhereUniqueWithoutUserInput | SavedProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedProductCreateManyUserInputEnvelope
    set?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    disconnect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    delete?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    update?: SavedProductUpdateWithWhereUniqueWithoutUserInput | SavedProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedProductUpdateManyWithWhereWithoutUserInput | SavedProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedProductScalarWhereInput | SavedProductScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SavedProductUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedProductCreateWithoutUserInput, SavedProductUncheckedCreateWithoutUserInput> | SavedProductCreateWithoutUserInput[] | SavedProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutUserInput | SavedProductCreateOrConnectWithoutUserInput[]
    upsert?: SavedProductUpsertWithWhereUniqueWithoutUserInput | SavedProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedProductCreateManyUserInputEnvelope
    set?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    disconnect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    delete?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    update?: SavedProductUpdateWithWhereUniqueWithoutUserInput | SavedProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedProductUpdateManyWithWhereWithoutUserInput | SavedProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedProductScalarWhereInput | SavedProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSavedInput = {
    create?: XOR<UserCreateWithoutSavedInput, UserUncheckedCreateWithoutSavedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutSavedByInput = {
    create?: XOR<ProductCreateWithoutSavedByInput, ProductUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSavedByInput
    connect?: ProductWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedNestedInput = {
    create?: XOR<UserCreateWithoutSavedInput, UserUncheckedCreateWithoutSavedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedInput
    upsert?: UserUpsertWithoutSavedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedInput, UserUpdateWithoutSavedInput>, UserUncheckedUpdateWithoutSavedInput>
  }

  export type ProductUpdateOneRequiredWithoutSavedByNestedInput = {
    create?: XOR<ProductCreateWithoutSavedByInput, ProductUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSavedByInput
    upsert?: ProductUpsertWithoutSavedByInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSavedByInput, ProductUpdateWithoutSavedByInput>, ProductUncheckedUpdateWithoutSavedByInput>
  }

  export type ProductCreatekeywordsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutProductsInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput
    connect?: UserWhereUniqueInput
  }

  export type SavedProductCreateNestedManyWithoutProductInput = {
    create?: XOR<SavedProductCreateWithoutProductInput, SavedProductUncheckedCreateWithoutProductInput> | SavedProductCreateWithoutProductInput[] | SavedProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutProductInput | SavedProductCreateOrConnectWithoutProductInput[]
    createMany?: SavedProductCreateManyProductInputEnvelope
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
  }

  export type SavedProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<SavedProductCreateWithoutProductInput, SavedProductUncheckedCreateWithoutProductInput> | SavedProductCreateWithoutProductInput[] | SavedProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutProductInput | SavedProductCreateOrConnectWithoutProductInput[]
    createMany?: SavedProductCreateManyProductInputEnvelope
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdatekeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneWithoutProductsNestedInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput
    upsert?: UserUpsertWithoutProductsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProductsInput, UserUpdateWithoutProductsInput>, UserUncheckedUpdateWithoutProductsInput>
  }

  export type SavedProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<SavedProductCreateWithoutProductInput, SavedProductUncheckedCreateWithoutProductInput> | SavedProductCreateWithoutProductInput[] | SavedProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutProductInput | SavedProductCreateOrConnectWithoutProductInput[]
    upsert?: SavedProductUpsertWithWhereUniqueWithoutProductInput | SavedProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SavedProductCreateManyProductInputEnvelope
    set?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    disconnect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    delete?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    update?: SavedProductUpdateWithWhereUniqueWithoutProductInput | SavedProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SavedProductUpdateManyWithWhereWithoutProductInput | SavedProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SavedProductScalarWhereInput | SavedProductScalarWhereInput[]
  }

  export type SavedProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<SavedProductCreateWithoutProductInput, SavedProductUncheckedCreateWithoutProductInput> | SavedProductCreateWithoutProductInput[] | SavedProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutProductInput | SavedProductCreateOrConnectWithoutProductInput[]
    upsert?: SavedProductUpsertWithWhereUniqueWithoutProductInput | SavedProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SavedProductCreateManyProductInputEnvelope
    set?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    disconnect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    delete?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    update?: SavedProductUpdateWithWhereUniqueWithoutProductInput | SavedProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SavedProductUpdateManyWithWhereWithoutProductInput | SavedProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SavedProductScalarWhereInput | SavedProductScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SavedProductCreateWithoutUserInput = {
    product: ProductCreateNestedOneWithoutSavedByInput
  }

  export type SavedProductUncheckedCreateWithoutUserInput = {
    productId: number
  }

  export type SavedProductCreateOrConnectWithoutUserInput = {
    where: SavedProductWhereUniqueInput
    create: XOR<SavedProductCreateWithoutUserInput, SavedProductUncheckedCreateWithoutUserInput>
  }

  export type SavedProductCreateManyUserInputEnvelope = {
    data: SavedProductCreateManyUserInput | SavedProductCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutUserInput = {
    title?: string | null
    description?: string | null
    description2?: string | null
    description3?: string | null
    descriptionHero?: string | null
    adcopyFb1?: string | null
    adcopyFb2?: string | null
    adcopy1?: string | null
    adcopy2?: string | null
    adcopy3?: string | null
    creative1?: string | null
    creative2?: string | null
    free?: boolean
    priceOfGoods?: number | null
    sellPrice?: number | null
    aliexpressLink?: string | null
    cjdropshippingLink?: string | null
    competitorShop?: string | null
    productAge?: string | null
    popullarity?: string | null
    competitivness?: number | null
    bestPlatform?: string | null
    category?: string
    keywords?: ProductCreatekeywordsInput | string[]
    image1?: string | null
    image2?: string | null
    image3?: string | null
    image4?: string | null
    image5?: string | null
    image6?: string | null
    image7?: string | null
    image8?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    savedBy?: SavedProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUserInput = {
    id?: number
    title?: string | null
    description?: string | null
    description2?: string | null
    description3?: string | null
    descriptionHero?: string | null
    adcopyFb1?: string | null
    adcopyFb2?: string | null
    adcopy1?: string | null
    adcopy2?: string | null
    adcopy3?: string | null
    creative1?: string | null
    creative2?: string | null
    free?: boolean
    priceOfGoods?: number | null
    sellPrice?: number | null
    aliexpressLink?: string | null
    cjdropshippingLink?: string | null
    competitorShop?: string | null
    productAge?: string | null
    popullarity?: string | null
    competitivness?: number | null
    bestPlatform?: string | null
    category?: string
    keywords?: ProductCreatekeywordsInput | string[]
    image1?: string | null
    image2?: string | null
    image3?: string | null
    image4?: string | null
    image5?: string | null
    image6?: string | null
    image7?: string | null
    image8?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    savedBy?: SavedProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUserInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
  }

  export type ProductCreateManyUserInputEnvelope = {
    data: ProductCreateManyUserInput | ProductCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SavedProductUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedProductWhereUniqueInput
    update: XOR<SavedProductUpdateWithoutUserInput, SavedProductUncheckedUpdateWithoutUserInput>
    create: XOR<SavedProductCreateWithoutUserInput, SavedProductUncheckedCreateWithoutUserInput>
  }

  export type SavedProductUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedProductWhereUniqueInput
    data: XOR<SavedProductUpdateWithoutUserInput, SavedProductUncheckedUpdateWithoutUserInput>
  }

  export type SavedProductUpdateManyWithWhereWithoutUserInput = {
    where: SavedProductScalarWhereInput
    data: XOR<SavedProductUpdateManyMutationInput, SavedProductUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedProductScalarWhereInput = {
    AND?: SavedProductScalarWhereInput | SavedProductScalarWhereInput[]
    OR?: SavedProductScalarWhereInput[]
    NOT?: SavedProductScalarWhereInput | SavedProductScalarWhereInput[]
    userId?: IntFilter<"SavedProduct"> | number
    productId?: IntFilter<"SavedProduct"> | number
  }

  export type ProductUpsertWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>
  }

  export type ProductUpdateManyWithWhereWithoutUserInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutUserInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    title?: StringNullableFilter<"Product"> | string | null
    description?: StringNullableFilter<"Product"> | string | null
    description2?: StringNullableFilter<"Product"> | string | null
    description3?: StringNullableFilter<"Product"> | string | null
    descriptionHero?: StringNullableFilter<"Product"> | string | null
    adcopyFb1?: StringNullableFilter<"Product"> | string | null
    adcopyFb2?: StringNullableFilter<"Product"> | string | null
    adcopy1?: StringNullableFilter<"Product"> | string | null
    adcopy2?: StringNullableFilter<"Product"> | string | null
    adcopy3?: StringNullableFilter<"Product"> | string | null
    creative1?: StringNullableFilter<"Product"> | string | null
    creative2?: StringNullableFilter<"Product"> | string | null
    free?: BoolFilter<"Product"> | boolean
    priceOfGoods?: FloatNullableFilter<"Product"> | number | null
    sellPrice?: FloatNullableFilter<"Product"> | number | null
    aliexpressLink?: StringNullableFilter<"Product"> | string | null
    cjdropshippingLink?: StringNullableFilter<"Product"> | string | null
    competitorShop?: StringNullableFilter<"Product"> | string | null
    productAge?: StringNullableFilter<"Product"> | string | null
    popullarity?: StringNullableFilter<"Product"> | string | null
    competitivness?: IntNullableFilter<"Product"> | number | null
    bestPlatform?: StringNullableFilter<"Product"> | string | null
    category?: StringFilter<"Product"> | string
    keywords?: StringNullableListFilter<"Product">
    image1?: StringNullableFilter<"Product"> | string | null
    image2?: StringNullableFilter<"Product"> | string | null
    image3?: StringNullableFilter<"Product"> | string | null
    image4?: StringNullableFilter<"Product"> | string | null
    image5?: StringNullableFilter<"Product"> | string | null
    image6?: StringNullableFilter<"Product"> | string | null
    image7?: StringNullableFilter<"Product"> | string | null
    image8?: StringNullableFilter<"Product"> | string | null
    userId?: IntNullableFilter<"Product"> | number | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type UserCreateWithoutSavedInput = {
    email: string
    password: string
    firstName: string
    lastName: string
    stripe_customer_id?: string | null
    subscriptions?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: boolean
    accountVerificationToken?: string | null
    accountVerificationTokenExpires?: Date | string | null
    passwordChangeAt?: Date | string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    profilePhoto?: string
    role?: string
    isBlocked?: boolean
    isSubscribed?: string | null
    isSubCanceled?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedInput = {
    id?: number
    email: string
    password: string
    firstName: string
    lastName: string
    stripe_customer_id?: string | null
    subscriptions?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: boolean
    accountVerificationToken?: string | null
    accountVerificationTokenExpires?: Date | string | null
    passwordChangeAt?: Date | string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    profilePhoto?: string
    role?: string
    isBlocked?: boolean
    isSubscribed?: string | null
    isSubCanceled?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedInput, UserUncheckedCreateWithoutSavedInput>
  }

  export type ProductCreateWithoutSavedByInput = {
    title?: string | null
    description?: string | null
    description2?: string | null
    description3?: string | null
    descriptionHero?: string | null
    adcopyFb1?: string | null
    adcopyFb2?: string | null
    adcopy1?: string | null
    adcopy2?: string | null
    adcopy3?: string | null
    creative1?: string | null
    creative2?: string | null
    free?: boolean
    priceOfGoods?: number | null
    sellPrice?: number | null
    aliexpressLink?: string | null
    cjdropshippingLink?: string | null
    competitorShop?: string | null
    productAge?: string | null
    popullarity?: string | null
    competitivness?: number | null
    bestPlatform?: string | null
    category?: string
    keywords?: ProductCreatekeywordsInput | string[]
    image1?: string | null
    image2?: string | null
    image3?: string | null
    image4?: string | null
    image5?: string | null
    image6?: string | null
    image7?: string | null
    image8?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutSavedByInput = {
    id?: number
    title?: string | null
    description?: string | null
    description2?: string | null
    description3?: string | null
    descriptionHero?: string | null
    adcopyFb1?: string | null
    adcopyFb2?: string | null
    adcopy1?: string | null
    adcopy2?: string | null
    adcopy3?: string | null
    creative1?: string | null
    creative2?: string | null
    free?: boolean
    priceOfGoods?: number | null
    sellPrice?: number | null
    aliexpressLink?: string | null
    cjdropshippingLink?: string | null
    competitorShop?: string | null
    productAge?: string | null
    popullarity?: string | null
    competitivness?: number | null
    bestPlatform?: string | null
    category?: string
    keywords?: ProductCreatekeywordsInput | string[]
    image1?: string | null
    image2?: string | null
    image3?: string | null
    image4?: string | null
    image5?: string | null
    image6?: string | null
    image7?: string | null
    image8?: string | null
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutSavedByInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSavedByInput, ProductUncheckedCreateWithoutSavedByInput>
  }

  export type UserUpsertWithoutSavedInput = {
    update: XOR<UserUpdateWithoutSavedInput, UserUncheckedUpdateWithoutSavedInput>
    create: XOR<UserCreateWithoutSavedInput, UserUncheckedCreateWithoutSavedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedInput, UserUncheckedUpdateWithoutSavedInput>
  }

  export type UserUpdateWithoutSavedInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    stripe_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptions?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accountVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    accountVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePhoto?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isSubscribed?: NullableStringFieldUpdateOperationsInput | string | null
    isSubCanceled?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    stripe_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptions?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accountVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    accountVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePhoto?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isSubscribed?: NullableStringFieldUpdateOperationsInput | string | null
    isSubCanceled?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutSavedByInput = {
    update: XOR<ProductUpdateWithoutSavedByInput, ProductUncheckedUpdateWithoutSavedByInput>
    create: XOR<ProductCreateWithoutSavedByInput, ProductUncheckedCreateWithoutSavedByInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSavedByInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSavedByInput, ProductUncheckedUpdateWithoutSavedByInput>
  }

  export type ProductUpdateWithoutSavedByInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description2?: NullableStringFieldUpdateOperationsInput | string | null
    description3?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionHero?: NullableStringFieldUpdateOperationsInput | string | null
    adcopyFb1?: NullableStringFieldUpdateOperationsInput | string | null
    adcopyFb2?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy1?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy2?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy3?: NullableStringFieldUpdateOperationsInput | string | null
    creative1?: NullableStringFieldUpdateOperationsInput | string | null
    creative2?: NullableStringFieldUpdateOperationsInput | string | null
    free?: BoolFieldUpdateOperationsInput | boolean
    priceOfGoods?: NullableFloatFieldUpdateOperationsInput | number | null
    sellPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    aliexpressLink?: NullableStringFieldUpdateOperationsInput | string | null
    cjdropshippingLink?: NullableStringFieldUpdateOperationsInput | string | null
    competitorShop?: NullableStringFieldUpdateOperationsInput | string | null
    productAge?: NullableStringFieldUpdateOperationsInput | string | null
    popullarity?: NullableStringFieldUpdateOperationsInput | string | null
    competitivness?: NullableIntFieldUpdateOperationsInput | number | null
    bestPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    keywords?: ProductUpdatekeywordsInput | string[]
    image1?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    image5?: NullableStringFieldUpdateOperationsInput | string | null
    image6?: NullableStringFieldUpdateOperationsInput | string | null
    image7?: NullableStringFieldUpdateOperationsInput | string | null
    image8?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutSavedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description2?: NullableStringFieldUpdateOperationsInput | string | null
    description3?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionHero?: NullableStringFieldUpdateOperationsInput | string | null
    adcopyFb1?: NullableStringFieldUpdateOperationsInput | string | null
    adcopyFb2?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy1?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy2?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy3?: NullableStringFieldUpdateOperationsInput | string | null
    creative1?: NullableStringFieldUpdateOperationsInput | string | null
    creative2?: NullableStringFieldUpdateOperationsInput | string | null
    free?: BoolFieldUpdateOperationsInput | boolean
    priceOfGoods?: NullableFloatFieldUpdateOperationsInput | number | null
    sellPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    aliexpressLink?: NullableStringFieldUpdateOperationsInput | string | null
    cjdropshippingLink?: NullableStringFieldUpdateOperationsInput | string | null
    competitorShop?: NullableStringFieldUpdateOperationsInput | string | null
    productAge?: NullableStringFieldUpdateOperationsInput | string | null
    popullarity?: NullableStringFieldUpdateOperationsInput | string | null
    competitivness?: NullableIntFieldUpdateOperationsInput | number | null
    bestPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    keywords?: ProductUpdatekeywordsInput | string[]
    image1?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    image5?: NullableStringFieldUpdateOperationsInput | string | null
    image6?: NullableStringFieldUpdateOperationsInput | string | null
    image7?: NullableStringFieldUpdateOperationsInput | string | null
    image8?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutProductsInput = {
    email: string
    password: string
    firstName: string
    lastName: string
    stripe_customer_id?: string | null
    subscriptions?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: boolean
    accountVerificationToken?: string | null
    accountVerificationTokenExpires?: Date | string | null
    passwordChangeAt?: Date | string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    profilePhoto?: string
    role?: string
    isBlocked?: boolean
    isSubscribed?: string | null
    isSubCanceled?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    saved?: SavedProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProductsInput = {
    id?: number
    email: string
    password: string
    firstName: string
    lastName: string
    stripe_customer_id?: string | null
    subscriptions?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: boolean
    accountVerificationToken?: string | null
    accountVerificationTokenExpires?: Date | string | null
    passwordChangeAt?: Date | string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    profilePhoto?: string
    role?: string
    isBlocked?: boolean
    isSubscribed?: string | null
    isSubCanceled?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    saved?: SavedProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
  }

  export type SavedProductCreateWithoutProductInput = {
    user: UserCreateNestedOneWithoutSavedInput
  }

  export type SavedProductUncheckedCreateWithoutProductInput = {
    userId: number
  }

  export type SavedProductCreateOrConnectWithoutProductInput = {
    where: SavedProductWhereUniqueInput
    create: XOR<SavedProductCreateWithoutProductInput, SavedProductUncheckedCreateWithoutProductInput>
  }

  export type SavedProductCreateManyProductInputEnvelope = {
    data: SavedProductCreateManyProductInput | SavedProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProductsInput = {
    update: XOR<UserUpdateWithoutProductsInput, UserUncheckedUpdateWithoutProductsInput>
    create: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProductsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProductsInput, UserUncheckedUpdateWithoutProductsInput>
  }

  export type UserUpdateWithoutProductsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    stripe_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptions?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accountVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    accountVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePhoto?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isSubscribed?: NullableStringFieldUpdateOperationsInput | string | null
    isSubCanceled?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saved?: SavedProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    stripe_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptions?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accountVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    accountVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePhoto?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isSubscribed?: NullableStringFieldUpdateOperationsInput | string | null
    isSubCanceled?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saved?: SavedProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SavedProductUpsertWithWhereUniqueWithoutProductInput = {
    where: SavedProductWhereUniqueInput
    update: XOR<SavedProductUpdateWithoutProductInput, SavedProductUncheckedUpdateWithoutProductInput>
    create: XOR<SavedProductCreateWithoutProductInput, SavedProductUncheckedCreateWithoutProductInput>
  }

  export type SavedProductUpdateWithWhereUniqueWithoutProductInput = {
    where: SavedProductWhereUniqueInput
    data: XOR<SavedProductUpdateWithoutProductInput, SavedProductUncheckedUpdateWithoutProductInput>
  }

  export type SavedProductUpdateManyWithWhereWithoutProductInput = {
    where: SavedProductScalarWhereInput
    data: XOR<SavedProductUpdateManyMutationInput, SavedProductUncheckedUpdateManyWithoutProductInput>
  }

  export type SavedProductCreateManyUserInput = {
    productId: number
  }

  export type ProductCreateManyUserInput = {
    id?: number
    title?: string | null
    description?: string | null
    description2?: string | null
    description3?: string | null
    descriptionHero?: string | null
    adcopyFb1?: string | null
    adcopyFb2?: string | null
    adcopy1?: string | null
    adcopy2?: string | null
    adcopy3?: string | null
    creative1?: string | null
    creative2?: string | null
    free?: boolean
    priceOfGoods?: number | null
    sellPrice?: number | null
    aliexpressLink?: string | null
    cjdropshippingLink?: string | null
    competitorShop?: string | null
    productAge?: string | null
    popullarity?: string | null
    competitivness?: number | null
    bestPlatform?: string | null
    category?: string
    keywords?: ProductCreatekeywordsInput | string[]
    image1?: string | null
    image2?: string | null
    image3?: string | null
    image4?: string | null
    image5?: string | null
    image6?: string | null
    image7?: string | null
    image8?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedProductUpdateWithoutUserInput = {
    product?: ProductUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type SavedProductUncheckedUpdateWithoutUserInput = {
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type SavedProductUncheckedUpdateManyWithoutUserInput = {
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUpdateWithoutUserInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description2?: NullableStringFieldUpdateOperationsInput | string | null
    description3?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionHero?: NullableStringFieldUpdateOperationsInput | string | null
    adcopyFb1?: NullableStringFieldUpdateOperationsInput | string | null
    adcopyFb2?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy1?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy2?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy3?: NullableStringFieldUpdateOperationsInput | string | null
    creative1?: NullableStringFieldUpdateOperationsInput | string | null
    creative2?: NullableStringFieldUpdateOperationsInput | string | null
    free?: BoolFieldUpdateOperationsInput | boolean
    priceOfGoods?: NullableFloatFieldUpdateOperationsInput | number | null
    sellPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    aliexpressLink?: NullableStringFieldUpdateOperationsInput | string | null
    cjdropshippingLink?: NullableStringFieldUpdateOperationsInput | string | null
    competitorShop?: NullableStringFieldUpdateOperationsInput | string | null
    productAge?: NullableStringFieldUpdateOperationsInput | string | null
    popullarity?: NullableStringFieldUpdateOperationsInput | string | null
    competitivness?: NullableIntFieldUpdateOperationsInput | number | null
    bestPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    keywords?: ProductUpdatekeywordsInput | string[]
    image1?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    image5?: NullableStringFieldUpdateOperationsInput | string | null
    image6?: NullableStringFieldUpdateOperationsInput | string | null
    image7?: NullableStringFieldUpdateOperationsInput | string | null
    image8?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedBy?: SavedProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description2?: NullableStringFieldUpdateOperationsInput | string | null
    description3?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionHero?: NullableStringFieldUpdateOperationsInput | string | null
    adcopyFb1?: NullableStringFieldUpdateOperationsInput | string | null
    adcopyFb2?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy1?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy2?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy3?: NullableStringFieldUpdateOperationsInput | string | null
    creative1?: NullableStringFieldUpdateOperationsInput | string | null
    creative2?: NullableStringFieldUpdateOperationsInput | string | null
    free?: BoolFieldUpdateOperationsInput | boolean
    priceOfGoods?: NullableFloatFieldUpdateOperationsInput | number | null
    sellPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    aliexpressLink?: NullableStringFieldUpdateOperationsInput | string | null
    cjdropshippingLink?: NullableStringFieldUpdateOperationsInput | string | null
    competitorShop?: NullableStringFieldUpdateOperationsInput | string | null
    productAge?: NullableStringFieldUpdateOperationsInput | string | null
    popullarity?: NullableStringFieldUpdateOperationsInput | string | null
    competitivness?: NullableIntFieldUpdateOperationsInput | number | null
    bestPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    keywords?: ProductUpdatekeywordsInput | string[]
    image1?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    image5?: NullableStringFieldUpdateOperationsInput | string | null
    image6?: NullableStringFieldUpdateOperationsInput | string | null
    image7?: NullableStringFieldUpdateOperationsInput | string | null
    image8?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedBy?: SavedProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    description2?: NullableStringFieldUpdateOperationsInput | string | null
    description3?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionHero?: NullableStringFieldUpdateOperationsInput | string | null
    adcopyFb1?: NullableStringFieldUpdateOperationsInput | string | null
    adcopyFb2?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy1?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy2?: NullableStringFieldUpdateOperationsInput | string | null
    adcopy3?: NullableStringFieldUpdateOperationsInput | string | null
    creative1?: NullableStringFieldUpdateOperationsInput | string | null
    creative2?: NullableStringFieldUpdateOperationsInput | string | null
    free?: BoolFieldUpdateOperationsInput | boolean
    priceOfGoods?: NullableFloatFieldUpdateOperationsInput | number | null
    sellPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    aliexpressLink?: NullableStringFieldUpdateOperationsInput | string | null
    cjdropshippingLink?: NullableStringFieldUpdateOperationsInput | string | null
    competitorShop?: NullableStringFieldUpdateOperationsInput | string | null
    productAge?: NullableStringFieldUpdateOperationsInput | string | null
    popullarity?: NullableStringFieldUpdateOperationsInput | string | null
    competitivness?: NullableIntFieldUpdateOperationsInput | number | null
    bestPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    keywords?: ProductUpdatekeywordsInput | string[]
    image1?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    image5?: NullableStringFieldUpdateOperationsInput | string | null
    image6?: NullableStringFieldUpdateOperationsInput | string | null
    image7?: NullableStringFieldUpdateOperationsInput | string | null
    image8?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedProductCreateManyProductInput = {
    userId: number
  }

  export type SavedProductUpdateWithoutProductInput = {
    user?: UserUpdateOneRequiredWithoutSavedNestedInput
  }

  export type SavedProductUncheckedUpdateWithoutProductInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SavedProductUncheckedUpdateManyWithoutProductInput = {
    userId?: IntFieldUpdateOperationsInput | number
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