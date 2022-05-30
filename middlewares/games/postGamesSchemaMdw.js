import joi from "joi";

function postGamesSchemaMdw(req,res,next) {
    const gameObj = req.body;

    const gameSchema = joi.object({
        name: joi.string().required(),
        image: joi.string(),
        stockTotal: joi.number().min(0).required(),
        categoryId:joi.number().min(0).required(),
        pricePerDay: joi.number().min(0).required(),

      });
    
      const validation = gameSchema.validate(gameObj, { abortEarly: false });
    
      if (validation.error) {
        return res.sendStatus(400);
      }
    
      next();
}

export default postGamesSchemaMdw;