import db from "../../db/db.js"

async function postGamesCheckDbMdw(req,res,next) {
    const {name,categoryId} = req.body;
    
    try {
    const queryCategorie = await db.query(`

    SELECT * FROM categories WHERE id = $1;

    `,[categoryId]);

    const category = queryCategorie.rows;

    if(!category[0]) {
        return res.sendStatus(400)
    }

    const queryGames = await db.query(`
    SELECT * FROM games WHERE name = $1
    `,[name]);

    const game = queryGames.rows;

    if(game[0]) {
        return res.sendStatus(409)
    }
    } catch(e) {
        return res.sendStatus(500);
    }

    next()
}
export default postGamesCheckDbMdw;