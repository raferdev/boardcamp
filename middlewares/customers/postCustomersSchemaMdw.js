import joi from "joi";

function postCustomersSchemaMdw(req, res, next) {
  const customersObj = req.body;

  const customersSchema = joi.object({
    name: joi.string().required(),
    phone: joi
      .string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),
    cpf: joi
      .string()
      .length(11)
      .pattern(/^[0-9]+$/)
      .required(),
      birthday: joi.date().raw().less('now').required(),
  });

  const validation = customersSchema.validate(customersObj, {
    abortEarly: false,
  });

  if (validation.error) {
    return res.sendStatus(400);
  }

  next();
}
export default postCustomersSchemaMdw;
