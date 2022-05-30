import joi from "joi";

function postCategoriesSchemaMdw(req, res, next) {
  const nameObj = req.body;

  const categoriesSchema = joi.object({
    name: joi.string().required(),
  });

  const validation = categoriesSchema.validate(nameObj, { abortEarly: false });

  if (validation.error) {
    return res.sendStatus(400);
  }

  next();
}

export default postCategoriesSchemaMdw;
