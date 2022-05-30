import db from "../../db/db.js";

async function postCustomersCtlr(req, res) {
  const { name, phone, cpf, birthday } = req.body;

  try {
    await db.query(
      `
    INSERT INTO customers (name,phone,cpf,birthday) VALUES ($1,$2,$3,$4);
    `,
      [name, phone, cpf, birthday]
    );

    res.sendStatus(201);
  } catch (e) {
    console.log(e)
    res.sendStatus(500);
  }
}

export default postCustomersCtlr;
