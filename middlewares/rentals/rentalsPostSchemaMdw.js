import joi from "joi";

function rentalsPostSchemaMdw(req,res,next) {
    const rentalObj = req.body;

    const rentalSchema = joi.object({
        customerId: joi.number().min(0).required(),
        gameId: joi.number().min(0).required(),
        daysRented:joi.number().min(0).required(),
      });
    
      const validation = rentalSchema.validate(rentalObj, { abortEarly: false });
    
      if (validation.error) {
        return res.sendStatus(400);
      }
    
      next();

}

export default rentalsPostSchemaMdw;