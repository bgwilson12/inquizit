import { z } from 'zod';
import { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

// JSON
//------------------------------------------------------

export type NullableJsonInput = Prisma.JsonValue | null | 'JsonNull' | 'DbNull' | Prisma.NullTypes.DbNull | Prisma.NullTypes.JsonNull;

export const transformJsonNull = (v?: NullableJsonInput) => {
  if (!v || v === 'DbNull') return Prisma.NullTypes.DbNull;
  if (v === 'JsonNull') return Prisma.NullTypes.JsonNull;
  return v;
};

export const JsonValueSchema: z.ZodType<Prisma.JsonValue> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.literal(null),
    z.record(z.string(), z.lazy(() => JsonValueSchema.optional())),
    z.array(z.lazy(() => JsonValueSchema)),
  ])
);

export type JsonValueType = z.infer<typeof JsonValueSchema>;

export const NullableJsonValue = z
  .union([JsonValueSchema, z.literal('DbNull'), z.literal('JsonNull')])
  .nullable()
  .transform((v) => transformJsonNull(v));

export type NullableJsonValueType = z.infer<typeof NullableJsonValue>;

export const InputJsonValueSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.object({ toJSON: z.any() }),
    z.record(z.string(), z.lazy(() => z.union([InputJsonValueSchema, z.literal(null)]))),
    z.array(z.lazy(() => z.union([InputJsonValueSchema, z.literal(null)]))),
  ])
);

export type InputJsonValueType = z.infer<typeof InputJsonValueSchema>;


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const QuizScalarFieldEnumSchema = z.enum(['id','quizName','questions','createdAt','updatedAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const JsonNullValueInputSchema = z.enum(['JsonNull',]).transform((value) => (value === 'JsonNull' ? Prisma.JsonNull : value));

export const QueryModeSchema = z.enum(['default','insensitive']);

export const JsonNullValueFilterSchema = z.enum(['DbNull','JsonNull','AnyNull',]).transform((value) => value === 'JsonNull' ? Prisma.JsonNull : value === 'DbNull' ? Prisma.DbNull : value === 'AnyNull' ? Prisma.AnyNull : value);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// QUIZ SCHEMA
/////////////////////////////////////////

export const QuizSchema = z.object({
  id: z.uuid(),
  quizName: z.string(),
  questions: JsonValueSchema,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Quiz = z.infer<typeof QuizSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// QUIZ
//------------------------------------------------------

export const QuizSelectSchema: z.ZodType<Prisma.QuizSelect> = z.object({
  id: z.boolean().optional(),
  quizName: z.boolean().optional(),
  questions: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const QuizWhereInputSchema: z.ZodType<Prisma.QuizWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => QuizWhereInputSchema), z.lazy(() => QuizWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuizWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuizWhereInputSchema), z.lazy(() => QuizWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  quizName: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  questions: z.lazy(() => JsonFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export const QuizOrderByWithRelationInputSchema: z.ZodType<Prisma.QuizOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  quizName: z.lazy(() => SortOrderSchema).optional(),
  questions: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const QuizWhereUniqueInputSchema: z.ZodType<Prisma.QuizWhereUniqueInput> = z.object({
  id: z.uuid(),
})
.and(z.strictObject({
  id: z.uuid().optional(),
  AND: z.union([ z.lazy(() => QuizWhereInputSchema), z.lazy(() => QuizWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuizWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuizWhereInputSchema), z.lazy(() => QuizWhereInputSchema).array() ]).optional(),
  quizName: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  questions: z.lazy(() => JsonFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
}));

export const QuizOrderByWithAggregationInputSchema: z.ZodType<Prisma.QuizOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  quizName: z.lazy(() => SortOrderSchema).optional(),
  questions: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => QuizCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => QuizMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => QuizMinOrderByAggregateInputSchema).optional(),
});

export const QuizScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.QuizScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => QuizScalarWhereWithAggregatesInputSchema), z.lazy(() => QuizScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuizScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuizScalarWhereWithAggregatesInputSchema), z.lazy(() => QuizScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  quizName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  questions: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export const QuizCreateInputSchema: z.ZodType<Prisma.QuizCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  quizName: z.string(),
  questions: z.union([ z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const QuizUncheckedCreateInputSchema: z.ZodType<Prisma.QuizUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  quizName: z.string(),
  questions: z.union([ z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const QuizUpdateInputSchema: z.ZodType<Prisma.QuizUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  questions: z.union([ z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const QuizUncheckedUpdateInputSchema: z.ZodType<Prisma.QuizUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  questions: z.union([ z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const QuizCreateManyInputSchema: z.ZodType<Prisma.QuizCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  quizName: z.string(),
  questions: z.union([ z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const QuizUpdateManyMutationInputSchema: z.ZodType<Prisma.QuizUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  questions: z.union([ z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const QuizUncheckedUpdateManyInputSchema: z.ZodType<Prisma.QuizUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  questions: z.union([ z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
});

export const JsonFilterSchema: z.ZodType<Prisma.JsonFilter> = z.strictObject({
  equals: InputJsonValueSchema.optional(),
  path: z.string().array().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_starts_with: InputJsonValueSchema.optional().nullable(),
  array_ends_with: InputJsonValueSchema.optional().nullable(),
  array_contains: InputJsonValueSchema.optional().nullable(),
  lt: InputJsonValueSchema.optional(),
  lte: InputJsonValueSchema.optional(),
  gt: InputJsonValueSchema.optional(),
  gte: InputJsonValueSchema.optional(),
  not: InputJsonValueSchema.optional(),
});

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
});

export const QuizCountOrderByAggregateInputSchema: z.ZodType<Prisma.QuizCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  quizName: z.lazy(() => SortOrderSchema).optional(),
  questions: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const QuizMaxOrderByAggregateInputSchema: z.ZodType<Prisma.QuizMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  quizName: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const QuizMinOrderByAggregateInputSchema: z.ZodType<Prisma.QuizMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  quizName: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
});

export const JsonWithAggregatesFilterSchema: z.ZodType<Prisma.JsonWithAggregatesFilter> = z.strictObject({
  equals: InputJsonValueSchema.optional(),
  path: z.string().array().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_starts_with: InputJsonValueSchema.optional().nullable(),
  array_ends_with: InputJsonValueSchema.optional().nullable(),
  array_contains: InputJsonValueSchema.optional().nullable(),
  lt: InputJsonValueSchema.optional(),
  lte: InputJsonValueSchema.optional(),
  gt: InputJsonValueSchema.optional(),
  gte: InputJsonValueSchema.optional(),
  not: InputJsonValueSchema.optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedJsonFilterSchema).optional(),
  _max: z.lazy(() => NestedJsonFilterSchema).optional(),
});

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
});

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.strictObject({
  set: z.string().optional(),
});

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.strictObject({
  set: z.coerce.date().optional(),
});

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
});

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
});

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
});

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
});

export const NestedJsonFilterSchema: z.ZodType<Prisma.NestedJsonFilter> = z.strictObject({
  equals: InputJsonValueSchema.optional(),
  path: z.string().array().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_starts_with: InputJsonValueSchema.optional().nullable(),
  array_ends_with: InputJsonValueSchema.optional().nullable(),
  array_contains: InputJsonValueSchema.optional().nullable(),
  lt: InputJsonValueSchema.optional(),
  lte: InputJsonValueSchema.optional(),
  gt: InputJsonValueSchema.optional(),
  gte: InputJsonValueSchema.optional(),
  not: InputJsonValueSchema.optional(),
});

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
});

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const QuizFindFirstArgsSchema: z.ZodType<Prisma.QuizFindFirstArgs> = z.object({
  select: QuizSelectSchema.optional(),
  where: QuizWhereInputSchema.optional(), 
  orderBy: z.union([ QuizOrderByWithRelationInputSchema.array(), QuizOrderByWithRelationInputSchema ]).optional(),
  cursor: QuizWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ QuizScalarFieldEnumSchema, QuizScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const QuizFindFirstOrThrowArgsSchema: z.ZodType<Prisma.QuizFindFirstOrThrowArgs> = z.object({
  select: QuizSelectSchema.optional(),
  where: QuizWhereInputSchema.optional(), 
  orderBy: z.union([ QuizOrderByWithRelationInputSchema.array(), QuizOrderByWithRelationInputSchema ]).optional(),
  cursor: QuizWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ QuizScalarFieldEnumSchema, QuizScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const QuizFindManyArgsSchema: z.ZodType<Prisma.QuizFindManyArgs> = z.object({
  select: QuizSelectSchema.optional(),
  where: QuizWhereInputSchema.optional(), 
  orderBy: z.union([ QuizOrderByWithRelationInputSchema.array(), QuizOrderByWithRelationInputSchema ]).optional(),
  cursor: QuizWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ QuizScalarFieldEnumSchema, QuizScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const QuizAggregateArgsSchema: z.ZodType<Prisma.QuizAggregateArgs> = z.object({
  where: QuizWhereInputSchema.optional(), 
  orderBy: z.union([ QuizOrderByWithRelationInputSchema.array(), QuizOrderByWithRelationInputSchema ]).optional(),
  cursor: QuizWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const QuizGroupByArgsSchema: z.ZodType<Prisma.QuizGroupByArgs> = z.object({
  where: QuizWhereInputSchema.optional(), 
  orderBy: z.union([ QuizOrderByWithAggregationInputSchema.array(), QuizOrderByWithAggregationInputSchema ]).optional(),
  by: QuizScalarFieldEnumSchema.array(), 
  having: QuizScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const QuizFindUniqueArgsSchema: z.ZodType<Prisma.QuizFindUniqueArgs> = z.object({
  select: QuizSelectSchema.optional(),
  where: QuizWhereUniqueInputSchema, 
}).strict();

export const QuizFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.QuizFindUniqueOrThrowArgs> = z.object({
  select: QuizSelectSchema.optional(),
  where: QuizWhereUniqueInputSchema, 
}).strict();

export const QuizCreateArgsSchema: z.ZodType<Prisma.QuizCreateArgs> = z.object({
  select: QuizSelectSchema.optional(),
  data: z.union([ QuizCreateInputSchema, QuizUncheckedCreateInputSchema ]),
}).strict();

export const QuizUpsertArgsSchema: z.ZodType<Prisma.QuizUpsertArgs> = z.object({
  select: QuizSelectSchema.optional(),
  where: QuizWhereUniqueInputSchema, 
  create: z.union([ QuizCreateInputSchema, QuizUncheckedCreateInputSchema ]),
  update: z.union([ QuizUpdateInputSchema, QuizUncheckedUpdateInputSchema ]),
}).strict();

export const QuizCreateManyArgsSchema: z.ZodType<Prisma.QuizCreateManyArgs> = z.object({
  data: z.union([ QuizCreateManyInputSchema, QuizCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const QuizCreateManyAndReturnArgsSchema: z.ZodType<Prisma.QuizCreateManyAndReturnArgs> = z.object({
  data: z.union([ QuizCreateManyInputSchema, QuizCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const QuizDeleteArgsSchema: z.ZodType<Prisma.QuizDeleteArgs> = z.object({
  select: QuizSelectSchema.optional(),
  where: QuizWhereUniqueInputSchema, 
}).strict();

export const QuizUpdateArgsSchema: z.ZodType<Prisma.QuizUpdateArgs> = z.object({
  select: QuizSelectSchema.optional(),
  data: z.union([ QuizUpdateInputSchema, QuizUncheckedUpdateInputSchema ]),
  where: QuizWhereUniqueInputSchema, 
}).strict();

export const QuizUpdateManyArgsSchema: z.ZodType<Prisma.QuizUpdateManyArgs> = z.object({
  data: z.union([ QuizUpdateManyMutationInputSchema, QuizUncheckedUpdateManyInputSchema ]),
  where: QuizWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const QuizUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.QuizUpdateManyAndReturnArgs> = z.object({
  data: z.union([ QuizUpdateManyMutationInputSchema, QuizUncheckedUpdateManyInputSchema ]),
  where: QuizWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const QuizDeleteManyArgsSchema: z.ZodType<Prisma.QuizDeleteManyArgs> = z.object({
  where: QuizWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();