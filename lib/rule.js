import z from "zod";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const signInSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Les deux champs sont obligatoir" }),
  password: z
    .string()
    .trim()
    .min(1, { message: "Les deux champs sont obligatoir" }),
});

export const signUpSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, { message: "Le nom est obligatoir" })
      .min(3, { message: "Et le nom doit aumoins avoir 3 caracteres" }),
    email: z
      .string()
      .trim()
      .min(1, { message: "Le mail est obligatoir - " })
      .toLowerCase()
      .regex(EMAIL_REGEX, { message: "Cet email n'est pas valide" }),
    role: z.string().trim(),
    password: z
      .string()
      .min(1, { message: "Ce champ est obligatoir" })
      .min(5, { message: "Le mot de pass doit au mois avoir 5 caracteres" })
      .max(8, {
        message: "Le mot de pass de devrait pas depasser 8 caracteres",
      })
      .regex(/[a-zA-Z]/, {
        message: "Le Mot de pass doit aumois avoir une lettre",
      })
      .regex(/[0-9]/, {
        message: "Le Mot de pass doit aumois avoir un chiffre",
      })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Le Mot de pass doit aumois avoir un caractere special",
      })
      .trim(),
    confirmPassword: z.string().trim(),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Le mot de pass de correspond pas!",
        path: ["confirmPassword"],
      });
    }
  });
