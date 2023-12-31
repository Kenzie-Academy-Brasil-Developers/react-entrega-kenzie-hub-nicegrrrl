import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().nonempty("Campo obrigatório"),
  password: z.string().nonempty("Campo obrigatório"),
});
