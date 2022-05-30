import db from "../../db/db.js";


async function getRentalsCtlr(req,res) {

    const rentals = [];
    
   try {
    const queryRentals = await db.query(`
    SELECT json_build_object(
        'id', rentals.id,
        'customerId', rentals."customerId",
        'gameId', rentals."gameId",
        'rentDate', rentals."rentDate",
        'daysRented', rentals."daysRented",
        'returnDate', rentals."returnDate",
        'originalPrice',rentals."originalPrice",
        'delayFee', rentals."delayFee",
        'customer', json_build_object('id', customers.id, 'name',customers.name),
        'game', json_build_object('id', games.id, 'name', games.name, 'categoryId' ,games."categoryId",'categoryName', categories.name)
    ) FROM rentals JOIN customers ON "customerId" = customers.id JOIN games ON "gameId" = games.id JOIN categories ON "categoryId" = categories.id;   
    `);

    const rentalsKeys = queryRentals.rows;

    rentalsKeys.forEach(key => {
        rentals.push(key.json_build_object);
    });

    res.send(rentals)
   } catch(e) {
       console.log(e)
    res.sendStatus(500);
   }
}
export default getRentalsCtlr;