import express from "express";
import getCustomersCtlr from "../controllers/customers/getCustomersCtlr.js";
import getCustomersIdCtlr from "../controllers/customers/getCustomersIdCtlr.js";
import postCustomersCtlr from "../controllers/customers/postCustomersCtlr.js";
import putCustomersCtlr from "../controllers/customers/putCustomersCtlr.js";
import postCustomersSchemaMdw from "../middlewares/customers/postCustomersSchemaMdw.js";

const customersRouter = express.Router();

customersRouter.get("/customers",getCustomersCtlr);
customersRouter.get("/customers/:id",getCustomersIdCtlr);
customersRouter.post("/customers",postCustomersSchemaMdw,postCustomersCtlr);
customersRouter.put("/customers/:id",putCustomersCtlr);

export default customersRouter;