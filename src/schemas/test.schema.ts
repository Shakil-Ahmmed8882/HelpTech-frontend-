import { z } from "zod";

const testSchemaValidation = z.object({
  name: z.string().nonempty("please provide your name")
});

export default testSchemaValidation;
