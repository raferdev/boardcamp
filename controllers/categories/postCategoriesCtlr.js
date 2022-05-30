import db from "../../db/db.js"

async function postCategoriesCtlr(req,res) {
    const name = req.body.name;
    try {
        
    await db.query(`

    INSERT INTO categories (name) VALUES ($1);

    `,[name]);

    res.sendStatus(201);
    } catch(e) {
        console.log(e)
    res.sendStatus(500);  
    }
}

export default postCategoriesCtlr;