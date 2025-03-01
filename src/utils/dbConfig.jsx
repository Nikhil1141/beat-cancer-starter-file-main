import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
    "postgresql://neondb_owner:npg_i0xqSYHRyI8E@ep-black-salad-a8ovcfs2-pooler.eastus2.azure.neon.tech/beat_cancer?sslmode=require"
);
export const db = drizzle(sql, { schema });