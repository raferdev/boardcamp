import db from "../../db/db.js";

async function getCategoriesCtlr(req,res) {

    try {
        const queryCategories = await db.query(`
    
        SELECT (name) FROM categories;
    
        `);
        const categories = queryCategories.rows

        res.send(categories);
        } catch(e) {
            console.log(e)
        res.sendStatus(500);  
        }
    }
    
export default getCategoriesCtlr;