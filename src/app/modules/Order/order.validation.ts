import { z } from 'zod';

const orderValidationSchema = z.object({
  body: z.object({
    productId: z.string({required_error: 'Must need a product to create order'}),
    quantity: z.number({required_error: 'Quantity is required'}),
    totalPrice: z.number().optional(),
    paymentMethod: z.string({required_error: 'Payment Method is required'})
  })
});

export default orderValidationSchema;
