import db from "../../db/db.js";

async function rentalsPostCheckIdMdw (req,res,next) {

    const {id} = req.params;

    try {

        const queryRentals = await db.query(`
        SELECT * FROM rentals WHERE id = $1;
        `,[id]);

        const rentals = queryRentals.rows;

        if(!rentals[0]) {
            return res.sendStatus(404);
        } else {
            req.returnDate = rentals[0].returnDate;
            req.daysRented = rentals[0].daysRented;
            req.rentDate = rentals[0].rentDate;
            req.originalPrice = rentals[0].originalPrice;
        }
    } catch(e) {
        res.sendStatus(500)
    }
    next();
}
export default rentalsPostCheckIdMdw;