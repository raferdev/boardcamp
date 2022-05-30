import db from "../../db/db.js";


async function rentalsPostStockCheckMdw (req,res,next) {

    const {gameId} = req.body;
    const stock = req.stockTotal;

    try {
        const queryGame = await db.query(`
        SELECT * FROM rentals WHERE gameId = $1 and returnDate = null;
        `,[gameId]);
        const gameRentals = queryGame.rows.length;
        if(gameRentals>=stock) {
            return res.sendStatus(400);
        }



    } catch(e) {

    }
    next();

}
export default rentalsPostStockCheckMdw;