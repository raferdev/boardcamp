import db from "../../db/db.js"

async function deleteRentalsCtlr(req,res) {

    const {id} = req.params;

    try {
        await db.query(`
        DELETE FROM rentals WHERE id = $1
        `,[id])

        res.sendStatus(200)
    } catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
}
export default deleteRentalsCtlr;