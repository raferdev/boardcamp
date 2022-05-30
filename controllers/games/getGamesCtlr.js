import db from "../../db/db.js"

async function getGamesCtlr(req,res) {

    try {
        const queryGames = await db.query(`

        SELECT games.*, categories.name as "categoryName" FROM games JOIN categories ON "categoryId" = categories.id;        
        
        `);

        const games = queryGames.rows;

        res.send(games);

    } catch(e) {
        res.sendStatus(500);
    }

}

export default getGamesCtlr;