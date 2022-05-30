import db from "../../db/db.js";

async function rentalsPostCheckMdw(req,res,next) {
    const { customerId, gameId } = req.body;

    try {

        const queryCustomer = await db.query(`
        SELECT * FROM customers WHERE id = $1;
        `,[customerId]);

        const customer = queryCustomer.rows;

        if(!customer[0]) {
            return res.sendStatus(400);
        }

        const queryGame = await db.query(`
        SELECT * FROM games WHERE id = $1;
        `,[gameId]);

        const game = queryGame.rows;

        if(!game[0]) {
            return res.sendStatus(400);
        } else {
            req.pricePerDay = game[0].pricePerDay;
        }
        

    } catch(e) {
    res.sendStatus(500)
    }
    next();
}

export default rentalsPostCheckMdw;