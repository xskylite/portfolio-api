
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
 * Model ProjectTechnology
 * 
 */
export type ProjectTechnology = $Result.DefaultSelection<Prisma.$ProjectTechnologyPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model WeatherCache
 * 
 */
export type WeatherCache = $Result.DefaultSelection<Prisma.$WeatherCachePayload>
/**
 * Model SpotifyCache
 * 
 */
export type SpotifyCache = $Result.DefaultSelection<Prisma.$SpotifyCachePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProjectCategory: {
  PERSONAL: 'PERSONAL',
  ORDER: 'ORDER',
  OPENSOURCE: 'OPENSOURCE'
};

export type ProjectCategory = (typeof ProjectCategory)[keyof typeof ProjectCategory]


export const ProjectType: {
  FRONTEND: 'FRONTEND',
  BACKEND: 'BACKEND',
  BOTS: 'BOTS'
};

export type ProjectType = (typeof ProjectType)[keyof typeof ProjectType]


export const SkillCategory: {
  ALL: 'ALL',
  FRONTEND: 'FRONTEND',
  BACKEND: 'BACKEND',
  DEVOPS: 'DEVOPS'
};

export type SkillCategory = (typeof SkillCategory)[keyof typeof SkillCategory]

}

export type ProjectCategory = $Enums.ProjectCategory

export const ProjectCategory: typeof $Enums.ProjectCategory

export type ProjectType = $Enums.ProjectType

export const ProjectType: typeof $Enums.ProjectType

export type SkillCategory = $Enums.SkillCategory

export const SkillCategory: typeof $Enums.SkillCategory

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
   * `prisma.projectTechnology`: Exposes CRUD operations for the **ProjectTechnology** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectTechnologies
    * const projectTechnologies = await prisma.projectTechnology.findMany()
    * ```
    */
  get projectTechnology(): Prisma.ProjectTechnologyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weatherCache`: Exposes CRUD operations for the **WeatherCache** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeatherCaches
    * const weatherCaches = await prisma.weatherCache.findMany()
    * ```
    */
  get weatherCache(): Prisma.WeatherCacheDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spotifyCache`: Exposes CRUD operations for the **SpotifyCache** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpotifyCaches
    * const spotifyCaches = await prisma.spotifyCache.findMany()
    * ```
    */
  get spotifyCache(): Prisma.SpotifyCacheDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.0
   * Query Engine version: 9c30299f5a0ea26a96790e13f796dc6094db3173
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
    ProjectTechnology: 'ProjectTechnology',
    Skill: 'Skill',
    WeatherCache: 'WeatherCache',
    SpotifyCache: 'SpotifyCache'
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
      modelProps: "project" | "projectTechnology" | "skill" | "weatherCache" | "spotifyCache"
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
      ProjectTechnology: {
        payload: Prisma.$ProjectTechnologyPayload<ExtArgs>
        fields: Prisma.ProjectTechnologyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectTechnologyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectTechnologyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>
          }
          findFirst: {
            args: Prisma.ProjectTechnologyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectTechnologyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>
          }
          findMany: {
            args: Prisma.ProjectTechnologyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>[]
          }
          create: {
            args: Prisma.ProjectTechnologyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>
          }
          createMany: {
            args: Prisma.ProjectTechnologyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectTechnologyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>[]
          }
          delete: {
            args: Prisma.ProjectTechnologyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>
          }
          update: {
            args: Prisma.ProjectTechnologyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>
          }
          deleteMany: {
            args: Prisma.ProjectTechnologyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectTechnologyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectTechnologyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>[]
          }
          upsert: {
            args: Prisma.ProjectTechnologyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>
          }
          aggregate: {
            args: Prisma.ProjectTechnologyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectTechnology>
          }
          groupBy: {
            args: Prisma.ProjectTechnologyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectTechnologyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectTechnologyCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectTechnologyCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      WeatherCache: {
        payload: Prisma.$WeatherCachePayload<ExtArgs>
        fields: Prisma.WeatherCacheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeatherCacheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherCachePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeatherCacheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherCachePayload>
          }
          findFirst: {
            args: Prisma.WeatherCacheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherCachePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeatherCacheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherCachePayload>
          }
          findMany: {
            args: Prisma.WeatherCacheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherCachePayload>[]
          }
          create: {
            args: Prisma.WeatherCacheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherCachePayload>
          }
          createMany: {
            args: Prisma.WeatherCacheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeatherCacheCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherCachePayload>[]
          }
          delete: {
            args: Prisma.WeatherCacheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherCachePayload>
          }
          update: {
            args: Prisma.WeatherCacheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherCachePayload>
          }
          deleteMany: {
            args: Prisma.WeatherCacheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeatherCacheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeatherCacheUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherCachePayload>[]
          }
          upsert: {
            args: Prisma.WeatherCacheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherCachePayload>
          }
          aggregate: {
            args: Prisma.WeatherCacheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeatherCache>
          }
          groupBy: {
            args: Prisma.WeatherCacheGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeatherCacheGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeatherCacheCountArgs<ExtArgs>
            result: $Utils.Optional<WeatherCacheCountAggregateOutputType> | number
          }
        }
      }
      SpotifyCache: {
        payload: Prisma.$SpotifyCachePayload<ExtArgs>
        fields: Prisma.SpotifyCacheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpotifyCacheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotifyCachePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpotifyCacheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotifyCachePayload>
          }
          findFirst: {
            args: Prisma.SpotifyCacheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotifyCachePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpotifyCacheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotifyCachePayload>
          }
          findMany: {
            args: Prisma.SpotifyCacheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotifyCachePayload>[]
          }
          create: {
            args: Prisma.SpotifyCacheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotifyCachePayload>
          }
          createMany: {
            args: Prisma.SpotifyCacheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpotifyCacheCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotifyCachePayload>[]
          }
          delete: {
            args: Prisma.SpotifyCacheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotifyCachePayload>
          }
          update: {
            args: Prisma.SpotifyCacheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotifyCachePayload>
          }
          deleteMany: {
            args: Prisma.SpotifyCacheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpotifyCacheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpotifyCacheUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotifyCachePayload>[]
          }
          upsert: {
            args: Prisma.SpotifyCacheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotifyCachePayload>
          }
          aggregate: {
            args: Prisma.SpotifyCacheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpotifyCache>
          }
          groupBy: {
            args: Prisma.SpotifyCacheGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpotifyCacheGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpotifyCacheCountArgs<ExtArgs>
            result: $Utils.Optional<SpotifyCacheCountAggregateOutputType> | number
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
    projectTechnology?: ProjectTechnologyOmit
    skill?: SkillOmit
    weatherCache?: WeatherCacheOmit
    spotifyCache?: SpotifyCacheOmit
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
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    technologies: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technologies?: boolean | ProjectCountOutputTypeCountTechnologiesArgs
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
  export type ProjectCountOutputTypeCountTechnologiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTechnologyWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    projectTechnologies: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectTechnologies?: boolean | SkillCountOutputTypeCountProjectTechnologiesArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountProjectTechnologiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTechnologyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    displayOrder: number | null
  }

  export type ProjectSumAggregateOutputType = {
    displayOrder: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
    version: string | null
    website: string | null
    isDone: boolean | null
    isReceivingUpdates: boolean | null
    isInProduction: boolean | null
    description: string | null
    previewImage: string | null
    category: $Enums.ProjectCategory | null
    type: $Enums.ProjectType | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
    version: string | null
    website: string | null
    isDone: boolean | null
    isReceivingUpdates: boolean | null
    isInProduction: boolean | null
    description: string | null
    previewImage: string | null
    category: $Enums.ProjectCategory | null
    type: $Enums.ProjectType | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    logo: number
    version: number
    website: number
    isDone: number
    isReceivingUpdates: number
    isInProduction: number
    description: number
    previewImage: number
    category: number
    type: number
    displayOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    displayOrder?: true
  }

  export type ProjectSumAggregateInputType = {
    displayOrder?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    version?: true
    website?: true
    isDone?: true
    isReceivingUpdates?: true
    isInProduction?: true
    description?: true
    previewImage?: true
    category?: true
    type?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    version?: true
    website?: true
    isDone?: true
    isReceivingUpdates?: true
    isInProduction?: true
    description?: true
    previewImage?: true
    category?: true
    type?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    version?: true
    website?: true
    isDone?: true
    isReceivingUpdates?: true
    isInProduction?: true
    description?: true
    previewImage?: true
    category?: true
    type?: true
    displayOrder?: true
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
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
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
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    logo: string | null
    version: string | null
    website: string | null
    isDone: boolean
    isReceivingUpdates: boolean
    isInProduction: boolean
    description: string
    previewImage: string | null
    category: $Enums.ProjectCategory
    type: $Enums.ProjectType
    displayOrder: number
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
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
    logo?: boolean
    version?: boolean
    website?: boolean
    isDone?: boolean
    isReceivingUpdates?: boolean
    isInProduction?: boolean
    description?: boolean
    previewImage?: boolean
    category?: boolean
    type?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    technologies?: boolean | Project$technologiesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    version?: boolean
    website?: boolean
    isDone?: boolean
    isReceivingUpdates?: boolean
    isInProduction?: boolean
    description?: boolean
    previewImage?: boolean
    category?: boolean
    type?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    version?: boolean
    website?: boolean
    isDone?: boolean
    isReceivingUpdates?: boolean
    isInProduction?: boolean
    description?: boolean
    previewImage?: boolean
    category?: boolean
    type?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    logo?: boolean
    version?: boolean
    website?: boolean
    isDone?: boolean
    isReceivingUpdates?: boolean
    isInProduction?: boolean
    description?: boolean
    previewImage?: boolean
    category?: boolean
    type?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logo" | "version" | "website" | "isDone" | "isReceivingUpdates" | "isInProduction" | "description" | "previewImage" | "category" | "type" | "displayOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technologies?: boolean | Project$technologiesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      technologies: Prisma.$ProjectTechnologyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      logo: string | null
      version: string | null
      website: string | null
      isDone: boolean
      isReceivingUpdates: boolean
      isInProduction: boolean
      description: string
      previewImage: string | null
      category: $Enums.ProjectCategory
      type: $Enums.ProjectType
      displayOrder: number
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
    technologies<T extends Project$technologiesArgs<ExtArgs> = {}>(args?: Subset<T, Project$technologiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly logo: FieldRef<"Project", 'String'>
    readonly version: FieldRef<"Project", 'String'>
    readonly website: FieldRef<"Project", 'String'>
    readonly isDone: FieldRef<"Project", 'Boolean'>
    readonly isReceivingUpdates: FieldRef<"Project", 'Boolean'>
    readonly isInProduction: FieldRef<"Project", 'Boolean'>
    readonly description: FieldRef<"Project", 'String'>
    readonly previewImage: FieldRef<"Project", 'String'>
    readonly category: FieldRef<"Project", 'ProjectCategory'>
    readonly type: FieldRef<"Project", 'ProjectType'>
    readonly displayOrder: FieldRef<"Project", 'Int'>
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
   * Project.technologies
   */
  export type Project$technologiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    where?: ProjectTechnologyWhereInput
    orderBy?: ProjectTechnologyOrderByWithRelationInput | ProjectTechnologyOrderByWithRelationInput[]
    cursor?: ProjectTechnologyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectTechnologyScalarFieldEnum | ProjectTechnologyScalarFieldEnum[]
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
   * Model ProjectTechnology
   */

  export type AggregateProjectTechnology = {
    _count: ProjectTechnologyCountAggregateOutputType | null
    _min: ProjectTechnologyMinAggregateOutputType | null
    _max: ProjectTechnologyMaxAggregateOutputType | null
  }

  export type ProjectTechnologyMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    skillId: string | null
    version: string | null
  }

  export type ProjectTechnologyMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    skillId: string | null
    version: string | null
  }

  export type ProjectTechnologyCountAggregateOutputType = {
    id: number
    projectId: number
    skillId: number
    version: number
    _all: number
  }


  export type ProjectTechnologyMinAggregateInputType = {
    id?: true
    projectId?: true
    skillId?: true
    version?: true
  }

  export type ProjectTechnologyMaxAggregateInputType = {
    id?: true
    projectId?: true
    skillId?: true
    version?: true
  }

  export type ProjectTechnologyCountAggregateInputType = {
    id?: true
    projectId?: true
    skillId?: true
    version?: true
    _all?: true
  }

  export type ProjectTechnologyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTechnology to aggregate.
     */
    where?: ProjectTechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTechnologies to fetch.
     */
    orderBy?: ProjectTechnologyOrderByWithRelationInput | ProjectTechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectTechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTechnologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTechnologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectTechnologies
    **/
    _count?: true | ProjectTechnologyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectTechnologyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectTechnologyMaxAggregateInputType
  }

  export type GetProjectTechnologyAggregateType<T extends ProjectTechnologyAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectTechnology]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectTechnology[P]>
      : GetScalarType<T[P], AggregateProjectTechnology[P]>
  }




  export type ProjectTechnologyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTechnologyWhereInput
    orderBy?: ProjectTechnologyOrderByWithAggregationInput | ProjectTechnologyOrderByWithAggregationInput[]
    by: ProjectTechnologyScalarFieldEnum[] | ProjectTechnologyScalarFieldEnum
    having?: ProjectTechnologyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectTechnologyCountAggregateInputType | true
    _min?: ProjectTechnologyMinAggregateInputType
    _max?: ProjectTechnologyMaxAggregateInputType
  }

  export type ProjectTechnologyGroupByOutputType = {
    id: string
    projectId: string
    skillId: string
    version: string | null
    _count: ProjectTechnologyCountAggregateOutputType | null
    _min: ProjectTechnologyMinAggregateOutputType | null
    _max: ProjectTechnologyMaxAggregateOutputType | null
  }

  type GetProjectTechnologyGroupByPayload<T extends ProjectTechnologyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectTechnologyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectTechnologyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectTechnologyGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectTechnologyGroupByOutputType[P]>
        }
      >
    >


  export type ProjectTechnologySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    skillId?: boolean
    version?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTechnology"]>

  export type ProjectTechnologySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    skillId?: boolean
    version?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTechnology"]>

  export type ProjectTechnologySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    skillId?: boolean
    version?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTechnology"]>

  export type ProjectTechnologySelectScalar = {
    id?: boolean
    projectId?: boolean
    skillId?: boolean
    version?: boolean
  }

  export type ProjectTechnologyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "skillId" | "version", ExtArgs["result"]["projectTechnology"]>
  export type ProjectTechnologyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type ProjectTechnologyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type ProjectTechnologyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }

  export type $ProjectTechnologyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectTechnology"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      skillId: string
      version: string | null
    }, ExtArgs["result"]["projectTechnology"]>
    composites: {}
  }

  type ProjectTechnologyGetPayload<S extends boolean | null | undefined | ProjectTechnologyDefaultArgs> = $Result.GetResult<Prisma.$ProjectTechnologyPayload, S>

  type ProjectTechnologyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectTechnologyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectTechnologyCountAggregateInputType | true
    }

  export interface ProjectTechnologyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectTechnology'], meta: { name: 'ProjectTechnology' } }
    /**
     * Find zero or one ProjectTechnology that matches the filter.
     * @param {ProjectTechnologyFindUniqueArgs} args - Arguments to find a ProjectTechnology
     * @example
     * // Get one ProjectTechnology
     * const projectTechnology = await prisma.projectTechnology.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectTechnologyFindUniqueArgs>(args: SelectSubset<T, ProjectTechnologyFindUniqueArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectTechnology that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectTechnologyFindUniqueOrThrowArgs} args - Arguments to find a ProjectTechnology
     * @example
     * // Get one ProjectTechnology
     * const projectTechnology = await prisma.projectTechnology.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectTechnologyFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectTechnologyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTechnology that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechnologyFindFirstArgs} args - Arguments to find a ProjectTechnology
     * @example
     * // Get one ProjectTechnology
     * const projectTechnology = await prisma.projectTechnology.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectTechnologyFindFirstArgs>(args?: SelectSubset<T, ProjectTechnologyFindFirstArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTechnology that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechnologyFindFirstOrThrowArgs} args - Arguments to find a ProjectTechnology
     * @example
     * // Get one ProjectTechnology
     * const projectTechnology = await prisma.projectTechnology.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectTechnologyFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectTechnologyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectTechnologies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechnologyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectTechnologies
     * const projectTechnologies = await prisma.projectTechnology.findMany()
     * 
     * // Get first 10 ProjectTechnologies
     * const projectTechnologies = await prisma.projectTechnology.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectTechnologyWithIdOnly = await prisma.projectTechnology.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectTechnologyFindManyArgs>(args?: SelectSubset<T, ProjectTechnologyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectTechnology.
     * @param {ProjectTechnologyCreateArgs} args - Arguments to create a ProjectTechnology.
     * @example
     * // Create one ProjectTechnology
     * const ProjectTechnology = await prisma.projectTechnology.create({
     *   data: {
     *     // ... data to create a ProjectTechnology
     *   }
     * })
     * 
     */
    create<T extends ProjectTechnologyCreateArgs>(args: SelectSubset<T, ProjectTechnologyCreateArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectTechnologies.
     * @param {ProjectTechnologyCreateManyArgs} args - Arguments to create many ProjectTechnologies.
     * @example
     * // Create many ProjectTechnologies
     * const projectTechnology = await prisma.projectTechnology.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectTechnologyCreateManyArgs>(args?: SelectSubset<T, ProjectTechnologyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectTechnologies and returns the data saved in the database.
     * @param {ProjectTechnologyCreateManyAndReturnArgs} args - Arguments to create many ProjectTechnologies.
     * @example
     * // Create many ProjectTechnologies
     * const projectTechnology = await prisma.projectTechnology.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectTechnologies and only return the `id`
     * const projectTechnologyWithIdOnly = await prisma.projectTechnology.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectTechnologyCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectTechnologyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectTechnology.
     * @param {ProjectTechnologyDeleteArgs} args - Arguments to delete one ProjectTechnology.
     * @example
     * // Delete one ProjectTechnology
     * const ProjectTechnology = await prisma.projectTechnology.delete({
     *   where: {
     *     // ... filter to delete one ProjectTechnology
     *   }
     * })
     * 
     */
    delete<T extends ProjectTechnologyDeleteArgs>(args: SelectSubset<T, ProjectTechnologyDeleteArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectTechnology.
     * @param {ProjectTechnologyUpdateArgs} args - Arguments to update one ProjectTechnology.
     * @example
     * // Update one ProjectTechnology
     * const projectTechnology = await prisma.projectTechnology.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectTechnologyUpdateArgs>(args: SelectSubset<T, ProjectTechnologyUpdateArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectTechnologies.
     * @param {ProjectTechnologyDeleteManyArgs} args - Arguments to filter ProjectTechnologies to delete.
     * @example
     * // Delete a few ProjectTechnologies
     * const { count } = await prisma.projectTechnology.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectTechnologyDeleteManyArgs>(args?: SelectSubset<T, ProjectTechnologyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTechnologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechnologyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectTechnologies
     * const projectTechnology = await prisma.projectTechnology.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectTechnologyUpdateManyArgs>(args: SelectSubset<T, ProjectTechnologyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTechnologies and returns the data updated in the database.
     * @param {ProjectTechnologyUpdateManyAndReturnArgs} args - Arguments to update many ProjectTechnologies.
     * @example
     * // Update many ProjectTechnologies
     * const projectTechnology = await prisma.projectTechnology.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectTechnologies and only return the `id`
     * const projectTechnologyWithIdOnly = await prisma.projectTechnology.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectTechnologyUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectTechnologyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectTechnology.
     * @param {ProjectTechnologyUpsertArgs} args - Arguments to update or create a ProjectTechnology.
     * @example
     * // Update or create a ProjectTechnology
     * const projectTechnology = await prisma.projectTechnology.upsert({
     *   create: {
     *     // ... data to create a ProjectTechnology
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectTechnology we want to update
     *   }
     * })
     */
    upsert<T extends ProjectTechnologyUpsertArgs>(args: SelectSubset<T, ProjectTechnologyUpsertArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectTechnologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechnologyCountArgs} args - Arguments to filter ProjectTechnologies to count.
     * @example
     * // Count the number of ProjectTechnologies
     * const count = await prisma.projectTechnology.count({
     *   where: {
     *     // ... the filter for the ProjectTechnologies we want to count
     *   }
     * })
    **/
    count<T extends ProjectTechnologyCountArgs>(
      args?: Subset<T, ProjectTechnologyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectTechnologyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectTechnology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechnologyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectTechnologyAggregateArgs>(args: Subset<T, ProjectTechnologyAggregateArgs>): Prisma.PrismaPromise<GetProjectTechnologyAggregateType<T>>

    /**
     * Group by ProjectTechnology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechnologyGroupByArgs} args - Group by arguments.
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
      T extends ProjectTechnologyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectTechnologyGroupByArgs['orderBy'] }
        : { orderBy?: ProjectTechnologyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectTechnologyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectTechnologyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectTechnology model
   */
  readonly fields: ProjectTechnologyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectTechnology.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectTechnologyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectTechnology model
   */
  interface ProjectTechnologyFieldRefs {
    readonly id: FieldRef<"ProjectTechnology", 'String'>
    readonly projectId: FieldRef<"ProjectTechnology", 'String'>
    readonly skillId: FieldRef<"ProjectTechnology", 'String'>
    readonly version: FieldRef<"ProjectTechnology", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectTechnology findUnique
   */
  export type ProjectTechnologyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTechnology to fetch.
     */
    where: ProjectTechnologyWhereUniqueInput
  }

  /**
   * ProjectTechnology findUniqueOrThrow
   */
  export type ProjectTechnologyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTechnology to fetch.
     */
    where: ProjectTechnologyWhereUniqueInput
  }

  /**
   * ProjectTechnology findFirst
   */
  export type ProjectTechnologyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTechnology to fetch.
     */
    where?: ProjectTechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTechnologies to fetch.
     */
    orderBy?: ProjectTechnologyOrderByWithRelationInput | ProjectTechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTechnologies.
     */
    cursor?: ProjectTechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTechnologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTechnologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTechnologies.
     */
    distinct?: ProjectTechnologyScalarFieldEnum | ProjectTechnologyScalarFieldEnum[]
  }

  /**
   * ProjectTechnology findFirstOrThrow
   */
  export type ProjectTechnologyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTechnology to fetch.
     */
    where?: ProjectTechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTechnologies to fetch.
     */
    orderBy?: ProjectTechnologyOrderByWithRelationInput | ProjectTechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTechnologies.
     */
    cursor?: ProjectTechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTechnologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTechnologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTechnologies.
     */
    distinct?: ProjectTechnologyScalarFieldEnum | ProjectTechnologyScalarFieldEnum[]
  }

  /**
   * ProjectTechnology findMany
   */
  export type ProjectTechnologyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTechnologies to fetch.
     */
    where?: ProjectTechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTechnologies to fetch.
     */
    orderBy?: ProjectTechnologyOrderByWithRelationInput | ProjectTechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectTechnologies.
     */
    cursor?: ProjectTechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTechnologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTechnologies.
     */
    skip?: number
    distinct?: ProjectTechnologyScalarFieldEnum | ProjectTechnologyScalarFieldEnum[]
  }

  /**
   * ProjectTechnology create
   */
  export type ProjectTechnologyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectTechnology.
     */
    data: XOR<ProjectTechnologyCreateInput, ProjectTechnologyUncheckedCreateInput>
  }

  /**
   * ProjectTechnology createMany
   */
  export type ProjectTechnologyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectTechnologies.
     */
    data: ProjectTechnologyCreateManyInput | ProjectTechnologyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectTechnology createManyAndReturn
   */
  export type ProjectTechnologyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectTechnologies.
     */
    data: ProjectTechnologyCreateManyInput | ProjectTechnologyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectTechnology update
   */
  export type ProjectTechnologyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectTechnology.
     */
    data: XOR<ProjectTechnologyUpdateInput, ProjectTechnologyUncheckedUpdateInput>
    /**
     * Choose, which ProjectTechnology to update.
     */
    where: ProjectTechnologyWhereUniqueInput
  }

  /**
   * ProjectTechnology updateMany
   */
  export type ProjectTechnologyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectTechnologies.
     */
    data: XOR<ProjectTechnologyUpdateManyMutationInput, ProjectTechnologyUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTechnologies to update
     */
    where?: ProjectTechnologyWhereInput
    /**
     * Limit how many ProjectTechnologies to update.
     */
    limit?: number
  }

  /**
   * ProjectTechnology updateManyAndReturn
   */
  export type ProjectTechnologyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * The data used to update ProjectTechnologies.
     */
    data: XOR<ProjectTechnologyUpdateManyMutationInput, ProjectTechnologyUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTechnologies to update
     */
    where?: ProjectTechnologyWhereInput
    /**
     * Limit how many ProjectTechnologies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectTechnology upsert
   */
  export type ProjectTechnologyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectTechnology to update in case it exists.
     */
    where: ProjectTechnologyWhereUniqueInput
    /**
     * In case the ProjectTechnology found by the `where` argument doesn't exist, create a new ProjectTechnology with this data.
     */
    create: XOR<ProjectTechnologyCreateInput, ProjectTechnologyUncheckedCreateInput>
    /**
     * In case the ProjectTechnology was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectTechnologyUpdateInput, ProjectTechnologyUncheckedUpdateInput>
  }

  /**
   * ProjectTechnology delete
   */
  export type ProjectTechnologyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * Filter which ProjectTechnology to delete.
     */
    where: ProjectTechnologyWhereUniqueInput
  }

  /**
   * ProjectTechnology deleteMany
   */
  export type ProjectTechnologyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTechnologies to delete
     */
    where?: ProjectTechnologyWhereInput
    /**
     * Limit how many ProjectTechnologies to delete.
     */
    limit?: number
  }

  /**
   * ProjectTechnology without action
   */
  export type ProjectTechnologyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    displayOrder: number | null
  }

  export type SkillSumAggregateOutputType = {
    displayOrder: number | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
    category: $Enums.SkillCategory | null
    isActiveUse: boolean | null
    description: string | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
    category: $Enums.SkillCategory | null
    isActiveUse: boolean | null
    description: string | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    icon: number
    category: number
    isActiveUse: number
    description: number
    displayOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    displayOrder?: true
  }

  export type SkillSumAggregateInputType = {
    displayOrder?: true
  }

  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    category?: true
    isActiveUse?: true
    description?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    category?: true
    isActiveUse?: true
    description?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    category?: true
    isActiveUse?: true
    description?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    name: string
    icon: string | null
    category: $Enums.SkillCategory
    isActiveUse: boolean
    description: string | null
    displayOrder: number
    createdAt: Date
    updatedAt: Date
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    category?: boolean
    isActiveUse?: boolean
    description?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectTechnologies?: boolean | Skill$projectTechnologiesArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    category?: boolean
    isActiveUse?: boolean
    description?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    category?: boolean
    isActiveUse?: boolean
    description?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
    icon?: boolean
    category?: boolean
    isActiveUse?: boolean
    description?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "icon" | "category" | "isActiveUse" | "description" | "displayOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectTechnologies?: boolean | Skill$projectTechnologiesArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      projectTechnologies: Prisma.$ProjectTechnologyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      icon: string | null
      category: $Enums.SkillCategory
      isActiveUse: boolean
      description: string | null
      displayOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
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
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
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
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectTechnologies<T extends Skill$projectTechnologiesArgs<ExtArgs> = {}>(args?: Subset<T, Skill$projectTechnologiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly icon: FieldRef<"Skill", 'String'>
    readonly category: FieldRef<"Skill", 'SkillCategory'>
    readonly isActiveUse: FieldRef<"Skill", 'Boolean'>
    readonly description: FieldRef<"Skill", 'String'>
    readonly displayOrder: FieldRef<"Skill", 'Int'>
    readonly createdAt: FieldRef<"Skill", 'DateTime'>
    readonly updatedAt: FieldRef<"Skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill.projectTechnologies
   */
  export type Skill$projectTechnologiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    where?: ProjectTechnologyWhereInput
    orderBy?: ProjectTechnologyOrderByWithRelationInput | ProjectTechnologyOrderByWithRelationInput[]
    cursor?: ProjectTechnologyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectTechnologyScalarFieldEnum | ProjectTechnologyScalarFieldEnum[]
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model WeatherCache
   */

  export type AggregateWeatherCache = {
    _count: WeatherCacheCountAggregateOutputType | null
    _avg: WeatherCacheAvgAggregateOutputType | null
    _sum: WeatherCacheSumAggregateOutputType | null
    _min: WeatherCacheMinAggregateOutputType | null
    _max: WeatherCacheMaxAggregateOutputType | null
  }

  export type WeatherCacheAvgAggregateOutputType = {
    temp_c: number | null
    temp_f: number | null
    conditionCode: number | null
    humidity: number | null
    windSpeed: number | null
  }

  export type WeatherCacheSumAggregateOutputType = {
    temp_c: number | null
    temp_f: number | null
    conditionCode: number | null
    humidity: number | null
    windSpeed: number | null
  }

  export type WeatherCacheMinAggregateOutputType = {
    id: string | null
    location: string | null
    temp_c: number | null
    temp_f: number | null
    description: string | null
    icon: string | null
    conditionCode: number | null
    humidity: number | null
    windSpeed: number | null
    cachedAt: Date | null
    expiresAt: Date | null
  }

  export type WeatherCacheMaxAggregateOutputType = {
    id: string | null
    location: string | null
    temp_c: number | null
    temp_f: number | null
    description: string | null
    icon: string | null
    conditionCode: number | null
    humidity: number | null
    windSpeed: number | null
    cachedAt: Date | null
    expiresAt: Date | null
  }

  export type WeatherCacheCountAggregateOutputType = {
    id: number
    location: number
    temp_c: number
    temp_f: number
    description: number
    icon: number
    conditionCode: number
    humidity: number
    windSpeed: number
    cachedAt: number
    expiresAt: number
    _all: number
  }


  export type WeatherCacheAvgAggregateInputType = {
    temp_c?: true
    temp_f?: true
    conditionCode?: true
    humidity?: true
    windSpeed?: true
  }

  export type WeatherCacheSumAggregateInputType = {
    temp_c?: true
    temp_f?: true
    conditionCode?: true
    humidity?: true
    windSpeed?: true
  }

  export type WeatherCacheMinAggregateInputType = {
    id?: true
    location?: true
    temp_c?: true
    temp_f?: true
    description?: true
    icon?: true
    conditionCode?: true
    humidity?: true
    windSpeed?: true
    cachedAt?: true
    expiresAt?: true
  }

  export type WeatherCacheMaxAggregateInputType = {
    id?: true
    location?: true
    temp_c?: true
    temp_f?: true
    description?: true
    icon?: true
    conditionCode?: true
    humidity?: true
    windSpeed?: true
    cachedAt?: true
    expiresAt?: true
  }

  export type WeatherCacheCountAggregateInputType = {
    id?: true
    location?: true
    temp_c?: true
    temp_f?: true
    description?: true
    icon?: true
    conditionCode?: true
    humidity?: true
    windSpeed?: true
    cachedAt?: true
    expiresAt?: true
    _all?: true
  }

  export type WeatherCacheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeatherCache to aggregate.
     */
    where?: WeatherCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherCaches to fetch.
     */
    orderBy?: WeatherCacheOrderByWithRelationInput | WeatherCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeatherCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeatherCaches
    **/
    _count?: true | WeatherCacheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeatherCacheAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeatherCacheSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeatherCacheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeatherCacheMaxAggregateInputType
  }

  export type GetWeatherCacheAggregateType<T extends WeatherCacheAggregateArgs> = {
        [P in keyof T & keyof AggregateWeatherCache]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeatherCache[P]>
      : GetScalarType<T[P], AggregateWeatherCache[P]>
  }




  export type WeatherCacheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeatherCacheWhereInput
    orderBy?: WeatherCacheOrderByWithAggregationInput | WeatherCacheOrderByWithAggregationInput[]
    by: WeatherCacheScalarFieldEnum[] | WeatherCacheScalarFieldEnum
    having?: WeatherCacheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeatherCacheCountAggregateInputType | true
    _avg?: WeatherCacheAvgAggregateInputType
    _sum?: WeatherCacheSumAggregateInputType
    _min?: WeatherCacheMinAggregateInputType
    _max?: WeatherCacheMaxAggregateInputType
  }

  export type WeatherCacheGroupByOutputType = {
    id: string
    location: string
    temp_c: number
    temp_f: number
    description: string
    icon: string
    conditionCode: number
    humidity: number | null
    windSpeed: number | null
    cachedAt: Date
    expiresAt: Date
    _count: WeatherCacheCountAggregateOutputType | null
    _avg: WeatherCacheAvgAggregateOutputType | null
    _sum: WeatherCacheSumAggregateOutputType | null
    _min: WeatherCacheMinAggregateOutputType | null
    _max: WeatherCacheMaxAggregateOutputType | null
  }

  type GetWeatherCacheGroupByPayload<T extends WeatherCacheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeatherCacheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeatherCacheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeatherCacheGroupByOutputType[P]>
            : GetScalarType<T[P], WeatherCacheGroupByOutputType[P]>
        }
      >
    >


  export type WeatherCacheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    temp_c?: boolean
    temp_f?: boolean
    description?: boolean
    icon?: boolean
    conditionCode?: boolean
    humidity?: boolean
    windSpeed?: boolean
    cachedAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["weatherCache"]>

  export type WeatherCacheSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    temp_c?: boolean
    temp_f?: boolean
    description?: boolean
    icon?: boolean
    conditionCode?: boolean
    humidity?: boolean
    windSpeed?: boolean
    cachedAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["weatherCache"]>

  export type WeatherCacheSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    temp_c?: boolean
    temp_f?: boolean
    description?: boolean
    icon?: boolean
    conditionCode?: boolean
    humidity?: boolean
    windSpeed?: boolean
    cachedAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["weatherCache"]>

  export type WeatherCacheSelectScalar = {
    id?: boolean
    location?: boolean
    temp_c?: boolean
    temp_f?: boolean
    description?: boolean
    icon?: boolean
    conditionCode?: boolean
    humidity?: boolean
    windSpeed?: boolean
    cachedAt?: boolean
    expiresAt?: boolean
  }

  export type WeatherCacheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "location" | "temp_c" | "temp_f" | "description" | "icon" | "conditionCode" | "humidity" | "windSpeed" | "cachedAt" | "expiresAt", ExtArgs["result"]["weatherCache"]>

  export type $WeatherCachePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeatherCache"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      location: string
      temp_c: number
      temp_f: number
      description: string
      icon: string
      conditionCode: number
      humidity: number | null
      windSpeed: number | null
      cachedAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["weatherCache"]>
    composites: {}
  }

  type WeatherCacheGetPayload<S extends boolean | null | undefined | WeatherCacheDefaultArgs> = $Result.GetResult<Prisma.$WeatherCachePayload, S>

  type WeatherCacheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeatherCacheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeatherCacheCountAggregateInputType | true
    }

  export interface WeatherCacheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeatherCache'], meta: { name: 'WeatherCache' } }
    /**
     * Find zero or one WeatherCache that matches the filter.
     * @param {WeatherCacheFindUniqueArgs} args - Arguments to find a WeatherCache
     * @example
     * // Get one WeatherCache
     * const weatherCache = await prisma.weatherCache.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeatherCacheFindUniqueArgs>(args: SelectSubset<T, WeatherCacheFindUniqueArgs<ExtArgs>>): Prisma__WeatherCacheClient<$Result.GetResult<Prisma.$WeatherCachePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeatherCache that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeatherCacheFindUniqueOrThrowArgs} args - Arguments to find a WeatherCache
     * @example
     * // Get one WeatherCache
     * const weatherCache = await prisma.weatherCache.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeatherCacheFindUniqueOrThrowArgs>(args: SelectSubset<T, WeatherCacheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeatherCacheClient<$Result.GetResult<Prisma.$WeatherCachePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeatherCache that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherCacheFindFirstArgs} args - Arguments to find a WeatherCache
     * @example
     * // Get one WeatherCache
     * const weatherCache = await prisma.weatherCache.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeatherCacheFindFirstArgs>(args?: SelectSubset<T, WeatherCacheFindFirstArgs<ExtArgs>>): Prisma__WeatherCacheClient<$Result.GetResult<Prisma.$WeatherCachePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeatherCache that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherCacheFindFirstOrThrowArgs} args - Arguments to find a WeatherCache
     * @example
     * // Get one WeatherCache
     * const weatherCache = await prisma.weatherCache.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeatherCacheFindFirstOrThrowArgs>(args?: SelectSubset<T, WeatherCacheFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeatherCacheClient<$Result.GetResult<Prisma.$WeatherCachePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeatherCaches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherCacheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeatherCaches
     * const weatherCaches = await prisma.weatherCache.findMany()
     * 
     * // Get first 10 WeatherCaches
     * const weatherCaches = await prisma.weatherCache.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weatherCacheWithIdOnly = await prisma.weatherCache.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeatherCacheFindManyArgs>(args?: SelectSubset<T, WeatherCacheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherCachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeatherCache.
     * @param {WeatherCacheCreateArgs} args - Arguments to create a WeatherCache.
     * @example
     * // Create one WeatherCache
     * const WeatherCache = await prisma.weatherCache.create({
     *   data: {
     *     // ... data to create a WeatherCache
     *   }
     * })
     * 
     */
    create<T extends WeatherCacheCreateArgs>(args: SelectSubset<T, WeatherCacheCreateArgs<ExtArgs>>): Prisma__WeatherCacheClient<$Result.GetResult<Prisma.$WeatherCachePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeatherCaches.
     * @param {WeatherCacheCreateManyArgs} args - Arguments to create many WeatherCaches.
     * @example
     * // Create many WeatherCaches
     * const weatherCache = await prisma.weatherCache.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeatherCacheCreateManyArgs>(args?: SelectSubset<T, WeatherCacheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeatherCaches and returns the data saved in the database.
     * @param {WeatherCacheCreateManyAndReturnArgs} args - Arguments to create many WeatherCaches.
     * @example
     * // Create many WeatherCaches
     * const weatherCache = await prisma.weatherCache.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeatherCaches and only return the `id`
     * const weatherCacheWithIdOnly = await prisma.weatherCache.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeatherCacheCreateManyAndReturnArgs>(args?: SelectSubset<T, WeatherCacheCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherCachePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeatherCache.
     * @param {WeatherCacheDeleteArgs} args - Arguments to delete one WeatherCache.
     * @example
     * // Delete one WeatherCache
     * const WeatherCache = await prisma.weatherCache.delete({
     *   where: {
     *     // ... filter to delete one WeatherCache
     *   }
     * })
     * 
     */
    delete<T extends WeatherCacheDeleteArgs>(args: SelectSubset<T, WeatherCacheDeleteArgs<ExtArgs>>): Prisma__WeatherCacheClient<$Result.GetResult<Prisma.$WeatherCachePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeatherCache.
     * @param {WeatherCacheUpdateArgs} args - Arguments to update one WeatherCache.
     * @example
     * // Update one WeatherCache
     * const weatherCache = await prisma.weatherCache.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeatherCacheUpdateArgs>(args: SelectSubset<T, WeatherCacheUpdateArgs<ExtArgs>>): Prisma__WeatherCacheClient<$Result.GetResult<Prisma.$WeatherCachePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeatherCaches.
     * @param {WeatherCacheDeleteManyArgs} args - Arguments to filter WeatherCaches to delete.
     * @example
     * // Delete a few WeatherCaches
     * const { count } = await prisma.weatherCache.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeatherCacheDeleteManyArgs>(args?: SelectSubset<T, WeatherCacheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeatherCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherCacheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeatherCaches
     * const weatherCache = await prisma.weatherCache.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeatherCacheUpdateManyArgs>(args: SelectSubset<T, WeatherCacheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeatherCaches and returns the data updated in the database.
     * @param {WeatherCacheUpdateManyAndReturnArgs} args - Arguments to update many WeatherCaches.
     * @example
     * // Update many WeatherCaches
     * const weatherCache = await prisma.weatherCache.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeatherCaches and only return the `id`
     * const weatherCacheWithIdOnly = await prisma.weatherCache.updateManyAndReturn({
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
    updateManyAndReturn<T extends WeatherCacheUpdateManyAndReturnArgs>(args: SelectSubset<T, WeatherCacheUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherCachePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeatherCache.
     * @param {WeatherCacheUpsertArgs} args - Arguments to update or create a WeatherCache.
     * @example
     * // Update or create a WeatherCache
     * const weatherCache = await prisma.weatherCache.upsert({
     *   create: {
     *     // ... data to create a WeatherCache
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeatherCache we want to update
     *   }
     * })
     */
    upsert<T extends WeatherCacheUpsertArgs>(args: SelectSubset<T, WeatherCacheUpsertArgs<ExtArgs>>): Prisma__WeatherCacheClient<$Result.GetResult<Prisma.$WeatherCachePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeatherCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherCacheCountArgs} args - Arguments to filter WeatherCaches to count.
     * @example
     * // Count the number of WeatherCaches
     * const count = await prisma.weatherCache.count({
     *   where: {
     *     // ... the filter for the WeatherCaches we want to count
     *   }
     * })
    **/
    count<T extends WeatherCacheCountArgs>(
      args?: Subset<T, WeatherCacheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeatherCacheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeatherCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherCacheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeatherCacheAggregateArgs>(args: Subset<T, WeatherCacheAggregateArgs>): Prisma.PrismaPromise<GetWeatherCacheAggregateType<T>>

    /**
     * Group by WeatherCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherCacheGroupByArgs} args - Group by arguments.
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
      T extends WeatherCacheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeatherCacheGroupByArgs['orderBy'] }
        : { orderBy?: WeatherCacheGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeatherCacheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeatherCacheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeatherCache model
   */
  readonly fields: WeatherCacheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeatherCache.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeatherCacheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the WeatherCache model
   */
  interface WeatherCacheFieldRefs {
    readonly id: FieldRef<"WeatherCache", 'String'>
    readonly location: FieldRef<"WeatherCache", 'String'>
    readonly temp_c: FieldRef<"WeatherCache", 'Float'>
    readonly temp_f: FieldRef<"WeatherCache", 'Float'>
    readonly description: FieldRef<"WeatherCache", 'String'>
    readonly icon: FieldRef<"WeatherCache", 'String'>
    readonly conditionCode: FieldRef<"WeatherCache", 'Int'>
    readonly humidity: FieldRef<"WeatherCache", 'Int'>
    readonly windSpeed: FieldRef<"WeatherCache", 'Float'>
    readonly cachedAt: FieldRef<"WeatherCache", 'DateTime'>
    readonly expiresAt: FieldRef<"WeatherCache", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WeatherCache findUnique
   */
  export type WeatherCacheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherCache
     */
    select?: WeatherCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherCache
     */
    omit?: WeatherCacheOmit<ExtArgs> | null
    /**
     * Filter, which WeatherCache to fetch.
     */
    where: WeatherCacheWhereUniqueInput
  }

  /**
   * WeatherCache findUniqueOrThrow
   */
  export type WeatherCacheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherCache
     */
    select?: WeatherCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherCache
     */
    omit?: WeatherCacheOmit<ExtArgs> | null
    /**
     * Filter, which WeatherCache to fetch.
     */
    where: WeatherCacheWhereUniqueInput
  }

  /**
   * WeatherCache findFirst
   */
  export type WeatherCacheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherCache
     */
    select?: WeatherCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherCache
     */
    omit?: WeatherCacheOmit<ExtArgs> | null
    /**
     * Filter, which WeatherCache to fetch.
     */
    where?: WeatherCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherCaches to fetch.
     */
    orderBy?: WeatherCacheOrderByWithRelationInput | WeatherCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeatherCaches.
     */
    cursor?: WeatherCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeatherCaches.
     */
    distinct?: WeatherCacheScalarFieldEnum | WeatherCacheScalarFieldEnum[]
  }

  /**
   * WeatherCache findFirstOrThrow
   */
  export type WeatherCacheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherCache
     */
    select?: WeatherCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherCache
     */
    omit?: WeatherCacheOmit<ExtArgs> | null
    /**
     * Filter, which WeatherCache to fetch.
     */
    where?: WeatherCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherCaches to fetch.
     */
    orderBy?: WeatherCacheOrderByWithRelationInput | WeatherCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeatherCaches.
     */
    cursor?: WeatherCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeatherCaches.
     */
    distinct?: WeatherCacheScalarFieldEnum | WeatherCacheScalarFieldEnum[]
  }

  /**
   * WeatherCache findMany
   */
  export type WeatherCacheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherCache
     */
    select?: WeatherCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherCache
     */
    omit?: WeatherCacheOmit<ExtArgs> | null
    /**
     * Filter, which WeatherCaches to fetch.
     */
    where?: WeatherCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherCaches to fetch.
     */
    orderBy?: WeatherCacheOrderByWithRelationInput | WeatherCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeatherCaches.
     */
    cursor?: WeatherCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherCaches.
     */
    skip?: number
    distinct?: WeatherCacheScalarFieldEnum | WeatherCacheScalarFieldEnum[]
  }

  /**
   * WeatherCache create
   */
  export type WeatherCacheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherCache
     */
    select?: WeatherCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherCache
     */
    omit?: WeatherCacheOmit<ExtArgs> | null
    /**
     * The data needed to create a WeatherCache.
     */
    data: XOR<WeatherCacheCreateInput, WeatherCacheUncheckedCreateInput>
  }

  /**
   * WeatherCache createMany
   */
  export type WeatherCacheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeatherCaches.
     */
    data: WeatherCacheCreateManyInput | WeatherCacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeatherCache createManyAndReturn
   */
  export type WeatherCacheCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherCache
     */
    select?: WeatherCacheSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherCache
     */
    omit?: WeatherCacheOmit<ExtArgs> | null
    /**
     * The data used to create many WeatherCaches.
     */
    data: WeatherCacheCreateManyInput | WeatherCacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeatherCache update
   */
  export type WeatherCacheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherCache
     */
    select?: WeatherCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherCache
     */
    omit?: WeatherCacheOmit<ExtArgs> | null
    /**
     * The data needed to update a WeatherCache.
     */
    data: XOR<WeatherCacheUpdateInput, WeatherCacheUncheckedUpdateInput>
    /**
     * Choose, which WeatherCache to update.
     */
    where: WeatherCacheWhereUniqueInput
  }

  /**
   * WeatherCache updateMany
   */
  export type WeatherCacheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeatherCaches.
     */
    data: XOR<WeatherCacheUpdateManyMutationInput, WeatherCacheUncheckedUpdateManyInput>
    /**
     * Filter which WeatherCaches to update
     */
    where?: WeatherCacheWhereInput
    /**
     * Limit how many WeatherCaches to update.
     */
    limit?: number
  }

  /**
   * WeatherCache updateManyAndReturn
   */
  export type WeatherCacheUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherCache
     */
    select?: WeatherCacheSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherCache
     */
    omit?: WeatherCacheOmit<ExtArgs> | null
    /**
     * The data used to update WeatherCaches.
     */
    data: XOR<WeatherCacheUpdateManyMutationInput, WeatherCacheUncheckedUpdateManyInput>
    /**
     * Filter which WeatherCaches to update
     */
    where?: WeatherCacheWhereInput
    /**
     * Limit how many WeatherCaches to update.
     */
    limit?: number
  }

  /**
   * WeatherCache upsert
   */
  export type WeatherCacheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherCache
     */
    select?: WeatherCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherCache
     */
    omit?: WeatherCacheOmit<ExtArgs> | null
    /**
     * The filter to search for the WeatherCache to update in case it exists.
     */
    where: WeatherCacheWhereUniqueInput
    /**
     * In case the WeatherCache found by the `where` argument doesn't exist, create a new WeatherCache with this data.
     */
    create: XOR<WeatherCacheCreateInput, WeatherCacheUncheckedCreateInput>
    /**
     * In case the WeatherCache was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeatherCacheUpdateInput, WeatherCacheUncheckedUpdateInput>
  }

  /**
   * WeatherCache delete
   */
  export type WeatherCacheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherCache
     */
    select?: WeatherCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherCache
     */
    omit?: WeatherCacheOmit<ExtArgs> | null
    /**
     * Filter which WeatherCache to delete.
     */
    where: WeatherCacheWhereUniqueInput
  }

  /**
   * WeatherCache deleteMany
   */
  export type WeatherCacheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeatherCaches to delete
     */
    where?: WeatherCacheWhereInput
    /**
     * Limit how many WeatherCaches to delete.
     */
    limit?: number
  }

  /**
   * WeatherCache without action
   */
  export type WeatherCacheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherCache
     */
    select?: WeatherCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherCache
     */
    omit?: WeatherCacheOmit<ExtArgs> | null
  }


  /**
   * Model SpotifyCache
   */

  export type AggregateSpotifyCache = {
    _count: SpotifyCacheCountAggregateOutputType | null
    _min: SpotifyCacheMinAggregateOutputType | null
    _max: SpotifyCacheMaxAggregateOutputType | null
  }

  export type SpotifyCacheMinAggregateOutputType = {
    id: string | null
    userId: string | null
    trackName: string | null
    artistName: string | null
    albumName: string | null
    albumImage: string | null
    isPlaying: boolean | null
    trackId: string | null
    cachedAt: Date | null
    expiresAt: Date | null
  }

  export type SpotifyCacheMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    trackName: string | null
    artistName: string | null
    albumName: string | null
    albumImage: string | null
    isPlaying: boolean | null
    trackId: string | null
    cachedAt: Date | null
    expiresAt: Date | null
  }

  export type SpotifyCacheCountAggregateOutputType = {
    id: number
    userId: number
    trackName: number
    artistName: number
    albumName: number
    albumImage: number
    isPlaying: number
    trackId: number
    cachedAt: number
    expiresAt: number
    _all: number
  }


  export type SpotifyCacheMinAggregateInputType = {
    id?: true
    userId?: true
    trackName?: true
    artistName?: true
    albumName?: true
    albumImage?: true
    isPlaying?: true
    trackId?: true
    cachedAt?: true
    expiresAt?: true
  }

  export type SpotifyCacheMaxAggregateInputType = {
    id?: true
    userId?: true
    trackName?: true
    artistName?: true
    albumName?: true
    albumImage?: true
    isPlaying?: true
    trackId?: true
    cachedAt?: true
    expiresAt?: true
  }

  export type SpotifyCacheCountAggregateInputType = {
    id?: true
    userId?: true
    trackName?: true
    artistName?: true
    albumName?: true
    albumImage?: true
    isPlaying?: true
    trackId?: true
    cachedAt?: true
    expiresAt?: true
    _all?: true
  }

  export type SpotifyCacheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpotifyCache to aggregate.
     */
    where?: SpotifyCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotifyCaches to fetch.
     */
    orderBy?: SpotifyCacheOrderByWithRelationInput | SpotifyCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpotifyCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotifyCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotifyCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpotifyCaches
    **/
    _count?: true | SpotifyCacheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpotifyCacheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpotifyCacheMaxAggregateInputType
  }

  export type GetSpotifyCacheAggregateType<T extends SpotifyCacheAggregateArgs> = {
        [P in keyof T & keyof AggregateSpotifyCache]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpotifyCache[P]>
      : GetScalarType<T[P], AggregateSpotifyCache[P]>
  }




  export type SpotifyCacheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpotifyCacheWhereInput
    orderBy?: SpotifyCacheOrderByWithAggregationInput | SpotifyCacheOrderByWithAggregationInput[]
    by: SpotifyCacheScalarFieldEnum[] | SpotifyCacheScalarFieldEnum
    having?: SpotifyCacheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpotifyCacheCountAggregateInputType | true
    _min?: SpotifyCacheMinAggregateInputType
    _max?: SpotifyCacheMaxAggregateInputType
  }

  export type SpotifyCacheGroupByOutputType = {
    id: string
    userId: string
    trackName: string | null
    artistName: string | null
    albumName: string | null
    albumImage: string | null
    isPlaying: boolean
    trackId: string | null
    cachedAt: Date
    expiresAt: Date
    _count: SpotifyCacheCountAggregateOutputType | null
    _min: SpotifyCacheMinAggregateOutputType | null
    _max: SpotifyCacheMaxAggregateOutputType | null
  }

  type GetSpotifyCacheGroupByPayload<T extends SpotifyCacheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpotifyCacheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpotifyCacheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpotifyCacheGroupByOutputType[P]>
            : GetScalarType<T[P], SpotifyCacheGroupByOutputType[P]>
        }
      >
    >


  export type SpotifyCacheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trackName?: boolean
    artistName?: boolean
    albumName?: boolean
    albumImage?: boolean
    isPlaying?: boolean
    trackId?: boolean
    cachedAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["spotifyCache"]>

  export type SpotifyCacheSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trackName?: boolean
    artistName?: boolean
    albumName?: boolean
    albumImage?: boolean
    isPlaying?: boolean
    trackId?: boolean
    cachedAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["spotifyCache"]>

  export type SpotifyCacheSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trackName?: boolean
    artistName?: boolean
    albumName?: boolean
    albumImage?: boolean
    isPlaying?: boolean
    trackId?: boolean
    cachedAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["spotifyCache"]>

  export type SpotifyCacheSelectScalar = {
    id?: boolean
    userId?: boolean
    trackName?: boolean
    artistName?: boolean
    albumName?: boolean
    albumImage?: boolean
    isPlaying?: boolean
    trackId?: boolean
    cachedAt?: boolean
    expiresAt?: boolean
  }

  export type SpotifyCacheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "trackName" | "artistName" | "albumName" | "albumImage" | "isPlaying" | "trackId" | "cachedAt" | "expiresAt", ExtArgs["result"]["spotifyCache"]>

  export type $SpotifyCachePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpotifyCache"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      trackName: string | null
      artistName: string | null
      albumName: string | null
      albumImage: string | null
      isPlaying: boolean
      trackId: string | null
      cachedAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["spotifyCache"]>
    composites: {}
  }

  type SpotifyCacheGetPayload<S extends boolean | null | undefined | SpotifyCacheDefaultArgs> = $Result.GetResult<Prisma.$SpotifyCachePayload, S>

  type SpotifyCacheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpotifyCacheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpotifyCacheCountAggregateInputType | true
    }

  export interface SpotifyCacheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpotifyCache'], meta: { name: 'SpotifyCache' } }
    /**
     * Find zero or one SpotifyCache that matches the filter.
     * @param {SpotifyCacheFindUniqueArgs} args - Arguments to find a SpotifyCache
     * @example
     * // Get one SpotifyCache
     * const spotifyCache = await prisma.spotifyCache.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpotifyCacheFindUniqueArgs>(args: SelectSubset<T, SpotifyCacheFindUniqueArgs<ExtArgs>>): Prisma__SpotifyCacheClient<$Result.GetResult<Prisma.$SpotifyCachePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpotifyCache that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpotifyCacheFindUniqueOrThrowArgs} args - Arguments to find a SpotifyCache
     * @example
     * // Get one SpotifyCache
     * const spotifyCache = await prisma.spotifyCache.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpotifyCacheFindUniqueOrThrowArgs>(args: SelectSubset<T, SpotifyCacheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpotifyCacheClient<$Result.GetResult<Prisma.$SpotifyCachePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpotifyCache that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotifyCacheFindFirstArgs} args - Arguments to find a SpotifyCache
     * @example
     * // Get one SpotifyCache
     * const spotifyCache = await prisma.spotifyCache.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpotifyCacheFindFirstArgs>(args?: SelectSubset<T, SpotifyCacheFindFirstArgs<ExtArgs>>): Prisma__SpotifyCacheClient<$Result.GetResult<Prisma.$SpotifyCachePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpotifyCache that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotifyCacheFindFirstOrThrowArgs} args - Arguments to find a SpotifyCache
     * @example
     * // Get one SpotifyCache
     * const spotifyCache = await prisma.spotifyCache.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpotifyCacheFindFirstOrThrowArgs>(args?: SelectSubset<T, SpotifyCacheFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpotifyCacheClient<$Result.GetResult<Prisma.$SpotifyCachePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpotifyCaches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotifyCacheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpotifyCaches
     * const spotifyCaches = await prisma.spotifyCache.findMany()
     * 
     * // Get first 10 SpotifyCaches
     * const spotifyCaches = await prisma.spotifyCache.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spotifyCacheWithIdOnly = await prisma.spotifyCache.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpotifyCacheFindManyArgs>(args?: SelectSubset<T, SpotifyCacheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotifyCachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpotifyCache.
     * @param {SpotifyCacheCreateArgs} args - Arguments to create a SpotifyCache.
     * @example
     * // Create one SpotifyCache
     * const SpotifyCache = await prisma.spotifyCache.create({
     *   data: {
     *     // ... data to create a SpotifyCache
     *   }
     * })
     * 
     */
    create<T extends SpotifyCacheCreateArgs>(args: SelectSubset<T, SpotifyCacheCreateArgs<ExtArgs>>): Prisma__SpotifyCacheClient<$Result.GetResult<Prisma.$SpotifyCachePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpotifyCaches.
     * @param {SpotifyCacheCreateManyArgs} args - Arguments to create many SpotifyCaches.
     * @example
     * // Create many SpotifyCaches
     * const spotifyCache = await prisma.spotifyCache.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpotifyCacheCreateManyArgs>(args?: SelectSubset<T, SpotifyCacheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpotifyCaches and returns the data saved in the database.
     * @param {SpotifyCacheCreateManyAndReturnArgs} args - Arguments to create many SpotifyCaches.
     * @example
     * // Create many SpotifyCaches
     * const spotifyCache = await prisma.spotifyCache.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpotifyCaches and only return the `id`
     * const spotifyCacheWithIdOnly = await prisma.spotifyCache.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpotifyCacheCreateManyAndReturnArgs>(args?: SelectSubset<T, SpotifyCacheCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotifyCachePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SpotifyCache.
     * @param {SpotifyCacheDeleteArgs} args - Arguments to delete one SpotifyCache.
     * @example
     * // Delete one SpotifyCache
     * const SpotifyCache = await prisma.spotifyCache.delete({
     *   where: {
     *     // ... filter to delete one SpotifyCache
     *   }
     * })
     * 
     */
    delete<T extends SpotifyCacheDeleteArgs>(args: SelectSubset<T, SpotifyCacheDeleteArgs<ExtArgs>>): Prisma__SpotifyCacheClient<$Result.GetResult<Prisma.$SpotifyCachePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpotifyCache.
     * @param {SpotifyCacheUpdateArgs} args - Arguments to update one SpotifyCache.
     * @example
     * // Update one SpotifyCache
     * const spotifyCache = await prisma.spotifyCache.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpotifyCacheUpdateArgs>(args: SelectSubset<T, SpotifyCacheUpdateArgs<ExtArgs>>): Prisma__SpotifyCacheClient<$Result.GetResult<Prisma.$SpotifyCachePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpotifyCaches.
     * @param {SpotifyCacheDeleteManyArgs} args - Arguments to filter SpotifyCaches to delete.
     * @example
     * // Delete a few SpotifyCaches
     * const { count } = await prisma.spotifyCache.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpotifyCacheDeleteManyArgs>(args?: SelectSubset<T, SpotifyCacheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpotifyCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotifyCacheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpotifyCaches
     * const spotifyCache = await prisma.spotifyCache.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpotifyCacheUpdateManyArgs>(args: SelectSubset<T, SpotifyCacheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpotifyCaches and returns the data updated in the database.
     * @param {SpotifyCacheUpdateManyAndReturnArgs} args - Arguments to update many SpotifyCaches.
     * @example
     * // Update many SpotifyCaches
     * const spotifyCache = await prisma.spotifyCache.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SpotifyCaches and only return the `id`
     * const spotifyCacheWithIdOnly = await prisma.spotifyCache.updateManyAndReturn({
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
    updateManyAndReturn<T extends SpotifyCacheUpdateManyAndReturnArgs>(args: SelectSubset<T, SpotifyCacheUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotifyCachePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SpotifyCache.
     * @param {SpotifyCacheUpsertArgs} args - Arguments to update or create a SpotifyCache.
     * @example
     * // Update or create a SpotifyCache
     * const spotifyCache = await prisma.spotifyCache.upsert({
     *   create: {
     *     // ... data to create a SpotifyCache
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpotifyCache we want to update
     *   }
     * })
     */
    upsert<T extends SpotifyCacheUpsertArgs>(args: SelectSubset<T, SpotifyCacheUpsertArgs<ExtArgs>>): Prisma__SpotifyCacheClient<$Result.GetResult<Prisma.$SpotifyCachePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpotifyCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotifyCacheCountArgs} args - Arguments to filter SpotifyCaches to count.
     * @example
     * // Count the number of SpotifyCaches
     * const count = await prisma.spotifyCache.count({
     *   where: {
     *     // ... the filter for the SpotifyCaches we want to count
     *   }
     * })
    **/
    count<T extends SpotifyCacheCountArgs>(
      args?: Subset<T, SpotifyCacheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpotifyCacheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpotifyCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotifyCacheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpotifyCacheAggregateArgs>(args: Subset<T, SpotifyCacheAggregateArgs>): Prisma.PrismaPromise<GetSpotifyCacheAggregateType<T>>

    /**
     * Group by SpotifyCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotifyCacheGroupByArgs} args - Group by arguments.
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
      T extends SpotifyCacheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpotifyCacheGroupByArgs['orderBy'] }
        : { orderBy?: SpotifyCacheGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpotifyCacheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpotifyCacheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpotifyCache model
   */
  readonly fields: SpotifyCacheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpotifyCache.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpotifyCacheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SpotifyCache model
   */
  interface SpotifyCacheFieldRefs {
    readonly id: FieldRef<"SpotifyCache", 'String'>
    readonly userId: FieldRef<"SpotifyCache", 'String'>
    readonly trackName: FieldRef<"SpotifyCache", 'String'>
    readonly artistName: FieldRef<"SpotifyCache", 'String'>
    readonly albumName: FieldRef<"SpotifyCache", 'String'>
    readonly albumImage: FieldRef<"SpotifyCache", 'String'>
    readonly isPlaying: FieldRef<"SpotifyCache", 'Boolean'>
    readonly trackId: FieldRef<"SpotifyCache", 'String'>
    readonly cachedAt: FieldRef<"SpotifyCache", 'DateTime'>
    readonly expiresAt: FieldRef<"SpotifyCache", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SpotifyCache findUnique
   */
  export type SpotifyCacheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotifyCache
     */
    select?: SpotifyCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpotifyCache
     */
    omit?: SpotifyCacheOmit<ExtArgs> | null
    /**
     * Filter, which SpotifyCache to fetch.
     */
    where: SpotifyCacheWhereUniqueInput
  }

  /**
   * SpotifyCache findUniqueOrThrow
   */
  export type SpotifyCacheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotifyCache
     */
    select?: SpotifyCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpotifyCache
     */
    omit?: SpotifyCacheOmit<ExtArgs> | null
    /**
     * Filter, which SpotifyCache to fetch.
     */
    where: SpotifyCacheWhereUniqueInput
  }

  /**
   * SpotifyCache findFirst
   */
  export type SpotifyCacheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotifyCache
     */
    select?: SpotifyCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpotifyCache
     */
    omit?: SpotifyCacheOmit<ExtArgs> | null
    /**
     * Filter, which SpotifyCache to fetch.
     */
    where?: SpotifyCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotifyCaches to fetch.
     */
    orderBy?: SpotifyCacheOrderByWithRelationInput | SpotifyCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpotifyCaches.
     */
    cursor?: SpotifyCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotifyCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotifyCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpotifyCaches.
     */
    distinct?: SpotifyCacheScalarFieldEnum | SpotifyCacheScalarFieldEnum[]
  }

  /**
   * SpotifyCache findFirstOrThrow
   */
  export type SpotifyCacheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotifyCache
     */
    select?: SpotifyCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpotifyCache
     */
    omit?: SpotifyCacheOmit<ExtArgs> | null
    /**
     * Filter, which SpotifyCache to fetch.
     */
    where?: SpotifyCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotifyCaches to fetch.
     */
    orderBy?: SpotifyCacheOrderByWithRelationInput | SpotifyCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpotifyCaches.
     */
    cursor?: SpotifyCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotifyCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotifyCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpotifyCaches.
     */
    distinct?: SpotifyCacheScalarFieldEnum | SpotifyCacheScalarFieldEnum[]
  }

  /**
   * SpotifyCache findMany
   */
  export type SpotifyCacheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotifyCache
     */
    select?: SpotifyCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpotifyCache
     */
    omit?: SpotifyCacheOmit<ExtArgs> | null
    /**
     * Filter, which SpotifyCaches to fetch.
     */
    where?: SpotifyCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotifyCaches to fetch.
     */
    orderBy?: SpotifyCacheOrderByWithRelationInput | SpotifyCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpotifyCaches.
     */
    cursor?: SpotifyCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotifyCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotifyCaches.
     */
    skip?: number
    distinct?: SpotifyCacheScalarFieldEnum | SpotifyCacheScalarFieldEnum[]
  }

  /**
   * SpotifyCache create
   */
  export type SpotifyCacheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotifyCache
     */
    select?: SpotifyCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpotifyCache
     */
    omit?: SpotifyCacheOmit<ExtArgs> | null
    /**
     * The data needed to create a SpotifyCache.
     */
    data: XOR<SpotifyCacheCreateInput, SpotifyCacheUncheckedCreateInput>
  }

  /**
   * SpotifyCache createMany
   */
  export type SpotifyCacheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpotifyCaches.
     */
    data: SpotifyCacheCreateManyInput | SpotifyCacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpotifyCache createManyAndReturn
   */
  export type SpotifyCacheCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotifyCache
     */
    select?: SpotifyCacheSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpotifyCache
     */
    omit?: SpotifyCacheOmit<ExtArgs> | null
    /**
     * The data used to create many SpotifyCaches.
     */
    data: SpotifyCacheCreateManyInput | SpotifyCacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpotifyCache update
   */
  export type SpotifyCacheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotifyCache
     */
    select?: SpotifyCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpotifyCache
     */
    omit?: SpotifyCacheOmit<ExtArgs> | null
    /**
     * The data needed to update a SpotifyCache.
     */
    data: XOR<SpotifyCacheUpdateInput, SpotifyCacheUncheckedUpdateInput>
    /**
     * Choose, which SpotifyCache to update.
     */
    where: SpotifyCacheWhereUniqueInput
  }

  /**
   * SpotifyCache updateMany
   */
  export type SpotifyCacheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpotifyCaches.
     */
    data: XOR<SpotifyCacheUpdateManyMutationInput, SpotifyCacheUncheckedUpdateManyInput>
    /**
     * Filter which SpotifyCaches to update
     */
    where?: SpotifyCacheWhereInput
    /**
     * Limit how many SpotifyCaches to update.
     */
    limit?: number
  }

  /**
   * SpotifyCache updateManyAndReturn
   */
  export type SpotifyCacheUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotifyCache
     */
    select?: SpotifyCacheSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpotifyCache
     */
    omit?: SpotifyCacheOmit<ExtArgs> | null
    /**
     * The data used to update SpotifyCaches.
     */
    data: XOR<SpotifyCacheUpdateManyMutationInput, SpotifyCacheUncheckedUpdateManyInput>
    /**
     * Filter which SpotifyCaches to update
     */
    where?: SpotifyCacheWhereInput
    /**
     * Limit how many SpotifyCaches to update.
     */
    limit?: number
  }

  /**
   * SpotifyCache upsert
   */
  export type SpotifyCacheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotifyCache
     */
    select?: SpotifyCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpotifyCache
     */
    omit?: SpotifyCacheOmit<ExtArgs> | null
    /**
     * The filter to search for the SpotifyCache to update in case it exists.
     */
    where: SpotifyCacheWhereUniqueInput
    /**
     * In case the SpotifyCache found by the `where` argument doesn't exist, create a new SpotifyCache with this data.
     */
    create: XOR<SpotifyCacheCreateInput, SpotifyCacheUncheckedCreateInput>
    /**
     * In case the SpotifyCache was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpotifyCacheUpdateInput, SpotifyCacheUncheckedUpdateInput>
  }

  /**
   * SpotifyCache delete
   */
  export type SpotifyCacheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotifyCache
     */
    select?: SpotifyCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpotifyCache
     */
    omit?: SpotifyCacheOmit<ExtArgs> | null
    /**
     * Filter which SpotifyCache to delete.
     */
    where: SpotifyCacheWhereUniqueInput
  }

  /**
   * SpotifyCache deleteMany
   */
  export type SpotifyCacheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpotifyCaches to delete
     */
    where?: SpotifyCacheWhereInput
    /**
     * Limit how many SpotifyCaches to delete.
     */
    limit?: number
  }

  /**
   * SpotifyCache without action
   */
  export type SpotifyCacheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotifyCache
     */
    select?: SpotifyCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpotifyCache
     */
    omit?: SpotifyCacheOmit<ExtArgs> | null
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
    logo: 'logo',
    version: 'version',
    website: 'website',
    isDone: 'isDone',
    isReceivingUpdates: 'isReceivingUpdates',
    isInProduction: 'isInProduction',
    description: 'description',
    previewImage: 'previewImage',
    category: 'category',
    type: 'type',
    displayOrder: 'displayOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectTechnologyScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    skillId: 'skillId',
    version: 'version'
  };

  export type ProjectTechnologyScalarFieldEnum = (typeof ProjectTechnologyScalarFieldEnum)[keyof typeof ProjectTechnologyScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    icon: 'icon',
    category: 'category',
    isActiveUse: 'isActiveUse',
    description: 'description',
    displayOrder: 'displayOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const WeatherCacheScalarFieldEnum: {
    id: 'id',
    location: 'location',
    temp_c: 'temp_c',
    temp_f: 'temp_f',
    description: 'description',
    icon: 'icon',
    conditionCode: 'conditionCode',
    humidity: 'humidity',
    windSpeed: 'windSpeed',
    cachedAt: 'cachedAt',
    expiresAt: 'expiresAt'
  };

  export type WeatherCacheScalarFieldEnum = (typeof WeatherCacheScalarFieldEnum)[keyof typeof WeatherCacheScalarFieldEnum]


  export const SpotifyCacheScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    trackName: 'trackName',
    artistName: 'artistName',
    albumName: 'albumName',
    albumImage: 'albumImage',
    isPlaying: 'isPlaying',
    trackId: 'trackId',
    cachedAt: 'cachedAt',
    expiresAt: 'expiresAt'
  };

  export type SpotifyCacheScalarFieldEnum = (typeof SpotifyCacheScalarFieldEnum)[keyof typeof SpotifyCacheScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ProjectCategory'
   */
  export type EnumProjectCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectCategory'>
    


  /**
   * Reference to a field of type 'ProjectCategory[]'
   */
  export type ListEnumProjectCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectCategory[]'>
    


  /**
   * Reference to a field of type 'ProjectType'
   */
  export type EnumProjectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectType'>
    


  /**
   * Reference to a field of type 'ProjectType[]'
   */
  export type ListEnumProjectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SkillCategory'
   */
  export type EnumSkillCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillCategory'>
    


  /**
   * Reference to a field of type 'SkillCategory[]'
   */
  export type ListEnumSkillCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillCategory[]'>
    


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


  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    logo?: StringNullableFilter<"Project"> | string | null
    version?: StringNullableFilter<"Project"> | string | null
    website?: StringNullableFilter<"Project"> | string | null
    isDone?: BoolFilter<"Project"> | boolean
    isReceivingUpdates?: BoolFilter<"Project"> | boolean
    isInProduction?: BoolFilter<"Project"> | boolean
    description?: StringFilter<"Project"> | string
    previewImage?: StringNullableFilter<"Project"> | string | null
    category?: EnumProjectCategoryFilter<"Project"> | $Enums.ProjectCategory
    type?: EnumProjectTypeFilter<"Project"> | $Enums.ProjectType
    displayOrder?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    technologies?: ProjectTechnologyListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    isDone?: SortOrder
    isReceivingUpdates?: SortOrder
    isInProduction?: SortOrder
    description?: SortOrder
    previewImage?: SortOrderInput | SortOrder
    category?: SortOrder
    type?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    technologies?: ProjectTechnologyOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    logo?: StringNullableFilter<"Project"> | string | null
    version?: StringNullableFilter<"Project"> | string | null
    website?: StringNullableFilter<"Project"> | string | null
    isDone?: BoolFilter<"Project"> | boolean
    isReceivingUpdates?: BoolFilter<"Project"> | boolean
    isInProduction?: BoolFilter<"Project"> | boolean
    description?: StringFilter<"Project"> | string
    previewImage?: StringNullableFilter<"Project"> | string | null
    category?: EnumProjectCategoryFilter<"Project"> | $Enums.ProjectCategory
    type?: EnumProjectTypeFilter<"Project"> | $Enums.ProjectType
    displayOrder?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    technologies?: ProjectTechnologyListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    isDone?: SortOrder
    isReceivingUpdates?: SortOrder
    isInProduction?: SortOrder
    description?: SortOrder
    previewImage?: SortOrderInput | SortOrder
    category?: SortOrder
    type?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    logo?: StringNullableWithAggregatesFilter<"Project"> | string | null
    version?: StringNullableWithAggregatesFilter<"Project"> | string | null
    website?: StringNullableWithAggregatesFilter<"Project"> | string | null
    isDone?: BoolWithAggregatesFilter<"Project"> | boolean
    isReceivingUpdates?: BoolWithAggregatesFilter<"Project"> | boolean
    isInProduction?: BoolWithAggregatesFilter<"Project"> | boolean
    description?: StringWithAggregatesFilter<"Project"> | string
    previewImage?: StringNullableWithAggregatesFilter<"Project"> | string | null
    category?: EnumProjectCategoryWithAggregatesFilter<"Project"> | $Enums.ProjectCategory
    type?: EnumProjectTypeWithAggregatesFilter<"Project"> | $Enums.ProjectType
    displayOrder?: IntWithAggregatesFilter<"Project"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ProjectTechnologyWhereInput = {
    AND?: ProjectTechnologyWhereInput | ProjectTechnologyWhereInput[]
    OR?: ProjectTechnologyWhereInput[]
    NOT?: ProjectTechnologyWhereInput | ProjectTechnologyWhereInput[]
    id?: StringFilter<"ProjectTechnology"> | string
    projectId?: StringFilter<"ProjectTechnology"> | string
    skillId?: StringFilter<"ProjectTechnology"> | string
    version?: StringNullableFilter<"ProjectTechnology"> | string | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }

  export type ProjectTechnologyOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    skillId?: SortOrder
    version?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
  }

  export type ProjectTechnologyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectTechnologyWhereInput | ProjectTechnologyWhereInput[]
    OR?: ProjectTechnologyWhereInput[]
    NOT?: ProjectTechnologyWhereInput | ProjectTechnologyWhereInput[]
    projectId?: StringFilter<"ProjectTechnology"> | string
    skillId?: StringFilter<"ProjectTechnology"> | string
    version?: StringNullableFilter<"ProjectTechnology"> | string | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }, "id">

  export type ProjectTechnologyOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    skillId?: SortOrder
    version?: SortOrderInput | SortOrder
    _count?: ProjectTechnologyCountOrderByAggregateInput
    _max?: ProjectTechnologyMaxOrderByAggregateInput
    _min?: ProjectTechnologyMinOrderByAggregateInput
  }

  export type ProjectTechnologyScalarWhereWithAggregatesInput = {
    AND?: ProjectTechnologyScalarWhereWithAggregatesInput | ProjectTechnologyScalarWhereWithAggregatesInput[]
    OR?: ProjectTechnologyScalarWhereWithAggregatesInput[]
    NOT?: ProjectTechnologyScalarWhereWithAggregatesInput | ProjectTechnologyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectTechnology"> | string
    projectId?: StringWithAggregatesFilter<"ProjectTechnology"> | string
    skillId?: StringWithAggregatesFilter<"ProjectTechnology"> | string
    version?: StringNullableWithAggregatesFilter<"ProjectTechnology"> | string | null
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    icon?: StringNullableFilter<"Skill"> | string | null
    category?: EnumSkillCategoryFilter<"Skill"> | $Enums.SkillCategory
    isActiveUse?: BoolFilter<"Skill"> | boolean
    description?: StringNullableFilter<"Skill"> | string | null
    displayOrder?: IntFilter<"Skill"> | number
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
    projectTechnologies?: ProjectTechnologyListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrderInput | SortOrder
    category?: SortOrder
    isActiveUse?: SortOrder
    description?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectTechnologies?: ProjectTechnologyOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    icon?: StringNullableFilter<"Skill"> | string | null
    category?: EnumSkillCategoryFilter<"Skill"> | $Enums.SkillCategory
    isActiveUse?: BoolFilter<"Skill"> | boolean
    description?: StringNullableFilter<"Skill"> | string | null
    displayOrder?: IntFilter<"Skill"> | number
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
    projectTechnologies?: ProjectTechnologyListRelationFilter
  }, "id" | "name">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrderInput | SortOrder
    category?: SortOrder
    isActiveUse?: SortOrder
    description?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _avg?: SkillAvgOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
    _sum?: SkillSumOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    name?: StringWithAggregatesFilter<"Skill"> | string
    icon?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    category?: EnumSkillCategoryWithAggregatesFilter<"Skill"> | $Enums.SkillCategory
    isActiveUse?: BoolWithAggregatesFilter<"Skill"> | boolean
    description?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    displayOrder?: IntWithAggregatesFilter<"Skill"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
  }

  export type WeatherCacheWhereInput = {
    AND?: WeatherCacheWhereInput | WeatherCacheWhereInput[]
    OR?: WeatherCacheWhereInput[]
    NOT?: WeatherCacheWhereInput | WeatherCacheWhereInput[]
    id?: StringFilter<"WeatherCache"> | string
    location?: StringFilter<"WeatherCache"> | string
    temp_c?: FloatFilter<"WeatherCache"> | number
    temp_f?: FloatFilter<"WeatherCache"> | number
    description?: StringFilter<"WeatherCache"> | string
    icon?: StringFilter<"WeatherCache"> | string
    conditionCode?: IntFilter<"WeatherCache"> | number
    humidity?: IntNullableFilter<"WeatherCache"> | number | null
    windSpeed?: FloatNullableFilter<"WeatherCache"> | number | null
    cachedAt?: DateTimeFilter<"WeatherCache"> | Date | string
    expiresAt?: DateTimeFilter<"WeatherCache"> | Date | string
  }

  export type WeatherCacheOrderByWithRelationInput = {
    id?: SortOrder
    location?: SortOrder
    temp_c?: SortOrder
    temp_f?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    conditionCode?: SortOrder
    humidity?: SortOrderInput | SortOrder
    windSpeed?: SortOrderInput | SortOrder
    cachedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type WeatherCacheWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    location?: string
    AND?: WeatherCacheWhereInput | WeatherCacheWhereInput[]
    OR?: WeatherCacheWhereInput[]
    NOT?: WeatherCacheWhereInput | WeatherCacheWhereInput[]
    temp_c?: FloatFilter<"WeatherCache"> | number
    temp_f?: FloatFilter<"WeatherCache"> | number
    description?: StringFilter<"WeatherCache"> | string
    icon?: StringFilter<"WeatherCache"> | string
    conditionCode?: IntFilter<"WeatherCache"> | number
    humidity?: IntNullableFilter<"WeatherCache"> | number | null
    windSpeed?: FloatNullableFilter<"WeatherCache"> | number | null
    cachedAt?: DateTimeFilter<"WeatherCache"> | Date | string
    expiresAt?: DateTimeFilter<"WeatherCache"> | Date | string
  }, "id" | "location">

  export type WeatherCacheOrderByWithAggregationInput = {
    id?: SortOrder
    location?: SortOrder
    temp_c?: SortOrder
    temp_f?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    conditionCode?: SortOrder
    humidity?: SortOrderInput | SortOrder
    windSpeed?: SortOrderInput | SortOrder
    cachedAt?: SortOrder
    expiresAt?: SortOrder
    _count?: WeatherCacheCountOrderByAggregateInput
    _avg?: WeatherCacheAvgOrderByAggregateInput
    _max?: WeatherCacheMaxOrderByAggregateInput
    _min?: WeatherCacheMinOrderByAggregateInput
    _sum?: WeatherCacheSumOrderByAggregateInput
  }

  export type WeatherCacheScalarWhereWithAggregatesInput = {
    AND?: WeatherCacheScalarWhereWithAggregatesInput | WeatherCacheScalarWhereWithAggregatesInput[]
    OR?: WeatherCacheScalarWhereWithAggregatesInput[]
    NOT?: WeatherCacheScalarWhereWithAggregatesInput | WeatherCacheScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WeatherCache"> | string
    location?: StringWithAggregatesFilter<"WeatherCache"> | string
    temp_c?: FloatWithAggregatesFilter<"WeatherCache"> | number
    temp_f?: FloatWithAggregatesFilter<"WeatherCache"> | number
    description?: StringWithAggregatesFilter<"WeatherCache"> | string
    icon?: StringWithAggregatesFilter<"WeatherCache"> | string
    conditionCode?: IntWithAggregatesFilter<"WeatherCache"> | number
    humidity?: IntNullableWithAggregatesFilter<"WeatherCache"> | number | null
    windSpeed?: FloatNullableWithAggregatesFilter<"WeatherCache"> | number | null
    cachedAt?: DateTimeWithAggregatesFilter<"WeatherCache"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"WeatherCache"> | Date | string
  }

  export type SpotifyCacheWhereInput = {
    AND?: SpotifyCacheWhereInput | SpotifyCacheWhereInput[]
    OR?: SpotifyCacheWhereInput[]
    NOT?: SpotifyCacheWhereInput | SpotifyCacheWhereInput[]
    id?: StringFilter<"SpotifyCache"> | string
    userId?: StringFilter<"SpotifyCache"> | string
    trackName?: StringNullableFilter<"SpotifyCache"> | string | null
    artistName?: StringNullableFilter<"SpotifyCache"> | string | null
    albumName?: StringNullableFilter<"SpotifyCache"> | string | null
    albumImage?: StringNullableFilter<"SpotifyCache"> | string | null
    isPlaying?: BoolFilter<"SpotifyCache"> | boolean
    trackId?: StringNullableFilter<"SpotifyCache"> | string | null
    cachedAt?: DateTimeFilter<"SpotifyCache"> | Date | string
    expiresAt?: DateTimeFilter<"SpotifyCache"> | Date | string
  }

  export type SpotifyCacheOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    trackName?: SortOrderInput | SortOrder
    artistName?: SortOrderInput | SortOrder
    albumName?: SortOrderInput | SortOrder
    albumImage?: SortOrderInput | SortOrder
    isPlaying?: SortOrder
    trackId?: SortOrderInput | SortOrder
    cachedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type SpotifyCacheWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SpotifyCacheWhereInput | SpotifyCacheWhereInput[]
    OR?: SpotifyCacheWhereInput[]
    NOT?: SpotifyCacheWhereInput | SpotifyCacheWhereInput[]
    trackName?: StringNullableFilter<"SpotifyCache"> | string | null
    artistName?: StringNullableFilter<"SpotifyCache"> | string | null
    albumName?: StringNullableFilter<"SpotifyCache"> | string | null
    albumImage?: StringNullableFilter<"SpotifyCache"> | string | null
    isPlaying?: BoolFilter<"SpotifyCache"> | boolean
    trackId?: StringNullableFilter<"SpotifyCache"> | string | null
    cachedAt?: DateTimeFilter<"SpotifyCache"> | Date | string
    expiresAt?: DateTimeFilter<"SpotifyCache"> | Date | string
  }, "id" | "userId">

  export type SpotifyCacheOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    trackName?: SortOrderInput | SortOrder
    artistName?: SortOrderInput | SortOrder
    albumName?: SortOrderInput | SortOrder
    albumImage?: SortOrderInput | SortOrder
    isPlaying?: SortOrder
    trackId?: SortOrderInput | SortOrder
    cachedAt?: SortOrder
    expiresAt?: SortOrder
    _count?: SpotifyCacheCountOrderByAggregateInput
    _max?: SpotifyCacheMaxOrderByAggregateInput
    _min?: SpotifyCacheMinOrderByAggregateInput
  }

  export type SpotifyCacheScalarWhereWithAggregatesInput = {
    AND?: SpotifyCacheScalarWhereWithAggregatesInput | SpotifyCacheScalarWhereWithAggregatesInput[]
    OR?: SpotifyCacheScalarWhereWithAggregatesInput[]
    NOT?: SpotifyCacheScalarWhereWithAggregatesInput | SpotifyCacheScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SpotifyCache"> | string
    userId?: StringWithAggregatesFilter<"SpotifyCache"> | string
    trackName?: StringNullableWithAggregatesFilter<"SpotifyCache"> | string | null
    artistName?: StringNullableWithAggregatesFilter<"SpotifyCache"> | string | null
    albumName?: StringNullableWithAggregatesFilter<"SpotifyCache"> | string | null
    albumImage?: StringNullableWithAggregatesFilter<"SpotifyCache"> | string | null
    isPlaying?: BoolWithAggregatesFilter<"SpotifyCache"> | boolean
    trackId?: StringNullableWithAggregatesFilter<"SpotifyCache"> | string | null
    cachedAt?: DateTimeWithAggregatesFilter<"SpotifyCache"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"SpotifyCache"> | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    logo?: string | null
    version?: string | null
    website?: string | null
    isDone?: boolean
    isReceivingUpdates?: boolean
    isInProduction?: boolean
    description: string
    previewImage?: string | null
    category: $Enums.ProjectCategory
    type: $Enums.ProjectType
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    technologies?: ProjectTechnologyCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    logo?: string | null
    version?: string | null
    website?: string | null
    isDone?: boolean
    isReceivingUpdates?: boolean
    isInProduction?: boolean
    description: string
    previewImage?: string | null
    category: $Enums.ProjectCategory
    type: $Enums.ProjectType
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    technologies?: ProjectTechnologyUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isReceivingUpdates?: BoolFieldUpdateOperationsInput | boolean
    isInProduction?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    previewImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProjectCategoryFieldUpdateOperationsInput | $Enums.ProjectCategory
    type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technologies?: ProjectTechnologyUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isReceivingUpdates?: BoolFieldUpdateOperationsInput | boolean
    isInProduction?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    previewImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProjectCategoryFieldUpdateOperationsInput | $Enums.ProjectCategory
    type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technologies?: ProjectTechnologyUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    logo?: string | null
    version?: string | null
    website?: string | null
    isDone?: boolean
    isReceivingUpdates?: boolean
    isInProduction?: boolean
    description: string
    previewImage?: string | null
    category: $Enums.ProjectCategory
    type: $Enums.ProjectType
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isReceivingUpdates?: BoolFieldUpdateOperationsInput | boolean
    isInProduction?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    previewImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProjectCategoryFieldUpdateOperationsInput | $Enums.ProjectCategory
    type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isReceivingUpdates?: BoolFieldUpdateOperationsInput | boolean
    isInProduction?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    previewImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProjectCategoryFieldUpdateOperationsInput | $Enums.ProjectCategory
    type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTechnologyCreateInput = {
    id?: string
    version?: string | null
    project: ProjectCreateNestedOneWithoutTechnologiesInput
    skill: SkillCreateNestedOneWithoutProjectTechnologiesInput
  }

  export type ProjectTechnologyUncheckedCreateInput = {
    id?: string
    projectId: string
    skillId: string
    version?: string | null
  }

  export type ProjectTechnologyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneRequiredWithoutTechnologiesNestedInput
    skill?: SkillUpdateOneRequiredWithoutProjectTechnologiesNestedInput
  }

  export type ProjectTechnologyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectTechnologyCreateManyInput = {
    id?: string
    projectId: string
    skillId: string
    version?: string | null
  }

  export type ProjectTechnologyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectTechnologyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    icon?: string | null
    category: $Enums.SkillCategory
    isActiveUse?: boolean
    description?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    projectTechnologies?: ProjectTechnologyCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    name: string
    icon?: string | null
    category: $Enums.SkillCategory
    isActiveUse?: boolean
    description?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    projectTechnologies?: ProjectTechnologyUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    isActiveUse?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectTechnologies?: ProjectTechnologyUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    isActiveUse?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectTechnologies?: ProjectTechnologyUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillCreateManyInput = {
    id?: string
    name: string
    icon?: string | null
    category: $Enums.SkillCategory
    isActiveUse?: boolean
    description?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    isActiveUse?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    isActiveUse?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherCacheCreateInput = {
    id?: string
    location: string
    temp_c: number
    temp_f: number
    description: string
    icon: string
    conditionCode: number
    humidity?: number | null
    windSpeed?: number | null
    cachedAt?: Date | string
    expiresAt: Date | string
  }

  export type WeatherCacheUncheckedCreateInput = {
    id?: string
    location: string
    temp_c: number
    temp_f: number
    description: string
    icon: string
    conditionCode: number
    humidity?: number | null
    windSpeed?: number | null
    cachedAt?: Date | string
    expiresAt: Date | string
  }

  export type WeatherCacheUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    temp_c?: FloatFieldUpdateOperationsInput | number
    temp_f?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    conditionCode?: IntFieldUpdateOperationsInput | number
    humidity?: NullableIntFieldUpdateOperationsInput | number | null
    windSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    cachedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherCacheUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    temp_c?: FloatFieldUpdateOperationsInput | number
    temp_f?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    conditionCode?: IntFieldUpdateOperationsInput | number
    humidity?: NullableIntFieldUpdateOperationsInput | number | null
    windSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    cachedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherCacheCreateManyInput = {
    id?: string
    location: string
    temp_c: number
    temp_f: number
    description: string
    icon: string
    conditionCode: number
    humidity?: number | null
    windSpeed?: number | null
    cachedAt?: Date | string
    expiresAt: Date | string
  }

  export type WeatherCacheUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    temp_c?: FloatFieldUpdateOperationsInput | number
    temp_f?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    conditionCode?: IntFieldUpdateOperationsInput | number
    humidity?: NullableIntFieldUpdateOperationsInput | number | null
    windSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    cachedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherCacheUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    temp_c?: FloatFieldUpdateOperationsInput | number
    temp_f?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    conditionCode?: IntFieldUpdateOperationsInput | number
    humidity?: NullableIntFieldUpdateOperationsInput | number | null
    windSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    cachedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotifyCacheCreateInput = {
    id?: string
    userId?: string
    trackName?: string | null
    artistName?: string | null
    albumName?: string | null
    albumImage?: string | null
    isPlaying?: boolean
    trackId?: string | null
    cachedAt?: Date | string
    expiresAt: Date | string
  }

  export type SpotifyCacheUncheckedCreateInput = {
    id?: string
    userId?: string
    trackName?: string | null
    artistName?: string | null
    albumName?: string | null
    albumImage?: string | null
    isPlaying?: boolean
    trackId?: string | null
    cachedAt?: Date | string
    expiresAt: Date | string
  }

  export type SpotifyCacheUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trackName?: NullableStringFieldUpdateOperationsInput | string | null
    artistName?: NullableStringFieldUpdateOperationsInput | string | null
    albumName?: NullableStringFieldUpdateOperationsInput | string | null
    albumImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPlaying?: BoolFieldUpdateOperationsInput | boolean
    trackId?: NullableStringFieldUpdateOperationsInput | string | null
    cachedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotifyCacheUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trackName?: NullableStringFieldUpdateOperationsInput | string | null
    artistName?: NullableStringFieldUpdateOperationsInput | string | null
    albumName?: NullableStringFieldUpdateOperationsInput | string | null
    albumImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPlaying?: BoolFieldUpdateOperationsInput | boolean
    trackId?: NullableStringFieldUpdateOperationsInput | string | null
    cachedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotifyCacheCreateManyInput = {
    id?: string
    userId?: string
    trackName?: string | null
    artistName?: string | null
    albumName?: string | null
    albumImage?: string | null
    isPlaying?: boolean
    trackId?: string | null
    cachedAt?: Date | string
    expiresAt: Date | string
  }

  export type SpotifyCacheUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trackName?: NullableStringFieldUpdateOperationsInput | string | null
    artistName?: NullableStringFieldUpdateOperationsInput | string | null
    albumName?: NullableStringFieldUpdateOperationsInput | string | null
    albumImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPlaying?: BoolFieldUpdateOperationsInput | boolean
    trackId?: NullableStringFieldUpdateOperationsInput | string | null
    cachedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotifyCacheUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trackName?: NullableStringFieldUpdateOperationsInput | string | null
    artistName?: NullableStringFieldUpdateOperationsInput | string | null
    albumName?: NullableStringFieldUpdateOperationsInput | string | null
    albumImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPlaying?: BoolFieldUpdateOperationsInput | boolean
    trackId?: NullableStringFieldUpdateOperationsInput | string | null
    cachedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumProjectCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectCategory | EnumProjectCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectCategory[] | ListEnumProjectCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectCategory[] | ListEnumProjectCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectCategoryFilter<$PrismaModel> | $Enums.ProjectCategory
  }

  export type EnumProjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeFilter<$PrismaModel> | $Enums.ProjectType
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

  export type ProjectTechnologyListRelationFilter = {
    every?: ProjectTechnologyWhereInput
    some?: ProjectTechnologyWhereInput
    none?: ProjectTechnologyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectTechnologyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    version?: SortOrder
    website?: SortOrder
    isDone?: SortOrder
    isReceivingUpdates?: SortOrder
    isInProduction?: SortOrder
    description?: SortOrder
    previewImage?: SortOrder
    category?: SortOrder
    type?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    version?: SortOrder
    website?: SortOrder
    isDone?: SortOrder
    isReceivingUpdates?: SortOrder
    isInProduction?: SortOrder
    description?: SortOrder
    previewImage?: SortOrder
    category?: SortOrder
    type?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    version?: SortOrder
    website?: SortOrder
    isDone?: SortOrder
    isReceivingUpdates?: SortOrder
    isInProduction?: SortOrder
    description?: SortOrder
    previewImage?: SortOrder
    category?: SortOrder
    type?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    displayOrder?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumProjectCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectCategory | EnumProjectCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectCategory[] | ListEnumProjectCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectCategory[] | ListEnumProjectCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ProjectCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectCategoryFilter<$PrismaModel>
    _max?: NestedEnumProjectCategoryFilter<$PrismaModel>
  }

  export type EnumProjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectTypeFilter<$PrismaModel>
    _max?: NestedEnumProjectTypeFilter<$PrismaModel>
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

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type SkillScalarRelationFilter = {
    is?: SkillWhereInput
    isNot?: SkillWhereInput
  }

  export type ProjectTechnologyCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    skillId?: SortOrder
    version?: SortOrder
  }

  export type ProjectTechnologyMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    skillId?: SortOrder
    version?: SortOrder
  }

  export type ProjectTechnologyMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    skillId?: SortOrder
    version?: SortOrder
  }

  export type EnumSkillCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillCategory | EnumSkillCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillCategoryFilter<$PrismaModel> | $Enums.SkillCategory
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    isActiveUse?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillAvgOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    isActiveUse?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    isActiveUse?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillSumOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type EnumSkillCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillCategory | EnumSkillCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillCategoryWithAggregatesFilter<$PrismaModel> | $Enums.SkillCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillCategoryFilter<$PrismaModel>
    _max?: NestedEnumSkillCategoryFilter<$PrismaModel>
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

  export type WeatherCacheCountOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    temp_c?: SortOrder
    temp_f?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    conditionCode?: SortOrder
    humidity?: SortOrder
    windSpeed?: SortOrder
    cachedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type WeatherCacheAvgOrderByAggregateInput = {
    temp_c?: SortOrder
    temp_f?: SortOrder
    conditionCode?: SortOrder
    humidity?: SortOrder
    windSpeed?: SortOrder
  }

  export type WeatherCacheMaxOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    temp_c?: SortOrder
    temp_f?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    conditionCode?: SortOrder
    humidity?: SortOrder
    windSpeed?: SortOrder
    cachedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type WeatherCacheMinOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    temp_c?: SortOrder
    temp_f?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    conditionCode?: SortOrder
    humidity?: SortOrder
    windSpeed?: SortOrder
    cachedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type WeatherCacheSumOrderByAggregateInput = {
    temp_c?: SortOrder
    temp_f?: SortOrder
    conditionCode?: SortOrder
    humidity?: SortOrder
    windSpeed?: SortOrder
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

  export type SpotifyCacheCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trackName?: SortOrder
    artistName?: SortOrder
    albumName?: SortOrder
    albumImage?: SortOrder
    isPlaying?: SortOrder
    trackId?: SortOrder
    cachedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type SpotifyCacheMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trackName?: SortOrder
    artistName?: SortOrder
    albumName?: SortOrder
    albumImage?: SortOrder
    isPlaying?: SortOrder
    trackId?: SortOrder
    cachedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type SpotifyCacheMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trackName?: SortOrder
    artistName?: SortOrder
    albumName?: SortOrder
    albumImage?: SortOrder
    isPlaying?: SortOrder
    trackId?: SortOrder
    cachedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type ProjectTechnologyCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectTechnologyCreateWithoutProjectInput, ProjectTechnologyUncheckedCreateWithoutProjectInput> | ProjectTechnologyCreateWithoutProjectInput[] | ProjectTechnologyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTechnologyCreateOrConnectWithoutProjectInput | ProjectTechnologyCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectTechnologyCreateManyProjectInputEnvelope
    connect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
  }

  export type ProjectTechnologyUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectTechnologyCreateWithoutProjectInput, ProjectTechnologyUncheckedCreateWithoutProjectInput> | ProjectTechnologyCreateWithoutProjectInput[] | ProjectTechnologyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTechnologyCreateOrConnectWithoutProjectInput | ProjectTechnologyCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectTechnologyCreateManyProjectInputEnvelope
    connect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
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

  export type EnumProjectCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ProjectCategory
  }

  export type EnumProjectTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProjectType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectTechnologyUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectTechnologyCreateWithoutProjectInput, ProjectTechnologyUncheckedCreateWithoutProjectInput> | ProjectTechnologyCreateWithoutProjectInput[] | ProjectTechnologyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTechnologyCreateOrConnectWithoutProjectInput | ProjectTechnologyCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectTechnologyUpsertWithWhereUniqueWithoutProjectInput | ProjectTechnologyUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectTechnologyCreateManyProjectInputEnvelope
    set?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    disconnect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    delete?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    connect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    update?: ProjectTechnologyUpdateWithWhereUniqueWithoutProjectInput | ProjectTechnologyUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectTechnologyUpdateManyWithWhereWithoutProjectInput | ProjectTechnologyUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectTechnologyScalarWhereInput | ProjectTechnologyScalarWhereInput[]
  }

  export type ProjectTechnologyUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectTechnologyCreateWithoutProjectInput, ProjectTechnologyUncheckedCreateWithoutProjectInput> | ProjectTechnologyCreateWithoutProjectInput[] | ProjectTechnologyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTechnologyCreateOrConnectWithoutProjectInput | ProjectTechnologyCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectTechnologyUpsertWithWhereUniqueWithoutProjectInput | ProjectTechnologyUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectTechnologyCreateManyProjectInputEnvelope
    set?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    disconnect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    delete?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    connect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    update?: ProjectTechnologyUpdateWithWhereUniqueWithoutProjectInput | ProjectTechnologyUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectTechnologyUpdateManyWithWhereWithoutProjectInput | ProjectTechnologyUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectTechnologyScalarWhereInput | ProjectTechnologyScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutTechnologiesInput = {
    create?: XOR<ProjectCreateWithoutTechnologiesInput, ProjectUncheckedCreateWithoutTechnologiesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTechnologiesInput
    connect?: ProjectWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutProjectTechnologiesInput = {
    create?: XOR<SkillCreateWithoutProjectTechnologiesInput, SkillUncheckedCreateWithoutProjectTechnologiesInput>
    connectOrCreate?: SkillCreateOrConnectWithoutProjectTechnologiesInput
    connect?: SkillWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutTechnologiesNestedInput = {
    create?: XOR<ProjectCreateWithoutTechnologiesInput, ProjectUncheckedCreateWithoutTechnologiesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTechnologiesInput
    upsert?: ProjectUpsertWithoutTechnologiesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTechnologiesInput, ProjectUpdateWithoutTechnologiesInput>, ProjectUncheckedUpdateWithoutTechnologiesInput>
  }

  export type SkillUpdateOneRequiredWithoutProjectTechnologiesNestedInput = {
    create?: XOR<SkillCreateWithoutProjectTechnologiesInput, SkillUncheckedCreateWithoutProjectTechnologiesInput>
    connectOrCreate?: SkillCreateOrConnectWithoutProjectTechnologiesInput
    upsert?: SkillUpsertWithoutProjectTechnologiesInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutProjectTechnologiesInput, SkillUpdateWithoutProjectTechnologiesInput>, SkillUncheckedUpdateWithoutProjectTechnologiesInput>
  }

  export type ProjectTechnologyCreateNestedManyWithoutSkillInput = {
    create?: XOR<ProjectTechnologyCreateWithoutSkillInput, ProjectTechnologyUncheckedCreateWithoutSkillInput> | ProjectTechnologyCreateWithoutSkillInput[] | ProjectTechnologyUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ProjectTechnologyCreateOrConnectWithoutSkillInput | ProjectTechnologyCreateOrConnectWithoutSkillInput[]
    createMany?: ProjectTechnologyCreateManySkillInputEnvelope
    connect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
  }

  export type ProjectTechnologyUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<ProjectTechnologyCreateWithoutSkillInput, ProjectTechnologyUncheckedCreateWithoutSkillInput> | ProjectTechnologyCreateWithoutSkillInput[] | ProjectTechnologyUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ProjectTechnologyCreateOrConnectWithoutSkillInput | ProjectTechnologyCreateOrConnectWithoutSkillInput[]
    createMany?: ProjectTechnologyCreateManySkillInputEnvelope
    connect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
  }

  export type EnumSkillCategoryFieldUpdateOperationsInput = {
    set?: $Enums.SkillCategory
  }

  export type ProjectTechnologyUpdateManyWithoutSkillNestedInput = {
    create?: XOR<ProjectTechnologyCreateWithoutSkillInput, ProjectTechnologyUncheckedCreateWithoutSkillInput> | ProjectTechnologyCreateWithoutSkillInput[] | ProjectTechnologyUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ProjectTechnologyCreateOrConnectWithoutSkillInput | ProjectTechnologyCreateOrConnectWithoutSkillInput[]
    upsert?: ProjectTechnologyUpsertWithWhereUniqueWithoutSkillInput | ProjectTechnologyUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: ProjectTechnologyCreateManySkillInputEnvelope
    set?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    disconnect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    delete?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    connect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    update?: ProjectTechnologyUpdateWithWhereUniqueWithoutSkillInput | ProjectTechnologyUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: ProjectTechnologyUpdateManyWithWhereWithoutSkillInput | ProjectTechnologyUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: ProjectTechnologyScalarWhereInput | ProjectTechnologyScalarWhereInput[]
  }

  export type ProjectTechnologyUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<ProjectTechnologyCreateWithoutSkillInput, ProjectTechnologyUncheckedCreateWithoutSkillInput> | ProjectTechnologyCreateWithoutSkillInput[] | ProjectTechnologyUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: ProjectTechnologyCreateOrConnectWithoutSkillInput | ProjectTechnologyCreateOrConnectWithoutSkillInput[]
    upsert?: ProjectTechnologyUpsertWithWhereUniqueWithoutSkillInput | ProjectTechnologyUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: ProjectTechnologyCreateManySkillInputEnvelope
    set?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    disconnect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    delete?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    connect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    update?: ProjectTechnologyUpdateWithWhereUniqueWithoutSkillInput | ProjectTechnologyUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: ProjectTechnologyUpdateManyWithWhereWithoutSkillInput | ProjectTechnologyUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: ProjectTechnologyScalarWhereInput | ProjectTechnologyScalarWhereInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
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

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedEnumProjectCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectCategory | EnumProjectCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectCategory[] | ListEnumProjectCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectCategory[] | ListEnumProjectCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectCategoryFilter<$PrismaModel> | $Enums.ProjectCategory
  }

  export type NestedEnumProjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeFilter<$PrismaModel> | $Enums.ProjectType
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumProjectCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectCategory | EnumProjectCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectCategory[] | ListEnumProjectCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectCategory[] | ListEnumProjectCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ProjectCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectCategoryFilter<$PrismaModel>
    _max?: NestedEnumProjectCategoryFilter<$PrismaModel>
  }

  export type NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectTypeFilter<$PrismaModel>
    _max?: NestedEnumProjectTypeFilter<$PrismaModel>
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

  export type NestedEnumSkillCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillCategory | EnumSkillCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillCategoryFilter<$PrismaModel> | $Enums.SkillCategory
  }

  export type NestedEnumSkillCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillCategory | EnumSkillCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillCategoryWithAggregatesFilter<$PrismaModel> | $Enums.SkillCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillCategoryFilter<$PrismaModel>
    _max?: NestedEnumSkillCategoryFilter<$PrismaModel>
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

  export type ProjectTechnologyCreateWithoutProjectInput = {
    id?: string
    version?: string | null
    skill: SkillCreateNestedOneWithoutProjectTechnologiesInput
  }

  export type ProjectTechnologyUncheckedCreateWithoutProjectInput = {
    id?: string
    skillId: string
    version?: string | null
  }

  export type ProjectTechnologyCreateOrConnectWithoutProjectInput = {
    where: ProjectTechnologyWhereUniqueInput
    create: XOR<ProjectTechnologyCreateWithoutProjectInput, ProjectTechnologyUncheckedCreateWithoutProjectInput>
  }

  export type ProjectTechnologyCreateManyProjectInputEnvelope = {
    data: ProjectTechnologyCreateManyProjectInput | ProjectTechnologyCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectTechnologyUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectTechnologyWhereUniqueInput
    update: XOR<ProjectTechnologyUpdateWithoutProjectInput, ProjectTechnologyUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectTechnologyCreateWithoutProjectInput, ProjectTechnologyUncheckedCreateWithoutProjectInput>
  }

  export type ProjectTechnologyUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectTechnologyWhereUniqueInput
    data: XOR<ProjectTechnologyUpdateWithoutProjectInput, ProjectTechnologyUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectTechnologyUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectTechnologyScalarWhereInput
    data: XOR<ProjectTechnologyUpdateManyMutationInput, ProjectTechnologyUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectTechnologyScalarWhereInput = {
    AND?: ProjectTechnologyScalarWhereInput | ProjectTechnologyScalarWhereInput[]
    OR?: ProjectTechnologyScalarWhereInput[]
    NOT?: ProjectTechnologyScalarWhereInput | ProjectTechnologyScalarWhereInput[]
    id?: StringFilter<"ProjectTechnology"> | string
    projectId?: StringFilter<"ProjectTechnology"> | string
    skillId?: StringFilter<"ProjectTechnology"> | string
    version?: StringNullableFilter<"ProjectTechnology"> | string | null
  }

  export type ProjectCreateWithoutTechnologiesInput = {
    id?: string
    name: string
    logo?: string | null
    version?: string | null
    website?: string | null
    isDone?: boolean
    isReceivingUpdates?: boolean
    isInProduction?: boolean
    description: string
    previewImage?: string | null
    category: $Enums.ProjectCategory
    type: $Enums.ProjectType
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUncheckedCreateWithoutTechnologiesInput = {
    id?: string
    name: string
    logo?: string | null
    version?: string | null
    website?: string | null
    isDone?: boolean
    isReceivingUpdates?: boolean
    isInProduction?: boolean
    description: string
    previewImage?: string | null
    category: $Enums.ProjectCategory
    type: $Enums.ProjectType
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutTechnologiesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTechnologiesInput, ProjectUncheckedCreateWithoutTechnologiesInput>
  }

  export type SkillCreateWithoutProjectTechnologiesInput = {
    id?: string
    name: string
    icon?: string | null
    category: $Enums.SkillCategory
    isActiveUse?: boolean
    description?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUncheckedCreateWithoutProjectTechnologiesInput = {
    id?: string
    name: string
    icon?: string | null
    category: $Enums.SkillCategory
    isActiveUse?: boolean
    description?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillCreateOrConnectWithoutProjectTechnologiesInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutProjectTechnologiesInput, SkillUncheckedCreateWithoutProjectTechnologiesInput>
  }

  export type ProjectUpsertWithoutTechnologiesInput = {
    update: XOR<ProjectUpdateWithoutTechnologiesInput, ProjectUncheckedUpdateWithoutTechnologiesInput>
    create: XOR<ProjectCreateWithoutTechnologiesInput, ProjectUncheckedCreateWithoutTechnologiesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTechnologiesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTechnologiesInput, ProjectUncheckedUpdateWithoutTechnologiesInput>
  }

  export type ProjectUpdateWithoutTechnologiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isReceivingUpdates?: BoolFieldUpdateOperationsInput | boolean
    isInProduction?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    previewImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProjectCategoryFieldUpdateOperationsInput | $Enums.ProjectCategory
    type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutTechnologiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isReceivingUpdates?: BoolFieldUpdateOperationsInput | boolean
    isInProduction?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    previewImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProjectCategoryFieldUpdateOperationsInput | $Enums.ProjectCategory
    type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUpsertWithoutProjectTechnologiesInput = {
    update: XOR<SkillUpdateWithoutProjectTechnologiesInput, SkillUncheckedUpdateWithoutProjectTechnologiesInput>
    create: XOR<SkillCreateWithoutProjectTechnologiesInput, SkillUncheckedCreateWithoutProjectTechnologiesInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutProjectTechnologiesInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutProjectTechnologiesInput, SkillUncheckedUpdateWithoutProjectTechnologiesInput>
  }

  export type SkillUpdateWithoutProjectTechnologiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    isActiveUse?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateWithoutProjectTechnologiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    isActiveUse?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTechnologyCreateWithoutSkillInput = {
    id?: string
    version?: string | null
    project: ProjectCreateNestedOneWithoutTechnologiesInput
  }

  export type ProjectTechnologyUncheckedCreateWithoutSkillInput = {
    id?: string
    projectId: string
    version?: string | null
  }

  export type ProjectTechnologyCreateOrConnectWithoutSkillInput = {
    where: ProjectTechnologyWhereUniqueInput
    create: XOR<ProjectTechnologyCreateWithoutSkillInput, ProjectTechnologyUncheckedCreateWithoutSkillInput>
  }

  export type ProjectTechnologyCreateManySkillInputEnvelope = {
    data: ProjectTechnologyCreateManySkillInput | ProjectTechnologyCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type ProjectTechnologyUpsertWithWhereUniqueWithoutSkillInput = {
    where: ProjectTechnologyWhereUniqueInput
    update: XOR<ProjectTechnologyUpdateWithoutSkillInput, ProjectTechnologyUncheckedUpdateWithoutSkillInput>
    create: XOR<ProjectTechnologyCreateWithoutSkillInput, ProjectTechnologyUncheckedCreateWithoutSkillInput>
  }

  export type ProjectTechnologyUpdateWithWhereUniqueWithoutSkillInput = {
    where: ProjectTechnologyWhereUniqueInput
    data: XOR<ProjectTechnologyUpdateWithoutSkillInput, ProjectTechnologyUncheckedUpdateWithoutSkillInput>
  }

  export type ProjectTechnologyUpdateManyWithWhereWithoutSkillInput = {
    where: ProjectTechnologyScalarWhereInput
    data: XOR<ProjectTechnologyUpdateManyMutationInput, ProjectTechnologyUncheckedUpdateManyWithoutSkillInput>
  }

  export type ProjectTechnologyCreateManyProjectInput = {
    id?: string
    skillId: string
    version?: string | null
  }

  export type ProjectTechnologyUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: SkillUpdateOneRequiredWithoutProjectTechnologiesNestedInput
  }

  export type ProjectTechnologyUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectTechnologyUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectTechnologyCreateManySkillInput = {
    id?: string
    projectId: string
    version?: string | null
  }

  export type ProjectTechnologyUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneRequiredWithoutTechnologiesNestedInput
  }

  export type ProjectTechnologyUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectTechnologyUncheckedUpdateManyWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
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