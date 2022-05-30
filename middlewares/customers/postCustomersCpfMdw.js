import db from "../../db/db.js";

async function postCustomersCpfMdw(req, res, next) {
  const { cpf } = req.body;
  
  try {
    const queryCpf = await db.query(
      `
        SELECT * FROM customers WHERE cpf = $1;
        `,
      [cpf]
    );

    const duplicateCpf = queryCpf.rows;

    if (duplicateCpf[0]) {
      return res.sendStatus(409);
    }
  } catch (e) {
    return res.sendStatus(500);
  }
  next();
}
export default postCustomersCpfMdw;
