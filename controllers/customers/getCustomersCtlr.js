import db from "../../db/db.js"

async function getCustomersCtlr(req,res) {
  let cpf = req.query.cpf;
    
    if(cpf) {
        cpf += "%";
        try {
            const queryCustomers = await db.query(`
            SELECT * FROM customers WHERE cpf LIKE $1 ;
            `,[cpf]);

            const customers = queryCustomers.rows;
            return res.send(customers)
        } catch(e) {
            console.log(e)
           return res.sendStatus(500)
        }
    }
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