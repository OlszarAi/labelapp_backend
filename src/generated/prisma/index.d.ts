
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ResetToken
 * 
 */
export type ResetToken = $Result.DefaultSelection<Prisma.$ResetTokenPayload>
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
 * Model FabricProject
 * 
 */
export type FabricProject = $Result.DefaultSelection<Prisma.$FabricProjectPayload>
/**
 * Model FabricCanvas
 * 
 */
export type FabricCanvas = $Result.DefaultSelection<Prisma.$FabricCanvasPayload>
/**
 * Model FabricObject
 * 
 */
export type FabricObject = $Result.DefaultSelection<Prisma.$FabricObjectPayload>
/**
 * Model FabricTemplate
 * 
 */
export type FabricTemplate = $Result.DefaultSelection<Prisma.$FabricTemplatePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.resetToken`: Exposes CRUD operations for the **ResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResetTokens
    * const resetTokens = await prisma.resetToken.findMany()
    * ```
    */
  get resetToken(): Prisma.ResetTokenDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.label`: Exposes CRUD operations for the **Label** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Labels
    * const labels = await prisma.label.findMany()
    * ```
    */
  get label(): Prisma.LabelDelegate<ExtArgs>;

  /**
   * `prisma.labelElement`: Exposes CRUD operations for the **LabelElement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LabelElements
    * const labelElements = await prisma.labelElement.findMany()
    * ```
    */
  get labelElement(): Prisma.LabelElementDelegate<ExtArgs>;

  /**
   * `prisma.fabricProject`: Exposes CRUD operations for the **FabricProject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FabricProjects
    * const fabricProjects = await prisma.fabricProject.findMany()
    * ```
    */
  get fabricProject(): Prisma.FabricProjectDelegate<ExtArgs>;

  /**
   * `prisma.fabricCanvas`: Exposes CRUD operations for the **FabricCanvas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FabricCanvas
    * const fabricCanvas = await prisma.fabricCanvas.findMany()
    * ```
    */
  get fabricCanvas(): Prisma.FabricCanvasDelegate<ExtArgs>;

  /**
   * `prisma.fabricObject`: Exposes CRUD operations for the **FabricObject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FabricObjects
    * const fabricObjects = await prisma.fabricObject.findMany()
    * ```
    */
  get fabricObject(): Prisma.FabricObjectDelegate<ExtArgs>;

  /**
   * `prisma.fabricTemplate`: Exposes CRUD operations for the **FabricTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FabricTemplates
    * const fabricTemplates = await prisma.fabricTemplate.findMany()
    * ```
    */
  get fabricTemplate(): Prisma.FabricTemplateDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    ResetToken: 'ResetToken',
    Project: 'Project',
    Label: 'Label',
    LabelElement: 'LabelElement',
    FabricProject: 'FabricProject',
    FabricCanvas: 'FabricCanvas',
    FabricObject: 'FabricObject',
    FabricTemplate: 'FabricTemplate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "resetToken" | "project" | "label" | "labelElement" | "fabricProject" | "fabricCanvas" | "fabricObject" | "fabricTemplate"
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
      ResetToken: {
        payload: Prisma.$ResetTokenPayload<ExtArgs>
        fields: Prisma.ResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTokenPayload>
          }
          findFirst: {
            args: Prisma.ResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTokenPayload>
          }
          findMany: {
            args: Prisma.ResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTokenPayload>[]
          }
          create: {
            args: Prisma.ResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTokenPayload>
          }
          createMany: {
            args: Prisma.ResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTokenPayload>[]
          }
          delete: {
            args: Prisma.ResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTokenPayload>
          }
          update: {
            args: Prisma.ResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.ResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTokenPayload>
          }
          aggregate: {
            args: Prisma.ResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResetToken>
          }
          groupBy: {
            args: Prisma.ResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<ResetTokenCountAggregateOutputType> | number
          }
        }
      }
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
      FabricProject: {
        payload: Prisma.$FabricProjectPayload<ExtArgs>
        fields: Prisma.FabricProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FabricProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FabricProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricProjectPayload>
          }
          findFirst: {
            args: Prisma.FabricProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FabricProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricProjectPayload>
          }
          findMany: {
            args: Prisma.FabricProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricProjectPayload>[]
          }
          create: {
            args: Prisma.FabricProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricProjectPayload>
          }
          createMany: {
            args: Prisma.FabricProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FabricProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricProjectPayload>[]
          }
          delete: {
            args: Prisma.FabricProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricProjectPayload>
          }
          update: {
            args: Prisma.FabricProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricProjectPayload>
          }
          deleteMany: {
            args: Prisma.FabricProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FabricProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FabricProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricProjectPayload>
          }
          aggregate: {
            args: Prisma.FabricProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFabricProject>
          }
          groupBy: {
            args: Prisma.FabricProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<FabricProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.FabricProjectCountArgs<ExtArgs>
            result: $Utils.Optional<FabricProjectCountAggregateOutputType> | number
          }
        }
      }
      FabricCanvas: {
        payload: Prisma.$FabricCanvasPayload<ExtArgs>
        fields: Prisma.FabricCanvasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FabricCanvasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricCanvasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FabricCanvasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricCanvasPayload>
          }
          findFirst: {
            args: Prisma.FabricCanvasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricCanvasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FabricCanvasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricCanvasPayload>
          }
          findMany: {
            args: Prisma.FabricCanvasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricCanvasPayload>[]
          }
          create: {
            args: Prisma.FabricCanvasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricCanvasPayload>
          }
          createMany: {
            args: Prisma.FabricCanvasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FabricCanvasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricCanvasPayload>[]
          }
          delete: {
            args: Prisma.FabricCanvasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricCanvasPayload>
          }
          update: {
            args: Prisma.FabricCanvasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricCanvasPayload>
          }
          deleteMany: {
            args: Prisma.FabricCanvasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FabricCanvasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FabricCanvasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricCanvasPayload>
          }
          aggregate: {
            args: Prisma.FabricCanvasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFabricCanvas>
          }
          groupBy: {
            args: Prisma.FabricCanvasGroupByArgs<ExtArgs>
            result: $Utils.Optional<FabricCanvasGroupByOutputType>[]
          }
          count: {
            args: Prisma.FabricCanvasCountArgs<ExtArgs>
            result: $Utils.Optional<FabricCanvasCountAggregateOutputType> | number
          }
        }
      }
      FabricObject: {
        payload: Prisma.$FabricObjectPayload<ExtArgs>
        fields: Prisma.FabricObjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FabricObjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricObjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FabricObjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricObjectPayload>
          }
          findFirst: {
            args: Prisma.FabricObjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricObjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FabricObjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricObjectPayload>
          }
          findMany: {
            args: Prisma.FabricObjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricObjectPayload>[]
          }
          create: {
            args: Prisma.FabricObjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricObjectPayload>
          }
          createMany: {
            args: Prisma.FabricObjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FabricObjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricObjectPayload>[]
          }
          delete: {
            args: Prisma.FabricObjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricObjectPayload>
          }
          update: {
            args: Prisma.FabricObjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricObjectPayload>
          }
          deleteMany: {
            args: Prisma.FabricObjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FabricObjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FabricObjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricObjectPayload>
          }
          aggregate: {
            args: Prisma.FabricObjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFabricObject>
          }
          groupBy: {
            args: Prisma.FabricObjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<FabricObjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.FabricObjectCountArgs<ExtArgs>
            result: $Utils.Optional<FabricObjectCountAggregateOutputType> | number
          }
        }
      }
      FabricTemplate: {
        payload: Prisma.$FabricTemplatePayload<ExtArgs>
        fields: Prisma.FabricTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FabricTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FabricTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricTemplatePayload>
          }
          findFirst: {
            args: Prisma.FabricTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FabricTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricTemplatePayload>
          }
          findMany: {
            args: Prisma.FabricTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricTemplatePayload>[]
          }
          create: {
            args: Prisma.FabricTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricTemplatePayload>
          }
          createMany: {
            args: Prisma.FabricTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FabricTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricTemplatePayload>[]
          }
          delete: {
            args: Prisma.FabricTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricTemplatePayload>
          }
          update: {
            args: Prisma.FabricTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricTemplatePayload>
          }
          deleteMany: {
            args: Prisma.FabricTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FabricTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FabricTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricTemplatePayload>
          }
          aggregate: {
            args: Prisma.FabricTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFabricTemplate>
          }
          groupBy: {
            args: Prisma.FabricTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<FabricTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.FabricTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<FabricTemplateCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projects: number
    resetTokens: number
    fabricProjects: number
    fabricTemplates: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    resetTokens?: boolean | UserCountOutputTypeCountResetTokensArgs
    fabricProjects?: boolean | UserCountOutputTypeCountFabricProjectsArgs
    fabricTemplates?: boolean | UserCountOutputTypeCountFabricTemplatesArgs
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
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResetTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResetTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFabricProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FabricProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFabricTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FabricTemplateWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    labels: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    labels?: boolean | ProjectCountOutputTypeCountLabelsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountLabelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabelWhereInput
  }


  /**
   * Count Type LabelCountOutputType
   */

  export type LabelCountOutputType = {
    elements: number
  }

  export type LabelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elements?: boolean | LabelCountOutputTypeCountElementsArgs
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
   * Count Type FabricProjectCountOutputType
   */

  export type FabricProjectCountOutputType = {
    canvases: number
  }

  export type FabricProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canvases?: boolean | FabricProjectCountOutputTypeCountCanvasesArgs
  }

  // Custom InputTypes
  /**
   * FabricProjectCountOutputType without action
   */
  export type FabricProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricProjectCountOutputType
     */
    select?: FabricProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FabricProjectCountOutputType without action
   */
  export type FabricProjectCountOutputTypeCountCanvasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FabricCanvasWhereInput
  }


  /**
   * Count Type FabricCanvasCountOutputType
   */

  export type FabricCanvasCountOutputType = {
    objects: number
  }

  export type FabricCanvasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objects?: boolean | FabricCanvasCountOutputTypeCountObjectsArgs
  }

  // Custom InputTypes
  /**
   * FabricCanvasCountOutputType without action
   */
  export type FabricCanvasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricCanvasCountOutputType
     */
    select?: FabricCanvasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FabricCanvasCountOutputType without action
   */
  export type FabricCanvasCountOutputTypeCountObjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FabricObjectWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projects?: boolean | User$projectsArgs<ExtArgs>
    resetTokens?: boolean | User$resetTokensArgs<ExtArgs>
    fabricProjects?: boolean | User$fabricProjectsArgs<ExtArgs>
    fabricTemplates?: boolean | User$fabricTemplatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | User$projectsArgs<ExtArgs>
    resetTokens?: boolean | User$resetTokensArgs<ExtArgs>
    fabricProjects?: boolean | User$fabricProjectsArgs<ExtArgs>
    fabricTemplates?: boolean | User$fabricTemplatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      resetTokens: Prisma.$ResetTokenPayload<ExtArgs>[]
      fabricProjects: Prisma.$FabricProjectPayload<ExtArgs>[]
      fabricTemplates: Prisma.$FabricTemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany"> | Null>
    resetTokens<T extends User$resetTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$resetTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResetTokenPayload<ExtArgs>, T, "findMany"> | Null>
    fabricProjects<T extends User$fabricProjectsArgs<ExtArgs> = {}>(args?: Subset<T, User$fabricProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FabricProjectPayload<ExtArgs>, T, "findMany"> | Null>
    fabricTemplates<T extends User$fabricTemplatesArgs<ExtArgs> = {}>(args?: Subset<T, User$fabricTemplatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FabricTemplatePayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
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
   * User.resetTokens
   */
  export type User$resetTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null
    where?: ResetTokenWhereInput
    orderBy?: ResetTokenOrderByWithRelationInput | ResetTokenOrderByWithRelationInput[]
    cursor?: ResetTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResetTokenScalarFieldEnum | ResetTokenScalarFieldEnum[]
  }

  /**
   * User.fabricProjects
   */
  export type User$fabricProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricProject
     */
    select?: FabricProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricProjectInclude<ExtArgs> | null
    where?: FabricProjectWhereInput
    orderBy?: FabricProjectOrderByWithRelationInput | FabricProjectOrderByWithRelationInput[]
    cursor?: FabricProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FabricProjectScalarFieldEnum | FabricProjectScalarFieldEnum[]
  }

  /**
   * User.fabricTemplates
   */
  export type User$fabricTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricTemplate
     */
    select?: FabricTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricTemplateInclude<ExtArgs> | null
    where?: FabricTemplateWhereInput
    orderBy?: FabricTemplateOrderByWithRelationInput | FabricTemplateOrderByWithRelationInput[]
    cursor?: FabricTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FabricTemplateScalarFieldEnum | FabricTemplateScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ResetToken
   */

  export type AggregateResetToken = {
    _count: ResetTokenCountAggregateOutputType | null
    _min: ResetTokenMinAggregateOutputType | null
    _max: ResetTokenMaxAggregateOutputType | null
  }

  export type ResetTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type ResetTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type ResetTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type ResetTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type ResetTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type ResetTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type ResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResetToken to aggregate.
     */
    where?: ResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetTokens to fetch.
     */
    orderBy?: ResetTokenOrderByWithRelationInput | ResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResetTokens
    **/
    _count?: true | ResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResetTokenMaxAggregateInputType
  }

  export type GetResetTokenAggregateType<T extends ResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResetToken[P]>
      : GetScalarType<T[P], AggregateResetToken[P]>
  }




  export type ResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResetTokenWhereInput
    orderBy?: ResetTokenOrderByWithAggregationInput | ResetTokenOrderByWithAggregationInput[]
    by: ResetTokenScalarFieldEnum[] | ResetTokenScalarFieldEnum
    having?: ResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResetTokenCountAggregateInputType | true
    _min?: ResetTokenMinAggregateInputType
    _max?: ResetTokenMaxAggregateInputType
  }

  export type ResetTokenGroupByOutputType = {
    id: string
    token: string
    userId: string
    expiresAt: Date
    createdAt: Date
    _count: ResetTokenCountAggregateOutputType | null
    _min: ResetTokenMinAggregateOutputType | null
    _max: ResetTokenMaxAggregateOutputType | null
  }

  type GetResetTokenGroupByPayload<T extends ResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], ResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type ResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resetToken"]>

  export type ResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resetToken"]>

  export type ResetTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type ResetTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResetTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResetToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["resetToken"]>
    composites: {}
  }

  type ResetTokenGetPayload<S extends boolean | null | undefined | ResetTokenDefaultArgs> = $Result.GetResult<Prisma.$ResetTokenPayload, S>

  type ResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResetTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResetTokenCountAggregateInputType | true
    }

  export interface ResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResetToken'], meta: { name: 'ResetToken' } }
    /**
     * Find zero or one ResetToken that matches the filter.
     * @param {ResetTokenFindUniqueArgs} args - Arguments to find a ResetToken
     * @example
     * // Get one ResetToken
     * const resetToken = await prisma.resetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResetTokenFindUniqueArgs>(args: SelectSubset<T, ResetTokenFindUniqueArgs<ExtArgs>>): Prisma__ResetTokenClient<$Result.GetResult<Prisma.$ResetTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ResetToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResetTokenFindUniqueOrThrowArgs} args - Arguments to find a ResetToken
     * @example
     * // Get one ResetToken
     * const resetToken = await prisma.resetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, ResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResetTokenClient<$Result.GetResult<Prisma.$ResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTokenFindFirstArgs} args - Arguments to find a ResetToken
     * @example
     * // Get one ResetToken
     * const resetToken = await prisma.resetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResetTokenFindFirstArgs>(args?: SelectSubset<T, ResetTokenFindFirstArgs<ExtArgs>>): Prisma__ResetTokenClient<$Result.GetResult<Prisma.$ResetTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTokenFindFirstOrThrowArgs} args - Arguments to find a ResetToken
     * @example
     * // Get one ResetToken
     * const resetToken = await prisma.resetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, ResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResetTokenClient<$Result.GetResult<Prisma.$ResetTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResetTokens
     * const resetTokens = await prisma.resetToken.findMany()
     * 
     * // Get first 10 ResetTokens
     * const resetTokens = await prisma.resetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resetTokenWithIdOnly = await prisma.resetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResetTokenFindManyArgs>(args?: SelectSubset<T, ResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResetTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ResetToken.
     * @param {ResetTokenCreateArgs} args - Arguments to create a ResetToken.
     * @example
     * // Create one ResetToken
     * const ResetToken = await prisma.resetToken.create({
     *   data: {
     *     // ... data to create a ResetToken
     *   }
     * })
     * 
     */
    create<T extends ResetTokenCreateArgs>(args: SelectSubset<T, ResetTokenCreateArgs<ExtArgs>>): Prisma__ResetTokenClient<$Result.GetResult<Prisma.$ResetTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ResetTokens.
     * @param {ResetTokenCreateManyArgs} args - Arguments to create many ResetTokens.
     * @example
     * // Create many ResetTokens
     * const resetToken = await prisma.resetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResetTokenCreateManyArgs>(args?: SelectSubset<T, ResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResetTokens and returns the data saved in the database.
     * @param {ResetTokenCreateManyAndReturnArgs} args - Arguments to create many ResetTokens.
     * @example
     * // Create many ResetTokens
     * const resetToken = await prisma.resetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResetTokens and only return the `id`
     * const resetTokenWithIdOnly = await prisma.resetToken.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, ResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResetTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ResetToken.
     * @param {ResetTokenDeleteArgs} args - Arguments to delete one ResetToken.
     * @example
     * // Delete one ResetToken
     * const ResetToken = await prisma.resetToken.delete({
     *   where: {
     *     // ... filter to delete one ResetToken
     *   }
     * })
     * 
     */
    delete<T extends ResetTokenDeleteArgs>(args: SelectSubset<T, ResetTokenDeleteArgs<ExtArgs>>): Prisma__ResetTokenClient<$Result.GetResult<Prisma.$ResetTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ResetToken.
     * @param {ResetTokenUpdateArgs} args - Arguments to update one ResetToken.
     * @example
     * // Update one ResetToken
     * const resetToken = await prisma.resetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResetTokenUpdateArgs>(args: SelectSubset<T, ResetTokenUpdateArgs<ExtArgs>>): Prisma__ResetTokenClient<$Result.GetResult<Prisma.$ResetTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ResetTokens.
     * @param {ResetTokenDeleteManyArgs} args - Arguments to filter ResetTokens to delete.
     * @example
     * // Delete a few ResetTokens
     * const { count } = await prisma.resetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResetTokenDeleteManyArgs>(args?: SelectSubset<T, ResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResetTokens
     * const resetToken = await prisma.resetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResetTokenUpdateManyArgs>(args: SelectSubset<T, ResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResetToken.
     * @param {ResetTokenUpsertArgs} args - Arguments to update or create a ResetToken.
     * @example
     * // Update or create a ResetToken
     * const resetToken = await prisma.resetToken.upsert({
     *   create: {
     *     // ... data to create a ResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResetToken we want to update
     *   }
     * })
     */
    upsert<T extends ResetTokenUpsertArgs>(args: SelectSubset<T, ResetTokenUpsertArgs<ExtArgs>>): Prisma__ResetTokenClient<$Result.GetResult<Prisma.$ResetTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTokenCountArgs} args - Arguments to filter ResetTokens to count.
     * @example
     * // Count the number of ResetTokens
     * const count = await prisma.resetToken.count({
     *   where: {
     *     // ... the filter for the ResetTokens we want to count
     *   }
     * })
    **/
    count<T extends ResetTokenCountArgs>(
      args?: Subset<T, ResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResetTokenAggregateArgs>(args: Subset<T, ResetTokenAggregateArgs>): Prisma.PrismaPromise<GetResetTokenAggregateType<T>>

    /**
     * Group by ResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTokenGroupByArgs} args - Group by arguments.
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
      T extends ResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: ResetTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResetToken model
   */
  readonly fields: ResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ResetToken model
   */ 
  interface ResetTokenFieldRefs {
    readonly id: FieldRef<"ResetToken", 'String'>
    readonly token: FieldRef<"ResetToken", 'String'>
    readonly userId: FieldRef<"ResetToken", 'String'>
    readonly expiresAt: FieldRef<"ResetToken", 'DateTime'>
    readonly createdAt: FieldRef<"ResetToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResetToken findUnique
   */
  export type ResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which ResetToken to fetch.
     */
    where: ResetTokenWhereUniqueInput
  }

  /**
   * ResetToken findUniqueOrThrow
   */
  export type ResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which ResetToken to fetch.
     */
    where: ResetTokenWhereUniqueInput
  }

  /**
   * ResetToken findFirst
   */
  export type ResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which ResetToken to fetch.
     */
    where?: ResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetTokens to fetch.
     */
    orderBy?: ResetTokenOrderByWithRelationInput | ResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResetTokens.
     */
    cursor?: ResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResetTokens.
     */
    distinct?: ResetTokenScalarFieldEnum | ResetTokenScalarFieldEnum[]
  }

  /**
   * ResetToken findFirstOrThrow
   */
  export type ResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which ResetToken to fetch.
     */
    where?: ResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetTokens to fetch.
     */
    orderBy?: ResetTokenOrderByWithRelationInput | ResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResetTokens.
     */
    cursor?: ResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResetTokens.
     */
    distinct?: ResetTokenScalarFieldEnum | ResetTokenScalarFieldEnum[]
  }

  /**
   * ResetToken findMany
   */
  export type ResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which ResetTokens to fetch.
     */
    where?: ResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetTokens to fetch.
     */
    orderBy?: ResetTokenOrderByWithRelationInput | ResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResetTokens.
     */
    cursor?: ResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetTokens.
     */
    skip?: number
    distinct?: ResetTokenScalarFieldEnum | ResetTokenScalarFieldEnum[]
  }

  /**
   * ResetToken create
   */
  export type ResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a ResetToken.
     */
    data: XOR<ResetTokenCreateInput, ResetTokenUncheckedCreateInput>
  }

  /**
   * ResetToken createMany
   */
  export type ResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResetTokens.
     */
    data: ResetTokenCreateManyInput | ResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResetToken createManyAndReturn
   */
  export type ResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ResetTokens.
     */
    data: ResetTokenCreateManyInput | ResetTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResetToken update
   */
  export type ResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a ResetToken.
     */
    data: XOR<ResetTokenUpdateInput, ResetTokenUncheckedUpdateInput>
    /**
     * Choose, which ResetToken to update.
     */
    where: ResetTokenWhereUniqueInput
  }

  /**
   * ResetToken updateMany
   */
  export type ResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResetTokens.
     */
    data: XOR<ResetTokenUpdateManyMutationInput, ResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which ResetTokens to update
     */
    where?: ResetTokenWhereInput
  }

  /**
   * ResetToken upsert
   */
  export type ResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the ResetToken to update in case it exists.
     */
    where: ResetTokenWhereUniqueInput
    /**
     * In case the ResetToken found by the `where` argument doesn't exist, create a new ResetToken with this data.
     */
    create: XOR<ResetTokenCreateInput, ResetTokenUncheckedCreateInput>
    /**
     * In case the ResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResetTokenUpdateInput, ResetTokenUncheckedUpdateInput>
  }

  /**
   * ResetToken delete
   */
  export type ResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null
    /**
     * Filter which ResetToken to delete.
     */
    where: ResetTokenWhereUniqueInput
  }

  /**
   * ResetToken deleteMany
   */
  export type ResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResetTokens to delete
     */
    where?: ResetTokenWhereInput
  }

  /**
   * ResetToken without action
   */
  export type ResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null
  }


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
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    description: string | null
    icon: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    description: string | null
    icon: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    userId: number
    description: number
    icon: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    description?: true
    icon?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    description?: true
    icon?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    description?: true
    icon?: true
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
    createdAt: Date
    updatedAt: Date
    userId: string | null
    description: string | null
    icon: string | null
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
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    description?: boolean
    icon?: boolean
    labels?: boolean | Project$labelsArgs<ExtArgs>
    user?: boolean | Project$userArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    description?: boolean
    icon?: boolean
    user?: boolean | Project$userArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    description?: boolean
    icon?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    labels?: boolean | Project$labelsArgs<ExtArgs>
    user?: boolean | Project$userArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Project$userArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      labels: Prisma.$LabelPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      userId: string | null
      description: string | null
      icon: string | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany">>

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
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    labels<T extends Project$labelsArgs<ExtArgs> = {}>(args?: Subset<T, Project$labelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findMany"> | Null>
    user<T extends Project$userArgs<ExtArgs> = {}>(args?: Subset<T, Project$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly userId: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly icon: FieldRef<"Project", 'String'>
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
  }

  /**
   * Project.labels
   */
  export type Project$labelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    where?: LabelWhereInput
    orderBy?: LabelOrderByWithRelationInput | LabelOrderByWithRelationInput[]
    cursor?: LabelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabelScalarFieldEnum | LabelScalarFieldEnum[]
  }

  /**
   * Project.user
   */
  export type Project$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
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
    projectId: string | null
  }

  export type LabelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    width: number | null
    height: number | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
  }

  export type LabelCountAggregateOutputType = {
    id: number
    name: number
    width: number
    height: number
    createdAt: number
    updatedAt: number
    projectId: number
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
    projectId?: true
  }

  export type LabelMaxAggregateInputType = {
    id?: true
    name?: true
    width?: true
    height?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
  }

  export type LabelCountAggregateInputType = {
    id?: true
    name?: true
    width?: true
    height?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
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
    projectId: string | null
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
    projectId?: boolean
    project?: boolean | Label$projectArgs<ExtArgs>
    elements?: boolean | Label$elementsArgs<ExtArgs>
    _count?: boolean | LabelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["label"]>

  export type LabelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | Label$projectArgs<ExtArgs>
  }, ExtArgs["result"]["label"]>

  export type LabelSelectScalar = {
    id?: boolean
    name?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
  }

  export type LabelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | Label$projectArgs<ExtArgs>
    elements?: boolean | Label$elementsArgs<ExtArgs>
    _count?: boolean | LabelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LabelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | Label$projectArgs<ExtArgs>
  }

  export type $LabelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Label"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs> | null
      elements: Prisma.$LabelElementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      width: number
      height: number
      createdAt: Date
      updatedAt: Date
      projectId: string | null
    }, ExtArgs["result"]["label"]>
    composites: {}
  }

  type LabelGetPayload<S extends boolean | null | undefined | LabelDefaultArgs> = $Result.GetResult<Prisma.$LabelPayload, S>

  type LabelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LabelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LabelCountAggregateInputType | true
    }

  export interface LabelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends LabelFindUniqueArgs>(args: SelectSubset<T, LabelFindUniqueArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends LabelFindUniqueOrThrowArgs>(args: SelectSubset<T, LabelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends LabelFindFirstArgs>(args?: SelectSubset<T, LabelFindFirstArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends LabelFindFirstOrThrowArgs>(args?: SelectSubset<T, LabelFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends LabelFindManyArgs>(args?: SelectSubset<T, LabelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findMany">>

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
    create<T extends LabelCreateArgs>(args: SelectSubset<T, LabelCreateArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends LabelCreateManyAndReturnArgs>(args?: SelectSubset<T, LabelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends LabelDeleteArgs>(args: SelectSubset<T, LabelDeleteArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends LabelUpdateArgs>(args: SelectSubset<T, LabelUpdateArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends LabelUpsertArgs>(args: SelectSubset<T, LabelUpsertArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__LabelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends Label$projectArgs<ExtArgs> = {}>(args?: Subset<T, Label$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    elements<T extends Label$elementsArgs<ExtArgs> = {}>(args?: Subset<T, Label$elementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabelElementPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly projectId: FieldRef<"Label", 'String'>
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
     * The data used to create many Labels.
     */
    data: LabelCreateManyInput | LabelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelIncludeCreateManyAndReturn<ExtArgs> | null
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
  }

  /**
   * Label.project
   */
  export type Label$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
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
   * Label without action
   */
  export type LabelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
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
    rotation: number | null
    fontSize: number | null
  }

  export type LabelElementSumAggregateOutputType = {
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    rotation: number | null
    fontSize: number | null
  }

  export type LabelElementMinAggregateOutputType = {
    id: string | null
    type: string | null
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    value: string | null
    color: string | null
    rotation: number | null
    labelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    fontSize: number | null
  }

  export type LabelElementMaxAggregateOutputType = {
    id: string | null
    type: string | null
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    value: string | null
    color: string | null
    rotation: number | null
    labelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    fontSize: number | null
  }

  export type LabelElementCountAggregateOutputType = {
    id: number
    type: number
    x: number
    y: number
    width: number
    height: number
    value: number
    color: number
    rotation: number
    labelId: number
    properties: number
    createdAt: number
    updatedAt: number
    fontSize: number
    _all: number
  }


  export type LabelElementAvgAggregateInputType = {
    x?: true
    y?: true
    width?: true
    height?: true
    rotation?: true
    fontSize?: true
  }

  export type LabelElementSumAggregateInputType = {
    x?: true
    y?: true
    width?: true
    height?: true
    rotation?: true
    fontSize?: true
  }

  export type LabelElementMinAggregateInputType = {
    id?: true
    type?: true
    x?: true
    y?: true
    width?: true
    height?: true
    value?: true
    color?: true
    rotation?: true
    labelId?: true
    createdAt?: true
    updatedAt?: true
    fontSize?: true
  }

  export type LabelElementMaxAggregateInputType = {
    id?: true
    type?: true
    x?: true
    y?: true
    width?: true
    height?: true
    value?: true
    color?: true
    rotation?: true
    labelId?: true
    createdAt?: true
    updatedAt?: true
    fontSize?: true
  }

  export type LabelElementCountAggregateInputType = {
    id?: true
    type?: true
    x?: true
    y?: true
    width?: true
    height?: true
    value?: true
    color?: true
    rotation?: true
    labelId?: true
    properties?: true
    createdAt?: true
    updatedAt?: true
    fontSize?: true
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
    value: string | null
    color: string | null
    rotation: number | null
    labelId: string
    properties: JsonValue | null
    createdAt: Date
    updatedAt: Date
    fontSize: number | null
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
    value?: boolean
    color?: boolean
    rotation?: boolean
    labelId?: boolean
    properties?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fontSize?: boolean
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labelElement"]>

  export type LabelElementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    value?: boolean
    color?: boolean
    rotation?: boolean
    labelId?: boolean
    properties?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fontSize?: boolean
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labelElement"]>

  export type LabelElementSelectScalar = {
    id?: boolean
    type?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    value?: boolean
    color?: boolean
    rotation?: boolean
    labelId?: boolean
    properties?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fontSize?: boolean
  }

  export type LabelElementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }
  export type LabelElementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
      value: string | null
      color: string | null
      rotation: number | null
      labelId: string
      properties: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
      fontSize: number | null
    }, ExtArgs["result"]["labelElement"]>
    composites: {}
  }

  type LabelElementGetPayload<S extends boolean | null | undefined | LabelElementDefaultArgs> = $Result.GetResult<Prisma.$LabelElementPayload, S>

  type LabelElementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LabelElementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LabelElementCountAggregateInputType | true
    }

  export interface LabelElementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends LabelElementFindUniqueArgs>(args: SelectSubset<T, LabelElementFindUniqueArgs<ExtArgs>>): Prisma__LabelElementClient<$Result.GetResult<Prisma.$LabelElementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends LabelElementFindUniqueOrThrowArgs>(args: SelectSubset<T, LabelElementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabelElementClient<$Result.GetResult<Prisma.$LabelElementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends LabelElementFindFirstArgs>(args?: SelectSubset<T, LabelElementFindFirstArgs<ExtArgs>>): Prisma__LabelElementClient<$Result.GetResult<Prisma.$LabelElementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends LabelElementFindFirstOrThrowArgs>(args?: SelectSubset<T, LabelElementFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabelElementClient<$Result.GetResult<Prisma.$LabelElementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends LabelElementFindManyArgs>(args?: SelectSubset<T, LabelElementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabelElementPayload<ExtArgs>, T, "findMany">>

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
    create<T extends LabelElementCreateArgs>(args: SelectSubset<T, LabelElementCreateArgs<ExtArgs>>): Prisma__LabelElementClient<$Result.GetResult<Prisma.$LabelElementPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends LabelElementCreateManyAndReturnArgs>(args?: SelectSubset<T, LabelElementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabelElementPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends LabelElementDeleteArgs>(args: SelectSubset<T, LabelElementDeleteArgs<ExtArgs>>): Prisma__LabelElementClient<$Result.GetResult<Prisma.$LabelElementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends LabelElementUpdateArgs>(args: SelectSubset<T, LabelElementUpdateArgs<ExtArgs>>): Prisma__LabelElementClient<$Result.GetResult<Prisma.$LabelElementPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends LabelElementUpsertArgs>(args: SelectSubset<T, LabelElementUpsertArgs<ExtArgs>>): Prisma__LabelElementClient<$Result.GetResult<Prisma.$LabelElementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__LabelElementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    label<T extends LabelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LabelDefaultArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
    readonly value: FieldRef<"LabelElement", 'String'>
    readonly color: FieldRef<"LabelElement", 'String'>
    readonly rotation: FieldRef<"LabelElement", 'Float'>
    readonly labelId: FieldRef<"LabelElement", 'String'>
    readonly properties: FieldRef<"LabelElement", 'Json'>
    readonly createdAt: FieldRef<"LabelElement", 'DateTime'>
    readonly updatedAt: FieldRef<"LabelElement", 'DateTime'>
    readonly fontSize: FieldRef<"LabelElement", 'Float'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: LabelElementInclude<ExtArgs> | null
  }


  /**
   * Model FabricProject
   */

  export type AggregateFabricProject = {
    _count: FabricProjectCountAggregateOutputType | null
    _min: FabricProjectMinAggregateOutputType | null
    _max: FabricProjectMaxAggregateOutputType | null
  }

  export type FabricProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FabricProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FabricProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    icon: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FabricProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FabricProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FabricProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FabricProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FabricProject to aggregate.
     */
    where?: FabricProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FabricProjects to fetch.
     */
    orderBy?: FabricProjectOrderByWithRelationInput | FabricProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FabricProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FabricProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FabricProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FabricProjects
    **/
    _count?: true | FabricProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FabricProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FabricProjectMaxAggregateInputType
  }

  export type GetFabricProjectAggregateType<T extends FabricProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateFabricProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFabricProject[P]>
      : GetScalarType<T[P], AggregateFabricProject[P]>
  }




  export type FabricProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FabricProjectWhereInput
    orderBy?: FabricProjectOrderByWithAggregationInput | FabricProjectOrderByWithAggregationInput[]
    by: FabricProjectScalarFieldEnum[] | FabricProjectScalarFieldEnum
    having?: FabricProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FabricProjectCountAggregateInputType | true
    _min?: FabricProjectMinAggregateInputType
    _max?: FabricProjectMaxAggregateInputType
  }

  export type FabricProjectGroupByOutputType = {
    id: string
    name: string
    description: string | null
    icon: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: FabricProjectCountAggregateOutputType | null
    _min: FabricProjectMinAggregateOutputType | null
    _max: FabricProjectMaxAggregateOutputType | null
  }

  type GetFabricProjectGroupByPayload<T extends FabricProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FabricProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FabricProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FabricProjectGroupByOutputType[P]>
            : GetScalarType<T[P], FabricProjectGroupByOutputType[P]>
        }
      >
    >


  export type FabricProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    canvases?: boolean | FabricProject$canvasesArgs<ExtArgs>
    _count?: boolean | FabricProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fabricProject"]>

  export type FabricProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fabricProject"]>

  export type FabricProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FabricProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    canvases?: boolean | FabricProject$canvasesArgs<ExtArgs>
    _count?: boolean | FabricProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FabricProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FabricProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FabricProject"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      canvases: Prisma.$FabricCanvasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      icon: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fabricProject"]>
    composites: {}
  }

  type FabricProjectGetPayload<S extends boolean | null | undefined | FabricProjectDefaultArgs> = $Result.GetResult<Prisma.$FabricProjectPayload, S>

  type FabricProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FabricProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FabricProjectCountAggregateInputType | true
    }

  export interface FabricProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FabricProject'], meta: { name: 'FabricProject' } }
    /**
     * Find zero or one FabricProject that matches the filter.
     * @param {FabricProjectFindUniqueArgs} args - Arguments to find a FabricProject
     * @example
     * // Get one FabricProject
     * const fabricProject = await prisma.fabricProject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FabricProjectFindUniqueArgs>(args: SelectSubset<T, FabricProjectFindUniqueArgs<ExtArgs>>): Prisma__FabricProjectClient<$Result.GetResult<Prisma.$FabricProjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FabricProject that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FabricProjectFindUniqueOrThrowArgs} args - Arguments to find a FabricProject
     * @example
     * // Get one FabricProject
     * const fabricProject = await prisma.fabricProject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FabricProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, FabricProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FabricProjectClient<$Result.GetResult<Prisma.$FabricProjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FabricProject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricProjectFindFirstArgs} args - Arguments to find a FabricProject
     * @example
     * // Get one FabricProject
     * const fabricProject = await prisma.fabricProject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FabricProjectFindFirstArgs>(args?: SelectSubset<T, FabricProjectFindFirstArgs<ExtArgs>>): Prisma__FabricProjectClient<$Result.GetResult<Prisma.$FabricProjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FabricProject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricProjectFindFirstOrThrowArgs} args - Arguments to find a FabricProject
     * @example
     * // Get one FabricProject
     * const fabricProject = await prisma.fabricProject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FabricProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, FabricProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__FabricProjectClient<$Result.GetResult<Prisma.$FabricProjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FabricProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FabricProjects
     * const fabricProjects = await prisma.fabricProject.findMany()
     * 
     * // Get first 10 FabricProjects
     * const fabricProjects = await prisma.fabricProject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fabricProjectWithIdOnly = await prisma.fabricProject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FabricProjectFindManyArgs>(args?: SelectSubset<T, FabricProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FabricProjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FabricProject.
     * @param {FabricProjectCreateArgs} args - Arguments to create a FabricProject.
     * @example
     * // Create one FabricProject
     * const FabricProject = await prisma.fabricProject.create({
     *   data: {
     *     // ... data to create a FabricProject
     *   }
     * })
     * 
     */
    create<T extends FabricProjectCreateArgs>(args: SelectSubset<T, FabricProjectCreateArgs<ExtArgs>>): Prisma__FabricProjectClient<$Result.GetResult<Prisma.$FabricProjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FabricProjects.
     * @param {FabricProjectCreateManyArgs} args - Arguments to create many FabricProjects.
     * @example
     * // Create many FabricProjects
     * const fabricProject = await prisma.fabricProject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FabricProjectCreateManyArgs>(args?: SelectSubset<T, FabricProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FabricProjects and returns the data saved in the database.
     * @param {FabricProjectCreateManyAndReturnArgs} args - Arguments to create many FabricProjects.
     * @example
     * // Create many FabricProjects
     * const fabricProject = await prisma.fabricProject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FabricProjects and only return the `id`
     * const fabricProjectWithIdOnly = await prisma.fabricProject.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FabricProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, FabricProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FabricProjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FabricProject.
     * @param {FabricProjectDeleteArgs} args - Arguments to delete one FabricProject.
     * @example
     * // Delete one FabricProject
     * const FabricProject = await prisma.fabricProject.delete({
     *   where: {
     *     // ... filter to delete one FabricProject
     *   }
     * })
     * 
     */
    delete<T extends FabricProjectDeleteArgs>(args: SelectSubset<T, FabricProjectDeleteArgs<ExtArgs>>): Prisma__FabricProjectClient<$Result.GetResult<Prisma.$FabricProjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FabricProject.
     * @param {FabricProjectUpdateArgs} args - Arguments to update one FabricProject.
     * @example
     * // Update one FabricProject
     * const fabricProject = await prisma.fabricProject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FabricProjectUpdateArgs>(args: SelectSubset<T, FabricProjectUpdateArgs<ExtArgs>>): Prisma__FabricProjectClient<$Result.GetResult<Prisma.$FabricProjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FabricProjects.
     * @param {FabricProjectDeleteManyArgs} args - Arguments to filter FabricProjects to delete.
     * @example
     * // Delete a few FabricProjects
     * const { count } = await prisma.fabricProject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FabricProjectDeleteManyArgs>(args?: SelectSubset<T, FabricProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FabricProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FabricProjects
     * const fabricProject = await prisma.fabricProject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FabricProjectUpdateManyArgs>(args: SelectSubset<T, FabricProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FabricProject.
     * @param {FabricProjectUpsertArgs} args - Arguments to update or create a FabricProject.
     * @example
     * // Update or create a FabricProject
     * const fabricProject = await prisma.fabricProject.upsert({
     *   create: {
     *     // ... data to create a FabricProject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FabricProject we want to update
     *   }
     * })
     */
    upsert<T extends FabricProjectUpsertArgs>(args: SelectSubset<T, FabricProjectUpsertArgs<ExtArgs>>): Prisma__FabricProjectClient<$Result.GetResult<Prisma.$FabricProjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FabricProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricProjectCountArgs} args - Arguments to filter FabricProjects to count.
     * @example
     * // Count the number of FabricProjects
     * const count = await prisma.fabricProject.count({
     *   where: {
     *     // ... the filter for the FabricProjects we want to count
     *   }
     * })
    **/
    count<T extends FabricProjectCountArgs>(
      args?: Subset<T, FabricProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FabricProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FabricProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FabricProjectAggregateArgs>(args: Subset<T, FabricProjectAggregateArgs>): Prisma.PrismaPromise<GetFabricProjectAggregateType<T>>

    /**
     * Group by FabricProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricProjectGroupByArgs} args - Group by arguments.
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
      T extends FabricProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FabricProjectGroupByArgs['orderBy'] }
        : { orderBy?: FabricProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FabricProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFabricProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FabricProject model
   */
  readonly fields: FabricProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FabricProject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FabricProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    canvases<T extends FabricProject$canvasesArgs<ExtArgs> = {}>(args?: Subset<T, FabricProject$canvasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FabricCanvasPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the FabricProject model
   */ 
  interface FabricProjectFieldRefs {
    readonly id: FieldRef<"FabricProject", 'String'>
    readonly name: FieldRef<"FabricProject", 'String'>
    readonly description: FieldRef<"FabricProject", 'String'>
    readonly icon: FieldRef<"FabricProject", 'String'>
    readonly userId: FieldRef<"FabricProject", 'String'>
    readonly createdAt: FieldRef<"FabricProject", 'DateTime'>
    readonly updatedAt: FieldRef<"FabricProject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FabricProject findUnique
   */
  export type FabricProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricProject
     */
    select?: FabricProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricProjectInclude<ExtArgs> | null
    /**
     * Filter, which FabricProject to fetch.
     */
    where: FabricProjectWhereUniqueInput
  }

  /**
   * FabricProject findUniqueOrThrow
   */
  export type FabricProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricProject
     */
    select?: FabricProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricProjectInclude<ExtArgs> | null
    /**
     * Filter, which FabricProject to fetch.
     */
    where: FabricProjectWhereUniqueInput
  }

  /**
   * FabricProject findFirst
   */
  export type FabricProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricProject
     */
    select?: FabricProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricProjectInclude<ExtArgs> | null
    /**
     * Filter, which FabricProject to fetch.
     */
    where?: FabricProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FabricProjects to fetch.
     */
    orderBy?: FabricProjectOrderByWithRelationInput | FabricProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FabricProjects.
     */
    cursor?: FabricProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FabricProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FabricProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FabricProjects.
     */
    distinct?: FabricProjectScalarFieldEnum | FabricProjectScalarFieldEnum[]
  }

  /**
   * FabricProject findFirstOrThrow
   */
  export type FabricProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricProject
     */
    select?: FabricProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricProjectInclude<ExtArgs> | null
    /**
     * Filter, which FabricProject to fetch.
     */
    where?: FabricProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FabricProjects to fetch.
     */
    orderBy?: FabricProjectOrderByWithRelationInput | FabricProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FabricProjects.
     */
    cursor?: FabricProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FabricProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FabricProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FabricProjects.
     */
    distinct?: FabricProjectScalarFieldEnum | FabricProjectScalarFieldEnum[]
  }

  /**
   * FabricProject findMany
   */
  export type FabricProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricProject
     */
    select?: FabricProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricProjectInclude<ExtArgs> | null
    /**
     * Filter, which FabricProjects to fetch.
     */
    where?: FabricProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FabricProjects to fetch.
     */
    orderBy?: FabricProjectOrderByWithRelationInput | FabricProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FabricProjects.
     */
    cursor?: FabricProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FabricProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FabricProjects.
     */
    skip?: number
    distinct?: FabricProjectScalarFieldEnum | FabricProjectScalarFieldEnum[]
  }

  /**
   * FabricProject create
   */
  export type FabricProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricProject
     */
    select?: FabricProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a FabricProject.
     */
    data: XOR<FabricProjectCreateInput, FabricProjectUncheckedCreateInput>
  }

  /**
   * FabricProject createMany
   */
  export type FabricProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FabricProjects.
     */
    data: FabricProjectCreateManyInput | FabricProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FabricProject createManyAndReturn
   */
  export type FabricProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricProject
     */
    select?: FabricProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FabricProjects.
     */
    data: FabricProjectCreateManyInput | FabricProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FabricProject update
   */
  export type FabricProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricProject
     */
    select?: FabricProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a FabricProject.
     */
    data: XOR<FabricProjectUpdateInput, FabricProjectUncheckedUpdateInput>
    /**
     * Choose, which FabricProject to update.
     */
    where: FabricProjectWhereUniqueInput
  }

  /**
   * FabricProject updateMany
   */
  export type FabricProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FabricProjects.
     */
    data: XOR<FabricProjectUpdateManyMutationInput, FabricProjectUncheckedUpdateManyInput>
    /**
     * Filter which FabricProjects to update
     */
    where?: FabricProjectWhereInput
  }

  /**
   * FabricProject upsert
   */
  export type FabricProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricProject
     */
    select?: FabricProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the FabricProject to update in case it exists.
     */
    where: FabricProjectWhereUniqueInput
    /**
     * In case the FabricProject found by the `where` argument doesn't exist, create a new FabricProject with this data.
     */
    create: XOR<FabricProjectCreateInput, FabricProjectUncheckedCreateInput>
    /**
     * In case the FabricProject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FabricProjectUpdateInput, FabricProjectUncheckedUpdateInput>
  }

  /**
   * FabricProject delete
   */
  export type FabricProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricProject
     */
    select?: FabricProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricProjectInclude<ExtArgs> | null
    /**
     * Filter which FabricProject to delete.
     */
    where: FabricProjectWhereUniqueInput
  }

  /**
   * FabricProject deleteMany
   */
  export type FabricProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FabricProjects to delete
     */
    where?: FabricProjectWhereInput
  }

  /**
   * FabricProject.canvases
   */
  export type FabricProject$canvasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricCanvas
     */
    select?: FabricCanvasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricCanvasInclude<ExtArgs> | null
    where?: FabricCanvasWhereInput
    orderBy?: FabricCanvasOrderByWithRelationInput | FabricCanvasOrderByWithRelationInput[]
    cursor?: FabricCanvasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FabricCanvasScalarFieldEnum | FabricCanvasScalarFieldEnum[]
  }

  /**
   * FabricProject without action
   */
  export type FabricProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricProject
     */
    select?: FabricProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricProjectInclude<ExtArgs> | null
  }


  /**
   * Model FabricCanvas
   */

  export type AggregateFabricCanvas = {
    _count: FabricCanvasCountAggregateOutputType | null
    _avg: FabricCanvasAvgAggregateOutputType | null
    _sum: FabricCanvasSumAggregateOutputType | null
    _min: FabricCanvasMinAggregateOutputType | null
    _max: FabricCanvasMaxAggregateOutputType | null
  }

  export type FabricCanvasAvgAggregateOutputType = {
    width: number | null
    height: number | null
    version: number | null
  }

  export type FabricCanvasSumAggregateOutputType = {
    width: number | null
    height: number | null
    version: number | null
  }

  export type FabricCanvasMinAggregateOutputType = {
    id: string | null
    name: string | null
    width: number | null
    height: number | null
    unit: string | null
    background: string | null
    projectId: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FabricCanvasMaxAggregateOutputType = {
    id: string | null
    name: string | null
    width: number | null
    height: number | null
    unit: string | null
    background: string | null
    projectId: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FabricCanvasCountAggregateOutputType = {
    id: number
    name: number
    width: number
    height: number
    unit: number
    background: number
    projectId: number
    version: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FabricCanvasAvgAggregateInputType = {
    width?: true
    height?: true
    version?: true
  }

  export type FabricCanvasSumAggregateInputType = {
    width?: true
    height?: true
    version?: true
  }

  export type FabricCanvasMinAggregateInputType = {
    id?: true
    name?: true
    width?: true
    height?: true
    unit?: true
    background?: true
    projectId?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FabricCanvasMaxAggregateInputType = {
    id?: true
    name?: true
    width?: true
    height?: true
    unit?: true
    background?: true
    projectId?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FabricCanvasCountAggregateInputType = {
    id?: true
    name?: true
    width?: true
    height?: true
    unit?: true
    background?: true
    projectId?: true
    version?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FabricCanvasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FabricCanvas to aggregate.
     */
    where?: FabricCanvasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FabricCanvas to fetch.
     */
    orderBy?: FabricCanvasOrderByWithRelationInput | FabricCanvasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FabricCanvasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FabricCanvas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FabricCanvas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FabricCanvas
    **/
    _count?: true | FabricCanvasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FabricCanvasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FabricCanvasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FabricCanvasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FabricCanvasMaxAggregateInputType
  }

  export type GetFabricCanvasAggregateType<T extends FabricCanvasAggregateArgs> = {
        [P in keyof T & keyof AggregateFabricCanvas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFabricCanvas[P]>
      : GetScalarType<T[P], AggregateFabricCanvas[P]>
  }




  export type FabricCanvasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FabricCanvasWhereInput
    orderBy?: FabricCanvasOrderByWithAggregationInput | FabricCanvasOrderByWithAggregationInput[]
    by: FabricCanvasScalarFieldEnum[] | FabricCanvasScalarFieldEnum
    having?: FabricCanvasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FabricCanvasCountAggregateInputType | true
    _avg?: FabricCanvasAvgAggregateInputType
    _sum?: FabricCanvasSumAggregateInputType
    _min?: FabricCanvasMinAggregateInputType
    _max?: FabricCanvasMaxAggregateInputType
  }

  export type FabricCanvasGroupByOutputType = {
    id: string
    name: string
    width: number
    height: number
    unit: string
    background: string | null
    projectId: string
    version: number
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: FabricCanvasCountAggregateOutputType | null
    _avg: FabricCanvasAvgAggregateOutputType | null
    _sum: FabricCanvasSumAggregateOutputType | null
    _min: FabricCanvasMinAggregateOutputType | null
    _max: FabricCanvasMaxAggregateOutputType | null
  }

  type GetFabricCanvasGroupByPayload<T extends FabricCanvasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FabricCanvasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FabricCanvasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FabricCanvasGroupByOutputType[P]>
            : GetScalarType<T[P], FabricCanvasGroupByOutputType[P]>
        }
      >
    >


  export type FabricCanvasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    width?: boolean
    height?: boolean
    unit?: boolean
    background?: boolean
    projectId?: boolean
    version?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | FabricProjectDefaultArgs<ExtArgs>
    objects?: boolean | FabricCanvas$objectsArgs<ExtArgs>
    _count?: boolean | FabricCanvasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fabricCanvas"]>

  export type FabricCanvasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    width?: boolean
    height?: boolean
    unit?: boolean
    background?: boolean
    projectId?: boolean
    version?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | FabricProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fabricCanvas"]>

  export type FabricCanvasSelectScalar = {
    id?: boolean
    name?: boolean
    width?: boolean
    height?: boolean
    unit?: boolean
    background?: boolean
    projectId?: boolean
    version?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FabricCanvasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | FabricProjectDefaultArgs<ExtArgs>
    objects?: boolean | FabricCanvas$objectsArgs<ExtArgs>
    _count?: boolean | FabricCanvasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FabricCanvasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | FabricProjectDefaultArgs<ExtArgs>
  }

  export type $FabricCanvasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FabricCanvas"
    objects: {
      project: Prisma.$FabricProjectPayload<ExtArgs>
      objects: Prisma.$FabricObjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      width: number
      height: number
      unit: string
      background: string | null
      projectId: string
      version: number
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fabricCanvas"]>
    composites: {}
  }

  type FabricCanvasGetPayload<S extends boolean | null | undefined | FabricCanvasDefaultArgs> = $Result.GetResult<Prisma.$FabricCanvasPayload, S>

  type FabricCanvasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FabricCanvasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FabricCanvasCountAggregateInputType | true
    }

  export interface FabricCanvasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FabricCanvas'], meta: { name: 'FabricCanvas' } }
    /**
     * Find zero or one FabricCanvas that matches the filter.
     * @param {FabricCanvasFindUniqueArgs} args - Arguments to find a FabricCanvas
     * @example
     * // Get one FabricCanvas
     * const fabricCanvas = await prisma.fabricCanvas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FabricCanvasFindUniqueArgs>(args: SelectSubset<T, FabricCanvasFindUniqueArgs<ExtArgs>>): Prisma__FabricCanvasClient<$Result.GetResult<Prisma.$FabricCanvasPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FabricCanvas that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FabricCanvasFindUniqueOrThrowArgs} args - Arguments to find a FabricCanvas
     * @example
     * // Get one FabricCanvas
     * const fabricCanvas = await prisma.fabricCanvas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FabricCanvasFindUniqueOrThrowArgs>(args: SelectSubset<T, FabricCanvasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FabricCanvasClient<$Result.GetResult<Prisma.$FabricCanvasPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FabricCanvas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricCanvasFindFirstArgs} args - Arguments to find a FabricCanvas
     * @example
     * // Get one FabricCanvas
     * const fabricCanvas = await prisma.fabricCanvas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FabricCanvasFindFirstArgs>(args?: SelectSubset<T, FabricCanvasFindFirstArgs<ExtArgs>>): Prisma__FabricCanvasClient<$Result.GetResult<Prisma.$FabricCanvasPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FabricCanvas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricCanvasFindFirstOrThrowArgs} args - Arguments to find a FabricCanvas
     * @example
     * // Get one FabricCanvas
     * const fabricCanvas = await prisma.fabricCanvas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FabricCanvasFindFirstOrThrowArgs>(args?: SelectSubset<T, FabricCanvasFindFirstOrThrowArgs<ExtArgs>>): Prisma__FabricCanvasClient<$Result.GetResult<Prisma.$FabricCanvasPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FabricCanvas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricCanvasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FabricCanvas
     * const fabricCanvas = await prisma.fabricCanvas.findMany()
     * 
     * // Get first 10 FabricCanvas
     * const fabricCanvas = await prisma.fabricCanvas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fabricCanvasWithIdOnly = await prisma.fabricCanvas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FabricCanvasFindManyArgs>(args?: SelectSubset<T, FabricCanvasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FabricCanvasPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FabricCanvas.
     * @param {FabricCanvasCreateArgs} args - Arguments to create a FabricCanvas.
     * @example
     * // Create one FabricCanvas
     * const FabricCanvas = await prisma.fabricCanvas.create({
     *   data: {
     *     // ... data to create a FabricCanvas
     *   }
     * })
     * 
     */
    create<T extends FabricCanvasCreateArgs>(args: SelectSubset<T, FabricCanvasCreateArgs<ExtArgs>>): Prisma__FabricCanvasClient<$Result.GetResult<Prisma.$FabricCanvasPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FabricCanvas.
     * @param {FabricCanvasCreateManyArgs} args - Arguments to create many FabricCanvas.
     * @example
     * // Create many FabricCanvas
     * const fabricCanvas = await prisma.fabricCanvas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FabricCanvasCreateManyArgs>(args?: SelectSubset<T, FabricCanvasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FabricCanvas and returns the data saved in the database.
     * @param {FabricCanvasCreateManyAndReturnArgs} args - Arguments to create many FabricCanvas.
     * @example
     * // Create many FabricCanvas
     * const fabricCanvas = await prisma.fabricCanvas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FabricCanvas and only return the `id`
     * const fabricCanvasWithIdOnly = await prisma.fabricCanvas.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FabricCanvasCreateManyAndReturnArgs>(args?: SelectSubset<T, FabricCanvasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FabricCanvasPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FabricCanvas.
     * @param {FabricCanvasDeleteArgs} args - Arguments to delete one FabricCanvas.
     * @example
     * // Delete one FabricCanvas
     * const FabricCanvas = await prisma.fabricCanvas.delete({
     *   where: {
     *     // ... filter to delete one FabricCanvas
     *   }
     * })
     * 
     */
    delete<T extends FabricCanvasDeleteArgs>(args: SelectSubset<T, FabricCanvasDeleteArgs<ExtArgs>>): Prisma__FabricCanvasClient<$Result.GetResult<Prisma.$FabricCanvasPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FabricCanvas.
     * @param {FabricCanvasUpdateArgs} args - Arguments to update one FabricCanvas.
     * @example
     * // Update one FabricCanvas
     * const fabricCanvas = await prisma.fabricCanvas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FabricCanvasUpdateArgs>(args: SelectSubset<T, FabricCanvasUpdateArgs<ExtArgs>>): Prisma__FabricCanvasClient<$Result.GetResult<Prisma.$FabricCanvasPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FabricCanvas.
     * @param {FabricCanvasDeleteManyArgs} args - Arguments to filter FabricCanvas to delete.
     * @example
     * // Delete a few FabricCanvas
     * const { count } = await prisma.fabricCanvas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FabricCanvasDeleteManyArgs>(args?: SelectSubset<T, FabricCanvasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FabricCanvas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricCanvasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FabricCanvas
     * const fabricCanvas = await prisma.fabricCanvas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FabricCanvasUpdateManyArgs>(args: SelectSubset<T, FabricCanvasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FabricCanvas.
     * @param {FabricCanvasUpsertArgs} args - Arguments to update or create a FabricCanvas.
     * @example
     * // Update or create a FabricCanvas
     * const fabricCanvas = await prisma.fabricCanvas.upsert({
     *   create: {
     *     // ... data to create a FabricCanvas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FabricCanvas we want to update
     *   }
     * })
     */
    upsert<T extends FabricCanvasUpsertArgs>(args: SelectSubset<T, FabricCanvasUpsertArgs<ExtArgs>>): Prisma__FabricCanvasClient<$Result.GetResult<Prisma.$FabricCanvasPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FabricCanvas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricCanvasCountArgs} args - Arguments to filter FabricCanvas to count.
     * @example
     * // Count the number of FabricCanvas
     * const count = await prisma.fabricCanvas.count({
     *   where: {
     *     // ... the filter for the FabricCanvas we want to count
     *   }
     * })
    **/
    count<T extends FabricCanvasCountArgs>(
      args?: Subset<T, FabricCanvasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FabricCanvasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FabricCanvas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricCanvasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FabricCanvasAggregateArgs>(args: Subset<T, FabricCanvasAggregateArgs>): Prisma.PrismaPromise<GetFabricCanvasAggregateType<T>>

    /**
     * Group by FabricCanvas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricCanvasGroupByArgs} args - Group by arguments.
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
      T extends FabricCanvasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FabricCanvasGroupByArgs['orderBy'] }
        : { orderBy?: FabricCanvasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FabricCanvasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFabricCanvasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FabricCanvas model
   */
  readonly fields: FabricCanvasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FabricCanvas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FabricCanvasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends FabricProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FabricProjectDefaultArgs<ExtArgs>>): Prisma__FabricProjectClient<$Result.GetResult<Prisma.$FabricProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    objects<T extends FabricCanvas$objectsArgs<ExtArgs> = {}>(args?: Subset<T, FabricCanvas$objectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FabricObjectPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the FabricCanvas model
   */ 
  interface FabricCanvasFieldRefs {
    readonly id: FieldRef<"FabricCanvas", 'String'>
    readonly name: FieldRef<"FabricCanvas", 'String'>
    readonly width: FieldRef<"FabricCanvas", 'Float'>
    readonly height: FieldRef<"FabricCanvas", 'Float'>
    readonly unit: FieldRef<"FabricCanvas", 'String'>
    readonly background: FieldRef<"FabricCanvas", 'String'>
    readonly projectId: FieldRef<"FabricCanvas", 'String'>
    readonly version: FieldRef<"FabricCanvas", 'Int'>
    readonly metadata: FieldRef<"FabricCanvas", 'Json'>
    readonly createdAt: FieldRef<"FabricCanvas", 'DateTime'>
    readonly updatedAt: FieldRef<"FabricCanvas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FabricCanvas findUnique
   */
  export type FabricCanvasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricCanvas
     */
    select?: FabricCanvasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricCanvasInclude<ExtArgs> | null
    /**
     * Filter, which FabricCanvas to fetch.
     */
    where: FabricCanvasWhereUniqueInput
  }

  /**
   * FabricCanvas findUniqueOrThrow
   */
  export type FabricCanvasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricCanvas
     */
    select?: FabricCanvasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricCanvasInclude<ExtArgs> | null
    /**
     * Filter, which FabricCanvas to fetch.
     */
    where: FabricCanvasWhereUniqueInput
  }

  /**
   * FabricCanvas findFirst
   */
  export type FabricCanvasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricCanvas
     */
    select?: FabricCanvasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricCanvasInclude<ExtArgs> | null
    /**
     * Filter, which FabricCanvas to fetch.
     */
    where?: FabricCanvasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FabricCanvas to fetch.
     */
    orderBy?: FabricCanvasOrderByWithRelationInput | FabricCanvasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FabricCanvas.
     */
    cursor?: FabricCanvasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FabricCanvas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FabricCanvas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FabricCanvas.
     */
    distinct?: FabricCanvasScalarFieldEnum | FabricCanvasScalarFieldEnum[]
  }

  /**
   * FabricCanvas findFirstOrThrow
   */
  export type FabricCanvasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricCanvas
     */
    select?: FabricCanvasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricCanvasInclude<ExtArgs> | null
    /**
     * Filter, which FabricCanvas to fetch.
     */
    where?: FabricCanvasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FabricCanvas to fetch.
     */
    orderBy?: FabricCanvasOrderByWithRelationInput | FabricCanvasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FabricCanvas.
     */
    cursor?: FabricCanvasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FabricCanvas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FabricCanvas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FabricCanvas.
     */
    distinct?: FabricCanvasScalarFieldEnum | FabricCanvasScalarFieldEnum[]
  }

  /**
   * FabricCanvas findMany
   */
  export type FabricCanvasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricCanvas
     */
    select?: FabricCanvasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricCanvasInclude<ExtArgs> | null
    /**
     * Filter, which FabricCanvas to fetch.
     */
    where?: FabricCanvasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FabricCanvas to fetch.
     */
    orderBy?: FabricCanvasOrderByWithRelationInput | FabricCanvasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FabricCanvas.
     */
    cursor?: FabricCanvasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FabricCanvas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FabricCanvas.
     */
    skip?: number
    distinct?: FabricCanvasScalarFieldEnum | FabricCanvasScalarFieldEnum[]
  }

  /**
   * FabricCanvas create
   */
  export type FabricCanvasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricCanvas
     */
    select?: FabricCanvasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricCanvasInclude<ExtArgs> | null
    /**
     * The data needed to create a FabricCanvas.
     */
    data: XOR<FabricCanvasCreateInput, FabricCanvasUncheckedCreateInput>
  }

  /**
   * FabricCanvas createMany
   */
  export type FabricCanvasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FabricCanvas.
     */
    data: FabricCanvasCreateManyInput | FabricCanvasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FabricCanvas createManyAndReturn
   */
  export type FabricCanvasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricCanvas
     */
    select?: FabricCanvasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FabricCanvas.
     */
    data: FabricCanvasCreateManyInput | FabricCanvasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricCanvasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FabricCanvas update
   */
  export type FabricCanvasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricCanvas
     */
    select?: FabricCanvasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricCanvasInclude<ExtArgs> | null
    /**
     * The data needed to update a FabricCanvas.
     */
    data: XOR<FabricCanvasUpdateInput, FabricCanvasUncheckedUpdateInput>
    /**
     * Choose, which FabricCanvas to update.
     */
    where: FabricCanvasWhereUniqueInput
  }

  /**
   * FabricCanvas updateMany
   */
  export type FabricCanvasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FabricCanvas.
     */
    data: XOR<FabricCanvasUpdateManyMutationInput, FabricCanvasUncheckedUpdateManyInput>
    /**
     * Filter which FabricCanvas to update
     */
    where?: FabricCanvasWhereInput
  }

  /**
   * FabricCanvas upsert
   */
  export type FabricCanvasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricCanvas
     */
    select?: FabricCanvasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricCanvasInclude<ExtArgs> | null
    /**
     * The filter to search for the FabricCanvas to update in case it exists.
     */
    where: FabricCanvasWhereUniqueInput
    /**
     * In case the FabricCanvas found by the `where` argument doesn't exist, create a new FabricCanvas with this data.
     */
    create: XOR<FabricCanvasCreateInput, FabricCanvasUncheckedCreateInput>
    /**
     * In case the FabricCanvas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FabricCanvasUpdateInput, FabricCanvasUncheckedUpdateInput>
  }

  /**
   * FabricCanvas delete
   */
  export type FabricCanvasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricCanvas
     */
    select?: FabricCanvasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricCanvasInclude<ExtArgs> | null
    /**
     * Filter which FabricCanvas to delete.
     */
    where: FabricCanvasWhereUniqueInput
  }

  /**
   * FabricCanvas deleteMany
   */
  export type FabricCanvasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FabricCanvas to delete
     */
    where?: FabricCanvasWhereInput
  }

  /**
   * FabricCanvas.objects
   */
  export type FabricCanvas$objectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricObject
     */
    select?: FabricObjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricObjectInclude<ExtArgs> | null
    where?: FabricObjectWhereInput
    orderBy?: FabricObjectOrderByWithRelationInput | FabricObjectOrderByWithRelationInput[]
    cursor?: FabricObjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FabricObjectScalarFieldEnum | FabricObjectScalarFieldEnum[]
  }

  /**
   * FabricCanvas without action
   */
  export type FabricCanvasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricCanvas
     */
    select?: FabricCanvasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricCanvasInclude<ExtArgs> | null
  }


  /**
   * Model FabricObject
   */

  export type AggregateFabricObject = {
    _count: FabricObjectCountAggregateOutputType | null
    _avg: FabricObjectAvgAggregateOutputType | null
    _sum: FabricObjectSumAggregateOutputType | null
    _min: FabricObjectMinAggregateOutputType | null
    _max: FabricObjectMaxAggregateOutputType | null
  }

  export type FabricObjectAvgAggregateOutputType = {
    left: number | null
    top: number | null
    width: number | null
    height: number | null
    scaleX: number | null
    scaleY: number | null
    angle: number | null
    strokeWidth: number | null
    opacity: number | null
    fontSize: number | null
    uuidLength: number | null
    zIndex: number | null
  }

  export type FabricObjectSumAggregateOutputType = {
    left: number | null
    top: number | null
    width: number | null
    height: number | null
    scaleX: number | null
    scaleY: number | null
    angle: number | null
    strokeWidth: number | null
    opacity: number | null
    fontSize: number | null
    uuidLength: number | null
    zIndex: number | null
  }

  export type FabricObjectMinAggregateOutputType = {
    id: string | null
    type: string | null
    canvasId: string | null
    left: number | null
    top: number | null
    width: number | null
    height: number | null
    scaleX: number | null
    scaleY: number | null
    angle: number | null
    fill: string | null
    stroke: string | null
    strokeWidth: number | null
    opacity: number | null
    text: string | null
    fontFamily: string | null
    fontSize: number | null
    fontWeight: string | null
    fontStyle: string | null
    textAlign: string | null
    qrValue: string | null
    uuidLength: number | null
    qrErrorLevel: string | null
    zIndex: number | null
    locked: boolean | null
    visible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FabricObjectMaxAggregateOutputType = {
    id: string | null
    type: string | null
    canvasId: string | null
    left: number | null
    top: number | null
    width: number | null
    height: number | null
    scaleX: number | null
    scaleY: number | null
    angle: number | null
    fill: string | null
    stroke: string | null
    strokeWidth: number | null
    opacity: number | null
    text: string | null
    fontFamily: string | null
    fontSize: number | null
    fontWeight: string | null
    fontStyle: string | null
    textAlign: string | null
    qrValue: string | null
    uuidLength: number | null
    qrErrorLevel: string | null
    zIndex: number | null
    locked: boolean | null
    visible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FabricObjectCountAggregateOutputType = {
    id: number
    type: number
    canvasId: number
    left: number
    top: number
    width: number
    height: number
    scaleX: number
    scaleY: number
    angle: number
    fill: number
    stroke: number
    strokeWidth: number
    opacity: number
    text: number
    fontFamily: number
    fontSize: number
    fontWeight: number
    fontStyle: number
    textAlign: number
    qrValue: number
    uuidLength: number
    qrErrorLevel: number
    zIndex: number
    locked: number
    visible: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FabricObjectAvgAggregateInputType = {
    left?: true
    top?: true
    width?: true
    height?: true
    scaleX?: true
    scaleY?: true
    angle?: true
    strokeWidth?: true
    opacity?: true
    fontSize?: true
    uuidLength?: true
    zIndex?: true
  }

  export type FabricObjectSumAggregateInputType = {
    left?: true
    top?: true
    width?: true
    height?: true
    scaleX?: true
    scaleY?: true
    angle?: true
    strokeWidth?: true
    opacity?: true
    fontSize?: true
    uuidLength?: true
    zIndex?: true
  }

  export type FabricObjectMinAggregateInputType = {
    id?: true
    type?: true
    canvasId?: true
    left?: true
    top?: true
    width?: true
    height?: true
    scaleX?: true
    scaleY?: true
    angle?: true
    fill?: true
    stroke?: true
    strokeWidth?: true
    opacity?: true
    text?: true
    fontFamily?: true
    fontSize?: true
    fontWeight?: true
    fontStyle?: true
    textAlign?: true
    qrValue?: true
    uuidLength?: true
    qrErrorLevel?: true
    zIndex?: true
    locked?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FabricObjectMaxAggregateInputType = {
    id?: true
    type?: true
    canvasId?: true
    left?: true
    top?: true
    width?: true
    height?: true
    scaleX?: true
    scaleY?: true
    angle?: true
    fill?: true
    stroke?: true
    strokeWidth?: true
    opacity?: true
    text?: true
    fontFamily?: true
    fontSize?: true
    fontWeight?: true
    fontStyle?: true
    textAlign?: true
    qrValue?: true
    uuidLength?: true
    qrErrorLevel?: true
    zIndex?: true
    locked?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FabricObjectCountAggregateInputType = {
    id?: true
    type?: true
    canvasId?: true
    left?: true
    top?: true
    width?: true
    height?: true
    scaleX?: true
    scaleY?: true
    angle?: true
    fill?: true
    stroke?: true
    strokeWidth?: true
    opacity?: true
    text?: true
    fontFamily?: true
    fontSize?: true
    fontWeight?: true
    fontStyle?: true
    textAlign?: true
    qrValue?: true
    uuidLength?: true
    qrErrorLevel?: true
    zIndex?: true
    locked?: true
    visible?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FabricObjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FabricObject to aggregate.
     */
    where?: FabricObjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FabricObjects to fetch.
     */
    orderBy?: FabricObjectOrderByWithRelationInput | FabricObjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FabricObjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FabricObjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FabricObjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FabricObjects
    **/
    _count?: true | FabricObjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FabricObjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FabricObjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FabricObjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FabricObjectMaxAggregateInputType
  }

  export type GetFabricObjectAggregateType<T extends FabricObjectAggregateArgs> = {
        [P in keyof T & keyof AggregateFabricObject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFabricObject[P]>
      : GetScalarType<T[P], AggregateFabricObject[P]>
  }




  export type FabricObjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FabricObjectWhereInput
    orderBy?: FabricObjectOrderByWithAggregationInput | FabricObjectOrderByWithAggregationInput[]
    by: FabricObjectScalarFieldEnum[] | FabricObjectScalarFieldEnum
    having?: FabricObjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FabricObjectCountAggregateInputType | true
    _avg?: FabricObjectAvgAggregateInputType
    _sum?: FabricObjectSumAggregateInputType
    _min?: FabricObjectMinAggregateInputType
    _max?: FabricObjectMaxAggregateInputType
  }

  export type FabricObjectGroupByOutputType = {
    id: string
    type: string
    canvasId: string
    left: number
    top: number
    width: number
    height: number
    scaleX: number
    scaleY: number
    angle: number
    fill: string | null
    stroke: string | null
    strokeWidth: number | null
    opacity: number
    text: string | null
    fontFamily: string | null
    fontSize: number | null
    fontWeight: string | null
    fontStyle: string | null
    textAlign: string | null
    qrValue: string | null
    uuidLength: number | null
    qrErrorLevel: string | null
    zIndex: number
    locked: boolean
    visible: boolean
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: FabricObjectCountAggregateOutputType | null
    _avg: FabricObjectAvgAggregateOutputType | null
    _sum: FabricObjectSumAggregateOutputType | null
    _min: FabricObjectMinAggregateOutputType | null
    _max: FabricObjectMaxAggregateOutputType | null
  }

  type GetFabricObjectGroupByPayload<T extends FabricObjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FabricObjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FabricObjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FabricObjectGroupByOutputType[P]>
            : GetScalarType<T[P], FabricObjectGroupByOutputType[P]>
        }
      >
    >


  export type FabricObjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    canvasId?: boolean
    left?: boolean
    top?: boolean
    width?: boolean
    height?: boolean
    scaleX?: boolean
    scaleY?: boolean
    angle?: boolean
    fill?: boolean
    stroke?: boolean
    strokeWidth?: boolean
    opacity?: boolean
    text?: boolean
    fontFamily?: boolean
    fontSize?: boolean
    fontWeight?: boolean
    fontStyle?: boolean
    textAlign?: boolean
    qrValue?: boolean
    uuidLength?: boolean
    qrErrorLevel?: boolean
    zIndex?: boolean
    locked?: boolean
    visible?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    canvas?: boolean | FabricCanvasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fabricObject"]>

  export type FabricObjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    canvasId?: boolean
    left?: boolean
    top?: boolean
    width?: boolean
    height?: boolean
    scaleX?: boolean
    scaleY?: boolean
    angle?: boolean
    fill?: boolean
    stroke?: boolean
    strokeWidth?: boolean
    opacity?: boolean
    text?: boolean
    fontFamily?: boolean
    fontSize?: boolean
    fontWeight?: boolean
    fontStyle?: boolean
    textAlign?: boolean
    qrValue?: boolean
    uuidLength?: boolean
    qrErrorLevel?: boolean
    zIndex?: boolean
    locked?: boolean
    visible?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    canvas?: boolean | FabricCanvasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fabricObject"]>

  export type FabricObjectSelectScalar = {
    id?: boolean
    type?: boolean
    canvasId?: boolean
    left?: boolean
    top?: boolean
    width?: boolean
    height?: boolean
    scaleX?: boolean
    scaleY?: boolean
    angle?: boolean
    fill?: boolean
    stroke?: boolean
    strokeWidth?: boolean
    opacity?: boolean
    text?: boolean
    fontFamily?: boolean
    fontSize?: boolean
    fontWeight?: boolean
    fontStyle?: boolean
    textAlign?: boolean
    qrValue?: boolean
    uuidLength?: boolean
    qrErrorLevel?: boolean
    zIndex?: boolean
    locked?: boolean
    visible?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FabricObjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canvas?: boolean | FabricCanvasDefaultArgs<ExtArgs>
  }
  export type FabricObjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canvas?: boolean | FabricCanvasDefaultArgs<ExtArgs>
  }

  export type $FabricObjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FabricObject"
    objects: {
      canvas: Prisma.$FabricCanvasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      canvasId: string
      left: number
      top: number
      width: number
      height: number
      scaleX: number
      scaleY: number
      angle: number
      fill: string | null
      stroke: string | null
      strokeWidth: number | null
      opacity: number
      text: string | null
      fontFamily: string | null
      fontSize: number | null
      fontWeight: string | null
      fontStyle: string | null
      textAlign: string | null
      qrValue: string | null
      uuidLength: number | null
      qrErrorLevel: string | null
      zIndex: number
      locked: boolean
      visible: boolean
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fabricObject"]>
    composites: {}
  }

  type FabricObjectGetPayload<S extends boolean | null | undefined | FabricObjectDefaultArgs> = $Result.GetResult<Prisma.$FabricObjectPayload, S>

  type FabricObjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FabricObjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FabricObjectCountAggregateInputType | true
    }

  export interface FabricObjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FabricObject'], meta: { name: 'FabricObject' } }
    /**
     * Find zero or one FabricObject that matches the filter.
     * @param {FabricObjectFindUniqueArgs} args - Arguments to find a FabricObject
     * @example
     * // Get one FabricObject
     * const fabricObject = await prisma.fabricObject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FabricObjectFindUniqueArgs>(args: SelectSubset<T, FabricObjectFindUniqueArgs<ExtArgs>>): Prisma__FabricObjectClient<$Result.GetResult<Prisma.$FabricObjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FabricObject that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FabricObjectFindUniqueOrThrowArgs} args - Arguments to find a FabricObject
     * @example
     * // Get one FabricObject
     * const fabricObject = await prisma.fabricObject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FabricObjectFindUniqueOrThrowArgs>(args: SelectSubset<T, FabricObjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FabricObjectClient<$Result.GetResult<Prisma.$FabricObjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FabricObject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricObjectFindFirstArgs} args - Arguments to find a FabricObject
     * @example
     * // Get one FabricObject
     * const fabricObject = await prisma.fabricObject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FabricObjectFindFirstArgs>(args?: SelectSubset<T, FabricObjectFindFirstArgs<ExtArgs>>): Prisma__FabricObjectClient<$Result.GetResult<Prisma.$FabricObjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FabricObject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricObjectFindFirstOrThrowArgs} args - Arguments to find a FabricObject
     * @example
     * // Get one FabricObject
     * const fabricObject = await prisma.fabricObject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FabricObjectFindFirstOrThrowArgs>(args?: SelectSubset<T, FabricObjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__FabricObjectClient<$Result.GetResult<Prisma.$FabricObjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FabricObjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricObjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FabricObjects
     * const fabricObjects = await prisma.fabricObject.findMany()
     * 
     * // Get first 10 FabricObjects
     * const fabricObjects = await prisma.fabricObject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fabricObjectWithIdOnly = await prisma.fabricObject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FabricObjectFindManyArgs>(args?: SelectSubset<T, FabricObjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FabricObjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FabricObject.
     * @param {FabricObjectCreateArgs} args - Arguments to create a FabricObject.
     * @example
     * // Create one FabricObject
     * const FabricObject = await prisma.fabricObject.create({
     *   data: {
     *     // ... data to create a FabricObject
     *   }
     * })
     * 
     */
    create<T extends FabricObjectCreateArgs>(args: SelectSubset<T, FabricObjectCreateArgs<ExtArgs>>): Prisma__FabricObjectClient<$Result.GetResult<Prisma.$FabricObjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FabricObjects.
     * @param {FabricObjectCreateManyArgs} args - Arguments to create many FabricObjects.
     * @example
     * // Create many FabricObjects
     * const fabricObject = await prisma.fabricObject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FabricObjectCreateManyArgs>(args?: SelectSubset<T, FabricObjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FabricObjects and returns the data saved in the database.
     * @param {FabricObjectCreateManyAndReturnArgs} args - Arguments to create many FabricObjects.
     * @example
     * // Create many FabricObjects
     * const fabricObject = await prisma.fabricObject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FabricObjects and only return the `id`
     * const fabricObjectWithIdOnly = await prisma.fabricObject.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FabricObjectCreateManyAndReturnArgs>(args?: SelectSubset<T, FabricObjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FabricObjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FabricObject.
     * @param {FabricObjectDeleteArgs} args - Arguments to delete one FabricObject.
     * @example
     * // Delete one FabricObject
     * const FabricObject = await prisma.fabricObject.delete({
     *   where: {
     *     // ... filter to delete one FabricObject
     *   }
     * })
     * 
     */
    delete<T extends FabricObjectDeleteArgs>(args: SelectSubset<T, FabricObjectDeleteArgs<ExtArgs>>): Prisma__FabricObjectClient<$Result.GetResult<Prisma.$FabricObjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FabricObject.
     * @param {FabricObjectUpdateArgs} args - Arguments to update one FabricObject.
     * @example
     * // Update one FabricObject
     * const fabricObject = await prisma.fabricObject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FabricObjectUpdateArgs>(args: SelectSubset<T, FabricObjectUpdateArgs<ExtArgs>>): Prisma__FabricObjectClient<$Result.GetResult<Prisma.$FabricObjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FabricObjects.
     * @param {FabricObjectDeleteManyArgs} args - Arguments to filter FabricObjects to delete.
     * @example
     * // Delete a few FabricObjects
     * const { count } = await prisma.fabricObject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FabricObjectDeleteManyArgs>(args?: SelectSubset<T, FabricObjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FabricObjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricObjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FabricObjects
     * const fabricObject = await prisma.fabricObject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FabricObjectUpdateManyArgs>(args: SelectSubset<T, FabricObjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FabricObject.
     * @param {FabricObjectUpsertArgs} args - Arguments to update or create a FabricObject.
     * @example
     * // Update or create a FabricObject
     * const fabricObject = await prisma.fabricObject.upsert({
     *   create: {
     *     // ... data to create a FabricObject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FabricObject we want to update
     *   }
     * })
     */
    upsert<T extends FabricObjectUpsertArgs>(args: SelectSubset<T, FabricObjectUpsertArgs<ExtArgs>>): Prisma__FabricObjectClient<$Result.GetResult<Prisma.$FabricObjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FabricObjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricObjectCountArgs} args - Arguments to filter FabricObjects to count.
     * @example
     * // Count the number of FabricObjects
     * const count = await prisma.fabricObject.count({
     *   where: {
     *     // ... the filter for the FabricObjects we want to count
     *   }
     * })
    **/
    count<T extends FabricObjectCountArgs>(
      args?: Subset<T, FabricObjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FabricObjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FabricObject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricObjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FabricObjectAggregateArgs>(args: Subset<T, FabricObjectAggregateArgs>): Prisma.PrismaPromise<GetFabricObjectAggregateType<T>>

    /**
     * Group by FabricObject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricObjectGroupByArgs} args - Group by arguments.
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
      T extends FabricObjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FabricObjectGroupByArgs['orderBy'] }
        : { orderBy?: FabricObjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FabricObjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFabricObjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FabricObject model
   */
  readonly fields: FabricObjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FabricObject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FabricObjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    canvas<T extends FabricCanvasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FabricCanvasDefaultArgs<ExtArgs>>): Prisma__FabricCanvasClient<$Result.GetResult<Prisma.$FabricCanvasPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the FabricObject model
   */ 
  interface FabricObjectFieldRefs {
    readonly id: FieldRef<"FabricObject", 'String'>
    readonly type: FieldRef<"FabricObject", 'String'>
    readonly canvasId: FieldRef<"FabricObject", 'String'>
    readonly left: FieldRef<"FabricObject", 'Float'>
    readonly top: FieldRef<"FabricObject", 'Float'>
    readonly width: FieldRef<"FabricObject", 'Float'>
    readonly height: FieldRef<"FabricObject", 'Float'>
    readonly scaleX: FieldRef<"FabricObject", 'Float'>
    readonly scaleY: FieldRef<"FabricObject", 'Float'>
    readonly angle: FieldRef<"FabricObject", 'Float'>
    readonly fill: FieldRef<"FabricObject", 'String'>
    readonly stroke: FieldRef<"FabricObject", 'String'>
    readonly strokeWidth: FieldRef<"FabricObject", 'Float'>
    readonly opacity: FieldRef<"FabricObject", 'Float'>
    readonly text: FieldRef<"FabricObject", 'String'>
    readonly fontFamily: FieldRef<"FabricObject", 'String'>
    readonly fontSize: FieldRef<"FabricObject", 'Float'>
    readonly fontWeight: FieldRef<"FabricObject", 'String'>
    readonly fontStyle: FieldRef<"FabricObject", 'String'>
    readonly textAlign: FieldRef<"FabricObject", 'String'>
    readonly qrValue: FieldRef<"FabricObject", 'String'>
    readonly uuidLength: FieldRef<"FabricObject", 'Int'>
    readonly qrErrorLevel: FieldRef<"FabricObject", 'String'>
    readonly zIndex: FieldRef<"FabricObject", 'Int'>
    readonly locked: FieldRef<"FabricObject", 'Boolean'>
    readonly visible: FieldRef<"FabricObject", 'Boolean'>
    readonly metadata: FieldRef<"FabricObject", 'Json'>
    readonly createdAt: FieldRef<"FabricObject", 'DateTime'>
    readonly updatedAt: FieldRef<"FabricObject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FabricObject findUnique
   */
  export type FabricObjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricObject
     */
    select?: FabricObjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricObjectInclude<ExtArgs> | null
    /**
     * Filter, which FabricObject to fetch.
     */
    where: FabricObjectWhereUniqueInput
  }

  /**
   * FabricObject findUniqueOrThrow
   */
  export type FabricObjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricObject
     */
    select?: FabricObjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricObjectInclude<ExtArgs> | null
    /**
     * Filter, which FabricObject to fetch.
     */
    where: FabricObjectWhereUniqueInput
  }

  /**
   * FabricObject findFirst
   */
  export type FabricObjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricObject
     */
    select?: FabricObjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricObjectInclude<ExtArgs> | null
    /**
     * Filter, which FabricObject to fetch.
     */
    where?: FabricObjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FabricObjects to fetch.
     */
    orderBy?: FabricObjectOrderByWithRelationInput | FabricObjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FabricObjects.
     */
    cursor?: FabricObjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FabricObjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FabricObjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FabricObjects.
     */
    distinct?: FabricObjectScalarFieldEnum | FabricObjectScalarFieldEnum[]
  }

  /**
   * FabricObject findFirstOrThrow
   */
  export type FabricObjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricObject
     */
    select?: FabricObjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricObjectInclude<ExtArgs> | null
    /**
     * Filter, which FabricObject to fetch.
     */
    where?: FabricObjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FabricObjects to fetch.
     */
    orderBy?: FabricObjectOrderByWithRelationInput | FabricObjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FabricObjects.
     */
    cursor?: FabricObjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FabricObjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FabricObjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FabricObjects.
     */
    distinct?: FabricObjectScalarFieldEnum | FabricObjectScalarFieldEnum[]
  }

  /**
   * FabricObject findMany
   */
  export type FabricObjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricObject
     */
    select?: FabricObjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricObjectInclude<ExtArgs> | null
    /**
     * Filter, which FabricObjects to fetch.
     */
    where?: FabricObjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FabricObjects to fetch.
     */
    orderBy?: FabricObjectOrderByWithRelationInput | FabricObjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FabricObjects.
     */
    cursor?: FabricObjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FabricObjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FabricObjects.
     */
    skip?: number
    distinct?: FabricObjectScalarFieldEnum | FabricObjectScalarFieldEnum[]
  }

  /**
   * FabricObject create
   */
  export type FabricObjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricObject
     */
    select?: FabricObjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricObjectInclude<ExtArgs> | null
    /**
     * The data needed to create a FabricObject.
     */
    data: XOR<FabricObjectCreateInput, FabricObjectUncheckedCreateInput>
  }

  /**
   * FabricObject createMany
   */
  export type FabricObjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FabricObjects.
     */
    data: FabricObjectCreateManyInput | FabricObjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FabricObject createManyAndReturn
   */
  export type FabricObjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricObject
     */
    select?: FabricObjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FabricObjects.
     */
    data: FabricObjectCreateManyInput | FabricObjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricObjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FabricObject update
   */
  export type FabricObjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricObject
     */
    select?: FabricObjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricObjectInclude<ExtArgs> | null
    /**
     * The data needed to update a FabricObject.
     */
    data: XOR<FabricObjectUpdateInput, FabricObjectUncheckedUpdateInput>
    /**
     * Choose, which FabricObject to update.
     */
    where: FabricObjectWhereUniqueInput
  }

  /**
   * FabricObject updateMany
   */
  export type FabricObjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FabricObjects.
     */
    data: XOR<FabricObjectUpdateManyMutationInput, FabricObjectUncheckedUpdateManyInput>
    /**
     * Filter which FabricObjects to update
     */
    where?: FabricObjectWhereInput
  }

  /**
   * FabricObject upsert
   */
  export type FabricObjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricObject
     */
    select?: FabricObjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricObjectInclude<ExtArgs> | null
    /**
     * The filter to search for the FabricObject to update in case it exists.
     */
    where: FabricObjectWhereUniqueInput
    /**
     * In case the FabricObject found by the `where` argument doesn't exist, create a new FabricObject with this data.
     */
    create: XOR<FabricObjectCreateInput, FabricObjectUncheckedCreateInput>
    /**
     * In case the FabricObject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FabricObjectUpdateInput, FabricObjectUncheckedUpdateInput>
  }

  /**
   * FabricObject delete
   */
  export type FabricObjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricObject
     */
    select?: FabricObjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricObjectInclude<ExtArgs> | null
    /**
     * Filter which FabricObject to delete.
     */
    where: FabricObjectWhereUniqueInput
  }

  /**
   * FabricObject deleteMany
   */
  export type FabricObjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FabricObjects to delete
     */
    where?: FabricObjectWhereInput
  }

  /**
   * FabricObject without action
   */
  export type FabricObjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricObject
     */
    select?: FabricObjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricObjectInclude<ExtArgs> | null
  }


  /**
   * Model FabricTemplate
   */

  export type AggregateFabricTemplate = {
    _count: FabricTemplateCountAggregateOutputType | null
    _min: FabricTemplateMinAggregateOutputType | null
    _max: FabricTemplateMaxAggregateOutputType | null
  }

  export type FabricTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    category: string | null
    thumbnail: string | null
    isPublic: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FabricTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    category: string | null
    thumbnail: string | null
    isPublic: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FabricTemplateCountAggregateOutputType = {
    id: number
    name: number
    description: number
    category: number
    thumbnail: number
    canvasData: number
    isPublic: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FabricTemplateMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    thumbnail?: true
    isPublic?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FabricTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    thumbnail?: true
    isPublic?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FabricTemplateCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    thumbnail?: true
    canvasData?: true
    isPublic?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FabricTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FabricTemplate to aggregate.
     */
    where?: FabricTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FabricTemplates to fetch.
     */
    orderBy?: FabricTemplateOrderByWithRelationInput | FabricTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FabricTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FabricTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FabricTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FabricTemplates
    **/
    _count?: true | FabricTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FabricTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FabricTemplateMaxAggregateInputType
  }

  export type GetFabricTemplateAggregateType<T extends FabricTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateFabricTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFabricTemplate[P]>
      : GetScalarType<T[P], AggregateFabricTemplate[P]>
  }




  export type FabricTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FabricTemplateWhereInput
    orderBy?: FabricTemplateOrderByWithAggregationInput | FabricTemplateOrderByWithAggregationInput[]
    by: FabricTemplateScalarFieldEnum[] | FabricTemplateScalarFieldEnum
    having?: FabricTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FabricTemplateCountAggregateInputType | true
    _min?: FabricTemplateMinAggregateInputType
    _max?: FabricTemplateMaxAggregateInputType
  }

  export type FabricTemplateGroupByOutputType = {
    id: string
    name: string
    description: string | null
    category: string
    thumbnail: string | null
    canvasData: JsonValue
    isPublic: boolean
    userId: string | null
    createdAt: Date
    updatedAt: Date
    _count: FabricTemplateCountAggregateOutputType | null
    _min: FabricTemplateMinAggregateOutputType | null
    _max: FabricTemplateMaxAggregateOutputType | null
  }

  type GetFabricTemplateGroupByPayload<T extends FabricTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FabricTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FabricTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FabricTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], FabricTemplateGroupByOutputType[P]>
        }
      >
    >


  export type FabricTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    thumbnail?: boolean
    canvasData?: boolean
    isPublic?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | FabricTemplate$userArgs<ExtArgs>
  }, ExtArgs["result"]["fabricTemplate"]>

  export type FabricTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    thumbnail?: boolean
    canvasData?: boolean
    isPublic?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | FabricTemplate$userArgs<ExtArgs>
  }, ExtArgs["result"]["fabricTemplate"]>

  export type FabricTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    thumbnail?: boolean
    canvasData?: boolean
    isPublic?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FabricTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | FabricTemplate$userArgs<ExtArgs>
  }
  export type FabricTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | FabricTemplate$userArgs<ExtArgs>
  }

  export type $FabricTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FabricTemplate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      category: string
      thumbnail: string | null
      canvasData: Prisma.JsonValue
      isPublic: boolean
      userId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fabricTemplate"]>
    composites: {}
  }

  type FabricTemplateGetPayload<S extends boolean | null | undefined | FabricTemplateDefaultArgs> = $Result.GetResult<Prisma.$FabricTemplatePayload, S>

  type FabricTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FabricTemplateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FabricTemplateCountAggregateInputType | true
    }

  export interface FabricTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FabricTemplate'], meta: { name: 'FabricTemplate' } }
    /**
     * Find zero or one FabricTemplate that matches the filter.
     * @param {FabricTemplateFindUniqueArgs} args - Arguments to find a FabricTemplate
     * @example
     * // Get one FabricTemplate
     * const fabricTemplate = await prisma.fabricTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FabricTemplateFindUniqueArgs>(args: SelectSubset<T, FabricTemplateFindUniqueArgs<ExtArgs>>): Prisma__FabricTemplateClient<$Result.GetResult<Prisma.$FabricTemplatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FabricTemplate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FabricTemplateFindUniqueOrThrowArgs} args - Arguments to find a FabricTemplate
     * @example
     * // Get one FabricTemplate
     * const fabricTemplate = await prisma.fabricTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FabricTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, FabricTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FabricTemplateClient<$Result.GetResult<Prisma.$FabricTemplatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FabricTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricTemplateFindFirstArgs} args - Arguments to find a FabricTemplate
     * @example
     * // Get one FabricTemplate
     * const fabricTemplate = await prisma.fabricTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FabricTemplateFindFirstArgs>(args?: SelectSubset<T, FabricTemplateFindFirstArgs<ExtArgs>>): Prisma__FabricTemplateClient<$Result.GetResult<Prisma.$FabricTemplatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FabricTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricTemplateFindFirstOrThrowArgs} args - Arguments to find a FabricTemplate
     * @example
     * // Get one FabricTemplate
     * const fabricTemplate = await prisma.fabricTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FabricTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, FabricTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__FabricTemplateClient<$Result.GetResult<Prisma.$FabricTemplatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FabricTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FabricTemplates
     * const fabricTemplates = await prisma.fabricTemplate.findMany()
     * 
     * // Get first 10 FabricTemplates
     * const fabricTemplates = await prisma.fabricTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fabricTemplateWithIdOnly = await prisma.fabricTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FabricTemplateFindManyArgs>(args?: SelectSubset<T, FabricTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FabricTemplatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FabricTemplate.
     * @param {FabricTemplateCreateArgs} args - Arguments to create a FabricTemplate.
     * @example
     * // Create one FabricTemplate
     * const FabricTemplate = await prisma.fabricTemplate.create({
     *   data: {
     *     // ... data to create a FabricTemplate
     *   }
     * })
     * 
     */
    create<T extends FabricTemplateCreateArgs>(args: SelectSubset<T, FabricTemplateCreateArgs<ExtArgs>>): Prisma__FabricTemplateClient<$Result.GetResult<Prisma.$FabricTemplatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FabricTemplates.
     * @param {FabricTemplateCreateManyArgs} args - Arguments to create many FabricTemplates.
     * @example
     * // Create many FabricTemplates
     * const fabricTemplate = await prisma.fabricTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FabricTemplateCreateManyArgs>(args?: SelectSubset<T, FabricTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FabricTemplates and returns the data saved in the database.
     * @param {FabricTemplateCreateManyAndReturnArgs} args - Arguments to create many FabricTemplates.
     * @example
     * // Create many FabricTemplates
     * const fabricTemplate = await prisma.fabricTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FabricTemplates and only return the `id`
     * const fabricTemplateWithIdOnly = await prisma.fabricTemplate.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FabricTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, FabricTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FabricTemplatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FabricTemplate.
     * @param {FabricTemplateDeleteArgs} args - Arguments to delete one FabricTemplate.
     * @example
     * // Delete one FabricTemplate
     * const FabricTemplate = await prisma.fabricTemplate.delete({
     *   where: {
     *     // ... filter to delete one FabricTemplate
     *   }
     * })
     * 
     */
    delete<T extends FabricTemplateDeleteArgs>(args: SelectSubset<T, FabricTemplateDeleteArgs<ExtArgs>>): Prisma__FabricTemplateClient<$Result.GetResult<Prisma.$FabricTemplatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FabricTemplate.
     * @param {FabricTemplateUpdateArgs} args - Arguments to update one FabricTemplate.
     * @example
     * // Update one FabricTemplate
     * const fabricTemplate = await prisma.fabricTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FabricTemplateUpdateArgs>(args: SelectSubset<T, FabricTemplateUpdateArgs<ExtArgs>>): Prisma__FabricTemplateClient<$Result.GetResult<Prisma.$FabricTemplatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FabricTemplates.
     * @param {FabricTemplateDeleteManyArgs} args - Arguments to filter FabricTemplates to delete.
     * @example
     * // Delete a few FabricTemplates
     * const { count } = await prisma.fabricTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FabricTemplateDeleteManyArgs>(args?: SelectSubset<T, FabricTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FabricTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FabricTemplates
     * const fabricTemplate = await prisma.fabricTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FabricTemplateUpdateManyArgs>(args: SelectSubset<T, FabricTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FabricTemplate.
     * @param {FabricTemplateUpsertArgs} args - Arguments to update or create a FabricTemplate.
     * @example
     * // Update or create a FabricTemplate
     * const fabricTemplate = await prisma.fabricTemplate.upsert({
     *   create: {
     *     // ... data to create a FabricTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FabricTemplate we want to update
     *   }
     * })
     */
    upsert<T extends FabricTemplateUpsertArgs>(args: SelectSubset<T, FabricTemplateUpsertArgs<ExtArgs>>): Prisma__FabricTemplateClient<$Result.GetResult<Prisma.$FabricTemplatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FabricTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricTemplateCountArgs} args - Arguments to filter FabricTemplates to count.
     * @example
     * // Count the number of FabricTemplates
     * const count = await prisma.fabricTemplate.count({
     *   where: {
     *     // ... the filter for the FabricTemplates we want to count
     *   }
     * })
    **/
    count<T extends FabricTemplateCountArgs>(
      args?: Subset<T, FabricTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FabricTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FabricTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FabricTemplateAggregateArgs>(args: Subset<T, FabricTemplateAggregateArgs>): Prisma.PrismaPromise<GetFabricTemplateAggregateType<T>>

    /**
     * Group by FabricTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricTemplateGroupByArgs} args - Group by arguments.
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
      T extends FabricTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FabricTemplateGroupByArgs['orderBy'] }
        : { orderBy?: FabricTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FabricTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFabricTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FabricTemplate model
   */
  readonly fields: FabricTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FabricTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FabricTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends FabricTemplate$userArgs<ExtArgs> = {}>(args?: Subset<T, FabricTemplate$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the FabricTemplate model
   */ 
  interface FabricTemplateFieldRefs {
    readonly id: FieldRef<"FabricTemplate", 'String'>
    readonly name: FieldRef<"FabricTemplate", 'String'>
    readonly description: FieldRef<"FabricTemplate", 'String'>
    readonly category: FieldRef<"FabricTemplate", 'String'>
    readonly thumbnail: FieldRef<"FabricTemplate", 'String'>
    readonly canvasData: FieldRef<"FabricTemplate", 'Json'>
    readonly isPublic: FieldRef<"FabricTemplate", 'Boolean'>
    readonly userId: FieldRef<"FabricTemplate", 'String'>
    readonly createdAt: FieldRef<"FabricTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"FabricTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FabricTemplate findUnique
   */
  export type FabricTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricTemplate
     */
    select?: FabricTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricTemplateInclude<ExtArgs> | null
    /**
     * Filter, which FabricTemplate to fetch.
     */
    where: FabricTemplateWhereUniqueInput
  }

  /**
   * FabricTemplate findUniqueOrThrow
   */
  export type FabricTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricTemplate
     */
    select?: FabricTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricTemplateInclude<ExtArgs> | null
    /**
     * Filter, which FabricTemplate to fetch.
     */
    where: FabricTemplateWhereUniqueInput
  }

  /**
   * FabricTemplate findFirst
   */
  export type FabricTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricTemplate
     */
    select?: FabricTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricTemplateInclude<ExtArgs> | null
    /**
     * Filter, which FabricTemplate to fetch.
     */
    where?: FabricTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FabricTemplates to fetch.
     */
    orderBy?: FabricTemplateOrderByWithRelationInput | FabricTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FabricTemplates.
     */
    cursor?: FabricTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FabricTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FabricTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FabricTemplates.
     */
    distinct?: FabricTemplateScalarFieldEnum | FabricTemplateScalarFieldEnum[]
  }

  /**
   * FabricTemplate findFirstOrThrow
   */
  export type FabricTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricTemplate
     */
    select?: FabricTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricTemplateInclude<ExtArgs> | null
    /**
     * Filter, which FabricTemplate to fetch.
     */
    where?: FabricTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FabricTemplates to fetch.
     */
    orderBy?: FabricTemplateOrderByWithRelationInput | FabricTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FabricTemplates.
     */
    cursor?: FabricTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FabricTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FabricTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FabricTemplates.
     */
    distinct?: FabricTemplateScalarFieldEnum | FabricTemplateScalarFieldEnum[]
  }

  /**
   * FabricTemplate findMany
   */
  export type FabricTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricTemplate
     */
    select?: FabricTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricTemplateInclude<ExtArgs> | null
    /**
     * Filter, which FabricTemplates to fetch.
     */
    where?: FabricTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FabricTemplates to fetch.
     */
    orderBy?: FabricTemplateOrderByWithRelationInput | FabricTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FabricTemplates.
     */
    cursor?: FabricTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FabricTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FabricTemplates.
     */
    skip?: number
    distinct?: FabricTemplateScalarFieldEnum | FabricTemplateScalarFieldEnum[]
  }

  /**
   * FabricTemplate create
   */
  export type FabricTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricTemplate
     */
    select?: FabricTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a FabricTemplate.
     */
    data: XOR<FabricTemplateCreateInput, FabricTemplateUncheckedCreateInput>
  }

  /**
   * FabricTemplate createMany
   */
  export type FabricTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FabricTemplates.
     */
    data: FabricTemplateCreateManyInput | FabricTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FabricTemplate createManyAndReturn
   */
  export type FabricTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricTemplate
     */
    select?: FabricTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FabricTemplates.
     */
    data: FabricTemplateCreateManyInput | FabricTemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricTemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FabricTemplate update
   */
  export type FabricTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricTemplate
     */
    select?: FabricTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a FabricTemplate.
     */
    data: XOR<FabricTemplateUpdateInput, FabricTemplateUncheckedUpdateInput>
    /**
     * Choose, which FabricTemplate to update.
     */
    where: FabricTemplateWhereUniqueInput
  }

  /**
   * FabricTemplate updateMany
   */
  export type FabricTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FabricTemplates.
     */
    data: XOR<FabricTemplateUpdateManyMutationInput, FabricTemplateUncheckedUpdateManyInput>
    /**
     * Filter which FabricTemplates to update
     */
    where?: FabricTemplateWhereInput
  }

  /**
   * FabricTemplate upsert
   */
  export type FabricTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricTemplate
     */
    select?: FabricTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the FabricTemplate to update in case it exists.
     */
    where: FabricTemplateWhereUniqueInput
    /**
     * In case the FabricTemplate found by the `where` argument doesn't exist, create a new FabricTemplate with this data.
     */
    create: XOR<FabricTemplateCreateInput, FabricTemplateUncheckedCreateInput>
    /**
     * In case the FabricTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FabricTemplateUpdateInput, FabricTemplateUncheckedUpdateInput>
  }

  /**
   * FabricTemplate delete
   */
  export type FabricTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricTemplate
     */
    select?: FabricTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricTemplateInclude<ExtArgs> | null
    /**
     * Filter which FabricTemplate to delete.
     */
    where: FabricTemplateWhereUniqueInput
  }

  /**
   * FabricTemplate deleteMany
   */
  export type FabricTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FabricTemplates to delete
     */
    where?: FabricTemplateWhereInput
  }

  /**
   * FabricTemplate.user
   */
  export type FabricTemplate$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * FabricTemplate without action
   */
  export type FabricTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricTemplate
     */
    select?: FabricTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricTemplateInclude<ExtArgs> | null
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
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ResetTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type ResetTokenScalarFieldEnum = (typeof ResetTokenScalarFieldEnum)[keyof typeof ResetTokenScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    description: 'description',
    icon: 'icon'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const LabelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    width: 'width',
    height: 'height',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    projectId: 'projectId'
  };

  export type LabelScalarFieldEnum = (typeof LabelScalarFieldEnum)[keyof typeof LabelScalarFieldEnum]


  export const LabelElementScalarFieldEnum: {
    id: 'id',
    type: 'type',
    x: 'x',
    y: 'y',
    width: 'width',
    height: 'height',
    value: 'value',
    color: 'color',
    rotation: 'rotation',
    labelId: 'labelId',
    properties: 'properties',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    fontSize: 'fontSize'
  };

  export type LabelElementScalarFieldEnum = (typeof LabelElementScalarFieldEnum)[keyof typeof LabelElementScalarFieldEnum]


  export const FabricProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    icon: 'icon',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FabricProjectScalarFieldEnum = (typeof FabricProjectScalarFieldEnum)[keyof typeof FabricProjectScalarFieldEnum]


  export const FabricCanvasScalarFieldEnum: {
    id: 'id',
    name: 'name',
    width: 'width',
    height: 'height',
    unit: 'unit',
    background: 'background',
    projectId: 'projectId',
    version: 'version',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FabricCanvasScalarFieldEnum = (typeof FabricCanvasScalarFieldEnum)[keyof typeof FabricCanvasScalarFieldEnum]


  export const FabricObjectScalarFieldEnum: {
    id: 'id',
    type: 'type',
    canvasId: 'canvasId',
    left: 'left',
    top: 'top',
    width: 'width',
    height: 'height',
    scaleX: 'scaleX',
    scaleY: 'scaleY',
    angle: 'angle',
    fill: 'fill',
    stroke: 'stroke',
    strokeWidth: 'strokeWidth',
    opacity: 'opacity',
    text: 'text',
    fontFamily: 'fontFamily',
    fontSize: 'fontSize',
    fontWeight: 'fontWeight',
    fontStyle: 'fontStyle',
    textAlign: 'textAlign',
    qrValue: 'qrValue',
    uuidLength: 'uuidLength',
    qrErrorLevel: 'qrErrorLevel',
    zIndex: 'zIndex',
    locked: 'locked',
    visible: 'visible',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FabricObjectScalarFieldEnum = (typeof FabricObjectScalarFieldEnum)[keyof typeof FabricObjectScalarFieldEnum]


  export const FabricTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    thumbnail: 'thumbnail',
    canvasData: 'canvasData',
    isPublic: 'isPublic',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FabricTemplateScalarFieldEnum = (typeof FabricTemplateScalarFieldEnum)[keyof typeof FabricTemplateScalarFieldEnum]


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


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectListRelationFilter
    resetTokens?: ResetTokenListRelationFilter
    fabricProjects?: FabricProjectListRelationFilter
    fabricTemplates?: FabricTemplateListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
    resetTokens?: ResetTokenOrderByRelationAggregateInput
    fabricProjects?: FabricProjectOrderByRelationAggregateInput
    fabricTemplates?: FabricTemplateOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectListRelationFilter
    resetTokens?: ResetTokenListRelationFilter
    fabricProjects?: FabricProjectListRelationFilter
    fabricTemplates?: FabricTemplateListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ResetTokenWhereInput = {
    AND?: ResetTokenWhereInput | ResetTokenWhereInput[]
    OR?: ResetTokenWhereInput[]
    NOT?: ResetTokenWhereInput | ResetTokenWhereInput[]
    id?: StringFilter<"ResetToken"> | string
    token?: StringFilter<"ResetToken"> | string
    userId?: StringFilter<"ResetToken"> | string
    expiresAt?: DateTimeFilter<"ResetToken"> | Date | string
    createdAt?: DateTimeFilter<"ResetToken"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: ResetTokenWhereInput | ResetTokenWhereInput[]
    OR?: ResetTokenWhereInput[]
    NOT?: ResetTokenWhereInput | ResetTokenWhereInput[]
    userId?: StringFilter<"ResetToken"> | string
    expiresAt?: DateTimeFilter<"ResetToken"> | Date | string
    createdAt?: DateTimeFilter<"ResetToken"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type ResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: ResetTokenCountOrderByAggregateInput
    _max?: ResetTokenMaxOrderByAggregateInput
    _min?: ResetTokenMinOrderByAggregateInput
  }

  export type ResetTokenScalarWhereWithAggregatesInput = {
    AND?: ResetTokenScalarWhereWithAggregatesInput | ResetTokenScalarWhereWithAggregatesInput[]
    OR?: ResetTokenScalarWhereWithAggregatesInput[]
    NOT?: ResetTokenScalarWhereWithAggregatesInput | ResetTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResetToken"> | string
    token?: StringWithAggregatesFilter<"ResetToken"> | string
    userId?: StringWithAggregatesFilter<"ResetToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"ResetToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ResetToken"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    userId?: StringNullableFilter<"Project"> | string | null
    description?: StringNullableFilter<"Project"> | string | null
    icon?: StringNullableFilter<"Project"> | string | null
    labels?: LabelListRelationFilter
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    labels?: LabelOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    userId?: StringNullableFilter<"Project"> | string | null
    description?: StringNullableFilter<"Project"> | string | null
    icon?: StringNullableFilter<"Project"> | string | null
    labels?: LabelListRelationFilter
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Project"> | string | null
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    icon?: StringNullableWithAggregatesFilter<"Project"> | string | null
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
    projectId?: StringNullableFilter<"Label"> | string | null
    project?: XOR<ProjectNullableRelationFilter, ProjectWhereInput> | null
    elements?: LabelElementListRelationFilter
  }

  export type LabelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
    elements?: LabelElementOrderByRelationAggregateInput
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
    projectId?: StringNullableFilter<"Label"> | string | null
    project?: XOR<ProjectNullableRelationFilter, ProjectWhereInput> | null
    elements?: LabelElementListRelationFilter
  }, "id">

  export type LabelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrderInput | SortOrder
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
    projectId?: StringNullableWithAggregatesFilter<"Label"> | string | null
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
    value?: StringNullableFilter<"LabelElement"> | string | null
    color?: StringNullableFilter<"LabelElement"> | string | null
    rotation?: FloatNullableFilter<"LabelElement"> | number | null
    labelId?: StringFilter<"LabelElement"> | string
    properties?: JsonNullableFilter<"LabelElement">
    createdAt?: DateTimeFilter<"LabelElement"> | Date | string
    updatedAt?: DateTimeFilter<"LabelElement"> | Date | string
    fontSize?: FloatNullableFilter<"LabelElement"> | number | null
    label?: XOR<LabelRelationFilter, LabelWhereInput>
  }

  export type LabelElementOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    rotation?: SortOrderInput | SortOrder
    labelId?: SortOrder
    properties?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fontSize?: SortOrderInput | SortOrder
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
    value?: StringNullableFilter<"LabelElement"> | string | null
    color?: StringNullableFilter<"LabelElement"> | string | null
    rotation?: FloatNullableFilter<"LabelElement"> | number | null
    labelId?: StringFilter<"LabelElement"> | string
    properties?: JsonNullableFilter<"LabelElement">
    createdAt?: DateTimeFilter<"LabelElement"> | Date | string
    updatedAt?: DateTimeFilter<"LabelElement"> | Date | string
    fontSize?: FloatNullableFilter<"LabelElement"> | number | null
    label?: XOR<LabelRelationFilter, LabelWhereInput>
  }, "id">

  export type LabelElementOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    rotation?: SortOrderInput | SortOrder
    labelId?: SortOrder
    properties?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fontSize?: SortOrderInput | SortOrder
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
    value?: StringNullableWithAggregatesFilter<"LabelElement"> | string | null
    color?: StringNullableWithAggregatesFilter<"LabelElement"> | string | null
    rotation?: FloatNullableWithAggregatesFilter<"LabelElement"> | number | null
    labelId?: StringWithAggregatesFilter<"LabelElement"> | string
    properties?: JsonNullableWithAggregatesFilter<"LabelElement">
    createdAt?: DateTimeWithAggregatesFilter<"LabelElement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LabelElement"> | Date | string
    fontSize?: FloatNullableWithAggregatesFilter<"LabelElement"> | number | null
  }

  export type FabricProjectWhereInput = {
    AND?: FabricProjectWhereInput | FabricProjectWhereInput[]
    OR?: FabricProjectWhereInput[]
    NOT?: FabricProjectWhereInput | FabricProjectWhereInput[]
    id?: StringFilter<"FabricProject"> | string
    name?: StringFilter<"FabricProject"> | string
    description?: StringNullableFilter<"FabricProject"> | string | null
    icon?: StringNullableFilter<"FabricProject"> | string | null
    userId?: StringFilter<"FabricProject"> | string
    createdAt?: DateTimeFilter<"FabricProject"> | Date | string
    updatedAt?: DateTimeFilter<"FabricProject"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    canvases?: FabricCanvasListRelationFilter
  }

  export type FabricProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    canvases?: FabricCanvasOrderByRelationAggregateInput
  }

  export type FabricProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FabricProjectWhereInput | FabricProjectWhereInput[]
    OR?: FabricProjectWhereInput[]
    NOT?: FabricProjectWhereInput | FabricProjectWhereInput[]
    name?: StringFilter<"FabricProject"> | string
    description?: StringNullableFilter<"FabricProject"> | string | null
    icon?: StringNullableFilter<"FabricProject"> | string | null
    userId?: StringFilter<"FabricProject"> | string
    createdAt?: DateTimeFilter<"FabricProject"> | Date | string
    updatedAt?: DateTimeFilter<"FabricProject"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    canvases?: FabricCanvasListRelationFilter
  }, "id">

  export type FabricProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FabricProjectCountOrderByAggregateInput
    _max?: FabricProjectMaxOrderByAggregateInput
    _min?: FabricProjectMinOrderByAggregateInput
  }

  export type FabricProjectScalarWhereWithAggregatesInput = {
    AND?: FabricProjectScalarWhereWithAggregatesInput | FabricProjectScalarWhereWithAggregatesInput[]
    OR?: FabricProjectScalarWhereWithAggregatesInput[]
    NOT?: FabricProjectScalarWhereWithAggregatesInput | FabricProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FabricProject"> | string
    name?: StringWithAggregatesFilter<"FabricProject"> | string
    description?: StringNullableWithAggregatesFilter<"FabricProject"> | string | null
    icon?: StringNullableWithAggregatesFilter<"FabricProject"> | string | null
    userId?: StringWithAggregatesFilter<"FabricProject"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FabricProject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FabricProject"> | Date | string
  }

  export type FabricCanvasWhereInput = {
    AND?: FabricCanvasWhereInput | FabricCanvasWhereInput[]
    OR?: FabricCanvasWhereInput[]
    NOT?: FabricCanvasWhereInput | FabricCanvasWhereInput[]
    id?: StringFilter<"FabricCanvas"> | string
    name?: StringFilter<"FabricCanvas"> | string
    width?: FloatFilter<"FabricCanvas"> | number
    height?: FloatFilter<"FabricCanvas"> | number
    unit?: StringFilter<"FabricCanvas"> | string
    background?: StringNullableFilter<"FabricCanvas"> | string | null
    projectId?: StringFilter<"FabricCanvas"> | string
    version?: IntFilter<"FabricCanvas"> | number
    metadata?: JsonNullableFilter<"FabricCanvas">
    createdAt?: DateTimeFilter<"FabricCanvas"> | Date | string
    updatedAt?: DateTimeFilter<"FabricCanvas"> | Date | string
    project?: XOR<FabricProjectRelationFilter, FabricProjectWhereInput>
    objects?: FabricObjectListRelationFilter
  }

  export type FabricCanvasOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    unit?: SortOrder
    background?: SortOrderInput | SortOrder
    projectId?: SortOrder
    version?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: FabricProjectOrderByWithRelationInput
    objects?: FabricObjectOrderByRelationAggregateInput
  }

  export type FabricCanvasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FabricCanvasWhereInput | FabricCanvasWhereInput[]
    OR?: FabricCanvasWhereInput[]
    NOT?: FabricCanvasWhereInput | FabricCanvasWhereInput[]
    name?: StringFilter<"FabricCanvas"> | string
    width?: FloatFilter<"FabricCanvas"> | number
    height?: FloatFilter<"FabricCanvas"> | number
    unit?: StringFilter<"FabricCanvas"> | string
    background?: StringNullableFilter<"FabricCanvas"> | string | null
    projectId?: StringFilter<"FabricCanvas"> | string
    version?: IntFilter<"FabricCanvas"> | number
    metadata?: JsonNullableFilter<"FabricCanvas">
    createdAt?: DateTimeFilter<"FabricCanvas"> | Date | string
    updatedAt?: DateTimeFilter<"FabricCanvas"> | Date | string
    project?: XOR<FabricProjectRelationFilter, FabricProjectWhereInput>
    objects?: FabricObjectListRelationFilter
  }, "id">

  export type FabricCanvasOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    unit?: SortOrder
    background?: SortOrderInput | SortOrder
    projectId?: SortOrder
    version?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FabricCanvasCountOrderByAggregateInput
    _avg?: FabricCanvasAvgOrderByAggregateInput
    _max?: FabricCanvasMaxOrderByAggregateInput
    _min?: FabricCanvasMinOrderByAggregateInput
    _sum?: FabricCanvasSumOrderByAggregateInput
  }

  export type FabricCanvasScalarWhereWithAggregatesInput = {
    AND?: FabricCanvasScalarWhereWithAggregatesInput | FabricCanvasScalarWhereWithAggregatesInput[]
    OR?: FabricCanvasScalarWhereWithAggregatesInput[]
    NOT?: FabricCanvasScalarWhereWithAggregatesInput | FabricCanvasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FabricCanvas"> | string
    name?: StringWithAggregatesFilter<"FabricCanvas"> | string
    width?: FloatWithAggregatesFilter<"FabricCanvas"> | number
    height?: FloatWithAggregatesFilter<"FabricCanvas"> | number
    unit?: StringWithAggregatesFilter<"FabricCanvas"> | string
    background?: StringNullableWithAggregatesFilter<"FabricCanvas"> | string | null
    projectId?: StringWithAggregatesFilter<"FabricCanvas"> | string
    version?: IntWithAggregatesFilter<"FabricCanvas"> | number
    metadata?: JsonNullableWithAggregatesFilter<"FabricCanvas">
    createdAt?: DateTimeWithAggregatesFilter<"FabricCanvas"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FabricCanvas"> | Date | string
  }

  export type FabricObjectWhereInput = {
    AND?: FabricObjectWhereInput | FabricObjectWhereInput[]
    OR?: FabricObjectWhereInput[]
    NOT?: FabricObjectWhereInput | FabricObjectWhereInput[]
    id?: StringFilter<"FabricObject"> | string
    type?: StringFilter<"FabricObject"> | string
    canvasId?: StringFilter<"FabricObject"> | string
    left?: FloatFilter<"FabricObject"> | number
    top?: FloatFilter<"FabricObject"> | number
    width?: FloatFilter<"FabricObject"> | number
    height?: FloatFilter<"FabricObject"> | number
    scaleX?: FloatFilter<"FabricObject"> | number
    scaleY?: FloatFilter<"FabricObject"> | number
    angle?: FloatFilter<"FabricObject"> | number
    fill?: StringNullableFilter<"FabricObject"> | string | null
    stroke?: StringNullableFilter<"FabricObject"> | string | null
    strokeWidth?: FloatNullableFilter<"FabricObject"> | number | null
    opacity?: FloatFilter<"FabricObject"> | number
    text?: StringNullableFilter<"FabricObject"> | string | null
    fontFamily?: StringNullableFilter<"FabricObject"> | string | null
    fontSize?: FloatNullableFilter<"FabricObject"> | number | null
    fontWeight?: StringNullableFilter<"FabricObject"> | string | null
    fontStyle?: StringNullableFilter<"FabricObject"> | string | null
    textAlign?: StringNullableFilter<"FabricObject"> | string | null
    qrValue?: StringNullableFilter<"FabricObject"> | string | null
    uuidLength?: IntNullableFilter<"FabricObject"> | number | null
    qrErrorLevel?: StringNullableFilter<"FabricObject"> | string | null
    zIndex?: IntFilter<"FabricObject"> | number
    locked?: BoolFilter<"FabricObject"> | boolean
    visible?: BoolFilter<"FabricObject"> | boolean
    metadata?: JsonNullableFilter<"FabricObject">
    createdAt?: DateTimeFilter<"FabricObject"> | Date | string
    updatedAt?: DateTimeFilter<"FabricObject"> | Date | string
    canvas?: XOR<FabricCanvasRelationFilter, FabricCanvasWhereInput>
  }

  export type FabricObjectOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    canvasId?: SortOrder
    left?: SortOrder
    top?: SortOrder
    width?: SortOrder
    height?: SortOrder
    scaleX?: SortOrder
    scaleY?: SortOrder
    angle?: SortOrder
    fill?: SortOrderInput | SortOrder
    stroke?: SortOrderInput | SortOrder
    strokeWidth?: SortOrderInput | SortOrder
    opacity?: SortOrder
    text?: SortOrderInput | SortOrder
    fontFamily?: SortOrderInput | SortOrder
    fontSize?: SortOrderInput | SortOrder
    fontWeight?: SortOrderInput | SortOrder
    fontStyle?: SortOrderInput | SortOrder
    textAlign?: SortOrderInput | SortOrder
    qrValue?: SortOrderInput | SortOrder
    uuidLength?: SortOrderInput | SortOrder
    qrErrorLevel?: SortOrderInput | SortOrder
    zIndex?: SortOrder
    locked?: SortOrder
    visible?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    canvas?: FabricCanvasOrderByWithRelationInput
  }

  export type FabricObjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FabricObjectWhereInput | FabricObjectWhereInput[]
    OR?: FabricObjectWhereInput[]
    NOT?: FabricObjectWhereInput | FabricObjectWhereInput[]
    type?: StringFilter<"FabricObject"> | string
    canvasId?: StringFilter<"FabricObject"> | string
    left?: FloatFilter<"FabricObject"> | number
    top?: FloatFilter<"FabricObject"> | number
    width?: FloatFilter<"FabricObject"> | number
    height?: FloatFilter<"FabricObject"> | number
    scaleX?: FloatFilter<"FabricObject"> | number
    scaleY?: FloatFilter<"FabricObject"> | number
    angle?: FloatFilter<"FabricObject"> | number
    fill?: StringNullableFilter<"FabricObject"> | string | null
    stroke?: StringNullableFilter<"FabricObject"> | string | null
    strokeWidth?: FloatNullableFilter<"FabricObject"> | number | null
    opacity?: FloatFilter<"FabricObject"> | number
    text?: StringNullableFilter<"FabricObject"> | string | null
    fontFamily?: StringNullableFilter<"FabricObject"> | string | null
    fontSize?: FloatNullableFilter<"FabricObject"> | number | null
    fontWeight?: StringNullableFilter<"FabricObject"> | string | null
    fontStyle?: StringNullableFilter<"FabricObject"> | string | null
    textAlign?: StringNullableFilter<"FabricObject"> | string | null
    qrValue?: StringNullableFilter<"FabricObject"> | string | null
    uuidLength?: IntNullableFilter<"FabricObject"> | number | null
    qrErrorLevel?: StringNullableFilter<"FabricObject"> | string | null
    zIndex?: IntFilter<"FabricObject"> | number
    locked?: BoolFilter<"FabricObject"> | boolean
    visible?: BoolFilter<"FabricObject"> | boolean
    metadata?: JsonNullableFilter<"FabricObject">
    createdAt?: DateTimeFilter<"FabricObject"> | Date | string
    updatedAt?: DateTimeFilter<"FabricObject"> | Date | string
    canvas?: XOR<FabricCanvasRelationFilter, FabricCanvasWhereInput>
  }, "id">

  export type FabricObjectOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    canvasId?: SortOrder
    left?: SortOrder
    top?: SortOrder
    width?: SortOrder
    height?: SortOrder
    scaleX?: SortOrder
    scaleY?: SortOrder
    angle?: SortOrder
    fill?: SortOrderInput | SortOrder
    stroke?: SortOrderInput | SortOrder
    strokeWidth?: SortOrderInput | SortOrder
    opacity?: SortOrder
    text?: SortOrderInput | SortOrder
    fontFamily?: SortOrderInput | SortOrder
    fontSize?: SortOrderInput | SortOrder
    fontWeight?: SortOrderInput | SortOrder
    fontStyle?: SortOrderInput | SortOrder
    textAlign?: SortOrderInput | SortOrder
    qrValue?: SortOrderInput | SortOrder
    uuidLength?: SortOrderInput | SortOrder
    qrErrorLevel?: SortOrderInput | SortOrder
    zIndex?: SortOrder
    locked?: SortOrder
    visible?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FabricObjectCountOrderByAggregateInput
    _avg?: FabricObjectAvgOrderByAggregateInput
    _max?: FabricObjectMaxOrderByAggregateInput
    _min?: FabricObjectMinOrderByAggregateInput
    _sum?: FabricObjectSumOrderByAggregateInput
  }

  export type FabricObjectScalarWhereWithAggregatesInput = {
    AND?: FabricObjectScalarWhereWithAggregatesInput | FabricObjectScalarWhereWithAggregatesInput[]
    OR?: FabricObjectScalarWhereWithAggregatesInput[]
    NOT?: FabricObjectScalarWhereWithAggregatesInput | FabricObjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FabricObject"> | string
    type?: StringWithAggregatesFilter<"FabricObject"> | string
    canvasId?: StringWithAggregatesFilter<"FabricObject"> | string
    left?: FloatWithAggregatesFilter<"FabricObject"> | number
    top?: FloatWithAggregatesFilter<"FabricObject"> | number
    width?: FloatWithAggregatesFilter<"FabricObject"> | number
    height?: FloatWithAggregatesFilter<"FabricObject"> | number
    scaleX?: FloatWithAggregatesFilter<"FabricObject"> | number
    scaleY?: FloatWithAggregatesFilter<"FabricObject"> | number
    angle?: FloatWithAggregatesFilter<"FabricObject"> | number
    fill?: StringNullableWithAggregatesFilter<"FabricObject"> | string | null
    stroke?: StringNullableWithAggregatesFilter<"FabricObject"> | string | null
    strokeWidth?: FloatNullableWithAggregatesFilter<"FabricObject"> | number | null
    opacity?: FloatWithAggregatesFilter<"FabricObject"> | number
    text?: StringNullableWithAggregatesFilter<"FabricObject"> | string | null
    fontFamily?: StringNullableWithAggregatesFilter<"FabricObject"> | string | null
    fontSize?: FloatNullableWithAggregatesFilter<"FabricObject"> | number | null
    fontWeight?: StringNullableWithAggregatesFilter<"FabricObject"> | string | null
    fontStyle?: StringNullableWithAggregatesFilter<"FabricObject"> | string | null
    textAlign?: StringNullableWithAggregatesFilter<"FabricObject"> | string | null
    qrValue?: StringNullableWithAggregatesFilter<"FabricObject"> | string | null
    uuidLength?: IntNullableWithAggregatesFilter<"FabricObject"> | number | null
    qrErrorLevel?: StringNullableWithAggregatesFilter<"FabricObject"> | string | null
    zIndex?: IntWithAggregatesFilter<"FabricObject"> | number
    locked?: BoolWithAggregatesFilter<"FabricObject"> | boolean
    visible?: BoolWithAggregatesFilter<"FabricObject"> | boolean
    metadata?: JsonNullableWithAggregatesFilter<"FabricObject">
    createdAt?: DateTimeWithAggregatesFilter<"FabricObject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FabricObject"> | Date | string
  }

  export type FabricTemplateWhereInput = {
    AND?: FabricTemplateWhereInput | FabricTemplateWhereInput[]
    OR?: FabricTemplateWhereInput[]
    NOT?: FabricTemplateWhereInput | FabricTemplateWhereInput[]
    id?: StringFilter<"FabricTemplate"> | string
    name?: StringFilter<"FabricTemplate"> | string
    description?: StringNullableFilter<"FabricTemplate"> | string | null
    category?: StringFilter<"FabricTemplate"> | string
    thumbnail?: StringNullableFilter<"FabricTemplate"> | string | null
    canvasData?: JsonFilter<"FabricTemplate">
    isPublic?: BoolFilter<"FabricTemplate"> | boolean
    userId?: StringNullableFilter<"FabricTemplate"> | string | null
    createdAt?: DateTimeFilter<"FabricTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"FabricTemplate"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type FabricTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    canvasData?: SortOrder
    isPublic?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FabricTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FabricTemplateWhereInput | FabricTemplateWhereInput[]
    OR?: FabricTemplateWhereInput[]
    NOT?: FabricTemplateWhereInput | FabricTemplateWhereInput[]
    name?: StringFilter<"FabricTemplate"> | string
    description?: StringNullableFilter<"FabricTemplate"> | string | null
    category?: StringFilter<"FabricTemplate"> | string
    thumbnail?: StringNullableFilter<"FabricTemplate"> | string | null
    canvasData?: JsonFilter<"FabricTemplate">
    isPublic?: BoolFilter<"FabricTemplate"> | boolean
    userId?: StringNullableFilter<"FabricTemplate"> | string | null
    createdAt?: DateTimeFilter<"FabricTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"FabricTemplate"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type FabricTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    canvasData?: SortOrder
    isPublic?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FabricTemplateCountOrderByAggregateInput
    _max?: FabricTemplateMaxOrderByAggregateInput
    _min?: FabricTemplateMinOrderByAggregateInput
  }

  export type FabricTemplateScalarWhereWithAggregatesInput = {
    AND?: FabricTemplateScalarWhereWithAggregatesInput | FabricTemplateScalarWhereWithAggregatesInput[]
    OR?: FabricTemplateScalarWhereWithAggregatesInput[]
    NOT?: FabricTemplateScalarWhereWithAggregatesInput | FabricTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FabricTemplate"> | string
    name?: StringWithAggregatesFilter<"FabricTemplate"> | string
    description?: StringNullableWithAggregatesFilter<"FabricTemplate"> | string | null
    category?: StringWithAggregatesFilter<"FabricTemplate"> | string
    thumbnail?: StringNullableWithAggregatesFilter<"FabricTemplate"> | string | null
    canvasData?: JsonWithAggregatesFilter<"FabricTemplate">
    isPublic?: BoolWithAggregatesFilter<"FabricTemplate"> | boolean
    userId?: StringNullableWithAggregatesFilter<"FabricTemplate"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FabricTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FabricTemplate"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
    resetTokens?: ResetTokenCreateNestedManyWithoutUserInput
    fabricProjects?: FabricProjectCreateNestedManyWithoutUserInput
    fabricTemplates?: FabricTemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    resetTokens?: ResetTokenUncheckedCreateNestedManyWithoutUserInput
    fabricProjects?: FabricProjectUncheckedCreateNestedManyWithoutUserInput
    fabricTemplates?: FabricTemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
    resetTokens?: ResetTokenUpdateManyWithoutUserNestedInput
    fabricProjects?: FabricProjectUpdateManyWithoutUserNestedInput
    fabricTemplates?: FabricTemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    resetTokens?: ResetTokenUncheckedUpdateManyWithoutUserNestedInput
    fabricProjects?: FabricProjectUncheckedUpdateManyWithoutUserNestedInput
    fabricTemplates?: FabricTemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutResetTokensInput
  }

  export type ResetTokenUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type ResetTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResetTokensNestedInput
  }

  export type ResetTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetTokenCreateManyInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type ResetTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    icon?: string | null
    labels?: LabelCreateNestedManyWithoutProjectInput
    user?: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    description?: string | null
    icon?: string | null
    labels?: LabelUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    labels?: LabelUpdateManyWithoutProjectNestedInput
    user?: UserUpdateOneWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    labels?: LabelUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    description?: string | null
    icon?: string | null
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LabelCreateInput = {
    id?: string
    name: string
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    project?: ProjectCreateNestedOneWithoutLabelsInput
    elements?: LabelElementCreateNestedManyWithoutLabelInput
  }

  export type LabelUncheckedCreateInput = {
    id?: string
    name: string
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId?: string | null
    elements?: LabelElementUncheckedCreateNestedManyWithoutLabelInput
  }

  export type LabelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneWithoutLabelsNestedInput
    elements?: LabelElementUpdateManyWithoutLabelNestedInput
  }

  export type LabelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    elements?: LabelElementUncheckedUpdateManyWithoutLabelNestedInput
  }

  export type LabelCreateManyInput = {
    id?: string
    name: string
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId?: string | null
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
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LabelElementCreateInput = {
    id?: string
    type: string
    x: number
    y: number
    width?: number | null
    height?: number | null
    value?: string | null
    color?: string | null
    rotation?: number | null
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fontSize?: number | null
    label: LabelCreateNestedOneWithoutElementsInput
  }

  export type LabelElementUncheckedCreateInput = {
    id?: string
    type: string
    x: number
    y: number
    width?: number | null
    height?: number | null
    value?: string | null
    color?: string | null
    rotation?: number | null
    labelId: string
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fontSize?: number | null
  }

  export type LabelElementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fontSize?: NullableFloatFieldUpdateOperationsInput | number | null
    label?: LabelUpdateOneRequiredWithoutElementsNestedInput
  }

  export type LabelElementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    labelId?: StringFieldUpdateOperationsInput | string
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fontSize?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type LabelElementCreateManyInput = {
    id?: string
    type: string
    x: number
    y: number
    width?: number | null
    height?: number | null
    value?: string | null
    color?: string | null
    rotation?: number | null
    labelId: string
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fontSize?: number | null
  }

  export type LabelElementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fontSize?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type LabelElementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    labelId?: StringFieldUpdateOperationsInput | string
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fontSize?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FabricProjectCreateInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFabricProjectsInput
    canvases?: FabricCanvasCreateNestedManyWithoutProjectInput
  }

  export type FabricProjectUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    canvases?: FabricCanvasUncheckedCreateNestedManyWithoutProjectInput
  }

  export type FabricProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFabricProjectsNestedInput
    canvases?: FabricCanvasUpdateManyWithoutProjectNestedInput
  }

  export type FabricProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canvases?: FabricCanvasUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type FabricProjectCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FabricProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FabricProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FabricCanvasCreateInput = {
    id?: string
    name: string
    width: number
    height: number
    unit?: string
    background?: string | null
    version?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    project: FabricProjectCreateNestedOneWithoutCanvasesInput
    objects?: FabricObjectCreateNestedManyWithoutCanvasInput
  }

  export type FabricCanvasUncheckedCreateInput = {
    id?: string
    name: string
    width: number
    height: number
    unit?: string
    background?: string | null
    projectId: string
    version?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    objects?: FabricObjectUncheckedCreateNestedManyWithoutCanvasInput
  }

  export type FabricCanvasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    background?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: FabricProjectUpdateOneRequiredWithoutCanvasesNestedInput
    objects?: FabricObjectUpdateManyWithoutCanvasNestedInput
  }

  export type FabricCanvasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    background?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    objects?: FabricObjectUncheckedUpdateManyWithoutCanvasNestedInput
  }

  export type FabricCanvasCreateManyInput = {
    id?: string
    name: string
    width: number
    height: number
    unit?: string
    background?: string | null
    projectId: string
    version?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FabricCanvasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    background?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FabricCanvasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    background?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FabricObjectCreateInput = {
    id?: string
    type: string
    left: number
    top: number
    width: number
    height: number
    scaleX?: number
    scaleY?: number
    angle?: number
    fill?: string | null
    stroke?: string | null
    strokeWidth?: number | null
    opacity?: number
    text?: string | null
    fontFamily?: string | null
    fontSize?: number | null
    fontWeight?: string | null
    fontStyle?: string | null
    textAlign?: string | null
    qrValue?: string | null
    uuidLength?: number | null
    qrErrorLevel?: string | null
    zIndex?: number
    locked?: boolean
    visible?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    canvas: FabricCanvasCreateNestedOneWithoutObjectsInput
  }

  export type FabricObjectUncheckedCreateInput = {
    id?: string
    type: string
    canvasId: string
    left: number
    top: number
    width: number
    height: number
    scaleX?: number
    scaleY?: number
    angle?: number
    fill?: string | null
    stroke?: string | null
    strokeWidth?: number | null
    opacity?: number
    text?: string | null
    fontFamily?: string | null
    fontSize?: number | null
    fontWeight?: string | null
    fontStyle?: string | null
    textAlign?: string | null
    qrValue?: string | null
    uuidLength?: number | null
    qrErrorLevel?: string | null
    zIndex?: number
    locked?: boolean
    visible?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FabricObjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    left?: FloatFieldUpdateOperationsInput | number
    top?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    scaleX?: FloatFieldUpdateOperationsInput | number
    scaleY?: FloatFieldUpdateOperationsInput | number
    angle?: FloatFieldUpdateOperationsInput | number
    fill?: NullableStringFieldUpdateOperationsInput | string | null
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    strokeWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    opacity?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    fontSize?: NullableFloatFieldUpdateOperationsInput | number | null
    fontWeight?: NullableStringFieldUpdateOperationsInput | string | null
    fontStyle?: NullableStringFieldUpdateOperationsInput | string | null
    textAlign?: NullableStringFieldUpdateOperationsInput | string | null
    qrValue?: NullableStringFieldUpdateOperationsInput | string | null
    uuidLength?: NullableIntFieldUpdateOperationsInput | number | null
    qrErrorLevel?: NullableStringFieldUpdateOperationsInput | string | null
    zIndex?: IntFieldUpdateOperationsInput | number
    locked?: BoolFieldUpdateOperationsInput | boolean
    visible?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canvas?: FabricCanvasUpdateOneRequiredWithoutObjectsNestedInput
  }

  export type FabricObjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    canvasId?: StringFieldUpdateOperationsInput | string
    left?: FloatFieldUpdateOperationsInput | number
    top?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    scaleX?: FloatFieldUpdateOperationsInput | number
    scaleY?: FloatFieldUpdateOperationsInput | number
    angle?: FloatFieldUpdateOperationsInput | number
    fill?: NullableStringFieldUpdateOperationsInput | string | null
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    strokeWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    opacity?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    fontSize?: NullableFloatFieldUpdateOperationsInput | number | null
    fontWeight?: NullableStringFieldUpdateOperationsInput | string | null
    fontStyle?: NullableStringFieldUpdateOperationsInput | string | null
    textAlign?: NullableStringFieldUpdateOperationsInput | string | null
    qrValue?: NullableStringFieldUpdateOperationsInput | string | null
    uuidLength?: NullableIntFieldUpdateOperationsInput | number | null
    qrErrorLevel?: NullableStringFieldUpdateOperationsInput | string | null
    zIndex?: IntFieldUpdateOperationsInput | number
    locked?: BoolFieldUpdateOperationsInput | boolean
    visible?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FabricObjectCreateManyInput = {
    id?: string
    type: string
    canvasId: string
    left: number
    top: number
    width: number
    height: number
    scaleX?: number
    scaleY?: number
    angle?: number
    fill?: string | null
    stroke?: string | null
    strokeWidth?: number | null
    opacity?: number
    text?: string | null
    fontFamily?: string | null
    fontSize?: number | null
    fontWeight?: string | null
    fontStyle?: string | null
    textAlign?: string | null
    qrValue?: string | null
    uuidLength?: number | null
    qrErrorLevel?: string | null
    zIndex?: number
    locked?: boolean
    visible?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FabricObjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    left?: FloatFieldUpdateOperationsInput | number
    top?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    scaleX?: FloatFieldUpdateOperationsInput | number
    scaleY?: FloatFieldUpdateOperationsInput | number
    angle?: FloatFieldUpdateOperationsInput | number
    fill?: NullableStringFieldUpdateOperationsInput | string | null
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    strokeWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    opacity?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    fontSize?: NullableFloatFieldUpdateOperationsInput | number | null
    fontWeight?: NullableStringFieldUpdateOperationsInput | string | null
    fontStyle?: NullableStringFieldUpdateOperationsInput | string | null
    textAlign?: NullableStringFieldUpdateOperationsInput | string | null
    qrValue?: NullableStringFieldUpdateOperationsInput | string | null
    uuidLength?: NullableIntFieldUpdateOperationsInput | number | null
    qrErrorLevel?: NullableStringFieldUpdateOperationsInput | string | null
    zIndex?: IntFieldUpdateOperationsInput | number
    locked?: BoolFieldUpdateOperationsInput | boolean
    visible?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FabricObjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    canvasId?: StringFieldUpdateOperationsInput | string
    left?: FloatFieldUpdateOperationsInput | number
    top?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    scaleX?: FloatFieldUpdateOperationsInput | number
    scaleY?: FloatFieldUpdateOperationsInput | number
    angle?: FloatFieldUpdateOperationsInput | number
    fill?: NullableStringFieldUpdateOperationsInput | string | null
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    strokeWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    opacity?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    fontSize?: NullableFloatFieldUpdateOperationsInput | number | null
    fontWeight?: NullableStringFieldUpdateOperationsInput | string | null
    fontStyle?: NullableStringFieldUpdateOperationsInput | string | null
    textAlign?: NullableStringFieldUpdateOperationsInput | string | null
    qrValue?: NullableStringFieldUpdateOperationsInput | string | null
    uuidLength?: NullableIntFieldUpdateOperationsInput | number | null
    qrErrorLevel?: NullableStringFieldUpdateOperationsInput | string | null
    zIndex?: IntFieldUpdateOperationsInput | number
    locked?: BoolFieldUpdateOperationsInput | boolean
    visible?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FabricTemplateCreateInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    thumbnail?: string | null
    canvasData: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutFabricTemplatesInput
  }

  export type FabricTemplateUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    thumbnail?: string | null
    canvasData: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FabricTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    canvasData?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutFabricTemplatesNestedInput
  }

  export type FabricTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    canvasData?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FabricTemplateCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    thumbnail?: string | null
    canvasData: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FabricTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    canvasData?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FabricTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    canvasData?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ResetTokenListRelationFilter = {
    every?: ResetTokenWhereInput
    some?: ResetTokenWhereInput
    none?: ResetTokenWhereInput
  }

  export type FabricProjectListRelationFilter = {
    every?: FabricProjectWhereInput
    some?: FabricProjectWhereInput
    none?: FabricProjectWhereInput
  }

  export type FabricTemplateListRelationFilter = {
    every?: FabricTemplateWhereInput
    some?: FabricTemplateWhereInput
    none?: FabricTemplateWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResetTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FabricProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FabricTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
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

  export type LabelListRelationFilter = {
    every?: LabelWhereInput
    some?: LabelWhereInput
    none?: LabelWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LabelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    icon?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    icon?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    icon?: SortOrder
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

  export type ProjectNullableRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type LabelElementListRelationFilter = {
    every?: LabelElementWhereInput
    some?: LabelElementWhereInput
    none?: LabelElementWhereInput
  }

  export type LabelElementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LabelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
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
    projectId?: SortOrder
  }

  export type LabelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
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
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LabelRelationFilter = {
    is?: LabelWhereInput
    isNot?: LabelWhereInput
  }

  export type LabelElementCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    value?: SortOrder
    color?: SortOrder
    rotation?: SortOrder
    labelId?: SortOrder
    properties?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fontSize?: SortOrder
  }

  export type LabelElementAvgOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    rotation?: SortOrder
    fontSize?: SortOrder
  }

  export type LabelElementMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    value?: SortOrder
    color?: SortOrder
    rotation?: SortOrder
    labelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fontSize?: SortOrder
  }

  export type LabelElementMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    value?: SortOrder
    color?: SortOrder
    rotation?: SortOrder
    labelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fontSize?: SortOrder
  }

  export type LabelElementSumOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    rotation?: SortOrder
    fontSize?: SortOrder
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FabricCanvasListRelationFilter = {
    every?: FabricCanvasWhereInput
    some?: FabricCanvasWhereInput
    none?: FabricCanvasWhereInput
  }

  export type FabricCanvasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FabricProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FabricProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FabricProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type FabricProjectRelationFilter = {
    is?: FabricProjectWhereInput
    isNot?: FabricProjectWhereInput
  }

  export type FabricObjectListRelationFilter = {
    every?: FabricObjectWhereInput
    some?: FabricObjectWhereInput
    none?: FabricObjectWhereInput
  }

  export type FabricObjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FabricCanvasCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    unit?: SortOrder
    background?: SortOrder
    projectId?: SortOrder
    version?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FabricCanvasAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
    version?: SortOrder
  }

  export type FabricCanvasMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    unit?: SortOrder
    background?: SortOrder
    projectId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FabricCanvasMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    unit?: SortOrder
    background?: SortOrder
    projectId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FabricCanvasSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
    version?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FabricCanvasRelationFilter = {
    is?: FabricCanvasWhereInput
    isNot?: FabricCanvasWhereInput
  }

  export type FabricObjectCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    canvasId?: SortOrder
    left?: SortOrder
    top?: SortOrder
    width?: SortOrder
    height?: SortOrder
    scaleX?: SortOrder
    scaleY?: SortOrder
    angle?: SortOrder
    fill?: SortOrder
    stroke?: SortOrder
    strokeWidth?: SortOrder
    opacity?: SortOrder
    text?: SortOrder
    fontFamily?: SortOrder
    fontSize?: SortOrder
    fontWeight?: SortOrder
    fontStyle?: SortOrder
    textAlign?: SortOrder
    qrValue?: SortOrder
    uuidLength?: SortOrder
    qrErrorLevel?: SortOrder
    zIndex?: SortOrder
    locked?: SortOrder
    visible?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FabricObjectAvgOrderByAggregateInput = {
    left?: SortOrder
    top?: SortOrder
    width?: SortOrder
    height?: SortOrder
    scaleX?: SortOrder
    scaleY?: SortOrder
    angle?: SortOrder
    strokeWidth?: SortOrder
    opacity?: SortOrder
    fontSize?: SortOrder
    uuidLength?: SortOrder
    zIndex?: SortOrder
  }

  export type FabricObjectMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    canvasId?: SortOrder
    left?: SortOrder
    top?: SortOrder
    width?: SortOrder
    height?: SortOrder
    scaleX?: SortOrder
    scaleY?: SortOrder
    angle?: SortOrder
    fill?: SortOrder
    stroke?: SortOrder
    strokeWidth?: SortOrder
    opacity?: SortOrder
    text?: SortOrder
    fontFamily?: SortOrder
    fontSize?: SortOrder
    fontWeight?: SortOrder
    fontStyle?: SortOrder
    textAlign?: SortOrder
    qrValue?: SortOrder
    uuidLength?: SortOrder
    qrErrorLevel?: SortOrder
    zIndex?: SortOrder
    locked?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FabricObjectMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    canvasId?: SortOrder
    left?: SortOrder
    top?: SortOrder
    width?: SortOrder
    height?: SortOrder
    scaleX?: SortOrder
    scaleY?: SortOrder
    angle?: SortOrder
    fill?: SortOrder
    stroke?: SortOrder
    strokeWidth?: SortOrder
    opacity?: SortOrder
    text?: SortOrder
    fontFamily?: SortOrder
    fontSize?: SortOrder
    fontWeight?: SortOrder
    fontStyle?: SortOrder
    textAlign?: SortOrder
    qrValue?: SortOrder
    uuidLength?: SortOrder
    qrErrorLevel?: SortOrder
    zIndex?: SortOrder
    locked?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FabricObjectSumOrderByAggregateInput = {
    left?: SortOrder
    top?: SortOrder
    width?: SortOrder
    height?: SortOrder
    scaleX?: SortOrder
    scaleY?: SortOrder
    angle?: SortOrder
    strokeWidth?: SortOrder
    opacity?: SortOrder
    fontSize?: SortOrder
    uuidLength?: SortOrder
    zIndex?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FabricTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    thumbnail?: SortOrder
    canvasData?: SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FabricTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    thumbnail?: SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FabricTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    thumbnail?: SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ResetTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<ResetTokenCreateWithoutUserInput, ResetTokenUncheckedCreateWithoutUserInput> | ResetTokenCreateWithoutUserInput[] | ResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResetTokenCreateOrConnectWithoutUserInput | ResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: ResetTokenCreateManyUserInputEnvelope
    connect?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[]
  }

  export type FabricProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<FabricProjectCreateWithoutUserInput, FabricProjectUncheckedCreateWithoutUserInput> | FabricProjectCreateWithoutUserInput[] | FabricProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FabricProjectCreateOrConnectWithoutUserInput | FabricProjectCreateOrConnectWithoutUserInput[]
    createMany?: FabricProjectCreateManyUserInputEnvelope
    connect?: FabricProjectWhereUniqueInput | FabricProjectWhereUniqueInput[]
  }

  export type FabricTemplateCreateNestedManyWithoutUserInput = {
    create?: XOR<FabricTemplateCreateWithoutUserInput, FabricTemplateUncheckedCreateWithoutUserInput> | FabricTemplateCreateWithoutUserInput[] | FabricTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FabricTemplateCreateOrConnectWithoutUserInput | FabricTemplateCreateOrConnectWithoutUserInput[]
    createMany?: FabricTemplateCreateManyUserInputEnvelope
    connect?: FabricTemplateWhereUniqueInput | FabricTemplateWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ResetTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResetTokenCreateWithoutUserInput, ResetTokenUncheckedCreateWithoutUserInput> | ResetTokenCreateWithoutUserInput[] | ResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResetTokenCreateOrConnectWithoutUserInput | ResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: ResetTokenCreateManyUserInputEnvelope
    connect?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[]
  }

  export type FabricProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FabricProjectCreateWithoutUserInput, FabricProjectUncheckedCreateWithoutUserInput> | FabricProjectCreateWithoutUserInput[] | FabricProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FabricProjectCreateOrConnectWithoutUserInput | FabricProjectCreateOrConnectWithoutUserInput[]
    createMany?: FabricProjectCreateManyUserInputEnvelope
    connect?: FabricProjectWhereUniqueInput | FabricProjectWhereUniqueInput[]
  }

  export type FabricTemplateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FabricTemplateCreateWithoutUserInput, FabricTemplateUncheckedCreateWithoutUserInput> | FabricTemplateCreateWithoutUserInput[] | FabricTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FabricTemplateCreateOrConnectWithoutUserInput | FabricTemplateCreateOrConnectWithoutUserInput[]
    createMany?: FabricTemplateCreateManyUserInputEnvelope
    connect?: FabricTemplateWhereUniqueInput | FabricTemplateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ResetTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResetTokenCreateWithoutUserInput, ResetTokenUncheckedCreateWithoutUserInput> | ResetTokenCreateWithoutUserInput[] | ResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResetTokenCreateOrConnectWithoutUserInput | ResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: ResetTokenUpsertWithWhereUniqueWithoutUserInput | ResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResetTokenCreateManyUserInputEnvelope
    set?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[]
    disconnect?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[]
    delete?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[]
    connect?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[]
    update?: ResetTokenUpdateWithWhereUniqueWithoutUserInput | ResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResetTokenUpdateManyWithWhereWithoutUserInput | ResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResetTokenScalarWhereInput | ResetTokenScalarWhereInput[]
  }

  export type FabricProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<FabricProjectCreateWithoutUserInput, FabricProjectUncheckedCreateWithoutUserInput> | FabricProjectCreateWithoutUserInput[] | FabricProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FabricProjectCreateOrConnectWithoutUserInput | FabricProjectCreateOrConnectWithoutUserInput[]
    upsert?: FabricProjectUpsertWithWhereUniqueWithoutUserInput | FabricProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FabricProjectCreateManyUserInputEnvelope
    set?: FabricProjectWhereUniqueInput | FabricProjectWhereUniqueInput[]
    disconnect?: FabricProjectWhereUniqueInput | FabricProjectWhereUniqueInput[]
    delete?: FabricProjectWhereUniqueInput | FabricProjectWhereUniqueInput[]
    connect?: FabricProjectWhereUniqueInput | FabricProjectWhereUniqueInput[]
    update?: FabricProjectUpdateWithWhereUniqueWithoutUserInput | FabricProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FabricProjectUpdateManyWithWhereWithoutUserInput | FabricProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FabricProjectScalarWhereInput | FabricProjectScalarWhereInput[]
  }

  export type FabricTemplateUpdateManyWithoutUserNestedInput = {
    create?: XOR<FabricTemplateCreateWithoutUserInput, FabricTemplateUncheckedCreateWithoutUserInput> | FabricTemplateCreateWithoutUserInput[] | FabricTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FabricTemplateCreateOrConnectWithoutUserInput | FabricTemplateCreateOrConnectWithoutUserInput[]
    upsert?: FabricTemplateUpsertWithWhereUniqueWithoutUserInput | FabricTemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FabricTemplateCreateManyUserInputEnvelope
    set?: FabricTemplateWhereUniqueInput | FabricTemplateWhereUniqueInput[]
    disconnect?: FabricTemplateWhereUniqueInput | FabricTemplateWhereUniqueInput[]
    delete?: FabricTemplateWhereUniqueInput | FabricTemplateWhereUniqueInput[]
    connect?: FabricTemplateWhereUniqueInput | FabricTemplateWhereUniqueInput[]
    update?: FabricTemplateUpdateWithWhereUniqueWithoutUserInput | FabricTemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FabricTemplateUpdateManyWithWhereWithoutUserInput | FabricTemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FabricTemplateScalarWhereInput | FabricTemplateScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ResetTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResetTokenCreateWithoutUserInput, ResetTokenUncheckedCreateWithoutUserInput> | ResetTokenCreateWithoutUserInput[] | ResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResetTokenCreateOrConnectWithoutUserInput | ResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: ResetTokenUpsertWithWhereUniqueWithoutUserInput | ResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResetTokenCreateManyUserInputEnvelope
    set?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[]
    disconnect?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[]
    delete?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[]
    connect?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[]
    update?: ResetTokenUpdateWithWhereUniqueWithoutUserInput | ResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResetTokenUpdateManyWithWhereWithoutUserInput | ResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResetTokenScalarWhereInput | ResetTokenScalarWhereInput[]
  }

  export type FabricProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FabricProjectCreateWithoutUserInput, FabricProjectUncheckedCreateWithoutUserInput> | FabricProjectCreateWithoutUserInput[] | FabricProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FabricProjectCreateOrConnectWithoutUserInput | FabricProjectCreateOrConnectWithoutUserInput[]
    upsert?: FabricProjectUpsertWithWhereUniqueWithoutUserInput | FabricProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FabricProjectCreateManyUserInputEnvelope
    set?: FabricProjectWhereUniqueInput | FabricProjectWhereUniqueInput[]
    disconnect?: FabricProjectWhereUniqueInput | FabricProjectWhereUniqueInput[]
    delete?: FabricProjectWhereUniqueInput | FabricProjectWhereUniqueInput[]
    connect?: FabricProjectWhereUniqueInput | FabricProjectWhereUniqueInput[]
    update?: FabricProjectUpdateWithWhereUniqueWithoutUserInput | FabricProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FabricProjectUpdateManyWithWhereWithoutUserInput | FabricProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FabricProjectScalarWhereInput | FabricProjectScalarWhereInput[]
  }

  export type FabricTemplateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FabricTemplateCreateWithoutUserInput, FabricTemplateUncheckedCreateWithoutUserInput> | FabricTemplateCreateWithoutUserInput[] | FabricTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FabricTemplateCreateOrConnectWithoutUserInput | FabricTemplateCreateOrConnectWithoutUserInput[]
    upsert?: FabricTemplateUpsertWithWhereUniqueWithoutUserInput | FabricTemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FabricTemplateCreateManyUserInputEnvelope
    set?: FabricTemplateWhereUniqueInput | FabricTemplateWhereUniqueInput[]
    disconnect?: FabricTemplateWhereUniqueInput | FabricTemplateWhereUniqueInput[]
    delete?: FabricTemplateWhereUniqueInput | FabricTemplateWhereUniqueInput[]
    connect?: FabricTemplateWhereUniqueInput | FabricTemplateWhereUniqueInput[]
    update?: FabricTemplateUpdateWithWhereUniqueWithoutUserInput | FabricTemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FabricTemplateUpdateManyWithWhereWithoutUserInput | FabricTemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FabricTemplateScalarWhereInput | FabricTemplateScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutResetTokensInput = {
    create?: XOR<UserCreateWithoutResetTokensInput, UserUncheckedCreateWithoutResetTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutResetTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutResetTokensNestedInput = {
    create?: XOR<UserCreateWithoutResetTokensInput, UserUncheckedCreateWithoutResetTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutResetTokensInput
    upsert?: UserUpsertWithoutResetTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResetTokensInput, UserUpdateWithoutResetTokensInput>, UserUncheckedUpdateWithoutResetTokensInput>
  }

  export type LabelCreateNestedManyWithoutProjectInput = {
    create?: XOR<LabelCreateWithoutProjectInput, LabelUncheckedCreateWithoutProjectInput> | LabelCreateWithoutProjectInput[] | LabelUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LabelCreateOrConnectWithoutProjectInput | LabelCreateOrConnectWithoutProjectInput[]
    createMany?: LabelCreateManyProjectInputEnvelope
    connect?: LabelWhereUniqueInput | LabelWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type LabelUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<LabelCreateWithoutProjectInput, LabelUncheckedCreateWithoutProjectInput> | LabelCreateWithoutProjectInput[] | LabelUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LabelCreateOrConnectWithoutProjectInput | LabelCreateOrConnectWithoutProjectInput[]
    createMany?: LabelCreateManyProjectInputEnvelope
    connect?: LabelWhereUniqueInput | LabelWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LabelUpdateManyWithoutProjectNestedInput = {
    create?: XOR<LabelCreateWithoutProjectInput, LabelUncheckedCreateWithoutProjectInput> | LabelCreateWithoutProjectInput[] | LabelUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LabelCreateOrConnectWithoutProjectInput | LabelCreateOrConnectWithoutProjectInput[]
    upsert?: LabelUpsertWithWhereUniqueWithoutProjectInput | LabelUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: LabelCreateManyProjectInputEnvelope
    set?: LabelWhereUniqueInput | LabelWhereUniqueInput[]
    disconnect?: LabelWhereUniqueInput | LabelWhereUniqueInput[]
    delete?: LabelWhereUniqueInput | LabelWhereUniqueInput[]
    connect?: LabelWhereUniqueInput | LabelWhereUniqueInput[]
    update?: LabelUpdateWithWhereUniqueWithoutProjectInput | LabelUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: LabelUpdateManyWithWhereWithoutProjectInput | LabelUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: LabelScalarWhereInput | LabelScalarWhereInput[]
  }

  export type UserUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type LabelUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<LabelCreateWithoutProjectInput, LabelUncheckedCreateWithoutProjectInput> | LabelCreateWithoutProjectInput[] | LabelUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LabelCreateOrConnectWithoutProjectInput | LabelCreateOrConnectWithoutProjectInput[]
    upsert?: LabelUpsertWithWhereUniqueWithoutProjectInput | LabelUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: LabelCreateManyProjectInputEnvelope
    set?: LabelWhereUniqueInput | LabelWhereUniqueInput[]
    disconnect?: LabelWhereUniqueInput | LabelWhereUniqueInput[]
    delete?: LabelWhereUniqueInput | LabelWhereUniqueInput[]
    connect?: LabelWhereUniqueInput | LabelWhereUniqueInput[]
    update?: LabelUpdateWithWhereUniqueWithoutProjectInput | LabelUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: LabelUpdateManyWithWhereWithoutProjectInput | LabelUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: LabelScalarWhereInput | LabelScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutLabelsInput = {
    create?: XOR<ProjectCreateWithoutLabelsInput, ProjectUncheckedCreateWithoutLabelsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLabelsInput
    connect?: ProjectWhereUniqueInput
  }

  export type LabelElementCreateNestedManyWithoutLabelInput = {
    create?: XOR<LabelElementCreateWithoutLabelInput, LabelElementUncheckedCreateWithoutLabelInput> | LabelElementCreateWithoutLabelInput[] | LabelElementUncheckedCreateWithoutLabelInput[]
    connectOrCreate?: LabelElementCreateOrConnectWithoutLabelInput | LabelElementCreateOrConnectWithoutLabelInput[]
    createMany?: LabelElementCreateManyLabelInputEnvelope
    connect?: LabelElementWhereUniqueInput | LabelElementWhereUniqueInput[]
  }

  export type LabelElementUncheckedCreateNestedManyWithoutLabelInput = {
    create?: XOR<LabelElementCreateWithoutLabelInput, LabelElementUncheckedCreateWithoutLabelInput> | LabelElementCreateWithoutLabelInput[] | LabelElementUncheckedCreateWithoutLabelInput[]
    connectOrCreate?: LabelElementCreateOrConnectWithoutLabelInput | LabelElementCreateOrConnectWithoutLabelInput[]
    createMany?: LabelElementCreateManyLabelInputEnvelope
    connect?: LabelElementWhereUniqueInput | LabelElementWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneWithoutLabelsNestedInput = {
    create?: XOR<ProjectCreateWithoutLabelsInput, ProjectUncheckedCreateWithoutLabelsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLabelsInput
    upsert?: ProjectUpsertWithoutLabelsInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutLabelsInput, ProjectUpdateWithoutLabelsInput>, ProjectUncheckedUpdateWithoutLabelsInput>
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

  export type LabelUpdateOneRequiredWithoutElementsNestedInput = {
    create?: XOR<LabelCreateWithoutElementsInput, LabelUncheckedCreateWithoutElementsInput>
    connectOrCreate?: LabelCreateOrConnectWithoutElementsInput
    upsert?: LabelUpsertWithoutElementsInput
    connect?: LabelWhereUniqueInput
    update?: XOR<XOR<LabelUpdateToOneWithWhereWithoutElementsInput, LabelUpdateWithoutElementsInput>, LabelUncheckedUpdateWithoutElementsInput>
  }

  export type UserCreateNestedOneWithoutFabricProjectsInput = {
    create?: XOR<UserCreateWithoutFabricProjectsInput, UserUncheckedCreateWithoutFabricProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFabricProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type FabricCanvasCreateNestedManyWithoutProjectInput = {
    create?: XOR<FabricCanvasCreateWithoutProjectInput, FabricCanvasUncheckedCreateWithoutProjectInput> | FabricCanvasCreateWithoutProjectInput[] | FabricCanvasUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FabricCanvasCreateOrConnectWithoutProjectInput | FabricCanvasCreateOrConnectWithoutProjectInput[]
    createMany?: FabricCanvasCreateManyProjectInputEnvelope
    connect?: FabricCanvasWhereUniqueInput | FabricCanvasWhereUniqueInput[]
  }

  export type FabricCanvasUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<FabricCanvasCreateWithoutProjectInput, FabricCanvasUncheckedCreateWithoutProjectInput> | FabricCanvasCreateWithoutProjectInput[] | FabricCanvasUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FabricCanvasCreateOrConnectWithoutProjectInput | FabricCanvasCreateOrConnectWithoutProjectInput[]
    createMany?: FabricCanvasCreateManyProjectInputEnvelope
    connect?: FabricCanvasWhereUniqueInput | FabricCanvasWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutFabricProjectsNestedInput = {
    create?: XOR<UserCreateWithoutFabricProjectsInput, UserUncheckedCreateWithoutFabricProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFabricProjectsInput
    upsert?: UserUpsertWithoutFabricProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFabricProjectsInput, UserUpdateWithoutFabricProjectsInput>, UserUncheckedUpdateWithoutFabricProjectsInput>
  }

  export type FabricCanvasUpdateManyWithoutProjectNestedInput = {
    create?: XOR<FabricCanvasCreateWithoutProjectInput, FabricCanvasUncheckedCreateWithoutProjectInput> | FabricCanvasCreateWithoutProjectInput[] | FabricCanvasUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FabricCanvasCreateOrConnectWithoutProjectInput | FabricCanvasCreateOrConnectWithoutProjectInput[]
    upsert?: FabricCanvasUpsertWithWhereUniqueWithoutProjectInput | FabricCanvasUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: FabricCanvasCreateManyProjectInputEnvelope
    set?: FabricCanvasWhereUniqueInput | FabricCanvasWhereUniqueInput[]
    disconnect?: FabricCanvasWhereUniqueInput | FabricCanvasWhereUniqueInput[]
    delete?: FabricCanvasWhereUniqueInput | FabricCanvasWhereUniqueInput[]
    connect?: FabricCanvasWhereUniqueInput | FabricCanvasWhereUniqueInput[]
    update?: FabricCanvasUpdateWithWhereUniqueWithoutProjectInput | FabricCanvasUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: FabricCanvasUpdateManyWithWhereWithoutProjectInput | FabricCanvasUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: FabricCanvasScalarWhereInput | FabricCanvasScalarWhereInput[]
  }

  export type FabricCanvasUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<FabricCanvasCreateWithoutProjectInput, FabricCanvasUncheckedCreateWithoutProjectInput> | FabricCanvasCreateWithoutProjectInput[] | FabricCanvasUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FabricCanvasCreateOrConnectWithoutProjectInput | FabricCanvasCreateOrConnectWithoutProjectInput[]
    upsert?: FabricCanvasUpsertWithWhereUniqueWithoutProjectInput | FabricCanvasUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: FabricCanvasCreateManyProjectInputEnvelope
    set?: FabricCanvasWhereUniqueInput | FabricCanvasWhereUniqueInput[]
    disconnect?: FabricCanvasWhereUniqueInput | FabricCanvasWhereUniqueInput[]
    delete?: FabricCanvasWhereUniqueInput | FabricCanvasWhereUniqueInput[]
    connect?: FabricCanvasWhereUniqueInput | FabricCanvasWhereUniqueInput[]
    update?: FabricCanvasUpdateWithWhereUniqueWithoutProjectInput | FabricCanvasUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: FabricCanvasUpdateManyWithWhereWithoutProjectInput | FabricCanvasUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: FabricCanvasScalarWhereInput | FabricCanvasScalarWhereInput[]
  }

  export type FabricProjectCreateNestedOneWithoutCanvasesInput = {
    create?: XOR<FabricProjectCreateWithoutCanvasesInput, FabricProjectUncheckedCreateWithoutCanvasesInput>
    connectOrCreate?: FabricProjectCreateOrConnectWithoutCanvasesInput
    connect?: FabricProjectWhereUniqueInput
  }

  export type FabricObjectCreateNestedManyWithoutCanvasInput = {
    create?: XOR<FabricObjectCreateWithoutCanvasInput, FabricObjectUncheckedCreateWithoutCanvasInput> | FabricObjectCreateWithoutCanvasInput[] | FabricObjectUncheckedCreateWithoutCanvasInput[]
    connectOrCreate?: FabricObjectCreateOrConnectWithoutCanvasInput | FabricObjectCreateOrConnectWithoutCanvasInput[]
    createMany?: FabricObjectCreateManyCanvasInputEnvelope
    connect?: FabricObjectWhereUniqueInput | FabricObjectWhereUniqueInput[]
  }

  export type FabricObjectUncheckedCreateNestedManyWithoutCanvasInput = {
    create?: XOR<FabricObjectCreateWithoutCanvasInput, FabricObjectUncheckedCreateWithoutCanvasInput> | FabricObjectCreateWithoutCanvasInput[] | FabricObjectUncheckedCreateWithoutCanvasInput[]
    connectOrCreate?: FabricObjectCreateOrConnectWithoutCanvasInput | FabricObjectCreateOrConnectWithoutCanvasInput[]
    createMany?: FabricObjectCreateManyCanvasInputEnvelope
    connect?: FabricObjectWhereUniqueInput | FabricObjectWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FabricProjectUpdateOneRequiredWithoutCanvasesNestedInput = {
    create?: XOR<FabricProjectCreateWithoutCanvasesInput, FabricProjectUncheckedCreateWithoutCanvasesInput>
    connectOrCreate?: FabricProjectCreateOrConnectWithoutCanvasesInput
    upsert?: FabricProjectUpsertWithoutCanvasesInput
    connect?: FabricProjectWhereUniqueInput
    update?: XOR<XOR<FabricProjectUpdateToOneWithWhereWithoutCanvasesInput, FabricProjectUpdateWithoutCanvasesInput>, FabricProjectUncheckedUpdateWithoutCanvasesInput>
  }

  export type FabricObjectUpdateManyWithoutCanvasNestedInput = {
    create?: XOR<FabricObjectCreateWithoutCanvasInput, FabricObjectUncheckedCreateWithoutCanvasInput> | FabricObjectCreateWithoutCanvasInput[] | FabricObjectUncheckedCreateWithoutCanvasInput[]
    connectOrCreate?: FabricObjectCreateOrConnectWithoutCanvasInput | FabricObjectCreateOrConnectWithoutCanvasInput[]
    upsert?: FabricObjectUpsertWithWhereUniqueWithoutCanvasInput | FabricObjectUpsertWithWhereUniqueWithoutCanvasInput[]
    createMany?: FabricObjectCreateManyCanvasInputEnvelope
    set?: FabricObjectWhereUniqueInput | FabricObjectWhereUniqueInput[]
    disconnect?: FabricObjectWhereUniqueInput | FabricObjectWhereUniqueInput[]
    delete?: FabricObjectWhereUniqueInput | FabricObjectWhereUniqueInput[]
    connect?: FabricObjectWhereUniqueInput | FabricObjectWhereUniqueInput[]
    update?: FabricObjectUpdateWithWhereUniqueWithoutCanvasInput | FabricObjectUpdateWithWhereUniqueWithoutCanvasInput[]
    updateMany?: FabricObjectUpdateManyWithWhereWithoutCanvasInput | FabricObjectUpdateManyWithWhereWithoutCanvasInput[]
    deleteMany?: FabricObjectScalarWhereInput | FabricObjectScalarWhereInput[]
  }

  export type FabricObjectUncheckedUpdateManyWithoutCanvasNestedInput = {
    create?: XOR<FabricObjectCreateWithoutCanvasInput, FabricObjectUncheckedCreateWithoutCanvasInput> | FabricObjectCreateWithoutCanvasInput[] | FabricObjectUncheckedCreateWithoutCanvasInput[]
    connectOrCreate?: FabricObjectCreateOrConnectWithoutCanvasInput | FabricObjectCreateOrConnectWithoutCanvasInput[]
    upsert?: FabricObjectUpsertWithWhereUniqueWithoutCanvasInput | FabricObjectUpsertWithWhereUniqueWithoutCanvasInput[]
    createMany?: FabricObjectCreateManyCanvasInputEnvelope
    set?: FabricObjectWhereUniqueInput | FabricObjectWhereUniqueInput[]
    disconnect?: FabricObjectWhereUniqueInput | FabricObjectWhereUniqueInput[]
    delete?: FabricObjectWhereUniqueInput | FabricObjectWhereUniqueInput[]
    connect?: FabricObjectWhereUniqueInput | FabricObjectWhereUniqueInput[]
    update?: FabricObjectUpdateWithWhereUniqueWithoutCanvasInput | FabricObjectUpdateWithWhereUniqueWithoutCanvasInput[]
    updateMany?: FabricObjectUpdateManyWithWhereWithoutCanvasInput | FabricObjectUpdateManyWithWhereWithoutCanvasInput[]
    deleteMany?: FabricObjectScalarWhereInput | FabricObjectScalarWhereInput[]
  }

  export type FabricCanvasCreateNestedOneWithoutObjectsInput = {
    create?: XOR<FabricCanvasCreateWithoutObjectsInput, FabricCanvasUncheckedCreateWithoutObjectsInput>
    connectOrCreate?: FabricCanvasCreateOrConnectWithoutObjectsInput
    connect?: FabricCanvasWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FabricCanvasUpdateOneRequiredWithoutObjectsNestedInput = {
    create?: XOR<FabricCanvasCreateWithoutObjectsInput, FabricCanvasUncheckedCreateWithoutObjectsInput>
    connectOrCreate?: FabricCanvasCreateOrConnectWithoutObjectsInput
    upsert?: FabricCanvasUpsertWithoutObjectsInput
    connect?: FabricCanvasWhereUniqueInput
    update?: XOR<XOR<FabricCanvasUpdateToOneWithWhereWithoutObjectsInput, FabricCanvasUpdateWithoutObjectsInput>, FabricCanvasUncheckedUpdateWithoutObjectsInput>
  }

  export type UserCreateNestedOneWithoutFabricTemplatesInput = {
    create?: XOR<UserCreateWithoutFabricTemplatesInput, UserUncheckedCreateWithoutFabricTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFabricTemplatesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutFabricTemplatesNestedInput = {
    create?: XOR<UserCreateWithoutFabricTemplatesInput, UserUncheckedCreateWithoutFabricTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFabricTemplatesInput
    upsert?: UserUpsertWithoutFabricTemplatesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFabricTemplatesInput, UserUpdateWithoutFabricTemplatesInput>, UserUncheckedUpdateWithoutFabricTemplatesInput>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProjectCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    icon?: string | null
    labels?: LabelCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    icon?: string | null
    labels?: LabelUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ResetTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type ResetTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type ResetTokenCreateOrConnectWithoutUserInput = {
    where: ResetTokenWhereUniqueInput
    create: XOR<ResetTokenCreateWithoutUserInput, ResetTokenUncheckedCreateWithoutUserInput>
  }

  export type ResetTokenCreateManyUserInputEnvelope = {
    data: ResetTokenCreateManyUserInput | ResetTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FabricProjectCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    canvases?: FabricCanvasCreateNestedManyWithoutProjectInput
  }

  export type FabricProjectUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    canvases?: FabricCanvasUncheckedCreateNestedManyWithoutProjectInput
  }

  export type FabricProjectCreateOrConnectWithoutUserInput = {
    where: FabricProjectWhereUniqueInput
    create: XOR<FabricProjectCreateWithoutUserInput, FabricProjectUncheckedCreateWithoutUserInput>
  }

  export type FabricProjectCreateManyUserInputEnvelope = {
    data: FabricProjectCreateManyUserInput | FabricProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FabricTemplateCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    thumbnail?: string | null
    canvasData: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FabricTemplateUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    thumbnail?: string | null
    canvasData: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FabricTemplateCreateOrConnectWithoutUserInput = {
    where: FabricTemplateWhereUniqueInput
    create: XOR<FabricTemplateCreateWithoutUserInput, FabricTemplateUncheckedCreateWithoutUserInput>
  }

  export type FabricTemplateCreateManyUserInputEnvelope = {
    data: FabricTemplateCreateManyUserInput | FabricTemplateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    userId?: StringNullableFilter<"Project"> | string | null
    description?: StringNullableFilter<"Project"> | string | null
    icon?: StringNullableFilter<"Project"> | string | null
  }

  export type ResetTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: ResetTokenWhereUniqueInput
    update: XOR<ResetTokenUpdateWithoutUserInput, ResetTokenUncheckedUpdateWithoutUserInput>
    create: XOR<ResetTokenCreateWithoutUserInput, ResetTokenUncheckedCreateWithoutUserInput>
  }

  export type ResetTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: ResetTokenWhereUniqueInput
    data: XOR<ResetTokenUpdateWithoutUserInput, ResetTokenUncheckedUpdateWithoutUserInput>
  }

  export type ResetTokenUpdateManyWithWhereWithoutUserInput = {
    where: ResetTokenScalarWhereInput
    data: XOR<ResetTokenUpdateManyMutationInput, ResetTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type ResetTokenScalarWhereInput = {
    AND?: ResetTokenScalarWhereInput | ResetTokenScalarWhereInput[]
    OR?: ResetTokenScalarWhereInput[]
    NOT?: ResetTokenScalarWhereInput | ResetTokenScalarWhereInput[]
    id?: StringFilter<"ResetToken"> | string
    token?: StringFilter<"ResetToken"> | string
    userId?: StringFilter<"ResetToken"> | string
    expiresAt?: DateTimeFilter<"ResetToken"> | Date | string
    createdAt?: DateTimeFilter<"ResetToken"> | Date | string
  }

  export type FabricProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: FabricProjectWhereUniqueInput
    update: XOR<FabricProjectUpdateWithoutUserInput, FabricProjectUncheckedUpdateWithoutUserInput>
    create: XOR<FabricProjectCreateWithoutUserInput, FabricProjectUncheckedCreateWithoutUserInput>
  }

  export type FabricProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: FabricProjectWhereUniqueInput
    data: XOR<FabricProjectUpdateWithoutUserInput, FabricProjectUncheckedUpdateWithoutUserInput>
  }

  export type FabricProjectUpdateManyWithWhereWithoutUserInput = {
    where: FabricProjectScalarWhereInput
    data: XOR<FabricProjectUpdateManyMutationInput, FabricProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type FabricProjectScalarWhereInput = {
    AND?: FabricProjectScalarWhereInput | FabricProjectScalarWhereInput[]
    OR?: FabricProjectScalarWhereInput[]
    NOT?: FabricProjectScalarWhereInput | FabricProjectScalarWhereInput[]
    id?: StringFilter<"FabricProject"> | string
    name?: StringFilter<"FabricProject"> | string
    description?: StringNullableFilter<"FabricProject"> | string | null
    icon?: StringNullableFilter<"FabricProject"> | string | null
    userId?: StringFilter<"FabricProject"> | string
    createdAt?: DateTimeFilter<"FabricProject"> | Date | string
    updatedAt?: DateTimeFilter<"FabricProject"> | Date | string
  }

  export type FabricTemplateUpsertWithWhereUniqueWithoutUserInput = {
    where: FabricTemplateWhereUniqueInput
    update: XOR<FabricTemplateUpdateWithoutUserInput, FabricTemplateUncheckedUpdateWithoutUserInput>
    create: XOR<FabricTemplateCreateWithoutUserInput, FabricTemplateUncheckedCreateWithoutUserInput>
  }

  export type FabricTemplateUpdateWithWhereUniqueWithoutUserInput = {
    where: FabricTemplateWhereUniqueInput
    data: XOR<FabricTemplateUpdateWithoutUserInput, FabricTemplateUncheckedUpdateWithoutUserInput>
  }

  export type FabricTemplateUpdateManyWithWhereWithoutUserInput = {
    where: FabricTemplateScalarWhereInput
    data: XOR<FabricTemplateUpdateManyMutationInput, FabricTemplateUncheckedUpdateManyWithoutUserInput>
  }

  export type FabricTemplateScalarWhereInput = {
    AND?: FabricTemplateScalarWhereInput | FabricTemplateScalarWhereInput[]
    OR?: FabricTemplateScalarWhereInput[]
    NOT?: FabricTemplateScalarWhereInput | FabricTemplateScalarWhereInput[]
    id?: StringFilter<"FabricTemplate"> | string
    name?: StringFilter<"FabricTemplate"> | string
    description?: StringNullableFilter<"FabricTemplate"> | string | null
    category?: StringFilter<"FabricTemplate"> | string
    thumbnail?: StringNullableFilter<"FabricTemplate"> | string | null
    canvasData?: JsonFilter<"FabricTemplate">
    isPublic?: BoolFilter<"FabricTemplate"> | boolean
    userId?: StringNullableFilter<"FabricTemplate"> | string | null
    createdAt?: DateTimeFilter<"FabricTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"FabricTemplate"> | Date | string
  }

  export type UserCreateWithoutResetTokensInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
    fabricProjects?: FabricProjectCreateNestedManyWithoutUserInput
    fabricTemplates?: FabricTemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResetTokensInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    fabricProjects?: FabricProjectUncheckedCreateNestedManyWithoutUserInput
    fabricTemplates?: FabricTemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResetTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResetTokensInput, UserUncheckedCreateWithoutResetTokensInput>
  }

  export type UserUpsertWithoutResetTokensInput = {
    update: XOR<UserUpdateWithoutResetTokensInput, UserUncheckedUpdateWithoutResetTokensInput>
    create: XOR<UserCreateWithoutResetTokensInput, UserUncheckedCreateWithoutResetTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResetTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResetTokensInput, UserUncheckedUpdateWithoutResetTokensInput>
  }

  export type UserUpdateWithoutResetTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
    fabricProjects?: FabricProjectUpdateManyWithoutUserNestedInput
    fabricTemplates?: FabricTemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResetTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    fabricProjects?: FabricProjectUncheckedUpdateManyWithoutUserNestedInput
    fabricTemplates?: FabricTemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LabelCreateWithoutProjectInput = {
    id?: string
    name: string
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    elements?: LabelElementCreateNestedManyWithoutLabelInput
  }

  export type LabelUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    elements?: LabelElementUncheckedCreateNestedManyWithoutLabelInput
  }

  export type LabelCreateOrConnectWithoutProjectInput = {
    where: LabelWhereUniqueInput
    create: XOR<LabelCreateWithoutProjectInput, LabelUncheckedCreateWithoutProjectInput>
  }

  export type LabelCreateManyProjectInputEnvelope = {
    data: LabelCreateManyProjectInput | LabelCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resetTokens?: ResetTokenCreateNestedManyWithoutUserInput
    fabricProjects?: FabricProjectCreateNestedManyWithoutUserInput
    fabricTemplates?: FabricTemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resetTokens?: ResetTokenUncheckedCreateNestedManyWithoutUserInput
    fabricProjects?: FabricProjectUncheckedCreateNestedManyWithoutUserInput
    fabricTemplates?: FabricTemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type LabelUpsertWithWhereUniqueWithoutProjectInput = {
    where: LabelWhereUniqueInput
    update: XOR<LabelUpdateWithoutProjectInput, LabelUncheckedUpdateWithoutProjectInput>
    create: XOR<LabelCreateWithoutProjectInput, LabelUncheckedCreateWithoutProjectInput>
  }

  export type LabelUpdateWithWhereUniqueWithoutProjectInput = {
    where: LabelWhereUniqueInput
    data: XOR<LabelUpdateWithoutProjectInput, LabelUncheckedUpdateWithoutProjectInput>
  }

  export type LabelUpdateManyWithWhereWithoutProjectInput = {
    where: LabelScalarWhereInput
    data: XOR<LabelUpdateManyMutationInput, LabelUncheckedUpdateManyWithoutProjectInput>
  }

  export type LabelScalarWhereInput = {
    AND?: LabelScalarWhereInput | LabelScalarWhereInput[]
    OR?: LabelScalarWhereInput[]
    NOT?: LabelScalarWhereInput | LabelScalarWhereInput[]
    id?: StringFilter<"Label"> | string
    name?: StringFilter<"Label"> | string
    width?: FloatFilter<"Label"> | number
    height?: FloatFilter<"Label"> | number
    createdAt?: DateTimeFilter<"Label"> | Date | string
    updatedAt?: DateTimeFilter<"Label"> | Date | string
    projectId?: StringNullableFilter<"Label"> | string | null
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetTokens?: ResetTokenUpdateManyWithoutUserNestedInput
    fabricProjects?: FabricProjectUpdateManyWithoutUserNestedInput
    fabricTemplates?: FabricTemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetTokens?: ResetTokenUncheckedUpdateManyWithoutUserNestedInput
    fabricProjects?: FabricProjectUncheckedUpdateManyWithoutUserNestedInput
    fabricTemplates?: FabricTemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCreateWithoutLabelsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    icon?: string | null
    user?: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutLabelsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    description?: string | null
    icon?: string | null
  }

  export type ProjectCreateOrConnectWithoutLabelsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutLabelsInput, ProjectUncheckedCreateWithoutLabelsInput>
  }

  export type LabelElementCreateWithoutLabelInput = {
    id?: string
    type: string
    x: number
    y: number
    width?: number | null
    height?: number | null
    value?: string | null
    color?: string | null
    rotation?: number | null
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fontSize?: number | null
  }

  export type LabelElementUncheckedCreateWithoutLabelInput = {
    id?: string
    type: string
    x: number
    y: number
    width?: number | null
    height?: number | null
    value?: string | null
    color?: string | null
    rotation?: number | null
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fontSize?: number | null
  }

  export type LabelElementCreateOrConnectWithoutLabelInput = {
    where: LabelElementWhereUniqueInput
    create: XOR<LabelElementCreateWithoutLabelInput, LabelElementUncheckedCreateWithoutLabelInput>
  }

  export type LabelElementCreateManyLabelInputEnvelope = {
    data: LabelElementCreateManyLabelInput | LabelElementCreateManyLabelInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutLabelsInput = {
    update: XOR<ProjectUpdateWithoutLabelsInput, ProjectUncheckedUpdateWithoutLabelsInput>
    create: XOR<ProjectCreateWithoutLabelsInput, ProjectUncheckedCreateWithoutLabelsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutLabelsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutLabelsInput, ProjectUncheckedUpdateWithoutLabelsInput>
  }

  export type ProjectUpdateWithoutLabelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutLabelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
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
    value?: StringNullableFilter<"LabelElement"> | string | null
    color?: StringNullableFilter<"LabelElement"> | string | null
    rotation?: FloatNullableFilter<"LabelElement"> | number | null
    labelId?: StringFilter<"LabelElement"> | string
    properties?: JsonNullableFilter<"LabelElement">
    createdAt?: DateTimeFilter<"LabelElement"> | Date | string
    updatedAt?: DateTimeFilter<"LabelElement"> | Date | string
    fontSize?: FloatNullableFilter<"LabelElement"> | number | null
  }

  export type LabelCreateWithoutElementsInput = {
    id?: string
    name: string
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    project?: ProjectCreateNestedOneWithoutLabelsInput
  }

  export type LabelUncheckedCreateWithoutElementsInput = {
    id?: string
    name: string
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId?: string | null
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
    project?: ProjectUpdateOneWithoutLabelsNestedInput
  }

  export type LabelUncheckedUpdateWithoutElementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutFabricProjectsInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
    resetTokens?: ResetTokenCreateNestedManyWithoutUserInput
    fabricTemplates?: FabricTemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFabricProjectsInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    resetTokens?: ResetTokenUncheckedCreateNestedManyWithoutUserInput
    fabricTemplates?: FabricTemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFabricProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFabricProjectsInput, UserUncheckedCreateWithoutFabricProjectsInput>
  }

  export type FabricCanvasCreateWithoutProjectInput = {
    id?: string
    name: string
    width: number
    height: number
    unit?: string
    background?: string | null
    version?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    objects?: FabricObjectCreateNestedManyWithoutCanvasInput
  }

  export type FabricCanvasUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    width: number
    height: number
    unit?: string
    background?: string | null
    version?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    objects?: FabricObjectUncheckedCreateNestedManyWithoutCanvasInput
  }

  export type FabricCanvasCreateOrConnectWithoutProjectInput = {
    where: FabricCanvasWhereUniqueInput
    create: XOR<FabricCanvasCreateWithoutProjectInput, FabricCanvasUncheckedCreateWithoutProjectInput>
  }

  export type FabricCanvasCreateManyProjectInputEnvelope = {
    data: FabricCanvasCreateManyProjectInput | FabricCanvasCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFabricProjectsInput = {
    update: XOR<UserUpdateWithoutFabricProjectsInput, UserUncheckedUpdateWithoutFabricProjectsInput>
    create: XOR<UserCreateWithoutFabricProjectsInput, UserUncheckedCreateWithoutFabricProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFabricProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFabricProjectsInput, UserUncheckedUpdateWithoutFabricProjectsInput>
  }

  export type UserUpdateWithoutFabricProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
    resetTokens?: ResetTokenUpdateManyWithoutUserNestedInput
    fabricTemplates?: FabricTemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFabricProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    resetTokens?: ResetTokenUncheckedUpdateManyWithoutUserNestedInput
    fabricTemplates?: FabricTemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FabricCanvasUpsertWithWhereUniqueWithoutProjectInput = {
    where: FabricCanvasWhereUniqueInput
    update: XOR<FabricCanvasUpdateWithoutProjectInput, FabricCanvasUncheckedUpdateWithoutProjectInput>
    create: XOR<FabricCanvasCreateWithoutProjectInput, FabricCanvasUncheckedCreateWithoutProjectInput>
  }

  export type FabricCanvasUpdateWithWhereUniqueWithoutProjectInput = {
    where: FabricCanvasWhereUniqueInput
    data: XOR<FabricCanvasUpdateWithoutProjectInput, FabricCanvasUncheckedUpdateWithoutProjectInput>
  }

  export type FabricCanvasUpdateManyWithWhereWithoutProjectInput = {
    where: FabricCanvasScalarWhereInput
    data: XOR<FabricCanvasUpdateManyMutationInput, FabricCanvasUncheckedUpdateManyWithoutProjectInput>
  }

  export type FabricCanvasScalarWhereInput = {
    AND?: FabricCanvasScalarWhereInput | FabricCanvasScalarWhereInput[]
    OR?: FabricCanvasScalarWhereInput[]
    NOT?: FabricCanvasScalarWhereInput | FabricCanvasScalarWhereInput[]
    id?: StringFilter<"FabricCanvas"> | string
    name?: StringFilter<"FabricCanvas"> | string
    width?: FloatFilter<"FabricCanvas"> | number
    height?: FloatFilter<"FabricCanvas"> | number
    unit?: StringFilter<"FabricCanvas"> | string
    background?: StringNullableFilter<"FabricCanvas"> | string | null
    projectId?: StringFilter<"FabricCanvas"> | string
    version?: IntFilter<"FabricCanvas"> | number
    metadata?: JsonNullableFilter<"FabricCanvas">
    createdAt?: DateTimeFilter<"FabricCanvas"> | Date | string
    updatedAt?: DateTimeFilter<"FabricCanvas"> | Date | string
  }

  export type FabricProjectCreateWithoutCanvasesInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFabricProjectsInput
  }

  export type FabricProjectUncheckedCreateWithoutCanvasesInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FabricProjectCreateOrConnectWithoutCanvasesInput = {
    where: FabricProjectWhereUniqueInput
    create: XOR<FabricProjectCreateWithoutCanvasesInput, FabricProjectUncheckedCreateWithoutCanvasesInput>
  }

  export type FabricObjectCreateWithoutCanvasInput = {
    id?: string
    type: string
    left: number
    top: number
    width: number
    height: number
    scaleX?: number
    scaleY?: number
    angle?: number
    fill?: string | null
    stroke?: string | null
    strokeWidth?: number | null
    opacity?: number
    text?: string | null
    fontFamily?: string | null
    fontSize?: number | null
    fontWeight?: string | null
    fontStyle?: string | null
    textAlign?: string | null
    qrValue?: string | null
    uuidLength?: number | null
    qrErrorLevel?: string | null
    zIndex?: number
    locked?: boolean
    visible?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FabricObjectUncheckedCreateWithoutCanvasInput = {
    id?: string
    type: string
    left: number
    top: number
    width: number
    height: number
    scaleX?: number
    scaleY?: number
    angle?: number
    fill?: string | null
    stroke?: string | null
    strokeWidth?: number | null
    opacity?: number
    text?: string | null
    fontFamily?: string | null
    fontSize?: number | null
    fontWeight?: string | null
    fontStyle?: string | null
    textAlign?: string | null
    qrValue?: string | null
    uuidLength?: number | null
    qrErrorLevel?: string | null
    zIndex?: number
    locked?: boolean
    visible?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FabricObjectCreateOrConnectWithoutCanvasInput = {
    where: FabricObjectWhereUniqueInput
    create: XOR<FabricObjectCreateWithoutCanvasInput, FabricObjectUncheckedCreateWithoutCanvasInput>
  }

  export type FabricObjectCreateManyCanvasInputEnvelope = {
    data: FabricObjectCreateManyCanvasInput | FabricObjectCreateManyCanvasInput[]
    skipDuplicates?: boolean
  }

  export type FabricProjectUpsertWithoutCanvasesInput = {
    update: XOR<FabricProjectUpdateWithoutCanvasesInput, FabricProjectUncheckedUpdateWithoutCanvasesInput>
    create: XOR<FabricProjectCreateWithoutCanvasesInput, FabricProjectUncheckedCreateWithoutCanvasesInput>
    where?: FabricProjectWhereInput
  }

  export type FabricProjectUpdateToOneWithWhereWithoutCanvasesInput = {
    where?: FabricProjectWhereInput
    data: XOR<FabricProjectUpdateWithoutCanvasesInput, FabricProjectUncheckedUpdateWithoutCanvasesInput>
  }

  export type FabricProjectUpdateWithoutCanvasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFabricProjectsNestedInput
  }

  export type FabricProjectUncheckedUpdateWithoutCanvasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FabricObjectUpsertWithWhereUniqueWithoutCanvasInput = {
    where: FabricObjectWhereUniqueInput
    update: XOR<FabricObjectUpdateWithoutCanvasInput, FabricObjectUncheckedUpdateWithoutCanvasInput>
    create: XOR<FabricObjectCreateWithoutCanvasInput, FabricObjectUncheckedCreateWithoutCanvasInput>
  }

  export type FabricObjectUpdateWithWhereUniqueWithoutCanvasInput = {
    where: FabricObjectWhereUniqueInput
    data: XOR<FabricObjectUpdateWithoutCanvasInput, FabricObjectUncheckedUpdateWithoutCanvasInput>
  }

  export type FabricObjectUpdateManyWithWhereWithoutCanvasInput = {
    where: FabricObjectScalarWhereInput
    data: XOR<FabricObjectUpdateManyMutationInput, FabricObjectUncheckedUpdateManyWithoutCanvasInput>
  }

  export type FabricObjectScalarWhereInput = {
    AND?: FabricObjectScalarWhereInput | FabricObjectScalarWhereInput[]
    OR?: FabricObjectScalarWhereInput[]
    NOT?: FabricObjectScalarWhereInput | FabricObjectScalarWhereInput[]
    id?: StringFilter<"FabricObject"> | string
    type?: StringFilter<"FabricObject"> | string
    canvasId?: StringFilter<"FabricObject"> | string
    left?: FloatFilter<"FabricObject"> | number
    top?: FloatFilter<"FabricObject"> | number
    width?: FloatFilter<"FabricObject"> | number
    height?: FloatFilter<"FabricObject"> | number
    scaleX?: FloatFilter<"FabricObject"> | number
    scaleY?: FloatFilter<"FabricObject"> | number
    angle?: FloatFilter<"FabricObject"> | number
    fill?: StringNullableFilter<"FabricObject"> | string | null
    stroke?: StringNullableFilter<"FabricObject"> | string | null
    strokeWidth?: FloatNullableFilter<"FabricObject"> | number | null
    opacity?: FloatFilter<"FabricObject"> | number
    text?: StringNullableFilter<"FabricObject"> | string | null
    fontFamily?: StringNullableFilter<"FabricObject"> | string | null
    fontSize?: FloatNullableFilter<"FabricObject"> | number | null
    fontWeight?: StringNullableFilter<"FabricObject"> | string | null
    fontStyle?: StringNullableFilter<"FabricObject"> | string | null
    textAlign?: StringNullableFilter<"FabricObject"> | string | null
    qrValue?: StringNullableFilter<"FabricObject"> | string | null
    uuidLength?: IntNullableFilter<"FabricObject"> | number | null
    qrErrorLevel?: StringNullableFilter<"FabricObject"> | string | null
    zIndex?: IntFilter<"FabricObject"> | number
    locked?: BoolFilter<"FabricObject"> | boolean
    visible?: BoolFilter<"FabricObject"> | boolean
    metadata?: JsonNullableFilter<"FabricObject">
    createdAt?: DateTimeFilter<"FabricObject"> | Date | string
    updatedAt?: DateTimeFilter<"FabricObject"> | Date | string
  }

  export type FabricCanvasCreateWithoutObjectsInput = {
    id?: string
    name: string
    width: number
    height: number
    unit?: string
    background?: string | null
    version?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    project: FabricProjectCreateNestedOneWithoutCanvasesInput
  }

  export type FabricCanvasUncheckedCreateWithoutObjectsInput = {
    id?: string
    name: string
    width: number
    height: number
    unit?: string
    background?: string | null
    projectId: string
    version?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FabricCanvasCreateOrConnectWithoutObjectsInput = {
    where: FabricCanvasWhereUniqueInput
    create: XOR<FabricCanvasCreateWithoutObjectsInput, FabricCanvasUncheckedCreateWithoutObjectsInput>
  }

  export type FabricCanvasUpsertWithoutObjectsInput = {
    update: XOR<FabricCanvasUpdateWithoutObjectsInput, FabricCanvasUncheckedUpdateWithoutObjectsInput>
    create: XOR<FabricCanvasCreateWithoutObjectsInput, FabricCanvasUncheckedCreateWithoutObjectsInput>
    where?: FabricCanvasWhereInput
  }

  export type FabricCanvasUpdateToOneWithWhereWithoutObjectsInput = {
    where?: FabricCanvasWhereInput
    data: XOR<FabricCanvasUpdateWithoutObjectsInput, FabricCanvasUncheckedUpdateWithoutObjectsInput>
  }

  export type FabricCanvasUpdateWithoutObjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    background?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: FabricProjectUpdateOneRequiredWithoutCanvasesNestedInput
  }

  export type FabricCanvasUncheckedUpdateWithoutObjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    background?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutFabricTemplatesInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
    resetTokens?: ResetTokenCreateNestedManyWithoutUserInput
    fabricProjects?: FabricProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFabricTemplatesInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    resetTokens?: ResetTokenUncheckedCreateNestedManyWithoutUserInput
    fabricProjects?: FabricProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFabricTemplatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFabricTemplatesInput, UserUncheckedCreateWithoutFabricTemplatesInput>
  }

  export type UserUpsertWithoutFabricTemplatesInput = {
    update: XOR<UserUpdateWithoutFabricTemplatesInput, UserUncheckedUpdateWithoutFabricTemplatesInput>
    create: XOR<UserCreateWithoutFabricTemplatesInput, UserUncheckedCreateWithoutFabricTemplatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFabricTemplatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFabricTemplatesInput, UserUncheckedUpdateWithoutFabricTemplatesInput>
  }

  export type UserUpdateWithoutFabricTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
    resetTokens?: ResetTokenUpdateManyWithoutUserNestedInput
    fabricProjects?: FabricProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFabricTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    resetTokens?: ResetTokenUncheckedUpdateManyWithoutUserNestedInput
    fabricProjects?: FabricProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCreateManyUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    icon?: string | null
  }

  export type ResetTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type FabricProjectCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FabricTemplateCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    thumbnail?: string | null
    canvasData: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    labels?: LabelUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    labels?: LabelUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResetTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FabricProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canvases?: FabricCanvasUpdateManyWithoutProjectNestedInput
  }

  export type FabricProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canvases?: FabricCanvasUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type FabricProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FabricTemplateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    canvasData?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FabricTemplateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    canvasData?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FabricTemplateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    canvasData?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabelCreateManyProjectInput = {
    id?: string
    name: string
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabelUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    elements?: LabelElementUpdateManyWithoutLabelNestedInput
  }

  export type LabelUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    elements?: LabelElementUncheckedUpdateManyWithoutLabelNestedInput
  }

  export type LabelUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabelElementCreateManyLabelInput = {
    id?: string
    type: string
    x: number
    y: number
    width?: number | null
    height?: number | null
    value?: string | null
    color?: string | null
    rotation?: number | null
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fontSize?: number | null
  }

  export type LabelElementUpdateWithoutLabelInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fontSize?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type LabelElementUncheckedUpdateWithoutLabelInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fontSize?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type LabelElementUncheckedUpdateManyWithoutLabelInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    rotation?: NullableFloatFieldUpdateOperationsInput | number | null
    properties?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fontSize?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FabricCanvasCreateManyProjectInput = {
    id?: string
    name: string
    width: number
    height: number
    unit?: string
    background?: string | null
    version?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FabricCanvasUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    background?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    objects?: FabricObjectUpdateManyWithoutCanvasNestedInput
  }

  export type FabricCanvasUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    background?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    objects?: FabricObjectUncheckedUpdateManyWithoutCanvasNestedInput
  }

  export type FabricCanvasUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    background?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FabricObjectCreateManyCanvasInput = {
    id?: string
    type: string
    left: number
    top: number
    width: number
    height: number
    scaleX?: number
    scaleY?: number
    angle?: number
    fill?: string | null
    stroke?: string | null
    strokeWidth?: number | null
    opacity?: number
    text?: string | null
    fontFamily?: string | null
    fontSize?: number | null
    fontWeight?: string | null
    fontStyle?: string | null
    textAlign?: string | null
    qrValue?: string | null
    uuidLength?: number | null
    qrErrorLevel?: string | null
    zIndex?: number
    locked?: boolean
    visible?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FabricObjectUpdateWithoutCanvasInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    left?: FloatFieldUpdateOperationsInput | number
    top?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    scaleX?: FloatFieldUpdateOperationsInput | number
    scaleY?: FloatFieldUpdateOperationsInput | number
    angle?: FloatFieldUpdateOperationsInput | number
    fill?: NullableStringFieldUpdateOperationsInput | string | null
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    strokeWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    opacity?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    fontSize?: NullableFloatFieldUpdateOperationsInput | number | null
    fontWeight?: NullableStringFieldUpdateOperationsInput | string | null
    fontStyle?: NullableStringFieldUpdateOperationsInput | string | null
    textAlign?: NullableStringFieldUpdateOperationsInput | string | null
    qrValue?: NullableStringFieldUpdateOperationsInput | string | null
    uuidLength?: NullableIntFieldUpdateOperationsInput | number | null
    qrErrorLevel?: NullableStringFieldUpdateOperationsInput | string | null
    zIndex?: IntFieldUpdateOperationsInput | number
    locked?: BoolFieldUpdateOperationsInput | boolean
    visible?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FabricObjectUncheckedUpdateWithoutCanvasInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    left?: FloatFieldUpdateOperationsInput | number
    top?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    scaleX?: FloatFieldUpdateOperationsInput | number
    scaleY?: FloatFieldUpdateOperationsInput | number
    angle?: FloatFieldUpdateOperationsInput | number
    fill?: NullableStringFieldUpdateOperationsInput | string | null
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    strokeWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    opacity?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    fontSize?: NullableFloatFieldUpdateOperationsInput | number | null
    fontWeight?: NullableStringFieldUpdateOperationsInput | string | null
    fontStyle?: NullableStringFieldUpdateOperationsInput | string | null
    textAlign?: NullableStringFieldUpdateOperationsInput | string | null
    qrValue?: NullableStringFieldUpdateOperationsInput | string | null
    uuidLength?: NullableIntFieldUpdateOperationsInput | number | null
    qrErrorLevel?: NullableStringFieldUpdateOperationsInput | string | null
    zIndex?: IntFieldUpdateOperationsInput | number
    locked?: BoolFieldUpdateOperationsInput | boolean
    visible?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FabricObjectUncheckedUpdateManyWithoutCanvasInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    left?: FloatFieldUpdateOperationsInput | number
    top?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    scaleX?: FloatFieldUpdateOperationsInput | number
    scaleY?: FloatFieldUpdateOperationsInput | number
    angle?: FloatFieldUpdateOperationsInput | number
    fill?: NullableStringFieldUpdateOperationsInput | string | null
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    strokeWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    opacity?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    fontSize?: NullableFloatFieldUpdateOperationsInput | number | null
    fontWeight?: NullableStringFieldUpdateOperationsInput | string | null
    fontStyle?: NullableStringFieldUpdateOperationsInput | string | null
    textAlign?: NullableStringFieldUpdateOperationsInput | string | null
    qrValue?: NullableStringFieldUpdateOperationsInput | string | null
    uuidLength?: NullableIntFieldUpdateOperationsInput | number | null
    qrErrorLevel?: NullableStringFieldUpdateOperationsInput | string | null
    zIndex?: IntFieldUpdateOperationsInput | number
    locked?: BoolFieldUpdateOperationsInput | boolean
    visible?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LabelCountOutputTypeDefaultArgs instead
     */
    export type LabelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LabelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FabricProjectCountOutputTypeDefaultArgs instead
     */
    export type FabricProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FabricProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FabricCanvasCountOutputTypeDefaultArgs instead
     */
    export type FabricCanvasCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FabricCanvasCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResetTokenDefaultArgs instead
     */
    export type ResetTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResetTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LabelDefaultArgs instead
     */
    export type LabelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LabelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LabelElementDefaultArgs instead
     */
    export type LabelElementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LabelElementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FabricProjectDefaultArgs instead
     */
    export type FabricProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FabricProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FabricCanvasDefaultArgs instead
     */
    export type FabricCanvasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FabricCanvasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FabricObjectDefaultArgs instead
     */
    export type FabricObjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FabricObjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FabricTemplateDefaultArgs instead
     */
    export type FabricTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FabricTemplateDefaultArgs<ExtArgs>

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