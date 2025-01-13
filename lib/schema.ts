import * as z from "zod";

export const MarketingContactSchema = z.object({
  id: z.string().cuid(),
  filiais: z.string({ message: "Escolha uma filial Fradema!" }),

  outros: z.string().optional(),
  email: z.string().email({ message: "Email precisa ser válido!" }),
  empresa: z.string().optional(),
  nome: z
    .string({ message: "Campo requerido!" })
    .regex(/^[a-zA-Z]+$/, { message: "Formato Inválido" })
    .min(2, { message: "Nome é requerido!" }),
  cel: z
    .string()
    .regex(/^[0-9]*$/)
    .min(11, { message: "Celular deve ser no formato com DDD (xx)" }),
});

// const marketingContact = MarketingContactSchema.parse({
//   id: 1,
//   filiais: ["Fradema - RJ"],
//   outros: ["Web"],
//   email: "kxzww7@gmail.com",
//   empresa: "Arinelli",
//   nome: "Patrick",
//   cel: "21991026185",
// });
