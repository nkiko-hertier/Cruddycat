
import router from "./lib/routes/main.js";
import { connectDb } from "./lib/db.conf.js";

export const Connect = connectDb;
export const Routes = (schema) => new router(schema);