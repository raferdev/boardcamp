import db from "../../db/db.js"

async function getCustomersCtlr(req,res) {
    try {

      const queryCustomers = await db.query(
        `
      SELECT * FROM customers;
      `);

      const customers = queryCustomers.rows;

      res.send(customers);
    } catch (e) {
      console.log(e)
      res.sendStatus(500);
    }
}

export default getCustomersCtlr;