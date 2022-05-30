import db from "../../db/db.js"

async function putCustomersCtlr(req,res) {
     const {id} = req.params;
     const {name,phone,cpf,birthday} = req.body;
  try {
    await db.query(
      `
      UPDATE customers SET name = $1, phone = $2, cpf = $3, birthday = $4 WHERE id = $5;
    `,[name,phone,cpf,birthday,id]
    );

    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
}
export default putCustomersCtlr;