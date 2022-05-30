function rentalsPostCheckReturnMdw(req,res,next) {
    if(req.returnDate) {
        return res.sendStatus(400)
    }
    next();
}

export default rentalsPostCheckReturnMdw;