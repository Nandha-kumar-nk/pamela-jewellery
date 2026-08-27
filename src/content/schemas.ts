import { z } from 'zod';
export const schemas = {
  pages: {
    home: z.object({
      "featuredProducts": z.array(z.object({
        "id": z.string(),
        "name": z.string(),
        "subtitle": z.string(),
        "desc": z.string(),
        "price": z.string(),
        "image": z.string()
      }))
    }),
    sarees: z.object({
      "eyebrow": z.string(),
      "heading": z.string(),
      "body": z.string()
    })
  }
};
export type Schemas = typeof schemas;