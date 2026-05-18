import { query, mutation } from './_generated/server'
import { v } from 'convex/values'

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('reviews').order('desc').collect()
  },
})

export const submit = mutation({
  args: {
    name:    v.string(),
    role:    v.string(),
    message: v.string(),
    rating:  v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert('reviews', args)
  },
})
