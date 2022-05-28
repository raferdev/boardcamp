import express from "express";
import getCustomersCtlr from "../controllers/customers/getCustomersCtlr.js";
import getCustomersIdCtlr from "../controllers/customers/getCustomersIdCtlr.js";
import postCustomersCtlr from "../controllers/customers/postCustomersCtlr.js";
import putCustomersCtlr from "../controllers/customers/putCustomersCtlr.js";

const customersRouter = express.Router();

customersRouter.get("/customers",getCustomersCtlr);
customersRouter.get("/customers/:id",getCustomersIdCtlr);
customersRouter.post("/customers",postCustomersCtlr);
customersRouter.put("/customers",putCustomersCtlr);

export default customersRouter;