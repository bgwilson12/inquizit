import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const QuizScalarFieldEnumSchema = z.enum(['id','quizName','createdAt','updatedAt']);

export const QuestionScalarFieldEnumSchema = z.enum(['id','quizId','text','answers','correctAnswer']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// QUIZ SCHEMA
/////////////////////////////////////////

export const QuizSchema = z.object({
  id: z.uuid(),
  quizName: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Quiz = z.infer<typeof QuizSchema>

/////////////////////////////////////////
// QUESTION SCHEMA
/////////////////////////////////////////

export const QuestionSchema = z.object({
  id: z.uuid(),
  quizId: z.string(),
  text: z.string(),
  answers: z.string().array(),
  correctAnswer: z.string(),
})

export type Question = z.infer<typeof QuestionSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// QUIZ
//------------------------------------------------------

export const QuizIncludeSchema: z.ZodType<Prisma.QuizInclude> = z.object({
  questions: z.union([z.boolean(),z.lazy(() => QuestionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => QuizCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const QuizArgsSchema: z.ZodType<Prisma.QuizDefaultArgs> = z.object({
  select: z.lazy(() => QuizSelectSchema).optional(),
  include: z.lazy(() => QuizIncludeSchema).optional(),
}).strict();

export const QuizCountOutputTypeArgsSchema: z.ZodType<Prisma.QuizCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => QuizCountOutputTypeSelectSchema).nullish(),
}).strict();

export const QuizCountOutputTypeSelectSchema: z.ZodType<Prisma.QuizCountOutputTypeSelect> = z.object({
  questions: z.boolean().optional(),
}).strict();

export const QuizSelectSchema: z.ZodType<Prisma.QuizSelect> = z.object({
  id: z.boolean().optional(),
  quizName: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  questions: z.union([z.boolean(),z.lazy(() => QuestionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => QuizCountOutputTypeArgsSchema)]).optional(),
}).strict()

// QUESTION
//------------------------------------------------------

export const QuestionIncludeSchema: z.ZodType<Prisma.QuestionInclude> = z.object({
  quiz: z.union([z.boolean(),z.lazy(() => QuizArgsSchema)]).optional(),
}).strict();

export const QuestionArgsSchema: z.ZodType<Prisma.QuestionDefaultArgs> = z.object({
  select: z.lazy(() => QuestionSelectSchema).optional(),
  include: z.lazy(() => QuestionIncludeSchema).optional(),
}).strict();

export const QuestionSelectSchema: z.ZodType<Prisma.QuestionSelect> = z.object({
  id: z.boolean().optional(),
  quizId: z.boolean().optional(),
  text: z.boolean().optional(),
  answers: z.boolean().optional(),
  correctAnswer: z.boolean().optional(),
  quiz: z.union([z.boolean(),z.lazy(() => QuizArgsSchema)]).optional(),
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
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  questions: z.lazy(() => QuestionListRelationFilterSchema).optional(),
});

export const QuizOrderByWithRelationInputSchema: z.ZodType<Prisma.QuizOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  quizName: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  questions: z.lazy(() => QuestionOrderByRelationAggregateInputSchema).optional(),
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
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  questions: z.lazy(() => QuestionListRelationFilterSchema).optional(),
}));

export const QuizOrderByWithAggregationInputSchema: z.ZodType<Prisma.QuizOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  quizName: z.lazy(() => SortOrderSchema).optional(),
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
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export const QuestionWhereInputSchema: z.ZodType<Prisma.QuestionWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => QuestionWhereInputSchema), z.lazy(() => QuestionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuestionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuestionWhereInputSchema), z.lazy(() => QuestionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  quizId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  text: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  answers: z.lazy(() => StringNullableListFilterSchema).optional(),
  correctAnswer: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  quiz: z.union([ z.lazy(() => QuizScalarRelationFilterSchema), z.lazy(() => QuizWhereInputSchema) ]).optional(),
});

export const QuestionOrderByWithRelationInputSchema: z.ZodType<Prisma.QuestionOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  quizId: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  answers: z.lazy(() => SortOrderSchema).optional(),
  correctAnswer: z.lazy(() => SortOrderSchema).optional(),
  quiz: z.lazy(() => QuizOrderByWithRelationInputSchema).optional(),
});

export const QuestionWhereUniqueInputSchema: z.ZodType<Prisma.QuestionWhereUniqueInput> = z.object({
  id: z.uuid(),
})
.and(z.strictObject({
  id: z.uuid().optional(),
  AND: z.union([ z.lazy(() => QuestionWhereInputSchema), z.lazy(() => QuestionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuestionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuestionWhereInputSchema), z.lazy(() => QuestionWhereInputSchema).array() ]).optional(),
  quizId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  text: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  answers: z.lazy(() => StringNullableListFilterSchema).optional(),
  correctAnswer: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  quiz: z.union([ z.lazy(() => QuizScalarRelationFilterSchema), z.lazy(() => QuizWhereInputSchema) ]).optional(),
}));

export const QuestionOrderByWithAggregationInputSchema: z.ZodType<Prisma.QuestionOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  quizId: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  answers: z.lazy(() => SortOrderSchema).optional(),
  correctAnswer: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => QuestionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => QuestionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => QuestionMinOrderByAggregateInputSchema).optional(),
});

export const QuestionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.QuestionScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => QuestionScalarWhereWithAggregatesInputSchema), z.lazy(() => QuestionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuestionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuestionScalarWhereWithAggregatesInputSchema), z.lazy(() => QuestionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  quizId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  text: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  answers: z.lazy(() => StringNullableListFilterSchema).optional(),
  correctAnswer: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
});

export const QuizCreateInputSchema: z.ZodType<Prisma.QuizCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  quizName: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  questions: z.lazy(() => QuestionCreateNestedManyWithoutQuizInputSchema).optional(),
});

export const QuizUncheckedCreateInputSchema: z.ZodType<Prisma.QuizUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  quizName: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  questions: z.lazy(() => QuestionUncheckedCreateNestedManyWithoutQuizInputSchema).optional(),
});

export const QuizUpdateInputSchema: z.ZodType<Prisma.QuizUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  questions: z.lazy(() => QuestionUpdateManyWithoutQuizNestedInputSchema).optional(),
});

export const QuizUncheckedUpdateInputSchema: z.ZodType<Prisma.QuizUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  questions: z.lazy(() => QuestionUncheckedUpdateManyWithoutQuizNestedInputSchema).optional(),
});

export const QuizCreateManyInputSchema: z.ZodType<Prisma.QuizCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  quizName: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const QuizUpdateManyMutationInputSchema: z.ZodType<Prisma.QuizUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const QuizUncheckedUpdateManyInputSchema: z.ZodType<Prisma.QuizUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const QuestionCreateInputSchema: z.ZodType<Prisma.QuestionCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  text: z.string(),
  answers: z.union([ z.lazy(() => QuestionCreateanswersInputSchema), z.string().array() ]).optional(),
  correctAnswer: z.string(),
  quiz: z.lazy(() => QuizCreateNestedOneWithoutQuestionsInputSchema),
});

export const QuestionUncheckedCreateInputSchema: z.ZodType<Prisma.QuestionUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  quizId: z.string(),
  text: z.string(),
  answers: z.union([ z.lazy(() => QuestionCreateanswersInputSchema), z.string().array() ]).optional(),
  correctAnswer: z.string(),
});

export const QuestionUpdateInputSchema: z.ZodType<Prisma.QuestionUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  answers: z.union([ z.lazy(() => QuestionUpdateanswersInputSchema), z.string().array() ]).optional(),
  correctAnswer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quiz: z.lazy(() => QuizUpdateOneRequiredWithoutQuestionsNestedInputSchema).optional(),
});

export const QuestionUncheckedUpdateInputSchema: z.ZodType<Prisma.QuestionUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  answers: z.union([ z.lazy(() => QuestionUpdateanswersInputSchema), z.string().array() ]).optional(),
  correctAnswer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const QuestionCreateManyInputSchema: z.ZodType<Prisma.QuestionCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  quizId: z.string(),
  text: z.string(),
  answers: z.union([ z.lazy(() => QuestionCreateanswersInputSchema), z.string().array() ]).optional(),
  correctAnswer: z.string(),
});

export const QuestionUpdateManyMutationInputSchema: z.ZodType<Prisma.QuestionUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  answers: z.union([ z.lazy(() => QuestionUpdateanswersInputSchema), z.string().array() ]).optional(),
  correctAnswer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const QuestionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.QuestionUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  answers: z.union([ z.lazy(() => QuestionUpdateanswersInputSchema), z.string().array() ]).optional(),
  correctAnswer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
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

export const QuestionListRelationFilterSchema: z.ZodType<Prisma.QuestionListRelationFilter> = z.strictObject({
  every: z.lazy(() => QuestionWhereInputSchema).optional(),
  some: z.lazy(() => QuestionWhereInputSchema).optional(),
  none: z.lazy(() => QuestionWhereInputSchema).optional(),
});

export const QuestionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.QuestionOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export const QuizCountOrderByAggregateInputSchema: z.ZodType<Prisma.QuizCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  quizName: z.lazy(() => SortOrderSchema).optional(),
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

export const StringNullableListFilterSchema: z.ZodType<Prisma.StringNullableListFilter> = z.strictObject({
  equals: z.string().array().optional().nullable(),
  has: z.string().optional().nullable(),
  hasEvery: z.string().array().optional(),
  hasSome: z.string().array().optional(),
  isEmpty: z.boolean().optional(),
});

export const QuizScalarRelationFilterSchema: z.ZodType<Prisma.QuizScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => QuizWhereInputSchema).optional(),
  isNot: z.lazy(() => QuizWhereInputSchema).optional(),
});

export const QuestionCountOrderByAggregateInputSchema: z.ZodType<Prisma.QuestionCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  quizId: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  answers: z.lazy(() => SortOrderSchema).optional(),
  correctAnswer: z.lazy(() => SortOrderSchema).optional(),
});

export const QuestionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.QuestionMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  quizId: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  correctAnswer: z.lazy(() => SortOrderSchema).optional(),
});

export const QuestionMinOrderByAggregateInputSchema: z.ZodType<Prisma.QuestionMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  quizId: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  correctAnswer: z.lazy(() => SortOrderSchema).optional(),
});

export const QuestionCreateNestedManyWithoutQuizInputSchema: z.ZodType<Prisma.QuestionCreateNestedManyWithoutQuizInput> = z.strictObject({
  create: z.union([ z.lazy(() => QuestionCreateWithoutQuizInputSchema), z.lazy(() => QuestionCreateWithoutQuizInputSchema).array(), z.lazy(() => QuestionUncheckedCreateWithoutQuizInputSchema), z.lazy(() => QuestionUncheckedCreateWithoutQuizInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionCreateOrConnectWithoutQuizInputSchema), z.lazy(() => QuestionCreateOrConnectWithoutQuizInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionCreateManyQuizInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema), z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
});

export const QuestionUncheckedCreateNestedManyWithoutQuizInputSchema: z.ZodType<Prisma.QuestionUncheckedCreateNestedManyWithoutQuizInput> = z.strictObject({
  create: z.union([ z.lazy(() => QuestionCreateWithoutQuizInputSchema), z.lazy(() => QuestionCreateWithoutQuizInputSchema).array(), z.lazy(() => QuestionUncheckedCreateWithoutQuizInputSchema), z.lazy(() => QuestionUncheckedCreateWithoutQuizInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionCreateOrConnectWithoutQuizInputSchema), z.lazy(() => QuestionCreateOrConnectWithoutQuizInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionCreateManyQuizInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema), z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
});

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.strictObject({
  set: z.string().optional(),
});

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.strictObject({
  set: z.coerce.date().optional(),
});

export const QuestionUpdateManyWithoutQuizNestedInputSchema: z.ZodType<Prisma.QuestionUpdateManyWithoutQuizNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => QuestionCreateWithoutQuizInputSchema), z.lazy(() => QuestionCreateWithoutQuizInputSchema).array(), z.lazy(() => QuestionUncheckedCreateWithoutQuizInputSchema), z.lazy(() => QuestionUncheckedCreateWithoutQuizInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionCreateOrConnectWithoutQuizInputSchema), z.lazy(() => QuestionCreateOrConnectWithoutQuizInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => QuestionUpsertWithWhereUniqueWithoutQuizInputSchema), z.lazy(() => QuestionUpsertWithWhereUniqueWithoutQuizInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionCreateManyQuizInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema), z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema), z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema), z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema), z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => QuestionUpdateWithWhereUniqueWithoutQuizInputSchema), z.lazy(() => QuestionUpdateWithWhereUniqueWithoutQuizInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => QuestionUpdateManyWithWhereWithoutQuizInputSchema), z.lazy(() => QuestionUpdateManyWithWhereWithoutQuizInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => QuestionScalarWhereInputSchema), z.lazy(() => QuestionScalarWhereInputSchema).array() ]).optional(),
});

export const QuestionUncheckedUpdateManyWithoutQuizNestedInputSchema: z.ZodType<Prisma.QuestionUncheckedUpdateManyWithoutQuizNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => QuestionCreateWithoutQuizInputSchema), z.lazy(() => QuestionCreateWithoutQuizInputSchema).array(), z.lazy(() => QuestionUncheckedCreateWithoutQuizInputSchema), z.lazy(() => QuestionUncheckedCreateWithoutQuizInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionCreateOrConnectWithoutQuizInputSchema), z.lazy(() => QuestionCreateOrConnectWithoutQuizInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => QuestionUpsertWithWhereUniqueWithoutQuizInputSchema), z.lazy(() => QuestionUpsertWithWhereUniqueWithoutQuizInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionCreateManyQuizInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema), z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema), z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema), z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema), z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => QuestionUpdateWithWhereUniqueWithoutQuizInputSchema), z.lazy(() => QuestionUpdateWithWhereUniqueWithoutQuizInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => QuestionUpdateManyWithWhereWithoutQuizInputSchema), z.lazy(() => QuestionUpdateManyWithWhereWithoutQuizInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => QuestionScalarWhereInputSchema), z.lazy(() => QuestionScalarWhereInputSchema).array() ]).optional(),
});

export const QuestionCreateanswersInputSchema: z.ZodType<Prisma.QuestionCreateanswersInput> = z.strictObject({
  set: z.string().array(),
});

export const QuizCreateNestedOneWithoutQuestionsInputSchema: z.ZodType<Prisma.QuizCreateNestedOneWithoutQuestionsInput> = z.strictObject({
  create: z.union([ z.lazy(() => QuizCreateWithoutQuestionsInputSchema), z.lazy(() => QuizUncheckedCreateWithoutQuestionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => QuizCreateOrConnectWithoutQuestionsInputSchema).optional(),
  connect: z.lazy(() => QuizWhereUniqueInputSchema).optional(),
});

export const QuestionUpdateanswersInputSchema: z.ZodType<Prisma.QuestionUpdateanswersInput> = z.strictObject({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
});

export const QuizUpdateOneRequiredWithoutQuestionsNestedInputSchema: z.ZodType<Prisma.QuizUpdateOneRequiredWithoutQuestionsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => QuizCreateWithoutQuestionsInputSchema), z.lazy(() => QuizUncheckedCreateWithoutQuestionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => QuizCreateOrConnectWithoutQuestionsInputSchema).optional(),
  upsert: z.lazy(() => QuizUpsertWithoutQuestionsInputSchema).optional(),
  connect: z.lazy(() => QuizWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => QuizUpdateToOneWithWhereWithoutQuestionsInputSchema), z.lazy(() => QuizUpdateWithoutQuestionsInputSchema), z.lazy(() => QuizUncheckedUpdateWithoutQuestionsInputSchema) ]).optional(),
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

export const QuestionCreateWithoutQuizInputSchema: z.ZodType<Prisma.QuestionCreateWithoutQuizInput> = z.strictObject({
  id: z.uuid().optional(),
  text: z.string(),
  answers: z.union([ z.lazy(() => QuestionCreateanswersInputSchema), z.string().array() ]).optional(),
  correctAnswer: z.string(),
});

export const QuestionUncheckedCreateWithoutQuizInputSchema: z.ZodType<Prisma.QuestionUncheckedCreateWithoutQuizInput> = z.strictObject({
  id: z.uuid().optional(),
  text: z.string(),
  answers: z.union([ z.lazy(() => QuestionCreateanswersInputSchema), z.string().array() ]).optional(),
  correctAnswer: z.string(),
});

export const QuestionCreateOrConnectWithoutQuizInputSchema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutQuizInput> = z.strictObject({
  where: z.lazy(() => QuestionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => QuestionCreateWithoutQuizInputSchema), z.lazy(() => QuestionUncheckedCreateWithoutQuizInputSchema) ]),
});

export const QuestionCreateManyQuizInputEnvelopeSchema: z.ZodType<Prisma.QuestionCreateManyQuizInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => QuestionCreateManyQuizInputSchema), z.lazy(() => QuestionCreateManyQuizInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const QuestionUpsertWithWhereUniqueWithoutQuizInputSchema: z.ZodType<Prisma.QuestionUpsertWithWhereUniqueWithoutQuizInput> = z.strictObject({
  where: z.lazy(() => QuestionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => QuestionUpdateWithoutQuizInputSchema), z.lazy(() => QuestionUncheckedUpdateWithoutQuizInputSchema) ]),
  create: z.union([ z.lazy(() => QuestionCreateWithoutQuizInputSchema), z.lazy(() => QuestionUncheckedCreateWithoutQuizInputSchema) ]),
});

export const QuestionUpdateWithWhereUniqueWithoutQuizInputSchema: z.ZodType<Prisma.QuestionUpdateWithWhereUniqueWithoutQuizInput> = z.strictObject({
  where: z.lazy(() => QuestionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => QuestionUpdateWithoutQuizInputSchema), z.lazy(() => QuestionUncheckedUpdateWithoutQuizInputSchema) ]),
});

export const QuestionUpdateManyWithWhereWithoutQuizInputSchema: z.ZodType<Prisma.QuestionUpdateManyWithWhereWithoutQuizInput> = z.strictObject({
  where: z.lazy(() => QuestionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => QuestionUpdateManyMutationInputSchema), z.lazy(() => QuestionUncheckedUpdateManyWithoutQuizInputSchema) ]),
});

export const QuestionScalarWhereInputSchema: z.ZodType<Prisma.QuestionScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => QuestionScalarWhereInputSchema), z.lazy(() => QuestionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuestionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuestionScalarWhereInputSchema), z.lazy(() => QuestionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  quizId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  text: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  answers: z.lazy(() => StringNullableListFilterSchema).optional(),
  correctAnswer: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
});

export const QuizCreateWithoutQuestionsInputSchema: z.ZodType<Prisma.QuizCreateWithoutQuestionsInput> = z.strictObject({
  id: z.uuid().optional(),
  quizName: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const QuizUncheckedCreateWithoutQuestionsInputSchema: z.ZodType<Prisma.QuizUncheckedCreateWithoutQuestionsInput> = z.strictObject({
  id: z.uuid().optional(),
  quizName: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const QuizCreateOrConnectWithoutQuestionsInputSchema: z.ZodType<Prisma.QuizCreateOrConnectWithoutQuestionsInput> = z.strictObject({
  where: z.lazy(() => QuizWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => QuizCreateWithoutQuestionsInputSchema), z.lazy(() => QuizUncheckedCreateWithoutQuestionsInputSchema) ]),
});

export const QuizUpsertWithoutQuestionsInputSchema: z.ZodType<Prisma.QuizUpsertWithoutQuestionsInput> = z.strictObject({
  update: z.union([ z.lazy(() => QuizUpdateWithoutQuestionsInputSchema), z.lazy(() => QuizUncheckedUpdateWithoutQuestionsInputSchema) ]),
  create: z.union([ z.lazy(() => QuizCreateWithoutQuestionsInputSchema), z.lazy(() => QuizUncheckedCreateWithoutQuestionsInputSchema) ]),
  where: z.lazy(() => QuizWhereInputSchema).optional(),
});

export const QuizUpdateToOneWithWhereWithoutQuestionsInputSchema: z.ZodType<Prisma.QuizUpdateToOneWithWhereWithoutQuestionsInput> = z.strictObject({
  where: z.lazy(() => QuizWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => QuizUpdateWithoutQuestionsInputSchema), z.lazy(() => QuizUncheckedUpdateWithoutQuestionsInputSchema) ]),
});

export const QuizUpdateWithoutQuestionsInputSchema: z.ZodType<Prisma.QuizUpdateWithoutQuestionsInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const QuizUncheckedUpdateWithoutQuestionsInputSchema: z.ZodType<Prisma.QuizUncheckedUpdateWithoutQuestionsInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const QuestionCreateManyQuizInputSchema: z.ZodType<Prisma.QuestionCreateManyQuizInput> = z.strictObject({
  id: z.uuid().optional(),
  text: z.string(),
  answers: z.union([ z.lazy(() => QuestionCreateanswersInputSchema), z.string().array() ]).optional(),
  correctAnswer: z.string(),
});

export const QuestionUpdateWithoutQuizInputSchema: z.ZodType<Prisma.QuestionUpdateWithoutQuizInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  answers: z.union([ z.lazy(() => QuestionUpdateanswersInputSchema), z.string().array() ]).optional(),
  correctAnswer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const QuestionUncheckedUpdateWithoutQuizInputSchema: z.ZodType<Prisma.QuestionUncheckedUpdateWithoutQuizInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  answers: z.union([ z.lazy(() => QuestionUpdateanswersInputSchema), z.string().array() ]).optional(),
  correctAnswer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const QuestionUncheckedUpdateManyWithoutQuizInputSchema: z.ZodType<Prisma.QuestionUncheckedUpdateManyWithoutQuizInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  answers: z.union([ z.lazy(() => QuestionUpdateanswersInputSchema), z.string().array() ]).optional(),
  correctAnswer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const QuizFindFirstArgsSchema: z.ZodType<Prisma.QuizFindFirstArgs> = z.object({
  select: QuizSelectSchema.optional(),
  include: QuizIncludeSchema.optional(),
  where: QuizWhereInputSchema.optional(), 
  orderBy: z.union([ QuizOrderByWithRelationInputSchema.array(), QuizOrderByWithRelationInputSchema ]).optional(),
  cursor: QuizWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ QuizScalarFieldEnumSchema, QuizScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const QuizFindFirstOrThrowArgsSchema: z.ZodType<Prisma.QuizFindFirstOrThrowArgs> = z.object({
  select: QuizSelectSchema.optional(),
  include: QuizIncludeSchema.optional(),
  where: QuizWhereInputSchema.optional(), 
  orderBy: z.union([ QuizOrderByWithRelationInputSchema.array(), QuizOrderByWithRelationInputSchema ]).optional(),
  cursor: QuizWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ QuizScalarFieldEnumSchema, QuizScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const QuizFindManyArgsSchema: z.ZodType<Prisma.QuizFindManyArgs> = z.object({
  select: QuizSelectSchema.optional(),
  include: QuizIncludeSchema.optional(),
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
  include: QuizIncludeSchema.optional(),
  where: QuizWhereUniqueInputSchema, 
}).strict();

export const QuizFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.QuizFindUniqueOrThrowArgs> = z.object({
  select: QuizSelectSchema.optional(),
  include: QuizIncludeSchema.optional(),
  where: QuizWhereUniqueInputSchema, 
}).strict();

export const QuestionFindFirstArgsSchema: z.ZodType<Prisma.QuestionFindFirstArgs> = z.object({
  select: QuestionSelectSchema.optional(),
  include: QuestionIncludeSchema.optional(),
  where: QuestionWhereInputSchema.optional(), 
  orderBy: z.union([ QuestionOrderByWithRelationInputSchema.array(), QuestionOrderByWithRelationInputSchema ]).optional(),
  cursor: QuestionWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ QuestionScalarFieldEnumSchema, QuestionScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const QuestionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.QuestionFindFirstOrThrowArgs> = z.object({
  select: QuestionSelectSchema.optional(),
  include: QuestionIncludeSchema.optional(),
  where: QuestionWhereInputSchema.optional(), 
  orderBy: z.union([ QuestionOrderByWithRelationInputSchema.array(), QuestionOrderByWithRelationInputSchema ]).optional(),
  cursor: QuestionWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ QuestionScalarFieldEnumSchema, QuestionScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const QuestionFindManyArgsSchema: z.ZodType<Prisma.QuestionFindManyArgs> = z.object({
  select: QuestionSelectSchema.optional(),
  include: QuestionIncludeSchema.optional(),
  where: QuestionWhereInputSchema.optional(), 
  orderBy: z.union([ QuestionOrderByWithRelationInputSchema.array(), QuestionOrderByWithRelationInputSchema ]).optional(),
  cursor: QuestionWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ QuestionScalarFieldEnumSchema, QuestionScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const QuestionAggregateArgsSchema: z.ZodType<Prisma.QuestionAggregateArgs> = z.object({
  where: QuestionWhereInputSchema.optional(), 
  orderBy: z.union([ QuestionOrderByWithRelationInputSchema.array(), QuestionOrderByWithRelationInputSchema ]).optional(),
  cursor: QuestionWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const QuestionGroupByArgsSchema: z.ZodType<Prisma.QuestionGroupByArgs> = z.object({
  where: QuestionWhereInputSchema.optional(), 
  orderBy: z.union([ QuestionOrderByWithAggregationInputSchema.array(), QuestionOrderByWithAggregationInputSchema ]).optional(),
  by: QuestionScalarFieldEnumSchema.array(), 
  having: QuestionScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const QuestionFindUniqueArgsSchema: z.ZodType<Prisma.QuestionFindUniqueArgs> = z.object({
  select: QuestionSelectSchema.optional(),
  include: QuestionIncludeSchema.optional(),
  where: QuestionWhereUniqueInputSchema, 
}).strict();

export const QuestionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.QuestionFindUniqueOrThrowArgs> = z.object({
  select: QuestionSelectSchema.optional(),
  include: QuestionIncludeSchema.optional(),
  where: QuestionWhereUniqueInputSchema, 
}).strict();

export const QuizCreateArgsSchema: z.ZodType<Prisma.QuizCreateArgs> = z.object({
  select: QuizSelectSchema.optional(),
  include: QuizIncludeSchema.optional(),
  data: z.union([ QuizCreateInputSchema, QuizUncheckedCreateInputSchema ]),
}).strict();

export const QuizUpsertArgsSchema: z.ZodType<Prisma.QuizUpsertArgs> = z.object({
  select: QuizSelectSchema.optional(),
  include: QuizIncludeSchema.optional(),
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
  include: QuizIncludeSchema.optional(),
  where: QuizWhereUniqueInputSchema, 
}).strict();

export const QuizUpdateArgsSchema: z.ZodType<Prisma.QuizUpdateArgs> = z.object({
  select: QuizSelectSchema.optional(),
  include: QuizIncludeSchema.optional(),
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

export const QuestionCreateArgsSchema: z.ZodType<Prisma.QuestionCreateArgs> = z.object({
  select: QuestionSelectSchema.optional(),
  include: QuestionIncludeSchema.optional(),
  data: z.union([ QuestionCreateInputSchema, QuestionUncheckedCreateInputSchema ]),
}).strict();

export const QuestionUpsertArgsSchema: z.ZodType<Prisma.QuestionUpsertArgs> = z.object({
  select: QuestionSelectSchema.optional(),
  include: QuestionIncludeSchema.optional(),
  where: QuestionWhereUniqueInputSchema, 
  create: z.union([ QuestionCreateInputSchema, QuestionUncheckedCreateInputSchema ]),
  update: z.union([ QuestionUpdateInputSchema, QuestionUncheckedUpdateInputSchema ]),
}).strict();

export const QuestionCreateManyArgsSchema: z.ZodType<Prisma.QuestionCreateManyArgs> = z.object({
  data: z.union([ QuestionCreateManyInputSchema, QuestionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const QuestionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.QuestionCreateManyAndReturnArgs> = z.object({
  data: z.union([ QuestionCreateManyInputSchema, QuestionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const QuestionDeleteArgsSchema: z.ZodType<Prisma.QuestionDeleteArgs> = z.object({
  select: QuestionSelectSchema.optional(),
  include: QuestionIncludeSchema.optional(),
  where: QuestionWhereUniqueInputSchema, 
}).strict();

export const QuestionUpdateArgsSchema: z.ZodType<Prisma.QuestionUpdateArgs> = z.object({
  select: QuestionSelectSchema.optional(),
  include: QuestionIncludeSchema.optional(),
  data: z.union([ QuestionUpdateInputSchema, QuestionUncheckedUpdateInputSchema ]),
  where: QuestionWhereUniqueInputSchema, 
}).strict();

export const QuestionUpdateManyArgsSchema: z.ZodType<Prisma.QuestionUpdateManyArgs> = z.object({
  data: z.union([ QuestionUpdateManyMutationInputSchema, QuestionUncheckedUpdateManyInputSchema ]),
  where: QuestionWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const QuestionUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.QuestionUpdateManyAndReturnArgs> = z.object({
  data: z.union([ QuestionUpdateManyMutationInputSchema, QuestionUncheckedUpdateManyInputSchema ]),
  where: QuestionWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const QuestionDeleteManyArgsSchema: z.ZodType<Prisma.QuestionDeleteManyArgs> = z.object({
  where: QuestionWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();