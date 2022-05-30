import express from "express";
import getCustomersCtlr from "../controllers/customers/getCustomersCtlr.js";
import getCustomersIdCtlr from "../controllers/customers/getCustomersIdCtlr.js";
import postCustomersCtlr from "../controllers/customers/postCustomersCtlr.js";
import putCustomersCtlr from "../controllers/customers/putCustomersCtlr.js";
import postCustomersSchemaMdw from "../middlewares/customers/postCustomersSchemaMdw.js";
import postCustomersCpfMdw from "../middlewares/customers/postCustomersCpfMdw.js";
import putCustomersCpfMdw from "../middlewares/customers/putCustomersCpfMdw.js";

const customersRouter = express.Router();

customersRouter.get("/customers",getCustomersCtlr);
customersRouter.get("/customers/:id",getCustomersIdCtlr);
customersRouter.post("/customers",postCustomersSchemaMdw,postCustomersCpfMdw,postCustomersCtlr);
customersRouter.put("/customers/:id",postCustomersSchemaMdw,putCustomersCpfMdw,putCustomersCtlr);

export default customersRouter;