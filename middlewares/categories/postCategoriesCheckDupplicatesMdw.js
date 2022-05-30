import db from "../../db/db.js";

async function postCategoriesCheckDupplicatesMdw(req, res, next) {
  const name = req.body.name;

  try {
    const queryCategory = await db.query(
      `
        SELECT * FROM categories WHERE name = $1;
        `,
      [name]
    );

    const category = queryCategory.rows;

    if(category[0]) {
        return res.sendStatus(409);
    }
  } catch (e) {
    return res.sendStatus(500);
  }
  next();
}
export default postCategoriesCheckDupplicatesMdw;
