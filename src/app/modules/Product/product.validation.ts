import { z } from 'zod';


const productValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required!' }),
    category: z.string({ required_error: 'Category is required!' }),
    description: z.string({ required_error: 'Description is required!' }),
    image: z.string().optional(),
    price: z.number({ required_error: 'Price is required!' }).positive(),
    brand: z.string({ required_error: 'Product brand is required!' }),
    rating: z.number({ required_error: 'Product rating is required!' }),
    stock: z.number({ required_error: 'Product stock is required!' })
  })
});

// Export the Zod schemas
export default productValidationSchema;
