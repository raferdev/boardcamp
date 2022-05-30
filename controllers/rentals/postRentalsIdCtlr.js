import dayjs from "dayjs";
import db from "../../db/db.js"


async function postRentalsIdCtlr(req,res) {
    const { id } = req.params;
    const daysRented = req.daysRented;
    const rentDate = req.rentDate;
    const originalPrice = req.originalPrice;

    const pricePerDay = originalPrice/daysRented;

    const dayLimit = dayjs(rentDate).add(daysRented, 'day').format("YYYY-MM-DD");
    const nDays = dayjs().diff(dayLimit,"d");
    const returnDate = dayjs().format("YYYY-MM-DD");

    const delayFee = 0;

    if(nDays>0) {
      delayFee = pricePerDay*nDays;
    }

    try {

      await db.query(
        `
      UPDATE rentals SET "returnDate" = $1, "delayFee" = $2 WHERE id = $3;;
      `,[returnDate,delayFee,id]
      );
  
      res.sendStatus(201);
    } catch (e) {
      console.log(e)
      res.sendStatus(500);
    }
}
export default postRentalsIdCtlr;