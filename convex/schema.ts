import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  reviews: defineTable({
    name:    v.string(),
    role:    v.string(),
    message: v.string(),
    rating:  v.number(),
  }),
})
