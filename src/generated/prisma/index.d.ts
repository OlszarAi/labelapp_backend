
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Label
 * 
 */
export type Label = $Result.DefaultSelection<Prisma.$LabelPayload>
/**
 * Model LabelElement
 * 
 */
export type LabelElement = $Result.DefaultSelection<Prisma.$LabelElementPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.label`: Exposes CRUD operations for the **Label** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Labels
    * const labels = await prisma.label.findMany()
    * ```
    */
  get label(): Prisma.LabelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.labelElement`: Exposes CRUD operations for the **LabelElement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LabelElements
    * const labelElements = await prisma.labelElement.findMany()
    * ```
    */
  get labelElement(): Prisma.LabelElementDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Project: 'Project',
    Label: 'Label',
    LabelElement: 'LabelElement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "project" | "label" | "labelElement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Label: {
        payload: Prisma.$LabelPayload<ExtArgs>
        fields: Prisma.LabelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LabelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LabelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>
          }
          findFirst: {
            args: Prisma.LabelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LabelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>
          }
          findMany: {
            args: Prisma.LabelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>[]
          }
          create: {
            args: Prisma.LabelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>
          }
          createMany: {
            args: Prisma.LabelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LabelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>[]
          }
          delete: {
            args: Prisma.LabelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>
          }
          update: {
            args: Prisma.LabelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>
          }
          deleteMany: {
            args: Prisma.LabelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LabelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LabelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>[]
          }
          upsert: {
            args: Prisma.LabelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>
          }
          aggregate: {
            args: Prisma.LabelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLabel>
          }
          groupBy: {
            args: Prisma.LabelGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabelGroupByOutputType>[]
          }
          count: {
            args: Prisma.LabelCountArgs<ExtArgs>
            result: $Utils.Optional<LabelCountAggregateOutputType> | number
          }
        }
      }
      LabelElement: {
        payload: Prisma.$LabelElementPayload<ExtArgs>
        fields: Prisma.LabelElementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LabelElementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelElementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LabelElementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelElementPayload>
          }
          findFirst: {
            args: Prisma.LabelElementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelElementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LabelElementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelElementPayload>
          }
          findMany: {
            args: Prisma.LabelElementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelElementPayload>[]
          }
          create: {
            args: Prisma.LabelElementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelElementPayload>
          }
          createMany: {
            args: Prisma.LabelElementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LabelElementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelElementPayload>[]
          }
          delete: {
            args: Prisma.LabelElementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelElementPayload>
          }
          update: {
            args: Prisma.LabelElementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelElementPayload>
          }
          deleteMany: {
            args: Prisma.LabelElementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LabelElementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LabelElementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelElementPayload>[]
          }
          upsert: {
            args: Prisma.LabelElementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelElementPayload>
          }
          aggregate: {
            args: Prisma.LabelElementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLabelElement>
          }
          groupBy: {
            args: Prisma.LabelElementGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabelElementGroupByOutputType>[]
          }
          count: {
            args: Prisma.LabelElementCountArgs<ExtArgs>
            result: $Utils.Optional<LabelElementCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    project?: ProjectOmit
    label?: LabelOmit
    labelElement?: LabelElementOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type LabelCountOutputType
   */

  export type LabelCountOutputType = {
    elements: number
    projects: number
  }

  export type LabelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elements?: boolean | LabelCountOutputTypeCountElementsArgs
    projects?: boolean | LabelCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * LabelCountOutputType without action
   */
  export type LabelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabelCountOutputType
     */
    select?: LabelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LabelCountOutputType without action
   */
  export type LabelCountOutputTypeCountElementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabelElementWhereInput
  }

  /**
   * LabelCountOutputType without action
   */
  export type LabelCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    labelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    labelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    labelId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    labelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    labelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    labelId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    labelId: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    labelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    labelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    labelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    labelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "labelId" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      label: Prisma.$LabelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      labelId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    label<T extends LabelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LabelDefaultArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly labelId: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Label
   */

  export type AggregateLabel = {
    _count: LabelCountAggregateOutputType | null
    _avg: LabelAvgAggregateOutputType | null
    _sum: LabelSumAggregateOutputType | null
    _min: LabelMinAggregateOutputType | null
    _max: LabelMaxAggregateOutputType | null
  }

  export type LabelAvgAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type LabelSumAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type LabelMinAggregateOutputType = {
    id: string | null
    name: string | null
    width: number | null
    height: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LabelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    width: number | null
    height: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LabelCountAggregateOutputType = {
    id: number
    name: number
    width: number
    height: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LabelAvgAggregateInputType = {
    width?: true
    height?: true
  }

  export type LabelSumAggregateInputType = {
    width?: true
    height?: true
  }

  export type LabelMinAggregateInputType = {
    id?: true
    name?: true
    width?: true
    height?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LabelMaxAggregateInputType = {
    id?: true
    name?: true
    width?: true
    height?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LabelCountAggregateInputType = {
    id?: true
    name?: true
    width?: true
    height?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LabelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Label to aggregate.
     */
    where?: LabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labels to fetch.
     */
    orderBy?: LabelOrderByWithRelationInput | LabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Labels
    **/
    _count?: true | LabelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LabelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LabelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabelMaxAggregateInputType
  }

  export type GetLabelAggregateType<T extends LabelAggregateArgs> = {
        [P in keyof T & keyof AggregateLabel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLabel[P]>
      : GetScalarType<T[P], AggregateLabel[P]>
  }




  export type LabelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabelWhereInput
    orderBy?: LabelOrderByWithAggregationInput | LabelOrderByWithAggregationInput[]
    by: LabelScalarFieldEnum[] | LabelScalarFieldEnum
    having?: LabelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabelCountAggregateInputType | true
    _avg?: LabelAvgAggregateInputType
    _sum?: LabelSumAggregateInputType
    _min?: LabelMinAggregateInputType
    _max?: LabelMaxAggregateInputType
  }

  export type LabelGroupByOutputType = {
    id: string
    name: string
    width: number
    height: number
    createdAt: Date
    updatedAt: Date
    _count: LabelCountAggregateOutputType | null
    _avg: LabelAvgAggregateOutputType | null
    _sum: LabelSumAggregateOutputType | null
    _min: LabelMinAggregateOutputType | null
    _max: LabelMaxAggregateOutputType | null
  }

  type GetLabelGroupByPayload<T extends LabelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabelGroupByOutputType[P]>
            : GetScalarType<T[P], LabelGroupByOutputType[P]>
        }
      >
    >


  export type LabelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    elements?: boolean | Label$elementsArgs<ExtArgs>
    projects?: boolean | Label$projectsArgs<ExtArgs>
    _count?: boolean | LabelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["label"]>

  export type LabelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["label"]>

  export type LabelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["label"]>

  export type LabelSelectScalar = {
    id?: boolean
    name?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LabelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "width" | "height" | "createdAt" | "updatedAt", ExtArgs["result"]["label"]>
  export type LabelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elements?: boolean | Label$elementsArgs<ExtArgs>
    projects?: boolean | Label$projectsArgs<ExtArgs>
    _count?: boolean | LabelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LabelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LabelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LabelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Label"
    objects: {
      elements: Prisma.$LabelElementPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      width: number
      height: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["label"]>
    composites: {}
  }

  type LabelGetPayload<S extends boolean | null | undefined | LabelDefaultArgs> = $Result.GetResult<Prisma.$LabelPayload, S>

  type LabelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LabelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabelCountAggregateInputType | true
    }

  export interface LabelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Label'], meta: { name: 'Label' } }
    /**
     * Find zero or one Label that matches the filter.
     * @param {LabelFindUniqueArgs} args - Arguments to find a Label
     * @example
     * // Get one Label
     * const label = await prisma.label.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabelFindUniqueArgs>(args: SelectSubset<T, LabelFindUniqueArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Label that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabelFindUniqueOrThrowArgs} args - Arguments to find a Label
     * @example
     * // Get one Label
     * const label = await prisma.label.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabelFindUniqueOrThrowArgs>(args: SelectSubset<T, LabelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Label that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelFindFirstArgs} args - Arguments to find a Label
     * @example
     * // Get one Label
     * const label = await prisma.label.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabelFindFirstArgs>(args?: SelectSubset<T, LabelFindFirstArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Label that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelFindFirstOrThrowArgs} args - Arguments to find a Label
     * @example
     * // Get one Label
     * const label = await prisma.label.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabelFindFirstOrThrowArgs>(args?: SelectSubset<T, LabelFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Labels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Labels
     * const labels = await prisma.label.findMany()
     * 
     * // Get first 10 Labels
     * const labels = await prisma.label.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const labelWithIdOnly = await prisma.label.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LabelFindManyArgs>(args?: SelectSubset<T, LabelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Label.
     * @param {LabelCreateArgs} args - Arguments to create a Label.
     * @example
     * // Create one Label
     * const Label = await prisma.label.create({
     *   data: {
     *     // ... data to create a Label
     *   }
     * })
     * 
     */
    create<T extends LabelCreateArgs>(args: SelectSubset<T, LabelCreateArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Labels.
     * @param {LabelCreateManyArgs} args - Arguments to create many Labels.
     * @example
     * // Create many Labels
     * const label = await prisma.label.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LabelCreateManyArgs>(args?: SelectSubset<T, LabelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Labels and returns the data saved in the database.
     * @param {LabelCreateManyAndReturnArgs} args - Arguments to create many Labels.
     * @example
     * // Create many Labels
     * const label = await prisma.label.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Labels and only return the `id`
     * const labelWithIdOnly = await prisma.label.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LabelCreateManyAndReturnArgs>(args?: SelectSubset<T, LabelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Label.
     * @param {LabelDeleteArgs} args - Arguments to delete one Label.
     * @example
     * // Delete one Label
     * const Label = await prisma.label.delete({
     *   where: {
     *     // ... filter to delete one Label
     *   }
     * })
     * 
     */
    delete<T extends LabelDeleteArgs>(args: SelectSubset<T, LabelDeleteArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Label.
     * @param {LabelUpdateArgs} args - Arguments to update one Label.
     * @example
     * // Update one Label
     * const label = await prisma.label.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LabelUpdateArgs>(args: SelectSubset<T, LabelUpdateArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Labels.
     * @param {LabelDeleteManyArgs} args - Arguments to filter Labels to delete.
     * @example
     * // Delete a few Labels
     * const { count } = await prisma.label.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LabelDeleteManyArgs>(args?: SelectSubset<T, LabelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Labels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Labels
     * const label = await prisma.label.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LabelUpdateManyArgs>(args: SelectSubset<T, LabelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Labels and returns the data updated in the database.
     * @param {LabelUpdateManyAndReturnArgs} args - Arguments to update many Labels.
     * @example
     * // Update many Labels
     * const label = await prisma.label.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Labels and only return the `id`
     * const labelWithIdOnly = await prisma.label.updateManyAndReturn({
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
    updateManyAndReturn<T extends LabelUpdateManyAndReturnArgs>(args: SelectSubset<T, LabelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Label.
     * @param {LabelUpsertArgs} args - Arguments to update or create a Label.
     * @example
     * // Update or create a Label
     * const label = await prisma.label.upsert({
     *   create: {
     *     // ... data to create a Label
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Label we want to update
     *   }
     * })
     */
    upsert<T extends LabelUpsertArgs>(args: SelectSubset<T, LabelUpsertArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Labels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelCountArgs} args - Arguments to filter Labels to count.
     * @example
     * // Count the number of Labels
     * const count = await prisma.label.count({
     *   where: {
     *     // ... the filter for the Labels we want to count
     *   }
     * })
    **/
    count<T extends LabelCountArgs>(
      args?: Subset<T, LabelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Label.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LabelAggregateArgs>(args: Subset<T, LabelAggregateArgs>): Prisma.PrismaPromise<GetLabelAggregateType<T>>

    /**
     * Group by Label.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelGroupByArgs} args - Group by arguments.
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
      T extends LabelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabelGroupByArgs['orderBy'] }
        : { orderBy?: LabelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LabelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Label model
   */
  readonly fields: LabelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Label.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LabelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    elements<T extends Label$elementsArgs<ExtArgs> = {}>(args?: Subset<T, Label$elementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabelElementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends Label$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Label$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Label model
   */
  interface LabelFieldRefs {
    readonly id: FieldRef<"Label", 'String'>
    readonly name: FieldRef<"Label", 'String'>
    readonly width: FieldRef<"Label", 'Float'>
    readonly height: FieldRef<"Label", 'Float'>
    readonly createdAt: FieldRef<"Label", 'DateTime'>
    readonly updatedAt: FieldRef<"Label", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Label findUnique
   */
  export type LabelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * Filter, which Label to fetch.
     */
    where: LabelWhereUniqueInput
  }

  /**
   * Label findUniqueOrThrow
   */
  export type LabelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * Filter, which Label to fetch.
     */
    where: LabelWhereUniqueInput
  }

  /**
   * Label findFirst
   */
  export type LabelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * Filter, which Label to fetch.
     */
    where?: LabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labels to fetch.
     */
    orderBy?: LabelOrderByWithRelationInput | LabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Labels.
     */
    cursor?: LabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Labels.
     */
    distinct?: LabelScalarFieldEnum | LabelScalarFieldEnum[]
  }

  /**
   * Label findFirstOrThrow
   */
  export type LabelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * Filter, which Label to fetch.
     */
    where?: LabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labels to fetch.
     */
    orderBy?: LabelOrderByWithRelationInput | LabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Labels.
     */
    cursor?: LabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Labels.
     */
    distinct?: LabelScalarFieldEnum | LabelScalarFieldEnum[]
  }

  /**
   * Label findMany
   */
  export type LabelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * Filter, which Labels to fetch.
     */
    where?: LabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labels to fetch.
     */
    orderBy?: LabelOrderByWithRelationInput | LabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Labels.
     */
    cursor?: LabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labels.
     */
    skip?: number
    distinct?: LabelScalarFieldEnum | LabelScalarFieldEnum[]
  }

  /**
   * Label create
   */
  export type LabelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * The data needed to create a Label.
     */
    data: XOR<LabelCreateInput, LabelUncheckedCreateInput>
  }

  /**
   * Label createMany
   */
  export type LabelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Labels.
     */
    data: LabelCreateManyInput | LabelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Label createManyAndReturn
   */
  export type LabelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * The data used to create many Labels.
     */
    data: LabelCreateManyInput | LabelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Label update
   */
  export type LabelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * The data needed to update a Label.
     */
    data: XOR<LabelUpdateInput, LabelUncheckedUpdateInput>
    /**
     * Choose, which Label to update.
     */
    where: LabelWhereUniqueInput
  }

  /**
   * Label updateMany
   */
  export type LabelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Labels.
     */
    data: XOR<LabelUpdateManyMutationInput, LabelUncheckedUpdateManyInput>
    /**
     * Filter which Labels to update
     */
    where?: LabelWhereInput
    /**
     * Limit how many Labels to update.
     */
    limit?: number
  }

  /**
   * Label updateManyAndReturn
   */
  export type LabelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * The data used to update Labels.
     */
    data: XOR<LabelUpdateManyMutationInput, LabelUncheckedUpdateManyInput>
    /**
     * Filter which Labels to update
     */
    where?: LabelWhereInput
    /**
     * Limit how many Labels to update.
     */
    limit?: number
  }

  /**
   * Label upsert
   */
  export type LabelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * The filter to search for the Label to update in case it exists.
     */
    where: LabelWhereUniqueInput
    /**
     * In case the Label found by the `where` argument doesn't exist, create a new Label with this data.
     */
    create: XOR<LabelCreateInput, LabelUncheckedCreateInput>
    /**
     * In case the Label was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LabelUpdateInput, LabelUncheckedUpdateInput>
  }

  /**
   * Label delete
   */
  export type LabelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * Filter which Label to delete.
     */
    where: LabelWhereUniqueInput
  }

  /**
   * Label deleteMany
   */
  export type LabelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Labels to delete
     */
    where?: LabelWhereInput
    /**
     * Limit how many Labels to delete.
     */
    limit?: number
  }

  /**
   * Label.elements
   */
  export type Label$elementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabelElement
     */
    select?: LabelElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabelElement
     */
    omit?: LabelElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelElementInclude<ExtArgs> | null
    where?: LabelElementWhereInput
    orderBy?: LabelElementOrderByWithRelationInput | LabelElementOrderByWithRelationInput[]
    cursor?: LabelElementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabelElementScalarFieldEnum | LabelElementScalarFieldEnum[]
  }

  /**
   * Label.projects
   */
  export type Label$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Label without action
   */
  export type LabelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
  }


  /**
   * Model LabelElement
   */

  export type AggregateLabelElement = {
    _count: LabelElementCountAggregateOutputType | null
    _avg: LabelElementAvgAggregateOutputType | null
    _sum: LabelElementSumAggregateOutputType | null
    _min: LabelElementMinAggregateOutputType | null
    _max: LabelElementMaxAggregateOutputType | null
  }

  export type LabelElementAvgAggregateOutputType = {
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    size: number | null
    rotation: number | null
  }

  export type LabelElementSumAggregateOutputType = {
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    size: number | null
    rotation: number | null
  }

  export type LabelElementMinAggregateOutputType = {
    id: string | null
    type: string | null
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    size: number | null
    value: string | null
    color: string | null
    rotation: number | null
    labelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LabelElementMaxAggregateOutputType = {
    id: string | null
    type: string | null
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    size: number | null
    value: string | null
    color: string | null
    rotation: number | null
    labelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LabelElementCountAggregateOutputType = {
    id: number
    type: number
    x: number
    y: number
    width: number
    height: number
    size: number
    value: number
    color: number
    rotation: number
    labelId: number
    properties: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LabelElementAvgAggregateInputType = {
    x?: true
    y?: true
    width?: true
    height?: true
    size?: true
    rotation?: true
  }

  export type LabelElementSumAggregateInputType = {
    x?: true
    y?: true
    width?: true
    height?: true
    size?: true
    rotation?: true
  }

  export type LabelElementMinAggregateInputType = {
    id?: true
    type?: true
    x?: true
    y?: true
    width?: true
    height?: true
    size?: true
    value?: true
    color?: true
    rotation?: true
    labelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LabelElementMaxAggregateInputType = {
    id?: true
    type?: true
    x?: true
    y?: true
    width?: true
    height?: true
    size?: true
    value?: true
    color?: true
    rotation?: true
    labelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LabelElementCountAggregateInputType = {
    id?: true
    type?: true
    x?: true
    y?: true
    width?: true
    height?: true
    size?: true
    value?: true
    color?: true
    rotation?: true
    labelId?: true
    properties?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LabelElementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabelElement to aggregate.
     */
    where?: LabelElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabelElements to fetch.
     */
    orderBy?: LabelElementOrderByWithRelationInput | LabelElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LabelElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabelElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabelElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LabelElements
    **/
    _count?: true | LabelElementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LabelElementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LabelElementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabelElementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabelElementMaxAggregateInputType
  }

  export type GetLabelElementAggregateType<T extends LabelElementAggregateArgs> = {
        [P in keyof T & keyof AggregateLabelElement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLabelElement[P]>
      : GetScalarType<T[P], AggregateLabelElement[P]>
  }




  export type LabelElementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabelElementWhereInput
    orderBy?: LabelElementOrderByWithAggregationInput | LabelElementOrderByWithAggregationInput[]
    by: LabelElementScalarFieldEnum[] | LabelElementScalarFieldEnum
    having?: LabelElementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabelElementCountAggregateInputType | true
    _avg?: LabelElementAvgAggregateInputType
    _sum?: LabelElementSumAggregateInputType
    _min?: LabelElementMinAggregateInputType
    _max?: LabelElementMaxAggregateInputType
  }

  export type LabelElementGroupByOutputType = {
    id: string
    type: string
    x: number
    y: number
    width: number | null
    height: number | null
    size: number | null
    value: string | null
    color: string | null
    rotation: number | null
    labelId: string
    properties: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: LabelElementCountAggregateOutputType | null
    _avg: LabelElementAvgAggregateOutputType | null
    _sum: LabelElementSumAggregateOutputType | null
    _min: LabelElementMinAggregateOutputType | null
    _max: LabelElementMaxAggregateOutputType | null
  }

  type GetLabelElementGroupByPayload<T extends LabelElementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabelElementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabelElementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabelElementGroupByOutputType[P]>
            : GetScalarType<T[P], LabelElementGroupByOutputType[P]>
        }
      >
    >


  export type LabelElementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    size?: boolean
    value?: boolean
    color?: boolean
    rotation?: boolean
    labelId?: boolean
    properties?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labelElement"]>

  export type LabelElementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    size?: boolean
    value?: boolean
    color?: boolean
    rotation?: boolean
    labelId?: boolean
    properties?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labelElement"]>

  export type LabelElementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    size?: boolean
    value?: boolean
    color?: boolean
    rotation?: boolean
    labelId?: boolean
    properties?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labelElement"]>

  export type LabelElementSelectScalar = {
    id?: boolean
    type?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    size?: boolean
    value?: boolean
    color?: boolean
    rotation?: boolean
    labelId?: boolean
    properties?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LabelElementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "x" | "y" | "width" | "height" | "size" | "value" | "color" | "rotation" | "labelId" | "properties" | "createdAt" | "updatedAt", ExtArgs["result"]["labelElement"]>
  export type LabelElementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }
  export type LabelElementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }
  export type LabelElementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }

  export type $LabelElementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LabelElement"
    objects: {
      label: Prisma.$LabelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      x: number
      y: number
      width: number | null
      height: number | null
      size: number | null
      value: string | null
      color: string | null
      rotation: number | null
      labelId: string
      properties: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["labelElement"]>
    composites: {}
  }

  type LabelElementGetPayload<S extends boolean | null | undefined | LabelElementDefaultArgs> = $Result.GetResult<Prisma.$LabelElementPayload, S>

  type LabelElementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LabelElementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabelElementCountAggregateInputType | true
    }

  export interface LabelElementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LabelElement'], meta: { name: 'LabelElement' } }
    /**
     * Find zero or one LabelElement that matches the filter.
     * @param {LabelElementFindUniqueArgs} args - Arguments to find a LabelElement
     * @example
     * // Get one LabelElement
     * const labelElement = await prisma.labelElement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabelElementFindUniqueArgs>(args: SelectSubset<T, LabelElementFindUniqueArgs<ExtArgs>>): Prisma__LabelElementClient<$Result.GetResult<Prisma.$LabelElementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LabelElement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabelElementFindUniqueOrThrowArgs} args - Arguments to find a LabelElement
     * @example
     * // Get one LabelElement
     * const labelElement = await prisma.labelElement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabelElementFindUniqueOrThrowArgs>(args: SelectSubset<T, LabelElementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabelElementClient<$Result.GetResult<Prisma.$LabelElementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabelElement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelElementFindFirstArgs} args - Arguments to find a LabelElement
     * @example
     * // Get one LabelElement
     * const labelElement = await prisma.labelElement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabelElementFindFirstArgs>(args?: SelectSubset<T, LabelElementFindFirstArgs<ExtArgs>>): Prisma__LabelElementClient<$Result.GetResult<Prisma.$LabelElementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabelElement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelElementFindFirstOrThrowArgs} args - Arguments to find a LabelElement
     * @example
     * // Get one LabelElement
     * const labelElement = await prisma.labelElement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabelElementFindFirstOrThrowArgs>(args?: SelectSubset<T, LabelElementFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabelElementClient<$Result.GetResult<Prisma.$LabelElementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LabelElements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelElementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LabelElements
     * const labelElements = await prisma.labelElement.findMany()
     * 
     * // Get first 10 LabelElements
     * const labelElements = await prisma.labelElement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const labelElementWithIdOnly = await prisma.labelElement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LabelElementFindManyArgs>(args?: SelectSubset<T, LabelElementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabelElementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LabelElement.
     * @param {LabelElementCreateArgs} args - Arguments to create a LabelElement.
     * @example
     * // Create one LabelElement
     * const LabelElement = await prisma.labelElement.create({
     *   data: {
     *     // ... data to create a LabelElement
     *   }
     * })
     * 
     */
    create<T extends LabelElementCreateArgs>(args: SelectSubset<T, LabelElementCreateArgs<ExtArgs>>): Prisma__LabelElementClient<$Result.GetResult<Prisma.$LabelElementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LabelElements.
     * @param {LabelElementCreateManyArgs} args - Arguments to create many LabelElements.
     * @example
     * // Create many LabelElements
     * const labelElement = await prisma.labelElement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LabelElementCreateManyArgs>(args?: SelectSubset<T, LabelElementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LabelElements and returns the data saved in the database.
     * @param {LabelElementCreateManyAndReturnArgs} args - Arguments to create many LabelElements.
     * @example
     * // Create many LabelElements
     * const labelElement = await prisma.labelElement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LabelElements and only return the `id`
     * const labelElementWithIdOnly = await prisma.labelElement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LabelElementCreateManyAndReturnArgs>(args?: SelectSubset<T, LabelElementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabelElementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LabelElement.
     * @param {LabelElementDeleteArgs} args - Arguments to delete one LabelElement.
     * @example
     * // Delete one LabelElement
     * const LabelElement = await prisma.labelElement.delete({
     *   where: {
     *     // ... filter to delete one LabelElement
     *   }
     * })
     * 
     */
    delete<T extends LabelElementDeleteArgs>(args: SelectSubset<T, LabelElementDeleteArgs<ExtArgs>>): Prisma__LabelElementClient<$Result.GetResult<Prisma.$LabelElementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LabelElement.
     * @param {LabelElementUpdateArgs} args - Arguments to update one LabelElement.
     * @example
     * // Update one LabelElement
     * const labelElement = await prisma.labelElement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LabelElementUpdateArgs>(args: SelectSubset<T, LabelElementUpdateArgs<ExtArgs>>): Prisma__LabelElementClient<$Result.GetResult<Prisma.$LabelElementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LabelElements.
     * @param {LabelElementDeleteManyArgs} args - Arguments to filter LabelElements to delete.
     * @example
     * // Delete a few LabelElements
     * const { count } = await prisma.labelElement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LabelElementDeleteManyArgs>(args?: SelectSubset<T, LabelElementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabelElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelElementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LabelElements
     * const labelElement = await prisma.labelElement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LabelElementUpdateManyArgs>(args: SelectSubset<T, LabelElementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabelElements and returns the data updated in the database.
     * @param {LabelElementUpdateManyAndReturnArgs} args - Arguments to update many LabelElements.
     * @example
     * // Update many LabelElements
     * const labelElement = await prisma.labelElement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LabelElements and only return the `id`
     * const labelElementWithIdOnly = await prisma.labelElement.updateManyAndReturn({
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
    updateManyAndReturn<T extends LabelElementUpdateManyAndReturnArgs>(args: SelectSubset<T, LabelElementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabelElementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LabelElement.
     * @param {LabelElementUpsertArgs} args - Arguments to update or create a LabelElement.
     * @example
     * // Update or create a LabelElement
     * const labelElement = await prisma.labelElement.upsert({
     *   create: {
     *     // ... data to create a LabelElement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LabelElement we want to update
     *   }
     * })
     */
    upsert<T extends LabelElementUpsertArgs>(args: SelectSubset<T, LabelElementUpsertArgs<ExtArgs>>): Prisma__LabelElementClient<$Result.GetResult<Prisma.$LabelElementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LabelElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelElementCountArgs} args - Arguments to filter LabelElements to count.
     * @example
     * // Count the number of LabelElements
     * const count = await prisma.labelElement.count({
     *   where: {
     *     // ... the filter for the LabelElements we want to count
     *   }
     * })
    **/
    count<T extends LabelElementCountArgs>(
      args?: Subset<T, LabelElementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabelElementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LabelElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelElementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LabelElementAggregateArgs>(args: Subset<T, LabelElementAggregateArgs>): Prisma.PrismaPromise<GetLabelElementAggregateType<T>>

    /**
     * Group by LabelElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelElementGroupByArgs} args - Group by arguments.
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
      T extends LabelElementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabelElementGroupByArgs['orderBy'] }
        : { orderBy?: LabelElementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LabelElementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabelElementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LabelElement model
   */
  readonly fields: LabelElementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LabelElement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LabelElementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    label<T extends LabelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LabelDefaultArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LabelElement model
   */
  interface LabelElementFieldRefs {
    readonly id: FieldRef<"LabelElement", 'String'>
    readonly type: FieldRef<"LabelElement", 'String'>
    readonly x: FieldRef<"LabelElement", 'Float'>
    readonly y: FieldRef<"LabelElement", 'Float'>
    readonly width: FieldRef<"LabelElement", 'Float'>
    readonly height: FieldRef<"LabelElement", 'Float'>
    readonly size: FieldRef<"LabelElement", 'Float'>
    readonly value: FieldRef<"LabelElement", 'String'>
    readonly color: FieldRef<"LabelElement", 'String'>
    readonly rotation: FieldRef<"LabelElement", 'Float'>
    readonly labelId: FieldRef<"LabelElement", 'String'>
    readonly properties: FieldRef<"LabelElement", 'Json'>
    readonly createdAt: FieldRef<"LabelElement", 'DateTime'>
    readonly updatedAt: FieldRef<"LabelElement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LabelElement findUnique
   */
  export type LabelElementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabelElement
     */
    select?: LabelElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabelElement
     */
    omit?: LabelElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelElementInclude<ExtArgs> | null
    /**
     * Filter, which LabelElement to fetch.
     */
    where: LabelElementWhereUniqueInput
  }

  /**
   * LabelElement findUniqueOrThrow
   */
  export type LabelElementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabelElement
     */
    select?: LabelElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabelElement
     */
    omit?: LabelElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelElementInclude<ExtArgs> | null
    /**
     * Filter, which LabelElement to fetch.
     */
    where: LabelElementWhereUniqueInput
  }

  /**
   * LabelElement findFirst
   */
  export type LabelElementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabelElement
     */
    select?: LabelElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabelElement
     */
    omit?: LabelElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelElementInclude<ExtArgs> | null
    /**
     * Filter, which LabelElement to fetch.
     */
    where?: LabelElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabelElements to fetch.
     */
    orderBy?: LabelElementOrderByWithRelationInput | LabelElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabelElements.
     */
    cursor?: LabelElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabelElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabelElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabelElements.
     */
    distinct?: LabelElementScalarFieldEnum | LabelElementScalarFieldEnum[]
  }

  /**
   * LabelElement findFirstOrThrow
   */
  export type LabelElementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabelElement
     */
    select?: LabelElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabelElement
     */
    omit?: LabelElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelElementInclude<ExtArgs> | null
    /**
     * Filter, which LabelElement to fetch.
     */
    where?: LabelElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabelElements to fetch.
     */
    orderBy?: LabelElementOrderByWithRelationInput | LabelElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabelElements.
     */
    cursor?: LabelElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabelElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabelElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabelElements.
     */
    distinct?: LabelElementScalarFieldEnum | LabelElementScalarFieldEnum[]
  }

  /**
   * LabelElement findMany
   */
  export type LabelElementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabelElement
     */
    select?: LabelElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabelElement
     */
    omit?: LabelElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelElementInclude<ExtArgs> | null
    /**
     * Filter, which LabelElements to fetch.
     */
    where?: LabelElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabelElements to fetch.
     */
    orderBy?: LabelElementOrderByWithRelationInput | LabelElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LabelElements.
     */
    cursor?: LabelElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabelElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabelElements.
     */
    skip?: number
    distinct?: LabelElementScalarFieldEnum | LabelElementScalarFieldEnum[]
  }

  /**
   * LabelElement create
   */
  export type LabelElementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabelElement
     */
    select?: LabelElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabelElement
     */
    omit?: LabelElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelElementInclude<ExtArgs> | null
    /**
     * The data needed to create a LabelElement.
     */
    data: XOR<LabelElementCreateInput, LabelElementUncheckedCreateInput>
  }

  /**
   * LabelElement createMany
   */
  export type LabelElementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LabelElements.
     */
    data: LabelElementCreateManyInput | LabelElementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LabelElement createManyAndReturn
   */
  export type LabelElementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabelElement
     */
    select?: LabelElementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabelElement
     */
    omit?: LabelElementOmit<ExtArgs> | null
    /**
     * The data used to create many LabelElements.
     */
    data: LabelElementCreateManyInput | LabelElementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelElementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabelElement update
   */
  export type LabelElementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabelElement
     */
    select?: LabelElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabelElement
     */
    omit?: LabelElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelElementInclude<ExtArgs> | null
    /**
     * The data needed to update a LabelElement.
     */
    data: XOR<LabelElementUpdateInput, LabelElementUncheckedUpdateInput>
    /**
     * Choose, which LabelElement to update.
     */
    where: LabelElementWhereUniqueInput
  }

  /**
   * LabelElement updateMany
   */
  export type LabelElementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LabelElements.
     */
    data: XOR<LabelElementUpdateManyMutationInput, LabelElementUncheckedUpdateManyInput>
    /**
     * Filter which LabelElements to update
     */
    where?: LabelElementWhereInput
    /**
     * Limit how many LabelElements to update.
     */
    limit?: number
  }

  /**
   * LabelElement updateManyAndReturn
   */
  export type LabelElementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabelElement
     */
    select?: LabelElementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabelElement
     */
    omit?: LabelElementOmit<ExtArgs> | null
    /**
     * The data used to update LabelElements.
     */
    data: XOR<LabelElementUpdateManyMutationInput, LabelElementUncheckedUpdateManyInput>
    /**
     * Filter which LabelElements to update
     */
    where?: LabelElementWhereInput
    /**
     * Limit how many LabelElements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelElementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabelElement upsert
   */
  export type LabelElementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabelElement
     */
    select?: LabelElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabelElement
     */
    omit?: LabelElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelElementInclude<ExtArgs> | null
    /**
     * The filter to search for the LabelElement to update in case it exists.
     */
    where: LabelElementWhereUniqueInput
    /**
     * In case the LabelElement found by the `where` argument doesn't exist, create a new LabelElement with this data.
     */
    create: XOR<LabelElementCreateInput, LabelElementUncheckedCreateInput>
    /**
     * In case the LabelElement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LabelElementUpdateInput, LabelElementUncheckedUpdateInput>
  }

  /**
   * LabelElement delete
   */
  export type LabelElementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabelElement
     */
    select?: LabelElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabelElement
     */
    omit?: LabelElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelElementInclude<ExtArgs> | null
    /**
     * Filter which LabelElement to delete.
     */
    where: LabelElementWhereUniqueInput
  }

  /**
   * LabelElement deleteMany
   */
  export type LabelElementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabelElements to delete
     */
    where?: LabelElementWhereInput
    /**
     * Limit how many LabelElements to delete.
     */
    limit?: number
  }

  /**
   * LabelElement without action
   */
  export type LabelElementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabelElement
     */
    select?: LabelElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabelElement
     */
    omit?: LabelElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelElementInclude<ExtArgs> | null
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


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    labelId: 'labelId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const LabelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    width: 'width',
    height: 'height',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LabelScalarFieldEnum = (typeof LabelScalarFieldEnum)[keyof typeof LabelScalarFieldEnum]


  export const LabelElementScalarFieldEnum: {
    id: 'id',
    type: 'type',
    x: 'x',
    y: 'y',
    width: 'width',
    height: 'height',
    size: 'size',
    value: 'value',
    color: 'color',
    rotation: 'rotation',
    labelId: 'labelId',
    properties: 'properties',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LabelElementScalarFieldEnum = (typeof LabelElementScalarFieldEnum)[keyof typeof LabelElementScalarFieldEnum]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    labelId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    label?: XOR<LabelScalarRelationFilter, LabelWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    labelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    label?: LabelOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    labelId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    label?: XOR<LabelScalarRelationFilter, LabelWhereInput>
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    labelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    labelId?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type LabelWhereInput = {
    AND?: LabelWhereInput | LabelWhereInput[]
    OR?: LabelWhereInput[]
    NOT?: LabelWhereInput | LabelWhereInput[]
    id?: StringFilter<"Label"> | string
    name?: StringFilter<"Label"> | string
    width?: FloatFilter<"Label"> | number
    height?: FloatFilter<"Label"> | number
    createdAt?: DateTimeFilter<"Label"> | Date | string
    updatedAt?: DateTimeFilter<"Label"> | Date | string
    elements?: LabelElementListRelationFilter
    projects?: ProjectListRelationFilter
  }

  export type LabelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    elements?: LabelElementOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type LabelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LabelWhereInput | LabelWhereInput[]
    OR?: LabelWhereInput[]
    NOT?: LabelWhereInput | LabelWhereInput[]
    name?: StringFilter<"Label"> | string
    width?: FloatFilter<"Label"> | number
    height?: FloatFilter<"Label"> | number
    createdAt?: DateTimeFilter<"Label"> | Date | string
    updatedAt?: DateTimeFilter<"Label"> | Date | string
    elements?: LabelElementListRelationFilter
    projects?: ProjectListRelationFilter
  }, "id">

  export type LabelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LabelCountOrderByAggregateInput
    _avg?: LabelAvgOrderByAggregateInput
    _max?: LabelMaxOrderByAggregateInput
    _min?: LabelMinOrderByAggregateInput
    _sum?: LabelSumOrderByAggregateInput
  }

  export type LabelScalarWhereWithAggregatesInput = {
    AND?: LabelScalarWhereWithAggregatesInput | LabelScalarWhereWithAggregatesInput[]
    OR?: LabelScalarWhereWithAggregatesInput[]
    NOT?: LabelScalarWhereWithAggregatesInput | LabelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Label"> | string
    name?: StringWithAggregatesFilter<"Label"> | string
    width?: FloatWithAggregatesFilter<"Label"> | number
    height?: FloatWithAggregatesFilter<"Label"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Label"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Label"> | Date | string
  }

  export type LabelElementWhereInput = {
    AND?: LabelElementWhereInput | LabelElementWhereInput[]
    OR?: LabelElementWhereInput[]
    NOT?: LabelElementWhereInput | LabelElementWhereInput[]
    id?: StringFilter<"LabelElement"> | string
    type?: StringFilter<"LabelElement"> | string
    x?: FloatFilter<"LabelElement"> | number
    y?: FloatFilter<"LabelElement"> | number
    width?: FloatNullableFilter<"LabelElement"> | number | null
    height?: FloatNullableFilter<"LabelElement"> | number | null
    size?: FloatNullableFilter<"LabelElement"> | number | null
    value?: StringNullableFilter<"LabelElement"> | string | null
    color?: StringNullableFilter<"LabelElement"> | string | null
    rotation?: FloatNullableFilter<"LabelElement"> | number | null
    labelId?: StringFilter<"LabelElement"> | string
    properties?: JsonNullableFilter<"LabelElement">
    createdAt?: DateTimeFilter<"LabelElement"> | Date | string
    updatedAt?: DateTimeFilter<"LabelElement"> | Date | string
    label?: XOR<LabelScalarRelationFilter, LabelWhereInput>
  }

  export type LabelElementOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    rotation?: SortOrderInput | SortOrder
    labelId?: SortOrder
    properties?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    label?: LabelOrderByWithRelationInput
  }

  export type LabelElementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LabelElementWhereInput | LabelElementWhereInput[]
    OR?: LabelElementWhereInput[]
    NOT?: LabelElementWhereInput | LabelElementWhereInput[]
    type?: StringFilter<"LabelElement"> | string
    x?: FloatFilter<"LabelElement"> | number
    y?: FloatFilter<"LabelElement"> | number
    width?: FloatNullableFilter<"LabelElement"> | number | null
    height?: FloatNullableFilter<"LabelElement"> | number | null
    size?: FloatNullableFilter<"LabelElement"> | number | null
    value?: StringNullableFilter<"LabelElement"> | string | null
    color?: StringNullableFilter<"LabelElement"> | string | null
    rotation?: FloatNullableFilter<"LabelElement"> | number | null
    labelId?: StringFilter<"LabelElement"> | string
    properties?: JsonNullableFilter<"LabelElement">
    createdAt?: DateTimeFilter<"LabelElement"> | Date | string
    updatedAt?: DateTimeFilter<"LabelElement"> | Date | string
    label?: XOR<LabelScalarRelationFilter, LabelWhereInput>
  }, "id">

  export type LabelElementOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    rotation?: SortOrderInput | SortOrder
    labelId?: SortOrder
    properties?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LabelElementCountOrderByAggregateInput
    _avg?: LabelElementAvgOrderByAggregateInput
    _max?: LabelElementMaxOrderByAggregateInput
    _min?: LabelElementMinOrderByAggregateInput
    _sum?: LabelElementSumOrderByAggregateInput
  }

  export type LabelElementScalarWhereWithAggregatesInput = {
    AND?: LabelElementScalarWhereWithAggregatesInput | LabelElementScalarWhereWithAggregatesInput[]
    OR?: LabelElementScalarWhereWithAggregatesInput[]
    NOT?: LabelElementScalarWhereWithAggregatesInput | LabelElementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LabelElement"> | string
    type?: StringWithAggregatesFilter<"LabelElement"> | string
    x?: FloatWithAggregatesFilter<"LabelElement"> | number
    y?: FloatWithAggregatesFilter<"LabelElement"> | number
    width?: FloatNullableWithAggregatesFilter<"LabelElement"> | number | null
    height?: FloatNullableWithAggregatesFilter<"LabelElement"> | number | null
    size?: FloatNullableWithAggregatesFilter<"LabelElement"> | number | null
    value?: StringNullableWithAggregatesFilter<"LabelElement"> | string | null
    color?: StringNullableWithAggregatesFilter<"LabelElement"> | string | null
    rotation?: FloatNullableWithAggregatesFilter<"LabelElement"> | number | null
    labelId?: StringWithAggregatesFilter<"LabelElement"> | string
    properties?: JsonNullableWithAggregatesFilter<"LabelElement">
    createdAt?: DateTimeWithAggregatesFilter<"LabelElement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LabelElement"> | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    label: LabelCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    labelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: LabelUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    labelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    labelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    labelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabelCreateInput = {
    id?: string
    name: string
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    elements?: LabelElementCreateNestedManyWithoutLabelInput
    projects?: ProjectCreateNestedManyWithoutLabelInput
  }

  export type LabelUncheckedCreateInput = {
    id?: string
    name: string
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    elements?: LabelElementUncheckedCreateNestedManyWithoutLabelInput
    projects?: ProjectUncheckedCreateNestedManyWithoutLabelInput
  }

  export type LabelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    elements?: LabelElementUpdateManyWithoutLabelNestedInput
    projects?: ProjectUpdateManyWithoutLabelNestedInput
  }

  export type LabelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    elements?: LabelElementUncheckedUpdateManyWithoutLabelNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutLabelNestedInput
  }

  export type LabelCreateManyInput = {
    id?: string
    name: string
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabelElementCreateInput = {
    id?: string
    type: string
    x: number
    y: number
    width?: number | null
    height?: number | null
    size?: number | null
    value?: string | null
    color?: string | null
    rotation?: number | null
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    label: LabelCreateNestedOneWithoutElementsInput
  }

  export type LabelElementUncheckedCreateInput = {
    id?: string
    type: string
    x: number
    y: number
    width?: number | null
    height?: number | null
    size?: number | null
    value?: string | null
    color?: string | null
    rotation?: number | null
    labelId: string
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabelElementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: LabelUpdateOneRequiredWithoutElementsNestedInput
  }

  export type LabelElementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    labelId?: StringFieldUpdateOperationsInput | string
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabelElementCreateManyInput = {
    id?: string
    type: string
    x: number
    y: number
    width?: number | null
    height?: number | null
    size?: number | null
    value?: string | null
    color?: string | null
    rotation?: number | null
    labelId: string
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabelElementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabelElementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    labelId?: StringFieldUpdateOperationsInput | string
    properties?: NullableJsonNullValueInput | InputJsonValue
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

  export type LabelScalarRelationFilter = {
    is?: LabelWhereInput
    isNot?: LabelWhereInput
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    labelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    labelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    labelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type LabelElementListRelationFilter = {
    every?: LabelElementWhereInput
    some?: LabelElementWhereInput
    none?: LabelElementWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type LabelElementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LabelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LabelAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type LabelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LabelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LabelSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LabelElementCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    value?: SortOrder
    color?: SortOrder
    rotation?: SortOrder
    labelId?: SortOrder
    properties?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LabelElementAvgOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    rotation?: SortOrder
  }

  export type LabelElementMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    value?: SortOrder
    color?: SortOrder
    rotation?: SortOrder
    labelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LabelElementMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    value?: SortOrder
    color?: SortOrder
    rotation?: SortOrder
    labelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LabelElementSumOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    rotation?: SortOrder
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

  export type LabelCreateNestedOneWithoutProjectsInput = {
    create?: XOR<LabelCreateWithoutProjectsInput, LabelUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: LabelCreateOrConnectWithoutProjectsInput
    connect?: LabelWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LabelUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<LabelCreateWithoutProjectsInput, LabelUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: LabelCreateOrConnectWithoutProjectsInput
    upsert?: LabelUpsertWithoutProjectsInput
    connect?: LabelWhereUniqueInput
    update?: XOR<XOR<LabelUpdateToOneWithWhereWithoutProjectsInput, LabelUpdateWithoutProjectsInput>, LabelUncheckedUpdateWithoutProjectsInput>
  }

  export type LabelElementCreateNestedManyWithoutLabelInput = {
    create?: XOR<LabelElementCreateWithoutLabelInput, LabelElementUncheckedCreateWithoutLabelInput> | LabelElementCreateWithoutLabelInput[] | LabelElementUncheckedCreateWithoutLabelInput[]
    connectOrCreate?: LabelElementCreateOrConnectWithoutLabelInput | LabelElementCreateOrConnectWithoutLabelInput[]
    createMany?: LabelElementCreateManyLabelInputEnvelope
    connect?: LabelElementWhereUniqueInput | LabelElementWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutLabelInput = {
    create?: XOR<ProjectCreateWithoutLabelInput, ProjectUncheckedCreateWithoutLabelInput> | ProjectCreateWithoutLabelInput[] | ProjectUncheckedCreateWithoutLabelInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutLabelInput | ProjectCreateOrConnectWithoutLabelInput[]
    createMany?: ProjectCreateManyLabelInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type LabelElementUncheckedCreateNestedManyWithoutLabelInput = {
    create?: XOR<LabelElementCreateWithoutLabelInput, LabelElementUncheckedCreateWithoutLabelInput> | LabelElementCreateWithoutLabelInput[] | LabelElementUncheckedCreateWithoutLabelInput[]
    connectOrCreate?: LabelElementCreateOrConnectWithoutLabelInput | LabelElementCreateOrConnectWithoutLabelInput[]
    createMany?: LabelElementCreateManyLabelInputEnvelope
    connect?: LabelElementWhereUniqueInput | LabelElementWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutLabelInput = {
    create?: XOR<ProjectCreateWithoutLabelInput, ProjectUncheckedCreateWithoutLabelInput> | ProjectCreateWithoutLabelInput[] | ProjectUncheckedCreateWithoutLabelInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutLabelInput | ProjectCreateOrConnectWithoutLabelInput[]
    createMany?: ProjectCreateManyLabelInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LabelElementUpdateManyWithoutLabelNestedInput = {
    create?: XOR<LabelElementCreateWithoutLabelInput, LabelElementUncheckedCreateWithoutLabelInput> | LabelElementCreateWithoutLabelInput[] | LabelElementUncheckedCreateWithoutLabelInput[]
    connectOrCreate?: LabelElementCreateOrConnectWithoutLabelInput | LabelElementCreateOrConnectWithoutLabelInput[]
    upsert?: LabelElementUpsertWithWhereUniqueWithoutLabelInput | LabelElementUpsertWithWhereUniqueWithoutLabelInput[]
    createMany?: LabelElementCreateManyLabelInputEnvelope
    set?: LabelElementWhereUniqueInput | LabelElementWhereUniqueInput[]
    disconnect?: LabelElementWhereUniqueInput | LabelElementWhereUniqueInput[]
    delete?: LabelElementWhereUniqueInput | LabelElementWhereUniqueInput[]
    connect?: LabelElementWhereUniqueInput | LabelElementWhereUniqueInput[]
    update?: LabelElementUpdateWithWhereUniqueWithoutLabelInput | LabelElementUpdateWithWhereUniqueWithoutLabelInput[]
    updateMany?: LabelElementUpdateManyWithWhereWithoutLabelInput | LabelElementUpdateManyWithWhereWithoutLabelInput[]
    deleteMany?: LabelElementScalarWhereInput | LabelElementScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutLabelNestedInput = {
    create?: XOR<ProjectCreateWithoutLabelInput, ProjectUncheckedCreateWithoutLabelInput> | ProjectCreateWithoutLabelInput[] | ProjectUncheckedCreateWithoutLabelInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutLabelInput | ProjectCreateOrConnectWithoutLabelInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutLabelInput | ProjectUpsertWithWhereUniqueWithoutLabelInput[]
    createMany?: ProjectCreateManyLabelInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutLabelInput | ProjectUpdateWithWhereUniqueWithoutLabelInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutLabelInput | ProjectUpdateManyWithWhereWithoutLabelInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type LabelElementUncheckedUpdateManyWithoutLabelNestedInput = {
    create?: XOR<LabelElementCreateWithoutLabelInput, LabelElementUncheckedCreateWithoutLabelInput> | LabelElementCreateWithoutLabelInput[] | LabelElementUncheckedCreateWithoutLabelInput[]
    connectOrCreate?: LabelElementCreateOrConnectWithoutLabelInput | LabelElementCreateOrConnectWithoutLabelInput[]
    upsert?: LabelElementUpsertWithWhereUniqueWithoutLabelInput | LabelElementUpsertWithWhereUniqueWithoutLabelInput[]
    createMany?: LabelElementCreateManyLabelInputEnvelope
    set?: LabelElementWhereUniqueInput | LabelElementWhereUniqueInput[]
    disconnect?: LabelElementWhereUniqueInput | LabelElementWhereUniqueInput[]
    delete?: LabelElementWhereUniqueInput | LabelElementWhereUniqueInput[]
    connect?: LabelElementWhereUniqueInput | LabelElementWhereUniqueInput[]
    update?: LabelElementUpdateWithWhereUniqueWithoutLabelInput | LabelElementUpdateWithWhereUniqueWithoutLabelInput[]
    updateMany?: LabelElementUpdateManyWithWhereWithoutLabelInput | LabelElementUpdateManyWithWhereWithoutLabelInput[]
    deleteMany?: LabelElementScalarWhereInput | LabelElementScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutLabelNestedInput = {
    create?: XOR<ProjectCreateWithoutLabelInput, ProjectUncheckedCreateWithoutLabelInput> | ProjectCreateWithoutLabelInput[] | ProjectUncheckedCreateWithoutLabelInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutLabelInput | ProjectCreateOrConnectWithoutLabelInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutLabelInput | ProjectUpsertWithWhereUniqueWithoutLabelInput[]
    createMany?: ProjectCreateManyLabelInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutLabelInput | ProjectUpdateWithWhereUniqueWithoutLabelInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutLabelInput | ProjectUpdateManyWithWhereWithoutLabelInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type LabelCreateNestedOneWithoutElementsInput = {
    create?: XOR<LabelCreateWithoutElementsInput, LabelUncheckedCreateWithoutElementsInput>
    connectOrCreate?: LabelCreateOrConnectWithoutElementsInput
    connect?: LabelWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LabelUpdateOneRequiredWithoutElementsNestedInput = {
    create?: XOR<LabelCreateWithoutElementsInput, LabelUncheckedCreateWithoutElementsInput>
    connectOrCreate?: LabelCreateOrConnectWithoutElementsInput
    upsert?: LabelUpsertWithoutElementsInput
    connect?: LabelWhereUniqueInput
    update?: XOR<XOR<LabelUpdateToOneWithWhereWithoutElementsInput, LabelUpdateWithoutElementsInput>, LabelUncheckedUpdateWithoutElementsInput>
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

  export type LabelCreateWithoutProjectsInput = {
    id?: string
    name: string
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    elements?: LabelElementCreateNestedManyWithoutLabelInput
  }

  export type LabelUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    elements?: LabelElementUncheckedCreateNestedManyWithoutLabelInput
  }

  export type LabelCreateOrConnectWithoutProjectsInput = {
    where: LabelWhereUniqueInput
    create: XOR<LabelCreateWithoutProjectsInput, LabelUncheckedCreateWithoutProjectsInput>
  }

  export type LabelUpsertWithoutProjectsInput = {
    update: XOR<LabelUpdateWithoutProjectsInput, LabelUncheckedUpdateWithoutProjectsInput>
    create: XOR<LabelCreateWithoutProjectsInput, LabelUncheckedCreateWithoutProjectsInput>
    where?: LabelWhereInput
  }

  export type LabelUpdateToOneWithWhereWithoutProjectsInput = {
    where?: LabelWhereInput
    data: XOR<LabelUpdateWithoutProjectsInput, LabelUncheckedUpdateWithoutProjectsInput>
  }

  export type LabelUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    elements?: LabelElementUpdateManyWithoutLabelNestedInput
  }

  export type LabelUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    elements?: LabelElementUncheckedUpdateManyWithoutLabelNestedInput
  }

  export type LabelElementCreateWithoutLabelInput = {
    id?: string
    type: string
    x: number
    y: number
    width?: number | null
    height?: number | null
    size?: number | null
    value?: string | null
    color?: string | null
    rotation?: number | null
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabelElementUncheckedCreateWithoutLabelInput = {
    id?: string
    type: string
    x: number
    y: number
    width?: number | null
    height?: number | null
    size?: number | null
    value?: string | null
    color?: string | null
    rotation?: number | null
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabelElementCreateOrConnectWithoutLabelInput = {
    where: LabelElementWhereUniqueInput
    create: XOR<LabelElementCreateWithoutLabelInput, LabelElementUncheckedCreateWithoutLabelInput>
  }

  export type LabelElementCreateManyLabelInputEnvelope = {
    data: LabelElementCreateManyLabelInput | LabelElementCreateManyLabelInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutLabelInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUncheckedCreateWithoutLabelInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutLabelInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutLabelInput, ProjectUncheckedCreateWithoutLabelInput>
  }

  export type ProjectCreateManyLabelInputEnvelope = {
    data: ProjectCreateManyLabelInput | ProjectCreateManyLabelInput[]
    skipDuplicates?: boolean
  }

  export type LabelElementUpsertWithWhereUniqueWithoutLabelInput = {
    where: LabelElementWhereUniqueInput
    update: XOR<LabelElementUpdateWithoutLabelInput, LabelElementUncheckedUpdateWithoutLabelInput>
    create: XOR<LabelElementCreateWithoutLabelInput, LabelElementUncheckedCreateWithoutLabelInput>
  }

  export type LabelElementUpdateWithWhereUniqueWithoutLabelInput = {
    where: LabelElementWhereUniqueInput
    data: XOR<LabelElementUpdateWithoutLabelInput, LabelElementUncheckedUpdateWithoutLabelInput>
  }

  export type LabelElementUpdateManyWithWhereWithoutLabelInput = {
    where: LabelElementScalarWhereInput
    data: XOR<LabelElementUpdateManyMutationInput, LabelElementUncheckedUpdateManyWithoutLabelInput>
  }

  export type LabelElementScalarWhereInput = {
    AND?: LabelElementScalarWhereInput | LabelElementScalarWhereInput[]
    OR?: LabelElementScalarWhereInput[]
    NOT?: LabelElementScalarWhereInput | LabelElementScalarWhereInput[]
    id?: StringFilter<"LabelElement"> | string
    type?: StringFilter<"LabelElement"> | string
    x?: FloatFilter<"LabelElement"> | number
    y?: FloatFilter<"LabelElement"> | number
    width?: FloatNullableFilter<"LabelElement"> | number | null
    height?: FloatNullableFilter<"LabelElement"> | number | null
    size?: FloatNullableFilter<"LabelElement"> | number | null
    value?: StringNullableFilter<"LabelElement"> | string | null
    color?: StringNullableFilter<"LabelElement"> | string | null
    rotation?: FloatNullableFilter<"LabelElement"> | number | null
    labelId?: StringFilter<"LabelElement"> | string
    properties?: JsonNullableFilter<"LabelElement">
    createdAt?: DateTimeFilter<"LabelElement"> | Date | string
    updatedAt?: DateTimeFilter<"LabelElement"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutLabelInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutLabelInput, ProjectUncheckedUpdateWithoutLabelInput>
    create: XOR<ProjectCreateWithoutLabelInput, ProjectUncheckedCreateWithoutLabelInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutLabelInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutLabelInput, ProjectUncheckedUpdateWithoutLabelInput>
  }

  export type ProjectUpdateManyWithWhereWithoutLabelInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutLabelInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    labelId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type LabelCreateWithoutElementsInput = {
    id?: string
    name: string
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutLabelInput
  }

  export type LabelUncheckedCreateWithoutElementsInput = {
    id?: string
    name: string
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutLabelInput
  }

  export type LabelCreateOrConnectWithoutElementsInput = {
    where: LabelWhereUniqueInput
    create: XOR<LabelCreateWithoutElementsInput, LabelUncheckedCreateWithoutElementsInput>
  }

  export type LabelUpsertWithoutElementsInput = {
    update: XOR<LabelUpdateWithoutElementsInput, LabelUncheckedUpdateWithoutElementsInput>
    create: XOR<LabelCreateWithoutElementsInput, LabelUncheckedCreateWithoutElementsInput>
    where?: LabelWhereInput
  }

  export type LabelUpdateToOneWithWhereWithoutElementsInput = {
    where?: LabelWhereInput
    data: XOR<LabelUpdateWithoutElementsInput, LabelUncheckedUpdateWithoutElementsInput>
  }

  export type LabelUpdateWithoutElementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutLabelNestedInput
  }

  export type LabelUncheckedUpdateWithoutElementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutLabelNestedInput
  }

  export type LabelElementCreateManyLabelInput = {
    id?: string
    type: string
    x: number
    y: number
    width?: number | null
    height?: number | null
    size?: number | null
    value?: string | null
    color?: string | null
    rotation?: number | null
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyLabelInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabelElementUpdateWithoutLabelInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabelElementUncheckedUpdateWithoutLabelInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabelElementUncheckedUpdateManyWithoutLabelInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutLabelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutLabelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyWithoutLabelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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