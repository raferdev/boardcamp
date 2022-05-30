import dayjs from "dayjs";
import db from "../../db/db.js"


async function postRentalsIdCtlr(req,res) {
    const { customerId, gameId, daysRented } = req.body;
    const originalPrice = (req.pricePerDay*daysRented);
    const rentDate = dayjs().format("YYYY-MM-DD");

    try {

      await db.query(
        `
      INSERT INTO rentals (customerId, gameId, rentDate,daysRented,originalPrice) VALUES ($1,$2,$3);
      `,
        [customerId, gameId,rentDate ,daysRented,originalPrice]
      );
  
      res.sendStatus(201);
    } catch (e) {
      console.log(e)
      res.sendStatus(500);
    }
}
export default postRentalsIdCtlr;