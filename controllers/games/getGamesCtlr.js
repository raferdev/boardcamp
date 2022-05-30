import db from "../../db/db.js"

async function getGamesCtlr(req,res) {
    let name = req.query.name + "%";
    name = name[0].toUpperCase() + name.slice(1);

    if(name) {
        try {
            const queryGames = await db.query(`
            SELECT games.*, categories.name as "categoryName" FROM games JOIN categories ON "categoryId" = categories.id WHERE games.name LIKE $1 ;
            `,[name]);

            const games = queryGames.rows;
            return res.send(games)
        } catch(e) {
            console.log(e)
           return res.sendStatus(500)
        }
    }

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