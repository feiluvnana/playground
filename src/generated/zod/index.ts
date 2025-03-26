import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','username','password','createdAt','updatedAt']);

export const BlogScalarFieldEnumSchema = z.enum(['id','title','content','createdAt','updatedAt','authorId']);

export const TagScalarFieldEnumSchema = z.enum(['id','name','createdAt','updatedAt']);

export const TagsOnBlogsScalarFieldEnumSchema = z.enum(['blogId','tagId','createdAt','updatedAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const UserOrderByRelevanceFieldEnumSchema = z.enum(['id','username','password']);

export const BlogOrderByRelevanceFieldEnumSchema = z.enum(['id','title','content','authorId']);

export const TagOrderByRelevanceFieldEnumSchema = z.enum(['id','name']);

export const TagsOnBlogsOrderByRelevanceFieldEnumSchema = z.enum(['blogId','tagId']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().uuid(),
  username: z.string(),
  password: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// BLOG SCHEMA
/////////////////////////////////////////

export const BlogSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  authorId: z.string(),
})

export type Blog = z.infer<typeof BlogSchema>

/////////////////////////////////////////
// TAG SCHEMA
/////////////////////////////////////////

export const TagSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Tag = z.infer<typeof TagSchema>

/////////////////////////////////////////
// TAGS ON BLOGS SCHEMA
/////////////////////////////////////////

export const TagsOnBlogsSchema = z.object({
  blogId: z.string(),
  tagId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type TagsOnBlogs = z.infer<typeof TagsOnBlogsSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  blogs: z.union([z.boolean(),z.lazy(() => BlogFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  blogs: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  username: z.boolean().optional(),
  password: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  blogs: z.union([z.boolean(),z.lazy(() => BlogFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// BLOG
//------------------------------------------------------

export const BlogIncludeSchema: z.ZodType<Prisma.BlogInclude> = z.object({
  author: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagsOnBlogsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BlogCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BlogArgsSchema: z.ZodType<Prisma.BlogDefaultArgs> = z.object({
  select: z.lazy(() => BlogSelectSchema).optional(),
  include: z.lazy(() => BlogIncludeSchema).optional(),
}).strict();

export const BlogCountOutputTypeArgsSchema: z.ZodType<Prisma.BlogCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BlogCountOutputTypeSelectSchema).nullish(),
}).strict();

export const BlogCountOutputTypeSelectSchema: z.ZodType<Prisma.BlogCountOutputTypeSelect> = z.object({
  tags: z.boolean().optional(),
}).strict();

export const BlogSelectSchema: z.ZodType<Prisma.BlogSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  authorId: z.boolean().optional(),
  author: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagsOnBlogsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BlogCountOutputTypeArgsSchema)]).optional(),
}).strict()

// TAG
//------------------------------------------------------

export const TagIncludeSchema: z.ZodType<Prisma.TagInclude> = z.object({
  blogs: z.union([z.boolean(),z.lazy(() => TagsOnBlogsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TagCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TagArgsSchema: z.ZodType<Prisma.TagDefaultArgs> = z.object({
  select: z.lazy(() => TagSelectSchema).optional(),
  include: z.lazy(() => TagIncludeSchema).optional(),
}).strict();

export const TagCountOutputTypeArgsSchema: z.ZodType<Prisma.TagCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TagCountOutputTypeSelectSchema).nullish(),
}).strict();

export const TagCountOutputTypeSelectSchema: z.ZodType<Prisma.TagCountOutputTypeSelect> = z.object({
  blogs: z.boolean().optional(),
}).strict();

export const TagSelectSchema: z.ZodType<Prisma.TagSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  blogs: z.union([z.boolean(),z.lazy(() => TagsOnBlogsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TagCountOutputTypeArgsSchema)]).optional(),
}).strict()

// TAGS ON BLOGS
//------------------------------------------------------

export const TagsOnBlogsIncludeSchema: z.ZodType<Prisma.TagsOnBlogsInclude> = z.object({
  blog: z.union([z.boolean(),z.lazy(() => BlogArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
}).strict()

export const TagsOnBlogsArgsSchema: z.ZodType<Prisma.TagsOnBlogsDefaultArgs> = z.object({
  select: z.lazy(() => TagsOnBlogsSelectSchema).optional(),
  include: z.lazy(() => TagsOnBlogsIncludeSchema).optional(),
}).strict();

export const TagsOnBlogsSelectSchema: z.ZodType<Prisma.TagsOnBlogsSelect> = z.object({
  blogId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  blog: z.union([z.boolean(),z.lazy(() => BlogArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  blogs: z.lazy(() => BlogListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  blogs: z.lazy(() => BlogOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => UserOrderByRelevanceInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    username: z.string()
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    username: z.string(),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  username: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  blogs: z.lazy(() => BlogListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const BlogWhereInputSchema: z.ZodType<Prisma.BlogWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BlogWhereInputSchema),z.lazy(() => BlogWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BlogWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BlogWhereInputSchema),z.lazy(() => BlogWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  authorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  author: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  tags: z.lazy(() => TagsOnBlogsListRelationFilterSchema).optional()
}).strict();

export const BlogOrderByWithRelationInputSchema: z.ZodType<Prisma.BlogOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  tags: z.lazy(() => TagsOnBlogsOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => BlogOrderByRelevanceInputSchema).optional()
}).strict();

export const BlogWhereUniqueInputSchema: z.ZodType<Prisma.BlogWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => BlogWhereInputSchema),z.lazy(() => BlogWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BlogWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BlogWhereInputSchema),z.lazy(() => BlogWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  authorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  author: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  tags: z.lazy(() => TagsOnBlogsListRelationFilterSchema).optional()
}).strict());

export const BlogOrderByWithAggregationInputSchema: z.ZodType<Prisma.BlogOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BlogCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BlogMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BlogMinOrderByAggregateInputSchema).optional()
}).strict();

export const BlogScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BlogScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BlogScalarWhereWithAggregatesInputSchema),z.lazy(() => BlogScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BlogScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BlogScalarWhereWithAggregatesInputSchema),z.lazy(() => BlogScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  authorId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const TagWhereInputSchema: z.ZodType<Prisma.TagWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TagWhereInputSchema),z.lazy(() => TagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagWhereInputSchema),z.lazy(() => TagWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  blogs: z.lazy(() => TagsOnBlogsListRelationFilterSchema).optional()
}).strict();

export const TagOrderByWithRelationInputSchema: z.ZodType<Prisma.TagOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  blogs: z.lazy(() => TagsOnBlogsOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => TagOrderByRelevanceInputSchema).optional()
}).strict();

export const TagWhereUniqueInputSchema: z.ZodType<Prisma.TagWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => TagWhereInputSchema),z.lazy(() => TagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagWhereInputSchema),z.lazy(() => TagWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  blogs: z.lazy(() => TagsOnBlogsListRelationFilterSchema).optional()
}).strict());

export const TagOrderByWithAggregationInputSchema: z.ZodType<Prisma.TagOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TagCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TagMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TagMinOrderByAggregateInputSchema).optional()
}).strict();

export const TagScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TagScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TagScalarWhereWithAggregatesInputSchema),z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagScalarWhereWithAggregatesInputSchema),z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const TagsOnBlogsWhereInputSchema: z.ZodType<Prisma.TagsOnBlogsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TagsOnBlogsWhereInputSchema),z.lazy(() => TagsOnBlogsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagsOnBlogsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagsOnBlogsWhereInputSchema),z.lazy(() => TagsOnBlogsWhereInputSchema).array() ]).optional(),
  blogId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tagId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  blog: z.union([ z.lazy(() => BlogScalarRelationFilterSchema),z.lazy(() => BlogWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => TagScalarRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
}).strict();

export const TagsOnBlogsOrderByWithRelationInputSchema: z.ZodType<Prisma.TagsOnBlogsOrderByWithRelationInput> = z.object({
  blogId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  blog: z.lazy(() => BlogOrderByWithRelationInputSchema).optional(),
  tag: z.lazy(() => TagOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => TagsOnBlogsOrderByRelevanceInputSchema).optional()
}).strict();

export const TagsOnBlogsWhereUniqueInputSchema: z.ZodType<Prisma.TagsOnBlogsWhereUniqueInput> = z.object({
  blogId_tagId: z.lazy(() => TagsOnBlogsBlogIdTagIdCompoundUniqueInputSchema)
})
.and(z.object({
  blogId_tagId: z.lazy(() => TagsOnBlogsBlogIdTagIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TagsOnBlogsWhereInputSchema),z.lazy(() => TagsOnBlogsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagsOnBlogsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagsOnBlogsWhereInputSchema),z.lazy(() => TagsOnBlogsWhereInputSchema).array() ]).optional(),
  blogId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tagId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  blog: z.union([ z.lazy(() => BlogScalarRelationFilterSchema),z.lazy(() => BlogWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => TagScalarRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
}).strict());

export const TagsOnBlogsOrderByWithAggregationInputSchema: z.ZodType<Prisma.TagsOnBlogsOrderByWithAggregationInput> = z.object({
  blogId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TagsOnBlogsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TagsOnBlogsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TagsOnBlogsMinOrderByAggregateInputSchema).optional()
}).strict();

export const TagsOnBlogsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TagsOnBlogsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TagsOnBlogsScalarWhereWithAggregatesInputSchema),z.lazy(() => TagsOnBlogsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagsOnBlogsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagsOnBlogsScalarWhereWithAggregatesInputSchema),z.lazy(() => TagsOnBlogsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  blogId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tagId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().uuid().optional(),
  username: z.string(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  blogs: z.lazy(() => BlogCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  username: z.string(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  blogs: z.lazy(() => BlogUncheckedCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  blogs: z.lazy(() => BlogUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  blogs: z.lazy(() => BlogUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  username: z.string(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BlogCreateInputSchema: z.ZodType<Prisma.BlogCreateInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  author: z.lazy(() => UserCreateNestedOneWithoutBlogsInputSchema),
  tags: z.lazy(() => TagsOnBlogsCreateNestedManyWithoutBlogInputSchema).optional()
}).strict();

export const BlogUncheckedCreateInputSchema: z.ZodType<Prisma.BlogUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  authorId: z.string(),
  tags: z.lazy(() => TagsOnBlogsUncheckedCreateNestedManyWithoutBlogInputSchema).optional()
}).strict();

export const BlogUpdateInputSchema: z.ZodType<Prisma.BlogUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.lazy(() => UserUpdateOneRequiredWithoutBlogsNestedInputSchema).optional(),
  tags: z.lazy(() => TagsOnBlogsUpdateManyWithoutBlogNestedInputSchema).optional()
}).strict();

export const BlogUncheckedUpdateInputSchema: z.ZodType<Prisma.BlogUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.lazy(() => TagsOnBlogsUncheckedUpdateManyWithoutBlogNestedInputSchema).optional()
}).strict();

export const BlogCreateManyInputSchema: z.ZodType<Prisma.BlogCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  authorId: z.string()
}).strict();

export const BlogUpdateManyMutationInputSchema: z.ZodType<Prisma.BlogUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BlogUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BlogUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagCreateInputSchema: z.ZodType<Prisma.TagCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  blogs: z.lazy(() => TagsOnBlogsCreateNestedManyWithoutTagInputSchema).optional()
}).strict();

export const TagUncheckedCreateInputSchema: z.ZodType<Prisma.TagUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  blogs: z.lazy(() => TagsOnBlogsUncheckedCreateNestedManyWithoutTagInputSchema).optional()
}).strict();

export const TagUpdateInputSchema: z.ZodType<Prisma.TagUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  blogs: z.lazy(() => TagsOnBlogsUpdateManyWithoutTagNestedInputSchema).optional()
}).strict();

export const TagUncheckedUpdateInputSchema: z.ZodType<Prisma.TagUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  blogs: z.lazy(() => TagsOnBlogsUncheckedUpdateManyWithoutTagNestedInputSchema).optional()
}).strict();

export const TagCreateManyInputSchema: z.ZodType<Prisma.TagCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TagUpdateManyMutationInputSchema: z.ZodType<Prisma.TagUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TagUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagsOnBlogsCreateInputSchema: z.ZodType<Prisma.TagsOnBlogsCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  blog: z.lazy(() => BlogCreateNestedOneWithoutTagsInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutBlogsInputSchema)
}).strict();

export const TagsOnBlogsUncheckedCreateInputSchema: z.ZodType<Prisma.TagsOnBlogsUncheckedCreateInput> = z.object({
  blogId: z.string(),
  tagId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TagsOnBlogsUpdateInputSchema: z.ZodType<Prisma.TagsOnBlogsUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  blog: z.lazy(() => BlogUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutBlogsNestedInputSchema).optional()
}).strict();

export const TagsOnBlogsUncheckedUpdateInputSchema: z.ZodType<Prisma.TagsOnBlogsUncheckedUpdateInput> = z.object({
  blogId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tagId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagsOnBlogsCreateManyInputSchema: z.ZodType<Prisma.TagsOnBlogsCreateManyInput> = z.object({
  blogId: z.string(),
  tagId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TagsOnBlogsUpdateManyMutationInputSchema: z.ZodType<Prisma.TagsOnBlogsUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagsOnBlogsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TagsOnBlogsUncheckedUpdateManyInput> = z.object({
  blogId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tagId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
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
  search: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const BlogListRelationFilterSchema: z.ZodType<Prisma.BlogListRelationFilter> = z.object({
  every: z.lazy(() => BlogWhereInputSchema).optional(),
  some: z.lazy(() => BlogWhereInputSchema).optional(),
  none: z.lazy(() => BlogWhereInputSchema).optional()
}).strict();

export const BlogOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BlogOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserOrderByRelevanceInputSchema: z.ZodType<Prisma.UserOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => UserOrderByRelevanceFieldEnumSchema),z.lazy(() => UserOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
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
  search: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
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
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const UserScalarRelationFilterSchema: z.ZodType<Prisma.UserScalarRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const TagsOnBlogsListRelationFilterSchema: z.ZodType<Prisma.TagsOnBlogsListRelationFilter> = z.object({
  every: z.lazy(() => TagsOnBlogsWhereInputSchema).optional(),
  some: z.lazy(() => TagsOnBlogsWhereInputSchema).optional(),
  none: z.lazy(() => TagsOnBlogsWhereInputSchema).optional()
}).strict();

export const TagsOnBlogsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TagsOnBlogsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BlogOrderByRelevanceInputSchema: z.ZodType<Prisma.BlogOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => BlogOrderByRelevanceFieldEnumSchema),z.lazy(() => BlogOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const BlogCountOrderByAggregateInputSchema: z.ZodType<Prisma.BlogCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BlogMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BlogMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BlogMinOrderByAggregateInputSchema: z.ZodType<Prisma.BlogMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagOrderByRelevanceInputSchema: z.ZodType<Prisma.TagOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => TagOrderByRelevanceFieldEnumSchema),z.lazy(() => TagOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const TagCountOrderByAggregateInputSchema: z.ZodType<Prisma.TagCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TagMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagMinOrderByAggregateInputSchema: z.ZodType<Prisma.TagMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BlogScalarRelationFilterSchema: z.ZodType<Prisma.BlogScalarRelationFilter> = z.object({
  is: z.lazy(() => BlogWhereInputSchema).optional(),
  isNot: z.lazy(() => BlogWhereInputSchema).optional()
}).strict();

export const TagScalarRelationFilterSchema: z.ZodType<Prisma.TagScalarRelationFilter> = z.object({
  is: z.lazy(() => TagWhereInputSchema).optional(),
  isNot: z.lazy(() => TagWhereInputSchema).optional()
}).strict();

export const TagsOnBlogsOrderByRelevanceInputSchema: z.ZodType<Prisma.TagsOnBlogsOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => TagsOnBlogsOrderByRelevanceFieldEnumSchema),z.lazy(() => TagsOnBlogsOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const TagsOnBlogsBlogIdTagIdCompoundUniqueInputSchema: z.ZodType<Prisma.TagsOnBlogsBlogIdTagIdCompoundUniqueInput> = z.object({
  blogId: z.string(),
  tagId: z.string()
}).strict();

export const TagsOnBlogsCountOrderByAggregateInputSchema: z.ZodType<Prisma.TagsOnBlogsCountOrderByAggregateInput> = z.object({
  blogId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagsOnBlogsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TagsOnBlogsMaxOrderByAggregateInput> = z.object({
  blogId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagsOnBlogsMinOrderByAggregateInputSchema: z.ZodType<Prisma.TagsOnBlogsMinOrderByAggregateInput> = z.object({
  blogId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BlogCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.BlogCreateNestedManyWithoutAuthorInput> = z.object({
  create: z.union([ z.lazy(() => BlogCreateWithoutAuthorInputSchema),z.lazy(() => BlogCreateWithoutAuthorInputSchema).array(),z.lazy(() => BlogUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => BlogUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BlogCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => BlogCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BlogCreateManyAuthorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BlogWhereUniqueInputSchema),z.lazy(() => BlogWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BlogUncheckedCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.BlogUncheckedCreateNestedManyWithoutAuthorInput> = z.object({
  create: z.union([ z.lazy(() => BlogCreateWithoutAuthorInputSchema),z.lazy(() => BlogCreateWithoutAuthorInputSchema).array(),z.lazy(() => BlogUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => BlogUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BlogCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => BlogCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BlogCreateManyAuthorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BlogWhereUniqueInputSchema),z.lazy(() => BlogWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const BlogUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.BlogUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([ z.lazy(() => BlogCreateWithoutAuthorInputSchema),z.lazy(() => BlogCreateWithoutAuthorInputSchema).array(),z.lazy(() => BlogUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => BlogUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BlogCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => BlogCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BlogUpsertWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => BlogUpsertWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BlogCreateManyAuthorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BlogWhereUniqueInputSchema),z.lazy(() => BlogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BlogWhereUniqueInputSchema),z.lazy(() => BlogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BlogWhereUniqueInputSchema),z.lazy(() => BlogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BlogWhereUniqueInputSchema),z.lazy(() => BlogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BlogUpdateWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => BlogUpdateWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BlogUpdateManyWithWhereWithoutAuthorInputSchema),z.lazy(() => BlogUpdateManyWithWhereWithoutAuthorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BlogScalarWhereInputSchema),z.lazy(() => BlogScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BlogUncheckedUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.BlogUncheckedUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([ z.lazy(() => BlogCreateWithoutAuthorInputSchema),z.lazy(() => BlogCreateWithoutAuthorInputSchema).array(),z.lazy(() => BlogUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => BlogUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BlogCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => BlogCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BlogUpsertWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => BlogUpsertWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BlogCreateManyAuthorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BlogWhereUniqueInputSchema),z.lazy(() => BlogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BlogWhereUniqueInputSchema),z.lazy(() => BlogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BlogWhereUniqueInputSchema),z.lazy(() => BlogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BlogWhereUniqueInputSchema),z.lazy(() => BlogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BlogUpdateWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => BlogUpdateWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BlogUpdateManyWithWhereWithoutAuthorInputSchema),z.lazy(() => BlogUpdateManyWithWhereWithoutAuthorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BlogScalarWhereInputSchema),z.lazy(() => BlogScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutBlogsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutBlogsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutBlogsInputSchema),z.lazy(() => UserUncheckedCreateWithoutBlogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBlogsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const TagsOnBlogsCreateNestedManyWithoutBlogInputSchema: z.ZodType<Prisma.TagsOnBlogsCreateNestedManyWithoutBlogInput> = z.object({
  create: z.union([ z.lazy(() => TagsOnBlogsCreateWithoutBlogInputSchema),z.lazy(() => TagsOnBlogsCreateWithoutBlogInputSchema).array(),z.lazy(() => TagsOnBlogsUncheckedCreateWithoutBlogInputSchema),z.lazy(() => TagsOnBlogsUncheckedCreateWithoutBlogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsOnBlogsCreateOrConnectWithoutBlogInputSchema),z.lazy(() => TagsOnBlogsCreateOrConnectWithoutBlogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsOnBlogsCreateManyBlogInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),z.lazy(() => TagsOnBlogsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TagsOnBlogsUncheckedCreateNestedManyWithoutBlogInputSchema: z.ZodType<Prisma.TagsOnBlogsUncheckedCreateNestedManyWithoutBlogInput> = z.object({
  create: z.union([ z.lazy(() => TagsOnBlogsCreateWithoutBlogInputSchema),z.lazy(() => TagsOnBlogsCreateWithoutBlogInputSchema).array(),z.lazy(() => TagsOnBlogsUncheckedCreateWithoutBlogInputSchema),z.lazy(() => TagsOnBlogsUncheckedCreateWithoutBlogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsOnBlogsCreateOrConnectWithoutBlogInputSchema),z.lazy(() => TagsOnBlogsCreateOrConnectWithoutBlogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsOnBlogsCreateManyBlogInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),z.lazy(() => TagsOnBlogsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutBlogsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBlogsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutBlogsInputSchema),z.lazy(() => UserUncheckedCreateWithoutBlogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBlogsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutBlogsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutBlogsInputSchema),z.lazy(() => UserUpdateWithoutBlogsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBlogsInputSchema) ]).optional(),
}).strict();

export const TagsOnBlogsUpdateManyWithoutBlogNestedInputSchema: z.ZodType<Prisma.TagsOnBlogsUpdateManyWithoutBlogNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagsOnBlogsCreateWithoutBlogInputSchema),z.lazy(() => TagsOnBlogsCreateWithoutBlogInputSchema).array(),z.lazy(() => TagsOnBlogsUncheckedCreateWithoutBlogInputSchema),z.lazy(() => TagsOnBlogsUncheckedCreateWithoutBlogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsOnBlogsCreateOrConnectWithoutBlogInputSchema),z.lazy(() => TagsOnBlogsCreateOrConnectWithoutBlogInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagsOnBlogsUpsertWithWhereUniqueWithoutBlogInputSchema),z.lazy(() => TagsOnBlogsUpsertWithWhereUniqueWithoutBlogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsOnBlogsCreateManyBlogInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),z.lazy(() => TagsOnBlogsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),z.lazy(() => TagsOnBlogsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),z.lazy(() => TagsOnBlogsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),z.lazy(() => TagsOnBlogsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagsOnBlogsUpdateWithWhereUniqueWithoutBlogInputSchema),z.lazy(() => TagsOnBlogsUpdateWithWhereUniqueWithoutBlogInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagsOnBlogsUpdateManyWithWhereWithoutBlogInputSchema),z.lazy(() => TagsOnBlogsUpdateManyWithWhereWithoutBlogInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagsOnBlogsScalarWhereInputSchema),z.lazy(() => TagsOnBlogsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TagsOnBlogsUncheckedUpdateManyWithoutBlogNestedInputSchema: z.ZodType<Prisma.TagsOnBlogsUncheckedUpdateManyWithoutBlogNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagsOnBlogsCreateWithoutBlogInputSchema),z.lazy(() => TagsOnBlogsCreateWithoutBlogInputSchema).array(),z.lazy(() => TagsOnBlogsUncheckedCreateWithoutBlogInputSchema),z.lazy(() => TagsOnBlogsUncheckedCreateWithoutBlogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsOnBlogsCreateOrConnectWithoutBlogInputSchema),z.lazy(() => TagsOnBlogsCreateOrConnectWithoutBlogInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagsOnBlogsUpsertWithWhereUniqueWithoutBlogInputSchema),z.lazy(() => TagsOnBlogsUpsertWithWhereUniqueWithoutBlogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsOnBlogsCreateManyBlogInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),z.lazy(() => TagsOnBlogsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),z.lazy(() => TagsOnBlogsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),z.lazy(() => TagsOnBlogsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),z.lazy(() => TagsOnBlogsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagsOnBlogsUpdateWithWhereUniqueWithoutBlogInputSchema),z.lazy(() => TagsOnBlogsUpdateWithWhereUniqueWithoutBlogInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagsOnBlogsUpdateManyWithWhereWithoutBlogInputSchema),z.lazy(() => TagsOnBlogsUpdateManyWithWhereWithoutBlogInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagsOnBlogsScalarWhereInputSchema),z.lazy(() => TagsOnBlogsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TagsOnBlogsCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.TagsOnBlogsCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => TagsOnBlogsCreateWithoutTagInputSchema),z.lazy(() => TagsOnBlogsCreateWithoutTagInputSchema).array(),z.lazy(() => TagsOnBlogsUncheckedCreateWithoutTagInputSchema),z.lazy(() => TagsOnBlogsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsOnBlogsCreateOrConnectWithoutTagInputSchema),z.lazy(() => TagsOnBlogsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsOnBlogsCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),z.lazy(() => TagsOnBlogsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TagsOnBlogsUncheckedCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.TagsOnBlogsUncheckedCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => TagsOnBlogsCreateWithoutTagInputSchema),z.lazy(() => TagsOnBlogsCreateWithoutTagInputSchema).array(),z.lazy(() => TagsOnBlogsUncheckedCreateWithoutTagInputSchema),z.lazy(() => TagsOnBlogsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsOnBlogsCreateOrConnectWithoutTagInputSchema),z.lazy(() => TagsOnBlogsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsOnBlogsCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),z.lazy(() => TagsOnBlogsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TagsOnBlogsUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.TagsOnBlogsUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagsOnBlogsCreateWithoutTagInputSchema),z.lazy(() => TagsOnBlogsCreateWithoutTagInputSchema).array(),z.lazy(() => TagsOnBlogsUncheckedCreateWithoutTagInputSchema),z.lazy(() => TagsOnBlogsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsOnBlogsCreateOrConnectWithoutTagInputSchema),z.lazy(() => TagsOnBlogsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagsOnBlogsUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => TagsOnBlogsUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsOnBlogsCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),z.lazy(() => TagsOnBlogsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),z.lazy(() => TagsOnBlogsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),z.lazy(() => TagsOnBlogsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),z.lazy(() => TagsOnBlogsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagsOnBlogsUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => TagsOnBlogsUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagsOnBlogsUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => TagsOnBlogsUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagsOnBlogsScalarWhereInputSchema),z.lazy(() => TagsOnBlogsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TagsOnBlogsUncheckedUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.TagsOnBlogsUncheckedUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagsOnBlogsCreateWithoutTagInputSchema),z.lazy(() => TagsOnBlogsCreateWithoutTagInputSchema).array(),z.lazy(() => TagsOnBlogsUncheckedCreateWithoutTagInputSchema),z.lazy(() => TagsOnBlogsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsOnBlogsCreateOrConnectWithoutTagInputSchema),z.lazy(() => TagsOnBlogsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagsOnBlogsUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => TagsOnBlogsUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsOnBlogsCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),z.lazy(() => TagsOnBlogsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),z.lazy(() => TagsOnBlogsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),z.lazy(() => TagsOnBlogsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),z.lazy(() => TagsOnBlogsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagsOnBlogsUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => TagsOnBlogsUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagsOnBlogsUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => TagsOnBlogsUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagsOnBlogsScalarWhereInputSchema),z.lazy(() => TagsOnBlogsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BlogCreateNestedOneWithoutTagsInputSchema: z.ZodType<Prisma.BlogCreateNestedOneWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => BlogCreateWithoutTagsInputSchema),z.lazy(() => BlogUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BlogCreateOrConnectWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => BlogWhereUniqueInputSchema).optional()
}).strict();

export const TagCreateNestedOneWithoutBlogsInputSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutBlogsInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutBlogsInputSchema),z.lazy(() => TagUncheckedCreateWithoutBlogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutBlogsInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional()
}).strict();

export const BlogUpdateOneRequiredWithoutTagsNestedInputSchema: z.ZodType<Prisma.BlogUpdateOneRequiredWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BlogCreateWithoutTagsInputSchema),z.lazy(() => BlogUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BlogCreateOrConnectWithoutTagsInputSchema).optional(),
  upsert: z.lazy(() => BlogUpsertWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => BlogWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BlogUpdateToOneWithWhereWithoutTagsInputSchema),z.lazy(() => BlogUpdateWithoutTagsInputSchema),z.lazy(() => BlogUncheckedUpdateWithoutTagsInputSchema) ]).optional(),
}).strict();

export const TagUpdateOneRequiredWithoutBlogsNestedInputSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutBlogsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutBlogsInputSchema),z.lazy(() => TagUncheckedCreateWithoutBlogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutBlogsInputSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutBlogsInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TagUpdateToOneWithWhereWithoutBlogsInputSchema),z.lazy(() => TagUpdateWithoutBlogsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutBlogsInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
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
  search: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
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
  search: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
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
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const BlogCreateWithoutAuthorInputSchema: z.ZodType<Prisma.BlogCreateWithoutAuthorInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tags: z.lazy(() => TagsOnBlogsCreateNestedManyWithoutBlogInputSchema).optional()
}).strict();

export const BlogUncheckedCreateWithoutAuthorInputSchema: z.ZodType<Prisma.BlogUncheckedCreateWithoutAuthorInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tags: z.lazy(() => TagsOnBlogsUncheckedCreateNestedManyWithoutBlogInputSchema).optional()
}).strict();

export const BlogCreateOrConnectWithoutAuthorInputSchema: z.ZodType<Prisma.BlogCreateOrConnectWithoutAuthorInput> = z.object({
  where: z.lazy(() => BlogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BlogCreateWithoutAuthorInputSchema),z.lazy(() => BlogUncheckedCreateWithoutAuthorInputSchema) ]),
}).strict();

export const BlogCreateManyAuthorInputEnvelopeSchema: z.ZodType<Prisma.BlogCreateManyAuthorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BlogCreateManyAuthorInputSchema),z.lazy(() => BlogCreateManyAuthorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const BlogUpsertWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.BlogUpsertWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => BlogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BlogUpdateWithoutAuthorInputSchema),z.lazy(() => BlogUncheckedUpdateWithoutAuthorInputSchema) ]),
  create: z.union([ z.lazy(() => BlogCreateWithoutAuthorInputSchema),z.lazy(() => BlogUncheckedCreateWithoutAuthorInputSchema) ]),
}).strict();

export const BlogUpdateWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.BlogUpdateWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => BlogWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BlogUpdateWithoutAuthorInputSchema),z.lazy(() => BlogUncheckedUpdateWithoutAuthorInputSchema) ]),
}).strict();

export const BlogUpdateManyWithWhereWithoutAuthorInputSchema: z.ZodType<Prisma.BlogUpdateManyWithWhereWithoutAuthorInput> = z.object({
  where: z.lazy(() => BlogScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BlogUpdateManyMutationInputSchema),z.lazy(() => BlogUncheckedUpdateManyWithoutAuthorInputSchema) ]),
}).strict();

export const BlogScalarWhereInputSchema: z.ZodType<Prisma.BlogScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BlogScalarWhereInputSchema),z.lazy(() => BlogScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BlogScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BlogScalarWhereInputSchema),z.lazy(() => BlogScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  authorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const UserCreateWithoutBlogsInputSchema: z.ZodType<Prisma.UserCreateWithoutBlogsInput> = z.object({
  id: z.string().uuid().optional(),
  username: z.string(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserUncheckedCreateWithoutBlogsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutBlogsInput> = z.object({
  id: z.string().uuid().optional(),
  username: z.string(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserCreateOrConnectWithoutBlogsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutBlogsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutBlogsInputSchema),z.lazy(() => UserUncheckedCreateWithoutBlogsInputSchema) ]),
}).strict();

export const TagsOnBlogsCreateWithoutBlogInputSchema: z.ZodType<Prisma.TagsOnBlogsCreateWithoutBlogInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tag: z.lazy(() => TagCreateNestedOneWithoutBlogsInputSchema)
}).strict();

export const TagsOnBlogsUncheckedCreateWithoutBlogInputSchema: z.ZodType<Prisma.TagsOnBlogsUncheckedCreateWithoutBlogInput> = z.object({
  tagId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TagsOnBlogsCreateOrConnectWithoutBlogInputSchema: z.ZodType<Prisma.TagsOnBlogsCreateOrConnectWithoutBlogInput> = z.object({
  where: z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagsOnBlogsCreateWithoutBlogInputSchema),z.lazy(() => TagsOnBlogsUncheckedCreateWithoutBlogInputSchema) ]),
}).strict();

export const TagsOnBlogsCreateManyBlogInputEnvelopeSchema: z.ZodType<Prisma.TagsOnBlogsCreateManyBlogInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TagsOnBlogsCreateManyBlogInputSchema),z.lazy(() => TagsOnBlogsCreateManyBlogInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserUpsertWithoutBlogsInputSchema: z.ZodType<Prisma.UserUpsertWithoutBlogsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutBlogsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBlogsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutBlogsInputSchema),z.lazy(() => UserUncheckedCreateWithoutBlogsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutBlogsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBlogsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutBlogsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBlogsInputSchema) ]),
}).strict();

export const UserUpdateWithoutBlogsInputSchema: z.ZodType<Prisma.UserUpdateWithoutBlogsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateWithoutBlogsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutBlogsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagsOnBlogsUpsertWithWhereUniqueWithoutBlogInputSchema: z.ZodType<Prisma.TagsOnBlogsUpsertWithWhereUniqueWithoutBlogInput> = z.object({
  where: z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagsOnBlogsUpdateWithoutBlogInputSchema),z.lazy(() => TagsOnBlogsUncheckedUpdateWithoutBlogInputSchema) ]),
  create: z.union([ z.lazy(() => TagsOnBlogsCreateWithoutBlogInputSchema),z.lazy(() => TagsOnBlogsUncheckedCreateWithoutBlogInputSchema) ]),
}).strict();

export const TagsOnBlogsUpdateWithWhereUniqueWithoutBlogInputSchema: z.ZodType<Prisma.TagsOnBlogsUpdateWithWhereUniqueWithoutBlogInput> = z.object({
  where: z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagsOnBlogsUpdateWithoutBlogInputSchema),z.lazy(() => TagsOnBlogsUncheckedUpdateWithoutBlogInputSchema) ]),
}).strict();

export const TagsOnBlogsUpdateManyWithWhereWithoutBlogInputSchema: z.ZodType<Prisma.TagsOnBlogsUpdateManyWithWhereWithoutBlogInput> = z.object({
  where: z.lazy(() => TagsOnBlogsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagsOnBlogsUpdateManyMutationInputSchema),z.lazy(() => TagsOnBlogsUncheckedUpdateManyWithoutBlogInputSchema) ]),
}).strict();

export const TagsOnBlogsScalarWhereInputSchema: z.ZodType<Prisma.TagsOnBlogsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TagsOnBlogsScalarWhereInputSchema),z.lazy(() => TagsOnBlogsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagsOnBlogsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagsOnBlogsScalarWhereInputSchema),z.lazy(() => TagsOnBlogsScalarWhereInputSchema).array() ]).optional(),
  blogId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tagId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const TagsOnBlogsCreateWithoutTagInputSchema: z.ZodType<Prisma.TagsOnBlogsCreateWithoutTagInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  blog: z.lazy(() => BlogCreateNestedOneWithoutTagsInputSchema)
}).strict();

export const TagsOnBlogsUncheckedCreateWithoutTagInputSchema: z.ZodType<Prisma.TagsOnBlogsUncheckedCreateWithoutTagInput> = z.object({
  blogId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TagsOnBlogsCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.TagsOnBlogsCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagsOnBlogsCreateWithoutTagInputSchema),z.lazy(() => TagsOnBlogsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export const TagsOnBlogsCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.TagsOnBlogsCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TagsOnBlogsCreateManyTagInputSchema),z.lazy(() => TagsOnBlogsCreateManyTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TagsOnBlogsUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.TagsOnBlogsUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagsOnBlogsUpdateWithoutTagInputSchema),z.lazy(() => TagsOnBlogsUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => TagsOnBlogsCreateWithoutTagInputSchema),z.lazy(() => TagsOnBlogsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export const TagsOnBlogsUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.TagsOnBlogsUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => TagsOnBlogsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagsOnBlogsUpdateWithoutTagInputSchema),z.lazy(() => TagsOnBlogsUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export const TagsOnBlogsUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.TagsOnBlogsUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => TagsOnBlogsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagsOnBlogsUpdateManyMutationInputSchema),z.lazy(() => TagsOnBlogsUncheckedUpdateManyWithoutTagInputSchema) ]),
}).strict();

export const BlogCreateWithoutTagsInputSchema: z.ZodType<Prisma.BlogCreateWithoutTagsInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  author: z.lazy(() => UserCreateNestedOneWithoutBlogsInputSchema)
}).strict();

export const BlogUncheckedCreateWithoutTagsInputSchema: z.ZodType<Prisma.BlogUncheckedCreateWithoutTagsInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  authorId: z.string()
}).strict();

export const BlogCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.BlogCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => BlogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BlogCreateWithoutTagsInputSchema),z.lazy(() => BlogUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export const TagCreateWithoutBlogsInputSchema: z.ZodType<Prisma.TagCreateWithoutBlogsInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TagUncheckedCreateWithoutBlogsInputSchema: z.ZodType<Prisma.TagUncheckedCreateWithoutBlogsInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TagCreateOrConnectWithoutBlogsInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutBlogsInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutBlogsInputSchema),z.lazy(() => TagUncheckedCreateWithoutBlogsInputSchema) ]),
}).strict();

export const BlogUpsertWithoutTagsInputSchema: z.ZodType<Prisma.BlogUpsertWithoutTagsInput> = z.object({
  update: z.union([ z.lazy(() => BlogUpdateWithoutTagsInputSchema),z.lazy(() => BlogUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => BlogCreateWithoutTagsInputSchema),z.lazy(() => BlogUncheckedCreateWithoutTagsInputSchema) ]),
  where: z.lazy(() => BlogWhereInputSchema).optional()
}).strict();

export const BlogUpdateToOneWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.BlogUpdateToOneWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => BlogWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BlogUpdateWithoutTagsInputSchema),z.lazy(() => BlogUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export const BlogUpdateWithoutTagsInputSchema: z.ZodType<Prisma.BlogUpdateWithoutTagsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.lazy(() => UserUpdateOneRequiredWithoutBlogsNestedInputSchema).optional()
}).strict();

export const BlogUncheckedUpdateWithoutTagsInputSchema: z.ZodType<Prisma.BlogUncheckedUpdateWithoutTagsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagUpsertWithoutBlogsInputSchema: z.ZodType<Prisma.TagUpsertWithoutBlogsInput> = z.object({
  update: z.union([ z.lazy(() => TagUpdateWithoutBlogsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutBlogsInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutBlogsInputSchema),z.lazy(() => TagUncheckedCreateWithoutBlogsInputSchema) ]),
  where: z.lazy(() => TagWhereInputSchema).optional()
}).strict();

export const TagUpdateToOneWithWhereWithoutBlogsInputSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutBlogsInput> = z.object({
  where: z.lazy(() => TagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TagUpdateWithoutBlogsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutBlogsInputSchema) ]),
}).strict();

export const TagUpdateWithoutBlogsInputSchema: z.ZodType<Prisma.TagUpdateWithoutBlogsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagUncheckedUpdateWithoutBlogsInputSchema: z.ZodType<Prisma.TagUncheckedUpdateWithoutBlogsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BlogCreateManyAuthorInputSchema: z.ZodType<Prisma.BlogCreateManyAuthorInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BlogUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.BlogUpdateWithoutAuthorInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.lazy(() => TagsOnBlogsUpdateManyWithoutBlogNestedInputSchema).optional()
}).strict();

export const BlogUncheckedUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.BlogUncheckedUpdateWithoutAuthorInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.lazy(() => TagsOnBlogsUncheckedUpdateManyWithoutBlogNestedInputSchema).optional()
}).strict();

export const BlogUncheckedUpdateManyWithoutAuthorInputSchema: z.ZodType<Prisma.BlogUncheckedUpdateManyWithoutAuthorInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagsOnBlogsCreateManyBlogInputSchema: z.ZodType<Prisma.TagsOnBlogsCreateManyBlogInput> = z.object({
  tagId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TagsOnBlogsUpdateWithoutBlogInputSchema: z.ZodType<Prisma.TagsOnBlogsUpdateWithoutBlogInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutBlogsNestedInputSchema).optional()
}).strict();

export const TagsOnBlogsUncheckedUpdateWithoutBlogInputSchema: z.ZodType<Prisma.TagsOnBlogsUncheckedUpdateWithoutBlogInput> = z.object({
  tagId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagsOnBlogsUncheckedUpdateManyWithoutBlogInputSchema: z.ZodType<Prisma.TagsOnBlogsUncheckedUpdateManyWithoutBlogInput> = z.object({
  tagId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagsOnBlogsCreateManyTagInputSchema: z.ZodType<Prisma.TagsOnBlogsCreateManyTagInput> = z.object({
  blogId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TagsOnBlogsUpdateWithoutTagInputSchema: z.ZodType<Prisma.TagsOnBlogsUpdateWithoutTagInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  blog: z.lazy(() => BlogUpdateOneRequiredWithoutTagsNestedInputSchema).optional()
}).strict();

export const TagsOnBlogsUncheckedUpdateWithoutTagInputSchema: z.ZodType<Prisma.TagsOnBlogsUncheckedUpdateWithoutTagInput> = z.object({
  blogId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagsOnBlogsUncheckedUpdateManyWithoutTagInputSchema: z.ZodType<Prisma.TagsOnBlogsUncheckedUpdateManyWithoutTagInput> = z.object({
  blogId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const BlogFindFirstArgsSchema: z.ZodType<Prisma.BlogFindFirstArgs> = z.object({
  select: BlogSelectSchema.optional(),
  include: BlogIncludeSchema.optional(),
  where: BlogWhereInputSchema.optional(),
  orderBy: z.union([ BlogOrderByWithRelationInputSchema.array(),BlogOrderByWithRelationInputSchema ]).optional(),
  cursor: BlogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BlogScalarFieldEnumSchema,BlogScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BlogFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BlogFindFirstOrThrowArgs> = z.object({
  select: BlogSelectSchema.optional(),
  include: BlogIncludeSchema.optional(),
  where: BlogWhereInputSchema.optional(),
  orderBy: z.union([ BlogOrderByWithRelationInputSchema.array(),BlogOrderByWithRelationInputSchema ]).optional(),
  cursor: BlogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BlogScalarFieldEnumSchema,BlogScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BlogFindManyArgsSchema: z.ZodType<Prisma.BlogFindManyArgs> = z.object({
  select: BlogSelectSchema.optional(),
  include: BlogIncludeSchema.optional(),
  where: BlogWhereInputSchema.optional(),
  orderBy: z.union([ BlogOrderByWithRelationInputSchema.array(),BlogOrderByWithRelationInputSchema ]).optional(),
  cursor: BlogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BlogScalarFieldEnumSchema,BlogScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BlogAggregateArgsSchema: z.ZodType<Prisma.BlogAggregateArgs> = z.object({
  where: BlogWhereInputSchema.optional(),
  orderBy: z.union([ BlogOrderByWithRelationInputSchema.array(),BlogOrderByWithRelationInputSchema ]).optional(),
  cursor: BlogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BlogGroupByArgsSchema: z.ZodType<Prisma.BlogGroupByArgs> = z.object({
  where: BlogWhereInputSchema.optional(),
  orderBy: z.union([ BlogOrderByWithAggregationInputSchema.array(),BlogOrderByWithAggregationInputSchema ]).optional(),
  by: BlogScalarFieldEnumSchema.array(),
  having: BlogScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BlogFindUniqueArgsSchema: z.ZodType<Prisma.BlogFindUniqueArgs> = z.object({
  select: BlogSelectSchema.optional(),
  include: BlogIncludeSchema.optional(),
  where: BlogWhereUniqueInputSchema,
}).strict() ;

export const BlogFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BlogFindUniqueOrThrowArgs> = z.object({
  select: BlogSelectSchema.optional(),
  include: BlogIncludeSchema.optional(),
  where: BlogWhereUniqueInputSchema,
}).strict() ;

export const TagFindFirstArgsSchema: z.ZodType<Prisma.TagFindFirstArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithRelationInputSchema.array(),TagOrderByWithRelationInputSchema ]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TagScalarFieldEnumSchema,TagScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TagFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TagFindFirstOrThrowArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithRelationInputSchema.array(),TagOrderByWithRelationInputSchema ]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TagScalarFieldEnumSchema,TagScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TagFindManyArgsSchema: z.ZodType<Prisma.TagFindManyArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithRelationInputSchema.array(),TagOrderByWithRelationInputSchema ]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TagScalarFieldEnumSchema,TagScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TagAggregateArgsSchema: z.ZodType<Prisma.TagAggregateArgs> = z.object({
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithRelationInputSchema.array(),TagOrderByWithRelationInputSchema ]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TagGroupByArgsSchema: z.ZodType<Prisma.TagGroupByArgs> = z.object({
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithAggregationInputSchema.array(),TagOrderByWithAggregationInputSchema ]).optional(),
  by: TagScalarFieldEnumSchema.array(),
  having: TagScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TagFindUniqueArgsSchema: z.ZodType<Prisma.TagFindUniqueArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
}).strict() ;

export const TagFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TagFindUniqueOrThrowArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
}).strict() ;

export const TagsOnBlogsFindFirstArgsSchema: z.ZodType<Prisma.TagsOnBlogsFindFirstArgs> = z.object({
  select: TagsOnBlogsSelectSchema.optional(),
  include: TagsOnBlogsIncludeSchema.optional(),
  where: TagsOnBlogsWhereInputSchema.optional(),
  orderBy: z.union([ TagsOnBlogsOrderByWithRelationInputSchema.array(),TagsOnBlogsOrderByWithRelationInputSchema ]).optional(),
  cursor: TagsOnBlogsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TagsOnBlogsScalarFieldEnumSchema,TagsOnBlogsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TagsOnBlogsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TagsOnBlogsFindFirstOrThrowArgs> = z.object({
  select: TagsOnBlogsSelectSchema.optional(),
  include: TagsOnBlogsIncludeSchema.optional(),
  where: TagsOnBlogsWhereInputSchema.optional(),
  orderBy: z.union([ TagsOnBlogsOrderByWithRelationInputSchema.array(),TagsOnBlogsOrderByWithRelationInputSchema ]).optional(),
  cursor: TagsOnBlogsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TagsOnBlogsScalarFieldEnumSchema,TagsOnBlogsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TagsOnBlogsFindManyArgsSchema: z.ZodType<Prisma.TagsOnBlogsFindManyArgs> = z.object({
  select: TagsOnBlogsSelectSchema.optional(),
  include: TagsOnBlogsIncludeSchema.optional(),
  where: TagsOnBlogsWhereInputSchema.optional(),
  orderBy: z.union([ TagsOnBlogsOrderByWithRelationInputSchema.array(),TagsOnBlogsOrderByWithRelationInputSchema ]).optional(),
  cursor: TagsOnBlogsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TagsOnBlogsScalarFieldEnumSchema,TagsOnBlogsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TagsOnBlogsAggregateArgsSchema: z.ZodType<Prisma.TagsOnBlogsAggregateArgs> = z.object({
  where: TagsOnBlogsWhereInputSchema.optional(),
  orderBy: z.union([ TagsOnBlogsOrderByWithRelationInputSchema.array(),TagsOnBlogsOrderByWithRelationInputSchema ]).optional(),
  cursor: TagsOnBlogsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TagsOnBlogsGroupByArgsSchema: z.ZodType<Prisma.TagsOnBlogsGroupByArgs> = z.object({
  where: TagsOnBlogsWhereInputSchema.optional(),
  orderBy: z.union([ TagsOnBlogsOrderByWithAggregationInputSchema.array(),TagsOnBlogsOrderByWithAggregationInputSchema ]).optional(),
  by: TagsOnBlogsScalarFieldEnumSchema.array(),
  having: TagsOnBlogsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TagsOnBlogsFindUniqueArgsSchema: z.ZodType<Prisma.TagsOnBlogsFindUniqueArgs> = z.object({
  select: TagsOnBlogsSelectSchema.optional(),
  include: TagsOnBlogsIncludeSchema.optional(),
  where: TagsOnBlogsWhereUniqueInputSchema,
}).strict() ;

export const TagsOnBlogsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TagsOnBlogsFindUniqueOrThrowArgs> = z.object({
  select: TagsOnBlogsSelectSchema.optional(),
  include: TagsOnBlogsIncludeSchema.optional(),
  where: TagsOnBlogsWhereUniqueInputSchema,
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const BlogCreateArgsSchema: z.ZodType<Prisma.BlogCreateArgs> = z.object({
  select: BlogSelectSchema.optional(),
  include: BlogIncludeSchema.optional(),
  data: z.union([ BlogCreateInputSchema,BlogUncheckedCreateInputSchema ]),
}).strict() ;

export const BlogUpsertArgsSchema: z.ZodType<Prisma.BlogUpsertArgs> = z.object({
  select: BlogSelectSchema.optional(),
  include: BlogIncludeSchema.optional(),
  where: BlogWhereUniqueInputSchema,
  create: z.union([ BlogCreateInputSchema,BlogUncheckedCreateInputSchema ]),
  update: z.union([ BlogUpdateInputSchema,BlogUncheckedUpdateInputSchema ]),
}).strict() ;

export const BlogCreateManyArgsSchema: z.ZodType<Prisma.BlogCreateManyArgs> = z.object({
  data: z.union([ BlogCreateManyInputSchema,BlogCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const BlogDeleteArgsSchema: z.ZodType<Prisma.BlogDeleteArgs> = z.object({
  select: BlogSelectSchema.optional(),
  include: BlogIncludeSchema.optional(),
  where: BlogWhereUniqueInputSchema,
}).strict() ;

export const BlogUpdateArgsSchema: z.ZodType<Prisma.BlogUpdateArgs> = z.object({
  select: BlogSelectSchema.optional(),
  include: BlogIncludeSchema.optional(),
  data: z.union([ BlogUpdateInputSchema,BlogUncheckedUpdateInputSchema ]),
  where: BlogWhereUniqueInputSchema,
}).strict() ;

export const BlogUpdateManyArgsSchema: z.ZodType<Prisma.BlogUpdateManyArgs> = z.object({
  data: z.union([ BlogUpdateManyMutationInputSchema,BlogUncheckedUpdateManyInputSchema ]),
  where: BlogWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const BlogDeleteManyArgsSchema: z.ZodType<Prisma.BlogDeleteManyArgs> = z.object({
  where: BlogWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const TagCreateArgsSchema: z.ZodType<Prisma.TagCreateArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  data: z.union([ TagCreateInputSchema,TagUncheckedCreateInputSchema ]),
}).strict() ;

export const TagUpsertArgsSchema: z.ZodType<Prisma.TagUpsertArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
  create: z.union([ TagCreateInputSchema,TagUncheckedCreateInputSchema ]),
  update: z.union([ TagUpdateInputSchema,TagUncheckedUpdateInputSchema ]),
}).strict() ;

export const TagCreateManyArgsSchema: z.ZodType<Prisma.TagCreateManyArgs> = z.object({
  data: z.union([ TagCreateManyInputSchema,TagCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TagDeleteArgsSchema: z.ZodType<Prisma.TagDeleteArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
}).strict() ;

export const TagUpdateArgsSchema: z.ZodType<Prisma.TagUpdateArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  data: z.union([ TagUpdateInputSchema,TagUncheckedUpdateInputSchema ]),
  where: TagWhereUniqueInputSchema,
}).strict() ;

export const TagUpdateManyArgsSchema: z.ZodType<Prisma.TagUpdateManyArgs> = z.object({
  data: z.union([ TagUpdateManyMutationInputSchema,TagUncheckedUpdateManyInputSchema ]),
  where: TagWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const TagDeleteManyArgsSchema: z.ZodType<Prisma.TagDeleteManyArgs> = z.object({
  where: TagWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const TagsOnBlogsCreateArgsSchema: z.ZodType<Prisma.TagsOnBlogsCreateArgs> = z.object({
  select: TagsOnBlogsSelectSchema.optional(),
  include: TagsOnBlogsIncludeSchema.optional(),
  data: z.union([ TagsOnBlogsCreateInputSchema,TagsOnBlogsUncheckedCreateInputSchema ]),
}).strict() ;

export const TagsOnBlogsUpsertArgsSchema: z.ZodType<Prisma.TagsOnBlogsUpsertArgs> = z.object({
  select: TagsOnBlogsSelectSchema.optional(),
  include: TagsOnBlogsIncludeSchema.optional(),
  where: TagsOnBlogsWhereUniqueInputSchema,
  create: z.union([ TagsOnBlogsCreateInputSchema,TagsOnBlogsUncheckedCreateInputSchema ]),
  update: z.union([ TagsOnBlogsUpdateInputSchema,TagsOnBlogsUncheckedUpdateInputSchema ]),
}).strict() ;

export const TagsOnBlogsCreateManyArgsSchema: z.ZodType<Prisma.TagsOnBlogsCreateManyArgs> = z.object({
  data: z.union([ TagsOnBlogsCreateManyInputSchema,TagsOnBlogsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TagsOnBlogsDeleteArgsSchema: z.ZodType<Prisma.TagsOnBlogsDeleteArgs> = z.object({
  select: TagsOnBlogsSelectSchema.optional(),
  include: TagsOnBlogsIncludeSchema.optional(),
  where: TagsOnBlogsWhereUniqueInputSchema,
}).strict() ;

export const TagsOnBlogsUpdateArgsSchema: z.ZodType<Prisma.TagsOnBlogsUpdateArgs> = z.object({
  select: TagsOnBlogsSelectSchema.optional(),
  include: TagsOnBlogsIncludeSchema.optional(),
  data: z.union([ TagsOnBlogsUpdateInputSchema,TagsOnBlogsUncheckedUpdateInputSchema ]),
  where: TagsOnBlogsWhereUniqueInputSchema,
}).strict() ;

export const TagsOnBlogsUpdateManyArgsSchema: z.ZodType<Prisma.TagsOnBlogsUpdateManyArgs> = z.object({
  data: z.union([ TagsOnBlogsUpdateManyMutationInputSchema,TagsOnBlogsUncheckedUpdateManyInputSchema ]),
  where: TagsOnBlogsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const TagsOnBlogsDeleteManyArgsSchema: z.ZodType<Prisma.TagsOnBlogsDeleteManyArgs> = z.object({
  where: TagsOnBlogsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;